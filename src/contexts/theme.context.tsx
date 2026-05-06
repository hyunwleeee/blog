'use client';

import type { Dispatch, ReactNode } from 'react';
import { createContext, useEffect, useReducer } from 'react';

type Theme = 'light' | 'dark';

const INITIAL_THEME = 'light';

const ThemeContext = createContext<Theme>(INITIAL_THEME);
const ThemeDispatchContext = createContext<Dispatch<Action> | null>(null);

type Action = { type: 'toggle' };

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, dispatch] = useReducer(themeReducer, INITIAL_THEME);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    const initial = stored ?? (prefersDark ? 'dark' : 'light');
    if (initial === 'dark') dispatch({ type: 'toggle' });
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

function themeReducer(theme: Theme, action: Action): Theme {
  switch (action.type) {
    case 'toggle':
      return theme === 'light' ? 'dark' : 'light';
  }
}

export { ThemeProvider, ThemeContext, ThemeDispatchContext };
