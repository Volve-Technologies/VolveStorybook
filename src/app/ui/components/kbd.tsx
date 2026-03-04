import { cn } from '@/app/utils/helpers';
import { CommandIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

function Kbd({ className, ...props }: React.ComponentProps<'kbd'>) {
  return (
    <kbd
      className={cn(
        "pointer-events-none inline-flex h-5 min-w-5 select-none items-center justify-center gap-1 rounded bg-surface-3 px-1 font-medium font-sans text-mute text-xs [&_svg:not([class*='size-'])]:size-3.5",
        className,
      )}
      data-slot="kbd"
      {...props}
    />
  );
}

function KbdGroup({ className, ...props }: React.ComponentProps<'kbd'>) {
  return (
    <kbd
      className={cn('inline-flex items-center gap-1', className)}
      data-slot="kbd-group"
      {...props}
    />
  );
}

function KbdCommand({ className, ...props }: React.ComponentProps<typeof Kbd>) {
  const isMac = navigator.userAgent.toLowerCase().includes('mac');
  return (
    <Kbd {...props}>
      {isMac ? <HugeiconsIcon data-slot="kbd-command-icon" icon={CommandIcon} /> : 'Ctrl'}
    </Kbd>
  );
}

export { Kbd, KbdGroup, KbdCommand };
