import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const welcomeToNewUiOpen = atom(false);
export const closedStackItemsAtom = atomWithStorage<string[]>('closedStackItems3', []);
