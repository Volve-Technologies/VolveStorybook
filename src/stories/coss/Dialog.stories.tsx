import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Dialog,
  DialogTrigger,
  DialogPopup,
  DialogTitle,
  DialogDescription,
  DialogContent,
  DialogFooter,
  DialogScrollArea,
  DialogXClose,
} from '@/app/ui/components/dialog';
import { Button } from '@/app/ui/components/button';

const meta = {
  title: 'Volve UI/Overlays/Dialog',
  component: Dialog,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button variant="secondary">Open Dialog</Button>} />
      <DialogPopup>
        <DialogTitle>
          Edit User
          <DialogXClose />
        </DialogTitle>
        <DialogContent>
          <DialogScrollArea>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">Full Name</label>
                <input
                  className="border rounded-md px-3 py-1.5 text-sm"
                  placeholder="Enter full name"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">Email</label>
                <input
                  className="border rounded-md px-3 py-1.5 text-sm"
                  placeholder="Enter email address"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">Role</label>
                <input
                  className="border rounded-md px-3 py-1.5 text-sm"
                  placeholder="Enter role"
                />
              </div>
            </div>
          </DialogScrollArea>
        </DialogContent>
        <DialogFooter>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Save</Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  ),
};

export const Scrollable: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button variant="secondary">Open Dialog</Button>} />
      <DialogPopup>
        <DialogTitle>
          Edit User
          <DialogXClose />
        </DialogTitle>
        <DialogContent>
          <DialogScrollArea>
            {Array.from({ length: 10 }).map((_, i) => (
              <p key={i} className="text-sm text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            ))}
          </DialogScrollArea>
        </DialogContent>
        <DialogFooter>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Save</Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  ),
};
