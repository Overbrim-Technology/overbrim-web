import type { Metadata } from 'next';
import './globals.css';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Overbrim | Build, Train, and Scale',
  description: 'A comprehensive partner for digital growth, expert AI training, and virtual assistance.',
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