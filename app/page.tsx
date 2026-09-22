import Link from 'next/link';
import { ContactCTA } from '../components/ContactCTA';

const arms = [
  {
    id: 'digital-labs',
    href: '/digital-labs',
    number: '01',
    title: 'Overbrim Digital Labs',
    headline: 'End-to-End Digital Transformation',
    body: 'We turn complex challenges into scalable digital solutions. From robust software engineering across Web, Mobile, AI, and Web3, to comprehensive creative services, we build the tools you need to thrive. Through our Digital Academy, we also empower individuals and organizations with the practical skills to lead in the digital economy.',
    link: 'Explore Digital Labs →',
  },
  {
    id: 'sme-network',
    href: '/sme',
    number: '02',
    title: 'Overbrim SME',
    headline: 'Precision AI Training by Global Experts',
    body: 'High-quality AI requires exceptional human intelligence. We source, vet, and match specialized Subject Matter Experts with AI organizations to provide unparalleled data annotation, evaluation, and model training. Ensure your AI solutions are accurate, safe, and industry-specific with our global expert network.',
    link: 'Hire Experts / Apply as an SME →',
  },
  {
    id: 'va-hub',
    href: '/va',
    number: '03',
    title: 'Overbrim VA',
    headline: 'Seamless Operational Excellence',
    body: 'Scale your output without scaling your overhead. The Overbrim VA Hub connects organizations with highly capable, vetted virtual assistants ready to take on critical operational, administrative, and specialized tasks. We handle the sourcing and matching so you can focus on driving your core business forward.',
    link: 'Find a VA / Become a VA →',
  },
];

function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#e5f0ec] bg-cover bg-center"
      style={{ backgroundImage: "linear-gradient(90deg, rgba(243, 240, 233, 0.98) 0%, rgba(243, 240, 233, 0.9) 52%, rgba(243, 240, 233, 0.58) 100%), url('/images/hero-1.png')" }}
    >
      <div className="absolute -right-32 -top-40 h-[30rem] w-[30rem] rounded-full border-[70px] border-teal-700/10" />
      <div id="about" className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-20 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:pb-32 lg:pt-28">
        <div className="relative z-10 max-w-3xl">
          <p className="mb-7 font-nexa-heavy text-xs uppercase tracking-[0.28em] text-teal-700">Strategic Partner For Your Organization & Brand.</p>
          <h1 className="font-marcellus text-5xl leading-[1.05] text-slate-950 sm:text-6xl lg:text-8xl">Build, Train, and Scale with Overbrim.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">We are your strategic partner for digital growth. From full-stack engineering and expert AI model training to dedicated virtual assistance, we bring the technology and talent to accelerate your business.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="#contact" className="rounded-full bg-teal-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-800">Partner with Us</Link>
            <Link href="#network" className="rounded-full border border-slate-400 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-teal-700 hover:text-teal-700">Explore Our Hubs <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="relative flex min-h-64 items-end justify-end lg:min-h-0">
          <div className="max-w-xs border-l-2 border-teal-600 pl-5 text-sm leading-6 text-slate-600">We connect ambitious organizations to the systems, specialists, and support that move meaningful work forward.</div>
        </div>
      </div>
    </section>
  );
}

function RoutingGrid() {
  return (
    <section id="network" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
      <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div><p className="font-nexa-heavy text-xs uppercase tracking-[0.28em] text-teal-700">The Overbrim network</p><h2 className="mt-3 max-w-xl font-marcellus text-4xl text-slate-950 sm:text-5xl">The right expertise for every next step.</h2></div>
        <p className="max-w-xs text-sm leading-6 text-slate-500">Three focused arms, one shared commitment to practical outcomes.</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {arms.map((arm) => (
          <article key={arm.id} id={arm.id} className="group flex min-h-[31rem] flex-col border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-teal-600 hover:shadow-xl hover:shadow-teal-950/5 sm:p-9">
            <div className="flex items-center justify-between"><span className="font-nexa-heavy text-xs text-teal-700">{arm.number}</span><span className="h-px w-14 bg-slate-200 transition group-hover:w-20 group-hover:bg-teal-600" /></div>
            <h3 className="mt-16 font-nexa-heavy text-xl text-slate-950"><Link href={arm.href} className="transition hover:text-teal-700">{arm.title}</Link></h3>
            <h4 className="mt-4 font-marcellus text-3xl leading-tight text-slate-800">{arm.headline}</h4>
            <p className="mt-6 text-sm leading-7 text-slate-600">{arm.body}</p>
            <Link href={arm.href} className="mt-auto pt-10 text-sm font-semibold text-teal-700 transition group-hover:text-teal-900">{arm.link}</Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return <><HeroSection /><RoutingGrid /><ContactCTA /></>;
}