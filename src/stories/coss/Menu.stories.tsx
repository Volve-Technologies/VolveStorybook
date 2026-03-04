import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Menu,
  MenuTrigger,
  MenuPopup,
  MenuItem,
  MenuSeparator,
  MenuGroupLabel,
  MenuGroup,
  MenuCheckboxItem,
  MenuRadioGroup,
  MenuRadioItem,
} from '@/app/ui/components/menu';
import { Button } from '@/app/ui/components/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { Edit02Icon, Delete02Icon, Copy01Icon, Share01Icon } from '@hugeicons/core-free-icons';

const meta = {
  title: 'Volve UI/Navigation/Menu',
  component: Menu,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Menu>
      <MenuTrigger render={<Button variant="secondary">Options</Button>} />
      <MenuPopup>
        <MenuItem>Edit</MenuItem>
        <MenuItem>Duplicate</MenuItem>
        <MenuItem>Share</MenuItem>
        <MenuItem>Delete</MenuItem>
      </MenuPopup>
    </Menu>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Menu>
      <MenuTrigger render={<Button variant="secondary">Options</Button>} />
      <MenuPopup>
        <MenuItem>
          <HugeiconsIcon icon={Edit02Icon} />
          Edit
        </MenuItem>
        <MenuItem>
          <HugeiconsIcon icon={Copy01Icon} />
          Duplicate
        </MenuItem>
        <MenuItem>
          <HugeiconsIcon icon={Share01Icon} />
          Share
        </MenuItem>
        <MenuItem>
          <HugeiconsIcon icon={Delete02Icon} />
          Delete
        </MenuItem>
      </MenuPopup>
    </Menu>
  ),
};

export const WithSeparator: Story = {
  render: () => (
    <Menu>
      <MenuTrigger render={<Button variant="secondary">Options</Button>} />
      <MenuPopup>
        <MenuItem>
          <HugeiconsIcon icon={Edit02Icon} />
          Edit
        </MenuItem>
        <MenuItem>
          <HugeiconsIcon icon={Copy01Icon} />
          Duplicate
        </MenuItem>
        <MenuSeparator />
        <MenuItem>
          <HugeiconsIcon icon={Delete02Icon} />
          Delete
        </MenuItem>
      </MenuPopup>
    </Menu>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <Menu>
      <MenuTrigger render={<Button variant="secondary">Options</Button>} />
      <MenuPopup>
        <MenuGroup>
          <MenuGroupLabel>Actions</MenuGroupLabel>
          <MenuItem>
            <HugeiconsIcon icon={Edit02Icon} />
            Edit
          </MenuItem>
          <MenuItem>
            <HugeiconsIcon icon={Copy01Icon} />
            Duplicate
          </MenuItem>
          <MenuItem>
            <HugeiconsIcon icon={Share01Icon} />
            Share
          </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <MenuGroupLabel>Danger</MenuGroupLabel>
          <MenuItem>
            <HugeiconsIcon icon={Delete02Icon} />
            Delete
          </MenuItem>
        </MenuGroup>
      </MenuPopup>
    </Menu>
  ),
};

export const WithCheckbox: Story = {
  render: () => {
    const [showToolbar, setShowToolbar] = useState(true);
    const [showStatusBar, setShowStatusBar] = useState(true);
    const [showActivityBar, setShowActivityBar] = useState(false);

    return (
      <Menu>
        <MenuTrigger render={<Button variant="secondary">View</Button>} />
        <MenuPopup>
          <MenuGroupLabel>Show</MenuGroupLabel>
          <MenuCheckboxItem checked={showToolbar} onCheckedChange={setShowToolbar}>
            Toolbar
          </MenuCheckboxItem>
          <MenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
            Status Bar
          </MenuCheckboxItem>
          <MenuCheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar}>
            Activity Bar
          </MenuCheckboxItem>
        </MenuPopup>
      </Menu>
    );
  },
};

export const WithRadio: Story = {
  render: () => {
    const [role, setRole] = useState('view');

    return (
      <Menu>
        <MenuTrigger render={<Button variant="secondary">Role</Button>} />
        <MenuPopup>
          <MenuGroupLabel>Permission</MenuGroupLabel>
          <MenuRadioGroup value={role} onValueChange={setRole}>
            <MenuRadioItem value="view">View</MenuRadioItem>
            <MenuRadioItem value="edit">Edit</MenuRadioItem>
            <MenuRadioItem value="admin">Admin</MenuRadioItem>
          </MenuRadioGroup>
        </MenuPopup>
      </Menu>
    );
  },
};
