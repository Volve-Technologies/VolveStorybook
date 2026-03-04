import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Field,
  FieldLabel,
  FieldControl,
  FieldError,
  FieldDescription,
  FieldGroup,
} from '@/app/ui/components/form/field';

const meta = {
  title: 'Volve UI/Forms/Field',
  component: Field,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Field>
      <FieldLabel>Full Name</FieldLabel>
      <FieldControl placeholder="John Doe" />
    </Field>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Field>
      <FieldLabel>Full Name</FieldLabel>
      <FieldControl placeholder="John Doe" />
      <FieldDescription>Your legal full name</FieldDescription>
    </Field>
  ),
};

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Field invalid={value.length === 0}>
        <FieldLabel>Email</FieldLabel>
        <FieldControl
          type="email"
          value={value}
          onChange={(e) => setValue((e.target as HTMLInputElement).value)}
          placeholder="you@example.com"
        />
        <FieldError className="block">Email is required</FieldError>
      </Field>
    );
  },
};

export const FieldGroupExample: Story = {
  render: () => (
    <FieldGroup>
      <Field>
        <FieldLabel>Full Name</FieldLabel>
        <FieldControl placeholder="John Doe" />
      </Field>
      <Field>
        <FieldLabel>Email</FieldLabel>
        <FieldControl type="email" placeholder="you@example.com" />
      </Field>
    </FieldGroup>
  ),
};
