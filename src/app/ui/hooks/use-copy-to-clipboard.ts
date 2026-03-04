'use client';

import * as React from 'react';

export function useCopyToClipboard({
  timeout = 2000,
  onCopy,
}: {
  timeout?: number;
  onCopy?: () => void;
} = {}) {
  const [copied, setCopied] = React.useState(false);
  const timeoutIdRef = React.useRef<NodeJS.Timeout | null>(null);

  const trigger = (value: string) => {
    if (typeof window === 'undefined' || !navigator.clipboard.writeText) {
      return;
    }

    if (!value) return;

    navigator.clipboard.writeText(value).then(() => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
      setCopied(true);

      if (onCopy) {
        onCopy();
      }

      if (timeout !== 0) {
        timeoutIdRef.current = setTimeout(() => {
          setCopied(false);
          timeoutIdRef.current = null;
        }, timeout);
      }
    }, console.error);
  };

  React.useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  return { trigger, copied };
}
