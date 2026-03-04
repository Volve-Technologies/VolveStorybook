import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextShimmer } from '@/app/ui/components/text-shimmer';

const meta: Meta<typeof TextShimmer> = {
  title: 'Volve UI/Animation/TextShimmer',
  component: TextShimmer,
  tags: ['autodocs'],
  args: {
    children: 'Loading your data...',
  },
};
export default meta;
type Story = StoryObj<typeof TextShimmer>;

export const Default: Story = {};

export const Large: Story = {
  render: () => (
    <TextShimmer className="text-2xl font-bold">
      Processing your request
    </TextShimmer>
  ),
};

export const Slow: Story = {
  render: () => (
    <TextShimmer duration={4}>Slowly shimmering text</TextShimmer>
  ),
};

export const Fast: Story = {
  render: () => (
    <TextShimmer duration={0.8}>Fast shimmer effect</TextShimmer>
  ),
};

export const AsHeading: Story = {
  render: () => (
    <TextShimmer as="h2" className="text-3xl font-bold">
      Volve AI Platform
    </TextShimmer>
  ),
};
