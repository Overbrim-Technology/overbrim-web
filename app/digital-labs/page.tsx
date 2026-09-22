import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactCTA } from '../../components/ContactCTA';

export const metadata: Metadata = {
  title: 'Digital Labs | Digital Transformation and Academy Training | Overbrim',
  description: 'Strategic software engineering, creative services, and industry-led digital training for individuals, juniors, and organizations.',
  alternates: {
    canonical: '/digital-labs',
  },
};

const engineeringCapabilities = [
  ['Full-stack product development', 'Next.js, React, Node.js, and Java applications built around your users, workflows, and growth targets.'],
  ['Backend and API architecture', 'Reliable service layers, integrations, data models, and APIs designed for security, scale, and maintainability.'],
  ['Quality assurance', 'Practical test strategy, automated checks, regression testing, and release confidence from the first sprint to launch.'],
  ['DevOps outsourcing', 'CI/CD, cloud environments, observability, infrastructure automation, and ongoing technical operations support.'],
  ['Web3 architecture', 'Solana web3.js, SPL tokens, wallet flows, and smart contract experiences shaped around real product utility.'],
];

const creativeServices = [
  ['Social Media Management', 'Content systems, publishing rhythms, community care, and performance-informed brand storytelling.'],
  ['Graphic Design', 'Visual identities, campaign assets, presentations, and digital graphics that make your work easier to understand.'],
  ['Video Editing', 'Sharp edits for product stories, education, social campaigns, interviews, and internal communications.'],
  ['Animation', 'Motion systems, explainers, and animated brand moments that give complex ideas a memorable shape.'],
];

const academyAudiences = [
  ['Individuals', 'Practical skills for people building confidence, changing direction, or advancing their digital careers.'],
  ['Organizations', 'Focused learning for teams that need stronger digital capabilities, better systems, or shared ways of working.'],
  ['Juniors', 'Accessible foundations and guided practice for young learners taking their first steps into technology.'],
];

function LabsHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(105deg, rgba(2, 20, 24, 0.98), rgba(2, 20, 24, 0.78), rgba(2, 20, 24, 0.38)), url('/images/automation-small.jpg')" }} />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">
        <p className="font-nexa-heavy text-xs uppercase tracking-[0.3em] text-teal-300">Overbrim / Digital Labs</p>
        <h1 className="mt-6 max-w-4xl font-marcellus text-6xl leading-[1.02] sm:text-7xl lg:text-8xl">Overbrim Digital Labs</h1>
        <p className="mt-8 max-w-2xl font-nexa-light text-lg leading-8 text-slate-200 sm:text-xl">End-to-end digital transformation for organizations that need a thoughtful technology partner from first idea to dependable operation.</p>
        <Link href="#engineering" className="mt-10 inline-flex rounded-full bg-teal-500 px-6 py-3.5 font-nexa-heavy text-sm text-slate-950 transition hover:bg-teal-300">Explore our capabilities <span className="ml-2">↓</span></Link>
      </div>
    </section>
  );
}

function SoftwareEngineering() {
  return (
    <section id="engineering" className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:px-8 lg:py-28">
      <div>
        <p className="font-nexa-heavy text-xs uppercase tracking-[0.28em] text-teal-700">01 / Software engineering</p>
        <h2 className="mt-4 font-marcellus text-4xl leading-tight text-slate-950 sm:text-5xl">Build technology that earns its place in the business.</h2>
        <p className="mt-6 font-nexa-light text-base leading-7 text-slate-600">Our engineers work across product, platform, and infrastructure concerns to turn ambitious plans into useful, resilient systems. You get a delivery team that can think in outcomes and still sweat the technical details.</p>
        <Link href="#contact" className="mt-8 inline-block font-nexa-heavy text-sm text-teal-700 hover:text-teal-900">Talk to the Labs team →</Link>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {engineeringCapabilities.map(([title, description], index) => (
          <article key={title} className={`border border-slate-200 bg-white p-6 ${index === engineeringCapabilities.length - 1 ? 'sm:col-span-2' : ''}`}>
            <span className="font-nexa-heavy text-xs text-teal-700">0{index + 1}</span>
            <h3 className="mt-5 font-nexa-heavy text-lg text-slate-950">{title}</h3>
            <p className="mt-3 font-nexa-light text-sm leading-6 text-slate-600">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function DigitalAcademy() {
  return (
    <section className="bg-[#ebe8df]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8 lg:py-28">
        <div className="order-2 lg:order-1">
          <div className="relative overflow-hidden"><img src="/images/online-services-small.jpg" alt="Learners working with digital tools" className="aspect-[4/3] w-full object-cover" /><div className="absolute bottom-5 left-5 bg-slate-950 px-5 py-4 text-white"><p className="font-nexa-heavy text-xs uppercase tracking-widest text-teal-300">TechUp</p><p className="mt-1 font-marcellus text-xl">Learn for the work ahead.</p></div></div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="font-nexa-heavy text-xs uppercase tracking-[0.28em] text-teal-700">02 / Digital Academy</p>
          <h2 className="mt-4 font-marcellus text-4xl leading-tight text-slate-950 sm:text-5xl">Skills that turn possibility into practice.</h2>
          <p className="mt-6 font-nexa-light text-base leading-7 text-slate-600">The Digital Academy serves three clear audiences: individuals, organizations, and juniors. We shape each learning experience around the learner, from bootcamps and one-to-one coaching to focused workshops and other practical sessions.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">{academyAudiences.map(([title, description]) => <article key={title} className="border-t border-teal-700/40 pt-4"><h3 className="font-nexa-heavy text-sm text-slate-950">{title}</h3><p className="mt-2 font-nexa-light text-sm leading-6 text-slate-600">{description}</p></article>)}</div>
          <div className="mt-8 flex flex-wrap gap-3">{['Prompt engineering (AI)', 'Web development', 'Data analysis', 'Social media management', 'Video editing', 'Graphic design', 'Animation', 'Others'].map((track) => <span key={track} className="border border-teal-700/30 bg-white/60 px-4 py-2 font-nexa-heavy text-sm text-slate-800">{track}</span>)}</div>
          <div className="mt-8 border-l-2 border-teal-600 pl-5"><p className="font-nexa-heavy text-sm text-slate-950">Industry-led courses</p><p className="mt-2 font-nexa-light text-sm leading-6 text-slate-600">Every course is led by an industry-leading specialist who brings current practice, real experience, and practical insight into the classroom.</p></div>
        </div>
      </div>
    </section>
  );
}

function DigitalServices() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div className="max-w-2xl"><p className="font-nexa-heavy text-xs uppercase tracking-[0.28em] text-teal-700">03 / Digital services</p><h2 className="mt-4 font-marcellus text-4xl leading-tight text-slate-950 sm:text-5xl">Creative support for the moments people remember.</h2><p className="mt-6 font-nexa-light leading-7 text-slate-600">Extend your team with a flexible creative partner. We bring strategy, craft, and production discipline to the content that carries your brand into the world.</p></div><img src="/images/design-small.jpg" alt="Creative design work" className="aspect-[16/7] w-full object-cover" /></div>
      <div className="mt-12 grid gap-4 md:grid-cols-2">{creativeServices.map(([title, description], index) => <article key={title} className="group border-t border-slate-300 py-6 transition hover:border-teal-700"><div className="flex items-start justify-between gap-6"><h3 className="font-nexa-heavy text-xl text-slate-950">{title}</h3><span className="font-marcellus text-2xl text-teal-700">0{index + 1}</span></div><p className="mt-3 max-w-md font-nexa-light leading-7 text-slate-600">{description}</p></article>)}</div>
    </section>
  );
}

export default function DigitalLabsPage() {
  return <><LabsHero /><SoftwareEngineering /><DigitalAcademy /><DigitalServices /><ContactCTA /></>;
}