import { cn } from '@/app/utils/helpers';
import { cva, type VariantProps } from 'cva';

export function Empty({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex min-w-0 flex-1 absolute inset-0 has-data-[slot="progress"]:size-full size-fit not-has-data-[slot="progress"]:m-auto flex-col justify-center items-center gap-6 text-balance rounded-xl border-dashed px-6 text-center max-md:justify-center',
        className,
      )}
      data-slot="empty"
      {...props}
    />
  );
}

const emptyMedia = cva({
  base: 'flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0',
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: {
      default: 'bg-transparent [&_svg]:size-36',
      icon: "relative flex size-9 [&_svg:not([class*='size-'])]:size-6 shrink-0 items-center justify-center rounded-md border bg-background text-foreground shadow-black/5 shadow-xs",
    },
  },
});

interface EmptyMediaProps extends React.ComponentProps<'div'>, VariantProps<typeof emptyMedia> {}

export function EmptyMedia({ className, variant = 'default', ...props }: EmptyMediaProps) {
  return (
    <div
      className={cn('relative', className)}
      data-slot="empty-media"
      data-variant={variant}
      {...props}
    >
      {variant === 'icon' && (
        <>
          <div
            aria-hidden="true"
            className={cn(
              emptyMedia({ className, variant }),
              '-translate-x-0.5 -rotate-10 pointer-events-none absolute bottom-px origin-bottom-left scale-84 shadow-none',
            )}
          />
          <div
            aria-hidden="true"
            className={cn(
              emptyMedia({ className, variant }),
              'pointer-events-none absolute bottom-px origin-bottom-right translate-x-0.5 rotate-10 scale-84 shadow-none',
            )}
          />
        </>
      )}
      <div className={cn(emptyMedia({ className, variant }))} {...props} />
    </div>
  );
}

export function EmptyTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('text-xl font-medium leading-none', className)}
      data-slot="empty-title"
      {...props}
    />
  );
}

export function EmptyDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <div
      className={cn(
        'text-muted text-sm/relaxed mb-3 [&>a]:underline [&>a]:underline-offset-4 [[data-slot=empty-title]+&]:mt-1',
        className,
      )}
      data-slot="empty-description"
      {...props}
    />
  );
}

export function EmptyContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex w-full min-w-0 max-w-sm mb-4 flex-col items-center gap-2 text-balance text-sm',
        className,
      )}
      data-slot="empty-content"
      {...props}
    />
  );
}
