import type { Meta, StoryObj } from '@storybook/react-vite';
import { Kbd, KbdGroup, KbdCommand } from '@/app/ui/components/kbd';

const meta = {
  title: 'Volve UI/Typography/Kbd',
  component: Kbd,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Key label displayed inside the keyboard shortcut element',
    },
  },
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'K',
  },
};

export const Escape: Story = {
  args: {
    ...Default.args,
    children: 'Esc',
  },
};

export const Shortcut: Story = {
  render: () => (
    <KbdGroup>
      <KbdCommand />
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
};

export const ArrowKeys: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>&#8593;</Kbd>
      <Kbd>&#8595;</Kbd>
      <Kbd>&#8592;</Kbd>
      <Kbd>&#8594;</Kbd>
    </KbdGroup>
  ),
};

export const AllKeys: Story = {
  render: () => (
    <div className="flex flex-col gap-3 text-sm">
      <div className="flex items-center justify-between gap-8">
        <span className="text-muted-foreground">Save</span>
        <KbdGroup>
          <KbdCommand />
          <Kbd>S</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center justify-between gap-8">
        <span className="text-muted-foreground">Undo</span>
        <KbdGroup>
          <KbdCommand />
          <Kbd>Z</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center justify-between gap-8">
        <span className="text-muted-foreground">Copy</span>
        <KbdGroup>
          <KbdCommand />
          <Kbd>C</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center justify-between gap-8">
        <span className="text-muted-foreground">Paste</span>
        <KbdGroup>
          <KbdCommand />
          <Kbd>V</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center justify-between gap-8">
        <span className="text-muted-foreground">Find</span>
        <KbdGroup>
          <KbdCommand />
          <Kbd>F</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center justify-between gap-8">
        <span className="text-muted-foreground">Cancel</span>
        <Kbd>Esc</Kbd>
      </div>
      <div className="flex items-center justify-between gap-8">
        <span className="text-muted-foreground">Delete</span>
        <Kbd>Del</Kbd>
      </div>
      <div className="flex items-center justify-between gap-8">
        <span className="text-muted-foreground">Tab</span>
        <Kbd>Tab</Kbd>
      </div>
      <div className="flex items-center justify-between gap-8">
        <span className="text-muted-foreground">Navigate</span>
        <KbdGroup>
          <Kbd>&#8593;</Kbd>
          <Kbd>&#8595;</Kbd>
          <Kbd>&#8592;</Kbd>
          <Kbd>&#8594;</Kbd>
        </KbdGroup>
      </div>
    </div>
  ),
};
