import type { Meta, StoryObj } from '@storybook/react-vite';
import { ActionToolbar, ActionToolbarButton } from '@/app/ui/components/action-toolbar';
import { TooltipProvider } from '@/app/ui/components/tooltip';
import { HugeiconsIcon } from '@hugeicons/react';
import { Copy01Icon, Edit02Icon, Delete02Icon, Share01Icon } from '@hugeicons/core-free-icons';

const meta = {
  title: 'Volve UI/Navigation/Toolbar',
  component: ActionToolbar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof ActionToolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="group/action relative w-80">
      <div className="rounded-lg border p-4 text-sm text-muted-foreground">
        Hover over this card to reveal the action toolbar.
      </div>
      <div className="absolute top-2 right-2">
        <ActionToolbar>
          <ActionToolbarButton label="Copy">
            <HugeiconsIcon icon={Copy01Icon} />
          </ActionToolbarButton>
          <ActionToolbarButton label="Edit">
            <HugeiconsIcon icon={Edit02Icon} />
          </ActionToolbarButton>
          <ActionToolbarButton label="Delete">
            <HugeiconsIcon icon={Delete02Icon} />
          </ActionToolbarButton>
        </ActionToolbar>
      </div>
    </div>
  ),
};

export const Visible: Story = {
  render: () => (
    <div className="group/action relative w-80">
      <div className="rounded-lg border p-4 text-sm text-muted-foreground">
        The action toolbar is always visible here.
      </div>
      <div className="absolute top-2 right-2">
        <ActionToolbar className="opacity-100">
          <ActionToolbarButton label="Copy">
            <HugeiconsIcon icon={Copy01Icon} />
          </ActionToolbarButton>
          <ActionToolbarButton label="Edit">
            <HugeiconsIcon icon={Edit02Icon} />
          </ActionToolbarButton>
          <ActionToolbarButton label="Delete">
            <HugeiconsIcon icon={Delete02Icon} />
          </ActionToolbarButton>
        </ActionToolbar>
      </div>
    </div>
  ),
};

export const Standalone: Story = {
  render: () => (
    <ActionToolbar className="opacity-100">
      <ActionToolbarButton label="Copy">
        <HugeiconsIcon icon={Copy01Icon} />
      </ActionToolbarButton>
      <ActionToolbarButton label="Edit">
        <HugeiconsIcon icon={Edit02Icon} />
      </ActionToolbarButton>
      <ActionToolbarButton label="Share">
        <HugeiconsIcon icon={Share01Icon} />
      </ActionToolbarButton>
      <ActionToolbarButton label="Delete">
        <HugeiconsIcon icon={Delete02Icon} />
      </ActionToolbarButton>
    </ActionToolbar>
  ),
};
