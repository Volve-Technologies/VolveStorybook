import { cn } from '@/app/utils/helpers';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function BottomNavigation(props: React.ComponentProps<'nav'>) {
  return (
    <nav
      className="fixed bottom-0 z-2 flex h-(--bottom-navigation-height) w-full items-center border-t bg-background px-1.5 shadow-xs md:hidden"
      {...props}
    />
  );
}

export function BottomNavigationList({ className, ...props }: React.ComponentProps<'ul'>) {
  return <ul className={cn('flex justify-around grow items-center', className)} {...props} />;
}

export function BottomNavigationLink({
  className,
  href,
  isActive: _isActive,
  ...props
}: React.ComponentProps<typeof Link> & { isActive?: boolean }) {
  const pathname = usePathname();
  const isActive =
    _isActive === undefined
      ? href === '/'
        ? pathname === href
        : pathname.startsWith(href.toString())
      : _isActive;

  return (
    <li className="flex justify-center">
      <Link
        href={href}
        data-slot="sidebar-link"
        aria-current={isActive ? 'page' : undefined}
        className={cn(
          'group relative inline-flex h-10 [&_svg]:mb-px [&_svg]:size-5 [&_svg]:shrink-0 flex-col text-center items-center justify-center rounded-md font-semibold text-[0.7625rem] text-foreground/60 leading-tight aria-[current=page]:text-primary-10',
          className,
        )}
        {...props}
      />
    </li>
  );
}
