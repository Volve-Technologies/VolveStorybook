import { ActionToolbar, ActionToolbarButton } from '@/app/ui/components/action-toolbar';
import { Button } from '@/app/ui/components/button';
import { Collapsible, CollapsibleTrigger } from '@/app/ui/components/collapsible';
import { cn } from '@/app/utils/helpers';
import { UnfoldLessIcon, UnfoldMoreIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { cva, type VariantProps } from 'cva';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const alert = cva({
  base: 'relative grid w-full items-start group/action gap-x-2 text-foreground/90 has-data-[slot="alert-action"]:gap-y-0 gap-y-2 rounded-lg border has-[[data-slot=alert-description]]:not-has-[[data-slot=alert-title]]:p-2.5! p-3 md:px-3.5 text-sm has-[>svg]:has-data-[slot=alert-action]:grid-cols-[calc(var(--spacing)*4)_1fr_auto] has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-data-[slot=alert-action]:grid-cols-[1fr_auto] has-[>svg]:gap-x-3 [&>svg:not([class*="size-"])]:h-lh [&>svg:not([class*="size-"])]:w-5',
  variants: {
    variant: {
      default: 'border-surface-4 bg-surface-1 [&>svg]:text-foreground/90',
      info: 'border-blue-4 bg-blue-2 [&>svg]:text-blue-9',
      success: 'border-green-4 bg-green-2 [&>svg]:text-green-9',
      warning: 'border-orange-4 bg-orange-2 [&>svg]:text-orange-9',
      destructive: 'border-red-4 bg-red-2 [&>svg]:text-red-9',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof alert>) {
  return (
    <div data-slot="alert" role="alert" className={cn(alert({ variant, className }))} {...props} />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-title"
      className={cn('font-medium mb-0.5 -mt-0.5 text-foreground [svg~&]:col-start-2', className)}
      {...props}
    />
  );
}

function AlertDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-description"
      className={cn('[svg~&]:col-start-2', className)}
      {...props}
    />
  );
}

interface Props {
  text: string;
  maxLength?: number | undefined;
}

function AlertDescriptionCollapsibleText({ text, maxLength = 1000 }: Props) {
  const tGeneral = useTranslations('general');
  const [isExpanded, setIsExpanded] = useState(false);

  const shouldCollapse = text.length > maxLength;
  const visibleText = shouldCollapse ? text.slice(0, maxLength) : text;

  return shouldCollapse ? (
    <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
      <div className="pb-2">
        <ReactMarkdown className="prose prose-sm [&_p]:mb-2 [&_ul]:mb-2 [&_ol]:mb-2 [&_li]:mb-1">
          {isExpanded ? text : visibleText + '...'}
        </ReactMarkdown>
      </div>
      <CollapsibleTrigger
        render={
          <Button
            onClick={() => setIsExpanded((prev) => !prev)}
            size="sm"
            kind="with-icon"
            className="absolute -bottom-1.5 left-1/2 z-2 -translate-x-1/2"
            variant="secondary"
          >
            <HugeiconsIcon icon={isExpanded ? UnfoldLessIcon : UnfoldMoreIcon} />
            {isExpanded ? tGeneral('showLess') : tGeneral('showMore')}
          </Button>
        }
      />
    </Collapsible>
  ) : (
    <ReactMarkdown className="prose prose-sm [&_p]:mb-2 [&_ul]:mb-2 [&_ol]:mb-2 [&_li]:mb-1">
      {text}
    </ReactMarkdown>
  );
}

function AlertAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-action"
      className={cn(
        'flex gap-1 max-sm:col-start-2 max-sm:mt-2 sm:row-start-1 sm:row-end-3 sm:self-center sm:[[data-slot=alert-description]~&]:col-start-2 sm:[[data-slot=alert-title]~&]:col-start-2 sm:[svg~&]:col-start-2 sm:[svg~[data-slot=alert-description]~&]:col-start-3 sm:[svg~[data-slot=alert-title]~&]:col-start-3',
        className,
      )}
      {...props}
    />
  );
}

function AlertActionToolbar({ className, ...props }: React.ComponentProps<typeof ActionToolbar>) {
  return (
    <ActionToolbar
      data-slot="alert-action-toolbar"
      className={cn('ml-auto -mr-1.5 md:-mr-2 -mt-1', className)}
      {...props}
    />
  );
}

function AlertActionToolbarButton({
  className,
  ...props
}: React.ComponentProps<typeof ActionToolbarButton>) {
  return <ActionToolbarButton data-slot="alert-action-toolbar-button" size="sm" {...props} />;
}

export {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertDescriptionCollapsibleText,
  AlertAction,
  AlertActionToolbarButton,
  AlertActionToolbar,
};
