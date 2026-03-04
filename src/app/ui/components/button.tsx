import { Spinner } from '@/app/ui/components/spinner';
import { focus } from '@/app/ui/focus';
import { cn } from '@/app/utils/helpers';
import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { cva, type VariantProps } from 'cva';

const button = cva({
  base: [
    'touch-hitbox inline-flex cursor-pointer items-center justify-center whitespace-nowrap',
    'relative disabled:cursor-not-allowed disabled:opacity-75 transition [&_svg]:shrink-0',
    focus.base,
  ],
  variants: {
    variant: {
      primary:
        'bg-primary-9 text-white hover:bg-primary-9/90 shadow-sm border border-primary-11 active:bg-primary-9',
      secondary:
        'border hover:bg-surface-2 data-popup-open:bg-surface-2 shadow-xs bg-white active:bg-surface-3',
      tertiary: 'hover:bg-surface-4 data-popup-open:bg-surface-4 bg-surface-3 active:bg-surface-4',
      'tertiary-2':
        'border hover:bg-surface-5 data-popup-open:bg-surface-6 shadow-xs bg-surface-4 active:bg-surface-6',
      ghost:
        'hover:bg-surface-3 aria-[current=page]:bg-surface-4 data-selected:bg-surface-4 data-popup-open:bg-surface-4 active:bg-surface-4 aria-expanded:bg-surface-4',
      'ghost-accent':
        'hover:bg-primary-3 text-primary-10 aria-[current=page]:bg-primary-3 data-popup-open:bg-primary-3 active:bg-primary-3',
      'ghost-destructive':
        'hover:bg-red-3 hover:text-red-11 aria-[current=page]:bg-red-3 data-popup-open:bg-red-3 data-selected:text-red-11 data-selected:[&_svg:not([class*="text-"])]:fill-red-4',
      'ghost-success':
        'hover:bg-green-3 hover:text-green-11 aria-[current=page]:bg-green-3 data-popup-open:bg-green-3 data-selected:text-green-11 data-selected:[&_svg:not([class*="text-"])]:fill-green-4',
      destructive:
        'bg-destructive text-white hover:bg-destructive/90 shadow-sm border border-red-11 active:bg-red-11',
      success: 'bg-success text-white hover:bg-success/90 shadow-sm border border-green-11',
      link: 'border-b border-muted/60 hover:border-foreground text-muted hover:text-foreground justify-start',
      accent: 'text-blue-11 hover:text-blue-10 justify-start',
      unstyled: 'justify-start px-0!',
    },
    size: {
      xs: 'h-6 gap-1 [&_span:not([class*="gap-"])]:gap-1 px-2 text-xs [&_svg:not([class*="size-"])]:size-4 rounded-md',
      sm: 'h-7 gap-1.5 [&_span:not([class*="gap-"])]:gap-1.5 px-2.5 text-sm [&_svg:not([class*="size-"])]:size-4 rounded-md',
      md: 'h-8 gap-1.5 [&_span:not([class*="gap-"])]:gap-1.5 px-3 [&_svg:not([class*="size-"])]:size-4 rounded-md text-sm md:text-xs',
      lg: 'h-9 gap-2.5 [&_span:not([class*="gap-"])]:gap-2.5 px-3.5 text-sm [&_svg:not([class*="size-"])]:size-4.5 [&[role=combobox]]:[&_svg:not([class*="size-"])]:size-4 rounded-md',
      xl: 'h-10 gap-3 [&_span:not([class*="gap-"])]:gap-3 px-4 text-sm [&_svg:not([class*="size-"])]:size-5.5 rounded-lg',
    },
    kind: {
      default: '',
      icon: 'px-0! aspect-square w-auto justify-center',
      'with-icon': '',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    kind: 'default',
  },
  compoundVariants: [
    {
      variant: 'link',
      className: 'px-0 h-auto w-fit gap-1 rounded-none',
    },
    {
      size: 'md',
      kind: 'icon',
      className: '[&_svg:not([class*="size-"])]:size-4.5',
    },
    {
      size: 'xs',
      kind: 'with-icon',
      className:
        '[&:has(>svg:first-child)]:pl-1.5 [&:has(>span>svg:first-child)]:pl-1.5 [&:has(>svg:last-child)]:pr-1.5 [&:has(>span>svg:last-child)]:pr-1.5',
    },
    {
      size: 'sm',
      kind: 'with-icon',
      className:
        '[&:has(>svg:first-child)]:pl-1.75 [&:has(>span>svg:first-child)]:pl-1.75 [&:has(>svg:last-child)]:pr-1.75 [&:has(>span>svg:last-child)]:pr-1.75',
    },
    {
      size: 'md',
      kind: 'with-icon',
      className:
        '[&:has(>svg:first-child)]:pl-2.25 [&:has(>span>svg:first-child)]:pl-2.25 [&:has(>svg:last-child)]:pr-2.25 [&:has(>span>svg:last-child)]:pr-2.25',
    },
    {
      size: 'lg',
      kind: 'with-icon',
      className:
        '[&:has(>svg:first-child)]:pl-3 [&:has(>span>svg:first-child)]:pl-3 [&:has(>svg:last-child)]:pr-3 [&:has(>span>svg:last-child)]:pr-3',
    },
  ],
});

interface Props extends React.ComponentProps<'button'>, VariantProps<typeof button> {
  pending?: boolean | undefined;
  nativeButton?: ButtonPrimitive.Props['nativeButton'];
  render?: ButtonPrimitive.Props['render'];
}

export function Button({
  variant,
  children,
  size,
  kind,
  pending,
  disabled,
  className,
  ...props
}: Props) {
  return (
    <ButtonPrimitive
      data-slot="button"
      data-pending={pending ? '' : undefined}
      data-variant={variant}
      data-size={size}
      disabled={disabled ?? !!pending}
      className={cn(button({ variant, size, kind, className }))}
      {...props}
    >
      {pending === undefined ? (
        children
      ) : (
        <>
          <span
            className={
              'invisible flex h-full items-center justify-center data-active:visible data-active:opacity-100 data-inactive:opacity-0'
            }
            data-active={!pending ? '' : undefined}
            data-inactive={pending ? '' : undefined}
          >
            {children}
          </span>
          <span
            data-active={pending ? '' : undefined}
            className={
              'invisible absolute inset-0 m-auto block h-fit opacity-0 data-active:visible data-active:opacity-100'
            }
          >
            <Spinner size={size} className="mx-auto" />
          </span>
        </>
      )}
    </ButtonPrimitive>
  );
}
