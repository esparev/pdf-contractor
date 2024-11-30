'use client';

import { ThemeProvider } from './theme-provider';
import { ReactQueryProvider } from './react-query-provider';

export function ClientProviders({ children }: Props) {
  return (
    <ThemeProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </ThemeProvider>
  );
}
