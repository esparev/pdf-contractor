// Libs
import type { Metadata } from 'next';
// Local Libs
import { inter } from '@app/app/fonts';
import { ThemeProvider } from '@app/app/_libs/client-providers';
// Utils
import { cn } from '@app/utils/cn';
// Styles
import '@app/assets/styles/globals.css';

export const metadata: Metadata = {
  title: 'PDF Contractor',
  description: 'PDF Contractor',
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es-mx">
      <ThemeProvider>
        <body className={cn('flex min-h-screen flex-col', inter.variable)}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
