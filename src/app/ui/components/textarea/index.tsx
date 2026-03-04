import * as React from 'react';
import {
  useComposedRef,
  useFontsLoadedListener,
  useFormResetListener,
  useWindowResizeListener,
} from './hooks';
import { type SizingData, calculateNodeHeight, getSizingData, noop } from './utils';
import { cn } from '@/app/utils/helpers';
import { input } from '@/app/ui/components/input/style';

type TextareaProps = React.ComponentProps<'textarea'>;

type Style = Omit<NonNullable<TextareaProps['style']>, 'maxHeight' | 'minHeight'> & {
  height?: number;
};

type TextareaHeightChangeMeta = {
  rowHeight: number;
};

interface Props extends Omit<TextareaProps, 'style'> {
  maxRows?: number;
  minRows?: number;
  onHeightChange?: (height: number, meta: TextareaHeightChangeMeta) => void;
  cacheMeasurements?: boolean;
  style?: Style;
}

export function Textarea({
  cacheMeasurements,
  maxRows,
  minRows,
  onChange = noop,
  onHeightChange = noop,
  ref: userRef,
  className,
  ...props
}: Props) {
  const isControlled = props.value !== undefined;
  const libRef = React.useRef<HTMLTextAreaElement | null>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ref = userRef ? useComposedRef(libRef, userRef) : libRef;
  const heightRef = React.useRef(0);
  const measurementsCacheRef = React.useRef<SizingData>(null);

  const resizeTextarea = () => {
    const node = libRef.current;
    if (!node) return;

    const nodeSizingData =
      cacheMeasurements && measurementsCacheRef.current
        ? measurementsCacheRef.current
        : getSizingData(node);

    if (!nodeSizingData) return;

    measurementsCacheRef.current = nodeSizingData;

    const [height, rowHeight] = calculateNodeHeight(
      nodeSizingData,
      node.value || node.placeholder || 'x',
      minRows,
      maxRows,
    );

    if (heightRef.current !== height) {
      heightRef.current = height ?? 0;
      node.style.setProperty('height', `${height}px`, 'important');
      onHeightChange(height ?? 0, { rowHeight: rowHeight ?? 0 });
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isControlled) {
      resizeTextarea();
    }
    onChange(event);
  };

  React.useLayoutEffect(resizeTextarea);
  useFormResetListener(libRef, () => {
    if (!isControlled) {
      const currentValue = libRef.current?.value;
      requestAnimationFrame(() => {
        const node = libRef.current;
        if (node && currentValue !== node.value) {
          resizeTextarea();
        }
      });
    }
  });
  useWindowResizeListener(resizeTextarea);
  useFontsLoadedListener(resizeTextarea);
  return (
    <textarea
      className={cn(input(), 'md:pt-2! pt-3.5! min-h-12 resize-none pb-2', className)}
      {...props}
      onChange={handleChange}
      ref={ref}
    />
  );
}
