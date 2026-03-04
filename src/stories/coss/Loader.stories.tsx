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
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  render: () => <Loader />,
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
  render: () => <CircularLoader />,
};

export const Classic: Story = {
  render: () => <ClassicLoader />,
};

export const Dots: Story = {
  render: () => <DotsLoader />,
};

export const Wave: Story = {
  render: () => <WaveLoader />,
};

export const TextBlink: Story = {
  render: () => <TextBlinkLoader text="Analyzing document..." />,
};

export const TextShimmerVariant: Story = {
  name: 'Text Shimmer',
  render: () => <TextShimmerLoader text="Analyzing document..." />,
};

export const LoadingDots: Story = {
  render: () => <TextDotsLoader text="Analyzing document..." />,
};
