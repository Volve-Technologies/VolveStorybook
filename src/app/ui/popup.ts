export const popup = {
  transition:
    'origin-(--transform-origin) duration-[100ms,0ms] data-ending-style:scale-[98%] data-starting-style:scale-[98%] data-ending-style:opacity-0 data-starting-style:opacity-0 data-instant:duration-0',
  base: 'scroll-py-(--popup-padding) rounded-(--popup-radius) bg-surface-1 shadow-xl outline-1 outline-neutral outline-offset-0',
  separator:
    '-mx-(--popup-padding) my-(--popup-padding) h-px w-[calc(100%+calc(var(--popup-padding)*2))] bg-neutral',
  groupLabel: 'mx-2 mb-1 mt-1.5 text-muted text-sm',
} as const;
