import type { Meta, StoryObj } from '@storybook/react-vite';
import { OrganizationAvatar } from '@/app/ui/components/organization-avatar';

const meta: Meta<typeof OrganizationAvatar> = {
  title: 'Volve UI/Data Display/OrganizationAvatar',
  component: OrganizationAvatar,
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
    organization: {
      control: { type: 'object' },
      description: 'The organization data object containing id and name',
      table: {
        type: { summary: '{ id: string; name: string }' },
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof OrganizationAvatar>;

export const Default: Story = {
  args: {
    size: 32,
    organization: { id: '1', name: 'Acme Corp' },
  },
};

const org = { id: 'org-1', name: 'Acme Corp' };

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <OrganizationAvatar organization={org} size={20} />
      <OrganizationAvatar organization={org} size={24} />
      <OrganizationAvatar organization={org} size={32} />
      <OrganizationAvatar organization={org} size={40} />
      <OrganizationAvatar organization={org} size={48} />
      <OrganizationAvatar organization={org} size={64} />
    </div>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      {[
        { id: 'a1', name: 'Acme Corp' },
        { id: 'b2', name: 'Beta LLC' },
        { id: 'c3', name: 'Cyber Systems' },
        { id: 'd4', name: 'Delta Tech' },
        { id: 'e5', name: 'Echo Inc' },
      ].map((o) => (
        <OrganizationAvatar key={o.id} organization={o} size={36} />
      ))}
    </div>
  ),
};
