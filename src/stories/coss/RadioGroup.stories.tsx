import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  RadioGroup,
  Radio,
  RadioGroupItem,
  RadioGroupItemText,
  RadioGroupItemTitle,
  RadioGroupItemDescription,
} from '@/app/ui/components/radio-group';

const meta = {
  title: 'Volve UI/Forms/RadioGroup',
  component: RadioGroup,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-a">
      <div className="flex items-center gap-2">
        <Radio value="option-a" id="option-a" />
        <label htmlFor="option-a" className="text-sm font-medium cursor-pointer">
          Option A
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Radio value="option-b" id="option-b" />
        <label htmlFor="option-b" className="text-sm font-medium cursor-pointer">
          Option B
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Radio value="option-c" id="option-c" />
        <label htmlFor="option-c" className="text-sm font-medium cursor-pointer">
          Option C
        </label>
      </div>
    </RadioGroup>
  ),
};

export const WithDescriptions: Story = {
  render: () => (
    <RadioGroup defaultValue="starter" className="gap-3">
      <RadioGroupItem value="starter">
        <Radio value="starter" />
        <RadioGroupItemText>
          <RadioGroupItemTitle>Starter</RadioGroupItemTitle>
          <RadioGroupItemDescription>
            Perfect for individuals and small projects.
          </RadioGroupItemDescription>
        </RadioGroupItemText>
      </RadioGroupItem>
      <RadioGroupItem value="pro">
        <Radio value="pro" />
        <RadioGroupItemText>
          <RadioGroupItemTitle>Pro</RadioGroupItemTitle>
          <RadioGroupItemDescription>
            For growing teams that need more power and flexibility.
          </RadioGroupItemDescription>
        </RadioGroupItemText>
      </RadioGroupItem>
      <RadioGroupItem value="enterprise">
        <Radio value="enterprise" />
        <RadioGroupItemText>
          <RadioGroupItemTitle>Enterprise</RadioGroupItemTitle>
          <RadioGroupItemDescription>
            Advanced features and dedicated support for large organisations.
          </RadioGroupItemDescription>
        </RadioGroupItemText>
      </RadioGroupItem>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-a" disabled>
      <div className="flex items-center gap-2">
        <Radio value="option-a" id="dis-option-a" />
        <label htmlFor="dis-option-a" className="text-sm font-medium cursor-pointer">
          Option A
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Radio value="option-b" id="dis-option-b" />
        <label htmlFor="dis-option-b" className="text-sm font-medium cursor-pointer">
          Option B
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Radio value="option-c" id="dis-option-c" />
        <label htmlFor="dis-option-c" className="text-sm font-medium cursor-pointer">
          Option C
        </label>
      </div>
    </RadioGroup>
  ),
};
