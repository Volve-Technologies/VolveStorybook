import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from '@/app/ui/components/button';
import { Search01Icon, Add01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

const meta = {
  title: 'Volve UI/Actions/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'tertiary',
        'tertiary-2',
        'ghost',
        'ghost-accent',
        'ghost-destructive',
        'ghost-success',
        'destructive',
        'success',
        'link',
        'accent',
        'unstyled',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    kind: {
      control: { type: 'select' },
      options: ['default', 'icon', 'with-icon'],
    },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-row flex-wrap items-center gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="tertiary-2">Tertiary 2</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="ghost-accent">Ghost Accent</Button>
      <Button variant="ghost-destructive">Ghost Destructive</Button>
      <Button variant="ghost-success">Ghost Success</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="success">Success</Button>
      <Button variant="link">Link</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="unstyled">Unstyled</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-row flex-wrap items-end gap-3">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
};

export const IconButton: Story = {
  render: () => (
    <Button kind="icon" aria-label="Search">
      <HugeiconsIcon icon={Search01Icon} />
    </Button>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Button kind="with-icon">
      <HugeiconsIcon icon={Add01Icon} />
      Add Item
    </Button>
  ),
};

export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};
