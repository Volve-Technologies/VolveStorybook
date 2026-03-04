import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectPopup,
  SelectGroup,
  SelectGroupLabel,
  SelectSeparator,
} from '@/app/ui/components/select';

const meta = {
  title: 'Volve UI/Forms/Select',
  component: Select,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-56">
      <Select>
        <SelectTrigger placeholder="Select a fruit" />
        <SelectPopup>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="cherry">Cherry</SelectItem>
          <SelectItem value="mango">Mango</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectPopup>
      </Select>
    </div>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <div className="w-56">
      <Select>
        <SelectTrigger placeholder="Select a food" />
        <SelectPopup>
          <SelectGroup>
            <SelectGroupLabel>Fruits</SelectGroupLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="cherry">Cherry</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectGroupLabel>Vegetables</SelectGroupLabel>
            <SelectItem value="carrot">Carrot</SelectItem>
            <SelectItem value="broccoli">Broccoli</SelectItem>
            <SelectItem value="spinach">Spinach</SelectItem>
          </SelectGroup>
        </SelectPopup>
      </Select>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-56">
      <Select disabled>
        <SelectTrigger placeholder="Select a fruit" />
        <SelectPopup>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="cherry">Cherry</SelectItem>
          <SelectItem value="mango">Mango</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectPopup>
      </Select>
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div className="w-56">
      <Select required>
        <SelectTrigger placeholder="Select a fruit" />
        <SelectPopup>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="cherry">Cherry</SelectItem>
          <SelectItem value="mango">Mango</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectPopup>
      </Select>
    </div>
  ),
};
