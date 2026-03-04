import { AppContext } from '@/app/appContext';
import { useUpdateLoggedUserDefaultOrganization } from '@/app/hooks/queries/useUsers';
import { OrganizationAvatar } from '@/app/ui/components/organization-avatar';
import { Button } from '@/app/ui/components/button';
import {
  Menu,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuPopup,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuSubmenuTrigger,
  MenuTrigger,
  Submenu,
} from '@/app/ui/components/menu';
import { Separator } from '@/app/ui/components/separator';
import { sidebarStateAtom } from '@/app/ui/components/sidebar/store';
import { sidechatOpenAtom } from '@/app/components/shared/Sidechat/store';
import { useCopyToClipboard } from '@/app/ui/hooks/use-copy-to-clipboard';
import { queryKeys, UserRole } from '@/app/utils/constants';
import { cn } from '@/app/utils/helpers';
import routes from '@/app/utils/routes';
import {
  ArrowLeft02Icon,
  Logout01Icon,
  SettingsIcon,
  Tick02Icon,
  Link04Icon,
  ArrowLeftIcon,
  ArrowRightIcon,
  SidebarRightIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { useQueryClient } from '@tanstack/react-query';
import { useAtom, useSetAtom } from 'jotai';
import { useAuth } from '@/app/utils/auth';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext, useMemo, useState } from 'react';
import { Group, GroupItem, GroupSeparator } from '@/app/ui/components/group';
import { UserAvatar } from '@/app/ui/components/user-avatar';
import { MobileChat } from '@/app/components/shared/MobileChat';
import useUserRoles from '@/app/hooks/useUserRoles';
import { toastManager } from '@/app/ui/components/toast';
import { LogoIcon } from '@/app/ui/components/logo';

export function Header({ className, children, ...props }: React.ComponentProps<'header'>) {
  return (
    <header
      className={cn(
        'z-5 h-(--header-height) grid md:flex shrink-0 items-center gap-1 grid-cols-[minmax(0,40px)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,40px)] border-b bg-background-main md:gap-1.5 px-1 md:px-x',
        className,
      )}
      {...props}
    >
      {children}
    </header>
  );
}

export function HeaderButton({ className, ...props }: React.ComponentProps<typeof Button>) {
  return (
    <Button
      variant={'ghost'}
      kind={'icon'}
      size={'xl'}
      // sm on desktop
      className={cn(
        'md:h-7 md:hidden md:[&_svg:not([class*="size-"])]:size-4 md:rounded-md',
        className,
      )}
      {...props}
    />
  );
}

export function useHeaderNav<T extends { id: string }>(
  items: T[],
  currentId: string,
  baseRoute: string,
) {
  const router = useRouter();

  const currentIndex = useMemo(
    () => items.findIndex((item) => item.id === currentId),
    [items, currentId],
  );

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevId = items[currentIndex - 1].id;
      router.push(`${baseRoute}/${prevId}`);
    }
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      const nextId = items[currentIndex + 1].id;
      router.push(`${baseRoute}/${nextId}`);
    }
  };

  return {
    handlePrevious,
    handleNext,
    isPreviousDisabled: currentIndex <= 0,
    isNextDisabled: currentIndex >= items.length - 1,
    currentIndex,
  };
}

export function HeaderNav({ className, ...props }: React.ComponentProps<typeof Group>) {
  return <Group className={cn('ml-1 max-md:hidden', className)} {...props} />;
}

export function HeaderPrevNavButton({ className, ...props }: React.ComponentProps<typeof Button>) {
  return (
    <>
      <GroupItem
        render={
          <Button variant={'secondary'} kind={'icon'} size={'sm'} {...props}>
            <HugeiconsIcon icon={ArrowLeftIcon} />
          </Button>
        }
      />
      <GroupSeparator />
    </>
  );
}

export function HeaderNextNavButton({ className, ...props }: React.ComponentProps<typeof Button>) {
  return (
    <>
      <GroupItem
        render={
          <Button variant={'secondary'} kind={'icon'} size={'sm'} {...props}>
            <HugeiconsIcon icon={ArrowRightIcon} />
          </Button>
        }
      />
    </>
  );
}

export function HeaderBackButton({
  className,
  href,
  ...props
}: React.ComponentProps<typeof Button> & { href?: string }) {
  const router = useRouter();

  return (
    <HeaderButton
      className={cn('ml-auto md:hidden', className)}
      aria-label="Go back"
      onClick={() => (href ? router.push(href) : router.back())}
      {...props}
    >
      <HugeiconsIcon icon={ArrowLeft02Icon} className="size-6" />
    </HeaderButton>
  );
}

export function HeaderSidechatButton({ className, ...props }: React.ComponentProps<typeof Button>) {
  const t = useTranslations('general');
  const [sidechatOpen, setSidechatOpen] = useAtom(sidechatOpenAtom);
  const setSidebarState = useSetAtom(sidebarStateAtom);

  return (
    <Button
      className={cn('ml-auto max-md:hidden', className)}
      kind="with-icon"
      size="sm"
      variant="ghost"
      aria-expanded={sidechatOpen}
      onClick={() => {
        setSidechatOpen((prev) => !prev);
        if (typeof window !== 'undefined' && window.innerWidth < 1440) {
          if (!sidechatOpen) return setSidebarState('collapsed');
          setSidebarState('expanded');
        }
      }}
      {...props}
    >
      <LogoIcon />
      {t('askAi')}
    </Button>
  );
}

export function HeaderMobileChatButton() {
  return <MobileChat />;
}

export function HeaderCopyButton({ className, ...props }: React.ComponentProps<typeof Button>) {
  const copy = useCopyToClipboard();
  const tGeneral = useTranslations('general');

  return (
    <HeaderButton
      className={cn('ml-auto hidden md:inline-flex', className)}
      aria-label={copy.copied ? 'URL copied' : 'Copy URL'}
      onClick={() => {
        copy.trigger(window.location.href);
        toastManager.add({
          type: 'info',
          title: tGeneral('notifications.urlCopied'),
        });
      }}
      {...props}
    >
      <HugeiconsIcon icon={copy.copied ? Tick02Icon : Link04Icon} />
    </HeaderButton>
  );
}

export function HeaderOrganizationMenu({
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
    setRevalidationLoading(false);
    router.push(routes.DEFAULT_ROUTE);
  };
  const showOptions = !!userMeta.defaultOrganizationIsEnabled && !!userMeta.isAccountEnabled;

  return (
    <Menu>
      <MenuTrigger
        data-slot="header-organization-menu"
        className={cn('flex text-left md:hidden text-sm rounded-lg font-medium', className)}
        render={<Button variant="ghost" kind="icon" size="xl" />}
        {...props}
      >
        <OrganizationAvatar
          organization={{
            id: userMeta.organizationId ?? '',
            name: userMeta.organizationName ?? '',
          }}
          size={32}
          className="rounded-md"
        />
      </MenuTrigger>
      <MenuPopup align="start">
        <MenuGroup>
          <MenuGroupLabel className={'mb-2'}>{userMeta.organizationName}</MenuGroupLabel>
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
            <MenuSubmenuTrigger>
              {t('components.changeOrganizationModal.header')}
            </MenuSubmenuTrigger>
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
                    {o.organizationName}{' '}
                    {!o.isEnabled && (
                      <>&mdash; {t('components.changeOrganizationModal.organizationUnavailable')}</>
                    )}
                  </MenuRadioItem>
                ))}
              </MenuRadioGroup>
            </MenuPopup>
          </Submenu>
        </MenuGroup>
      </MenuPopup>
    </Menu>
  );
}

export function HeaderUserMenu({ className, ...props }: React.ComponentProps<typeof MenuTrigger>) {
  const t = useTranslations('components.headernav');
  const { userMeta } = useContext(AppContext);
  const { logout } = useAuth();
  const handleSignOut = () => {
    logout();
  };

  return (
    <Menu>
      <MenuTrigger
        data-slot="header-user-menu"
        className={cn('flex text-left md:hidden gap-2 h-10', className)}
        render={<Button variant="ghost" kind="icon" size="xl" />}
        {...props}
      >
        <UserAvatar
          className={'rounded-md'}
          size={30}
          user={{ ...userMeta, name: userMeta.firstName + ' ' + userMeta.lastName }}
        />
      </MenuTrigger>
      <MenuPopup align="end">
        <MenuGroup>
          <MenuGroupLabel className={'mb-2'}>
            <span className="font-medium text-sm line-clamp-1">
              {userMeta.firstName} {userMeta.lastName}
            </span>
            <span className="text-muted text-xs line-clamp-1">{userMeta.email}</span>
          </MenuGroupLabel>
          <MenuSeparator />
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
        </MenuGroup>
      </MenuPopup>
    </Menu>
  );
}

export function HeaderSidebarTrigger({ ...props }: React.ComponentProps<typeof Button>) {
  const [sidebarState, setSidebarState] = useAtom(sidebarStateAtom);

  return (
    <div className="has-aria-expanded:hidden flex items-center max-md:hidden">
      <Button
        variant="ghost"
        kind="icon"
        size="sm"
        aria-expanded={sidebarState === 'expanded'}
        onClick={() => setSidebarState((prev) => (prev === 'collapsed' ? 'expanded' : 'collapsed'))}
        {...props}
      >
        <HugeiconsIcon icon={SidebarRightIcon} />
      </Button>
      <Separator orientation="vertical" className={'my-auto h-4 mx-1 max-md:hidden'} />
    </div>
  );
}
