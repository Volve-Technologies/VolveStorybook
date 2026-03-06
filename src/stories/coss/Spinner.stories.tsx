import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from '@/app/ui/components/spinner';

const meta = {
  title: 'Volve UI/Feedback/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the spinner',
    },
    kind: {
      control: { type: 'select' },
      options: ['default', 'inset'],
      description: 'Visual kind — default standalone or inset inside another element',
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    kind: 'default',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-6">
      {(['2xs', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Spinner size={size} />
          <span className="text-xs text-muted-foreground">{size}</span>
        </div>
      ))}
    </div>
  ),
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'lg',
  },
};

export const Inset: Story = {
  args: {
    ...Default.args,
    kind: 'inset',
  },
};
