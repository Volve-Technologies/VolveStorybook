import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '@/app/ui/components/badge';
import { CheckmarkCircle02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

const meta = {
  title: 'Volve UI/Data Display/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'secondary',
        'tertiary',
        'tertiary-accent',
        'tertiary-success',
        'tertiary-warning',
        'tertiary-destructive',
        'destructive',
        'warning',
        'success',
      ],
      description: 'Visual style variant of the badge',
    },
    size: {
      control: { type: 'select' },
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
      description: 'Size of the badge',
    },
    kind: {
      control: { type: 'select' },
      options: ['default', 'icon', 'count'],
      description: 'Layout kind — default text, icon-only, or numeric count',
    },
    children: {
      control: 'text',
      description: 'Badge label or content',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
    size: 'md',
    kind: 'default',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="tertiary">Tertiary</Badge>
      <Badge variant="tertiary-accent">Tertiary Accent</Badge>
      <Badge variant="tertiary-success">Tertiary Success</Badge>
      <Badge variant="tertiary-warning">Tertiary Warning</Badge>
      <Badge variant="tertiary-destructive">Tertiary Destructive</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="success">Success</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge size="xxs">XXS</Badge>
      <Badge size="xs">XS</Badge>
      <Badge size="sm">SM</Badge>
      <Badge size="md">MD</Badge>
      <Badge size="lg">LG</Badge>
    </div>
  ),
};

export const IconBadge: Story = {
  render: () => (
    <Badge kind="icon" size="sm" variant="success" aria-label="Success">
      <HugeiconsIcon icon={CheckmarkCircle02Icon} />
    </Badge>
  ),
};

export const CountBadge: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge kind="count" variant="default">3</Badge>
      <Badge kind="count" variant="destructive">9</Badge>
      <Badge kind="count" variant="success">12</Badge>
    </div>
  ),
};

export const Destructive: Story = {
  args: {
    ...Default.args,
    children: 'Destructive',
    variant: 'destructive',
  },
};

export const Success: Story = {
  args: {
    ...Default.args,
    children: 'Success',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    ...Default.args,
    children: 'Warning',
    variant: 'warning',
  },
};
