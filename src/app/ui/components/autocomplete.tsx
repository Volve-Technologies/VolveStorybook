'use client';

import { Input } from '@/app/ui/components/input';
import { ScrollArea } from '@/app/ui/components/scroll-area';
import { cn } from '@/app/utils/helpers';
import { Autocomplete as AutocompletePrimitive } from '@base-ui/react/autocomplete';
import { ArrowDown01Icon, Cancel01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

const Autocomplete = AutocompletePrimitive.Root;

function AutocompleteInput({
  className,
  showTrigger = false,
  showClear = false,
  startAddon,
  size,
  ...props
}: Omit<AutocompletePrimitive.Input.Props, 'size'> & {
  showTrigger?: boolean;
  showClear?: boolean;
  startAddon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  ref?: React.Ref<HTMLInputElement>;
}) {
  const sizeValue = (size ?? 'md') as 'sm' | 'md' | 'lg';

  return (
    <div className="relative w-full">
      {startAddon && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute size-7 my-auto inset-y-0 start-px z-10 flex items-center ps-[calc(--spacing(3)-1px)] opacity-80"
          data-slot="autocomplete-start-addon"
        >
          {startAddon}
        </div>
      )}
      <AutocompletePrimitive.Input
        data-slot="autocomplete-input"
        render={
          <Input
            size={sizeValue}
            className={cn(
              startAddon
                ? 'data-[size=sm]:*:data-[slot=autocomplete-input]:ps-[calc(--spacing(7.5)-1px)] *:data-[slot=autocomplete-input]:ps-[calc(--spacing(8.5)-1px)] sm:data-[size=sm]:*:data-[slot=autocomplete-input]:ps-[calc(--spacing(7)-1px)] sm:*:data-[slot=autocomplete-input]:ps-[calc(--spacing(8)-1px)]'
                : '',
              sizeValue === 'sm'
                ? 'has-[+[data-slot=autocomplete-trigger],+[data-slot=autocomplete-clear]]:*:data-[slot=autocomplete-input]:pe-6.5'
                : 'has-[+[data-slot=autocomplete-trigger],+[data-slot=autocomplete-clear]]:*:data-[slot=autocomplete-input]:pe-7',
              className,
            )}
          />
        }
        {...props}
      />
      {showTrigger && (
        <AutocompleteTrigger
          className={cn(
            "-translate-y-1/2 absolute top-1/2 inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-md border border-transparent opacity-80 outline-none transition-colors pointer-coarse:after:absolute pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 hover:opacity-100 has-[+[data-slot=autocomplete-clear]]:hidden sm:size-7 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
            sizeValue === 'sm' ? 'end-0' : 'end-0.5',
          )}
        >
          <HugeiconsIcon icon={ArrowDown01Icon} />
        </AutocompleteTrigger>
      )}
      {showClear && (
        <AutocompleteClear
          className={cn(
            "-translate-y-1/2 absolute top-1/2 inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-md border border-transparent opacity-80 outline-none transition-colors pointer-coarse:after:absolute pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 hover:opacity-100 has-[+[data-slot=autocomplete-clear]]:hidden sm:size-7 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
            sizeValue === 'sm' ? 'end-0' : 'end-0.5',
          )}
        >
          <HugeiconsIcon icon={Cancel01Icon} />
        </AutocompleteClear>
      )}
    </div>
  );
}

function AutocompletePopup({
  className,
  children,
  sideOffset = 4,
  ...props
}: AutocompletePrimitive.Popup.Props & {
  sideOffset?: number;
}) {
  return (
    <AutocompletePrimitive.Portal>
      <AutocompletePrimitive.Positioner
        className="z-50 select-none"
        data-slot="autocomplete-positioner"
        sideOffset={sideOffset}
      >
        <span
          className={cn(
            'relative flex max-h-full origin-(--transform-origin) rounded-lg border bg-background bg-clip-padding transition-[scale,opacity] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-lg has-data-starting-style:scale-98 has-data-starting-style:opacity-0 dark:not-in-data-[slot=group]:bg-clip-border',
            className,
          )}
        >
          <AutocompletePrimitive.Popup
            className="flex max-h-[min(var(--available-height),23rem)] w-(--anchor-width) max-w-(--available-width) flex-col"
            data-slot="autocomplete-popup"
            {...props}
          >
            {children}
          </AutocompletePrimitive.Popup>
        </span>
      </AutocompletePrimitive.Positioner>
    </AutocompletePrimitive.Portal>
  );
}

function AutocompleteItem({ className, children, ...props }: AutocompletePrimitive.Item.Props) {
  return (
    <AutocompletePrimitive.Item
      className={cn(
        'flex min-h-8.5 gap-2 [&>svg]:size-5 [&>svg]:text-foreground/75 cursor-pointer data-highlighted:[&>svg]:text-foreground select-none items-center rounded-md px-2 py-1 text-sm outline-none data-disabled:pointer-events-none data-highlighted:bg-surface-3 data-disabled:opacity-75',
        className,
      )}
      data-slot="autocomplete-item"
      {...props}
    >
      {children}
    </AutocompletePrimitive.Item>
  );
}

function AutocompleteSeparator({ className, ...props }: AutocompletePrimitive.Separator.Props) {
  return (
    <AutocompletePrimitive.Separator
      className={cn('mx-2 my-1 h-px bg-border last:hidden', className)}
      data-slot="autocomplete-separator"
      {...props}
    />
  );
}

function AutocompleteGroup({ className, ...props }: AutocompletePrimitive.Group.Props) {
  return (
    <AutocompletePrimitive.Group
      className={cn('', className)}
      data-slot="autocomplete-group"
      {...props}
    />
  );
}

function AutocompleteGroupLabel({ className, ...props }: AutocompletePrimitive.GroupLabel.Props) {
  return (
    <AutocompletePrimitive.GroupLabel
      className={cn('px-2 py-1.5 text-muted text-xs', className)}
      data-slot="autocomplete-group-label"
      {...props}
    />
  );
}

function AutocompleteEmpty({ className, ...props }: AutocompletePrimitive.Empty.Props) {
  return (
    <AutocompletePrimitive.Empty
      className={cn('not-empty:p-2 text-center text-base text-muted sm:text-sm', className)}
      data-slot="autocomplete-empty"
      {...props}
    />
  );
}

function AutocompleteRow({ className, ...props }: AutocompletePrimitive.Row.Props) {
  return (
    <AutocompletePrimitive.Row className={className} data-slot="autocomplete-row" {...props} />
  );
}

function AutocompleteValue({ ...props }: AutocompletePrimitive.Value.Props) {
  return <AutocompletePrimitive.Value data-slot="autocomplete-value" {...props} />;
}

function AutocompleteList({ className, ...props }: AutocompletePrimitive.List.Props) {
  return (
    <ScrollArea
      className={'flex flex-col'}
      scrollbarGutter
      viewportClassName="scroll-py-[calc(var(--popup-padding)*2)]"
    >
      <AutocompletePrimitive.List
        className={cn('in-data-has-overflow-y:pe-2', className)}
        data-slot="autocomplete-list"
        {...props}
      />
    </ScrollArea>
  );
}

function AutocompleteClear({ className, ...props }: AutocompletePrimitive.Clear.Props) {
  return (
    <AutocompletePrimitive.Clear
      className={cn(
        "-translate-y-1/2 absolute end-0.5 top-1/2 inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-md border border-transparent opacity-80 outline-none transition-[color,background-color,box-shadow,opacity] pointer-coarse:after:absolute pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 hover:opacity-100 sm:size-7 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      data-slot="autocomplete-clear"
      {...props}
    >
      <HugeiconsIcon icon={Cancel01Icon} />
    </AutocompletePrimitive.Clear>
  );
}

function AutocompleteStatus({ className, ...props }: AutocompletePrimitive.Status.Props) {
  return (
    <AutocompletePrimitive.Status
      className={cn('px-3 py-2 font-medium text-muted text-xs empty:m-0 empty:p-0', className)}
      data-slot="autocomplete-status"
      {...props}
    />
  );
}

function AutocompleteCollection({ ...props }: AutocompletePrimitive.Collection.Props) {
  return <AutocompletePrimitive.Collection data-slot="autocomplete-collection" {...props} />;
}

function AutocompleteTrigger({ className, ...props }: AutocompletePrimitive.Trigger.Props) {
  return (
    <AutocompletePrimitive.Trigger
      className={className}
      data-slot="autocomplete-trigger"
      {...props}
    />
  );
}

export {
  Autocomplete,
  AutocompleteInput,
  AutocompleteTrigger,
  AutocompletePopup,
  AutocompleteItem,
  AutocompleteSeparator,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteEmpty,
  AutocompleteValue,
  AutocompleteList,
  AutocompleteClear,
  AutocompleteStatus,
  AutocompleteRow,
  AutocompleteCollection,
};
