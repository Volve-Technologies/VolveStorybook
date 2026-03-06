import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Frame,
  FramePanel,
  FramePanelHeader,
  FramePanelTitle,
  FramePanelDescription,
  FrameFooter,
} from '@/app/ui/components/frame';
import { Button } from '@/app/ui/components/button';

const meta = {
  title: 'Volve UI/Display/Frame',
  component: Frame,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    stackedPanels: {
      control: { type: 'boolean' },
      description: 'When true, renders multiple FramePanel children stacked with dividers between them',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes applied to the frame container',
    },
  },
} satisfies Meta<typeof Frame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stackedPanels: false,
  },
  render: (args) => (
    <Frame className="w-80" stackedPanels={args.stackedPanels}>
      <FramePanel>
        <FramePanelHeader>
          <FramePanelTitle>Analytics</FramePanelTitle>
        </FramePanelHeader>
        <p className="text-sm text-muted mt-3">
          Track your key metrics and performance indicators at a glance.
        </p>
      </FramePanel>
    </Frame>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Frame className="w-80">
      <FramePanel>
        <FramePanelHeader>
          <FramePanelTitle>Team Members</FramePanelTitle>
        </FramePanelHeader>
        <FramePanelDescription>
          Manage access and roles for your workspace members.
        </FramePanelDescription>
        <p className="text-sm text-muted mt-3">
          No members have been added yet.
        </p>
      </FramePanel>
    </Frame>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Frame className="w-80">
      <FramePanel>
        <FramePanelHeader>
          <FramePanelTitle>Settings</FramePanelTitle>
        </FramePanelHeader>
        <FramePanelDescription>
          Manage your account preferences.
        </FramePanelDescription>
        <p className="text-sm text-muted mt-3">
          Update your notification and display settings here.
        </p>
      </FramePanel>
      <FrameFooter>
        <div className="flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Save changes</Button>
        </div>
      </FrameFooter>
    </Frame>
  ),
};

export const StackedPanels: Story = {
  render: () => (
    <Frame className="w-80" stackedPanels={true}>
      <FramePanel>
        <FramePanelHeader>
          <FramePanelTitle>Revenue</FramePanelTitle>
        </FramePanelHeader>
        <p className="text-sm text-muted mt-3">$48,295 this month</p>
      </FramePanel>
      <FramePanel>
        <FramePanelHeader>
          <FramePanelTitle>Active Users</FramePanelTitle>
        </FramePanelHeader>
        <p className="text-sm text-muted mt-3">1,284 users online</p>
      </FramePanel>
    </Frame>
  ),
};
