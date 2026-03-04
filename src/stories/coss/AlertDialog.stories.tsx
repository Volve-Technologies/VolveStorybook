import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPopup,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogClose,
} from '@/app/ui/components/alert-dialog';
import { Button } from '@/app/ui/components/button';

const meta = {
  title: 'Volve UI/Overlays/AlertDialog',
  component: AlertDialog,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger render={<Button variant="destructive">Delete Account</Button>} />
        <AlertDialogPopup>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove all
            associated data from our servers.
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogCancel />
            <AlertDialogClose render={<Button variant="destructive">Delete Account</Button>} />
          </AlertDialogFooter>
        </AlertDialogPopup>
      </AlertDialog>
    );
  },
};

export const WithoutCancel: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger render={<Button variant="secondary">Open Dialog</Button>} />
        <AlertDialogPopup>
          <AlertDialogTitle>Confirm Action</AlertDialogTitle>
          <AlertDialogDescription>
            Please confirm you want to proceed with this action.
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogClose render={<Button variant="secondary">Close</Button>} />
            <AlertDialogClose render={<Button variant="primary">Confirm</Button>} />
          </AlertDialogFooter>
        </AlertDialogPopup>
      </AlertDialog>
    );
  },
};
