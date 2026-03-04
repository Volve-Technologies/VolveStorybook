'use client';

import { FieldLabel } from '@/app/ui/components/form/field';
import { cn } from '@/app/utils/helpers';
import { CheckboxGroup as CheckboxGroupPrimitive } from '@base-ui/react/checkbox-group';
import { Checkbox } from '@/app/ui/components/checkbox';

function CheckboxGroup({ className, ...props }: CheckboxGroupPrimitive.Props) {
  return (
    <CheckboxGroupPrimitive
      className={cn('flex flex-col items-start gap-2 space-y-0!', className)}
      data-slot="checkbox-group"
      {...props}
    />
  );
}

function CheckboxGroupLabel({ className, ...props }: React.ComponentProps<typeof FieldLabel>) {
  return (
    <FieldLabel
      className={cn('flex gap-3 cursor-pointer', className)}
      data-slot="checkbox-group-label"
      {...props}
    />
  );
}

function CheckboxGroupItemText({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('flex flex-col gap-1', className)}
      data-slot="checkbox-group-item-text"
      {...props}
    />
  );
}

function CheckboxGroupItemTitle({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn('font-medium -mt-px text-foreground', className)}
      data-slot="checkbox-group-item-title"
      {...props}
    />
  );
}

export {
  CheckboxGroup,
  Checkbox as CheckboxGroupItem,
  CheckboxGroupLabel,
  CheckboxGroupItemText,
  CheckboxGroupItemTitle,
};
