import { cva } from 'cva';

export const menuItem = cva({
  base: [
    'flex h-8 cursor-pointer whitespace-nowrap select-none aria-disabled:hover:bg-transparent aria-disabled:cursor-not-allowed aria-disabled:opacity-70 items-center gap-2 rounded-[calc(var(--popup-radius)-var(--popup-padding))] px-2.25 text-sm transition-colors focus-visible:outline-hidden data-highlighted:border-transparent data-highlighted:bg-surface-3 data-popup-open:bg-surface-3 data-highlighted:outline-none data-highlighted:outline-hidden [&_svg:not([class*="size-"])]:size-4 [&_svg:not([class*="text-"])]:text-foreground/75 [&_svg]:shrink-0 [&_svg]:transition-colors not-aria-disabled:data-highlighted:[&_svg:not([class*="text-"])]:text-foreground data-[popup-open]:[&_svg:not([class*="text-"])]:text-foreground',
  ],
  variants: {
    variant: {
      default: '',
      checkbox: 'flex min-w-[calc(var(--anchor-width)+1.25rem)] items-center gap-2',
      destructive:
        'data-highlighted:bg-red-3 data-highlighted:text-red-12 data-highlighted:[&_svg:not([class*="text-"])]:text-red-12',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
