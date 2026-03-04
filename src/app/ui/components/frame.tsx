import { H3 } from '@/app/ui/components/heading';
import { cn } from '@/app/utils/helpers';
import { mergeProps, useRender } from '@base-ui/react';

interface Props extends useRender.ComponentProps<'div'> {
  stackedPanels?: boolean;
}

function Frame(props: Props) {
  const { render = <div />, children, className, stackedPanels = false, ...otherProps } = props;

  return useRender({
    render,
    ['data-slot' as string]: 'frame',
    props: mergeProps<'div'>(
      {
        ['data-stacked' as string]: stackedPanels,
        className: cn(
          'rounded-lg border flex flex-col bg-background shadow-xs group relative p-1.25',
          stackedPanels ? '' : 'p-1.25',
          className,
        ),
        children: (
          <>
            {stackedPanels ? (
              <div
                className={cn(
                  'border w-full rounded-[calc(var(--radius-lg)-calc(var(--spacing)*1))] overflow-hidden bg-surface-4 shadow-xs grid gap-px',
                  className,
                )}
              >
                {children}
              </div>
            ) : (
              children
            )}
          </>
        ),
      },
      otherProps,
    ),
  });
}

function FramePanel(props: useRender.ComponentProps<'div'>) {
  const { render = <div />, className, ...otherProps } = props;
  return useRender({
    render,
    ['data-slot' as string]: 'frame-panel',
    props: mergeProps<'div'>(
      {
        className: cn(
          'group-data-[stacked=false]:border flex flex-col p-4 shadow-xs grow relative group-data-[stacked=false]:rounded-[calc(var(--radius-lg)-calc(var(--spacing)*1))] bg-white',
          className,
        ),
      },
      otherProps,
    ),
  });
}

function FramePanelHeader({ className, ...props }: React.ComponentProps<'header'>) {
  return (
    <header
      className={cn('flex items-center -mt-1 -mr-1 justify-between min-h-7', className)}
      data-slot="frame-panel-header"
      {...props}
    />
  );
}

function FramePanelTitle({ ...props }: React.ComponentProps<typeof H3>) {
  return <H3 data-slot="frame-panel-title" {...props} />;
}

function FramePanelDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <p
      className={cn('text-muted mt-1 text-sm', className)}
      data-slot="frame-panel-description"
      {...props}
    />
  );
}

function FrameFooter({ className, ...props }: React.ComponentProps<'footer'>) {
  return (
    <footer
      className={cn('flex flex-col gap-1 px-5 py-4', className)}
      data-slot="frame-panel-footer"
      {...props}
    />
  );
}

export { Frame, FramePanel, FramePanelHeader, FramePanelTitle, FramePanelDescription, FrameFooter };
