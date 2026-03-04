'use client';
import Link from 'next/link';
import { cn } from '@/app/utils/helpers';
import { usePathname } from 'next/navigation';
import { Button } from '@/app/ui/components/button';
import { useScrollSpyContext, useScrollSpyStore } from '@/app/ui/components/scroll-spy';
import * as React from 'react';
import { ScrollArea } from '@/app/ui/components/scroll-area';

export function Sidenav({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidenav"
      className={cn('shrink-0 xl:w-68 lg:w-56 flex flex-col', className)}
      {...props}
    />
  );
}

export function SidenavEmpty({ className, ...props }: React.ComponentProps<'p'>) {
  return <p data-slot="sidenav-empty" className={cn('text-sm text-muted', className)} {...props} />;
}

export function SidenavHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidenav-header"
      className={cn('px-3 min-h-11 items-center border-b flex justify-between', className)}
      {...props}
    />
  );
}

export function SidenavHeading({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p data-slot="sidenav-heading" className={cn('text-muted text-sm', className)} {...props} />
  );
}

interface SidenavListProps extends React.ComponentProps<'ul'> {
  viewportClassName?: string;
  scrollable?: boolean;
}

export function SidenavList({
  className,
  scrollable = true,
  viewportClassName,
  ...props
}: SidenavListProps) {
  if (!scrollable)
    return (
      <ul
        data-slot="sidenav-list"
        className={cn('gap-1 w-full max-lg:items-center p-3 flex lg:flex-col min-h-0', className)}
        {...props}
      />
    );

  return (
    <ScrollArea
      className="md:grow min-h-0 min-w-0"
      orientation="both"
      viewportClassName={viewportClassName}
    >
      <ul
        data-slot="sidenav-list"
        className={cn('gap-1 w-full max-lg:items-center p-3 flex lg:flex-col min-h-0', className)}
        {...props}
      />
    </ScrollArea>
  );
}

export function SidenavItem({ className, ...props }: React.ComponentProps<'li'>) {
  return <li data-slot="sidenav-item" className={cn(className)} {...props} />;
}

interface SidenavLinkProps extends Omit<React.ComponentProps<typeof Link>, 'href'> {
  active?: boolean;
  href?: string;
  value?: string;
}

export function SidenavLink({
  className,
  children,
  href,
  value,
  active,
  onClick,
  ...props
}: SidenavLinkProps) {
  const pathname = usePathname();

  // Try to get scroll spy context - it's optional
  let scrollSpyContext: ReturnType<typeof useScrollSpyContext> | null = null;
  let activeValue: string | null = null;

  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    scrollSpyContext = useScrollSpyContext();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    activeValue = useScrollSpyStore((state) => state.value);
  } catch {
    // Not in scroll spy context, use regular navigation
  }

  const isScrollSpyActive = scrollSpyContext && value && activeValue === value;
  const isPathActive = href && (active ?? pathname === href);
  const isActive = isScrollSpyActive || isPathActive;

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (scrollSpyContext && value) {
        event.preventDefault();
        scrollSpyContext.onScrollToSection(value);
      }
      onClick?.(event);
    },
    [scrollSpyContext, value, onClick],
  );

  return (
    <Button
      nativeButton={false}
      variant="ghost"
      size="lg"
      render={
        <Link
          href={href ?? `#${value}`}
          data-slot="sidenav-link"
          aria-current={isActive ? 'page' : undefined}
          className={cn('font-medium w-full justify-start', className)}
          onClick={handleClick}
          {...props}
        >
          <span className="lg:line-clamp-1">{children}</span>
        </Link>
      }
    />
  );
}

interface SidenavButtonProps extends React.ComponentProps<typeof Button> {
  active?: boolean;
}

export function SidenavButton({ className, active, ...props }: SidenavButtonProps) {
  return (
    <Button
      data-selected={active ? '' : undefined}
      size="lg"
      variant="ghost"
      data-slot="sidenav-button"
      className={cn('font-medium w-full group/sidenav-button justify-start', className)}
      {...props}
    />
  );
}
