import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Main,
  MainScrollArea,
  MainContainer,
  MainHeader,
  MainHeaderCopyButton,
  MainHeaderBackButton,
  MainActions,
  MainActionsScrollArea,
  MainNav,
  MainNavList,
  MainNavItem,
  MainNavLink,
  MainFrames,
} from '@/app/ui/components/main';
import { Button } from '@/app/ui/components/button';
import { Frame } from '@/app/ui/components/frame';
import { H2, H3 } from '@/app/ui/components/heading';
import { Badge } from '@/app/ui/components/badge';
import {
  Add01Icon,
  FilterIcon,
  Download01Icon,
  Analytics01Icon,
  DocumentAttachmentIcon,
  GridViewIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

const meta: Meta<typeof Main> = {
  title: 'Volve UI/Layout/Main',
  component: Main,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS class names applied to the main container',
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { className: 'h-full' },
  render: (args) => (
    <div className="h-[600px] flex bg-surface-2 p-2">
      <Main {...args}>
        <MainHeader>
          <H3>Project Overview</H3>
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm" kind="with-icon">
              <HugeiconsIcon icon={Download01Icon} />
              Export
            </Button>
            <Button variant="primary" size="sm" kind="with-icon">
              <HugeiconsIcon icon={Add01Icon} />
              New Item
            </Button>
          </div>
        </MainHeader>
        <MainContainer>
          <p className="text-sm text-muted">Main content goes here.</p>
        </MainContainer>
      </Main>
    </div>
  ),
};

export const WithNav: Story = {
  render: () => (
    <div className="h-[600px] flex bg-surface-2 p-2">
      <Main className="h-full">
        <MainNav>
          <MainNavList>
            <MainNavItem>
              <MainNavLink href="/overview" active>
                <HugeiconsIcon icon={GridViewIcon} />
                Overview
              </MainNavLink>
            </MainNavItem>
            <MainNavItem>
              <MainNavLink href="/analytics">
                <HugeiconsIcon icon={Analytics01Icon} />
                Analytics
              </MainNavLink>
            </MainNavItem>
            <MainNavItem>
              <MainNavLink href="/documents">
                <HugeiconsIcon icon={DocumentAttachmentIcon} />
                Documents
              </MainNavLink>
            </MainNavItem>
          </MainNavList>
        </MainNav>
        <MainContainer>
          <p className="text-sm text-muted">Tab content here.</p>
        </MainContainer>
      </Main>
    </div>
  ),
};

export const WithActions: Story = {
  render: () => (
    <div className="h-[600px] flex bg-surface-2 p-2">
      <Main className="h-full">
        <MainNav>
          <MainNavList>
            <MainNavItem>
              <MainNavLink href="/all" active>
                All
              </MainNavLink>
            </MainNavItem>
            <MainNavItem>
              <MainNavLink href="/active">
                Active
                <Badge variant="default" className="ml-1">4</Badge>
              </MainNavLink>
            </MainNavItem>
            <MainNavItem>
              <MainNavLink href="/archived">
                Archived
              </MainNavLink>
            </MainNavItem>
          </MainNavList>
        </MainNav>
        <MainActions>
          <MainActionsScrollArea>
            <Button variant="ghost" size="sm" kind="with-icon">
              <HugeiconsIcon icon={FilterIcon} />
              Filter
            </Button>
            <Button variant="ghost" size="sm" kind="with-icon">
              <HugeiconsIcon icon={Download01Icon} />
              Export
            </Button>
          </MainActionsScrollArea>
          <Button variant="primary" size="sm" kind="with-icon" className="ml-auto">
            <HugeiconsIcon icon={Add01Icon} />
            Create
          </Button>
        </MainActions>
        <MainContainer>
          <p className="text-sm text-muted">Filtered content here.</p>
        </MainContainer>
      </Main>
    </div>
  ),
};

/** MainScrollArea — scroll-area wrapper; use instead of MainContainer when content must scroll within Main */
export const WithScrollArea: Story = {
  render: () => (
    <div className="h-[500px] flex bg-surface-2 p-2">
      <Main className="h-full">
        <MainHeader>
          <H3>Scrollable Content</H3>
        </MainHeader>
        <MainScrollArea>
          <MainContainer>
            {Array.from({ length: 20 }).map((_, i) => (
              <p key={i} className="text-sm text-muted mb-3">
                Row {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            ))}
          </MainContainer>
        </MainScrollArea>
      </Main>
    </div>
  ),
};

/** MainHeaderCopyButton + MainHeaderBackButton — utility buttons for the main header */
export const WithHeaderButtons: Story = {
  render: () => (
    <div className="h-[400px] flex bg-surface-2 p-2">
      <Main className="h-full">
        <MainHeader>
          <MainHeaderBackButton />
          <H3>Document Title</H3>
          <MainHeaderCopyButton />
        </MainHeader>
        <MainContainer>
          <p className="text-sm text-muted">Use the back button to navigate up and the copy button to share this URL.</p>
        </MainContainer>
      </Main>
    </div>
  ),
};

export const WithFrames: Story = {
  render: () => (
    <div className="h-[700px] flex bg-surface-2 p-2">
      <Main className="h-full">
        <MainHeader>
          <H3>Dashboard</H3>
        </MainHeader>
        <MainContainer>
          <MainFrames>
            <Frame>
              <div className="p-4">
                <p className="text-xs text-muted mb-1">Total Projects</p>
                <p className="text-2xl font-bold">24</p>
              </div>
            </Frame>
            <Frame>
              <div className="p-4">
                <p className="text-xs text-muted mb-1">Active Users</p>
                <p className="text-2xl font-bold">142</p>
              </div>
            </Frame>
            <Frame>
              <div className="p-4">
                <p className="text-xs text-muted mb-1">Documents</p>
                <p className="text-2xl font-bold">1,203</p>
              </div>
            </Frame>
            <Frame>
              <div className="p-4">
                <p className="text-xs text-muted mb-1">Completion Rate</p>
                <p className="text-2xl font-bold">87%</p>
              </div>
            </Frame>
          </MainFrames>
        </MainContainer>
      </Main>
    </div>
  ),
};
