import type { Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  SidebarHeader,
  SidebarHeaderButton,
  SidebarHeading,
  SidebarList,
  SidebarListEmpty,
  SidebarItem,
  SidebarLink,
  SidebarLinkIconButton,
  SidebarLinkBadge,
  SidebarHelpButton,
  SidebarUserMenu,
  SidebarOrganizationMenu,
  SidebarAccordion,
  SidebarAccordionItem,
  SidebarAccordionTrigger,
  SidebarAccordionPanel,
} from '@/app/ui/components/sidebar';

import { Badge } from '@/app/ui/components/badge';
import {
  Home01Icon,
  FolderLibraryIcon,
  Settings01Icon,
  Notification01Icon,
  Add01Icon,
  MoreVerticalIcon,
  DocumentAttachmentIcon,
  FolderIcon,
  Analytics01Icon,
  UserGroupIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { LogoIcon } from '@/app/ui/components/logo';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false }, mutations: { retry: false } },
});

const meta: Meta<typeof SidebarHeader> = {
  title: 'Volve UI/Navigation/Sidebar',
  component: SidebarHeader,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS class names for the SidebarHeader',
    },
    children: {
      control: false,
      description: 'Content rendered inside the SidebarHeader',
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

function SidebarWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-56 bg-background-main border rounded-lg h-[600px] flex flex-col overflow-hidden">
      {children}
    </div>
  );
}

export const Default: Story = {
  render: (args) => (
    <SidebarWrapper>
      <div className="p-1.5 flex flex-col gap-1 h-full">
        <SidebarHeader {...args}>
          <div className="flex items-center gap-2 px-2">
            <LogoIcon className="size-5" />
            <span className="text-sm font-semibold">Volve</span>
          </div>
          <SidebarHeaderButton aria-label="Toggle sidebar">
            <HugeiconsIcon icon={Settings01Icon} />
          </SidebarHeaderButton>
        </SidebarHeader>

        <SidebarList>
          <SidebarItem>
            <SidebarLink href="/" isActive>
              <HugeiconsIcon icon={Home01Icon} />
              Home
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink href="/projects">
              <HugeiconsIcon icon={FolderLibraryIcon} />
              Projects
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink href="/notifications">
              <HugeiconsIcon icon={Notification01Icon} />
              Notifications
              <SidebarLinkBadge>3</SidebarLinkBadge>
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink href="/settings">
              <HugeiconsIcon icon={Settings01Icon} />
              Settings
            </SidebarLink>
          </SidebarItem>
        </SidebarList>
      </div>
    </SidebarWrapper>
  ),
};

export const WithSections: Story = {
  render: () => (
    <SidebarWrapper>
      <div className="p-1.5 flex flex-col gap-1 h-full overflow-auto">
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2">
            <LogoIcon className="size-5" />
            <span className="text-sm font-semibold">Volve</span>
          </div>
        </SidebarHeader>

        <div>
          <SidebarHeading>Main</SidebarHeading>
          <SidebarList>
            <SidebarItem>
              <SidebarLink href="/" isActive>
                <HugeiconsIcon icon={Home01Icon} />
                Dashboard
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="/analytics">
                <HugeiconsIcon icon={Analytics01Icon} />
                Analytics
              </SidebarLink>
            </SidebarItem>
          </SidebarList>
        </div>

        <div>
          <SidebarHeading>Projects</SidebarHeading>
          <SidebarList>
            <SidebarItem>
              <SidebarLink href="/projects/alpha">
                <HugeiconsIcon icon={FolderIcon} />
                Project Alpha
                <SidebarLinkBadge>5</SidebarLinkBadge>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="/projects/beta">
                <HugeiconsIcon icon={FolderIcon} />
                Project Beta
              </SidebarLink>
            </SidebarItem>
          </SidebarList>
        </div>

        <div>
          <SidebarHeading>Team</SidebarHeading>
          <SidebarList>
            <SidebarItem>
              <SidebarLink href="/team">
                <HugeiconsIcon icon={UserGroupIcon} />
                Members
              </SidebarLink>
            </SidebarItem>
          </SidebarList>
        </div>
      </div>
    </SidebarWrapper>
  ),
};

export const WithIconButtons: Story = {
  render: () => (
    <SidebarWrapper>
      <div className="p-1.5 flex flex-col gap-1 h-full">
        <SidebarHeading>Documents</SidebarHeading>
        <SidebarList>
          {['Report Q1', 'Report Q2', 'Annual Summary', 'Project Brief'].map((doc) => (
            <SidebarItem key={doc}>
              <SidebarLink href={`/${doc.toLowerCase().replace(' ', '-')}`}>
                <HugeiconsIcon icon={DocumentAttachmentIcon} />
                {doc}
                <SidebarLinkIconButton aria-label="More options">
                  <HugeiconsIcon icon={MoreVerticalIcon} />
                </SidebarLinkIconButton>
              </SidebarLink>
            </SidebarItem>
          ))}
        </SidebarList>
      </div>
    </SidebarWrapper>
  ),
};

export const WithAccordion: Story = {
  render: () => (
    <SidebarWrapper>
      <div className="p-1.5 flex flex-col gap-1 h-full overflow-auto">
        <SidebarHeading>Workspaces</SidebarHeading>
        <SidebarAccordion defaultValue={['workspace-1']}>
          {/* Correct pattern: SidebarLink directly in SidebarAccordionItem (no SidebarItem wrapper) */}
          <SidebarAccordionItem value="workspace-1">
            <SidebarLink className="group/accordion-trigger-link" href="/workspace-1">
              <SidebarAccordionTrigger>
                <HugeiconsIcon icon={FolderIcon} className="size-4" />
              </SidebarAccordionTrigger>
              Workspace Alpha
              <SidebarLinkIconButton aria-label="Add item">
                <HugeiconsIcon icon={Add01Icon} />
              </SidebarLinkIconButton>
            </SidebarLink>
            <SidebarAccordionPanel>
              {/* Correct pattern: SidebarLink directly in SidebarList (no SidebarItem wrapper) */}
              <SidebarList className="pt-1">
                <SidebarLink href="/workspace-1/docs">
                  <HugeiconsIcon icon={DocumentAttachmentIcon} />
                  Documentation
                </SidebarLink>
                <SidebarLink href="/workspace-1/reports" isActive>
                  <HugeiconsIcon icon={Analytics01Icon} />
                  Reports
                  <SidebarLinkBadge>2</SidebarLinkBadge>
                </SidebarLink>
              </SidebarList>
            </SidebarAccordionPanel>
          </SidebarAccordionItem>

          <SidebarAccordionItem value="workspace-2">
            <SidebarLink className="group/accordion-trigger-link" href="/workspace-2">
              <SidebarAccordionTrigger>
                <HugeiconsIcon icon={FolderIcon} className="size-4" />
              </SidebarAccordionTrigger>
              Workspace Beta
            </SidebarLink>
            <SidebarAccordionPanel>
              <SidebarList className="pt-1">
                <SidebarLink href="/workspace-2/docs">
                  <HugeiconsIcon icon={DocumentAttachmentIcon} />
                  Documentation
                </SidebarLink>
              </SidebarList>
            </SidebarAccordionPanel>
          </SidebarAccordionItem>
        </SidebarAccordion>

        <SidebarHeading>Direct</SidebarHeading>
        <SidebarList>
          <SidebarItem>
            <SidebarLink href="/settings">
              <HugeiconsIcon icon={Settings01Icon} />
              Settings
            </SidebarLink>
          </SidebarItem>
        </SidebarList>
      </div>
    </SidebarWrapper>
  ),
};

export const Empty: Story = {
  render: () => (
    <SidebarWrapper>
      <div className="p-1.5 flex flex-col gap-1 h-full">
        <SidebarHeading>Projects</SidebarHeading>
        <SidebarList>
          <SidebarListEmpty>No projects yet.</SidebarListEmpty>
        </SidebarList>
      </div>
    </SidebarWrapper>
  ),
};

export const WithBadges: Story = {
  render: () => (
    <SidebarWrapper>
      <div className="p-1.5 flex flex-col gap-1 h-full">
        <SidebarHeading>Inbox</SidebarHeading>
        <SidebarList>
          {[
            { label: 'All', count: 24, active: true },
            { label: 'Unread', count: 8 },
            { label: 'Flagged', count: 3 },
            { label: 'Sent', count: undefined },
            { label: 'Archived', count: undefined },
          ].map(({ label, count, active }) => (
            <SidebarItem key={label}>
              <SidebarLink href={`/inbox/${label.toLowerCase()}`} isActive={active}>
                <HugeiconsIcon icon={DocumentAttachmentIcon} />
                {label}
                {count !== undefined && <SidebarLinkBadge>{count}</SidebarLinkBadge>}
              </SidebarLink>
            </SidebarItem>
          ))}
        </SidebarList>

        <div className="mt-auto">
          <SidebarList>
            <SidebarItem>
              <SidebarLink href="/settings">
                <HugeiconsIcon icon={Settings01Icon} />
                Settings
                <Badge variant="default" className="ml-auto text-xs">New</Badge>
              </SidebarLink>
            </SidebarItem>
          </SidebarList>
        </div>
      </div>
    </SidebarWrapper>
  ),
};

/** SidebarHelpButton — pre-built "Help & support" link at the bottom of the sidebar */
export const WithHelpButton: Story = {
  render: () => (
    <SidebarWrapper>
      <div className="p-1.5 flex flex-col gap-1 h-full">
        <SidebarList>
          <SidebarItem>
            <SidebarLink href="/" isActive>
              <HugeiconsIcon icon={Home01Icon} />
              Home
            </SidebarLink>
          </SidebarItem>
        </SidebarList>
        <div className="mt-auto">
          <SidebarHelpButton />
        </div>
      </div>
    </SidebarWrapper>
  ),
};

/** SidebarOrganizationMenu — org-switcher menu trigger at the top of the sidebar */
export const WithOrganizationMenu: Story = {
  render: () => (
    <QueryClientProvider client={queryClient}>
      <SidebarWrapper>
        <div className="p-1.5 flex flex-col gap-1 h-full">
          <SidebarHeader>
            <SidebarOrganizationMenu />
            <SidebarHeaderButton aria-label="Search">
              <HugeiconsIcon icon={Add01Icon} />
            </SidebarHeaderButton>
          </SidebarHeader>
          <SidebarList>
            <SidebarItem>
              <SidebarLink href="/" isActive>
                <HugeiconsIcon icon={Home01Icon} />
                Projects
              </SidebarLink>
            </SidebarItem>
          </SidebarList>
        </div>
      </SidebarWrapper>
    </QueryClientProvider>
  ),
};

/** SidebarUserMenu — user avatar trigger at the bottom with feedback card and logout */
export const WithUserMenu: Story = {
  render: () => (
    <QueryClientProvider client={queryClient}>
      <SidebarWrapper>
        <div className="p-1.5 flex flex-col gap-1 h-full">
          <SidebarList>
            <SidebarItem>
              <SidebarLink href="/" isActive>
                <HugeiconsIcon icon={Home01Icon} />
                Projects
              </SidebarLink>
            </SidebarItem>
          </SidebarList>
          <SidebarUserMenu />
        </div>
      </SidebarWrapper>
    </QueryClientProvider>
  ),
};
