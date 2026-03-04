import { cn } from '@/app/utils/helpers';
import { Progress as ProgressPrimitive } from '@base-ui/react/progress';

function Progress({ className, ...props }: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root data-slot="progress" className={cn('w-full', className)} {...props} />
  );
}

function ProgressTrack({
  className,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Track>) {
  return (
    <ProgressPrimitive.Track
      className={cn('h-2 w-full select-none rounded-[3px] bg-surface-4 shadow-xs', className)}
      {...props}
    >
      <ProgressIndicator />
    </ProgressPrimitive.Track>
  );
}

function ProgressIndicator({
  className,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Indicator>) {
  return (
    <ProgressPrimitive.Indicator
      className={cn(
        'select-none rounded-[inherit] bg-surface-12 transition-all duration-500',
        className,
      )}
      {...props}
    />
  );
}

function ProgressValue({
  className,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Value>) {
  return <ProgressPrimitive.Value className={cn('', className)} {...props} />;
}

export { Progress, ProgressTrack, ProgressValue };
