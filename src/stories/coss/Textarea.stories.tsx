import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from '@/app/ui/components/textarea';

const meta = {
  title: 'Volve UI/Forms/Textarea',
  component: Textarea,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text shown when the textarea is empty',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the textarea is disabled',
      table: {
        defaultValue: { summary: false },
      },
    },
    minRows: {
      control: { type: 'number' },
      description: 'Minimum number of rows before auto-resize kicks in',
      table: {
        defaultValue: { summary: 2 },
      },
    },
    maxRows: {
      control: { type: 'number' },
      description: 'Maximum number of rows before the textarea scrolls',
      table: {
        defaultValue: { summary: 6 },
      },
    },
    value: {
      control: { type: 'text' },
      description: 'Controlled value of the textarea',
    },
    onChange: {
      action: 'changed',
      description: 'Change event handler',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    disabled: false,
    minRows: 2,
    maxRows: 6,
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
