import { Button } from '@/app/ui/components/button';
import { dialogPopup } from '@/app/ui/components/dialog/style';
import { cn } from '@/app/utils/helpers';
import { AlertDialog as AlertDialogPrimitive } from '@base-ui/react/alert-dialog';
import { type VariantProps } from 'cva';
import { useTranslations } from 'next-intl';

const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogClose = AlertDialogPrimitive.Close;
const AlertDialogPortal = AlertDialogPrimitive.Portal;
const AlertDialogBackdrop = AlertDialogPrimitive.Backdrop;

interface Props
  extends React.ComponentProps<typeof AlertDialogPrimitive.Popup>,
    VariantProps<typeof dialogPopup> {
  backdropClassName?: string;
}

function AlertDialogPopup({
  className,
  children,
  variant,
  size,
  backdropClassName = '',
  ...props
}: Props) {
  return (
    <AlertDialogPortal>
      <AlertDialogBackdrop
        className={cn(
          'fixed inset-0 bg-black/40 transition-all duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0 data-ending-style:duration-200',
          backdropClassName,
        )}
      />
      <AlertDialogPrimitive.Popup
        className={cn(
          dialogPopup({
            size,
            variant,
            className,
          }),
          'p-4',
        )}
        {...props}
      >
        {children}
      </AlertDialogPrimitive.Popup>
    </AlertDialogPortal>
  );
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      className={cn('-mt-1 mb-3 font-medium text-lg', className)}
      {...props}
    />
  );
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      className={cn('mb-1 max-w-[90%] text-muted text-sm', className)}
      {...props}
    />
  );
}

function AlertDialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('flex gap-2 sm:gap-3 pt-4 md:pt-6 max-sm:flex-col sm:justify-end', className)}
      {...props}
    />
  );
}

function AlertDialogCancel(props: React.ComponentProps<typeof AlertDialogPrimitive.Close>) {
  const t = useTranslations();
  return (
    <AlertDialogClose render={<Button variant={'secondary'} />} {...props}>
      {t('general.cancel')}
    </AlertDialogClose>
  );
}

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogClose,
  AlertDialogPopup,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
};
