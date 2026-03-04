import { HeaderButton } from '@/app/ui/components/header';
import { Icons } from '@/app/ui/components/icons';
import { Menu, MenuItem, MenuPopup, MenuTrigger } from '@/app/ui/components/menu';
import { cn } from '@/app/utils/helpers';
import routes from '@/app/utils/routes';
import { Building06Icon, MoreHorizontalIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Breadcrumb({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      aria-label="breadcrumb"
      data-slot="breadcrumb"
      className={cn('max-md:mx-auto col-start-2 col-end-5 row-start-1', className)}
      {...props}
    />
  );
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<'ol'>) {
  return (
    <ol
      className={cn(
        'wrap-break-word flex items-center text-muted text-[0.9rem] md:text-sm gap-1',
        className,
      )}
      data-slot="breadcrumb-list"
      {...props}
    />
  );
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      className={cn(
        'inline-flex items-center whitespace-nowrap gap-1.5 [&_svg]:size-4.5 md:[&_svg]:size-3.75 only:text-foreground last:text-foreground font-medium',
        className,
      )}
      data-slot="breadcrumb-item"
      {...props}
    />
  );
}

function BreadcrumbLink({ className, ...props }: React.ComponentProps<typeof Link>) {
  return (
    <Link
      data-slot="breadcrumb-link"
      className={cn(
        'hover:text-foreground [&>svg]:shrink-0 inline-flex items-center gap-1.5',
        className,
      )}
      {...props}
    />
  );
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      aria-current="page"
      aria-disabled="true"
      className={cn(
        'text-foreground [&>svg]:shrink-0 [&:not(:has(svg)):not(.tabular-nums)]:line-clamp-1 has-[svg]:inline-flex has-[svg]:items-center has-[svg]:gap-1.5',
        className,
      )}
      data-slot="breadcrumb-page"
      role="link"
      {...props}
    />
  );
}

function BreadcrumbSeparator({ children, className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      aria-hidden="true"
      data-slash={!children ? '' : undefined}
      className={cn(
        'text-muted font-medium',
        // 1. DEFAULT STATE: Show Slash, Hide Pipe
        '[&>.sep-slash]:block [&>.sep-pipe]:hidden',
        // 2. THE LOGIC:
        // If I am the separator before the last item: [&:nth-last-child(2)...]
        // AND I am NOT the very first separator: [...:not(:nth-child(2))...]
        // THEN: Hide Slash, Show Pipe
        '[&:nth-last-child(2):not(:nth-child(2))>.sep-slash]:hidden',
        '[&:nth-last-child(2):not(:nth-child(2))>.sep-pipe]:block',
        className,
      )}
      data-slot="breadcrumb-separator"
      role="presentation"
      {...props}
    >
      <span className="sep-slash">{children ?? <Icons.slash className="size-4" />}</span>

      <span className="sep-pipe mx-0.5">|</span>
    </li>
  );
}

function BreadcrumbMenu({
  className,
  children,
  ...props
}: React.ComponentProps<typeof HeaderButton>) {
  const t = useTranslations('pages');
  const pathname = usePathname();

  return (
    <Menu>
      <MenuTrigger
        nativeButton={false}
        render={
          <HeaderButton
            nativeButton={false}
            render={<li />}
            className={cn('md:flex max-md:hidden -mr-1 -ml-1.5', className)}
            {...props}
          >
            <HugeiconsIcon icon={MoreHorizontalIcon} className="size-5.5 md:size-5" />
          </HeaderButton>
        }
      />
      <MenuPopup align="start">
        {children}
        {pathname.includes(routes.NEW_PROJECT) ? (
          <BreadcrumbMenuItem href={`${routes.HOME}`}>
            <HugeiconsIcon icon={Building06Icon} />
            {t('homepage.breadcrumbs.projects')}
          </BreadcrumbMenuItem>
        ) : null}
      </MenuPopup>
    </Menu>
  );
}

function BreadcrumbMenuItem({ className, children, ...props }: React.ComponentProps<typeof Link>) {
  return (
    <MenuItem
      render={
        <Link className={cn('', className)} href={props.href}>
          {children}
        </Link>
      }
    />
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbMenu,
  BreadcrumbMenuItem,
};
