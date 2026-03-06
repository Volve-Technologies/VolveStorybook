import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  CircularProgress,
  CircularProgressRoot,
  CircularProgressIndicator,
  CircularProgressTrack,
  CircularProgressRange,
  CircularProgressValueText,
} from '@/app/ui/components/circular-progress';

const meta = {
  title: 'Volve UI/Data Display/Meter',
  component: CircularProgress,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current progress value between 0 and 100. Pass null for indeterminate state.',
      table: {
        defaultValue: { summary: 0 },
      },
    },
    size: {
      control: { type: 'number' },
      description: 'Diameter of the circular progress indicator in pixels',
      table: {
        defaultValue: { summary: 48 },
      },
    },
    thickness: {
      control: { type: 'number' },
      description: 'Thickness of the circular track stroke in pixels',
    },
    label: {
      control: { type: 'text' },
      description: 'Accessible label text displayed in the center of the circle',
    },
    color: {
      control: { type: 'color' },
      description: 'Color of the progress indicator arc',
    },
  },
} satisfies Meta<typeof CircularProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 75,
    size: 48,
    label: 'Progress',
  },
};

export const Quarter: Story = {
  render: () => <CircularProgress value={25} size={64} />,
};

export const Full: Story = {
  render: () => <CircularProgress value={100} size={64} />,
};

export const Indeterminate: Story = {
  render: () => <CircularProgress value={null} size={64} />,
};

export const Custom: Story = {
  render: () => <CircularProgress value={75} size={100} label="Complete" />,
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <CircularProgress value={60} size={40} />
      <CircularProgress value={60} size={64} />
      <CircularProgress value={60} size={80} />
      <CircularProgress value={60} size={100} />
      <CircularProgress value={60} size={128} />
    </div>
  ),
};
