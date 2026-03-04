import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, AvatarImage, AvatarFallback } from '@/app/ui/components/avatar';

const meta = {
  title: 'Volve UI/Media/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://i.pravatar.cc/150?img=1" alt="User avatar" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};

export const ImageError: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://broken-image-url.invalid/avatar.png" alt="Broken image" />
      <AvatarFallback>ER</AvatarFallback>
    </Avatar>
  ),
};

export const Group: Story = {
  render: () => (
    <div className="flex items-center">
      <Avatar className="ring-2 ring-background">
        <AvatarImage src="https://i.pravatar.cc/150?img=1" alt="User 1" />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar className="-ml-2 ring-2 ring-background">
        <AvatarImage src="https://i.pravatar.cc/150?img=2" alt="User 2" />
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <Avatar className="-ml-2 ring-2 ring-background">
        <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="User 3" />
        <AvatarFallback>U3</AvatarFallback>
      </Avatar>
      <Avatar className="-ml-2 ring-2 ring-background">
        <AvatarImage src="https://i.pravatar.cc/150?img=4" alt="User 4" />
        <AvatarFallback>U4</AvatarFallback>
      </Avatar>
      <Avatar className="-ml-2 ring-2 ring-background">
        <AvatarImage src="https://i.pravatar.cc/150?img=5" alt="User 5" />
        <AvatarFallback>U5</AvatarFallback>
      </Avatar>
    </div>
  ),
};
