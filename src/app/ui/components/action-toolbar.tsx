import { Button } from '@/app/ui/components/button';
import { Tooltip, TooltipPopup, TooltipTrigger } from '@/app/ui/components/tooltip';
import { cn } from '@/app/utils/helpers';

export function ActionToolbar({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="action-toolbar"
      className={cn(
        'flex gap-0.5 items-center md:opacity-0 group-hover/action:opacity-100 transition-opacity',
        className,
      )}
      {...props}
    />
  );
}

interface Props extends React.ComponentProps<typeof Button> {
  label: string;
}

export function ActionToolbarButton({ className, label, ...props }: Props) {
  return (
    <Tooltip
      onOpenChange={(open, eventDetails) => {
        if (eventDetails.reason === 'trigger-press') eventDetails.cancel();
      }}
    >
      <TooltipTrigger
        delay={100}
        render={
          <Button
            type="button"
            aria-label={label}
            data-slot="action-toolbar-button"
            kind="icon"
            size="xs"
            variant="ghost"
            className={cn('not-touch-hitbox text-muted hover:text-foreground', className)}
            {...props}
          />
        }
      />
      <TooltipPopup>{label}</TooltipPopup>
    </Tooltip>
  );
}
