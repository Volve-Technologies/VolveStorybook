import { menuItem } from '@/app/ui/components/menu/style';
import { popup } from '@/app/ui/popup';
import { cn } from '@/app/utils/helpers';
import { Menu as MenuPrimitive } from '@base-ui/react/menu';
import { ArrowDownIcon, ArrowRight01Icon, Tick02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { type VariantProps } from 'cva';

export const Menu = MenuPrimitive.Root;
export const Submenu = MenuPrimitive.SubmenuRoot;
export const MenuTrigger = MenuPrimitive.Trigger;
export const MenuGroup = MenuPrimitive.Group;
export const MenuRadioGroup = MenuPrimitive.RadioGroup;
export const MenuPortal = MenuPrimitive.Portal;
export const MenuBackdrop = MenuPrimitive.Backdrop;
export const MenuPositioner = MenuPrimitive.Positioner;
export const MenuArrow = MenuPrimitive.Arrow;

export function MenuGroupLabel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.GroupLabel>) {
  return (
    <MenuPrimitive.GroupLabel className={cn(popup.groupLabel, className)} {...props}>
      {children}
    </MenuPrimitive.GroupLabel>
  );
}

export function MenuTriggerIcon({
  className,
  ...props
}: Omit<React.ComponentProps<typeof HugeiconsIcon>, 'icon'>) {
  return (
    <HugeiconsIcon
      className={cn(
        'my-auto size-4! shrink-0 in-data-[size=sm]:-mr-0.5 -mr-1.5 ml-auto',
        className,
      )}
      data-slot="menu-trigger-icon"
      {...props}
      icon={ArrowDownIcon}
    />
  );
}

interface Props
  extends React.ComponentProps<typeof MenuPrimitive.Item>,
    VariantProps<typeof menuItem> {}

export function MenuItem({ className, variant, children, ...props }: Props) {
  return (
    <MenuPrimitive.Item className={cn(menuItem({ variant, className }))} {...props}>
      {children}
    </MenuPrimitive.Item>
  );
}

export function MenuCheckboxItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.CheckboxItem>) {
  return (
    <MenuPrimitive.CheckboxItem
      className={cn(menuItem({ variant: 'checkbox' }), 'group', className)}
      {...props}
    >
      <span className="shrink-0 size-4 rounded-sm grid place-items-center border border-surface-6 hover:border-primary-10 transition-colors has-data-checked:border-primary-10 has-data-checked:text-white has-data-checked:bg-primary-10">
        <MenuPrimitive.CheckboxItemIndicator className={'invisible group-data-checked:visible'}>
          <HugeiconsIcon icon={Tick02Icon} className={'size-3.5 text-white'} strokeWidth={2} />
        </MenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  );
}

export function MenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.RadioItem>) {
  return (
    <MenuPrimitive.RadioItem
      className={cn(menuItem({ variant: 'checkbox' }), 'group', className)}
      {...props}
    >
      {children}
      <span className="shrink-0 invisible ml-auto group-hover:visible has-data-checked:visible">
        <MenuPrimitive.RadioItemIndicator className={'invisible group-data-checked:visible'}>
          <HugeiconsIcon icon={Tick02Icon} className={'size-5'} />
        </MenuPrimitive.RadioItemIndicator>
      </span>
    </MenuPrimitive.RadioItem>
  );
}

// export function MenuCheckboxItemIndicator() {
//   return (
//     <MenuPrimitive.CheckboxItemIndicator className={'-mr-1 md:-mr-0.5 ml-auto'}>
//       <HugeiconsIcon icon={Tick02Icon} className={'size-5'} />
//     </MenuPrimitive.CheckboxItemIndicator>
//   );
// }

export function MenuCheckboxItemText({ className, ...props }: React.ComponentProps<'span'>) {
  return <span className={cn('col-start-2', className)} {...props} />;
}

export function MenuPopup({
  className,
  children,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Positioner>) {
  return (
    <MenuPortal>
      <MenuBackdrop />
      <MenuPositioner sideOffset={sideOffset} {...props}>
        <MenuPrimitive.Popup
          className={cn(
            popup.base,
            popup.transition,
            'min-w-36 p-(--popup-padding) text-base',
            className,
          )}
        >
          {children}
        </MenuPrimitive.Popup>
      </MenuPositioner>
    </MenuPortal>
  );
}

export function MenuSubmenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.SubmenuTrigger>) {
  return (
    <MenuPrimitive.SubmenuTrigger
      className={cn(menuItem({ variant: 'default', className }))}
      {...props}
    >
      {children}
      <HugeiconsIcon icon={ArrowRight01Icon} className="ml-auto shrink-0 size-4! -mr-1.5" />
    </MenuPrimitive.SubmenuTrigger>
  );
}

export function MenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Separator>) {
  return <MenuPrimitive.Separator className={cn(popup.separator, className)} {...props} />;
}
