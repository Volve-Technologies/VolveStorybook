import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress, ProgressTrack, ProgressValue } from '@/app/ui/components/progress';

const meta = {
  title: 'Volve UI/Feedback/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current progress value between 0 and 100',
      table: {
        defaultValue: { summary: 0 },
      },
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
  },
  render: (args) => (
    <div className="w-80">
      <Progress {...args}>
        <ProgressTrack />
      </Progress>
    </div>
  ),
};

export const Quarter: Story = {
  render: () => (
    <div className="w-80">
      <Progress value={25}>
        <ProgressTrack />
      </Progress>
    </div>
  ),
};

export const Half: Story = {
  render: () => (
    <div className="w-80">
      <Progress value={50}>
        <ProgressTrack />
      </Progress>
    </div>
  ),
};

export const Full: Story = {
  render: () => (
    <div className="w-80">
      <Progress value={100}>
        <ProgressTrack />
      </Progress>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">Loading...</span>
        <Progress value={72} format={{ style: 'percent', maximumFractionDigits: 0 }}>
          <ProgressValue>
            {(formattedValue) => (
              <span className="text-sm font-medium">{formattedValue}</span>
            )}
          </ProgressValue>
        </Progress>
      </div>
      <Progress value={72}>
        <ProgressTrack />
      </Progress>
    </div>
  ),
};
