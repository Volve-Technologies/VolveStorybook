import { popup } from '@/app/ui/popup';
import { cn } from '@/app/utils/helpers';
import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip';

const Tooltip = TooltipPrimitive.Root;
const TooltipProvider = TooltipPrimitive.Provider;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipPortal = TooltipPrimitive.Portal;
const TooltipPositioner = TooltipPrimitive.Positioner;

function TooltipPopup({
  className,
  children,
  sideOffset = 5,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Positioner>) {
  return (
    <TooltipPortal>
      <TooltipPositioner sideOffset={sideOffset} {...props}>
        <TooltipPrimitive.Popup
          className={cn(
            popup.base,
            popup.transition,
            'flex items-center gap-px rounded-md px-2 py-1 text-sm has-data-[slot=kbd]:pr-1 has-data-[slot=kbd]:gap-1.5',
            className,
          )}
        >
          {children}
        </TooltipPrimitive.Popup>
      </TooltipPositioner>
    </TooltipPortal>
  );
}

export { Tooltip, TooltipProvider, TooltipTrigger, TooltipPopup };
