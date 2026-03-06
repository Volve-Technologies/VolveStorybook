import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '@/app/ui/components/input';

const meta = {
  title: 'Volve UI/Forms/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'unstyled'],
      description: 'Visual variant of the input',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
      table: {
        defaultValue: { summary: false },
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text shown when the input is empty',
    },
    type: {
      control: { type: 'text' },
      description: 'HTML input type attribute (text, email, password, number, etc.)',
      table: {
        defaultValue: { summary: 'text' },
      },
    },
    value: {
      control: { type: 'text' },
      description: 'Controlled value of the input',
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    variant: 'default',
    size: 'md',
    disabled: false,
    type: 'text',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Enter text...',
    disabled: true,
  },
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState('Hello World');
    return (
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter text..."
      />
    );
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password...',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Email address',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-72">
      <Input size="sm" placeholder="Small input (sm)" />
      <Input size="md" placeholder="Medium input (md)" />
      <Input size="lg" placeholder="Large input (lg)" />
    </div>
  ),
};
