import type { Meta, StoryObj } from '@storybook/react-vite';
import { UserAvatar } from '@/app/ui/components/user-avatar';

const meta: Meta<typeof UserAvatar> = {
  title: 'Volve UI/Data Display/UserAvatar',
  component: UserAvatar,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof UserAvatar>;

const user = { id: 'user-1', name: 'John Doe', email: 'john@example.com' };

export const Default: Story = {
  render: () => <UserAvatar user={user} size={32} />,
};

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
