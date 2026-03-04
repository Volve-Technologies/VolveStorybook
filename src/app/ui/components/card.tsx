import { cn } from '@/app/utils/helpers';
import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import { cva, type VariantProps } from 'cva';

const card = cva({
  base: ['rounded-lg border bg-white p-4 shadow-xs'],
  variants: {
    variant: {
      default: [''],
    },
  },
});

interface Props extends useRender.ComponentProps<'div'>, VariantProps<typeof card> {}

export function Card(props: Props) {
  const { render = <div />, variant, className, ...otherProps } = props;

  return useRender({
    render,
    props: mergeProps<'div'>(
      {
        className: cn(card({ className, variant })),
      },
      otherProps,
    ),
  });
}
