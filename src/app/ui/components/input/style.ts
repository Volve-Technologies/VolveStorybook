import { cva } from 'cva';

export const input = cva({
  base: ['w-full rounded-md outline-hidden transition'],
  variants: {
    variant: {
      default:
        'border border-surface-6 shadow-xs bg-white disabled:opacity-75 placeholder:text-foreground/70 focus:border-primary-10 data-invalid:border-destructive data-invalid:focus:border-destructive data-invalid:placeholder:text-destructive/75',
      ghost: 'bg-transparent placeholder:text-foreground/70',
      unstyled: 'h-auto bg-transparent placeholder:text-foreground/70',
    },
    size: {
      sm: 'h-8 px-2 text-sm [[type=time]]:px-2',
      md: 'h-9 px-3 text-sm [[type=time]]:px-2.5',
      lg: 'h-10 px-3.5 text-sm [[type=time]]:px-3',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
  compoundVariants: [{ variant: 'unstyled', class: 'px-0' }],
});
