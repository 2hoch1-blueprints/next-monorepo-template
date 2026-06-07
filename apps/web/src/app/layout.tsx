import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next Monorepo Template',
  description: 'A production-ready Next.js monorepo starter',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
