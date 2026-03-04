'use client';

import { popup } from '@/app/ui/popup';
import { cn } from '@/app/utils/helpers';
import { PreviewCard as PreviewCardPrimitive } from '@base-ui/react/preview-card';

const PreviewCard = PreviewCardPrimitive.Root;

function PreviewCardTrigger({ ...props }: PreviewCardPrimitive.Trigger.Props) {
  return <PreviewCardPrimitive.Trigger data-slot="preview-card-trigger" {...props} />;
}

function PreviewCardPopup({
  className,
  children,
  align = 'center',
  sideOffset = 4,
  anchor,
  ...props
}: PreviewCardPrimitive.Popup.Props & {
  align?: PreviewCardPrimitive.Positioner.Props['align'];
  sideOffset?: PreviewCardPrimitive.Positioner.Props['sideOffset'];
  anchor?: PreviewCardPrimitive.Positioner.Props['anchor'];
}) {
  return (
    <PreviewCardPrimitive.Portal>
      <PreviewCardPrimitive.Positioner
        align={align}
        anchor={anchor}
        className="z-50"
        data-slot="preview-card-positioner"
        sideOffset={sideOffset}
      >
        <PreviewCardPrimitive.Popup
          className={cn(popup.base, popup.transition, 'text-balance', className)}
          data-slot="preview-card-popup"
          {...props}
        >
          {children}
        </PreviewCardPrimitive.Popup>
      </PreviewCardPrimitive.Positioner>
    </PreviewCardPrimitive.Portal>
  );
}

export { PreviewCard, PreviewCardTrigger, PreviewCardPopup };
