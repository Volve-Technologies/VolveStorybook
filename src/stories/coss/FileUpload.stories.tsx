import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadTrigger,
  FileUploadList,
  FileUploadItem,
  FileUploadItemPreview,
  FileUploadItemMetadata,
  FileUploadItemDelete,
} from '@/app/ui/components/file-upload';
import { Button } from '@/app/ui/components/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { CloudUploadIcon } from '@hugeicons/core-free-icons';

const meta = {
  title: 'Volve UI/Forms/File Upload',
  component: FileUpload,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    multiple: {
      control: 'boolean',
      description: 'Allow selecting multiple files at once',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the file upload interaction',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    maxFiles: {
      control: { type: 'number', min: 1 },
      description: 'Maximum number of files that can be selected',
    },
    accept: {
      control: 'text',
      description: 'Comma-separated list of accepted MIME types or file extensions (e.g. ".pdf,.docx")',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names for the FileUpload root element',
    },
  },
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { multiple: false, disabled: false },
  render: (args) => (
    <div className="w-80">
      <FileUpload {...args}>
        <FileUploadDropzone className="flex flex-col items-center gap-3 rounded-xl border-2 border-dashed p-8 text-center">
          <HugeiconsIcon icon={CloudUploadIcon} className="size-10 text-muted-foreground" />
          <div className="space-y-1">
            <p className="text-sm font-medium">Drop files here or click to upload</p>
            <p className="text-xs text-muted-foreground">Supports any file type</p>
          </div>
          <FileUploadTrigger render={<Button variant="secondary" size="sm" />}>
            Choose Files
          </FileUploadTrigger>
        </FileUploadDropzone>
        <FileUploadList />
      </FileUpload>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="w-80">
      <FileUpload multiple={true}>
        <FileUploadDropzone className="flex flex-col items-center gap-3 rounded-xl border-2 border-dashed p-8 text-center">
          <HugeiconsIcon icon={CloudUploadIcon} className="size-10 text-muted-foreground" />
          <div className="space-y-1">
            <p className="text-sm font-medium">Drop files here or click to upload</p>
            <p className="text-xs text-muted-foreground">Upload multiple files at once</p>
          </div>
          <FileUploadTrigger render={<Button variant="secondary" size="sm" />}>
            Choose Files
          </FileUploadTrigger>
        </FileUploadDropzone>
        <FileUploadList />
      </FileUpload>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-80">
      <FileUpload disabled={true}>
        <FileUploadDropzone className="flex flex-col items-center gap-3 rounded-xl border-2 border-dashed p-8 text-center opacity-50">
          <HugeiconsIcon icon={CloudUploadIcon} className="size-10 text-muted-foreground" />
          <div className="space-y-1">
            <p className="text-sm font-medium">Drop files here or click to upload</p>
            <p className="text-xs text-muted-foreground">File upload is disabled</p>
          </div>
          <FileUploadTrigger render={<Button variant="secondary" size="sm" disabled />}>
            Choose Files
          </FileUploadTrigger>
        </FileUploadDropzone>
      </FileUpload>
    </div>
  ),
};
