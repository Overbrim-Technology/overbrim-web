import type { Metadata } from 'next';
import './globals.css';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Overbrim | Build, Train, and Scale',
  description: 'Your strategic partner for digital growth, expert AI training, and virtual assistance.',
  metadataBase: new URL('https://overbrim.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://overbrim.org',
    siteName: 'Overbrim',
    title: 'Overbrim | Build, Train, and Scale',
    description: 'Your strategic partner for digital growth, expert AI training, and virtual assistance.',
    images: [{ url: '/images/overbrim-logo-2.PNG', alt: 'Overbrim logo' }],
  },
  twitter: {
    card: 'summary',
    title: 'Overbrim | Build, Train, and Scale',
    description: 'Your strategic partner for digital growth, expert AI training, and virtual assistance.',
    images: ['/images/overbrim-logo-2.PNG'],
  },
  icons: {
    icon: '/images/overbrim-logo-2.PNG',
    apple: '/images/overbrim-logo-2.PNG',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-nexa-light">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}