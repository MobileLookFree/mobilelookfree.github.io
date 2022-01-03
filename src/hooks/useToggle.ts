import { useState } from 'react';

export function useToggle<T = boolean>(first: T, second: T) {
  const [value, setValue] = useState<T>(first);

  const onToggle = () => setValue(value === first
    ? second
    : first
  );

  return [value, onToggle, setValue] as const;
};