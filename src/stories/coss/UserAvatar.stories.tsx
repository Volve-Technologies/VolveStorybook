import type { Meta, StoryObj } from '@storybook/react-vite';
import { UserAvatar } from '@/app/ui/components/user-avatar';

const meta: Meta<typeof UserAvatar> = {
  title: 'Volve UI/Data Display/UserAvatar',
  component: UserAvatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'range', min: 16, max: 64, step: 4 },
      description: 'The width and height of the avatar in pixels',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '32' },
      },
    },
    pending: {
      control: { type: 'boolean' },
      description: 'When true, displays the avatar in a pending/invited state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    user: {
      control: { type: 'object' },
      description: 'The user data object containing id, name, email, and optional image',
      table: {
        type: { summary: '{ id: string; name: string; email?: string; image?: string }' },
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof UserAvatar>;

export const Default: Story = {
  args: {
    size: 32,
    pending: false,
    user: { id: '1', name: 'John Doe', email: 'john@example.com' },
  },
};

const user = { id: 'user-1', name: 'John Doe', email: 'john@example.com' };

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <UserAvatar user={user} size={20} />
      <UserAvatar user={user} size={24} />
      <UserAvatar user={user} size={32} />
      <UserAvatar user={user} size={40} />
      <UserAvatar user={user} size={48} />
      <UserAvatar user={user} size={64} />
    </div>
  ),
};

export const Pending: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <UserAvatar user={user} size={32} />
      <UserAvatar user={user} size={32} pending />
    </div>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      {[
        { id: 'a1', name: 'Alice Anderson' },
        { id: 'b2', name: 'Bob Brown' },
        { id: 'c3', name: 'Carol Clark' },
        { id: 'd4', name: 'Dave Davis' },
        { id: 'e5', name: 'Eve Evans' },
      ].map((u) => (
        <UserAvatar key={u.id} user={u} size={36} />
      ))}
    </div>
  ),
};

export const EmailFallback: Story = {
  name: 'Email Fallback',
  render: () => (
    <UserAvatar user={{ id: 'x1', name: '', email: 'jane@example.com' }} size={36} />
  ),
};
