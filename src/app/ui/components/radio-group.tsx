'use client';

import { FieldLabel } from '@/app/ui/components/form/field';
import { cn } from '@/app/utils/helpers';
import { Radio as RadioPrimitive } from '@base-ui/react/radio';
import { RadioGroup as RadioGroupPrimitive } from '@base-ui/react/radio-group';

function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
  return (
    <RadioGroupPrimitive
      className={cn(
        'space-y-2 has-data-[slot="radio-group-item-description"]:space-y-3',
        className,
      )}
      data-slot="radio-group"
      {...props}
    />
  );
}

function RadioGroupLabel({ className, ...props }: React.ComponentProps<typeof FieldLabel>) {
  return (
    <FieldLabel className={cn('flex gap-3', className)} data-slot="radio-group-labael" {...props} />
  );
}

function Radio({ className, ...props }: RadioPrimitive.Root.Props) {
  return (
    <RadioPrimitive.Root
      className={cn(
        'relative inline-flex size-4.5 mt-0.5 shrink-0 items-center justify-center rounded-full border bg-background bg-clip-padding shadow-xs outline-none transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-full not-data-disabled:not-data-checked:not-aria-invalid:before:shadow-[0_1px_--theme(--color-black/4%)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background aria-invalid:border-destructive/36 focus-visible:aria-invalid:border-destructive/64 focus-visible:aria-invalid:ring-destructive/48 data-disabled:opacity-64 sm:size-4 [[data-disabled],[data-checked],[aria-invalid]]:shadow-none',
        className,
      )}
      data-slot="radio"
      {...props}
    >
      <RadioPrimitive.Indicator
        className="-inset-px absolute flex size-4.5 items-center justify-center rounded-full before:size-2 before:rounded-full before:bg-white data-unchecked:hidden data-checked:bg-foreground sm:size-4 sm:before:size-1.5"
        data-slot="radio-indicator"
      />
    </RadioPrimitive.Root>
  );
}

function RadioGroupItemText({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('flex flex-col gap-1', className)}
      data-slot="radio-group-item-text"
      {...props}
    />
  );
}

function RadioGroupItemTitle({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn('font-medium text-foreground', className)}
      data-slot="radio-group-item-title"
      {...props}
    />
  );
}

function RadioGroupItemDescription({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn('text-sm text-muted', className)}
      data-slot="radio-group-item-description"
      {...props}
    />
  );
}

export {
  RadioGroup,
  Radio,
  RadioGroupLabel,
  Radio as RadioGroupItem,
  RadioGroupItemText,
  RadioGroupItemTitle,
  RadioGroupItemDescription,
};
