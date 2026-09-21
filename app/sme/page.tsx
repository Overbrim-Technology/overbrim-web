import Link from 'next/link';
import { ContactCTA } from '../../components/ContactCTA';

const organizationBenefits = [
  ['Quality assurance by design', 'Layered review, calibration, and feedback loops help every annotation set meet the quality bar your model requires.'],
  ['Deep domain matching', 'We match projects with experts who understand the vocabulary, nuance, and edge cases of your industry.'],
  ['Secure project pipelines', 'Structured onboarding, controlled access, and clear project operations protect sensitive training data and expert work.'],
];

const applicationSteps = [
  ['Apply globally', 'Tell us about your location, professional background, domain knowledge, and the kinds of projects where you can contribute.'],
  ['Complete vetting', 'Our team reviews your experience, verifies relevant expertise, and uses practical assessments to understand your strengths.'],
  ['Get matched', 'When a suitable AI annotation, evaluation, or model-training project opens, we connect you with the right scope and team.'],
  ['Deliver with support', 'Clear briefs, quality guidance, and feedback help you do precise work and build a trusted track record in the network.'],
];

function SmeHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(110deg, rgba(4, 20, 25, 0.98), rgba(4, 20, 25, 0.72), rgba(4, 20, 25, 0.35)), url('/images/overbrim-sme.png')" }} />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36"><p className="font-nexa-heavy text-xs uppercase tracking-[0.3em] text-teal-300">Overbrim / SME Network</p><h1 className="mt-6 max-w-4xl font-marcellus text-6xl leading-[1.02] sm:text-7xl lg:text-8xl">Overbrim SME</h1><p className="mt-8 max-w-2xl font-nexa-light text-lg leading-8 text-slate-200 sm:text-xl">Precision AI Training by Global Domain Experts.</p><div className="mt-10 flex flex-wrap gap-4"><Link href="#organizations" className="rounded-full bg-teal-500 px-6 py-3.5 font-nexa-heavy text-sm text-slate-950 transition hover:bg-teal-300">For AI organizations</Link><Link href="#experts" className="rounded-full border border-white/40 px-6 py-3.5 font-nexa-heavy text-sm text-white transition hover:border-teal-300 hover:text-teal-200">Join as an expert</Link></div></div>
    </section>
  );
}

function ForOrganizations() {
  return (
    <section id="organizations" className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8 lg:py-28">
      <div><p className="font-nexa-heavy text-xs uppercase tracking-[0.28em] text-teal-700">01 / For AI organizations</p><h2 className="mt-4 font-marcellus text-4xl leading-tight text-slate-950 sm:text-5xl">Human intelligence for better models.</h2><p className="mt-6 font-nexa-light leading-7 text-slate-600">AI systems become more useful when the data behind them is accurate, contextual, and carefully evaluated. Overbrim SME gives AI organizations access to a global network of specialists and the operating discipline to turn their knowledge into dependable training data.</p><Link href="#contact" className="mt-8 inline-block font-nexa-heavy text-sm text-teal-700 hover:text-teal-900">Design your expert pipeline →</Link></div>
      <div className="space-y-4">{organizationBenefits.map(([title, description], index) => <article key={title} className="border border-slate-200 bg-white p-6"><div className="flex gap-5"><span className="font-marcellus text-2xl text-teal-700">0{index + 1}</span><div><h3 className="font-nexa-heavy text-lg text-slate-950">{title}</h3><p className="mt-2 font-nexa-light text-sm leading-6 text-slate-600">{description}</p></div></div></article>)}</div>
    </section>
  );
}

function ExpertFunnel() {
  return (
    <section id="experts" className="bg-[#e5f0ec]"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28"><div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="font-nexa-heavy text-xs uppercase tracking-[0.28em] text-teal-700">02 / Join the network</p><h2 className="mt-4 font-marcellus text-4xl leading-tight text-slate-950 sm:text-5xl">Your expertise can shape what AI understands.</h2><p className="mt-6 font-nexa-light leading-7 text-slate-600">We are building a trusted international network for professionals who want meaningful, flexible work at the intersection of their domain and emerging technology.</p><a href="https://bit.ly/overbrim-experts-eoi" target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-full bg-slate-950 px-6 py-3.5 font-nexa-heavy text-sm text-white transition hover:bg-teal-700">Apply as an SME <span className="ml-2">↗</span></a></div><div className="grid gap-3 sm:grid-cols-2">{applicationSteps.map(([title, description], index) => <article key={title} className="border border-teal-900/10 bg-white/70 p-6"><span className="font-nexa-heavy text-xs text-teal-700">STEP 0{index + 1}</span><h3 className="mt-8 font-nexa-heavy text-lg text-slate-950">{title}</h3><p className="mt-3 font-nexa-light text-sm leading-6 text-slate-600">{description}</p></article>)}</div></div></div></section>
  );
}

export default function SmePage() {
  return <><SmeHero /><ForOrganizations /><ExpertFunnel /><ContactCTA /></>;
}