import { focus } from '@/app/ui/focus';
import { cn } from '@/app/utils/helpers';
import { Tabs as TabsPrimitive } from '@base-ui/react/tabs';
import { cva, type VariantProps } from 'cva';

function Tabs({ className, ...props }: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      className={cn('flex flex-col data-[orientation=vertical]:flex-row', className)}
      data-slot="tabs"
      {...props}
    />
  );
}

function TabsList({ className, children, ...props }: TabsPrimitive.List.Props) {
  return (
    <div className="border-b has-[+form[class*='border']]:border-b-0 has-data-[variant=secondary]:border-b-0">
      <TabsPrimitive.List
        className={cn(
          'relative z-0 max-w-full flex w-fit group/tabslist items-center overflow-x-auto scrollbar-hidden justify-start gap-x-0.5',
          'data-[orientation=vertical]:flex-col',
          'data-[orientation=vertical]:px-1 data-[orientation=horizontal]:py-1.25',
          className,
        )}
        data-slot="tabs-list"
        {...props}
      >
        {children}
        <TabsPrimitive.Indicator
          className={cn(
            '-translate-y-(--active-tab-bottom) group-has-data-[variant=secondary]/tabslist:hidden absolute bottom-px left-0 h-(--active-tab-height) w-(--active-tab-width) translate-x-(--active-tab-left) transition-[width,translate] duration-200 ease-in-out',
            'data-[orientation=vertical]:-translate-x-px z-10 bg-foreground data-[orientation=horizontal]:h-0.5 data-[orientation=vertical]:w-0.5 data-[orientation=horizontal]:translate-y-px',
          )}
          data-slot="tab-indicator"
        />
      </TabsPrimitive.List>
    </div>
  );
}

const tabsTab = cva({
  base: [
    "[&_svg]:-mx-0.5 flex shrink-0 cursor-pointer items-center px-2 font-[450] justify-center gap-1.5 whitespace-nowrap rounded-md outline-none data-disabled:pointer-events-none data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start data-disabled:opacity-64 h-7 text-sm [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    focus.base,
  ],
  variants: {
    variant: {
      default:
        'text-muted hover:bg-surface-3 hover:text-foreground data-active:text-foreground transition-[color,background-color,box-shadow]',
      secondary:
        'data-active:bg-surface-2 data-active:border-surface-5 border border-transparent hover:bg-surface-2 transition-colors',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface TabsTabProps extends TabsPrimitive.Tab.Props, VariantProps<typeof tabsTab> {}

function TabsTab({ className, variant, ...props }: TabsTabProps) {
  return (
    <TabsPrimitive.Tab
      className={cn(tabsTab({ variant, className }))}
      data-slot="tabs-tab"
      data-variant={variant}
      {...props}
    />
  );
}

function TabsPanel({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      className={cn('grow flex flex-col min-h-0 outline-none', className)}
      data-slot="tabs-content"
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTab, TabsPanel };
