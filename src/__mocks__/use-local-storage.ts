import * as React from 'react';

export function useLocalStorage<T>(
  _key: string,
  initialValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  return React.useState<T>(initialValue);
}
