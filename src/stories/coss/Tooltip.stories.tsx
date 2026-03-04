import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipPopup,
} from '@/app/ui/components/tooltip';
import { Button } from '@/app/ui/components/button';
import { Kbd } from '@/app/ui/components/kbd';

const meta = {
  title: 'Volve UI/Overlays/Tooltip',
  component: Tooltip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger render={<Button variant="secondary">Hover me</Button>} />
      <TooltipPopup>This is a tooltip</TooltipPopup>
    </Tooltip>
  ),
};

export const WithKbd: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger render={<Button variant="secondary">Save</Button>} />
      <TooltipPopup>
        Save document
        <Kbd>S</Kbd>
      </TooltipPopup>
    </Tooltip>
  ),
};

export const Sides: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-8 p-12">
      <Tooltip>
        <TooltipTrigger render={<Button variant="secondary">Top</Button>} />
        <TooltipPopup side="top">Tooltip on top</TooltipPopup>
      </Tooltip>
      <div className="flex gap-8">
        <Tooltip>
          <TooltipTrigger render={<Button variant="secondary">Left</Button>} />
          <TooltipPopup side="left">Tooltip on left</TooltipPopup>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button variant="secondary">Right</Button>} />
          <TooltipPopup side="right">Tooltip on right</TooltipPopup>
        </Tooltip>
      </div>
      <Tooltip>
        <TooltipTrigger render={<Button variant="secondary">Bottom</Button>} />
        <TooltipPopup side="bottom">Tooltip on bottom</TooltipPopup>
      </Tooltip>
    </div>
  ),
};

export const Delay: Story = {
  render: () => (
    <Tooltip delay={800}>
      <TooltipTrigger render={<Button variant="secondary">Slow tooltip</Button>} />
      <TooltipPopup>Appears after 800ms delay</TooltipPopup>
    </Tooltip>
  ),
};
