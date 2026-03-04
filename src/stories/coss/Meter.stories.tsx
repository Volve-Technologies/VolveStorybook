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
} satisfies Meta<typeof CircularProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <CircularProgress value={60} size={80} />,
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
