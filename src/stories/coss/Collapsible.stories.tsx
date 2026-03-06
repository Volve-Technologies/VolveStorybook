import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsiblePanel,
} from '@/app/ui/components/collapsible';
import { ArrowDown01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

const meta = {
  title: 'Volve UI/Advanced/Collapsible',
  component: Collapsible,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    defaultOpen: {
      control: { type: 'boolean' },
      description: 'The initial open state of the collapsible (uncontrolled)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    open: {
      control: { type: 'boolean' },
      description: 'The controlled open state of the collapsible',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onOpenChange: {
      action: 'onOpenChange',
      description: 'Callback fired when the open state changes',
      table: {
        type: { summary: '(open: boolean) => void' },
      },
    },
  },
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultOpen: false,
  },
  render: (args) => (
    <Collapsible className="w-72 rounded-lg border" {...args}>
      <CollapsibleTrigger className="w-full px-4 py-3 text-sm font-medium text-left hover:bg-surface-2 rounded-lg">
        Show details
      </CollapsibleTrigger>
      <CollapsiblePanel>
        <div className="px-4 pb-4 text-sm text-muted-foreground">
          <p>Here are the details you requested. This content collapses and expands when you click the trigger above.</p>
          <p className="mt-2">You can put any content in here — forms, lists, images, or more.</p>
        </div>
      </CollapsiblePanel>
    </Collapsible>
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <Collapsible defaultOpen className="w-72 rounded-lg border">
      <CollapsibleTrigger className="w-full px-4 py-3 text-sm font-medium text-left hover:bg-surface-2 rounded-lg">
        Hide details
      </CollapsibleTrigger>
      <CollapsiblePanel>
        <div className="px-4 pb-4 text-sm text-muted-foreground">
          <p>This collapsible starts in an open state thanks to the <code>defaultOpen</code> prop.</p>
          <p className="mt-2">Click the trigger to close it.</p>
        </div>
      </CollapsiblePanel>
    </Collapsible>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Collapsible className="w-72 rounded-lg border">
      <CollapsibleTrigger className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium hover:bg-surface-2 rounded-lg">
        Advanced settings
        <HugeiconsIcon
          icon={ArrowDown01Icon}
          className="size-4 transition-transform group-data-open:rotate-180"
        />
      </CollapsibleTrigger>
      <CollapsiblePanel>
        <div className="px-4 pb-4 flex flex-col gap-2 text-sm text-muted-foreground">
          <p>Debug mode: <span className="text-foreground font-medium">disabled</span></p>
          <p>Log level: <span className="text-foreground font-medium">info</span></p>
          <p>Cache TTL: <span className="text-foreground font-medium">300s</span></p>
        </div>
      </CollapsiblePanel>
    </Collapsible>
  ),
};
