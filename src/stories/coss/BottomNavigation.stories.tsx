import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  BottomNavigation,
  BottomNavigationList,
  BottomNavigationLink,
} from '@/app/ui/components/bottom-navigation';
import {
  Home01Icon,
  Search01Icon,
  Notification01Icon,
  UserIcon,
  Settings01Icon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

const meta: Meta<typeof BottomNavigation> = {
  title: 'Volve UI/Navigation/BottomNavigation',
  component: BottomNavigation,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS class names applied to the navigation container',
    },
  },
};
export default meta;
type Story = StoryObj<typeof BottomNavigation>;

export const Default: Story = {
  args: { className: 'relative static h-14 border-t-0' },
  render: (args) => (
    <div className="relative h-24 w-full border rounded-lg overflow-hidden">
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ '--bottom-navigation-height': '56px' } as React.CSSProperties}
      >
        <BottomNavigation {...args}>
          <BottomNavigationList>
            <BottomNavigationLink href="/" isActive>
              <HugeiconsIcon icon={Home01Icon} />
              Home
            </BottomNavigationLink>
            <BottomNavigationLink href="/search">
              <HugeiconsIcon icon={Search01Icon} />
              Search
            </BottomNavigationLink>
            <BottomNavigationLink href="/notifications">
              <HugeiconsIcon icon={Notification01Icon} />
              Alerts
            </BottomNavigationLink>
            <BottomNavigationLink href="/profile">
              <HugeiconsIcon icon={UserIcon} />
              Profile
            </BottomNavigationLink>
          </BottomNavigationList>
        </BottomNavigation>
      </div>
    </div>
  ),
};

export const WithFiveItems: Story = {
  render: () => (
    <div className="relative h-24 w-full border rounded-lg overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0">
        <BottomNavigation className="relative static h-14 border-t-0">
          <BottomNavigationList>
            <BottomNavigationLink href="/" isActive>
              <HugeiconsIcon icon={Home01Icon} />
              Home
            </BottomNavigationLink>
            <BottomNavigationLink href="/search">
              <HugeiconsIcon icon={Search01Icon} />
              Search
            </BottomNavigationLink>
            <BottomNavigationLink href="/notifications">
              <HugeiconsIcon icon={Notification01Icon} />
              Alerts
            </BottomNavigationLink>
            <BottomNavigationLink href="/profile">
              <HugeiconsIcon icon={UserIcon} />
              Profile
            </BottomNavigationLink>
            <BottomNavigationLink href="/settings">
              <HugeiconsIcon icon={Settings01Icon} />
              Settings
            </BottomNavigationLink>
          </BottomNavigationList>
        </BottomNavigation>
      </div>
    </div>
  ),
};
