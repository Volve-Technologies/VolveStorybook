import type { Meta, StoryObj } from '@storybook/react-vite';
import { Separator } from '@/app/ui/components/separator';

const meta = {
  title: 'Volve UI/Layout/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Direction of the separator line',
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <div className="w-64">
      <Separator {...args} />
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    ...Default.args,
    orientation: 'vertical',
  },
  render: (args) => (
    <div className="flex h-8 items-center">
      <Separator {...args} className="h-8" />
    </div>
  ),
};

export const WithContent: Story = {
  render: () => (
    <div className="w-72 space-y-3">
      <p className="text-sm text-muted-foreground">Section A</p>
      <Separator orientation="horizontal" />
      <p className="text-sm text-muted-foreground">Section B</p>
      <Separator orientation="horizontal" />
      <div className="flex h-5 items-center gap-3 text-sm">
        <span>Blog</span>
        <Separator orientation="vertical" />
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Source</span>
      </div>
    </div>
  ),
};
