import Link from 'next/link';
import { ContactCTA } from '../../components/ContactCTA';

const partnerPoints = [
  ['Identify the drag', 'We map repetitive, administrative, and specialized work that is slowing your core team down.'],
  ['Match with precision', 'We connect you with a vetted VA whose skills, working style, and availability fit the real need.'],
  ['Scale with confidence', 'You gain dependable operational capacity while Overbrim supports the relationship, workflow, and continuity.'],
];

const talentSteps = [
  ['Onboard', 'Share your experience, tools, availability, and the kinds of organizations or tasks where you do your best work.'],
  ['Assess', 'Complete practical reviews that help us understand your communication, judgment, organization, and specialist strengths.'],
  ['Assign', 'We introduce you to opportunities that fit your profile, then help establish a clear scope and working rhythm.'],
];

function VaHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white"><div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(105deg, rgba(3, 20, 24, 0.97), rgba(3, 20, 24, 0.68), rgba(3, 20, 24, 0.3)), url('/images/online-services-small.jpg')" }} /><div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36"><p className="font-nexa-heavy text-xs uppercase tracking-[0.3em] text-teal-300">Overbrim / VA Hub</p><h1 className="mt-6 max-w-4xl font-marcellus text-6xl leading-[1.02] sm:text-7xl lg:text-8xl">Overbrim VA Hub</h1><p className="mt-8 max-w-2xl font-nexa-light text-lg leading-8 text-slate-200 sm:text-xl">Seamless Operational Excellence and Strategic Task Delegation.</p><div className="mt-10 flex flex-wrap gap-4"><Link href="#organizations" className="rounded-full bg-teal-500 px-6 py-3.5 font-nexa-heavy text-sm text-slate-950 transition hover:bg-teal-300">Partner for success</Link><Link href="#talent" className="rounded-full border border-white/40 px-6 py-3.5 font-nexa-heavy text-sm text-white transition hover:border-teal-300 hover:text-teal-200">Join the talent pool</Link></div></div></section>
  );
}

function PartnerForSuccess() {
  return (
    <section id="organizations" className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8 lg:py-28"><div><p className="font-nexa-heavy text-xs uppercase tracking-[0.28em] text-teal-700">01 / For organizations</p><h2 className="mt-4 font-marcellus text-4xl leading-tight text-slate-950 sm:text-5xl">A strategic partner for the work behind your work.</h2><p className="mt-6 font-nexa-light leading-7 text-slate-600">Your VA should create focus, not another layer of management. Overbrim handles sourcing and matching so third-party organizations can delegate redundant tasks, extend their capacity, and keep their internal teams focused on the work only they can do.</p><Link href="#contact" className="mt-8 inline-block font-nexa-heavy text-sm text-teal-700 hover:text-teal-900">Find your operational match →</Link></div><div className="space-y-4">{partnerPoints.map(([title, description], index) => <article key={title} className="flex gap-5 border-b border-slate-200 py-5"><span className="font-marcellus text-2xl text-teal-700">0{index + 1}</span><div><h3 className="font-nexa-heavy text-lg text-slate-950">{title}</h3><p className="mt-2 font-nexa-light leading-6 text-slate-600">{description}</p></div></article>)}</div></section>
  );
}

function TalentPool() {
  return (
    <section id="talent" className="bg-[#e5f0ec]"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8 lg:py-28"><div className="order-2 lg:order-1"><img src="/images/online-services-small.jpg" alt="Virtual assistant working online" className="aspect-[4/3] w-full object-cover" /></div><div className="order-1 lg:order-2"><p className="font-nexa-heavy text-xs uppercase tracking-[0.28em] text-teal-700">02 / For applicants</p><h2 className="mt-4 font-marcellus text-4xl leading-tight text-slate-950 sm:text-5xl">Join a talent pool built around trust.</h2><p className="mt-6 font-nexa-light leading-7 text-slate-600">The Overbrim VA Hub is an internal network for capable people who bring care, initiative, and consistency to remote work. We help you move from a strong application to the right assignment.</p><div className="mt-8 space-y-4">{talentSteps.map(([title, description], index) => <div key={title} className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-700 font-nexa-heavy text-xs text-white">{index + 1}</span><div><h3 className="font-nexa-heavy text-base text-slate-950">{title}</h3><p className="mt-1 font-nexa-light text-sm leading-6 text-slate-600">{description}</p></div></div>)}</div><Link href="#contact" className="mt-8 inline-block rounded-full bg-slate-950 px-6 py-3.5 font-nexa-heavy text-sm text-white transition hover:bg-teal-700">Become a VA <span className="ml-2">↗</span></Link></div></div></section>
  );
}

export default function VaPage() {
  return <><VaHero /><PartnerForSuccess /><TalentPool /><ContactCTA /></>;
}