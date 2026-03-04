import { cn } from '@/app/utils/helpers';

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        `before:-translate-x-full relative overflow-hidden rounded-md bg-surface-4 before:absolute before:inset-0 before:animate-[shimmer_1.5s_infinite] before:bg-linear-to-r before:from-transparent before:via-surface-3 before:to-transparent`,
        className,
      )}
      {...props}
    />
  );
}
