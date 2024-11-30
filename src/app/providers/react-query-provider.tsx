'use client';

// Libs
import { useState } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// Config
import { queryClient as queryClientConfig } from '@app/config/react-query';

export function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => queryClientConfig);
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;
