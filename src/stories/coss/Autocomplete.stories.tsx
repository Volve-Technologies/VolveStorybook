import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Autocomplete,
  AutocompleteInput,
  AutocompletePopup,
  AutocompleteList,
  AutocompleteItem,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
} from '@/app/ui/components/autocomplete';

const meta = {
  title: 'Volve UI/Advanced/Autocomplete',
  component: Autocomplete,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text shown in the autocomplete input when empty',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

export const Default: Story = {
  args: {
    placeholder: 'Search fruits...',
  },
  render: (args) => (
    <div className="w-64">
      <Autocomplete>
        <AutocompleteInput
          placeholder={args.placeholder ?? 'Search fruits...'}
          showTrigger
        />
        <AutocompletePopup>
          <AutocompleteList>
            <AutocompleteEmpty>No fruits found.</AutocompleteEmpty>
            {fruits.map((fruit) => (
              <AutocompleteItem key={fruit} value={fruit}>
                {fruit}
              </AutocompleteItem>
            ))}
          </AutocompleteList>
        </AutocompletePopup>
      </Autocomplete>
    </div>
  ),
};

const fruitItems = ['Apple', 'Banana', 'Cherry', 'Grape', 'Mango'];
const vegetableItems = ['Broccoli', 'Carrot', 'Cucumber', 'Spinach', 'Tomato'];

export const WithGroups: Story = {
  render: () => (
    <div className="w-64">
      <Autocomplete>
        <AutocompleteInput placeholder="Search produce..." showTrigger />
        <AutocompletePopup>
          <AutocompleteList>
            <AutocompleteEmpty>No items found.</AutocompleteEmpty>
            <AutocompleteGroup>
              <AutocompleteGroupLabel>Fruits</AutocompleteGroupLabel>
              {fruitItems.map((item) => (
                <AutocompleteItem key={item} value={item}>
                  {item}
                </AutocompleteItem>
              ))}
            </AutocompleteGroup>
            <AutocompleteGroup>
              <AutocompleteGroupLabel>Vegetables</AutocompleteGroupLabel>
              {vegetableItems.map((item) => (
                <AutocompleteItem key={item} value={item}>
                  {item}
                </AutocompleteItem>
              ))}
            </AutocompleteGroup>
          </AutocompleteList>
        </AutocompletePopup>
      </Autocomplete>
    </div>
  ),
};

export const WithClear: Story = {
  render: () => (
    <div className="w-64">
      <Autocomplete>
        <AutocompleteInput placeholder="Search fruits..." showClear={true} />
        <AutocompletePopup>
          <AutocompleteList>
            <AutocompleteEmpty>No fruits found.</AutocompleteEmpty>
            {fruits.map((fruit) => (
              <AutocompleteItem key={fruit} value={fruit}>
                {fruit}
              </AutocompleteItem>
            ))}
          </AutocompleteList>
        </AutocompletePopup>
      </Autocomplete>
    </div>
  ),
};
