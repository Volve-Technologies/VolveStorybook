import { Button } from '@/app/ui/components/button';
import { menuItem } from '@/app/ui/components/menu/style';
import { popup } from '@/app/ui/popup';
import { cn } from '@/app/utils/helpers';
import { Select as SelectPrimitive } from '@base-ui/react/select';
import { ArrowDownIcon, Tick02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

const Select = SelectPrimitive.Root;
const SelectIcon = SelectPrimitive.Icon;
const SelectItemIndicator = SelectPrimitive.ItemIndicator;
const SelectItemText = SelectPrimitive.ItemText;
const SelectGroup = SelectPrimitive.Group;
const SelectPortal = SelectPrimitive.Portal;
const SelectBackdrop = SelectPrimitive.Backdrop;
const SelectPositioner = SelectPrimitive.Positioner;

function SelectValue({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return (
    <SelectPrimitive.Value
      className={cn('line-clamp-1 flex items-center gap-1.5', className)}
      {...props}
    />
  );
}

function SelectGroupLabel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.GroupLabel>) {
  return (
    <SelectPrimitive.GroupLabel className={cn(popup.groupLabel, className)} {...props}>
      {children}
    </SelectPrimitive.GroupLabel>
  );
}

interface SelectTriggerProps extends React.ComponentProps<typeof Button> {}

function SelectTrigger({ children, className, ...props }: SelectTriggerProps) {
  return (
    <SelectPrimitive.Trigger
      onPointerDown={(e) => {
        e.stopPropagation();
      }}
      render={
        <Button
          variant={'secondary'}
          className={cn(
            'flex! text-sm! data-[size=lg]:pl-3 data-invalid:text-destructive data-invalid:border-destructive justify-start',
            className,
          )}
        >
          {children ?? (
            <>
              <SelectValue />
              <SelectTriggerIcon />
            </>
          )}
        </Button>
      }
      nativeButton
      {...props}
    />
  );
}

function SelectTriggerIcon() {
  return (
    <SelectIcon className="ml-auto -mr-1 shrink-0">
      <HugeiconsIcon className={'size-4'} data-slot="select-trigger-icon" icon={ArrowDownIcon} />
    </SelectIcon>
  );
}

interface SelectItemProps extends React.ComponentProps<typeof SelectPrimitive.Item> {}

function SelectItem({ className, children, ...props }: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      className={cn(
        menuItem(),
        'grid min-w-[calc(var(--anchor-width)+var(--icon-size))] grid-cols-[var(--icon-size)_1fr] items-center gap-1.5 [--icon-size:1.25rem] [&_svg:not([class*="size-"])]:size-4 group-data-[side=none]:min-w-[calc(var(--anchor-width)+var(--icon-size)+0.25rem)]',
      )}
      {...props}
    >
      <SelectItemIndicator className="col-start-1">
        <HugeiconsIcon icon={Tick02Icon} className={'size-(--icon-size)'} />
      </SelectItemIndicator>
      <SelectItemText
        className={'col-start-2 flex items-center gap-1.5 font-normal first-letter:capitalize'}
      >
        {children}
      </SelectItemText>
    </SelectPrimitive.Item>
  );
}

interface SelectPopupProps extends React.ComponentProps<typeof SelectPositioner> {
  positionerClassName?: string;
}

function SelectPopup({
  className,
  children,
  positionerClassName,
  sideOffset = 0,
  ...props
}: SelectPopupProps) {
  return (
    <SelectPortal>
      <SelectBackdrop />
      <SelectPositioner className={positionerClassName} sideOffset={sideOffset} {...props}>
        <SelectPrimitive.Popup className={cn(popup.base, 'p-(--popup-padding)', className)}>
          {children}
        </SelectPrimitive.Popup>
      </SelectPositioner>
    </SelectPortal>
  );
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return <SelectPrimitive.Separator className={cn(popup.separator, className)} {...props} />;
}

export {
  Select,
  SelectIcon,
  SelectGroup,
  SelectValue,
  SelectGroupLabel,
  SelectTrigger,
  SelectTriggerIcon,
  SelectItem,
  SelectPopup,
  SelectSeparator,
};
