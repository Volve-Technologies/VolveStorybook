import { cva } from 'cva';

export const dialogPopup = cva({
  base: 'group shadow-xl transition-all flex flex-col rounded-lg bg-surface-2 data-nested:border',
  variants: {
    variant: {
      default: [
        'md:max-h-[80svh] max-h-[94svh] duration-200 p-3 pt-1 data-ending-style:scale-98 data-starting-style:scale-98 data-ending-style:opacity-0 data-starting-style:opacity-0',
        'md:-mt-6 -translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 max-w-[calc(100vw-2.5rem)] will-change-transform',
      ],
      sidebar:
        'fixed top-[calc(var(--header-height)+0.5rem)] left-2 bottom-2 duration-450 ease-smooth data-starting-style:-translate-x-[110%] data-ending-style:-translate-x-[110%]',
    },
    size: {
      xs: 'w-76',
      sm: 'w-100',
      md: 'w-120',
      lg: 'w-146',
      xl: 'w-180',
      '2xl': 'w-210',
      '3xl': 'w-232',
      stepper: 'w-232 max-md:rounded-none max-md:max-w-full max-md:max-h-full max-md:h-full pt-3',
      viewport: 'md:mt-0 mt-0 h-svh max-h-svh md:max-h-svh w-full max-w-full rounded-none',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
  compoundVariants: [
    {
      variant: 'sidebar',
      className: 'w-56 lg:w-60',
    },
  ],
});
