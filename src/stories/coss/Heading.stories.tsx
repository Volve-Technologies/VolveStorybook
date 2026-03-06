import type { Meta, StoryObj } from '@storybook/react-vite';
import { H1, H2, H3 } from '@/app/ui/components/heading';

const meta: Meta<typeof H1> = {
  title: 'Volve UI/Typography/Heading',
  component: H1,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Heading text content',
    },
  },
};
export default meta;
type Story = StoryObj<typeof H1>;

export const Default: Story = {
  args: {
    children: 'Heading text',
  },
};

export const All: Story = {
  render: () => (
    <div className="space-y-4">
      <H1>Heading 1 — The quick brown fox</H1>
      <H2>Heading 2 — The quick brown fox</H2>
      <H3>Heading 3 — The quick brown fox</H3>
    </div>
  ),
};

export const H1Story: Story = {
  name: 'H1',
  args: {
    ...Default.args,
    children: 'The quick brown fox jumps over the lazy dog',
  },
};

export const H2Story: Story = {
  name: 'H2',
  render: () => <H2>The quick brown fox jumps over the lazy dog</H2>,
};

export const H3Story: Story = {
  name: 'H3',
  render: () => <H3>The quick brown fox jumps over the lazy dog</H3>,
};
