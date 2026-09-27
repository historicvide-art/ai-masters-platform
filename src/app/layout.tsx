import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NEXIAL | Master the Intelligence Age',
  description: 'Elite AI master’s programme for building the future of intelligent systems.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
