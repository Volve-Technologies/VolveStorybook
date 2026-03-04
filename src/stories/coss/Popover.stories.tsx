import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Popover,
  PopoverTrigger,
  PopoverPopup,
  PopoverTitle,
  PopoverDescription,
  PopoverClose,
} from '@/app/ui/components/popover';
import { Button } from '@/app/ui/components/button';

const meta = {
  title: 'Volve UI/Overlays/Popover',
  component: Popover,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="secondary">Open popover</Button>} />
      <PopoverPopup className="w-72 p-4">
        <PopoverTitle>Popover</PopoverTitle>
        <PopoverDescription className="mt-1">
          This is some helpful information displayed inside the popover. It can contain
          any content you need to surface contextually.
        </PopoverDescription>
      </PopoverPopup>
    </Popover>
  ),
};

export const WithClose: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="secondary">Open popover</Button>} />
      <PopoverPopup className="w-72 p-4">
        <PopoverTitle>Confirm action</PopoverTitle>
        <PopoverDescription className="mt-1">
          Are you sure you want to proceed? This cannot be undone.
        </PopoverDescription>
        <div className="mt-4 flex gap-2 justify-end">
          <PopoverClose render={<Button variant="ghost" size="sm" />}>Cancel</PopoverClose>
          <PopoverClose render={<Button variant="primary" size="sm" />}>Confirm</PopoverClose>
        </div>
      </PopoverPopup>
    </Popover>
  ),
};

export const Sides: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-8 p-12">
      <Popover>
        <PopoverTrigger render={<Button variant="secondary">Top</Button>} />
        <PopoverPopup side="top" className="p-3">
          <p className="text-sm">Appears on top</p>
        </PopoverPopup>
      </Popover>
      <div className="flex gap-8">
        <Popover>
          <PopoverTrigger render={<Button variant="secondary">Left</Button>} />
          <PopoverPopup side="left" className="p-3">
            <p className="text-sm">Appears on left</p>
          </PopoverPopup>
        </Popover>
        <Popover>
          <PopoverTrigger render={<Button variant="secondary">Right</Button>} />
          <PopoverPopup side="right" className="p-3">
            <p className="text-sm">Appears on right</p>
          </PopoverPopup>
        </Popover>
      </div>
      <Popover>
        <PopoverTrigger render={<Button variant="secondary">Bottom</Button>} />
        <PopoverPopup side="bottom" className="p-3">
          <p className="text-sm">Appears on bottom</p>
        </PopoverPopup>
      </Popover>
    </div>
  ),
};
