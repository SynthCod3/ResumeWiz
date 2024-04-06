import type { Metadata } from 'next';
import './globals.css';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Navbar } from '@/components/navbar';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'ResumeWiz',
  description: 'AI powered resume builder',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased pt-[4rem]',
          fontSans.variable,
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
