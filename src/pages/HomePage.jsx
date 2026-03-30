import { Link } from 'react-router-dom'
import { Bot, Headphones, Mic, Sparkles } from 'lucide-react'
import Reveal from '../components/Reveal'

const failureCards = [
  {
    title: 'CRMs',
    sub: 'Manual filtering',
    body: 'Teams still triage lists by hand. No voice context.',
  },
  {
    title: 'Chatbots',
    sub: 'Text-only',
    body: 'Miss tone, urgency, and customers who prefer to speak.',
  },
  {
    title: 'Call Systems',
    sub: 'No understanding',
    body: 'Route calls without intent — not qualification intelligence.',
  },
]

const solutionSteps = [
  { n: 1, label: 'Initiate', detail: 'Voice-first contact on warm inbound interest.' },
  { n: 2, label: 'Question', detail: 'Dynamic prompts aligned to your playbook.' },
  { n: 3, label: 'Understand', detail: 'Intent and nuance across languages.' },
  { n: 4, label: 'Score', detail: 'Structured signals mapped to a clear score.' },
  { n: 5, label: 'Filter', detail: 'Only qualified conversations reach your team.' },
]

function HomePage() {
  return (
    <>
      {/* Hero — pitch slide */}
      <section className="slide-section relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_30%_20%,rgba(230,201,168,0.18),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_60%,rgba(17,28,51,0.9),transparent_50%)]" />
        <div className="section-container grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <h1 className="heading-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-[4.25rem]">
              LEAD SAARTHI
            </h1>
            <p className="mt-6 max-w-xl font-sans text-lg font-medium text-saarthi-gold/95 md:text-xl">
              Multilingual Voice AI Lead Qualifier
            </p>
            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-saarthi-muted md:text-lg">
              Transforming sales efficiency with intelligent, multilingual voice-based lead
              qualification
            </p>
            <div className="mt-10">
              <Link to="/concept" className="btn-primary">
                Explore Concept
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120} className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-saarthi-gold/20 via-transparent to-saarthi-goldDeep/10 blur-2xl" />
              <div className="card relative flex flex-col items-center gap-8 p-10 text-center">
                <div className="flex items-end justify-center gap-6">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-saarthi-gold/25 bg-saarthi-gold/10 shadow-glow-sm">
                    <Mic className="h-12 w-12 text-saarthi-gold" strokeWidth={1.25} />
                  </div>
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border border-saarthi-gold/30 bg-gradient-to-b from-white/[0.08] to-transparent shadow-glow">
                    <Bot className="h-14 w-14 text-saarthi-cream" strokeWidth={1} />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-saarthi-muted">
                  <Headphones className="h-4 w-4 text-saarthi-gold" />
                  <span>AI + voice pipeline</span>
                  <Sparkles className="ml-1 h-4 w-4 text-saarthi-goldDeep" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="slide-section">
        <div className="section-container">
          <Reveal>
            <h2 className="heading-display max-w-3xl text-4xl md:text-5xl">The Problem</h2>
            <p className="mt-4 max-w-2xl font-sans text-lg text-saarthi-muted">
              Indian sales teams juggle Hindi, English, and regional languages — static tools cannot
              keep up.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              { k: '40–50% time wasted', d: 'On low-intent conversations' },
              { k: '3–4 hours lost daily', d: 'Per rep on manual triage' },
              { k: '₹25K monthly loss', d: 'Estimated opportunity cost (SMB)' },
            ].map((m, i) => (
              <Reveal key={m.k} delay={i * 80}>
                <article className="card text-left">
                  <p className="font-serif text-2xl font-semibold text-saarthi-gold md:text-3xl">
                    {m.k}
                  </p>
                  <p className="mt-3 font-sans text-sm text-saarthi-muted">{m.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 max-w-3xl">
            <p className="font-sans text-base leading-relaxed text-saarthi-cream/85">
              Most stacks assume one language and text-first engagement. That gap leaves revenue on
              the table — especially where customers expect to{' '}
              <span className="text-saarthi-gold">talk</span>, not type.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why current systems fail */}
      <section className="slide-section bg-gradient-to-b from-transparent via-saarthi-surface/40 to-transparent">
        <div className="section-container">
          <Reveal>
            <h2 className="heading-display max-w-3xl text-4xl md:text-5xl">
              Why Current Systems Fail
            </h2>
            <p className="mt-3 font-sans text-saarthi-muted">No multilingual intelligence</p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {failureCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <article className="card h-full text-left">
                  <p className="font-serif text-xl text-saarthi-cream">{c.title}</p>
                  <p className="mt-1 text-sm font-medium text-saarthi-gold">{c.sub}</p>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-saarthi-muted">
                    {c.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solution approach */}
      <section className="slide-section">
        <div className="section-container">
          <Reveal>
            <h2 className="heading-display max-w-3xl text-4xl md:text-5xl">
              Our Solution Approach
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-start">
            <div className="relative space-y-0 border-l border-saarthi-gold/25 pl-8 md:pl-10">
              {solutionSteps.map((s, i) => (
                <Reveal key={s.n} delay={i * 70}>
                  <div className="relative pb-12 last:pb-0">
                    <span className="absolute -left-[41px] top-1 flex h-8 w-8 items-center justify-center rounded-full border border-saarthi-gold/40 bg-saarthi-bg font-serif text-sm font-semibold text-saarthi-gold md:-left-[45px]">
                      {s.n}
                    </span>
                    <p className="font-serif text-2xl text-saarthi-cream">{s.label}</p>
                    <p className="mt-2 max-w-lg font-sans text-sm leading-relaxed text-saarthi-muted">
                      {s.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200} className="lg:pt-4">
              <blockquote className="card max-w-sm border-saarthi-gold/25 bg-gradient-to-br from-saarthi-gold/10 to-transparent p-8 text-left font-serif text-2xl leading-snug text-saarthi-cream md:text-3xl">
                Talk to everyone →{' '}
                <span className="text-saarthi-gold">Talk to the right ones</span>
              </blockquote>
            </Reveal>
          </div>
          <Reveal className="mt-16 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md font-sans text-saarthi-muted">
              See architecture, BANT flow, and demo path — built for presentation clarity.
            </p>
            <Link to="/concept" className="btn-primary">
              Explore Concept
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default HomePage
