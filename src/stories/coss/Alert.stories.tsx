import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertAction,
  AlertActionToolbar,
  AlertActionToolbarButton,
} from '@/app/ui/components/alert';
import { Button } from '@/app/ui/components/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { Cancel01Icon, Copy01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons';

const meta = {
  title: 'Volve UI/Feedback/Alert',
  component: Alert,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'info', 'success', 'warning', 'destructive'],
      description: 'Visual style variant conveying intent',
    },
    children: {
      control: false,
      description: 'Alert body content (typically AlertTitle + AlertDescription)',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </Alert>
  ),
  args: { variant: 'default' },
};

export const Info: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        Your session will expire in 30 minutes. Please save your work.
      </AlertDescription>
    </Alert>
  ),
  args: { ...Default.args, variant: 'info' },
};

export const Success: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>Your changes have been saved successfully.</AlertDescription>
    </Alert>
  ),
  args: { ...Default.args, variant: 'success' },
};

export const Warning: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>This action cannot be undone. Please proceed with caution.</AlertDescription>
    </Alert>
  ),
  args: { ...Default.args, variant: 'warning' },
};

export const Destructive: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Something went wrong. Please try again or contact support.</AlertDescription>
    </Alert>
  ),
  args: { ...Default.args, variant: 'destructive' },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-full max-w-lg">
      {(['default', 'info', 'success', 'warning', 'destructive'] as const).map((variant) => (
        <Alert key={variant} variant={variant}>
          <AlertTitle className="capitalize">{variant}</AlertTitle>
          <AlertDescription>This is a {variant} alert message.</AlertDescription>
        </Alert>
      ))}
    </div>
  ),
};

/** AlertAction — inline action area placed inside the alert */
export const WithAction: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-full max-w-lg">
      <Alert variant="info">
        <AlertTitle>New version available</AlertTitle>
        <AlertDescription>A new version of the app is ready to install.</AlertDescription>
        <AlertAction>
          <Button variant="secondary" size="sm" kind="with-icon">
            <HugeiconsIcon icon={ArrowRight01Icon} />
            Update now
          </Button>
        </AlertAction>
      </Alert>
      <Alert variant="warning">
        <AlertTitle>Storage limit reached</AlertTitle>
        <AlertDescription>You are using 98% of your storage quota.</AlertDescription>
        <AlertAction>
          <Button variant="primary" size="sm">Upgrade plan</Button>
          <Button variant="ghost" size="sm">Dismiss</Button>
        </AlertAction>
      </Alert>
    </div>
  ),
};

/** AlertActionToolbar — compact icon-button toolbar in the top-right of the alert */
export const WithActionToolbar: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-full max-w-lg">
      <Alert variant="default">
        <AlertTitle>AI-generated summary</AlertTitle>
        <AlertDescription>
          The report highlights a 23% increase in revenue driven by strong product adoption across
          enterprise customers in Q3.
        </AlertDescription>
        <AlertActionToolbar>
          <AlertActionToolbarButton aria-label="Copy">
            <HugeiconsIcon icon={Copy01Icon} />
          </AlertActionToolbarButton>
          <AlertActionToolbarButton aria-label="Dismiss">
            <HugeiconsIcon icon={Cancel01Icon} />
          </AlertActionToolbarButton>
        </AlertActionToolbar>
      </Alert>
      <Alert variant="info">
        <AlertTitle>Processing complete</AlertTitle>
        <AlertDescription>
          Your document has been analysed. 4 extraction groups were created.
        </AlertDescription>
        <AlertActionToolbar>
          <AlertActionToolbarButton aria-label="Dismiss">
            <HugeiconsIcon icon={Cancel01Icon} />
          </AlertActionToolbarButton>
        </AlertActionToolbar>
      </Alert>
    </div>
  ),
};
