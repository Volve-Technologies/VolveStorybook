'use client';
import { useAtom, useSetAtom } from 'jotai';
import { useContext, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from '@/app/ui/components/accordion';
import { sidebarStateAtom } from '@/app/ui/components/sidebar/store';
import { cn } from '@/app/utils/helpers';
import { Badge } from '@/app/ui/components/badge';
import { usePathname, useRouter } from 'next/navigation';
import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuSubmenuTrigger,
  MenuTrigger,
  MenuTriggerIcon,
  Submenu,
} from '@/app/ui/components/menu';
import { useTranslations } from 'next-intl';
import { AppContext } from '@/app/appContext';
import routes from '@/app/utils/routes';
import { useAuth } from '@/app/utils/auth';
import { queryKeys, UserRole } from '@/app/utils/constants';
import { OrganizationAvatar } from '@/app/ui/components/organization-avatar';
import {
  ArrowRightIcon,
  CustomerSupportIcon,
  Logout01Icon,
  MessageMultiple01Icon,
  SettingsIcon,
  SidebarRightIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Button } from '@/app/ui/components/button';
import { useUpdateLoggedUserDefaultOrganization } from '@/app/hooks/queries/useUsers';
import { useQueryClient } from '@tanstack/react-query';
import { ScrollArea } from '@/app/ui/components/scroll-area';
import {
  Dialog,
  DialogCancel,
  DialogContent,
  DialogPopup,
  DialogScrollArea,
} from '@/app/ui/components/dialog';
import { UserAvatar } from '@/app/ui/components/user-avatar';
import { Stack, StackItem } from '@/app/ui/components/stack';
import { Card } from '@/app/ui/components/card';
import { welcomeToNewUiOpen, closedStackItemsAtom } from '@/app/ui/store';
import { WelcomeToNewUiDialog } from '@/app/components/shared/WelcomeToNewUiDialog';
import { Cancel01Icon } from '@hugeicons/core-free-icons';
import useUserRoles from '@/app/hooks/useUserRoles';

export function Sidebar({ className, ...props }: React.ComponentProps<'div'>) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [state, setState] = useAtom(sidebarStateAtom);
  const hoverTriggerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShouldAnimate(true);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div
        data-slot="sidebar"
        data-should-animate={shouldAnimate ? '' : undefined}
        data-expanded={state === 'expanded' ? '' : undefined}
        data-collapsed={state === 'collapsed' || state === 'floating' ? '' : undefined}
        className={cn(
          'w-(--sidebar-width) [--sidebar-width:calc(var(--spacing)*56)] lg:[--sidebar-width:calc(var(--spacing)*60)] shrink-0 max-md:hidden h-svh flex flex-col transform-gpu data-should-animate:transition-[width] transition-none overflow-hidden duration-300 ease-smooth data-collapsed:w-0',
          className,
        )}
        {...props}
      />
      {(state === 'collapsed' || state === 'floating') && (
        <>
          <div
            ref={hoverTriggerRef}
            onMouseOver={() => {
              if (state === 'collapsed') setState('floating');
            }}
            className="fixed left-0 top-0 bottom-0 w-(--main-margin) z-40 max-md:hidden"
            aria-hidden="true"
          />
          <Dialog
            open={state === 'floating'}
            onOpenChange={(open) => setState(open ? 'floating' : 'collapsed')}
          >
            <DialogPopup
              onMouseOut={(e) => {
                const sidebarEl = sidebarRef.current;
                if (state !== 'floating' || !sidebarEl) return;
                const rect = sidebarEl.getBoundingClientRect();

                if (e.clientX > rect.right || e.clientX < rect.left - 8) {
                  setState('collapsed');
                }
              }}
              ref={sidebarRef}
              variant="sidebar"
              className="flex flex-col pr-2"
            >
              {props.children}
            </DialogPopup>
          </Dialog>
        </>
      )}
    </>
  );
}

export function SidebarContent({ className, ...props }: React.ComponentProps<'div'>) {
  const { userMeta } = useContext(AppContext);
  if (!userMeta.organizationId) return null;

  return (
    <ScrollArea
      data-slot="sidebar-content"
      viewportClassName={cn('p-3 pr-1 w-(--sidebar-width) grow space-y-3 flex flex-col', className)}
      {...props}
    />
  );
}

export function SidebarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof SidebarHeaderButton>) {
  const [state, setState] = useAtom(sidebarStateAtom);

  return (
    <SidebarHeaderButton
      data-state={state}
      data-floating={state === 'floating' ? '' : undefined}
      className={cn(
        'data-floating:opacity-0 data-floating:delay-0 data-floating:w-0 data-floating:pointer-events-none data-state-collapsed:delay-450',
        className,
      )}
      onClick={() => {
        setState((prev) => {
          if (prev === 'expanded') return 'collapsed';
          return 'expanded';
        });
      }}
      {...props}
    >
      <HugeiconsIcon icon={SidebarRightIcon} />
    </SidebarHeaderButton>
  );
}

export function SidebarHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-slot="sidebar-header" className={cn('flex justify-between', className)} {...props} />
  );
}

export function SidebarHeaderButton(props: React.ComponentProps<typeof Button>) {
  return <Button data-slot="sidebar-header-button" variant="ghost" kind="icon" {...props} />;
}

export function SidebarHeading({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="sidebar-heading"
      className={cn('font-medium text-xs mb-2 text-muted pl-2', className)}
      {...props}
    />
  );
}

export function SidebarList({ className, ...props }: React.ComponentProps<'ul'>) {
  return <ul data-slot="sidebar-list" className={cn('space-y-1', className)} {...props} />;
}

export function SidebarListEmpty({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="sidebar-list-empty"
      className={cn('text-muted text-sm pt-1 pl-2', className)}
      {...props}
    />
  );
}

export function SidebarItem({ className, ...props }: React.ComponentProps<'li'>) {
  return <li data-slot="sidebar-item" className={cn(className)} {...props} />;
}

export function SidebarLink({
  className,
  isActive: _isActive,
  href,
  ...props
}: React.ComponentProps<typeof Link> & {
  isActive?: boolean;
}) {
  const pathname = usePathname();
  const isActive =
    _isActive === undefined
      ? href === '/'
        ? pathname === href
        : pathname.startsWith(href.toString())
      : _isActive;

  return (
    <Link
      href={href}
      data-slot="sidebar-link"
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'flex group [&>svg]:size-4 whitespace-nowrap [&>svg]:shrink-0 grow items-center gap-2 h-8 px-2 hover:bg-surface-3 [[aria-current=page]]:bg-surface-4 rounded-md text-sm',
        className,
      )}
      {...props}
    />
  );
}

export function SidebarLinkIconButton({ className, ...props }: React.ComponentProps<'button'>) {
  return (
    <Button
      variant="ghost"
      kind="icon"
      size="xs"
      data-slot="sidebar-link-icon-button"
      className={cn(
        'hover:bg-surface-5 ml-auto -mr-1 group-hover:visible rounded-sm invisible',
        className,
      )}
      {...props}
    />
  );
}

export function SidebarLinkBadge({ className, ...props }: React.ComponentProps<typeof Badge>) {
  return <Badge kind="count" className={cn('ml-auto', className)} {...props} />;
}

export function SidebarHelpButton({ className, ...props }: React.ComponentProps<'a'>) {
  const t = useTranslations('components.sidebar');

  return (
    <a
      href="mailto:help@volvetech.com"
      id="intercom"
      data-slot="sidebar-help-button"
      className={cn(
        'flex [&>svg]:size-4 justify-start cursor-pointer [&>svg]:shrink-0 grow items-center gap-2 h-8 px-2 hover:bg-surface-3 rounded-md text-sm w-full',
        className,
      )}
      {...props}
    >
      <HugeiconsIcon icon={CustomerSupportIcon} />
      {t('help')}
    </a>
  );
}

export function SidebarUserMenu({ className, ...props }: React.ComponentProps<typeof MenuTrigger>) {
  const t = useTranslations('components.headernav');
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const { userMeta } = useContext(AppContext);
  const { logout } = useAuth();
  const handleSignOut = () => {
    logout();
  };

  const setOpen = useSetAtom(welcomeToNewUiOpen);
  const [closedItems, setClosedItems] = useAtom(closedStackItemsAtom);

  const handleClose = (itemId: string) => {
    setClosedItems((prev) => [...prev, itemId]);
  };

  return (
    <div className="mt-auto">
      <WelcomeToNewUiDialog />
      <Stack
        className="mb-6 data-has-one:mb-3"
        data-has-one={closedItems.length !== 0 ? '' : undefined}
      >
        {!closedItems.includes('learnings') && (
          <StackItem
            render={
              <Card className="text-sm p-2.5 pt-1.5 relative">
                <Button
                  variant="ghost"
                  kind="icon"
                  size="xs"
                  className="absolute top-1 right-1"
                  onClick={() => handleClose('learnings')}
                >
                  <HugeiconsIcon icon={Cancel01Icon} className="size-4" />
                </Button>
                <p className="font-medium text-muted flex items-center gap-1.5">What’s new</p>
                <Button className="mt-2" variant="tertiary" size="xs" onClick={() => setOpen(true)}>
                  Volve learnings
                </Button>
              </Card>
            }
          />
        )}
        <StackItem
          render={
            <Card className="text-sm p-2.5 pt-1.5">
              <p className="font-medium mb-2 flex items-center gap-1.5">
                <HugeiconsIcon icon={MessageMultiple01Icon} className="size-4" />
                Got feedback?
              </p>
              <Button variant="tertiary" size="xs" onClick={() => setFeedbackOpen(true)}>
                Let us know
              </Button>
            </Card>
          }
        />
      </Stack>
      <Dialog open={feedbackOpen} onOpenChange={setFeedbackOpen}>
        <DialogPopup className={'pt-3'}>
          <DialogContent className="text-center">
            <DialogScrollArea>
              <p className="font-medium mb-3">Got feedback?</p>
              <p className="mb-3 text-muted">Please send it to us, we will read every message.</p>
              <p className="mb-3 text-muted">
                Reply in chat or email our designer directly{' '}
                <a
                  href="mailto:matt@volvetech.com"
                  className="text-blue-11 underline hover:text-blue-10"
                >
                  matt@volvetech.com
                </a>
              </p>
              <DialogCancel size="lg" className={'w-full shrink-0'}>
                Okay, got it!
              </DialogCancel>
            </DialogScrollArea>
          </DialogContent>
        </DialogPopup>
      </Dialog>
      <SidebarHelpButton />
      <Menu>
        <MenuTrigger
          data-slot="sidebar-user-menu"
          className={cn('flex text-left mt-2 gap-2 h-10 pl-1!', className)}
          render={<Button variant="ghost" />}
          {...props}
        >
          <UserAvatar
            size={30}
            user={{ ...userMeta, name: `${userMeta.firstName} ${userMeta.lastName}` }}
          />
          <div>
            <p className="font-semibold leading-tight text-sm line-clamp-1">
              {userMeta.firstName} {userMeta.lastName}
            </p>
            <p className="text-muted text-xs line-clamp-1">{userMeta.email}</p>
          </div>
          <MenuTriggerIcon />
        </MenuTrigger>
        <MenuPopup className={'w-(--anchor-width)'}>
          <MenuItem
            render={
              <Link href={routes.SETTINGS}>
                <HugeiconsIcon icon={SettingsIcon} />
                {t('settings')}
              </Link>
            }
          />
          <MenuItem variant="destructive" onClick={() => handleSignOut()}>
            <HugeiconsIcon icon={Logout01Icon} />
            {t('logout')}
          </MenuItem>
        </MenuPopup>
      </Menu>
    </div>
  );
}

export function SidebarOrganizationMenu({
  className,
  ...props
}: React.ComponentProps<typeof MenuTrigger>) {
  const t = useTranslations();
  const tHeaderNav = useTranslations('components.headernav');
  const queryClient = useQueryClient();
  const [revalidationLoading, setRevalidationLoading] = useState(false);
  const router = useRouter();
  const { userMeta } = useContext(AppContext);
  const { checkIsRoleAvailable } = useUserRoles();
  const { mutateAsync } = useUpdateLoggedUserDefaultOrganization();

  const refreshQueries = async () => {
    setRevalidationLoading(true);
    await queryClient.invalidateQueries({ queryKey: [queryKeys.IS_USER_ON_BOARD] });
    await queryClient.invalidateQueries({ queryKey: [queryKeys.TENDER_PACKAGES] });
    await queryClient.invalidateQueries({ queryKey: [queryKeys.PROJECTS] });
    setRevalidationLoading(false);
    router.push(routes.DEFAULT_ROUTE);
  };
  const showOptions = !!userMeta.defaultOrganizationIsEnabled && !!userMeta.isAccountEnabled;

  return (
    <Menu>
      <MenuTrigger
        data-slot="sidebar-organization-menu"
        className={cn('flex text-left text-sm! font-medium pl-1!', className)}
        render={<Button variant="ghost" />}
        {...props}
      >
        <OrganizationAvatar
          organization={{
            id: userMeta.organizationId ?? '',
            name: userMeta.organizationName ?? '',
          }}
          size={24}
          className="rounded-[calc(var(--radius-md)-0.125rem)]"
        />
        <span className="line-clamp-1">{userMeta.organizationName}</span>
        <MenuTriggerIcon />
      </MenuTrigger>
      <MenuPopup align="start" className={'w-50'}>
        <MenuItem render={<Link href={routes.SETTINGS}>{tHeaderNav('settings')}</Link>} />
        {showOptions && checkIsRoleAvailable(UserRole.SYSTEM_ADMIN) && (
          <MenuItem
            render={
              <Link href={routes.ADMIN_ORGANIZATIONS}>{tHeaderNav('adminOrganizations')}</Link>
            }
          />
        )}
        <MenuSeparator />
        <Submenu>
          <MenuSubmenuTrigger>{t('components.changeOrganizationModal.header')}</MenuSubmenuTrigger>
          <MenuPopup>
            <MenuRadioGroup
              value={userMeta.organizationId}
              onValueChange={async (orgId) => {
                await mutateAsync(orgId);
                router.push(routes.DEFAULT_ROUTE);
                await refreshQueries();
              }}
            >
              {userMeta.organizations.map((o) => (
                <MenuRadioItem
                  key={o.organizationId}
                  disabled={!o.isEnabled || revalidationLoading}
                  value={o.organizationId}
                >
                  <OrganizationAvatar
                    organization={{ id: o.organizationId, name: o.organizationName }}
                    size={24}
                    className="rounded-[calc(var(--radius-md)-0.125rem)]"
                  />
                  {o.organizationName}{' '}
                  {!o.isEnabled && (
                    <>&mdash; {t('components.changeOrganizationModal.organizationUnavailable')}</>
                  )}
                </MenuRadioItem>
              ))}
            </MenuRadioGroup>
          </MenuPopup>
        </Submenu>
      </MenuPopup>
    </Menu>
  );
}

export function SidebarAccordion({ className, ...props }: React.ComponentProps<typeof Accordion>) {
  return <Accordion data-slot="sidebar-accordion" className={cn('', className)} {...props} />;
}

export function SidebarAccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionTrigger>) {
  return (
    <AccordionTrigger
      data-slot="sidebar-accordion-trigger"
      className={cn('relative grid group/accordion-trigger place-items-center size-4', className)}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      {...props}
    >
      <span className="place-items-center absolute">{children}</span>
      <span className="hidden group-hover/accordion-trigger-link:grid bg-surface-5 group-hover/accordion-trigger:bg-surface-7 transition-colors size-4.5 rounded-sm -top-px -left-px z-2 place-items-center absolute">
        <HugeiconsIcon
          icon={ArrowRightIcon}
          className="size-3.5 group-data-panel-open/accordion-trigger:rotate-90 transition-transform"
        />
      </span>
    </AccordionTrigger>
  );
}

export function SidebarAccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionItem>) {
  return (
    <AccordionItem data-slot="sidebar-accordion-item" className={cn('', className)} {...props} />
  );
}

export function SidebarAccordionPanel({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPanel>) {
  return (
    <AccordionPanel
      data-slot="sidebar-accordion-panel"
      className={cn('pl-2 ml-3.75 border-l', className)}
      {...props}
    />
  );
}

