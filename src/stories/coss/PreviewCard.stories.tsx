import type { Meta, StoryObj } from '@storybook/react-vite';
import { PreviewCard, PreviewCardTrigger, PreviewCardPopup } from '@/app/ui/components/preview-card';

const meta = {
  title: 'Volve UI/Overlays/PreviewCard',
  component: PreviewCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controlled open state of the preview card popup',
    },
    onOpenChange: {
      action: 'onOpenChange',
      description: 'Callback fired when the open state changes',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Initial open state when uncontrolled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: false,
      description: 'PreviewCard sub-components: PreviewCardTrigger, PreviewCardPopup',
    },
  },
} satisfies Meta<typeof PreviewCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <PreviewCard {...args}>
      <PreviewCardTrigger>
        <a href="#" onClick={(e) => e.preventDefault()} className="text-sm font-medium underline underline-offset-4">
          Hover over this link
        </a>
      </PreviewCardTrigger>
      <PreviewCardPopup>
        <div className="p-4 max-w-xs">
          <h4 className="text-sm font-semibold mb-1">Project Overview</h4>
          <p className="text-xs text-muted">
            A detailed summary of the project scope, timeline, and key deliverables for the current
            quarter. Click to view the full report.
          </p>
        </div>
      </PreviewCardPopup>
    </PreviewCard>
  ),
};

export const WithImage: Story = {
  render: () => (
    <PreviewCard>
      <PreviewCardTrigger>
        <span className="text-sm font-medium underline underline-offset-4 cursor-pointer">
          Hover for preview
        </span>
      </PreviewCardTrigger>
      <PreviewCardPopup>
        <div className="p-4 max-w-xs">
          <div className="h-32 w-full rounded-md bg-surface-3 flex items-center justify-center text-muted text-xs mb-3">
            Image placeholder
          </div>
          <h4 className="text-sm font-semibold mb-1">Resource Preview</h4>
          <p className="text-xs text-muted">
            A helpful guide to building better UI components with modern design patterns.
          </p>
        </div>
      </PreviewCardPopup>
    </PreviewCard>
  ),
};

export const Placement: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-12 p-16">
      <PreviewCard>
        <PreviewCardTrigger>
          <span className="text-sm font-medium underline underline-offset-4 cursor-pointer">
            Top
          </span>
        </PreviewCardTrigger>
        <PreviewCardPopup side="top">
          <div className="p-4 max-w-xs">
            <h4 className="text-sm font-semibold mb-1">Appears on top</h4>
            <p className="text-xs text-muted">This popup opens above the trigger element.</p>
          </div>
        </PreviewCardPopup>
      </PreviewCard>

      <div className="flex gap-20">
        <PreviewCard>
          <PreviewCardTrigger>
            <span className="text-sm font-medium underline underline-offset-4 cursor-pointer">
              Left
            </span>
          </PreviewCardTrigger>
          <PreviewCardPopup side="left">
            <div className="p-4 max-w-xs">
              <h4 className="text-sm font-semibold mb-1">Appears on left</h4>
              <p className="text-xs text-muted">This popup opens to the left of the trigger.</p>
            </div>
          </PreviewCardPopup>
        </PreviewCard>

        <PreviewCard>
          <PreviewCardTrigger>
            <span className="text-sm font-medium underline underline-offset-4 cursor-pointer">
              Right
            </span>
          </PreviewCardTrigger>
          <PreviewCardPopup side="right">
            <div className="p-4 max-w-xs">
              <h4 className="text-sm font-semibold mb-1">Appears on right</h4>
              <p className="text-xs text-muted">This popup opens to the right of the trigger.</p>
            </div>
          </PreviewCardPopup>
        </PreviewCard>
      </div>

      <PreviewCard>
        <PreviewCardTrigger>
          <span className="text-sm font-medium underline underline-offset-4 cursor-pointer">
            Bottom
          </span>
        </PreviewCardTrigger>
        <PreviewCardPopup side="bottom">
          <div className="p-4 max-w-xs">
            <h4 className="text-sm font-semibold mb-1">Appears on bottom</h4>
            <p className="text-xs text-muted">This popup opens below the trigger element.</p>
          </div>
        </PreviewCardPopup>
      </PreviewCard>
    </div>
  ),
};
