'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/contexts/theme.context';

export default function useTheme() {
  const theme = useContext(ThemeContext);
  if (!theme) throw Error('ThemeContext 안에서 사용해주세요.');

  return theme;
}
