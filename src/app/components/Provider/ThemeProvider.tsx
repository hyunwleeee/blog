'use client';

import type { Dispatch, ReactNode } from 'react';
import React, { createContext, useContext, useEffect, useReducer } from 'react';

type Theme = 'light' | 'dark';

const INITIAL_THEME = 'light';

const ThemeContext = createContext<Theme>(INITIAL_THEME);
const ThemeDispatchContext = createContext<Dispatch<Action> | null>(null);

type Action = { type: 'toggle' };

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, dispatch] = useReducer(themeReducer, INITIAL_THEME);

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const localTheme = window.localStorage.getItem('theme');

    if (localTheme === 'dark') {
      dispatch({ type: 'toggle' });
      return;
    }

    if (!localTheme && isDark) dispatch({ type: 'toggle' });
  }, []);

  useEffect(() => {
    const htmlElement = window.document.documentElement;

    if (!htmlElement) return;

    if (theme === 'light') {
      htmlElement.classList.remove('dark');
      htmlElement.classList.add('light');
    } else {
      htmlElement.classList.remove('light');
      htmlElement.classList.add('dark');
    }

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

function useTheme() {
  return useContext(ThemeContext);
}

function useThemeDispatch() {
  const dispatch = useContext(ThemeDispatchContext);
  if (!dispatch) throw Error('ThemeDispatchContext not found');
  return dispatch;
}

function themeReducer(theme: Theme, action: Action): Theme {
  switch (action.type) {
    case 'toggle':
      return theme === 'light' ? 'dark' : 'light';
    default:
      throw new Error('Unknown action: ' + action.type);
  }
}

export { ThemeProvider, useTheme, useThemeDispatch };
