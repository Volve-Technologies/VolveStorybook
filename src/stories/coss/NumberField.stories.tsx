import type { Meta, StoryObj } from '@storybook/react-vite';
import { FieldNumberControl, FieldLabel } from '@/app/ui/components/form/field';

const meta = {
  title: 'Volve UI/Forms/NumberField',
  component: FieldNumberControl,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    min: {
      control: { type: 'number' },
    },
    max: {
      control: { type: 'number' },
    },
    step: {
      control: { type: 'number' },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-48">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FieldNumberControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 0,
    placeholder: '0',
  },
};

export const WithRange: Story = {
  args: {
    defaultValue: 0,
    min: 0,
    max: 100,
    step: 5,
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: 10,
    disabled: true,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <FieldLabel>Quantity</FieldLabel>
      <FieldNumberControl defaultValue={1} min={1} placeholder="1" />
    </div>
  ),
};
