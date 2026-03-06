import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextLoop } from '@/app/ui/components/text-loop';
import * as React from 'react';

const meta: Meta<typeof TextLoop> = {
  title: 'Volve UI/Animation/TextLoop',
  component: TextLoop,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'The text or ReactNode content to display inside the animated loop',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names for the TextLoop element',
    },
  },
  args: {
    children: 'Hello World',
  },
};
export default meta;
type Story = StoryObj<typeof TextLoop>;

export const Default: Story = {
  render: (args) => <TextLoop {...args} />,
};

function CyclingDemo() {
  const messages = [
    'Finding an agent...',
    'Agent found',
    'Typing...',
    'Processing...',
    'Done!',
  ];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return <TextLoop className="text-sm text-muted-foreground">{messages[index]}</TextLoop>;
}

export const Cycling: Story = {
  render: () => <CyclingDemo />,
};

export const Large: Story = {
  render: () => {
    function LargeDemo() {
      const words = ['Fast', 'Reliable', 'Intelligent', 'Powerful'];
      const [index, setIndex] = React.useState(0);

      React.useEffect(() => {
        const timer = setInterval(() => {
          setIndex((i) => (i + 1) % words.length);
        }, 1200);
        return () => clearInterval(timer);
      }, []);

      return (
        <p className="text-2xl font-bold">
          Volve is{' '}
          <TextLoop className="text-primary">{words[index]}</TextLoop>
        </p>
      );
    }
    return <LargeDemo />;
  },
};
