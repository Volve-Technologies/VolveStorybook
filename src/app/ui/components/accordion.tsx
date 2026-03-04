import { cn } from '@/app/utils/helpers';
import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion';
import { ArrowDownIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

function Accordion(props: AccordionPrimitive.Root.Props) {
  return <AccordionPrimitive.Root keepMounted data-slot="accordion" {...props} />;
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item className={cn('', className)} data-slot="accordion-item" {...props} />
  );
}

function AccordionTrigger({ className, children, ...props }: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn('grow items-center group gap-1.5 flex cursor-pointer', className)}
        data-slot="accordion-trigger"
        {...props}
      >
        {children}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionTriggerIcon({
  className,
  ...props
}: Omit<React.ComponentProps<typeof HugeiconsIcon>, 'icon'>) {
  return (
    <HugeiconsIcon
      className={cn('size-3.5 group-data-panel-open:rotate-180 transition-transform', className)}
      icon={ArrowDownIcon}
      {...props}
    />
  );
}

function AccordionPanel({ className, children, ...props }: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      className={cn(
        'grid duration-200 overflow-clip transition-all data-closed:scale-[99%] data-open:scale-100 data-closed:grid-rows-[0fr] data-open:grid-rows-[1fr] data-closed:opacity-0 data-open:blur-opacity-100',
        className,
      )}
      data-slot="accordion-panel"
      {...props}
    >
      <div className="min-h-0">{children}</div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionTriggerIcon, AccordionPanel };
