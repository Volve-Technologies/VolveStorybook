import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionTriggerIcon,
  AccordionPanel,
} from '@/app/ui/components/accordion';

const meta = {
  title: 'Volve UI/Advanced/Accordion',
  component: Accordion,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Accordion className="w-80 divide-y rounded-lg border">
      <AccordionItem value="item-1">
        <AccordionTrigger className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium hover:bg-surface-2">
          What is Volve UI?
          <AccordionTriggerIcon />
        </AccordionTrigger>
        <AccordionPanel>
          <div className="px-4 pb-4 text-sm text-muted-foreground">
            Volve UI is a component library built on Base UI primitives with
            Tailwind CSS styling for accessible, composable user interfaces.
          </div>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium hover:bg-surface-2">
          Is it accessible?
          <AccordionTriggerIcon />
        </AccordionTrigger>
        <AccordionPanel>
          <div className="px-4 pb-4 text-sm text-muted-foreground">
            Yes. The accordion follows WAI-ARIA guidelines for disclosure
            widgets, supporting full keyboard navigation and screen reader
            announcements.
          </div>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium hover:bg-surface-2">
          Can I customize styles?
          <AccordionTriggerIcon />
        </AccordionTrigger>
        <AccordionPanel>
          <div className="px-4 pb-4 text-sm text-muted-foreground">
            Absolutely. Every component accepts a className prop and styles are
            applied via Tailwind utility classes so you can override anything
            with a simple class merge.
          </div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion multiple className="w-80 divide-y rounded-lg border">
      <AccordionItem value="item-1">
        <AccordionTrigger className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium hover:bg-surface-2">
          First panel
          <AccordionTriggerIcon />
        </AccordionTrigger>
        <AccordionPanel>
          <div className="px-4 pb-4 text-sm text-muted-foreground">
            Multiple mode lets you expand more than one item at a time. This
            panel can stay open while you open others.
          </div>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium hover:bg-surface-2">
          Second panel
          <AccordionTriggerIcon />
        </AccordionTrigger>
        <AccordionPanel>
          <div className="px-4 pb-4 text-sm text-muted-foreground">
            Open me alongside the first panel — both will remain visible at
            the same time.
          </div>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium hover:bg-surface-2">
          Third panel
          <AccordionTriggerIcon />
        </AccordionTrigger>
        <AccordionPanel>
          <div className="px-4 pb-4 text-sm text-muted-foreground">
            You can open all three panels simultaneously in multiple mode.
          </div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<(string | null)[]>(['item-1']);

    return (
      <div className="flex flex-col gap-4 items-start w-80">
        <div className="flex gap-2 flex-wrap text-xs">
          <span className="text-muted-foreground">Open:</span>
          {value.length === 0 ? (
            <span className="text-muted-foreground italic">none</span>
          ) : (
            value.map((v) => (
              <span key={v} className="font-medium">
                {v}
              </span>
            ))
          )}
        </div>
        <Accordion
          value={value}
          onValueChange={setValue}
          multiple
          className="w-full divide-y rounded-lg border"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium hover:bg-surface-2">
              Controlled item 1
              <AccordionTriggerIcon />
            </AccordionTrigger>
            <AccordionPanel>
              <div className="px-4 pb-4 text-sm text-muted-foreground">
                This accordion is fully controlled via React state. The open
                items are shown above the accordion.
              </div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium hover:bg-surface-2">
              Controlled item 2
              <AccordionTriggerIcon />
            </AccordionTrigger>
            <AccordionPanel>
              <div className="px-4 pb-4 text-sm text-muted-foreground">
                Toggling this item updates the value array in state, which
                drives the controlled accordion.
              </div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium hover:bg-surface-2">
              Controlled item 3
              <AccordionTriggerIcon />
            </AccordionTrigger>
            <AccordionPanel>
              <div className="px-4 pb-4 text-sm text-muted-foreground">
                You can programmatically open or close any item by mutating
                the value array.
              </div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    );
  },
};
