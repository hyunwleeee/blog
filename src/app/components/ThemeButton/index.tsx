'use client';

import useTheme from '@hooks/useTheme';
import useThemeDispatch from '@hooks/useThemeDispatch';
import MoonIcon from '@svgs/icon-moon.svg';
import SunIcon from '@svgs/icon-sun.svg';

function ThemeButton() {
  const theme = useTheme();
  const dispatch = useThemeDispatch();

  return (
    <button
      type="button"
      aria-label={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
      className="flex size-10 items-center justify-center rounded-10 border border-border bg-surface"
      onClick={() => dispatch({ type: 'toggle' })}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

export default ThemeButton;
