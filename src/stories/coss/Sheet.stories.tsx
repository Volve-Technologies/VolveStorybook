import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Sheet,
  SheetTrigger,
  SheetPopup,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetPanel,
  SheetXClose,
} from '@/app/ui/components/sheet';
import { Button } from '@/app/ui/components/button';

const meta = {
  title: 'Volve UI/Overlays/Sheet',
  component: Sheet,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="secondary" />}>Open Sheet</SheetTrigger>
      <SheetPopup side="right">
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetXClose />
          <SheetDescription>
            Make changes to your profile here. Click save when you are done.
          </SheetDescription>
        </SheetHeader>
        <SheetPanel>
          <p className="text-sm text-muted-foreground">
            Your profile information will be updated immediately after saving. Changes
            may take a few moments to propagate across all services.
          </p>
        </SheetPanel>
        <SheetFooter>
          <Button variant="ghost" size="sm">Cancel</Button>
          <Button variant="primary" size="sm">Save changes</Button>
        </SheetFooter>
      </SheetPopup>
    </Sheet>
  ),
};

export const Left: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="secondary" />}>Open Left Sheet</SheetTrigger>
      <SheetPopup side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetXClose />
          <SheetDescription>Browse through the available sections.</SheetDescription>
        </SheetHeader>
        <SheetPanel>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="hover:text-foreground text-muted-foreground cursor-pointer py-1">Dashboard</li>
            <li className="hover:text-foreground text-muted-foreground cursor-pointer py-1">Projects</li>
            <li className="hover:text-foreground text-muted-foreground cursor-pointer py-1">Team</li>
            <li className="hover:text-foreground text-muted-foreground cursor-pointer py-1">Settings</li>
          </ul>
        </SheetPanel>
        <SheetFooter>
          <Button variant="ghost" size="sm">Cancel</Button>
        </SheetFooter>
      </SheetPopup>
    </Sheet>
  ),
};

export const Bottom: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="secondary" />}>Open Bottom Sheet</SheetTrigger>
      <SheetPopup side="bottom">
        <SheetHeader>
          <SheetTitle>Share</SheetTitle>
          <SheetXClose />
          <SheetDescription>Share this item with others via the options below.</SheetDescription>
        </SheetHeader>
        <SheetPanel>
          <div className="flex flex-row gap-3">
            <Button variant="secondary" className="flex-1">Copy link</Button>
            <Button variant="secondary" className="flex-1">Email</Button>
            <Button variant="secondary" className="flex-1">Message</Button>
          </div>
        </SheetPanel>
        <SheetFooter>
          <Button variant="ghost" size="sm">Cancel</Button>
        </SheetFooter>
      </SheetPopup>
    </Sheet>
  ),
};

export const Inset: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="secondary" />}>Open Inset Sheet</SheetTrigger>
      <SheetPopup side="right" inset={true}>
        <SheetHeader>
          <SheetTitle>Inset Sheet</SheetTitle>
          <SheetXClose />
          <SheetDescription>
            This sheet uses the inset prop, giving it rounded corners and padding on larger screens.
          </SheetDescription>
        </SheetHeader>
        <SheetPanel>
          <p className="text-sm text-muted-foreground">
            The inset variant adds spacing and rounded corners around the sheet panel on
            sm and larger breakpoints, making it feel more like a floating overlay.
          </p>
        </SheetPanel>
        <SheetFooter>
          <Button variant="ghost" size="sm">Cancel</Button>
          <Button variant="primary" size="sm">Confirm</Button>
        </SheetFooter>
      </SheetPopup>
    </Sheet>
  ),
};
