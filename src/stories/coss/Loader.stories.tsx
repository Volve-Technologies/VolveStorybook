import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Loader,
  CircularLoader,
  ClassicLoader,
  PulseLoader,
  PulseDotLoader,
  DotsLoader,
  TypingLoader,
  WaveLoader,
  BarsLoader,
  TerminalLoader,
  TextBlinkLoader,
  TextShimmerLoader,
  TextDotsLoader,
} from '@/app/ui/components/loader';

const meta: Meta<typeof Loader> = {
  title: 'Volve UI/Feedback/Loader',
  component: Loader,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'circular',
        'classic',
        'pulse',
        'pulse-dot',
        'dots',
        'typing',
        'wave',
        'bars',
        'terminal',
        'text-blink',
        'text-shimmer',
        'loading-dots',
      ],
      description: 'Animation style of the loader',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the loader',
    },
    text: {
      control: 'text',
      description: 'Text label displayed by text-based variants (text-blink, text-shimmer, loading-dots)',
    },
  },
};
export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {
    variant: 'circular',
    size: 'md',
    text: 'Loading',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8 p-4">
      <div className="flex flex-col items-center gap-2">
        <CircularLoader />
        <span className="text-xs text-muted-foreground">circular</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ClassicLoader />
        <span className="text-xs text-muted-foreground">classic</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <PulseLoader />
        <span className="text-xs text-muted-foreground">pulse</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <PulseDotLoader />
        <span className="text-xs text-muted-foreground">pulse-dot</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <DotsLoader />
        <span className="text-xs text-muted-foreground">dots</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <TypingLoader />
        <span className="text-xs text-muted-foreground">typing</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <WaveLoader />
        <span className="text-xs text-muted-foreground">wave</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <BarsLoader />
        <span className="text-xs text-muted-foreground">bars</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <TerminalLoader />
        <span className="text-xs text-muted-foreground">terminal</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <TextBlinkLoader text="Thinking" />
        <span className="text-xs text-muted-foreground">text-blink</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <TextShimmerLoader text="Thinking" />
        <span className="text-xs text-muted-foreground">text-shimmer</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <TextDotsLoader text="Thinking" />
        <span className="text-xs text-muted-foreground">loading-dots</span>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <div key={size} className="flex items-center gap-6">
          <span className="w-8 text-xs text-muted-foreground">{size}</span>
          <CircularLoader size={size} />
          <DotsLoader size={size} />
          <WaveLoader size={size} />
          <BarsLoader size={size} />
        </div>
      ))}
    </div>
  ),
};

export const Circular: Story = {
  args: {
    ...Default.args,
    variant: 'circular',
  },
};

export const Classic: Story = {
  args: {
    ...Default.args,
    variant: 'classic',
  },
};

export const Dots: Story = {
  args: {
    ...Default.args,
    variant: 'dots',
  },
};

export const Wave: Story = {
  args: {
    ...Default.args,
    variant: 'wave',
  },
};

export const TextBlink: Story = {
  args: {
    ...Default.args,
    variant: 'text-blink',
    text: 'Analyzing document...',
  },
};

export const TextShimmerVariant: Story = {
  name: 'Text Shimmer',
  args: {
    ...Default.args,
    variant: 'text-shimmer',
    text: 'Analyzing document...',
  },
};

export const LoadingDots: Story = {
  args: {
    ...Default.args,
    variant: 'loading-dots',
    text: 'Analyzing document...',
  },
};
