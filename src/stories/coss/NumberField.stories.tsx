import type { Meta, StoryObj } from '@storybook/react-vite';
import { FieldNumberControl, FieldLabel } from '@/app/ui/components/form/field';
import {
  NumberField,
  NumberFieldLabel,
  NumberFieldScrubArea,
  NumberFieldScrubAreaCursor,
  NumberFieldGroup,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from '@/app/ui/components/form/number-field';

const meta = {
  title: 'Volve UI/Forms/NumberField',
  component: FieldNumberControl,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the number field, preventing user interaction',
    },
    min: {
      control: { type: 'number' },
      description: 'The minimum allowed value',
    },
    max: {
      control: { type: 'number' },
      description: 'The maximum allowed value',
    },
    step: {
      control: { type: 'number' },
      description: 'The amount to increment or decrement the value by',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text shown when no value is entered',
    },
    defaultValue: {
      control: { type: 'number' },
      description: 'The initial value of the number field (uncontrolled)',
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
    disabled: false,
    min: undefined,
    max: undefined,
    step: 1,
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

// ─── Standalone NumberField widget (form/number-field.tsx) ────────────────────
// Increment/decrement stepper with scrub-area gesture support.

export const StepperDefault: Story = {
  name: 'Stepper — Default',
  render: () => (
    <NumberField defaultValue={10}>
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>
  ),
};

export const StepperWithLabel: Story = {
  name: 'Stepper — With Label',
  render: () => (
    <div className="flex flex-col gap-2">
      <NumberFieldLabel>Quantity</NumberFieldLabel>
      <NumberField defaultValue={1} min={1} max={99}>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
    </div>
  ),
};

export const StepperDisabled: Story = {
  name: 'Stepper — Disabled',
  render: () => (
    <NumberField defaultValue={5} disabled>
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>
  ),
};

export const StepperWithScrubArea: Story = {
  name: 'Stepper — With Scrub Area',
  render: () => (
    <div className="flex flex-col gap-2">
      <NumberFieldLabel>Drag to adjust</NumberFieldLabel>
      <NumberField defaultValue={42}>
        <NumberFieldScrubArea>
          <NumberFieldScrubAreaCursor />
          <NumberFieldGroup>
            <NumberFieldDecrement />
            <NumberFieldInput />
            <NumberFieldIncrement />
          </NumberFieldGroup>
        </NumberFieldScrubArea>
      </NumberField>
    </div>
  ),
};

export const StepperMultiple: Story = {
  name: 'Stepper — Multiple Fields',
  render: () => (
    <div className="flex flex-col gap-4 w-48">
      {[
        { label: 'Adults', defaultValue: 2, min: 1 },
        { label: 'Children', defaultValue: 0, min: 0 },
        { label: 'Infants', defaultValue: 0, min: 0 },
      ].map(({ label, defaultValue, min }) => (
        <div key={label} className="flex items-center justify-between">
          <NumberFieldLabel>{label}</NumberFieldLabel>
          <NumberField defaultValue={defaultValue} min={min} max={9}>
            <NumberFieldGroup>
              <NumberFieldDecrement />
              <NumberFieldInput />
              <NumberFieldIncrement />
            </NumberFieldGroup>
          </NumberField>
        </div>
      ))}
    </div>
  ),
};
