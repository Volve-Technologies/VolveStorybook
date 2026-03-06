import type { Meta, StoryObj } from '@storybook/react-vite';
import { FieldLabel } from '@/app/ui/components/form/field';
import { Input } from '@/app/ui/components/input';

// The Volve design system uses FieldLabel from the form/field module
// instead of a standalone Label component.

const meta = {
  title: 'Volve UI/Forms/Label',
  component: FieldLabel,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Label text content',
    },
    htmlFor: {
      control: 'text',
      description: 'The id of the associated form element',
    },
    required: {
      control: 'boolean',
      description: 'Whether the associated field is required',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names',
    },
  },
} satisfies Meta<typeof FieldLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Email address',
    htmlFor: 'email',
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-1.5">
      <FieldLabel htmlFor="email">Email address</FieldLabel>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  ),
};

export const WithRequiredIndicator: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-1.5">
      <FieldLabel htmlFor="required-field">
        Full name <span className="text-destructive">*</span>
      </FieldLabel>
      <Input id="required-field" type="text" placeholder="John Doe" />
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-1.5">
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <Input id="username" type="text" placeholder="your_username" />
      <p className="text-muted text-sm">This will be your public display name.</p>
    </div>
  ),
};
