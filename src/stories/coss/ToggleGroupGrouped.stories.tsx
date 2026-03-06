import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from '@/app/ui/components/toggle';
import { Group, GroupItem } from '@/app/ui/components/group';
import { Button } from '@/app/ui/components/button';

const meta = {
  title: 'Volve UI/Forms/ToggleGroup (Grouped)',
  component: Group,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
      description: 'Additional CSS class names to apply to the group',
    },
  },
} satisfies Meta<typeof Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Group {...args}>
      <GroupItem render={<Toggle defaultPressed={false} />}>
        <Button variant="secondary">Left</Button>
      </GroupItem>
      <GroupItem render={<Toggle defaultPressed={false} />}>
        <Button variant="secondary">Center</Button>
      </GroupItem>
      <GroupItem render={<Toggle defaultPressed={false} />}>
        <Button variant="secondary">Right</Button>
      </GroupItem>
    </Group>
  ),
};

export const SingleSelection: Story = {
  render: () => {
    const [selected, setSelected] = useState<'left' | 'center' | 'right' | null>('left');
    return (
      <Group>
        <GroupItem
          render={
            <Toggle
              pressed={selected === 'left'}
              onPressedChange={(p) => setSelected(p ? 'left' : null)}
            />
          }
        >
          <Button variant="secondary">Left</Button>
        </GroupItem>
        <GroupItem
          render={
            <Toggle
              pressed={selected === 'center'}
              onPressedChange={(p) => setSelected(p ? 'center' : null)}
            />
          }
        >
          <Button variant="secondary">Center</Button>
        </GroupItem>
        <GroupItem
          render={
            <Toggle
              pressed={selected === 'right'}
              onPressedChange={(p) => setSelected(p ? 'right' : null)}
            />
          }
        >
          <Button variant="secondary">Right</Button>
        </GroupItem>
      </Group>
    );
  },
};

export const Multi: Story = {
  render: () => (
    <Group>
      <GroupItem render={<Toggle defaultPressed={false} />}>
        <Button variant="secondary">Bold</Button>
      </GroupItem>
      <GroupItem render={<Toggle defaultPressed={false} />}>
        <Button variant="secondary">Italic</Button>
      </GroupItem>
      <GroupItem render={<Toggle defaultPressed={false} />}>
        <Button variant="secondary">Underline</Button>
      </GroupItem>
    </Group>
  ),
};
