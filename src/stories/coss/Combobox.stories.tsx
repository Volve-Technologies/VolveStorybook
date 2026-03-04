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
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const frameworks = ['React', 'Vue', 'Angular', 'Svelte', 'Solid'];

export const Default: Story = {
  render: () => (
    <div className="w-64">
      <Combobox<string>>
        <ComboboxInput placeholder="Select a framework..." />
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
