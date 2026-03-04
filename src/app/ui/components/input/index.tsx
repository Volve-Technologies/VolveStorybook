import { input } from '@/app/ui/components/input/style';
import { cn } from '@/app/utils/helpers';
import { type VariantProps } from 'cva';

interface Props extends Omit<React.ComponentProps<'input'>, 'size'>, VariantProps<typeof input> {}

export function Input({ className, variant, size, ...props }: Props) {
  return (
    <input
      data-variant={variant}
      data-size={size}
      className={cn(
        input({ variant, size, className }),
        'read-only:bg-surface-3 focus:read-only:border-surface-6 read-only:border-surface-6',
      )}
      {...props}
    />
  );
}
