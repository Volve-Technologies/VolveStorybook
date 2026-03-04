import type { Meta, StoryObj } from '@storybook/react-vite';
import { Empty, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from '@/app/ui/components/empty';
import { Button } from '@/app/ui/components/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { FolderOpenIcon, FileSearchIcon } from '@hugeicons/core-free-icons';

const meta = {
  title: 'Volve UI/Feedback/Empty',
  component: Empty,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="relative h-64 w-96 border rounded-lg">
      <Empty>
        <EmptyMedia variant="icon">
          <HugeiconsIcon icon={FolderOpenIcon} />
        </EmptyMedia>
        <EmptyContent>
          <EmptyTitle>No files</EmptyTitle>
          <EmptyDescription>Upload files to get started</EmptyDescription>
          <Button size="sm">Upload</Button>
        </EmptyContent>
      </Empty>
    </div>
  ),
};

export const WithImage: Story = {
  render: () => (
    <div className="relative h-64 w-96 border rounded-lg">
      <Empty>
        <EmptyMedia variant="default">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 144 144"
            fill="none"
            className="size-36 opacity-40"
          >
            <rect x="16" y="16" width="112" height="112" rx="16" fill="currentColor" fillOpacity="0.08" />
            <path d="M48 72h48M72 48v48" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </EmptyMedia>
        <EmptyContent>
          <EmptyTitle>No content yet</EmptyTitle>
          <EmptyDescription>Start adding items to see them here</EmptyDescription>
        </EmptyContent>
      </Empty>
    </div>
  ),
};

export const Simple: Story = {
  render: () => (
    <div className="relative h-48 w-96 border rounded-lg">
      <Empty>
        <EmptyContent>
          <EmptyTitle>Nothing to show</EmptyTitle>
          <EmptyDescription>There is no data available at this time</EmptyDescription>
        </EmptyContent>
      </Empty>
    </div>
  ),
};
