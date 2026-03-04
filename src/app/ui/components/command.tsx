'use client';

import { Dialog as CommandDialogPrimitive } from '@base-ui/react/dialog';
import * as React from 'react';
import {
  Autocomplete,
  AutocompleteCollection,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompleteSeparator,
} from '@/app/ui/components/autocomplete';
import { cn } from '@/app/utils/helpers';
import { HugeiconsIcon } from '@hugeicons/react';
import { SearchIcon } from '@hugeicons/core-free-icons';

const CommandInputContext = React.createContext<{
  inputRef: React.RefObject<HTMLInputElement | null> | null;
}>({
  inputRef: null,
});

const CommandDialog = CommandDialogPrimitive.Root;

const CommandDialogPortal = CommandDialogPrimitive.Portal;

function CommandDialogTrigger(props: CommandDialogPrimitive.Trigger.Props) {
  return <CommandDialogPrimitive.Trigger data-slot="command-dialog-trigger" {...props} />;
}

function CommandDialogBackdrop({ className, ...props }: CommandDialogPrimitive.Backdrop.Props) {
  return (
    <CommandDialogPrimitive.Backdrop
      className={cn(
        'fixed inset-0 z-50 bg-black/40 transition-all duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0',
        className,
      )}
      data-slot="command-dialog-backdrop"
      {...props}
    />
  );
}

function CommandDialogViewport({ className, ...props }: CommandDialogPrimitive.Viewport.Props) {
  return (
    <CommandDialogPrimitive.Viewport
      className={cn(
        'fixed inset-0 z-50 flex flex-col items-center px-4 py-[max(--spacing(4),4vh)] sm:py-[10vh]',
        className,
      )}
      data-slot="command-dialog-viewport"
      {...props}
    />
  );
}

function CommandDialogPopup({ className, children, ...props }: CommandDialogPrimitive.Popup.Props) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <CommandDialogPortal>
      <CommandDialogBackdrop />
      <CommandDialogViewport>
        <CommandDialogPrimitive.Popup
          className={cn(
            '-translate-y-[calc(1.25rem*var(--nested-dialogs))] relative row-start-2 flex max-h-100 min-h-0 w-full min-w-0 max-w-xl scale-[calc(1-0.1*var(--nested-dialogs))] flex-col rounded-xl border bg-white opacity-[calc(1-0.1*var(--nested-dialogs))] shadow-xl transition-[scale,opacity,translate] duration-150 ease-in-out will-change-transform data-nested:data-ending-style:translate-y-8 data-nested:data-starting-style:translate-y-8 data-nested-dialog-open:origin-top data-ending-style:scale-98 data-starting-style:scale-98 data-ending-style:opacity-0 data-starting-style:opacity-0',
            className,
          )}
          data-slot="command-dialog-popup"
          initialFocus={inputRef}
          {...props}
        >
          <CommandInputContext.Provider value={{ inputRef }}>
            {children}
          </CommandInputContext.Provider>
        </CommandDialogPrimitive.Popup>
      </CommandDialogViewport>
    </CommandDialogPortal>
  );
}

function Command({
  autoHighlight = 'always',
  keepHighlight = true,
  ...props
}: React.ComponentProps<typeof Autocomplete>) {
  return <Autocomplete autoHighlight={autoHighlight} keepHighlight={keepHighlight} {...props} />;
}

function CommandInput({
  className,
  placeholder = undefined,
  ...props
}: React.ComponentProps<typeof AutocompleteInput>) {
  const { inputRef } = React.useContext(CommandInputContext);

  return (
    <AutocompleteInput
      className={cn(
        'bg-transparent! rounded-none border-b border-x-0 border-t-0 pl-9 min-h-11 shadow-none focus-visible:border-neutral',
        className,
      )}
      placeholder={placeholder}
      ref={inputRef}
      startAddon={<HugeiconsIcon icon={SearchIcon} />}
      {...props}
    />
  );
}

function CommandList({ className, ...props }: React.ComponentProps<typeof AutocompleteList>) {
  return (
    <AutocompleteList
      className={cn('[--popup-padding:0.5rem] pt-0!', className)}
      data-slot="command-list"
      {...props}
    />
  );
}

function CommandEmpty({ className, ...props }: React.ComponentProps<typeof AutocompleteEmpty>) {
  return (
    <AutocompleteEmpty
      className={cn('not-empty:py-6', className)}
      data-slot="command-empty"
      {...props}
    />
  );
}

function CommandPanel({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className="max-h-100 flex flex-col min-h-0" {...props} />;
}

function CommandGroup({ className, ...props }: React.ComponentProps<typeof AutocompleteGroup>) {
  return (
    <AutocompleteGroup
      className={cn('not-empty:p-(--popup-padding) not-first:border-t pt-1! pr-0!', className)}
      data-slot="command-group"
      {...props}
    />
  );
}

function CommandGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof AutocompleteGroupLabel>) {
  return (
    <AutocompleteGroupLabel className={className} data-slot="command-group-label" {...props} />
  );
}

function CommandCollection({ ...props }: React.ComponentProps<typeof AutocompleteCollection>) {
  return <AutocompleteCollection data-slot="command-collection" {...props} />;
}

function CommandItem({ className, ...props }: React.ComponentProps<typeof AutocompleteItem>) {
  return (
    <AutocompleteItem className={cn('py-1.5', className)} data-slot="command-item" {...props} />
  );
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof AutocompleteSeparator>) {
  return (
    <AutocompleteSeparator
      className={cn('my-2', className)}
      data-slot="command-separator"
      {...props}
    />
  );
}

function CommandShortcut({ className, ...props }: React.ComponentProps<'kbd'>) {
  return (
    <span
      className={cn('ms-auto font-medium text-muted/75 text-xs tracking-widest', className)}
      data-slot="command-shortcut"
      {...props}
    />
  );
}

function CommandFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-2 border-t px-4 py-3 text-muted text-xs',
        className,
      )}
      data-slot="command-footer"
      {...props}
    />
  );
}

export {
  Command,
  CommandCollection,
  CommandDialog,
  CommandDialogPopup,
  CommandDialogTrigger,
  CommandEmpty,
  CommandFooter,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandList,
  CommandPanel,
  CommandSeparator,
  CommandShortcut,
};
