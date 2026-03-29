import { Link } from 'react-router-dom'
import {
  AudioLines,
  BadgeCheck,
  BookCheck,
  CalendarClock,
  CheckCircle2,
  Languages,
  PhoneCall,
  Sparkles,
  Workflow,
} from 'lucide-react'

const steps = [
  'User shows interest (form / call / ad click)',
  'AI initiates voice conversation',
  'Asks smart questions (Budget, Need, etc.)',
  'Scores lead (0-10)',
  'Sends hot leads to sales',
]

const features = [
  { label: 'Multilingual Voice AI', icon: Languages },
  { label: 'Real-time Lead Scoring', icon: BadgeCheck },
  { label: 'BANT-based Qualification', icon: BookCheck },
  { label: 'AWS-powered pipeline', icon: Workflow },
  { label: 'Optional Appointment Booking', icon: CalendarClock },
]

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.35),_rgba(2,6,23,0)_60%)]" />
        <div className="section-container grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div className="animate-fade-up">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-300/30 bg-indigo-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-200">
              <Sparkles className="h-4 w-4" />
              Hackathon Demo
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              IndiQualify - AI Voice Lead Qualification System
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-300">
              Filter, qualify, and convert leads smarter using multilingual AI conversations
            </p>
            <div className="mt-8">
              <Link
                to="/concept"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:scale-[1.03]"
              >
                View Concept
              </Link>
            </div>
          </div>
          <div className="card animate-fade-in">
            <div className="mb-6 inline-flex rounded-xl bg-indigo-300/15 p-3 text-indigo-200">
              <PhoneCall className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-semibold text-white">AI Voice Assistant</h2>
            <p className="mt-3 text-slate-300">
              A simple visual placeholder for the AI calling experience, focused on smart, natural
              voice conversations.
            </p>
            <div className="mt-6 space-y-3">
              {['Hindi + English support', 'Live lead intent detection', 'CRM-ready handoff'].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="section-container">
        <h2 className="text-3xl font-semibold text-white">The Problem</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            'Sales teams waste time on unqualified leads',
            'Cold calls feel spammy and reduce engagement',
            'Low conversion rates hurt SMB growth',
          ].map((item) => (
            <article key={item} className="card animate-fade-up">
              <p className="text-slate-200">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="solution" className="section-container pt-0">
        <h2 className="text-3xl font-semibold text-white">Our Solution</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            'AI voice agent that talks to inbound leads',
            'Filters and qualifies leads automatically',
            'Uses structured conversation (BANT framework)',
            'Passes only high-quality leads to sales teams',
          ].map((item) => (
            <article key={item} className="card animate-fade-up">
              <p className="text-slate-200">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="section-container pt-0">
        <h2 className="text-3xl font-semibold text-white">How It Works</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <article key={step} className="card animate-fade-up">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200 text-sm font-bold text-slate-900">
                {index + 1}
              </div>
              <p className="text-sm text-slate-200">{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="features" className="section-container pt-0">
        <h2 className="text-3xl font-semibold text-white">Features</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature) => (
            <article key={feature.label} className="card animate-fade-up">
              <feature.icon className="h-6 w-6 text-indigo-200" />
              <p className="mt-4 text-sm text-slate-200">{feature.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-container pt-0">
        <div className="card flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-white">See How It Works</h2>
            <p className="mt-2 text-slate-300">
              Explore the concept flow, framework logic, and lead output structure.
            </p>
          </div>
          <Link
            to="/concept"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:scale-[1.03]"
          >
            <AudioLines className="h-4 w-4" />
            Go to Concept Page
          </Link>
        </div>
      </section>
    </>
  )
}

export default HomePage
