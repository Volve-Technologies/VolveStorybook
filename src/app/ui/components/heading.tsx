import { cn } from '@/app/utils/helpers';

export function H1({ children, className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="h1"
      className={cn('text-balance font-medium text-2xl lg:text-3xl', className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function H2({ children, className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p className={cn('text-balance font-medium text-lg lg:text-xl', className)} {...props}>
      {children}
    </p>
  );
}

export function H3({ children, className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p className={cn('text-balance font-medium text-base lg:text-lg', className)} {...props}>
      {children}
    </p>
  );
}
