import type { Meta, StoryObj } from '@storybook/react-vite';
import { Fieldset, FieldsetLegend } from '@/app/ui/components/form/fieldset';
import { Field, FieldLabel, FieldControl } from '@/app/ui/components/form/field';

const meta = {
  title: 'Volve UI/Forms/Fieldset',
  component: Fieldset,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
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
  render: () => (
    <Fieldset>
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
