import type { Meta, StoryObj } from '@storybook/react-vite';
import { createStepper } from '@/app/ui/components/stepper';

const meta: Meta = {
  title: 'Volve UI/Navigation/Stepper',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

// Create a typed stepper instance
const {
  Stepper,
  StepperAside,
  StepperTitle,
  StepperDescription,
  StepperProgress,
  StepperStepList,
  StepperStepButton,
  StepperStep,
  StepperStepScrollArea,
  StepperStepTitle,
  StepperStepDescription,
  StepperNavigation,
  StepperBack,
  StepperNext,
} = createStepper(['general', 'details', 'review'] as const);

export const Default: Story = {
  render: () => (
    <div className="h-[500px] border rounded-xl overflow-hidden">
      <Stepper storageKey="storybook-demo-stepper">
        <StepperAside className="p-4 border-r bg-surface-2">
          <StepperTitle>Create Project</StepperTitle>
          <StepperDescription>Fill in the project details below.</StepperDescription>
          <StepperStepList>
            <li>
              <StepperStepButton id="general">
                General Info
              </StepperStepButton>
            </li>
            <li>
              <StepperStepButton id="details">
                Project Details
              </StepperStepButton>
            </li>
            <li>
              <StepperStepButton id="review">
                Review
              </StepperStepButton>
            </li>
          </StepperStepList>
          <StepperProgress />
        </StepperAside>

        <StepperStep id="general">
          <StepperStepScrollArea>
            <StepperStepTitle>General Information</StepperStepTitle>
            <StepperStepDescription>
              Provide the basic details about your project.
            </StepperStepDescription>
            <div className="space-y-4 mt-4">
              <div className="space-y-1">
                <label className="text-sm font-medium">Project Name</label>
                <input className="w-full border rounded-md px-3 py-2 text-sm" placeholder="My Project" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">Description</label>
                <textarea className="w-full border rounded-md px-3 py-2 text-sm" rows={3} placeholder="Describe your project..." />
              </div>
            </div>
          </StepperStepScrollArea>
          <StepperNavigation>
            <StepperBack />
            <StepperNext>Continue</StepperNext>
          </StepperNavigation>
        </StepperStep>

        <StepperStep id="details">
          <StepperStepScrollArea>
            <StepperStepTitle>Project Details</StepperStepTitle>
            <StepperStepDescription>
              Configure the project settings.
            </StepperStepDescription>
            <div className="space-y-4 mt-4">
              <div className="space-y-1">
                <label className="text-sm font-medium">Category</label>
                <select className="w-full border rounded-md px-3 py-2 text-sm">
                  <option>Engineering</option>
                  <option>Design</option>
                  <option>Marketing</option>
                </select>
              </div>
            </div>
          </StepperStepScrollArea>
          <StepperNavigation>
            <StepperBack />
            <StepperNext>Continue</StepperNext>
          </StepperNavigation>
        </StepperStep>

        <StepperStep id="review">
          <StepperStepScrollArea>
            <StepperStepTitle>Review & Submit</StepperStepTitle>
            <StepperStepDescription>
              Review your project details before submitting.
            </StepperStepDescription>
            <div className="mt-4 p-4 border rounded-lg bg-surface-2 text-sm space-y-2">
              <p><strong>Project Name:</strong> My Project</p>
              <p><strong>Category:</strong> Engineering</p>
            </div>
          </StepperStepScrollArea>
          <StepperNavigation>
            <StepperBack />
            <StepperNext>Submit</StepperNext>
          </StepperNavigation>
        </StepperStep>
      </Stepper>
    </div>
  ),
};

// Two-step stepper
const TwoStep = createStepper(['info', 'confirm'] as const);

export const TwoSteps: Story = {
  render: () => (
    <div className="h-80 border rounded-xl overflow-hidden">
      <TwoStep.Stepper storageKey="storybook-two-step">
        <TwoStep.StepperAside className="p-4 border-r bg-surface-2">
          <TwoStep.StepperTitle>Quick Setup</TwoStep.StepperTitle>
          <TwoStep.StepperStepList>
            <li>
              <TwoStep.StepperStepButton id="info">
                Information
              </TwoStep.StepperStepButton>
            </li>
            <li>
              <TwoStep.StepperStepButton id="confirm">
                Confirm
              </TwoStep.StepperStepButton>
            </li>
          </TwoStep.StepperStepList>
          <TwoStep.StepperProgress />
        </TwoStep.StepperAside>

        <TwoStep.StepperStep id="info">
          <TwoStep.StepperStepScrollArea>
            <TwoStep.StepperStepTitle>Enter Information</TwoStep.StepperStepTitle>
            <div className="mt-4">
              <input className="w-full border rounded-md px-3 py-2 text-sm" placeholder="Name" />
            </div>
          </TwoStep.StepperStepScrollArea>
          <TwoStep.StepperNavigation>
            <TwoStep.StepperBack />
            <TwoStep.StepperNext>Next</TwoStep.StepperNext>
          </TwoStep.StepperNavigation>
        </TwoStep.StepperStep>

        <TwoStep.StepperStep id="confirm">
          <TwoStep.StepperStepScrollArea>
            <TwoStep.StepperStepTitle>Confirm</TwoStep.StepperStepTitle>
            <p className="text-sm text-muted-foreground mt-2">Everything looks good!</p>
          </TwoStep.StepperStepScrollArea>
          <TwoStep.StepperNavigation>
            <TwoStep.StepperBack />
            <TwoStep.StepperNext>Submit</TwoStep.StepperNext>
          </TwoStep.StepperNavigation>
        </TwoStep.StepperStep>
      </TwoStep.Stepper>
    </div>
  ),
};
