import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from '@/app/ui/components/textarea';

const meta = {
  title: 'Volve UI/Forms/Textarea',
  component: Textarea,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    minRows: {
      control: { type: 'number' },
      description: 'Minimum number of rows before auto-resize',
    },
    maxRows: {
      control: { type: 'number' },
      description: 'Maximum number of rows before scrolling',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter message...',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Enter message...',
    disabled: true,
  },
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter message..."
      />
    );
  },
};

export const MinMaxRows: Story = {
  args: {
    placeholder: 'Grows from 2 rows up to 6 rows...',
    minRows: 2,
    maxRows: 6,
  },
};
