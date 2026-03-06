import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack, StackItem } from '@/app/ui/components/stack';
import * as React from 'react';

const meta: Meta<typeof Stack> = {
  title: 'Volve UI/Data Display/Stack',
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: { type: 'radio' },
      options: ['top', 'bottom'],
      description: 'The side from which stacked items peek out behind the top card',
    },
    itemCount: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'The number of items in the stack (controls how many back cards are shown)',
    },
    gap: {
      control: { type: 'number', min: 0, max: 40 },
      description: 'Pixel gap between stacked items',
    },
    scale: {
      control: { type: 'number', min: 0, max: 0.2, step: 0.01 },
      description: 'Scale reduction per stack level (e.g. 0.04 reduces each card by 4%)',
    },
    offset: {
      control: { type: 'number', min: 0, max: 40 },
      description: 'Pixel offset applied to each stacked card',
    },
    expandOnHover: {
      control: { type: 'boolean' },
      description: 'Whether hovering the stack expands the cards to show all items',
    },
  },
};
export default meta;
type Story = StoryObj<typeof Stack>;

function CardItem({ color, label }: { color: string; label: string }) {
  return (
    <div className={`w-full rounded-xl border p-6 ${color} shadow-sm`}>
      <p className="font-medium text-sm">{label}</p>
      <p className="text-xs text-muted-foreground mt-1">Card content here</p>
    </div>
  );
}

export const Default: Story = {
  args: {
    side: 'bottom',
    itemCount: 3,
    gap: 8,
    scale: 0.04,
    offset: 12,
    expandOnHover: false,
  },
  render: (args) => (
    <div className="w-80 h-48 relative">
      <Stack
        side={args.side}
        itemCount={args.itemCount}
        gap={args.gap}
        scale={args.scale}
        offset={args.offset}
        expandOnHover={args.expandOnHover}
      >
        <StackItem>
          <CardItem color="bg-blue-50" label="First Card" />
        </StackItem>
        <StackItem>
          <CardItem color="bg-purple-50" label="Second Card" />
        </StackItem>
        <StackItem>
          <CardItem color="bg-green-50" label="Third Card" />
        </StackItem>
      </Stack>
    </div>
  ),
};

export const ExpandOnHover: Story = {
  render: () => (
    <div className="w-80 h-72 relative">
      <Stack itemCount={3} offset={12} scale={0.04} expandOnHover>
        <StackItem>
          <CardItem color="bg-blue-50" label="Card 1 — Hover to expand" />
        </StackItem>
        <StackItem>
          <CardItem color="bg-purple-50" label="Card 2" />
        </StackItem>
        <StackItem>
          <CardItem color="bg-green-50" label="Card 3" />
        </StackItem>
      </Stack>
    </div>
  ),
};

export const TopSide: Story = {
  name: 'Side: Top',
  render: () => (
    <div className="w-80 h-48 relative mt-8">
      <Stack itemCount={3} offset={12} scale={0.04} side="top">
        <StackItem>
          <CardItem color="bg-amber-50" label="Top Stack - Card 1" />
        </StackItem>
        <StackItem>
          <CardItem color="bg-orange-50" label="Card 2" />
        </StackItem>
        <StackItem>
          <CardItem color="bg-red-50" label="Card 3" />
        </StackItem>
      </Stack>
    </div>
  ),
};
