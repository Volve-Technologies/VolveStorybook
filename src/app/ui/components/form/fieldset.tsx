import { cn } from '@/app/utils/helpers';
import { Fieldset as FieldsetPrimitive } from '@base-ui/react/fieldset';

function Fieldset({ className, ...props }: React.ComponentProps<typeof FieldsetPrimitive.Root>) {
  return (
    <FieldsetPrimitive.Root
      className={cn(
        'not-[[role="radiogroup"]]:space-y-3 md:not-[[role="radiogroup"]]:space-y-5',
        className,
      )}
      {...props}
    />
  );
}

function FieldsetLegend({
  className,
  ...props
}: React.ComponentProps<typeof FieldsetPrimitive.Legend>) {
  return (
    <FieldsetPrimitive.Legend
      className={cn('-mt-1 md:mb-5 mb-3 font-semibold text-lg', className)}
      {...props}
    />
  );
}

export { Fieldset, FieldsetLegend };
