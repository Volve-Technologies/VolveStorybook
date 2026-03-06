import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextShimmer } from '@/app/ui/components/text-shimmer';

const meta: Meta<typeof TextShimmer> = {
  title: 'Volve UI/Animation/TextShimmer',
  component: TextShimmer,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'The text content to render with the shimmer animation',
    },
    as: {
      control: { type: 'select' },
      options: ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'div'],
      description: 'HTML element or React component to render as',
      table: {
        defaultValue: { summary: 'p' },
      },
    },
    duration: {
      control: { type: 'number', min: 0.1, max: 10, step: 0.1 },
      description: 'Duration of one shimmer animation cycle in seconds',
      table: {
        defaultValue: { summary: '2' },
      },
    },
    spread: {
      control: { type: 'number', min: 1, max: 10, step: 0.5 },
      description: 'Multiplier used to calculate the shimmer spread width relative to text length',
      table: {
        defaultValue: { summary: '2' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names for typography and styling',
    },
  },
  args: {
    children: 'Loading...',
    duration: 2,
    spread: 2,
    as: 'p',
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
