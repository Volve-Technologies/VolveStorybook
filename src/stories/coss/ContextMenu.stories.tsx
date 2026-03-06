import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuPopup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuGroup,
  ContextMenuGroupLabel,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  SubContextmenu,
  ContextMenuSubContextmenuTrigger,
} from '@/app/ui/components/context-menu';
import * as React from 'react';

const meta: Meta = {
  title: 'Volve UI/Overlays/ContextMenu',
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: 'Controlled open state of the context menu',
    },
    onOpenChange: {
      action: 'onOpenChange',
      description: 'Callback fired when the open state changes',
    },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => (
    <ContextMenu {...args}>
      <ContextMenuTrigger
        className="flex h-32 w-full items-center justify-center rounded-lg border-2 border-dashed text-sm text-muted-foreground select-none"
      >
        Right-click here to open context menu
      </ContextMenuTrigger>
      <ContextMenuPopup>
        <ContextMenuItem>Open</ContextMenuItem>
        <ContextMenuItem>Open in New Tab</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Copy Link</ContextMenuItem>
        <ContextMenuItem>Copy</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
      </ContextMenuPopup>
    </ContextMenu>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger
        className="flex h-32 w-full items-center justify-center rounded-lg border-2 border-dashed text-sm text-muted-foreground select-none"
      >
        Right-click for grouped menu
      </ContextMenuTrigger>
      <ContextMenuPopup>
        <ContextMenuGroup>
          <ContextMenuGroupLabel>Actions</ContextMenuGroupLabel>
          <ContextMenuItem>Edit</ContextMenuItem>
          <ContextMenuItem>Duplicate</ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuGroupLabel>Danger Zone</ContextMenuGroupLabel>
          <ContextMenuItem variant="destructive">Archive</ContextMenuItem>
          <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuPopup>
    </ContextMenu>
  ),
};

export const WithCheckboxItems: Story = {
  render: () => {
    function CheckboxDemo() {
      const [showGrid, setShowGrid] = React.useState(false);
      const [showRulers, setShowRulers] = React.useState(true);
      return (
        <ContextMenu>
          <ContextMenuTrigger
            className="flex h-32 w-full items-center justify-center rounded-lg border-2 border-dashed text-sm text-muted-foreground select-none"
          >
            Right-click for checkbox menu
          </ContextMenuTrigger>
          <ContextMenuPopup>
            <ContextMenuGroupLabel>View Options</ContextMenuGroupLabel>
            <ContextMenuCheckboxItem checked={showGrid} onCheckedChange={setShowGrid}>
              Show Grid
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem checked={showRulers} onCheckedChange={setShowRulers}>
              Show Rulers
            </ContextMenuCheckboxItem>
          </ContextMenuPopup>
        </ContextMenu>
      );
    }
    return <CheckboxDemo />;
  },
};

export const WithSubmenu: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger
        className="flex h-32 w-full items-center justify-center rounded-lg border-2 border-dashed text-sm text-muted-foreground select-none"
      >
        Right-click for submenu
      </ContextMenuTrigger>
      <ContextMenuPopup>
        <ContextMenuItem>View</ContextMenuItem>
        <SubContextmenu>
          <ContextMenuSubContextmenuTrigger>Export As</ContextMenuSubContextmenuTrigger>
          <ContextMenuPopup>
            <ContextMenuItem>PDF</ContextMenuItem>
            <ContextMenuItem>PNG</ContextMenuItem>
            <ContextMenuItem>SVG</ContextMenuItem>
          </ContextMenuPopup>
        </SubContextmenu>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
      </ContextMenuPopup>
    </ContextMenu>
  ),
};
