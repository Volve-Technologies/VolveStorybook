import type { Meta, StoryObj } from '@storybook/react-vite';

import { Switch } from '@/app/ui/components/switch';

const meta = {
  title: 'Volve UI/Forms/Switch',
  component: Switch,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    defaultChecked: {
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md'],
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
  },
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Switch id="dark-mode" />
      <label htmlFor="dark-mode" className="text-sm font-medium cursor-pointer">
        Dark Mode
      </label>
    </div>
  ),
};
