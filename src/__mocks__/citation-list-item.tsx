import { FileIcon } from '@/app/ui/components/file-icon';

type Props = {
  idx?: number;
  title?: string;
  document?: { name?: string };
  className?: string;
  showIcon?: boolean;
  icon?: React.ReactNode;
  [key: string]: unknown;
};

export default function CitationListItem({ idx, title, document: doc, className, showIcon = true, icon }: Props) {
  const name = doc?.name ?? title ?? 'Document';
  return (
    <span className={`flex items-center gap-1 text-sm text-blue-11 cursor-pointer ${className ?? ''}`}>
      {idx !== undefined && <span className="mr-1">{idx + 1}.</span>}
      {showIcon ? (icon ?? <FileIcon fileName={name} />) : null}
      <span className="line-clamp-1">{name}</span>
    </span>
  );
}
