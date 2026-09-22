'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';

const contactLinks = [
  { label: 'Email us', href: 'mailto:overbrimhq@gmail.com' },
  { label: 'WhatsApp', href: 'https://wa.me/2347035262610' },
  { label: 'Telegram', href: 'https://t.me/overbrimhq' },
];

export function ContactCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/meaogzwq', {
        method: 'POST',
        body: new FormData(event.currentTarget),
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      event.currentTarget.reset();
      setSubmissionStatus('success');
    } catch {
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-teal-800 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:py-28">
        <div>
          <p className="font-nexa-heavy text-xs uppercase tracking-[0.28em] text-teal-200">Let&apos;s work together</p>
          <h2 className="mt-4 max-w-lg font-marcellus text-4xl leading-tight sm:text-5xl">Start a Strategic Partnership.</h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-teal-50">Whether you need enterprise task automation, digital design, or full-scale software engineering, we are your safe space for growth and success.</p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
            {contactLinks.map((contact) => (
              <Link key={contact.href} href={contact.href} className="border-b border-teal-300/60 pb-1 transition hover:border-white hover:text-teal-100">
                {contact.label} <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5 bg-white p-6 text-slate-900 sm:grid-cols-2 sm:p-8">
          <input type="hidden" name="_subject" value="New Overbrim partnership enquiry" />
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-semibold">Name</label>
            <input id="name" name="name" type="text" required className="w-full border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-teal-700" />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold">Email</label>
            <input id="email" name="email" type="email" required className="w-full border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-teal-700" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="mb-2 block text-sm font-semibold">How can we help?</label>
            <textarea id="message" name="message" rows={5} required className="w-full resize-y border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-teal-700" />
          </div>
          <div className="sm:col-span-2 sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div aria-live="polite" className="text-xs leading-5 text-slate-500">
              {submissionStatus === 'success' && <p className="text-teal-700">Thank you. Your enquiry has been sent to the Overbrim team.</p>}
              {submissionStatus === 'error' && <p className="text-red-700">Something went wrong. Please try again or email us directly.</p>}
              {submissionStatus === 'idle' && <p>Your enquiry will be sent securely to the Overbrim team.</p>}
            </div>
            <button type="submit" disabled={isSubmitting} className="mt-4 w-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60 sm:mt-0 sm:w-auto">
              {isSubmitting ? 'Sending...' : 'Send enquiry'} <span aria-hidden="true">→</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}