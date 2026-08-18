'use client';

import type { Dispatch, ReactNode } from 'react';
import { createContext, useLayoutEffect, useReducer } from 'react';

type Theme = 'light' | 'dark';

const INITIAL_THEME = 'light';

const ThemeContext = createContext<Theme>(INITIAL_THEME);
const ThemeDispatchContext = createContext<Dispatch<Action> | null>(null);

type Action = { type: 'toggle' };

function ThemeProvider({
  children,
  initialTheme,
}: {
  children: ReactNode;
  initialTheme: Theme;
}) {
  const [theme, dispatch] = useReducer(themeReducer, initialTheme);

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.cookie = `theme=${theme}; Path=/; Max-Age=31536000; SameSite=Lax`;
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
export type { Theme };
