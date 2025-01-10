'use client';

import { MoonIcon } from '@heroicons/react/24/outline';
import { SunIcon } from '@heroicons/react/24/outline';
import { useTheme, useThemeDispatch } from '@components/Provider/ThemeProvider';

function ThemeButton() {
  const theme = useTheme();
  const dispatch = useThemeDispatch();

  return (
    <button
      className="border border-black dark:border-white p-1 rounded-lg absolute top-1/2 -translate-y-1/2 right-0"
      onClick={() => {
        dispatch({ type: 'toggle' });
      }}
    >
      {theme === 'dark' ? (
        <SunIcon className="size-6 dark:text-white" />
      ) : (
        <MoonIcon className="size-6 text-black" />
      )}
    </button>
  );
}

export default ThemeButton;
