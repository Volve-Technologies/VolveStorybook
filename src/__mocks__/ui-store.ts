import { atom } from 'jotai';

export const welcomeToNewUiOpen = atom(false);
export const closedStackItemsAtom = atom<string[]>([]);
