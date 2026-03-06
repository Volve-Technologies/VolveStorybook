import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from '@/app/ui/components/toggle';
import { Button } from '@/app/ui/components/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { TextBoldIcon, TextItalicIcon } from '@hugeicons/core-free-icons';

const meta = {
  title: 'Volve UI/Forms/Toggle',
  component: Toggle,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    pressed: {
      control: 'boolean',
      description: 'Controlled pressed state',
    },
    defaultPressed: {
      control: 'boolean',
      description: 'Initial pressed state when uncontrolled',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the toggle',
    },
    onPressedChange: {
      action: 'pressedChanged',
      description: 'Callback fired when the pressed state changes',
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pressed: false,
    defaultPressed: false,
    disabled: false,
  },
  render: (args) => (
    <Toggle {...args}>
      <Button variant="secondary">
        Toggle
      </Button>
    </Toggle>
  ),
};

export const Pressed: Story = {
  args: {
    ...Default.args,
    defaultPressed: true,
  },
  render: (args) => (
    <Toggle {...args}>
      <Button variant="secondary">
        Toggle
      </Button>
    </Toggle>
  ),
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    defaultPressed: false,
  },
  render: (args) => (
    <Toggle {...args}>
      <Button variant="secondary" kind="with-icon">
        <HugeiconsIcon icon={TextBoldIcon} />
        Bold
      </Button>
    </Toggle>
  ),
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
  render: (args) => (
    <Toggle {...args}>
      <Button variant="secondary" kind="with-icon" disabled>
        <HugeiconsIcon icon={TextItalicIcon} />
        Italic
      </Button>
    </Toggle>
  ),
};
