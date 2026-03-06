import type { Meta, StoryObj } from '@storybook/react-vite';
import { Fieldset, FieldsetLegend } from '@/app/ui/components/form/fieldset';
import { Field, FieldLabel, FieldControl } from '@/app/ui/components/form/field';

const meta = {
  title: 'Volve UI/Forms/Fieldset',
  component: Fieldset,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables all form controls within the fieldset',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes applied to the fieldset element',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
  },
  render: (args) => (
    <Fieldset {...args}>
      <FieldsetLegend>Personal Information</FieldsetLegend>
      <Field>
        <FieldLabel>Full Name</FieldLabel>
        <FieldControl placeholder="John Doe" />
      </Field>
      <Field>
        <FieldLabel>Email</FieldLabel>
        <FieldControl type="email" placeholder="you@example.com" />
      </Field>
    </Fieldset>
  ),
};

export const WithBorder: Story = {
  render: () => (
    <Fieldset className="border rounded-lg p-4">
      <FieldsetLegend>Personal Information</FieldsetLegend>
      <Field>
        <FieldLabel>Full Name</FieldLabel>
        <FieldControl placeholder="John Doe" />
      </Field>
      <Field>
        <FieldLabel>Email</FieldLabel>
        <FieldControl type="email" placeholder="you@example.com" />
      </Field>
    </Fieldset>
  ),
};
