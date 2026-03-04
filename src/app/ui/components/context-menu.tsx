import { menuItem } from '@/app/ui/components/menu/style';
import { popup } from '@/app/ui/popup';
import { cn } from '@/app/utils/helpers';
import { ContextMenu as ContextMenuPrimitive } from '@base-ui/react/context-menu';
import { ArrowDownIcon, ArrowRight01Icon, Tick02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { type VariantProps } from 'cva';

export const ContextMenu = ContextMenuPrimitive.Root;
export const SubContextmenu = ContextMenuPrimitive.SubmenuRoot;
export const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
export const ContextMenuGroup = ContextMenuPrimitive.Group;
export const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
export const ContextMenuPortal = ContextMenuPrimitive.Portal;
export const ContextMenuBackdrop = ContextMenuPrimitive.Backdrop;
export const ContextMenuPositioner = ContextMenuPrimitive.Positioner;
export const ContextMenuArrow = ContextMenuPrimitive.Arrow;

export function ContextMenuGroupLabel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.GroupLabel>) {
  return (
    <ContextMenuPrimitive.GroupLabel className={cn(popup.groupLabel, className)} {...props}>
      {children}
    </ContextMenuPrimitive.GroupLabel>
  );
}

export function ContextMenuTriggerIcon({
  className,
  ...props
}: Omit<React.ComponentProps<typeof HugeiconsIcon>, 'icon'>) {
  return (
    <HugeiconsIcon
      className={cn(
        'my-auto size-4! shrink-0 in-data-[size=sm]:-mr-0.5 -mr-1.5 ml-auto',
        className,
      )}
      data-slot="Contextmenu-trigger-icon"
      {...props}
      icon={ArrowDownIcon}
    />
  );
}

interface Props
  extends React.ComponentProps<typeof ContextMenuPrimitive.Item>,
    VariantProps<typeof menuItem> {}

export function ContextMenuItem({ className, variant, children, ...props }: Props) {
  return (
    <ContextMenuPrimitive.Item className={cn(menuItem({ variant, className }))} {...props}>
      {children}
    </ContextMenuPrimitive.Item>
  );
}

export function ContextMenuCheckboxItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      className={cn(menuItem({ variant: 'checkbox' }), 'group', className)}
      {...props}
    >
      <span className="shrink-0 size-4 rounded-sm grid place-items-center border border-surface-6 hover:border-primary-10 transition-colors has-data-checked:border-primary-10 has-data-checked:text-white has-data-checked:bg-primary-10">
        <ContextMenuPrimitive.CheckboxItemIndicator
          className={'invisible group-data-checked:visible'}
        >
          <HugeiconsIcon icon={Tick02Icon} className={'size-3.5'} strokeWidth={2} />
        </ContextMenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
}

export function ContextMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) {
  return (
    <ContextMenuPrimitive.RadioItem
      className={cn(menuItem({ variant: 'checkbox' }), 'group', className)}
      {...props}
    >
      {children}
      <span className="shrink-0 invisible ml-auto group-hover:visible has-data-checked:visible">
        <ContextMenuPrimitive.RadioItemIndicator className={'invisible group-data-checked:visible'}>
          <HugeiconsIcon icon={Tick02Icon} className={'size-5'} />
        </ContextMenuPrimitive.RadioItemIndicator>
      </span>
    </ContextMenuPrimitive.RadioItem>
  );
}

export function ContextMenuCheckboxItemText({ className, ...props }: React.ComponentProps<'span'>) {
  return <span className={cn('col-start-2', className)} {...props} />;
}

export function ContextMenuPopup({
  className,
  children,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Positioner>) {
  return (
    <ContextMenuPortal>
      <ContextMenuBackdrop />
      <ContextMenuPositioner sideOffset={sideOffset} {...props}>
        <ContextMenuPrimitive.Popup
          className={cn(
            popup.base,
            popup.transition,
            'min-w-36 p-(--popup-padding) text-base',
            className,
          )}
        >
          {children}
        </ContextMenuPrimitive.Popup>
      </ContextMenuPositioner>
    </ContextMenuPortal>
  );
}

export function ContextMenuSubContextmenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubmenuTrigger>) {
  return (
    <ContextMenuPrimitive.SubmenuTrigger
      className={cn(menuItem({ variant: 'default', className }))}
      {...props}
    >
      {children}
      <HugeiconsIcon icon={ArrowRight01Icon} className="ml-auto shrink-0 size-4! -mr-1.5" />
    </ContextMenuPrimitive.SubmenuTrigger>
  );
}

export function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return <ContextMenuPrimitive.Separator className={cn(popup.separator, className)} {...props} />;
}
