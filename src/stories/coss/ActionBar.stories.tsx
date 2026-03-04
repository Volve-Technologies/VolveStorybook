import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  ActionBar,
  ActionBarGroup,
  ActionBarItem,
  ActionBarSelection,
  ActionBarSeparator,
  ActionBarXClose,
} from '@/app/ui/components/action-bar';
import { Delete01Icon, Edit01Icon, Copy01Icon, Download01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import * as React from 'react';

const meta: Meta<typeof ActionBar> = {
  title: 'Volve UI/Overlays/ActionBar',
  component: ActionBar,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ActionBar>;

function ActionBarDemo({ open: initialOpen = true }: { open?: boolean }) {
  const [open, setOpen] = React.useState(initialOpen);
  return (
    <div className="relative h-32 flex items-center justify-center">
      <button
        onClick={() => setOpen((o) => !o)}
        className="px-3 py-1.5 text-sm border rounded-md"
      >
        {open ? 'Hide' : 'Show'} ActionBar
      </button>
      <ActionBar open={open} onOpenChange={setOpen} side="bottom" align="center">
        <ActionBarGroup>
          <ActionBarSelection>3 selected</ActionBarSelection>
          <ActionBarSeparator />
          <ActionBarItem>
            <HugeiconsIcon icon={Edit01Icon} />
            Edit
          </ActionBarItem>
          <ActionBarItem>
            <HugeiconsIcon icon={Copy01Icon} />
            Copy
          </ActionBarItem>
          <ActionBarItem>
            <HugeiconsIcon icon={Download01Icon} />
            Download
          </ActionBarItem>
          <ActionBarSeparator />
          <ActionBarItem>
            <HugeiconsIcon icon={Delete01Icon} />
            Delete
          </ActionBarItem>
          <ActionBarSeparator />
          <ActionBarXClose />
        </ActionBarGroup>
      </ActionBar>
    </div>
  );
}

export const Default: Story = {
  render: () => <ActionBarDemo />,
};

export const Vertical: Story = {
  render: () => {
    function VerticalDemo() {
      const [open, setOpen] = React.useState(true);
      return (
        <div className="relative h-48 flex items-center justify-center">
          <button
            onClick={() => setOpen((o) => !o)}
            className="px-3 py-1.5 text-sm border rounded-md"
          >
            {open ? 'Hide' : 'Show'} ActionBar
          </button>
          <ActionBar open={open} onOpenChange={setOpen} orientation="vertical" align="start" side="bottom">
            <ActionBarGroup>
              <ActionBarItem>
                <HugeiconsIcon icon={Edit01Icon} />
                Edit
              </ActionBarItem>
              <ActionBarItem>
                <HugeiconsIcon icon={Copy01Icon} />
                Copy
              </ActionBarItem>
              <ActionBarItem>
                <HugeiconsIcon icon={Delete01Icon} />
                Delete
              </ActionBarItem>
              <ActionBarXClose />
            </ActionBarGroup>
          </ActionBar>
        </div>
      );
    }
    return <VerticalDemo />;
  },
};
