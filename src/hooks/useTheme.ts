'use client';

import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

function detectThemePreference(): Theme {
  if (typeof window !== 'undefined') {
    if (
      window.localStorage.theme === 'dark' ||
      (!('theme' in window.localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      return 'dark';
    } else {
      return 'light';
    }
  }

  return 'light';
}

export default function useTheme() {
  const [theme, setTheme] = useState(detectThemePreference());

  const toggleTheme = () => {
    setTheme((previous) => (previous === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, [theme]);

  return toggleTheme;
}
