'use client';

import { useContext } from 'react';
import { ThemeDispatchContext } from '@/contexts/theme.context';

export default function useThemeDispatch() {
  const themeDispatch = useContext(ThemeDispatchContext);
  if (!themeDispatch) throw Error('ThemeDispatchContext 안에서 사용해주세요.');

  return themeDispatch;
}
