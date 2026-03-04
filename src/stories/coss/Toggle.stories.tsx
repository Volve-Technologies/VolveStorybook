import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from '@/app/ui/components/toggle';
import { Button } from '@/app/ui/components/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { Bold01Icon, Italic01Icon } from '@hugeicons/core-free-icons';

const meta = {
  title: 'Volve UI/Forms/Toggle',
  component: Toggle,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Toggle defaultPressed={false}>
      <Button variant="secondary">
        Toggle
      </Button>
    </Toggle>
  ),
};

export const Pressed: Story = {
  render: () => (
    <Toggle defaultPressed={true}>
      <Button variant="secondary">
        Toggle
      </Button>
    </Toggle>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Toggle defaultPressed={false}>
      <Button variant="secondary" kind="with-icon">
        <HugeiconsIcon icon={Bold01Icon} />
        Bold
      </Button>
    </Toggle>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Toggle disabled>
      <Button variant="secondary" kind="with-icon" disabled>
        <HugeiconsIcon icon={Italic01Icon} />
        Italic
      </Button>
    </Toggle>
  ),
};
