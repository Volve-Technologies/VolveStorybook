import { cn } from '@/app/utils/helpers';
import { ScrollArea as ScrollAreaPrimitive } from '@base-ui/react/scroll-area';

interface Props extends React.ComponentProps<typeof ScrollAreaPrimitive.Root> {
  orientation?: 'horizontal' | 'vertical' | 'both';
  viewportClassName?: string;
  viewportRef?: React.Ref<HTMLDivElement>;
  scrollbarGutter?: boolean;
}

function ScrollArea({
  className,
  viewportClassName = '',
  viewportRef,
  children,
  orientation,
  scrollbarGutter = false,
  ...props
}: Props) {
  return (
    <ScrollAreaPrimitive.Root className={cn('grow min-h-0', className)} {...props}>
      <ScrollAreaPrimitive.Viewport
        ref={viewportRef}
        className={cn(
          'size-full overscroll-contain rounded-[inherit] outline-hidden',
          scrollbarGutter && 'data-has-overflow-y:pe-2 data-has-overflow-x:pb-2',
          viewportClassName,
        )}
        data-slot="scroll-area-viewport"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      {orientation === 'both' ? (
        <>
          <ScrollBar orientation="vertical" />
          <ScrollBar orientation="horizontal" />
        </>
      ) : (
        <ScrollBar orientation={orientation} />
      )}
      <ScrollAreaPrimitive.Corner data-slot="scroll-area-corner" />
    </ScrollAreaPrimitive.Root>
  );
}

function ScrollBar({
  className,
  orientation = 'vertical',
  ...props
}: ScrollAreaPrimitive.Scrollbar.Props) {
  return (
    <ScrollAreaPrimitive.Scrollbar
      className={cn(
        'm-0.5 flex opacity-0 transition-opacity z-3 delay-300 data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:w-1.5 data-[orientation=horizontal]:flex-col data-hovering:opacity-100 data-scrolling:opacity-100 data-hovering:delay-0 data-scrolling:delay-0 data-hovering:duration-100 data-scrolling:duration-100',
        className,
      )}
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb
        className="relative flex-1 rounded-full bg-surface-6"
        data-slot="scroll-area-thumb"
      />
    </ScrollAreaPrimitive.Scrollbar>
  );
}

export { ScrollArea, ScrollBar };
