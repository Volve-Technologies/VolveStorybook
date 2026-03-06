import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScrollSpy, ScrollSpyViewport, ScrollSpySection } from '@/app/ui/components/scroll-spy';
import {
  Sidenav,
  SidenavHeader,
  SidenavHeading,
  SidenavList,
  SidenavItem,
  SidenavLink,
} from '@/app/ui/components/sidenav';
import { H3 } from '@/app/ui/components/heading';
import { Separator } from '@/app/ui/components/separator';
import { useState } from 'react';

const meta: Meta<typeof ScrollSpy> = {
  title: 'Volve UI/Advanced/ScrollSpy',
  component: ScrollSpy,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    value: {
      control: 'text',
      description: 'Controlled active section value',
    },
    onValueChange: {
      action: 'onValueChange',
      description: 'Callback fired when the active section changes',
    },
    scrollContainer: {
      control: false,
      description: 'The scrollable container element that ScrollSpy observes',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names for the ScrollSpy root',
    },
    children: {
      control: false,
      description: 'ScrollSpy content — viewport and nav links',
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

const sections = [
  { id: 'introduction', title: 'Introduction', content: 'This section provides an overview of the topic. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { id: 'requirements', title: 'Requirements', content: 'The system requires the following dependencies to function properly. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { id: 'installation', title: 'Installation', content: 'Follow these steps to install the software. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.' },
  { id: 'configuration', title: 'Configuration', content: 'Configure the application using the settings below. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.' },
  { id: 'usage', title: 'Usage', content: 'Learn how to use the application effectively. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.' },
  { id: 'api', title: 'API Reference', content: 'Complete API documentation for developers. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.' },
];

export const Default: Story = {
  render: (args) => {
    const [scrollContainer, setScrollContainer] = useState<HTMLElement | null>(null);

    return (
      <div className="flex h-[500px] w-[750px] border rounded-lg overflow-hidden">
        <ScrollSpy scrollContainer={scrollContainer} className="flex w-full" {...args}>
          <Sidenav className="border-r bg-surface-1 shrink-0">
            <SidenavHeader>
              <SidenavHeading>On this page</SidenavHeading>
            </SidenavHeader>
            <SidenavList scrollable={false}>
              {sections.map((section) => (
                <SidenavItem key={section.id}>
                  <SidenavLink value={section.id}>
                    {section.title}
                  </SidenavLink>
                </SidenavItem>
              ))}
            </SidenavList>
          </Sidenav>
          <ScrollSpyViewport
            ref={(el) => setScrollContainer(el?.querySelector('[data-slot="scroll-area-viewport"]') as HTMLElement ?? null)}
            className="flex-1"
          >
            <div className="p-6 space-y-8">
              {sections.map((section, index) => (
                <ScrollSpySection key={section.id} value={section.id}>
                  <H3 className="mb-3">{section.title}</H3>
                  <p className="text-sm text-muted leading-relaxed">{section.content}</p>
                  {index < sections.length - 1 && <Separator className="mt-8" />}
                </ScrollSpySection>
              ))}
            </div>
          </ScrollSpyViewport>
        </ScrollSpy>
      </div>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const [activeSection, setActiveSection] = useState('introduction');

    return (
      <div className="space-y-4">
        <div className="flex gap-2 flex-wrap">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`text-xs px-2 py-1 rounded border ${activeSection === s.id ? 'bg-surface-4 font-medium' : 'hover:bg-surface-2'}`}
            >
              {s.title}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted">Active: <strong>{activeSection}</strong></p>
        <div className="flex h-[400px] w-[750px] border rounded-lg overflow-hidden">
          <ScrollSpy value={activeSection} onValueChange={setActiveSection} className="flex w-full">
            <Sidenav className="border-r bg-surface-1 shrink-0">
              <SidenavHeader>
                <SidenavHeading>Sections</SidenavHeading>
              </SidenavHeader>
              <SidenavList scrollable={false}>
                {sections.map((section) => (
                  <SidenavItem key={section.id}>
                    <SidenavLink value={section.id}>
                      {section.title}
                    </SidenavLink>
                  </SidenavItem>
                ))}
              </SidenavList>
            </Sidenav>
            <ScrollSpyViewport className="flex-1">
              <div className="p-6 space-y-8">
                {sections.map((section) => (
                  <ScrollSpySection key={section.id} value={section.id}>
                    <H3 className="mb-3">{section.title}</H3>
                    <p className="text-sm text-muted leading-relaxed">{section.content}</p>
                  </ScrollSpySection>
                ))}
              </div>
            </ScrollSpyViewport>
          </ScrollSpy>
        </div>
      </div>
    );
  },
};
