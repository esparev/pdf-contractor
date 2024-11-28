import type { Metadata } from 'next';
import '@app/assets/styles/globals.css';

export const metadata: Metadata = {
  title: 'PDF Contractor',
  description: 'PDF Contractor',
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es-mx">
      <body>{children}</body>
    </html>
  );
}
