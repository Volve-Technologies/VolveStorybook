import { atomWithStorage } from 'jotai/utils';

export const sidebarStateAtom = atomWithStorage<'expanded' | 'collapsed' | 'floating'>(
  'sidebar_state',
  'expanded',
);
