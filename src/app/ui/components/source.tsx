import CitationListItem from '@/app/components/shared/Citations/CitationListItem';
import { Button } from '@/app/ui/components/button';
import { Card } from '@/app/ui/components/card';
import { toastManager } from '@/app/ui/components/toast';
import { useCopyToClipboard } from '@/app/ui/hooks/use-copy-to-clipboard';
import { cn } from '@/app/utils/helpers';
import { CopyIcon, Tick02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { useTranslations } from 'next-intl';
import { createContext, use } from 'react';
import ReactMarkdown from 'react-markdown';

const SourceContext = createContext<{ text: string } | null>(null);

function useSourceContext() {
  const context = use(SourceContext);
  if (!context) {
    throw new Error('source components must be used within Source');
  }
  return context;
}

export function Source({
  text,
  className,
  ...props
}: React.ComponentProps<'div'> & { text: string }) {
  return (
    <SourceContext value={{ text }}>
      <div className={cn('space-y-3', className)} {...props} />
    </SourceContext>
  );
}

export function SourceContent({
  children,
  format,
}: {
  children?: React.ReactNode;
  format?: (text?: string | undefined) => string | React.ReactNode | null;
}) {
  const { text } = useSourceContext();

  return (
    <div className="pl-2.75 space-y-3">
      <div className="border-l pl-4">
        <Card className="flex items-start justify-between py-3 px-4">
          {format ? (
            <div className="text-sm">{format(text)}</div>
          ) : (
            <ReactMarkdown className="prose prose-sm">{text}</ReactMarkdown>
          )}
          {children}
        </Card>
      </div>
    </div>
  );
}

export function SourceCopyButton() {
  const { text } = useSourceContext();
  const tGeneral = useTranslations('general');
  const copy = useCopyToClipboard();
  return (
    <Button
      variant="ghost"
      size="xs"
      kind="icon"
      aria-label={'Copy to clipboard'}
      onClick={() => {
        copy.trigger(text);
        toastManager.add({
          type: 'success',
          title: tGeneral('notifications.copiedToClipboardNoLabel'),
        });
      }}
      className="-mr-2 -mt-1 ml-2 text-muted"
    >
      <HugeiconsIcon icon={copy.copied ? Tick02Icon : CopyIcon} />
    </Button>
  );
}

export function SourceFileButton({ ...props }: React.ComponentProps<typeof CitationListItem>) {
  return <CitationListItem className="ml-1.25" {...props} />;
}
