import type { Meta, StoryObj } from '@storybook/react-vite';
import { ToastProvider, toastManager } from '@/app/ui/components/toast';
import { Button } from '@/app/ui/components/button';

const meta = {
  title: 'Volve UI/Feedback/Toast',
  component: ToastProvider,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: { type: 'select' },
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
      description: 'The position where toasts appear on the screen',
    },
  },
} satisfies Meta<typeof ToastProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: 'bottom-right',
  },
  render: (args) => (
    <ToastProvider position={args.position}>
      <Button onClick={() => toastManager.add({ title: 'Saved!', type: 'success' })}>
        Show Toast
      </Button>
    </ToastProvider>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <ToastProvider>
      <div className="flex flex-wrap gap-2">
        <Button
          variant="secondary"
          onClick={() => toastManager.add({ title: 'File uploaded successfully.', type: 'success' })}
        >
          Success
        </Button>
        <Button
          variant="secondary"
          onClick={() => toastManager.add({ title: 'Something went wrong.', type: 'error' })}
        >
          Error
        </Button>
        <Button
          variant="secondary"
          onClick={() => toastManager.add({ title: 'Storage almost full.', type: 'warning' })}
        >
          Warning
        </Button>
        <Button
          variant="secondary"
          onClick={() => toastManager.add({ title: 'New update available.', type: 'info' })}
        >
          Info
        </Button>
      </div>
    </ToastProvider>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <ToastProvider>
      <Button
        onClick={() =>
          toastManager.add({
            title: 'Scheduled',
            description: 'Your meeting has been added to your calendar.',
            type: 'success',
          })
        }
      >
        Show Toast with Description
      </Button>
    </ToastProvider>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <ToastProvider position="bottom-right">
        <Button
          variant="secondary"
          onClick={() => toastManager.add({ title: 'Bottom right toast' })}
        >
          Bottom Right
        </Button>
      </ToastProvider>
      <ToastProvider position="top-right">
        <Button
          variant="secondary"
          onClick={() => toastManager.add({ title: 'Top right toast' })}
        >
          Top Right
        </Button>
      </ToastProvider>
      <ToastProvider position="top-center">
        <Button
          variant="secondary"
          onClick={() => toastManager.add({ title: 'Top center toast' })}
        >
          Top Center
        </Button>
      </ToastProvider>
    </div>
  ),
};
