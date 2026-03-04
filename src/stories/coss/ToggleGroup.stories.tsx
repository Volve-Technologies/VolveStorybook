import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from '@/app/ui/components/toggle';
import { Button } from '@/app/ui/components/button';

// The Volve design system does not include a ToggleGroup component.
// These stories demonstrate toggle group patterns built with the Toggle
// primitive and Button components.

const meta = {
  title: 'Volve UI/Forms/ToggleGroup',
  component: Toggle,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleSelect: Story = {
  render: () => {
    const [selected, setSelected] = useState<string>('center');
    const options = [
      { value: 'left', label: 'Left' },
      { value: 'center', label: 'Center' },
      { value: 'right', label: 'Right' },
    ];
    return (
      <div className="flex gap-1 rounded-md border p-1 w-fit">
        {options.map((opt) => (
          <Toggle
            key={opt.value}
            pressed={selected === opt.value}
            onPressedChange={() => setSelected(opt.value)}
          >
            <Button
              variant={selected === opt.value ? 'tertiary' : 'ghost'}
              size="sm"
              aria-label={opt.label}
            >
              {opt.label}
            </Button>
          </Toggle>
        ))}
      </div>
    );
  },
};

export const MultiSelect: Story = {
  render: () => {
    const [selected, setSelected] = useState<Set<string>>(new Set());
    const toggleOption = (value: string) => {
      setSelected((prev) => {
        const next = new Set(prev);
        if (next.has(value)) {
          next.delete(value);
        } else {
          next.add(value);
        }
        return next;
      });
    };
    const options = [
      { value: 'bold', label: 'Bold' },
      { value: 'italic', label: 'Italic' },
      { value: 'underline', label: 'Underline' },
    ];
    return (
      <div className="flex gap-1 rounded-md border p-1 w-fit">
        {options.map((opt) => (
          <Toggle
            key={opt.value}
            pressed={selected.has(opt.value)}
            onPressedChange={() => toggleOption(opt.value)}
          >
            <Button
              variant={selected.has(opt.value) ? 'tertiary' : 'ghost'}
              size="sm"
              aria-label={opt.label}
            >
              {opt.label}
            </Button>
          </Toggle>
        ))}
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const options = ['Left', 'Center', 'Right'];
    return (
      <div className="flex gap-1 rounded-md border p-1 w-fit opacity-50 pointer-events-none">
        {options.map((opt) => (
          <Toggle key={opt} disabled>
            <Button variant="ghost" size="sm" disabled aria-label={opt}>
              {opt}
            </Button>
          </Toggle>
        ))}
      </div>
    );
  },
};
