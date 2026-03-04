import type { Meta, StoryObj } from '@storybook/react-vite';
import { Group, GroupItem, GroupSeparator } from '@/app/ui/components/group';
import { Button } from '@/app/ui/components/button';
import { Input } from '@/app/ui/components/input';

const meta = {
  title: 'Volve UI/Layout/Group',
  component: Group,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Group>
      <GroupItem render={<Button variant="secondary">First</Button>} />
      <GroupItem render={<Button variant="secondary">Second</Button>} />
      <GroupItem render={<Button variant="secondary">Third</Button>} />
    </Group>
  ),
};

export const ButtonGroup: Story = {
  render: () => (
    <Group>
      <GroupItem render={<Button variant="secondary">Bold</Button>} />
      <GroupItem render={<Button variant="secondary">Italic</Button>} />
      <GroupItem render={<Button variant="secondary">Underline</Button>} />
    </Group>
  ),
};

export const InputWithButton: Story = {
  render: () => (
    <Group>
      <GroupItem render={<Input placeholder="Search..." className="w-56" />} />
      <GroupSeparator />
      <GroupItem render={<Button variant="secondary">Submit</Button>} />
    </Group>
  ),
};
