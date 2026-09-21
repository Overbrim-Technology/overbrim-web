import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between lg:px-8">
        <div>
          <Link href="/" className="font-marcellus text-2xl text-white">Overbrim<span className="text-teal-400">.</span></Link>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">The strategic partner for better technology, better talent, and better growth.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <Link href="/digital-labs" className="transition hover:text-white">Digital Labs</Link>
          <Link href="/sme" className="transition hover:text-white">SME Network</Link>
          <Link href="/va" className="transition hover:text-white">VA Hub</Link>
          <Link href="mailto:overbrimhq@gmail.com" className="transition hover:text-white">overbrimhq@gmail.com</Link>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-slate-500">© 2026 Overbrim Technologies. All rights reserved.</div>
    </footer>
  );
}