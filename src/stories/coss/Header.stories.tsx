import type { Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  Header,
  HeaderButton,
  HeaderNav,
  HeaderPrevNavButton,
  HeaderNextNavButton,
  HeaderBackButton,
  HeaderSidebarTrigger,
  HeaderOrganizationMenu,
  HeaderUserMenu,
  HeaderSidechatButton,
  HeaderCopyButton,
} from '@/app/ui/components/header';
import { Button } from '@/app/ui/components/button';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/app/ui/components/breadcrumb';
import { Badge } from '@/app/ui/components/badge';
import { ToastProvider } from '@/app/ui/components/toast';
import {
  Notification01Icon,
  Settings01Icon,
  Search01Icon,
  FilterIcon,
  Add01Icon,
  FileDownloadIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { LogoIcon } from '@/app/ui/components/logo';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false }, mutations: { retry: false } },
});

function WithQuery({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>{children}</ToastProvider>
    </QueryClientProvider>
  );
}

const meta: Meta<typeof Header> = {
  title: 'Volve UI/Navigation/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS class names applied to the header element',
    },
    children: {
      control: false,
      description: 'Header content — buttons, breadcrumbs, nav controls, etc.',
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Header {...args}>
      <div className="flex items-center gap-2 px-2">
        <LogoIcon className="size-5" />
        <span className="text-sm font-semibold">Volve</span>
      </div>
      <div className="flex-1" />
      <div className="flex items-center gap-1 mr-2">
        <HeaderButton aria-label="Search">
          <HugeiconsIcon icon={Search01Icon} />
        </HeaderButton>
        <HeaderButton aria-label="Notifications">
          <HugeiconsIcon icon={Notification01Icon} />
        </HeaderButton>
        <HeaderButton aria-label="Settings">
          <HugeiconsIcon icon={Settings01Icon} />
        </HeaderButton>
      </div>
    </Header>
  ),
};

export const WithBreadcrumb: Story = {
  render: () => (
    <Header>
      <HeaderSidebarTrigger />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Project Alpha</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex-1" />
      <div className="flex items-center gap-1 mr-2">
        <Button variant="secondary" size="sm" kind="with-icon">
          <HugeiconsIcon icon={Add01Icon} />
          New
        </Button>
      </div>
    </Header>
  ),
};

export const WithNavButtons: Story = {
  render: () => (
    <Header>
      <HeaderBackButton />
      <HeaderNav>
        <HeaderPrevNavButton aria-label="Previous" />
        <HeaderNextNavButton aria-label="Next" />
      </HeaderNav>
      <div className="ml-2 flex-1">
        <span className="text-sm font-medium">Tender Package 3 of 12</span>
      </div>
      <div className="flex items-center gap-1 mr-2">
        <Button variant="secondary" size="sm" kind="with-icon">
          <HugeiconsIcon icon={FilterIcon} />
          Filter
        </Button>
        <Button variant="primary" size="sm" kind="with-icon">
          <HugeiconsIcon icon={Add01Icon} />
          Add
        </Button>
      </div>
    </Header>
  ),
};

export const WithStatusBadge: Story = {
  render: () => (
    <Header>
      <HeaderSidebarTrigger />
      <div className="flex items-center gap-2 ml-1">
        <span className="text-sm font-medium">Project Alpha</span>
        <Badge variant="default">Active</Badge>
      </div>
      <div className="flex-1" />
      <div className="flex items-center gap-1 mr-2">
        <HeaderButton aria-label="Notifications">
          <HugeiconsIcon icon={Notification01Icon} />
        </HeaderButton>
        <Button variant="primary" size="sm">
          Publish
        </Button>
      </div>
    </Header>
  ),
};

/** Org-switcher menu displayed on mobile — uses AppContext mock for org data */
export const WithOrganizationMenu: Story = {
  render: () => (
    <WithQuery>
      <Header>
        <HeaderOrganizationMenu />
        <HeaderSidebarTrigger />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>My Project</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <HeaderButton aria-label="Download">
          <HugeiconsIcon icon={FileDownloadIcon} />
        </HeaderButton>
      </Header>
    </WithQuery>
  ),
};

/** User menu displayed on mobile — shows avatar trigger with settings and logout */
export const WithUserMenu: Story = {
  render: () => (
    <WithQuery>
      <Header>
        <HeaderSidebarTrigger />
        <div className="flex-1" />
        <HeaderUserMenu />
      </Header>
    </WithQuery>
  ),
};

/** "Ask AI" button that toggles the sidechat panel */
export const WithSidechatButton: Story = {
  render: () => (
    <WithQuery>
      <Header>
        <HeaderSidebarTrigger />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Evaluation Summary</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <HeaderSidechatButton />
      </Header>
    </WithQuery>
  ),
};

/** Copy-URL button — clicks to copy the current page URL and fires a toast */
export const WithCopyButton: Story = {
  render: () => (
    <WithQuery>
      <Header>
        <HeaderSidebarTrigger />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Document View</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <HeaderCopyButton />
        <HeaderSidechatButton />
      </Header>
    </WithQuery>
  ),
};

/** Full evaluation-page header combining all interactive sub-components */
export const FullEvaluationHeader: Story = {
  name: 'Full — Evaluation Page',
  render: () => (
    <WithQuery>
      <Header>
        <HeaderOrganizationMenu />
        <HeaderSidebarTrigger />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/projects">My Test Project</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/evaluations">test epa extractions</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Summary</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <HeaderCopyButton />
        <HeaderButton aria-label="Download report">
          <HugeiconsIcon icon={FileDownloadIcon} />
        </HeaderButton>
        <HeaderSidechatButton />
        <HeaderUserMenu />
      </Header>
    </WithQuery>
  ),
};
