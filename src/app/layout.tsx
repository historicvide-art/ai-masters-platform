import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NEXIAL | Master the Intelligence Age',
  description: 'Elite AI master’s programme for building the future of intelligent systems.',
  keywords: 'AI, machine learning, master’s degree, research, artificial intelligence',
  authors: [{ name: 'NEXIAL Institute' }],
  openGraph: {
    title: 'NEXIAL | Master the Intelligence Age',
    description: 'An intensive master’s programme for architects of intelligent systems.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
