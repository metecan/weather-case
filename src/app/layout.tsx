import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Weather Dashboard | Metecan Kaplan',
  description: 'Metecan Kaplan Weather App',
  other: {
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <body className={`select-none ${inter.className}`}>{children}</body>
    </html>
  );
}
