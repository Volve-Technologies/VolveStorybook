import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
} from '@/app/ui/components/input/input-group';
import { HugeiconsIcon } from '@hugeicons/react';
import { Search01Icon, Mail01Icon, UserIcon } from '@hugeicons/core-free-icons';

const meta = {
  title: 'Volve UI/Forms/InputGroup',
  component: InputGroup,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { className: 'w-72' },
  render: (args) => (
    <InputGroup {...args}>
      <InputGroupAddon align="inline-start">
        <HugeiconsIcon icon={Search01Icon} />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
    </InputGroup>
  ),
};

export const WithPrefix: Story = {
  render: () => (
    <InputGroup className="w-72">
      <InputGroupAddon align="inline-start">
        <InputGroupText>@</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="username" />
    </InputGroup>
  ),
};

export const WithSuffix: Story = {
  render: () => (
    <InputGroup className="w-72">
      <InputGroupInput placeholder="Enter URL" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>.com</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const EmailInput: Story = {
  render: () => (
    <InputGroup className="w-72">
      <InputGroupAddon align="inline-start">
        <HugeiconsIcon icon={Mail01Icon} />
      </InputGroupAddon>
      <InputGroupInput type="email" placeholder="Email" />
    </InputGroup>
  ),
};

/** InputGroupTextarea — multiline textarea variant inside an InputGroup */
export const WithTextarea: Story = {
  render: () => (
    <InputGroup className="w-72">
      <InputGroupAddon align="block-start">
        <InputGroupText>Note</InputGroupText>
      </InputGroupAddon>
      <InputGroupTextarea placeholder="Enter a note..." rows={4} />
    </InputGroup>
  ),
};
