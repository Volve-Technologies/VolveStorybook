import { cva, type VariantProps } from 'cva';

const spinner = cva({
  base: ['block animate-spin opacity-90 text-current'],
  variants: {
    size: {
      '2xs': 'size-3',
      xs: 'size-3.5',
      sm: 'size-3.75',
      md: 'size-4',
      lg: 'size-4.25',
      xl: 'size-4.5',
    },
    kind: {
      default: 'relative',
      inset: 'inset-0 absolute m-auto -translate-y-6',
    },
  },
  defaultVariants: {
    size: 'md',
    kind: 'default',
  },
  compoundVariants: [
    {
      kind: 'inset',
      className: 'size-5',
    },
  ],
});

interface Props extends React.ComponentProps<'svg'>, VariantProps<typeof spinner> {}

export function Spinner({ className, size, kind, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-slot="spinner"
      className={spinner({ size, kind, className })}
      {...props}
    >
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2.25" />
      <circle
        cx="8"
        cy="8"
        r="7"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeDasharray="45"
        strokeDashoffset="30"
      />
    </svg>
  );
}
