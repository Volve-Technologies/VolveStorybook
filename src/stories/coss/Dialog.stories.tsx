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
  DialogCancel,
  DialogNav,
  DialogPrevNavButton,
  DialogNextNavButton,
  DialogTitleBreadcrumb,
  DialogTitleSeparator,
  DialogTitleButton,
  DialogTitleMenu,
} from '@/app/ui/components/dialog';
import { Button } from '@/app/ui/components/button';
import { MenuItem } from '@/app/ui/components/menu';
import { HugeiconsIcon } from '@hugeicons/react';
import { Share01Icon, Copy01Icon } from '@hugeicons/core-free-icons';

const meta = {
  title: 'Volve UI/Overlays/Dialog',
  component: Dialog,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    open: { control: { type: 'boolean' }, description: 'Controlled open state of the dialog' },
    onOpenChange: { action: 'onOpenChange', description: 'Callback fired when the open state changes' },
    defaultOpen: { control: { type: 'boolean' }, description: 'The open state when initially rendered (uncontrolled)' },
    modal: { control: { type: 'boolean' }, description: 'Whether the dialog blocks interaction with the rest of the page' },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { open: undefined },
  render: (args) => (
    <Dialog {...args}>
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
                <input className="border rounded-md px-3 py-1.5 text-sm" placeholder="Enter full name" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">Email</label>
                <input className="border rounded-md px-3 py-1.5 text-sm" placeholder="Enter email address" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium">Role</label>
                <input className="border rounded-md px-3 py-1.5 text-sm" placeholder="Enter role" />
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
          Long Content
          <DialogXClose />
        </DialogTitle>
        <DialogContent>
          <DialogScrollArea>
            {Array.from({ length: 10 }).map((_, i) => (
              <p key={i} className="text-sm text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
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

/** DialogCancel — pre-wired close button with localised "Cancel" label */
export const WithCancel: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button variant="secondary">Open Dialog</Button>} />
      <DialogPopup>
        <DialogTitle>
          Confirm action
          <DialogXClose />
        </DialogTitle>
        <DialogContent>
          <DialogScrollArea>
            <p className="text-sm">Are you sure you want to delete this item? This cannot be undone.</p>
          </DialogScrollArea>
        </DialogContent>
        <DialogFooter>
          <DialogCancel />
          <Button variant="primary">Confirm</Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  ),
};

/** DialogNav — prev/next navigation bar for wizard-style dialogs */
export const WithNav: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button variant="secondary">Open Dialog</Button>} />
      <DialogPopup>
        <DialogTitle>
          Review documents
          <DialogNav>
            <DialogPrevNavButton aria-label="Previous" />
            <DialogNextNavButton aria-label="Next" />
          </DialogNav>
          <DialogXClose />
        </DialogTitle>
        <DialogContent>
          <DialogScrollArea>
            <p className="text-sm text-muted">Document 2 of 8</p>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Review the content and
              navigate using the arrows above.
            </p>
          </DialogScrollArea>
        </DialogContent>
        <DialogFooter>
          <DialogCancel />
          <Button variant="primary">Approve</Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  ),
};

/** DialogTitleBreadcrumb + DialogTitleSeparator — breadcrumb-style title path */
export const WithTitleBreadcrumb: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button variant="secondary">Open Dialog</Button>} />
      <DialogPopup>
        <DialogTitle>
          <DialogTitleBreadcrumb>My Test Project</DialogTitleBreadcrumb>
          <DialogTitleSeparator />
          <DialogTitleBreadcrumb>test epa extractions</DialogTitleBreadcrumb>
          <DialogTitleSeparator />
          <DialogTitleBreadcrumb>Summary</DialogTitleBreadcrumb>
          <DialogXClose />
        </DialogTitle>
        <DialogContent>
          <DialogScrollArea>
            <p className="text-sm text-muted">Content for this evaluation summary.</p>
          </DialogScrollArea>
        </DialogContent>
        <DialogFooter>
          <DialogCancel />
          <Button variant="primary">Save</Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  ),
};

/** DialogTitleButton + DialogTitleMenu — action buttons embedded in the title row */
export const WithTitleActions: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button variant="secondary">Open Dialog</Button>} />
      <DialogPopup>
        <DialogTitle>
          <DialogTitleButton aria-label="Share">
            <HugeiconsIcon icon={Share01Icon} />
          </DialogTitleButton>
          Document Preview
          <DialogTitleMenu>
            <MenuItem>
              <HugeiconsIcon icon={Copy01Icon} />
              Copy link
            </MenuItem>
            <MenuItem>
              <HugeiconsIcon icon={Share01Icon} />
              Share
            </MenuItem>
          </DialogTitleMenu>
          <DialogXClose />
        </DialogTitle>
        <DialogContent>
          <DialogScrollArea>
            <p className="text-sm text-muted">Document content would appear here.</p>
          </DialogScrollArea>
        </DialogContent>
        <DialogFooter>
          <DialogCancel />
          <Button variant="primary">Done</Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  ),
};
