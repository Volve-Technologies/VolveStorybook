'use client';

import { useDirection } from '@radix-ui/react-direction';
import * as React from 'react';
import { cn } from '@/app/utils/helpers';
import { MainScrollArea } from '@/app/ui/components/main';

const ROOT_NAME = 'ScrollSpy';

type Direction = 'ltr' | 'rtl';
type SectionElement = HTMLDivElement;

function getDefaultScrollBehavior(): ScrollBehavior {
  if (typeof window === 'undefined') return 'smooth';
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
}

interface StoreState {
  value: string;
}

interface Store {
  subscribe: (callback: () => void) => () => void;
  getState: () => StoreState;
  setState: <K extends keyof StoreState>(key: K, value: StoreState[K]) => void;
  notify: () => void;
}

const StoreContext = React.createContext<Store | null>(null);

export function useScrollSpyStore<T>(selector: (state: StoreState) => T): T {
  const store = React.useContext(StoreContext);

  if (!store) {
    throw new Error(`\`useScrollSpyStore\` must be used within \`${ROOT_NAME}\``);
  }

  const getSnapshot = React.useCallback(() => selector(store.getState()), [store, selector]);

  return React.useSyncExternalStore(store.subscribe, getSnapshot, getSnapshot);
}

interface ScrollSpyContextValue {
  offset: number;
  scrollBehavior: ScrollBehavior;
  dir: Direction;
  scrollContainer: HTMLElement | null;
  isScrollingRef: React.RefObject<boolean>;
  onSectionRegister: (id: string, element: SectionElement) => void;
  onSectionUnregister: (id: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

const ScrollSpyContext = React.createContext<ScrollSpyContextValue | null>(null);

export function useScrollSpyContext() {
  const context = React.useContext(ScrollSpyContext);
  if (!context) {
    throw new Error(`Must be used within \`${ROOT_NAME}\``);
  }
  return context;
}

interface ScrollSpyProps extends React.ComponentProps<'div'> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  rootMargin?: string;
  threshold?: number | number[];
  offset?: number;
  scrollBehavior?: ScrollBehavior;
  scrollContainer?: HTMLElement | null;
  dir?: Direction;
}

export function ScrollSpy(props: ScrollSpyProps) {
  const {
    value,
    defaultValue,
    onValueChange,
    rootMargin,
    threshold = 0.1,
    offset = 80,
    scrollBehavior = getDefaultScrollBehavior(),
    scrollContainer = null,
    dir: dirProp,
    className,
    ...rootProps
  } = props;

  const dir = useDirection(dirProp);

  const stateRef = React.useRef<StoreState>({
    value: value ?? defaultValue ?? '',
  });
  const listenersRef = React.useRef(new Set<() => void>());
  const onValueChangeRef = React.useRef(onValueChange);
  onValueChangeRef.current = onValueChange;

  const store = React.useMemo<Store>(() => {
    return {
      subscribe: (cb) => {
        listenersRef.current.add(cb);
        return () => listenersRef.current.delete(cb);
      },
      getState: () => {
        return stateRef.current;
      },
      setState: (key, newValue) => {
        if (Object.is(stateRef.current[key], newValue)) return;

        stateRef.current[key] = newValue;

        if (key === 'value' && newValue) {
          onValueChangeRef.current?.(newValue);
        }

        store.notify();
      },
      notify: () => {
        for (const cb of listenersRef.current) {
          cb();
        }
      },
    };
  }, []);

  const sectionMapRef = React.useRef(new Map<string, Element>());
  const isScrollingRef = React.useRef(false);
  const rafIdRef = React.useRef<number | null>(null);
  const isMountedRef = React.useRef(false);
  const scrollTimeoutRef = React.useRef<number | null>(null);

  const onSectionRegister = React.useCallback((id: string, element: SectionElement) => {
    sectionMapRef.current.set(id, element);
  }, []);

  const onSectionUnregister = React.useCallback((id: string) => {
    sectionMapRef.current.delete(id);
  }, []);

  const scrollContainerRef = React.useRef(scrollContainer);
  scrollContainerRef.current = scrollContainer;

  const onScrollToSection = React.useCallback(
    (sectionId: string) => {
      // Use getElementById for IDs with special characters (like UUIDs)
      const section = document.getElementById(sectionId);

      if (!section) {
        store.setState('value', sectionId);
        return;
      }

      // Get the actual scroll container if not provided
      const container =
        scrollContainerRef.current || document.querySelector('[data-slot="scroll-area-viewport"]');

      if (!container) {
        console.warn('ScrollSpy: No scroll container found');
        return;
      }

      isScrollingRef.current = true;
      store.setState('value', sectionId);

      const containerRect = container.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();
      const scrollTop = container.scrollTop;
      const offsetPosition = sectionRect.top - containerRect.top + scrollTop - offset;

      container.scrollTo({
        top: offsetPosition,
        behavior: scrollBehavior,
      });

      if (scrollTimeoutRef.current !== null) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = window.setTimeout(() => {
        isScrollingRef.current = false;
      }, 500);
    },
    [offset, scrollBehavior, store],
  );

  React.useLayoutEffect(() => {
    const currentValue = value ?? defaultValue;
    if (currentValue === undefined) return;

    if (!isMountedRef.current) {
      isMountedRef.current = true;
      store.setState('value', currentValue);
      return;
    }

    onScrollToSection(currentValue);
  }, [value, onScrollToSection, defaultValue, store]);

  React.useLayoutEffect(() => {
    const sectionMap = sectionMapRef.current;
    if (sectionMap.size === 0) return;

    // Only use scrollContainer if explicitly provided, don't fall back to querySelector
    // to avoid finding wrong viewport when multiple exist
    if (!scrollContainer) return;

    const observerRootMargin = rootMargin ?? `${-offset}px 0px -70% 0px`;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;

        if (rafIdRef.current !== null) {
          cancelAnimationFrame(rafIdRef.current);
        }

        rafIdRef.current = requestAnimationFrame(() => {
          const intersecting = entries.filter((entry) => entry.isIntersecting);

          if (intersecting.length === 0) return;

          const topmost = intersecting.reduce((prev, curr) => {
            return curr.boundingClientRect.top < prev.boundingClientRect.top ? curr : prev;
          });

          const id = topmost.target.id;
          if (id && sectionMap.has(id)) {
            store.setState('value', id);
          }
        });
      },
      {
        root: scrollContainer as Element,
        rootMargin: observerRootMargin,
        threshold,
      },
    );

    for (const element of sectionMap.values()) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
      if (scrollTimeoutRef.current !== null) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [offset, rootMargin, threshold, scrollContainer, store]);

  const contextValue = React.useMemo<ScrollSpyContextValue>(
    () => ({
      dir,
      offset,
      scrollBehavior,
      scrollContainer,
      isScrollingRef,
      onSectionRegister,
      onSectionUnregister,
      onScrollToSection,
    }),
    [
      dir,
      offset,
      scrollBehavior,
      scrollContainer,
      onSectionRegister,
      onSectionUnregister,
      onScrollToSection,
    ],
  );

  return (
    <StoreContext.Provider value={store}>
      <ScrollSpyContext.Provider value={contextValue}>
        <div
          data-slot="scroll-spy"
          dir={dir}
          {...rootProps}
          className={cn('flex grow min-h-0', className)}
        />
      </ScrollSpyContext.Provider>
    </StoreContext.Provider>
  );
}

interface ScrollSpyViewportProps extends React.ComponentProps<typeof MainScrollArea> {}

export function ScrollSpyViewport(props: ScrollSpyViewportProps) {
  const { className, ...viewportProps } = props;
  const { dir } = useScrollSpyContext();

  return (
    <MainScrollArea
      data-slot="scroll-spy-viewport"
      dir={dir}
      {...viewportProps}
      viewportClassName={cn('flex flex-1 flex-col', className)}
    />
  );
}

interface ScrollSpySectionProps extends React.ComponentProps<'div'> {
  value: string;
}

export function ScrollSpySection(props: ScrollSpySectionProps) {
  const { ref, value, ...sectionProps } = props;
  const { onSectionRegister, onSectionUnregister } = useScrollSpyContext();
  const sectionRef = React.useRef<SectionElement>(null);

  React.useLayoutEffect(() => {
    const element = sectionRef.current;
    if (!element || !value) return;

    onSectionRegister(value, element);

    return () => {
      onSectionUnregister(value);
    };
  }, [value, onSectionRegister, onSectionUnregister]);

  return (
    <div
      data-slot="scroll-spy-section"
      {...sectionProps}
      id={value}
      ref={(node: SectionElement | null) => {
        sectionRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          (ref as React.RefObject<SectionElement | null>).current = node;
        }
      }}
    />
  );
}
