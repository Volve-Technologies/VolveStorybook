import type { Meta, StoryObj } from '@storybook/react-vite';
import { Logo, LogoIcon } from '@/app/ui/components/logo';

const meta: Meta<typeof Logo> = {
  title: 'Volve UI/Brand/Logo',
  component: Logo,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  render: () => <Logo />,
};

export const Icon: Story = {
  name: 'Logo Icon',
  render: () => <LogoIcon className="size-10" />,
};

export const Both: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <LogoIcon className="size-8" />
      <Logo />
    </div>
  ),
};

export const OnDark: Story = {
  name: 'On Dark Background',
  render: () => (
    <div className="bg-gray-900 p-6 rounded-lg flex items-center gap-4">
      <LogoIcon className="size-8 text-white" />
      <Logo className="text-white" />
    </div>
  ),
};
