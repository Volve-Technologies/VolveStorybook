import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack, StackItem } from '@/app/ui/components/stack';
import * as React from 'react';

const meta: Meta<typeof Stack> = {
  title: 'Volve UI/Data Display/Stack',
  component: Stack,
  tags: ['autodocs'],
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
  render: () => (
    <div className="w-80 h-48 relative">
      <Stack itemCount={3} offset={12} scale={0.04}>
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
