import { ScrollArea } from '@/app/ui/components/scroll-area';
import { cn } from '@/app/utils/helpers';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/app/ui/components/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeftIcon, Link04Icon, Tick02Icon } from '@hugeicons/core-free-icons';
import { useCopyToClipboard } from '@/app/ui/hooks/use-copy-to-clipboard';

export function Main({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <main
      className={cn(
        'flex grow flex-col relative h-svh overflow-hidden overflow-x-hidden bg-white md:mt-(--main-margin) md:mx-(--main-margin) md:h-[calc(100svh-calc(var(--main-margin)*2))] md:grow md:rounded-lg md:border',
        className,
      )}
    >
      {children}
    </main>
  );
}

export function MainScrollArea({
  viewportClassName,
  ...props
}: React.ComponentProps<typeof ScrollArea>) {
  return (
    <ScrollArea
      viewportClassName={cn(
        'absolute inset-0 min-w-0 scroll-py-4 has-[[data-slot="table"]]:flex has-[[data-slot="table"]]:flex-col max-md:pb-[calc(var(--bottom-navigation-height))]',
        viewportClassName,
      )}
      {...props}
    />
  );
}

export function MainContainer({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('w-full @container px-x pt-4 pb-8', className)} {...props} />;
}

export function MainFrames({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('grid @3xl:grid-cols-2 gap-3 @3xl:gap-5 @7xl:grid-cols-3', className)}
      {...props}
    />
  );
}

export function MainHeader({ children, className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'max-md:hidden flex items-center gap-2 justify-between w-full px-x py-3.5',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function MainHeaderCopyButton({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const copy = useCopyToClipboard();

  return (
    <Button
      aria-label={copy.copied ? 'URL copied' : 'Copy URL'}
      onClick={() => copy.trigger(window.location.href)}
      variant="ghost"
      kind="icon"
      {...props}
    >
      <HugeiconsIcon icon={copy.copied ? Tick02Icon : Link04Icon} />
    </Button>
  );
}

export function MainHeaderBackButton({
  children,
  className,
  href,
  ...props
}: React.ComponentProps<typeof Button> & { href?: string }) {
  const router = useRouter();

  return (
    <Button
      aria-label="Go back"
      onClick={() => (href ? router.push(href) : router.back())}
      variant="ghost"
      kind="icon"
      className={cn('max-md:hidden w-7 mr-2 -ml-1.75', className)}
      {...props}
    >
      <HugeiconsIcon icon={ArrowLeftIcon} className="size-5" />
    </Button>
  );
}

export function MainActions({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="main-actions"
      className={cn(
        'shrink-0 min-h-11 mb-4 has-data-[variant="ghost"]:mb-0 gap-x-1.5 gap-y-1 has-data-[variant="ghost"]:border-b md:has-data-[variant="ghost"]:border-y lg:has-data-[variant="ghost"]:pl-[calc(var(--padding-x)-var(--spacing)*1.75)] lg:flex py-2 has-[input:not([data-slot="combobox-input"])]:py-1.5 grid items-center justify-between',
        className,
      )}
      {...props}
    />
  );
}

export function MainActionsScrollArea({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="main-actions-scroll-area"
      className={cn(
        'flex items-center min-w-0 gap-1.5 max-lg:px-1.75 col-span-2 scrollbar-hidden overflow-x-auto order-3',
        className,
      )}
      {...props}
    />
  );
}

export function MainNav({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      data-slot="main-nav"
      className={cn(
        'flex px-x py-2 lg:py-4 relative z-1 lg:pt-0 max-lg:border-b md:has-[+[data-slot="main-actions"]]:border-b-0 lg:has-[+[data-slot="main-actions"]]:border-b-0 has-data-[variant="ghost"]:pl-[calc(var(--padding-x)-var(--spacing)*1.75)]',
        className,
      )}
      {...props}
    />
  );
}

export function MainNavList({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="main-nav-list"
      className={cn('flex gap-1 overflow-x-auto scrollbar-hidden', className)}
      {...props}
    />
  );
}

export function MainNavItem({ className, ...props }: React.ComponentProps<'li'>) {
  return <li data-slot="main-nav-item" className={cn('[&_svg]:size-4', className)} {...props} />;
}

interface MainNavLinkProps extends React.ComponentProps<typeof Link> {
  active?: boolean;
}

export function MainNavLink({ className, children, href, active, ...props }: MainNavLinkProps) {
  const pathname = usePathname();

  const isActive = active ?? pathname === href;

  return (
    <Button
      nativeButton={false}
      variant="ghost"
      size="sm"
      render={
        <Link
          href={href}
          data-slot="main-nav-link"
          aria-current={isActive ? 'page' : undefined}
          className={cn(
            'flex text-muted hover:bg-surface-3 hover:text-foreground aria-[current=page]:bg-surface-3 aria-[current=page]:text-foreground h-7 pl-1.75 pr-2 rounded-md items-center gap-1.5',
            className,
          )}
          {...props}
        >
          {children}
        </Link>
      }
    />
  );
}
