import { Button } from '@/app/ui/components/button';
import { Card } from '@/app/ui/components/card';
import { dialogPopup } from '@/app/ui/components/dialog/style';
import { Icons } from '@/app/ui/components/icons';
import { ScrollArea } from '@/app/ui/components/scroll-area';
import { Group, GroupItem, GroupSeparator } from '@/app/ui/components/group';
import { cn } from '@/app/utils/helpers';
import { Dialog as DialogPrimitive } from '@base-ui/react/dialog';
import {
  Cancel01Icon,
  ArrowLeftIcon,
  ArrowRightIcon,
  MoreHorizontalIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { type VariantProps } from 'cva';
import { useTranslations } from 'next-intl';
import { Menu, MenuPopup, MenuTrigger } from '@/app/ui/components/menu';

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogClose = DialogPrimitive.Close;
const DialogPortal = DialogPrimitive.Portal;
const DialogBackdrop = DialogPrimitive.Backdrop;

function DialogXClose({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return (
    <DialogClose
      render={
        <Button
          className={cn('-mr-2 ml-auto group-has-data-[slot=dialog-nav]:ml-0', className)}
          variant={'ghost'}
          size={'sm'}
          kind={'icon'}
        >
          <HugeiconsIcon icon={Cancel01Icon} className="size-5" />
        </Button>
      }
      {...props}
    />
  );
}
interface Props
  extends React.ComponentProps<typeof DialogPrimitive.Popup>,
    VariantProps<typeof dialogPopup> {
  backdropClassName?: string;
}

function DialogPopup({
  className,
  variant,
  backdropClassName = '',
  children,
  size,
  ...props
}: Props) {
  return (
    <DialogPortal>
      <DialogBackdrop
        className={cn(
          'fixed inset-0 bg-black/40 transition-all duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0 data-ending-style:duration-200',
          backdropClassName,
        )}
      />
      <DialogPrimitive.Popup
        className={cn(
          dialogPopup({
            size,
            variant,
            className,
          }),
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Popup>
    </DialogPortal>
  );
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={cn('mb-1.5 p-0.5 group text-sm flex items-center', className)}
      {...props}
    />
  );
}

function DialogTitleButton({ className, ...props }: React.ComponentProps<typeof Button>) {
  return (
    <Button
      className={cn('-ml-1 mr-1', className)}
      variant={'ghost'}
      size={'sm'}
      kind={'icon'}
      {...props}
    />
  );
}

function DialogTitleBreadcrumb({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <div
      className={cn(
        'text-muted whitespace-nowrap last-of-type:font-medium last-of-type:mr-2 last-of-type:text-foreground',
        className,
      )}
      {...props}
    />
  );
}

function DialogTitleMenu({ className, children, ...props }: React.ComponentProps<typeof Button>) {
  return (
    <Menu>
      <MenuTrigger
        render={
          <Button
            variant="ghost"
            size="sm"
            kind="icon"
            className={cn('-ml-0.5', className)}
            {...props}
          >
            <HugeiconsIcon icon={MoreHorizontalIcon} className="size-5.5 md:size-5" />
          </Button>
        }
      />
      <MenuPopup align="start">{children}</MenuPopup>
    </Menu>
  );
}

function DialogTitleSeparator({ className, ...props }: React.ComponentProps<typeof Icons.slash>) {
  return <Icons.slash className={cn('size-4 mx-1 shrink-0 inline-block', className)} {...props} />;
}

function DialogContent({ className, ...props }: React.ComponentProps<typeof Card>) {
  return (
    <Card
      className={cn('p-0 overflow-hidden grow flex flex-col rounded-md min-h-0', className)}
      {...props}
    />
  );
}

function DialogScrollArea({
  className,
  viewportClassName,
  ...props
}: React.ComponentProps<typeof ScrollArea>) {
  return (
    <ScrollArea
      viewportClassName={cn('p-4 flex flex-col', viewportClassName)}
      className={cn('flex flex-col', className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      className={cn('mb-1 max-w-[90%] text-muted text-sm', className)}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('flex gap-2 border-t sm:gap-3 p-4 max-sm:flex-col sm:justify-end', className)}
      {...props}
    />
  );
}

function DialogCancel(props: React.ComponentProps<typeof Button>) {
  const t = useTranslations();
  return (
    <DialogClose render={<Button variant={'secondary'} {...props} />}>
      {props.children ?? t('general.cancel')}
    </DialogClose>
  );
}

function DialogNav({ className, ...props }: React.ComponentProps<typeof Group>) {
  return <Group data-slot="dialog-nav" className={cn('ml-auto mr-1', className)} {...props} />;
}

function DialogPrevNavButton({ className, ...props }: React.ComponentProps<typeof Button>) {
  return (
    <>
      <GroupItem
        render={
          <Button variant={'secondary'} kind={'icon'} size={'sm'} {...props}>
            <HugeiconsIcon icon={ArrowLeftIcon} />
          </Button>
        }
      />
      <GroupSeparator />
    </>
  );
}

function DialogNextNavButton({ className, ...props }: React.ComponentProps<typeof Button>) {
  return (
    <>
      <GroupItem
        render={
          <Button variant={'secondary'} kind={'icon'} size={'sm'} {...props}>
            <HugeiconsIcon icon={ArrowRightIcon} />
          </Button>
        }
      />
    </>
  );
}

export {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogXClose,
  DialogPopup,
  DialogTitle,
  DialogTitleBreadcrumb,
  DialogTitleSeparator,
  DialogTitleButton,
  DialogDescription,
  DialogContent,
  DialogScrollArea,
  DialogFooter,
  DialogCancel,
  DialogNav,
  DialogPrevNavButton,
  DialogNextNavButton,
  DialogTitleMenu,
};
