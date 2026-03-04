import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandGroup,
  CommandGroupLabel,
  CommandEmpty,
  CommandSeparator,
  CommandShortcut,
} from '@/app/ui/components/command';

const meta = {
  title: 'Volve UI/Advanced/Command',
  component: Command,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="border rounded-xl overflow-hidden w-80">
      <Command>
        <CommandInput placeholder="Search commands..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandGroupLabel>Files</CommandGroupLabel>
            <CommandItem value="new-file">New File</CommandItem>
            <CommandItem value="open-file">Open File</CommandItem>
            <CommandItem value="save-file">Save File</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup>
            <CommandGroupLabel>Actions</CommandGroupLabel>
            <CommandItem value="copy">
              Copy
              <CommandShortcut>⌘C</CommandShortcut>
            </CommandItem>
            <CommandItem value="paste">
              Paste
              <CommandShortcut>⌘V</CommandShortcut>
            </CommandItem>
            <CommandItem value="undo">
              Undo
              <CommandShortcut>⌘Z</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
};

export const WithSearch: Story = {
  render: () => (
    <div className="border rounded-xl overflow-hidden w-80">
      <Command>
        <CommandInput placeholder="Search commands..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandGroupLabel>Navigation</CommandGroupLabel>
            <CommandItem value="dashboard">Dashboard</CommandItem>
            <CommandItem value="settings">Settings</CommandItem>
            <CommandItem value="profile">Profile</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup>
            <CommandGroupLabel>Actions</CommandGroupLabel>
            <CommandItem value="export">
              Export
              <CommandShortcut>⌘E</CommandShortcut>
            </CommandItem>
            <CommandItem value="import">
              Import
              <CommandShortcut>⌘I</CommandShortcut>
            </CommandItem>
            <CommandItem value="share">
              Share
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
};

export const Minimal: Story = {
  render: () => (
    <div className="border rounded-xl overflow-hidden w-80">
      <Command>
        <CommandInput placeholder="Search commands..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandItem value="apple">Apple</CommandItem>
          <CommandItem value="banana">Banana</CommandItem>
          <CommandItem value="cherry">Cherry</CommandItem>
          <CommandItem value="date">Date</CommandItem>
          <CommandItem value="elderberry">Elderberry</CommandItem>
        </CommandList>
      </Command>
    </div>
  ),
};
