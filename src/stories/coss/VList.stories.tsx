import type { Meta, StoryObj } from '@storybook/react-vite';
import { VList, VListContent } from '@/app/ui/components/vlist';

const meta: Meta<typeof VList> = {
  title: 'Volve UI/Data Display/VList',
  component: VList,
  tags: ['autodocs'],
  argTypes: {
    totalSize: {
      control: { type: 'number', min: 0 },
      description: 'Total pixel height of all virtualised items combined — sets the scroll height of the list',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names for the VList outer element',
    },
    children: {
      control: false,
      description: 'VListContent element(s) containing the visible items',
    },
  },
};
export default meta;
type Story = StoryObj<typeof VList>;

const ITEM_HEIGHT = 48;
const ITEMS = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  label: `Item ${i + 1}`,
  description: `Description for item ${i + 1}`,
}));

// Simulate virtual scrolling by showing a window of items
const VISIBLE_START = 0;
const VISIBLE_COUNT = 8;
const VISIBLE_ITEMS = ITEMS.slice(VISIBLE_START, VISIBLE_COUNT);

export const Default: Story = {
  args: {
    totalSize: ITEMS.length * ITEM_HEIGHT,
  },
  render: (args) => (
    <div className="border rounded-lg overflow-hidden h-64 overflow-y-auto">
      <VList {...args}>
        <VListContent start={VISIBLE_START * ITEM_HEIGHT}>
          {VISIBLE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 px-4 border-b"
              style={{ height: ITEM_HEIGHT }}
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{item.label}</p>
                <p className="text-xs text-muted-foreground truncate">{item.description}</p>
              </div>
            </div>
          ))}
        </VListContent>
      </VList>
    </div>
  ),
};

export const MidScroll: Story = {
  name: 'Mid-Scroll Position',
  render: () => {
    const start = 20;
    const items = ITEMS.slice(start, start + VISIBLE_COUNT);
    return (
      <div className="border rounded-lg overflow-hidden h-64">
        <VList totalSize={ITEMS.length * ITEM_HEIGHT}>
          <VListContent start={start * ITEM_HEIGHT}>
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 px-4 border-b"
                style={{ height: ITEM_HEIGHT }}
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </VListContent>
        </VList>
      </div>
    );
  },
};
