import { cn } from '@/app/utils/helpers';
import { Separator as SeparatorPrimitive } from '@base-ui/react/separator';

interface Props extends React.ComponentProps<typeof SeparatorPrimitive> {}

export function Separator({ className, ...props }: Props) {
  return (
    <SeparatorPrimitive
      className={cn(
        'w-full bg-neutral data-[orientation=horizontal]:h-px data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch',
        className,
      )}
      {...props}
    />
  );
}
