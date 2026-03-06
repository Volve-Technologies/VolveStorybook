import type { Meta, StoryObj } from '@storybook/react-vite';

import { Tabs, TabsList, TabsTab, TabsPanel } from '@/app/ui/components/tabs';

const meta = {
  title: 'Volve UI/Navigation/Tabs',
  component: Tabs,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the tabs list',
      table: {
        type: { summary: "'horizontal' | 'vertical'" },
        defaultValue: { summary: 'horizontal' },
      },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <Tabs defaultValue="overview" className="w-[400px]" {...args}>
      <TabsList>
        <TabsTab value="overview">Overview</TabsTab>
        <TabsTab value="analytics">Analytics</TabsTab>
        <TabsTab value="reports">Reports</TabsTab>
      </TabsList>
      <TabsPanel value="overview">
        <div className="p-4 text-sm">
          Overview content goes here with key metrics and summaries.
        </div>
      </TabsPanel>
      <TabsPanel value="analytics">
        <div className="p-4 text-sm">
          Analytics data and charts would be displayed here.
        </div>
      </TabsPanel>
      <TabsPanel value="reports">
        <div className="p-4 text-sm">
          Generated reports and exports are available here.
        </div>
      </TabsPanel>
    </Tabs>
  ),
};

export const Secondary: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTab value="overview" variant="secondary">Overview</TabsTab>
        <TabsTab value="analytics" variant="secondary">Analytics</TabsTab>
        <TabsTab value="reports" variant="secondary">Reports</TabsTab>
      </TabsList>
      <TabsPanel value="overview">
        <div className="p-4 text-sm">
          Overview content goes here with key metrics and summaries.
        </div>
      </TabsPanel>
      <TabsPanel value="analytics">
        <div className="p-4 text-sm">
          Analytics data and charts would be displayed here.
        </div>
      </TabsPanel>
      <TabsPanel value="reports">
        <div className="p-4 text-sm">
          Generated reports and exports are available here.
        </div>
      </TabsPanel>
    </Tabs>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Tabs
      defaultValue="overview"
      orientation="vertical"
      className="flex flex-row gap-2 w-[500px]"
    >
      <TabsList className="w-40">
        <TabsTab value="overview">Overview</TabsTab>
        <TabsTab value="analytics">Analytics</TabsTab>
        <TabsTab value="reports">Reports</TabsTab>
      </TabsList>
      <TabsPanel value="overview" className="flex-1">
        <div className="p-4 text-sm">
          Overview content goes here with key metrics and summaries.
        </div>
      </TabsPanel>
      <TabsPanel value="analytics" className="flex-1">
        <div className="p-4 text-sm">
          Analytics data and charts would be displayed here.
        </div>
      </TabsPanel>
      <TabsPanel value="reports" className="flex-1">
        <div className="p-4 text-sm">
          Generated reports and exports are available here.
        </div>
      </TabsPanel>
    </Tabs>
  ),
};
