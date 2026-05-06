'use client';

import { MoonIcon } from '@heroicons/react/24/outline';
import { SunIcon } from '@heroicons/react/24/outline';
import useTheme from '@hooks/useTheme';
import useThemeDispatch from '@hooks/useThemeDispatch';

function ThemeButton() {
  const theme = useTheme();
  const dispatch = useThemeDispatch();

  return (
    <button
      className="absolute right-5 top-1/2 -translate-y-1/2"
      onClick={() => dispatch({ type: 'toggle' })}
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
