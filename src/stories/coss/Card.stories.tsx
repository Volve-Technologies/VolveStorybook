import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '@/app/ui/components/card';
import { Button } from '@/app/ui/components/button';

const meta = {
  title: 'Volve UI/Layout/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'The content rendered inside the card',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS class names to apply to the card',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Card content',
    className: 'w-80',
  },
};

export const WithTitle: Story = {
  render: () => (
    <Card className="w-80">
      <h3 className="text-base font-semibold leading-none">Card Title</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        A brief description of what this card represents. Cards are useful for grouping
        related content together in a visually distinct container.
      </p>
    </Card>
  ),
};

export const WithButton: Story = {
  render: () => (
    <Card className="w-80 flex flex-col gap-4">
      <div>
        <h3 className="text-base font-semibold leading-none">Upgrade your plan</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Unlock advanced features and higher limits by upgrading to the Pro plan.
        </p>
      </div>
      <div className="flex justify-end">
        <Button size="sm">Upgrade now</Button>
      </div>
    </Card>
  ),
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <h3 className="text-sm font-semibold">Projects</h3>
        <p className="mt-1 text-2xl font-bold">12</p>
        <p className="mt-1 text-xs text-muted-foreground">3 active this week</p>
      </Card>
      <Card>
        <h3 className="text-sm font-semibold">Team members</h3>
        <p className="mt-1 text-2xl font-bold">8</p>
        <p className="mt-1 text-xs text-muted-foreground">2 added this month</p>
      </Card>
      <Card>
        <h3 className="text-sm font-semibold">Deployments</h3>
        <p className="mt-1 text-2xl font-bold">34</p>
        <p className="mt-1 text-xs text-muted-foreground">7 in the last 7 days</p>
      </Card>
    </div>
  ),
};
