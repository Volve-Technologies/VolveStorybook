import { input } from '@/app/ui/components/input/style';
import { cn } from '@/app/utils/helpers';
import { Field as FieldPrimitive } from '@base-ui/react/field';
import { NumberField as NumberFieldPrimitive } from '@base-ui/react/number-field';
import { type VariantProps } from 'cva';

function Field({
  className,
  children,
  ...props
}: React.ComponentProps<typeof FieldPrimitive.Root>) {
  return (
    <FieldPrimitive.Root className={cn('relative w-full', className)} {...props}>
      {children}
    </FieldPrimitive.Root>
  );
}

function FieldItem({ className, ...props }: React.ComponentProps<typeof FieldPrimitive.Item>) {
  return <FieldPrimitive.Item className={cn('', className)} {...props} />;
}

function FieldLabel({ className, ...props }: React.ComponentProps<typeof FieldPrimitive.Label>) {
  return (
    <FieldPrimitive.Label
      className={cn('mb-2 text-sm inline-block font-medium', className)}
      {...props}
    />
  );
}

function FieldError({ className, ...props }: React.ComponentProps<typeof FieldPrimitive.Error>) {
  return (
    <FieldPrimitive.Error
      className={cn('mt-1 text-xs inline-block text-destructive', className)}
      {...props}
    />
  );
}

type FieldControlProps = Omit<React.ComponentProps<typeof FieldPrimitive.Control>, 'size'> &
  VariantProps<typeof input>;

const FieldControlUnstyled = FieldPrimitive.Control;

function FieldControl({ className, variant, size, ...props }: FieldControlProps) {
  return (
    <FieldPrimitive.Control
      className={cn(
        input({ variant, size, className }),
        'read-only:bg-surface-3 focus:read-only:border-surface-6 read-only:border-surface-6',
      )}
      {...props}
    />
  );
}

function FieldNumberControl({
  children,
  placeholder,
  className,
  ...props
}: React.ComponentProps<typeof NumberFieldPrimitive.Root> & {
  placeholder?: string | undefined;
}) {
  return (
    <NumberFieldPrimitive.Root inputMode="numeric" className={cn('w-full', className)} {...props}>
      <NumberFieldPrimitive.ScrubArea>
        <NumberFieldPrimitive.ScrubAreaCursor />
      </NumberFieldPrimitive.ScrubArea>
      <NumberFieldPrimitive.Group>
        <NumberFieldPrimitive.Decrement />
        <NumberFieldPrimitive.Input placeholder={placeholder} className={input()} />
        <NumberFieldPrimitive.Increment />
      </NumberFieldPrimitive.Group>
    </NumberFieldPrimitive.Root>
  );
}

function FieldDescription({
  className,
  ...props
}: React.ComponentProps<typeof FieldPrimitive.Description>) {
  return (
    <FieldPrimitive.Description className={cn('mt-2 text-muted text-sm', className)} {...props} />
  );
}

function FieldGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('space-y-4', className)} {...props} />;
}

export {
  Field,
  FieldItem,
  FieldLabel,
  FieldError,
  FieldControl,
  FieldControlUnstyled,
  FieldNumberControl,
  FieldDescription,
  FieldGroup,
};

export type { FieldControlProps };
