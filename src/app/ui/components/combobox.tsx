'use client';

import { Input } from '@/app/ui/components/input';
import { input } from '@/app/ui/components/input/style';
import { menuItem } from '@/app/ui/components/menu/style';
import { ScrollArea } from '@/app/ui/components/scroll-area';
import { popup } from '@/app/ui/popup';
import { cn } from '@/app/utils/helpers';
import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';
import { ArrowDownIcon, Cancel01Icon, Tick02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { type VariantProps } from 'cva';
import * as React from 'react';

const ComboboxContext = React.createContext<{
  chipsRef: React.RefObject<HTMLDivElement | null> | null;
  multiple: boolean;
}>({
  chipsRef: null,
  multiple: false,
});

type ComboboxRootProps<ItemValue, Multiple extends boolean | undefined> = Parameters<
  typeof ComboboxPrimitive.Root<ItemValue, Multiple>
>[0];

function Combobox<ItemValue, Multiple extends boolean | undefined = false>(
  props: ComboboxPrimitive.Root.Props<ItemValue, Multiple>,
) {
  const chipsRef = React.useRef<HTMLDivElement | null>(null);
  return (
    <ComboboxContext.Provider value={{ chipsRef, multiple: !!props.multiple }}>
      <ComboboxPrimitive.Root {...(props as ComboboxRootProps<ItemValue, Multiple>)} />
    </ComboboxContext.Provider>
  );
}

function ComboboxInput({
  className,
  showTrigger = true,
  showClear = false,
  variant = 'default',
  ...props
}: Omit<ComboboxPrimitive.Input.Props, 'size'> & {
  showTrigger?: boolean;
  showClear?: boolean;
  variant?: VariantProps<typeof input>['variant'];
}) {
  const { multiple } = React.useContext(ComboboxContext);

  if (multiple) {
    return (
      <ComboboxPrimitive.Input
        className={cn(
          'min-w-12 flex-1 outline-none ps-2 text-sm [[data-slot=combobox-chip]+&]:ps-0.5',
          className,
        )}
        data-slot="combobox-input"
        render={!showTrigger ? <Input size="sm" variant={variant} /> : undefined}
        {...props}
      />
    );
  }
  return (
    <div className="relative w-full has-disabled:opacity-64 group">
      <ComboboxPrimitive.Input
        className={cn(
          'has-[+[data-slot=combobox-trigger],+[data-slot=combobox-clear]]:*:data-[slot=combobox-input]:pe-7',
          className,
        )}
        data-slot="combobox-input"
        render={
          <Input
            className="has-disabled:opacity-100 px-3"
            size={showTrigger ? 'md' : 'sm'}
            variant={variant}
          />
        }
        {...props}
      />
      {showTrigger && (
        <ComboboxTrigger className={'absolute my-auto inset-y-0 right-2'}>
          <HugeiconsIcon className={'size-4'} icon={ArrowDownIcon} />
        </ComboboxTrigger>
      )}
      {showClear && (
        <ComboboxClear
          className={
            "-translate-y-1/2 absolute top-1/2 end-0.5 inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-md border border-transparent opacity-80 outline-none transition-opacity pointer-coarse:after:absolute pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 hover:opacity-100 has-[+[data-slot=combobox-clear]]:hidden sm:size-7 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0"
          }
        >
          <HugeiconsIcon icon={Cancel01Icon} />
        </ComboboxClear>
      )}
    </div>
  );
}

function ComboboxTrigger({ className, ...props }: ComboboxPrimitive.Trigger.Props) {
  return (
    <ComboboxPrimitive.Trigger className={className} data-slot="combobox-trigger" {...props} />
  );
}

function ComboboxTriggerIcon() {
  return (
    <ComboboxPrimitive.Icon className="ml-auto -mr-1 shrink-0">
      <HugeiconsIcon className={'size-4'} data-slot="combobox-trigger-icon" icon={ArrowDownIcon} />
    </ComboboxPrimitive.Icon>
  );
}

function ComboboxTriggerCount(props: React.ComponentProps<'span'>) {
  return (
    <span
      className="absolute -top-1 -right-1 size-3.5 rounded-full text-[0.64rem] bg-red-10 text-white font-medium"
      {...props}
    />
  );
}

interface ComboboxPopupProps extends ComboboxPrimitive.Popup.Props {
  sideOffset?: number;
  align?: 'start' | 'end';
}

function ComboboxPopup({
  className,
  children,
  align,
  sideOffset = 4,
  ...props
}: ComboboxPopupProps) {
  const { chipsRef } = React.useContext(ComboboxContext);

  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner
        anchor={chipsRef}
        className="z-50 select-none"
        data-slot="combobox-positioner"
        align={align}
        sideOffset={sideOffset}
      >
        <ComboboxPrimitive.Popup
          className={cn(
            popup.base,
            popup.transition,
            'w-min min-w-(--anchor-width) p-0 flex-col flex max-w-(--available-width) max-h-[min(var(--available-height),23rem)]',
            className,
          )}
          data-slot="combobox-popup"
          {...props}
        >
          {children}
        </ComboboxPrimitive.Popup>
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  );
}

function ComboboxItem({ className, children, ...props }: ComboboxPrimitive.Item.Props) {
  return (
    <ComboboxPrimitive.Item
      className={cn(menuItem(), 'min-h-8 group h-auto py-1', className)}
      data-slot="combobox-item"
      {...props}
    >
      {children}
    </ComboboxPrimitive.Item>
  );
}

function ComboboxItemIndicator({ className, ...props }: ComboboxPrimitive.ItemIndicator.Props) {
  const { multiple } = React.useContext(ComboboxContext);
  if (!multiple)
    return (
      <span
        className={cn(
          'shrink-0 invisible size-4 ml-auto group-hover:visible has-data-selected:visible',
          className,
        )}
      >
        <ComboboxPrimitive.ItemIndicator
          className={'invisible group-data-selected:visible'}
          {...props}
        >
          <HugeiconsIcon icon={Tick02Icon} className={'size-4.5 -ml-px'} />
        </ComboboxPrimitive.ItemIndicator>
      </span>
    );

  return (
    <span className="shrink-0 invisible group-hover:visible has-data-selected:visible size-4 rounded-sm grid place-items-center border border-surface-6 hover:border-primary-10 transition-colors has-data-selected:border-primary-10 has-data-selected:text-white has-data-selected:bg-primary-10">
      <ComboboxPrimitive.ItemIndicator
        className={cn('invisible group-data-selected:visible', className)}
        {...props}
      >
        <HugeiconsIcon icon={Tick02Icon} className={'size-3.5 text-white'} strokeWidth={2} />
      </ComboboxPrimitive.ItemIndicator>
    </span>
  );
}

function ComboboxSeparator({ className, ...props }: ComboboxPrimitive.Separator.Props) {
  return (
    <ComboboxPrimitive.Separator
      className={cn('mx-2 my-1 h-px bg-border last:hidden', className)}
      data-slot="combobox-separator"
      {...props}
    />
  );
}

function ComboboxGroup({ className, ...props }: ComboboxPrimitive.Group.Props) {
  return <ComboboxPrimitive.Group className={className} data-slot="combobox-group" {...props} />;
}

function ComboboxGroupLabel({ className, ...props }: ComboboxPrimitive.GroupLabel.Props) {
  return (
    <ComboboxPrimitive.GroupLabel
      className={cn('px-2 py-1.5 font-medium text-muted text-xs', className)}
      data-slot="combobox-group-label"
      {...props}
    />
  );
}

function ComboboxEmpty({ className, ...props }: ComboboxPrimitive.Empty.Props) {
  return (
    <ComboboxPrimitive.Empty
      className={cn(
        'not-empty:p-4 text-center text-muted has-data-[slot=combobox-item]:text-foreground text-sm',
        className,
      )}
      data-slot="combobox-empty"
      {...props}
    />
  );
}

function ComboboxRow({ className, ...props }: ComboboxPrimitive.Row.Props) {
  return <ComboboxPrimitive.Row className={className} data-slot="combobox-row" {...props} />;
}

function ComboboxValue({ ...props }: ComboboxPrimitive.Value.Props) {
  return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />;
}

function ComboboxList({ className, ...props }: ComboboxPrimitive.List.Props) {
  return (
    <ScrollArea
      className={'flex flex-col'}
      viewportClassName="not-empty:scroll-py-(--popup-padding)"
    >
      <ComboboxPrimitive.List
        className={cn('not-empty:p-(--popup-padding)', className)}
        data-slot="combobox-list"
        {...props}
      />
    </ScrollArea>
  );
}

function ComboboxClear({ className, ...props }: ComboboxPrimitive.Clear.Props) {
  return <ComboboxPrimitive.Clear className={className} data-slot="combobox-clear" {...props} />;
}

function ComboboxStatus({ className, ...props }: ComboboxPrimitive.Status.Props) {
  return (
    <ComboboxPrimitive.Status
      className={cn('px-3 py-2 font-medium text-muted text-xs empty:m-0 empty:p-0', className)}
      data-slot="combobox-status"
      {...props}
    />
  );
}

function ComboboxCollection(props: ComboboxPrimitive.Collection.Props) {
  return <ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />;
}

function ComboboxChips({ className, ...props }: ComboboxPrimitive.Chips.Props) {
  const { chipsRef } = React.useContext(ComboboxContext);

  return (
    <ComboboxPrimitive.Chips
      className={cn(
        'relative inline-flex border bg-white border-surface-6 min-h-9 focus-within:border-primary-10 shadow-xs w-full flex-wrap gap-1 rounded-md bg-clip-padding p-[calc(--spacing(1))] text-sm outline-none has-disabled:pointer-events-none has-disabled:opacity-75 *:min-h-6',
        className,
      )}
      data-slot="combobox-chips"
      ref={chipsRef}
      {...props}
    />
  );
}

function ComboboxChip({ children, className, ...props }: ComboboxPrimitive.Chip.Props) {
  return (
    <ComboboxPrimitive.Chip
      className={cn(
        "flex items-center gap-1 rounded-[calc(var(--radius-md)-2px)] overflow-hidden bg-surface-3 ps-2 font-medium text-sm outline-none sm:text-xs/(--text-xs--line-height) [&_svg:not([class*='size-'])]:size-4 sm:[&_svg:not([class*='size-'])]:size-3.5",
        className,
      )}
      data-slot="combobox-chip"
      {...props}
    >
      {children}
      <ComboboxChipRemove />
    </ComboboxPrimitive.Chip>
  );
}

function ComboboxChipRemove(props: ComboboxPrimitive.ChipRemove.Props) {
  return (
    <ComboboxPrimitive.ChipRemove
      aria-label="Remove"
      className="h-full shrink-0 cursor-pointer px-1 hover:bg-surface-4"
      data-slot="combobox-chip-remove"
      {...props}
    >
      <HugeiconsIcon icon={Cancel01Icon} className="size-4" />
    </ComboboxPrimitive.ChipRemove>
  );
}

export {
  Combobox,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxTriggerIcon,
  ComboboxTriggerCount,
  ComboboxPopup,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxSeparator,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxEmpty,
  ComboboxValue,
  ComboboxList,
  ComboboxClear,
  ComboboxStatus,
  ComboboxRow,
  ComboboxCollection,
  ComboboxChips,
  ComboboxChip,
};
