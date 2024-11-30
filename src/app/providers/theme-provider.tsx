'use client';

import { ThemeProvider as MaterialThemeProvider } from '@material-tailwind/react';

export function ThemeProvider({ children }: Props) {
  return <MaterialThemeProvider>{children}</MaterialThemeProvider>;
}
