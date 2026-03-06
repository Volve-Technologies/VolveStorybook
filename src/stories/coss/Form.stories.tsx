import type { Meta, StoryObj } from '@storybook/react-vite';
import { Form } from '@/app/ui/components/form';
import {
  Field,
  FieldLabel,
  FieldControl,
  FieldError,
  FieldDescription,
  FieldGroup,
} from '@/app/ui/components/form/field';
import { Button } from '@/app/ui/components/button';
import { Select, SelectTrigger, SelectPopup, SelectItem } from '@/app/ui/components/select';
import { Checkbox } from '@/app/ui/components/checkbox';
import { Textarea } from '@/app/ui/components/textarea';
import { useState } from 'react';

const meta: Meta<typeof Form> = {
  title: 'Volve UI/Forms/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes applied to the form element',
    },
    onSubmit: {
      action: 'onSubmit',
      description: 'Callback fired when the form is submitted',
    },
    errors: {
      control: false,
      description: 'Record of field name to error message strings, propagated to nested Field components',
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { className: 'w-96 space-y-4' },
  render: (args) => (
    <Form {...args}>
      <FieldGroup>
        <Field name="name">
          <FieldLabel>Full Name</FieldLabel>
          <FieldControl placeholder="Enter your name" />
          <FieldError />
        </Field>
        <Field name="email">
          <FieldLabel>Email</FieldLabel>
          <FieldControl type="email" placeholder="you@example.com" />
          <FieldDescription>We will never share your email.</FieldDescription>
          <FieldError />
        </Field>
      </FieldGroup>
      <Button type="submit" variant="primary" size="sm">
        Submit
      </Button>
    </Form>
  ),
};

export const WithValidation: Story = {
  render: () => {
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const newErrors: Record<string, string> = {};
      if (!data.get('name')) newErrors.name = 'Name is required';
      if (!data.get('email')) newErrors.email = 'Email is required';
      setErrors(newErrors);
    };

    return (
      <Form className="w-96 space-y-4" onSubmit={handleSubmit} errors={errors}>
        <FieldGroup>
          <Field name="name">
            <FieldLabel>Full Name</FieldLabel>
            <FieldControl placeholder="Enter your name" />
            <FieldError />
          </Field>
          <Field name="email">
            <FieldLabel>Email</FieldLabel>
            <FieldControl type="email" placeholder="you@example.com" />
            <FieldError />
          </Field>
        </FieldGroup>
        <Button type="submit" variant="primary" size="sm">
          Submit (try empty)
        </Button>
      </Form>
    );
  },
};

export const WithSelectAndTextarea: Story = {
  render: () => (
    <Form className="w-96 space-y-4">
      <FieldGroup>
        <Field name="name">
          <FieldLabel>Project Name</FieldLabel>
          <FieldControl placeholder="My Project" />
          <FieldError />
        </Field>
        <Field name="type">
          <FieldLabel>Project Type</FieldLabel>
          <Select>
            <SelectTrigger placeholder="Select type..." />
            <SelectPopup>
              <SelectItem value="research">Research</SelectItem>
              <SelectItem value="development">Development</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
            </SelectPopup>
          </Select>
          <FieldError />
        </Field>
        <Field name="description">
          <FieldLabel>Description</FieldLabel>
          <Textarea placeholder="Describe the project..." className="min-h-24" />
          <FieldDescription>Optional. Max 500 characters.</FieldDescription>
        </Field>
        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <label htmlFor="terms" className="text-sm">
            I agree to the terms of service
          </label>
        </div>
      </FieldGroup>
      <div className="flex gap-2">
        <Button variant="secondary" size="sm">Cancel</Button>
        <Button type="submit" variant="primary" size="sm">Create Project</Button>
      </div>
    </Form>
  ),
};

export const Readonly: Story = {
  render: () => (
    <Form className="w-96 space-y-4">
      <FieldGroup>
        <Field name="name">
          <FieldLabel>Full Name</FieldLabel>
          <FieldControl defaultValue="Jane Smith" readOnly />
        </Field>
        <Field name="email">
          <FieldLabel>Email</FieldLabel>
          <FieldControl type="email" defaultValue="jane.smith@example.com" readOnly />
        </Field>
        <Field name="role">
          <FieldLabel>Role</FieldLabel>
          <FieldControl defaultValue="Administrator" readOnly />
        </Field>
      </FieldGroup>
      <Button variant="secondary" size="sm">Edit Profile</Button>
    </Form>
  ),
};
