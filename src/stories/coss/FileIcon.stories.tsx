import type { Meta, StoryObj } from '@storybook/react-vite';
import { FileIcon, FileIconsStack } from '@/app/ui/components/file-icon';

const meta: Meta<typeof FileIcon> = {
  title: 'Volve UI/Data Display/FileIcon',
  component: FileIcon,
  tags: ['autodocs'],
  args: {
    fileName: 'document.pdf',
  },
};
export default meta;
type Story = StoryObj<typeof FileIcon>;

export const Default: Story = {};

export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-4">
      {[
        'document.pdf',
        'report.docx',
        'report.doc',
        'data.xlsx',
        'data.xls',
        'data.csv',
        'presentation.pptx',
        'page.aspx',
        'package.sppkg',
        'unknown.xyz',
      ].map((fileName) => (
        <div key={fileName} className="flex flex-col items-center gap-1">
          <FileIcon fileName={fileName} className="size-8" />
          <span className="text-xs text-muted-foreground">{fileName.split('.').pop()}</span>
        </div>
      ))}
    </div>
  ),
};

export const Stack: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <FileIconsStack />
      <span className="text-sm text-muted-foreground">Multiple file types</span>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <FileIcon fileName="document.pdf" className="size-4" />
      <FileIcon fileName="document.pdf" className="size-6" />
      <FileIcon fileName="document.pdf" className="size-8" />
      <FileIcon fileName="document.pdf" className="size-12" />
    </div>
  ),
};
