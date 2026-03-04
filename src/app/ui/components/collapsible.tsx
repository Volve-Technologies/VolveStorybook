import { cn } from '@/app/utils/helpers';
import { Collapsible as CollapsiblePrimitive } from '@base-ui/react/collapsible';

function Collapsible({
  className,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return (
    <CollapsiblePrimitive.Root
      className={cn('flex w-full flex-col justify-center', className)}
      {...props}
    />
  );
}

function CollapsibleTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Trigger>) {
  return (
    <CollapsiblePrimitive.Trigger
      className={cn('group flex cursor-pointer items-center gap-1.5', className)}
      {...props}
    >
      {children}
    </CollapsiblePrimitive.Trigger>
  );
}

function CollapsiblePanel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Panel>) {
  return (
    <CollapsiblePrimitive.Panel className={cn('w-full', className)} {...props}>
      {children}
    </CollapsiblePrimitive.Panel>
  );
}

export { Collapsible, CollapsibleTrigger, CollapsiblePanel };
