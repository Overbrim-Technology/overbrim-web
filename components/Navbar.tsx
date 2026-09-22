'use client';

import { useState } from 'react';
import Link from 'next/link';

const links = [
  { label: 'Digital Labs', href: '/digital-labs' },
  { label: 'SME Network', href: '/sme' },
  { label: 'VA Hub', href: '/va' },
  { label: 'About Overbrim', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f7f8f5]/90 backdrop-blur-lg">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="font-marcellus text-xl tracking-wide text-slate-950" aria-label="Overbrim home">
          Overbrim<span className="text-teal-700">.</span>
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-700">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <Link href="#contact" className="rounded-full bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800">
            Partner with Us
          </Link>
          <Link href="#network" className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-teal-700 hover:text-teal-700">
            Join Our Network
          </Link>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <Link href="#contact" className="rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white">
            Connect
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-slate-300 text-slate-800 transition hover:border-teal-700 hover:text-teal-700"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="h-px w-4 bg-current" />
            <span className="h-px w-4 bg-current" />
            <span className="h-px w-4 bg-current" />
          </button>
        </div>
        {isMenuOpen && (
          <div id="mobile-navigation" className="absolute left-6 right-6 top-full border-t border-slate-200 bg-[#f7f8f5] px-1 pb-3 shadow-lg lg:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block border-b border-slate-200/80 px-4 py-3.5 text-sm font-medium text-slate-700 transition-colors hover:text-teal-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}