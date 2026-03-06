import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  CheckboxGroup,
  CheckboxGroupItem,
  CheckboxGroupLabel,
  CheckboxGroupItemText,
  CheckboxGroupItemTitle,
} from '@/app/ui/components/checkbox-group';

const meta = {
  title: 'Volve UI/Forms/CheckboxGroup',
  component: CheckboxGroup,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether all items in the group are disabled',
      table: {
        defaultValue: { summary: false },
      },
    },
    defaultValue: {
      control: { type: 'object' },
      description: 'Array of values that are checked by default (uncontrolled)',
    },
  },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    defaultValue: [],
  },
  render: (args) => (
    <CheckboxGroup {...args}>
      <CheckboxGroupLabel>
        <CheckboxGroupItem value="apple" />
        Apple
      </CheckboxGroupLabel>
      <CheckboxGroupLabel>
        <CheckboxGroupItem value="banana" />
        Banana
      </CheckboxGroupLabel>
      <CheckboxGroupLabel>
        <CheckboxGroupItem value="cherry" />
        Cherry
      </CheckboxGroupLabel>
    </CheckboxGroup>
  ),
};

export const WithTitles: Story = {
  render: (args) => (
    <CheckboxGroup {...args}>
      <CheckboxGroupLabel>
        <CheckboxGroupItem value="apple" />
        <CheckboxGroupItemText>
          <CheckboxGroupItemTitle>Apple</CheckboxGroupItemTitle>
          A crisp and sweet fruit
        </CheckboxGroupItemText>
      </CheckboxGroupLabel>
      <CheckboxGroupLabel>
        <CheckboxGroupItem value="banana" />
        <CheckboxGroupItemText>
          <CheckboxGroupItemTitle>Banana</CheckboxGroupItemTitle>
          A soft and creamy fruit
        </CheckboxGroupItemText>
      </CheckboxGroupLabel>
      <CheckboxGroupLabel>
        <CheckboxGroupItem value="cherry" />
        <CheckboxGroupItemText>
          <CheckboxGroupItemTitle>Cherry</CheckboxGroupItemTitle>
          A small and tart fruit
        </CheckboxGroupItemText>
      </CheckboxGroupLabel>
    </CheckboxGroup>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <CheckboxGroup disabled {...args}>
      <CheckboxGroupLabel>
        <CheckboxGroupItem value="apple" />
        Apple
      </CheckboxGroupLabel>
      <CheckboxGroupLabel>
        <CheckboxGroupItem value="banana" />
        Banana
      </CheckboxGroupLabel>
      <CheckboxGroupLabel>
        <CheckboxGroupItem value="cherry" />
        Cherry
      </CheckboxGroupLabel>
    </CheckboxGroup>
  ),
};

export const WithDefaultValues: Story = {
  render: (args) => (
    <CheckboxGroup defaultValue={['apple', 'cherry']} {...args}>
      <CheckboxGroupLabel>
        <CheckboxGroupItem value="apple" />
        Apple
      </CheckboxGroupLabel>
      <CheckboxGroupLabel>
        <CheckboxGroupItem value="banana" />
        Banana
      </CheckboxGroupLabel>
      <CheckboxGroupLabel>
        <CheckboxGroupItem value="cherry" />
        Cherry
      </CheckboxGroupLabel>
    </CheckboxGroup>
  ),
};
