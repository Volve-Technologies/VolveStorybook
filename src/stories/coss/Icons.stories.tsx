import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icons } from '@/app/ui/components/icons';

const meta: Meta = {
  title: 'Volve UI/Brand/Icons',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const FlagIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-4">
      {[
        { name: 'France', Icon: Icons.france },
        { name: 'Germany', Icon: Icons.germany },
        { name: 'Denmark', Icon: Icons.denmark },
        { name: 'Sweden', Icon: Icons.sweden },
        { name: 'Finland', Icon: Icons.finland },
        { name: 'Poland', Icon: Icons.poland },
        { name: 'Spain', Icon: Icons.spain },
        { name: 'Portugal', Icon: Icons.portugal },
        { name: 'UK', Icon: Icons.uk },
        { name: 'Norway', Icon: Icons.norway },
      ].map(({ name, Icon }) => (
        <div key={name} className="flex flex-col items-center gap-1">
          <Icon className="size-8" />
          <span className="text-xs text-muted-foreground">{name}</span>
        </div>
      ))}
    </div>
  ),
};

export const DocumentIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-4">
      {[
        { name: 'PDF', Icon: Icons.pdf },
        { name: 'DOCX', Icon: Icons.docx },
        { name: 'XLSX', Icon: Icons.xlsx },
        { name: 'SharePoint', Icon: Icons.sharepoint },
        { name: 'Files', Icon: Icons.files },
        { name: 'Document X', Icon: Icons.documentXIcon },
      ].map(({ name, Icon }) => (
        <div key={name} className="flex flex-col items-center gap-1">
          <Icon className="size-8" />
          <span className="text-xs text-muted-foreground">{name}</span>
        </div>
      ))}
    </div>
  ),
};
