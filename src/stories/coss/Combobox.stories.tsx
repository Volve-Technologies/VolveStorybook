import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopup,
  ComboboxList,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxEmpty,
  ComboboxChips,
} from '@/app/ui/components/combobox';

const meta = {
  title: 'Volve UI/Advanced/Combobox',
  component: Combobox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    multiple: {
      control: { type: 'boolean' },
      description: 'Allows selecting multiple values',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text shown in the combobox input when no value is selected',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const frameworks = ['React', 'Vue', 'Angular', 'Svelte', 'Solid'];

export const Default: Story = {
  args: {
    multiple: false,
    placeholder: 'Select a framework...',
  },
  render: (args) => (
    <div className="w-64">
      <Combobox<string> multiple={args.multiple}>
        <ComboboxInput placeholder={args.placeholder ?? 'Select a framework...'} />
        <ComboboxPopup>
          <ComboboxList>
            <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
            {frameworks.map((fw) => (
              <ComboboxItem key={fw} value={fw}>
                {fw}
                <ComboboxItemIndicator />
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxPopup>
      </Combobox>
    </div>
  ),
};

export const Multi: Story = {
  render: () => (
    <div className="w-80">
      <Combobox<string> multiple>
        <ComboboxChips>
          <ComboboxInput placeholder="Pick frameworks..." showTrigger={false} />
        </ComboboxChips>
        <ComboboxPopup>
          <ComboboxList>
            <ComboboxEmpty>No results found.</ComboboxEmpty>
            {frameworks.map((fw) => (
              <ComboboxItem key={fw} value={fw}>
                <ComboboxItemIndicator />
                {fw}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxPopup>
      </Combobox>
    </div>
  ),
};
