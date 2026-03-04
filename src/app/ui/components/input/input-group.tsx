'use client';

import { Input } from '@/app/ui/components/input';
import { input } from '@/app/ui/components/input/style';
import { Textarea } from '@/app/ui/components/textarea';
import { cn } from '@/app/utils/helpers';
import { mergeProps, useRender } from '@base-ui/react';
import { cva, type VariantProps } from 'cva';
import type * as React from 'react';

interface Props extends Omit<React.ComponentProps<'input'>, 'size'>, VariantProps<typeof input> {}

function InputGroup({ className, variant, size, ...props }: Props) {
  return (
    <div
      className={cn(
        input({ variant, size, className }),
        'inline-flex focus-within:border-primary-10 has-data-[align="inline-start"]:px-0 has-data-[align="inline-end"]:pr-0 items-center',
      )}
      data-slot="input-group"
      data-variant={variant}
      role="group"
      {...props}
    />
  );
}

const inputGroupAddonVariants = cva({
  base: "[&_svg]:-mx-0.5 flex h-auto cursor-text select-none items-center justify-center gap-2 leading-none [&>kbd]:rounded-[calc(var(--radius)-5px)] in-[[data-slot=input-group]:has([data-slot=input-control],[data-slot=textarea-control])]:[&_svg:not([class*='size-'])]:size-4.5 sm:in-[[data-slot=input-group]:has([data-slot=input-control],[data-slot=textarea-control])]:[&_svg:not([class*='size-'])]:size-4 not-has-[button]:**:[svg:not([class*='opacity-'])]:opacity-70",
  defaultVariants: {
    align: 'inline-start',
  },
  variants: {
    align: {
      'block-end':
        'order-last w-full justify-start px-[calc(--spacing(3)-1px)] pb-[calc(--spacing(3)-1px)] [.border-t]:pt-[calc(--spacing(3)-1px)] [[data-size=sm]+&]:px-[calc(--spacing(2.5)-1px)]',
      'block-start':
        'order-first w-full justify-start px-[calc(--spacing(3)-1px)] pt-[calc(--spacing(3)-1px)] [.border-b]:pb-[calc(--spacing(3)-1px)] [[data-size=sm]+&]:px-[calc(--spacing(2.5)-1px)]',
      'inline-end':
        'has-[>:last-child[data-slot=badge]]:-me-1.5 has-[>button]:-me-2 order-last pe-[calc(--spacing(3)-1px)] has-[>kbd:last-child]:me-[-0.35rem] [[data-size=sm]+&]:pe-[calc(--spacing(2.5)-1px)]',
      'inline-start':
        'has-[>:last-child[data-slot=badge]]:-ms-1.5 has-[>button]:-ms-2 order-first ps-[calc(--spacing(3)-1px)] has-[>kbd:last-child]:ms-[-0.35rem] [[data-size=sm]+&]:ps-[calc(--spacing(2.5)-1px)]',
    },
  },
});

function InputGroupAddon({
  className,
  align = 'inline-start',
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      className={cn(inputGroupAddonVariants({ align }), className)}
      data-align={align}
      data-slot="input-group-addon"
      onMouseDown={(e) => {
        const target = e.target as HTMLElement;
        const isInteractive = target.closest(
          "button, a, input, select, textarea, [role='button'], [role='combobox'], [role='listbox'], [data-slot='select-trigger']",
        );
        if (isInteractive) return;
        e.preventDefault();
        const parent = e.currentTarget.parentElement;
        const input = parent?.querySelector<HTMLInputElement | HTMLTextAreaElement>(
          'input, textarea',
        );
        if (input && !parent?.querySelector('input:focus, textarea:focus')) {
          input.focus();
        }
      }}
      {...props}
    />
  );
}

function InputGroupText({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        "[&_svg]:-mx-0.5 line-clamp-1 flex items-center gap-2 text-muted leading-none in-[[data-slot=input-group]:has([data-slot=input-control],[data-slot=textarea-control])]:[&_svg:not([class*='size-'])]:size-4.5 sm:in-[[data-slot=input-group]:has([data-slot=input-control],[data-slot=textarea-control])]:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",
        className,
      )}
      {...props}
    />
  );
}

function InputGroupInput(props: useRender.ComponentProps<typeof Input>) {
  const { render = <Input />, className, ...otherProps } = props;

  return useRender({
    render,
    props: mergeProps<typeof Input>(
      {
        ['data-slot' as string]: 'input-control',
        variant: 'unstyled',
        className: cn('px-2 has-[+[data-align="inline-end"]]:px-0', className),
      },
      otherProps,
    ),
  });
}

function InputGroupTextarea({ className, ...props }: React.ComponentProps<typeof Textarea>) {
  return <Textarea className={className} {...props} />;
}

export { InputGroup, InputGroupAddon, InputGroupText, InputGroupInput, InputGroupTextarea };
