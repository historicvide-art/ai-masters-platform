import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NOVA AI — Master the intelligence age',
  description: 'An elite, research-led master’s programme for the builders of intelligent systems.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
