import { useLocalStorage } from '@/app/hooks/useLocalStorage';
import { Button } from '@/app/ui/components/button';
import { Card } from '@/app/ui/components/card';
import { DialogCancel } from '@/app/ui/components/dialog';
import { Form } from '@/app/ui/components/form';
import { Progress, ProgressTrack } from '@/app/ui/components/progress';
import { ScrollArea } from '@/app/ui/components/scroll-area';
import { cn } from '@/app/utils/helpers';
import { useTranslations } from 'next-intl';
import * as React from 'react';

export type StepperType<T extends string = string> = {
  currentStep: T;
  currentStepIndex: number;
  steps: readonly T[];
  isFirstStep: boolean;
  isLastStep: boolean;
  visitedSteps: Set<T>;
  goToFirst: () => void;
  goTo: (step: T) => void;
  goNext: () => void;
  goBack: () => void;
};

const StepperContext = React.createContext<StepperType | null>(null);

export function useStepper<T extends string = string>() {
  const context = React.use(StepperContext) as StepperType<T> | null;
  if (!context) {
    throw new Error('useStepper must be used within a <Stepper.Root>');
  }
  return context;
}

interface Props<T extends string> extends React.ComponentProps<'div'> {
  storageKey: string;
  steps: readonly T[];
  onStepChange?: (step: { id: T; index: number }) => void;
}

function InternalStepper<T extends string>({
  children,
  storageKey,
  steps,
  onStepChange,
  className,
  ...props
}: Props<T>) {
  const [currentStep, setCurrentStep] = useLocalStorage(storageKey, steps[0]!);
  const [visitedSteps, setVisitedSteps] = React.useState<Set<T>>(() => new Set([steps[0]!]));

  const currentStepIndex = React.useMemo(() => steps.indexOf(currentStep), [steps, currentStep]);

  return (
    <StepperContext.Provider
      value={{
        currentStep,
        currentStepIndex,
        steps,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1,
        visitedSteps,
        goToFirst: () => {
          setCurrentStep(steps[0]!);
        },
        goTo: (step: string) => {
          const targetIndex = steps.indexOf(step as T);
          if (targetIndex !== -1 && targetIndex < currentStepIndex) {
            setCurrentStep(step as T);
          }
        },
        goNext: () => {
          const currentStepIndex = steps.indexOf(currentStep);
          if (currentStepIndex < steps.length - 1) {
            const nextStep = steps[currentStepIndex + 1]!;
            setCurrentStep(nextStep);
            setVisitedSteps((prev) => new Set(prev).add(nextStep));
          }
        },
        goBack: () => {
          if (currentStepIndex > 0) {
            setCurrentStep(steps[currentStepIndex - 1]!);
          }
        },
      }}
    >
      <div className={cn('flex max-md:flex-col grow gap-4 md:gap-6 h-full', className)} {...props}>
        {children}
      </div>
    </StepperContext.Provider>
  );
}

interface StepProps<T extends string> extends React.ComponentProps<typeof Form> {
  id: T;
}

function InternalStep<T extends string>({ className, id, ...props }: StepProps<T>) {
  const context = useStepper<T>();
  if (context.currentStep === id)
    return (
      <Card
        render={<Form {...props} />}
        className={cn('flex grow p-0 min-h-0 min-w-0 w-full flex-col', className)}
      />
    );
  return null;
}

function StepperStepScrollArea({ className, ...props }: React.ComponentProps<typeof ScrollArea>) {
  return <ScrollArea viewportClassName={cn('p-4 space-y-4', className)} {...props} />;
}

function StepperAside({ className, ...props }: React.ComponentProps<'aside'>) {
  return <aside className={cn('flex md:w-56 shrink-0 flex-col', className)} {...props} />;
}

function StepperTitle({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'font-semibold [&>svg]:size-6 flex items-center gap-1.5 has-[+[data-slot=stepper-step-list]]:mb-4 text-lg leading-normal -mt-0.5',
        className,
      )}
      {...props}
    />
  );
}

function StepperStepList({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="stepper-step-list"
      className={cn('space-y-1 max-md:hidden mb-16 flex flex-col', className)}
      {...props}
    />
  );
}

interface StepperStepButtonProps<T extends string> extends React.ComponentProps<typeof Button> {
  id: T;
}

function InternalStepperStepButton<T extends string>({
  className,
  id,
  ...props
}: StepperStepButtonProps<T>) {
  const context = useStepper<T>();
  const stepIndex = context.steps.indexOf(id);
  const canNavigate = stepIndex < context.currentStepIndex;

  return (
    <Button
      kind="with-icon"
      variant="ghost"
      size="lg"
      data-active={context.currentStep === id ? '' : undefined}
      className={cn(
        'space-y-1 justify-start disabled:opacity-100 font-medium data-active:bg-surface-4 text-muted data-active:text-foreground',
        className,
      )}
      onClick={() => context.goTo(id)}
      disabled={!canNavigate}
      {...props}
    />
  );
}

function StepperStepTitle({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'text-lg has-[+[data-slot=stepper-step-description]]:mb-1 -mt-1.5 font-medium',
        className,
      )}
      {...props}
    />
  );
}

function StepperStepDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="stepper-step-description"
      className={cn('text-sm text-muted text-balance', className)}
      {...props}
    />
  );
}

function StepperDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return <p className={cn('mt-2 mb-4 text-sm text-balance text-muted', className)} {...props} />;
}

function StepperNavigation({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'mt-auto grid p-4 border-t sm:justify-end grid-cols-2 gap-2 sm:flex',
        className,
      )}
      {...props}
    />
  );
}

function StepperBack({ children, className, ...props }: React.ComponentProps<typeof Button>) {
  const t = useTranslations('general');
  const stepper = useStepper();

  return (
    <Button
      type="button"
      variant={'secondary'}
      disabled={stepper.isFirstStep}
      onClick={stepper.goBack}
      className={cn('disabled:cursor-not-allowed', className)}
      {...props}
    >
      {children ?? t('back')}
    </Button>
  );
}

function StepperCancel({ children, ...props }: React.ComponentProps<typeof Button>) {
  const t = useTranslations('general');
  if (props.render) return <Button type="button" variant="secondary" {...props} />;
  return (
    <DialogCancel type="button" {...props}>
      {children ?? t('cancel')}
    </DialogCancel>
  );
}

function StepperNext({ className, children, ...props }: React.ComponentProps<typeof Button>) {
  const t = useTranslations('general');
  return (
    <Button type="submit" className={cn('disabled:cursor-not-allowed', className)} {...props}>
      {children ?? t('continue')}
    </Button>
  );
}

function StepperProgress({ children, className, ...props }: React.ComponentProps<'div'>) {
  const context = useStepper();
  const t = useTranslations('general');

  const progressValue = ((context.currentStepIndex + 1) / context.steps.length) * 100;

  return (
    <div className={cn('md:mt-auto pb-0.5 w-full', className)} {...props}>
      <p className="text-muted text-sm mb-2">
        {t('step')} {context.currentStepIndex + 1} {t('of')}{' '}
        <strong className="text-foreground"> {context.steps.length}</strong>
      </p>
      <Progress max={100} value={progressValue}>
        <ProgressTrack />
      </Progress>
    </div>
  );
}

export function createStepper<const T extends readonly string[]>(steps: T) {
  type Step = T[number];

  function Stepper(props: Omit<Props<Step>, 'steps'>) {
    return <InternalStepper steps={steps} {...props} />;
  }

  function StepperStep(props: StepProps<Step>) {
    return <InternalStep {...props} />;
  }

  function StepperStepButton(props: StepperStepButtonProps<Step>) {
    return <InternalStepperStepButton {...props} />;
  }

  return {
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
    StepperCancel,
    steps,
  };
}

