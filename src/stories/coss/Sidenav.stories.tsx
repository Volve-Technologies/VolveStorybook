import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Sidenav,
  SidenavEmpty,
  SidenavHeader,
  SidenavHeading,
  SidenavList,
  SidenavItem,
  SidenavLink,
  SidenavButton,
} from '@/app/ui/components/sidenav';
import {
  DocumentAttachmentIcon,
  Settings01Icon,
  Analytics01Icon,
  UserGroupIcon,
  FolderLibraryIcon,
  Home01Icon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

const meta: Meta<typeof Sidenav> = {
  title: 'Volve UI/Navigation/Sidenav',
  component: Sidenav,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS class names for the Sidenav container',
    },
    children: {
      control: false,
      description: 'Sidenav content — header, lists, items',
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="flex h-[500px] border rounded-lg overflow-hidden w-[700px]">
      <Sidenav className="border-r bg-surface-1" {...args}>
        <SidenavHeader>
          <SidenavHeading>Sections</SidenavHeading>
        </SidenavHeader>
        <SidenavList>
          <SidenavItem>
            <SidenavLink href="/overview" active>
              Overview
            </SidenavLink>
          </SidenavItem>
          <SidenavItem>
            <SidenavLink href="/details">
              Details
            </SidenavLink>
          </SidenavItem>
          <SidenavItem>
            <SidenavLink href="/analytics">
              Analytics
            </SidenavLink>
          </SidenavItem>
          <SidenavItem>
            <SidenavLink href="/settings">
              Settings
            </SidenavLink>
          </SidenavItem>
        </SidenavList>
      </Sidenav>
      <div className="flex-1 p-6">
        <p className="text-sm text-muted">Main content area</p>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex h-[500px] border rounded-lg overflow-hidden w-[700px]">
      <Sidenav className="border-r bg-surface-1">
        <SidenavHeader>
          <SidenavHeading>Navigation</SidenavHeading>
        </SidenavHeader>
        <SidenavList>
          {[
            { label: 'Home', icon: Home01Icon, href: '/', active: true },
            { label: 'Projects', icon: FolderLibraryIcon, href: '/projects' },
            { label: 'Analytics', icon: Analytics01Icon, href: '/analytics' },
            { label: 'Team', icon: UserGroupIcon, href: '/team' },
            { label: 'Documents', icon: DocumentAttachmentIcon, href: '/docs' },
            { label: 'Settings', icon: Settings01Icon, href: '/settings' },
          ].map(({ label, icon, href, active }) => (
            <SidenavItem key={label}>
              <SidenavLink href={href} active={active}>
                <HugeiconsIcon icon={icon} className="size-4" />
                {label}
              </SidenavLink>
            </SidenavItem>
          ))}
        </SidenavList>
      </Sidenav>
      <div className="flex-1 p-6">
        <p className="text-sm text-muted">Select a section from the sidebar</p>
      </div>
    </div>
  ),
};

export const WithButtons: Story = {
  render: () => (
    <div className="flex h-[500px] border rounded-lg overflow-hidden w-[700px]">
      <Sidenav className="border-r bg-surface-1">
        <SidenavHeader>
          <SidenavHeading>Filters</SidenavHeading>
        </SidenavHeader>
        <SidenavList scrollable={false}>
          <SidenavItem>
            <SidenavButton active>All Items</SidenavButton>
          </SidenavItem>
          <SidenavItem>
            <SidenavButton>In Progress</SidenavButton>
          </SidenavItem>
          <SidenavItem>
            <SidenavButton>Completed</SidenavButton>
          </SidenavItem>
          <SidenavItem>
            <SidenavButton>Archived</SidenavButton>
          </SidenavItem>
        </SidenavList>
      </Sidenav>
      <div className="flex-1 p-6">
        <p className="text-sm text-muted">Filtered content appears here</p>
      </div>
    </div>
  ),
};

export const EmptyState: Story = {
  render: () => (
    <div className="flex h-[400px] border rounded-lg overflow-hidden w-[700px]">
      <Sidenav className="border-r bg-surface-1">
        <SidenavHeader>
          <SidenavHeading>Projects</SidenavHeading>
        </SidenavHeader>
        <SidenavList>
          <SidenavEmpty>No projects found.</SidenavEmpty>
        </SidenavList>
      </Sidenav>
      <div className="flex-1 p-6">
        <p className="text-sm text-muted">Nothing selected</p>
      </div>
    </div>
  ),
};

export const MultipleGroups: Story = {
  render: () => (
    <div className="flex h-[600px] border rounded-lg overflow-hidden w-[750px]">
      <Sidenav className="border-r bg-surface-1">
        <SidenavHeader>
          <SidenavHeading>Project Alpha</SidenavHeading>
        </SidenavHeader>
        <SidenavList>
          <SidenavItem>
            <SidenavLink href="/overview" active>
              Overview
            </SidenavLink>
          </SidenavItem>
          <SidenavItem>
            <SidenavLink href="/description">
              Description
            </SidenavLink>
          </SidenavItem>
        </SidenavList>

        <div className="px-3 pt-2">
          <p className="text-muted text-xs font-medium mb-1">Reports</p>
        </div>
        <SidenavList scrollable={false}>
          <SidenavItem>
            <SidenavLink href="/reports/weekly">
              Weekly Report
            </SidenavLink>
          </SidenavItem>
          <SidenavItem>
            <SidenavLink href="/reports/monthly">
              Monthly Report
            </SidenavLink>
          </SidenavItem>
          <SidenavItem>
            <SidenavLink href="/reports/annual">
              Annual Report
            </SidenavLink>
          </SidenavItem>
        </SidenavList>

        <div className="px-3 pt-2">
          <p className="text-muted text-xs font-medium mb-1">Settings</p>
        </div>
        <SidenavList scrollable={false}>
          <SidenavItem>
            <SidenavLink href="/settings/general">
              General
            </SidenavLink>
          </SidenavItem>
          <SidenavItem>
            <SidenavLink href="/settings/members">
              Members
            </SidenavLink>
          </SidenavItem>
        </SidenavList>
      </Sidenav>
      <div className="flex-1 p-6">
        <p className="text-sm text-muted">Select a section to view details</p>
      </div>
    </div>
  ),
};
