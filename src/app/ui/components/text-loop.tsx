import { cn } from '@/app/utils/helpers';
import * as React from 'react';

type TextLoopItem = {
  id: string;
  content: React.ReactNode;
};

export function TextLoop({
  children,
  className,
}: React.PropsWithChildren<{
  className?: string;
}>) {
  const [items, setItems] = React.useState<TextLoopItem[]>([{ id: 'initial', content: children }]);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const idCounter = React.useRef(0);

  React.useEffect(() => {
    const newId = `item-${++idCounter.current}`;

    setItems((prev) => {
      const lastItem = prev[prev.length - 1];
      return [lastItem, { id: newId, content: children }];
    });

    requestAnimationFrame(() => {
      setActiveIndex(1);
    });

    const timeout = setTimeout(() => {
      setItems((prev) => {
        if (prev.length > 1) {
          return [prev[prev.length - 1]];
        }
        return prev;
      });
      setActiveIndex(0);
    }, 300);

    return () => clearTimeout(timeout);
  }, [children]);

  return (
    <div className={cn('relative inline-grid h-fit motion-preset-fade', className)}>
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        const isNext = index > activeIndex;
        const isPrev = index < activeIndex;

        return (
          <span
            key={item.id}
            className={cn(
              'col-start-1 row-start-1 transition-all duration-300 ease-in-out',
              isActive && 'opacity-100 translate-y-0 blur-0',
              isPrev && 'opacity-0 translate-y-3 blur-[2px] absolute',
              isNext && 'opacity-0 -translate-y-3 blur-[2px] absolute',
            )}
            aria-hidden={!isActive}
          >
            {item.content}
          </span>
        );
      })}
    </div>
  );
}
export function TextLoopSSETest() {
  const [status, setStatus] = React.useState('Connecting...');

  React.useEffect(() => {
    const statuses = [
      'Finding an agent...',
      'Agent found',
      'typing...',
      'uploading_image.png',
      'typing...',
      'Sent',
    ];
    let i = 0;

    const timer = setInterval(() => {
      setStatus(statuses[i]);
      i = (i + 1) % statuses.length;
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return <TextLoop className="text-sm text-muted">{status}</TextLoop>;
}
