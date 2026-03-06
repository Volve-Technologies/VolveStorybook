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
  CommandFooter,
  CommandDialog,
  CommandDialogPopup,
  CommandDialogTrigger,
} from '@/app/ui/components/command';
import { Button } from '@/app/ui/components/button';
import { Kbd } from '@/app/ui/components/kbd';

const meta = {
  title: 'Volve UI/Advanced/Command',
  component: Command,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes applied to the command container',
    },
    onValueChange: {
      action: 'onValueChange',
      description: 'Callback fired when the selected value changes',
    },
    filter: {
      control: false,
      description: 'Custom filter function for command items',
    },
    loop: {
      control: { type: 'boolean' },
      description: 'Whether keyboard navigation loops at the ends of the list',
    },
  },
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="border rounded-xl overflow-hidden w-80">
      <Command {...args}>
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

/** CommandFooter — bottom bar showing keyboard hint or action info */
export const WithFooter: Story = {
  render: () => (
    <div className="border rounded-xl overflow-hidden w-80">
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandGroupLabel>Actions</CommandGroupLabel>
            <CommandItem value="new">
              New document
              <CommandShortcut>⌘N</CommandShortcut>
            </CommandItem>
            <CommandItem value="open">
              Open file
              <CommandShortcut>⌘O</CommandShortcut>
            </CommandItem>
            <CommandItem value="save">
              Save
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
        <CommandFooter>
          <span>Navigate with <Kbd>↑↓</Kbd></span>
          <span>Select with <Kbd>↵</Kbd></span>
          <span>Close with <Kbd>Esc</Kbd></span>
        </CommandFooter>
      </Command>
    </div>
  ),
};

/** CommandDialog — full-screen command palette triggered by a button */
export const WithDialog: Story = {
  render: () => (
    <CommandDialog>
      <CommandDialogTrigger render={<Button variant="secondary">Open Command Palette</Button>} />
      <CommandDialogPopup>
        <CommandInput placeholder="Search commands..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandGroupLabel>Navigation</CommandGroupLabel>
            <CommandItem value="dashboard">Dashboard</CommandItem>
            <CommandItem value="projects">Projects</CommandItem>
            <CommandItem value="settings">Settings</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup>
            <CommandGroupLabel>Actions</CommandGroupLabel>
            <CommandItem value="new-eval">
              New evaluation
              <CommandShortcut>⌘E</CommandShortcut>
            </CommandItem>
            <CommandItem value="export">
              Export report
              <CommandShortcut>⌘⇧E</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
        <CommandFooter>
          <span>Navigate <Kbd>↑↓</Kbd></span>
          <span>Select <Kbd>↵</Kbd></span>
          <span>Close <Kbd>Esc</Kbd></span>
        </CommandFooter>
      </CommandDialogPopup>
    </CommandDialog>
  ),
};
