import type { Meta, StoryObj } from '@storybook/react-vite';
import { Source, SourceContent, SourceCopyButton, SourceFileButton } from '@/app/ui/components/source';
import { ToastProvider } from '@/app/ui/components/toast';

const sampleText = `The quick brown fox jumps over the lazy dog. This is a sample source text that demonstrates how the Source component renders markdown content alongside copy and citation functionality.`;

const meta = {
  title: 'Volve UI/Data Display/Source',
  component: Source,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'The source text content to display and optionally copy',
    },
    children: {
      control: false,
      description: 'Source sub-components: SourceContent, SourceCopyButton, SourceFileButton',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names for the Source wrapper',
    },
  },
  decorators: [
    (Story) => (
      <ToastProvider>
        <div className="w-[480px]">
          <Story />
        </div>
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof Source>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: sampleText,
  },
  render: (args) => (
    <Source {...args}>
      <SourceContent />
    </Source>
  ),
};

export const WithCopyButton: Story = {
  render: () => (
    <Source text={sampleText}>
      <SourceContent>
        <SourceCopyButton />
      </SourceContent>
    </Source>
  ),
};

export const WithCustomFormat: Story = {
  render: () => (
    <Source text={sampleText}>
      <SourceContent format={(text) => <p className="text-sm italic">{text}</p>} />
    </Source>
  ),
};

export const WithFileButton: Story = {
  render: () => (
    <Source text={sampleText}>
      <SourceFileButton idx={0} title="Research Paper.pdf" showIcon />
      <SourceContent>
        <SourceCopyButton />
      </SourceContent>
    </Source>
  ),
};

export const MultipleReferences: Story = {
  render: () => (
    <div className="space-y-4">
      {[
        { title: 'Annual Report 2024.pdf', text: 'Revenue increased by 23% YoY driven by strong product adoption.' },
        { title: 'Market Analysis.docx', text: 'The addressable market is estimated at $4.2B with 18% CAGR.' },
      ].map((item, i) => (
        <Source key={i} text={item.text}>
          <SourceFileButton idx={i} title={item.title} showIcon />
          <SourceContent>
            <SourceCopyButton />
          </SourceContent>
        </Source>
      ))}
    </div>
  ),
};
