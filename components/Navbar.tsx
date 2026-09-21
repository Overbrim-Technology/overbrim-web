import Link from 'next/link';

const links = [
  { label: 'Digital Labs', href: '/digital-labs' },
  { label: 'SME Network', href: '/sme' },
  { label: 'VA Hub', href: '/va' },
  { label: 'About Overbrim', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f7f8f5]/90 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8" aria-label="Main navigation">
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
        <Link href="#contact" className="rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white md:hidden">
          Connect
        </Link>
      </nav>
    </header>
  );
}