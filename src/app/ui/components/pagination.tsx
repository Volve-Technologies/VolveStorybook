import { Button } from '@/app/ui/components/button';
import { cn } from '@/app/utils/helpers';
import {
  ArrowLeftDoubleIcon,
  ArrowLeftIcon,
  ArrowRightDoubleIcon,
  ArrowRightIcon,
  MoreHorizontalFreeIcons,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

function Pagination({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      aria-label="pagination"
      className={cn(
        'mx-auto flex border-t text-sm py-2 px-x md:px-6 w-full items-center gap-2 md:gap-5 flex-wrap justify-between',
        className,
      )}
      data-slot="pagination"
      {...props}
    />
  );
}

function PaginationContent({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul
      className={cn('flex flex-row items-center gap-1.5', className)}
      data-slot="pagination-content"
      {...props}
    />
  );
}

function PaginationItem({ ...props }: React.ComponentProps<'li'>) {
  return <li data-slot="pagination-item" {...props} />;
}

interface PaginationLinkProps extends React.ComponentProps<typeof Button> {
  isActive?: boolean;
}

function PaginationLink({ className, isActive, render, ...props }: PaginationLinkProps) {
  return (
    <Button
      kind={'icon'}
      variant={'secondary'}
      aria-current={isActive ? ('page' as const) : undefined}
      data-active={isActive}
      data-slot="pagination-link"
      {...props}
    />
  );
}

function PaginationFirst({ className, ...props }: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to first page"
      className={cn('max-sm:aspect-square max-sm:p-0', className)}
      {...props}
    >
      <HugeiconsIcon icon={ArrowLeftDoubleIcon} />
    </PaginationLink>
  );
}

function PaginationPrevious({ className, ...props }: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      className={cn('max-sm:aspect-square max-sm:p-0', className)}
      {...props}
    >
      <HugeiconsIcon icon={ArrowLeftIcon} />
    </PaginationLink>
  );
}

function PaginationNext({ className, ...props }: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      className={cn('max-sm:aspect-square max-sm:p-0', className)}
      {...props}
    >
      <HugeiconsIcon icon={ArrowRightIcon} />
    </PaginationLink>
  );
}

function PaginationLast({ className, ...props }: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to last page"
      className={cn('max-sm:aspect-square max-sm:p-0', className)}
      {...props}
    >
      <HugeiconsIcon icon={ArrowRightDoubleIcon} />
    </PaginationLink>
  );
}

function PaginationEllipsis({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      aria-hidden
      className={cn('flex min-w-7 justify-center', className)}
      data-slot="pagination-ellipsis"
      {...props}
    >
      <HugeiconsIcon icon={MoreHorizontalFreeIcons} className="size-5 sm:size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationFirst,
  PaginationPrevious,
  PaginationNext,
  PaginationLast,
  PaginationEllipsis,
};
