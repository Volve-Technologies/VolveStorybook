import { useRender } from '@base-ui/react/use-render';
import { cva, type VariantProps } from 'cva';
import { mergeProps } from '@base-ui/react/merge-props';
import { cn } from '@/app/utils/helpers';

const _BADGE_DEFAULT_TAG = 'span' satisfies React.ElementType;

const badge = cva({
  base: [
    'inline-flex items-center shadow-xs justify-center whitespace-nowrap [&>svg]:shrink-0 shrink-0',
  ],
  variants: {
    variant: {
      default: 'bg-white border',
      secondary: 'bg-surface-3 border',
      tertiary: 'bg-surface-3 shadow-none',
      'tertiary-accent': 'bg-primary-3 shadow-none text-primary-11',
      'tertiary-success': 'bg-green-3 shadow-none text-green-11',
      'tertiary-warning': 'bg-orange-3 shadow-none text-orange-11',
      'tertiary-destructive': 'bg-red-3 shadow-none text-red-11',
      destructive: 'bg-red-3 border border-red-5 text-red-11',
      warning: 'bg-orange-3 border border-orange-6 text-orange-11',
      success: 'bg-green-3 border border-green-5 text-green-11',
    },
    size: {
      xxs: 'h-5 px-1 gap-1 text-xs rounded-sm [&_svg:not([class*="size-"])]:size-4',
      xs: 'h-6 px-1.5 gap-1 text-xs rounded-md [&_svg:not([class*="size-"])]:size-4',
      sm: 'h-7 px-1.75 gap-1.5 text-[0.8rem] rounded-md [&_svg:not([class*="size-"])]:size-4.5',
      md: 'h-8 px-2 gap-2 text-sm rounded-md [&_svg:not([class*="size-"])]:size-4.5',
      lg: 'h-9 px-2.5 gap-2 text-sm rounded-md [&_svg:not([class*="size-"])]:size-5',
    },
    kind: {
      default: '',
      icon: 'px-0! aspect-square w-auto justify-center',
      count: 'size-4 text-[10px] rounded-sm group-[[aria-current=page]]:border-surface-5',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    kind: 'default',
  },
});

interface Props
  extends useRender.ComponentProps<typeof _BADGE_DEFAULT_TAG>,
    VariantProps<typeof badge> {}

export function Badge({ render, className, kind, variant, size, ...props }: Props) {
  const defaultProps: useRender.ElementProps<typeof _BADGE_DEFAULT_TAG> = {
    className: cn(badge({ variant, size, kind, className })),
    ['data-slot' as string]: 'badge',
  };

  return useRender({
    defaultTagName: _BADGE_DEFAULT_TAG,
    render,
    props: mergeProps<typeof _BADGE_DEFAULT_TAG>(defaultProps, props),
  });
}

const badgeDot = cva({
  base: ['size-2 rounded-[3px] inline-block shrink-0'],
  variants: {
    variant: {
      default: 'bg-background border',
      success: 'bg-success',
      warning: 'bg-warning',
      destructive: 'bg-destructive',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface BadgeDotProps extends React.ComponentProps<'span'>, VariantProps<typeof badgeDot> {}

export function BadgeDot({ className, variant, ...props }: BadgeDotProps) {
  return <span className={cn(badgeDot({ variant, className }))} {...props}></span>;
}
