import { Separator } from '@/app/ui/components/separator';
import { cn } from '@/app/utils/helpers';
import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';

function Group({
  className,
  children,
  ...props
}: React.PropsWithChildren<{
  className?: string;
}>) {
  return (
    <div
      data-slot="group"
      className={cn('flex w-fit [--clip-end:-1rem] [--clip-start:-1rem]', className)}
      role="group"
      {...props}
    >
      {children}
    </div>
  );
}

function GroupItem({ className, render, ...props }: useRender.ComponentProps<'div'>) {
  return useRender({
    defaultTagName: 'div',
    render,
    props: mergeProps(
      {
        'data-slot': 'group-item',
        className: cn(
          '[&[data-slot=group-item]:not(:first-of-type)]:before:-start-0.5 [&[data-slot=group-item]:not(:last-of-type)]:before:-end-0.5 [&[data-slot=group-item]:not(:first-of-type)]:rounded-s-none [&[data-slot=group-item]:not(:last-of-type)]:rounded-e-none border-x-0 before:hidden [&[data-slot=group-item]:not(:first-of-type)]:before:rounded-s-none [&[data-slot=group-item]:not(:last-of-type)]:before:rounded-e-none [&[data-slot=group-item]:first-of-type]:border-s [&[data-slot=group-item]:last-of-type]:border-e focus-visible:z-10 has-focus-visible:z-10 before:[clip-path:inset(-1rem_var(--clip-end)_-1rem_var(--clip-start))] [&[data-slot=group-item]:not(:first-of-type)]:before:[--clip-start:2px] [&[data-slot=group-item]:not(:last-of-type)]:before:[--clip-end:2px] [&[data-slot=group-item]:not(:last-of-type)]:has-[+[data-slot=separator]]:before:[--clip-end:1.5px] [[data-slot=separator]+&]:before:[--clip-start:1.5px]',
          className,
        ),
      },
      props,
    ),
  });
}

function GroupSeparator({ className, ...props }: { className?: string }) {
  return (
    <Separator
      orientation="vertical"
      className={cn(
        '[[data-slot=input-control]:focus-within+&,[data-slot=field-control]:focus-within+&,[data-slot=select-trigger]:focus-visible+*+&]:-translate-x-px w-px relative z-20 shrink-0 border-transparent bg-neutral has-[+[data-slot=input-control]:focus-within,+[data-slot=field-control]:focus-within,+[data-slot=select-trigger]:focus-visible+*]:translate-x-px has-[+[data-slot=input-control]:focus-within,+[data-slot=field-control]:focus-within,+[data-slot=select-trigger]:focus-visible+*]:bg-foreground [[data-slot=input-control]:focus-within+&,[data-slot=field-control]:focus-within+&,[data-slot=select-trigger]:focus-visible+*+&]:bg-foreground',
        className,
      )}
      {...props}
    />
  );
}

export { Group, GroupItem, GroupSeparator };
