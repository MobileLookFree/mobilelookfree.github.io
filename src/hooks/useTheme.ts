import { useState, useEffect } from 'react';

export const useTheme = (defTheme: 'light' | 'dark' = 'light') => {
  const [theme, setTheme] = useState<'light' | 'dark'>(defTheme);

  const onThemeEvent = (event: MediaQueryListEvent) =>
    setTheme(event.matches ? 'dark' : 'light');

  useEffect(() => {
    const tmq = window.matchMedia('(prefers-color-scheme: dark)');
    tmq && tmq.addEventListener('change', onThemeEvent);
  }, [setTheme]);

  return [theme, setTheme];
};