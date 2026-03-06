import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox } from '@/app/ui/components/checkbox';

const meta = {
  title: 'Volve UI/Forms/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is disabled',
      table: {
        defaultValue: { summary: false },
      },
    },
    defaultChecked: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is checked by default (uncontrolled)',
      table: {
        defaultValue: { summary: false },
      },
    },
    indeterminate: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is in an indeterminate state',
      table: {
        defaultValue: { summary: false },
      },
    },
    onCheckedChange: {
      action: 'checkedChange',
      description: 'Callback fired when the checked state changes',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    defaultChecked: false,
  },
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <label htmlFor="terms" className="text-sm font-medium cursor-pointer">
        Accept terms and conditions
      </label>
    </div>
  ),
};
