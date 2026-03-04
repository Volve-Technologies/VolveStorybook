import { focus } from '@/app/ui/focus';
import { cn } from '@/app/utils/helpers';
import { Switch as SwitchPrimitive } from '@base-ui/react/switch';
import { cva, type VariantProps } from 'cva';

const switchVariants = cva({
  base: [
    'touch-hitbox group/switch inline-flex shrink-0 items-center rounded-full p-px outline-none transition-all cursor-pointer data-checked:bg-primary-10 data-unchecked:bg-surface-6 hover:data-unchecked:bg-surface-7 data-disabled:opacity-75',
    focus.base,
  ],
  variants: {
    size: {
      sm: 'h-4.5 w-8',
      md: 'h-5.5 w-9.5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const thumbVariants = cva({
  base: [
    'pointer-events-none block rounded-full bg-white shadow-xs transition-[translate,width] duration-200 data-unchecked:translate-x-0',
  ],
  variants: {
    size: {
      sm: 'size-4 data-checked:translate-x-3.5 group-active/switch:not-data-disabled:w-4.5 data-checked:group-active/switch:translate-x-3',
      md: 'size-5 data-checked:translate-x-4 group-active/switch:not-data-disabled:w-5.5 data-checked:group-active/switch:translate-x-3.5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

interface SwitchProps
  extends React.ComponentProps<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchVariants> {}

export function Switch({ className, size, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root className={cn(switchVariants({ size, className }))} {...props}>
      <Thumb size={size} />
    </SwitchPrimitive.Root>
  );
}

interface ThumbProps
  extends React.ComponentProps<typeof SwitchPrimitive.Thumb>,
    VariantProps<typeof thumbVariants> {}

function Thumb({ className, size, ...props }: ThumbProps) {
  return <SwitchPrimitive.Thumb className={cn(thumbVariants({ size, className }))} {...props} />;
}
