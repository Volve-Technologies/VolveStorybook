import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScrollArea } from '@/app/ui/components/scroll-area';

const meta = {
  title: 'Volve UI/Layout/ScrollArea',
  component: ScrollArea,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical', 'both'],
      description: 'Controls which scrollbar(s) are rendered',
      table: {
        defaultValue: { summary: 'vertical' },
      },
    },
    scrollbarGutter: {
      control: 'boolean',
      description: 'When true, reserves space for the scrollbar so content does not shift',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    viewportClassName: {
      control: 'text',
      description: 'Additional CSS class names applied to the inner viewport element',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names applied to the root element',
    },
  },
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orientation: 'vertical',
    scrollbarGutter: false,
  },
  render: (args) => (
    <ScrollArea className="h-48 w-64 rounded-md border" {...args}>
      <div className="p-4">
        <h4 className="mb-3 text-sm font-medium leading-none">Items</h4>
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="py-1.5 text-sm border-b last:border-0">
            Item {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-72 rounded-md border" orientation="horizontal">
      <div className="flex gap-3 p-4" style={{ width: 'max-content' }}>
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="flex h-20 w-16 shrink-0 items-center justify-center rounded-lg border bg-surface-2 text-xs font-medium"
          >
            Col {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Both: Story = {
  render: () => (
    <ScrollArea className="h-48 w-72 rounded-md border" orientation="both">
      <div className="p-4" style={{ width: 'max-content', minWidth: '600px' }}>
        <h4 className="mb-3 text-sm font-medium leading-none">Wide and tall content</h4>
        {Array.from({ length: 20 }, (_, row) => (
          <div key={row} className="flex gap-4 py-1.5 border-b last:border-0">
            {Array.from({ length: 6 }, (_, col) => (
              <span key={col} className="w-24 shrink-0 text-sm text-muted-foreground">
                Row {row + 1}, Col {col + 1}
              </span>
            ))}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};
