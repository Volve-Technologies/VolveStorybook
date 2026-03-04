import { cn } from '@/app/utils/helpers';
import { mergeProps, useRender } from '@base-ui/react';

export function VList(
  props: useRender.ComponentProps<'div'> & {
    totalSize: number;
  },
) {
  const { render = <div />, className, totalSize, ...otherProps } = props;

  const element = useRender({
    render,
    props: mergeProps<'div'>(
      {
        className: cn('relative w-full', className),
        style: {
          height: totalSize,
        },
      },
      otherProps,
    ),
  });

  return element;
}

export function VListContent(
  props: useRender.ComponentProps<'div'> & {
    start: number;
  },
) {
  const { render = <div />, className, start, ...otherProps } = props;

  const element = useRender({
    render,
    props: mergeProps<'div'>(
      {
        className: cn('w-full', className),
        style: {
          transform: `translateY(${start}px)`,
        },
      },
      otherProps,
    ),
  });

  return element;
}
