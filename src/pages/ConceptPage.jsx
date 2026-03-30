import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Cpu,
  Database,
  Gauge,
  Headphones,
  Layers,
  Mic,
  Shield,
  Sparkles,
  Volume2,
  Workflow,
} from 'lucide-react'
import Reveal from '../components/Reveal'

const workflowSteps = [
  'User speaks in any language',
  'Speech → text',
  'AI understands intent',
  'Dynamic questions',
  'BANT evaluation',
  'Lead scoring',
]

const bant = [
  { key: 'Budget', desc: 'Spend capacity and pricing fit.' },
  { key: 'Authority', desc: 'Decision-maker or influencer path.' },
  { key: 'Need', desc: 'Pain, urgency, and product match.' },
  { key: 'Timeline', desc: 'When they plan to buy or pilot.' },
]

const archNodes = [
  { label: 'Voice Input', icon: Mic },
  { label: 'STT', icon: Volume2 },
  { label: 'AI', icon: Brain },
  { label: 'Logic', icon: Cpu },
  { label: 'Response', icon: Headphones },
  { label: 'Output', icon: BarChart3 },
]

const techStack = [
  { name: 'AWS Transcribe', icon: Mic },
  { name: 'AWS Lambda + LLM', icon: Cloud },
  { name: 'Amazon Polly', icon: Volume2 },
  { name: 'DynamoDB', icon: Database },
  { name: 'React + Node.js', icon: Layers },
]

const demoSteps = ['Form', 'AI Call', 'Conversation', 'Processing', 'Result']

const impactMetrics = [
  { range: '+20–30%', label: 'productivity' },
  { range: '+15–25%', label: 'lead quality' },
  { range: '+10–20%', label: 'conversions' },
]

function ConceptPage() {
  return (
    <div>
      <section className="slide-section relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_20%_0%,rgba(230,201,168,0.12),transparent_50%)]" />
        <div className="section-container pb-16 pt-12 md:pb-20 md:pt-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-saarthi-gold/90">
              Lead Saarthi
            </p>
            <h1 className="heading-display mt-4 max-w-4xl text-4xl leading-tight md:text-6xl">
              How Lead Saarthi Works
            </h1>
            <p className="mt-6 max-w-2xl font-sans text-lg text-saarthi-muted">
              Multilingual Voice AI Lead Qualifier — from first utterance to a scored, routed lead.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Workflow */}
      <section className="slide-section">
        <div className="section-container">
          <Reveal>
            <h2 className="heading-display text-3xl md:text-4xl">Workflow</h2>
            <p className="mt-3 max-w-2xl font-sans text-saarthi-muted">
              Six stages from voice to a qualification you can trust.
            </p>
          </Reveal>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workflowSteps.map((step, i) => (
              <Reveal key={step} delay={i * 60}>
                <li className="card flex gap-4 text-left">
                  <span className="font-serif text-2xl font-semibold text-saarthi-gold/80">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-sans text-saarthi-cream/90">{step}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* BANT */}
      <section className="slide-section bg-gradient-to-b from-transparent via-saarthi-surface/30 to-transparent">
        <div className="section-container">
          <Reveal>
            <h2 className="heading-display text-3xl md:text-4xl">BANT Framework</h2>
            <p className="mt-3 max-w-2xl font-sans text-saarthi-muted">
              The model scores each dimension during the conversation — not as a form, but as
              dialogue.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {bant.map((item, i) => (
              <Reveal key={item.key} delay={i * 70}>
                <article className="card text-left">
                  <Gauge className="h-5 w-5 text-saarthi-gold" />
                  <h3 className="mt-4 font-serif text-xl text-saarthi-cream">{item.key}</h3>
                  <p className="mt-2 font-sans text-sm text-saarthi-muted">{item.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="slide-section">
        <div className="section-container">
          <Reveal>
            <h2 className="heading-display text-3xl md:text-4xl">System Architecture</h2>
            <p className="mt-3 max-w-2xl font-sans text-saarthi-muted">
              Voice in, structured intelligence out — built for scale and compliance posture.
            </p>
          </Reveal>
          <Reveal className="mt-12">
            <div className="card overflow-x-auto border-saarthi-gold/20 bg-white/[0.03] p-6 md:p-10">
              <div className="flex min-w-[640px] flex-wrap items-center justify-center gap-2 md:min-w-0 md:flex-nowrap md:gap-3">
                {archNodes.map((node, i) => (
                  <div key={node.label} className="flex items-center">
                    <div className="flex flex-col items-center gap-2 rounded-xl border border-saarthi-gold/20 bg-saarthi-bg/80 px-4 py-3 md:px-5">
                      <node.icon className="h-5 w-5 text-saarthi-gold" />
                      <span className="whitespace-nowrap font-sans text-xs font-medium text-saarthi-cream md:text-sm">
                        {node.label}
                      </span>
                    </div>
                    {i < archNodes.length - 1 && (
                      <ChevronRight className="mx-1 h-5 w-5 shrink-0 text-saarthi-gold/40" />
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {['Scalable', 'Secure', 'Reliable'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-saarthi-gold/25 bg-saarthi-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-saarthi-gold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tech stack */}
      <section className="slide-section bg-gradient-to-b from-transparent via-saarthi-surface/25 to-transparent">
        <div className="section-container">
          <Reveal>
            <h2 className="heading-display text-3xl md:text-4xl">Tech Stack</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((t, i) => (
              <Reveal key={t.name} delay={i * 50}>
                <article className="card flex items-center gap-4 text-left">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-saarthi-gold/20 bg-saarthi-gold/5">
                    <t.icon className="h-6 w-6 text-saarthi-gold" />
                  </div>
                  <span className="font-sans font-medium text-saarthi-cream">{t.name}</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Demo flow */}
      <section className="slide-section">
        <div className="section-container">
          <Reveal>
            <h2 className="heading-display text-3xl md:text-4xl">Demo Flow</h2>
            <p className="mt-3 font-sans text-saarthi-muted">From capture to outcome — one story arc.</p>
          </Reveal>
          <Reveal className="mt-14">
            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-4">
              {demoSteps.map((label, i) => (
                <div key={label} className="flex flex-col items-center md:flex-row md:items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-saarthi-gold/35 bg-gradient-to-b from-saarthi-gold/15 to-transparent font-serif text-sm font-semibold text-saarthi-cream shadow-glow-sm md:h-24 md:w-24 md:text-base">
                    {label}
                  </div>
                  {i < demoSteps.length - 1 && (
                    <ArrowRight className="hidden h-6 w-6 text-saarthi-gold/50 md:block" />
                  )}
                  {i < demoSteps.length - 1 && (
                    <div className="h-8 w-px bg-saarthi-gold/30 md:hidden" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Impact */}
      <section className="slide-section border-b-0">
        <div className="section-container">
          <Reveal>
            <h2 className="heading-display text-3xl md:text-4xl">Impact</h2>
            <p className="mt-3 font-sans text-saarthi-muted">Directional outcomes for lean sales teams.</p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {impactMetrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 80}>
                <article className="card text-center">
                  <p className="font-serif text-4xl font-semibold text-saarthi-gold md:text-5xl">
                    {m.range}
                  </p>
                  <p className="mt-2 font-sans text-sm uppercase tracking-widest text-saarthi-muted">
                    {m.label}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <div className="card flex flex-wrap items-center justify-center gap-6 border-saarthi-gold/15 bg-saarthi-gold/[0.06] py-8">
              <CheckCircle2 className="h-6 w-6 text-saarthi-gold" />
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-saarthi-muted">
                <span className="flex items-center gap-2">
                  <Workflow className="h-4 w-4 text-saarthi-gold" /> Pipeline-ready
                </span>
                <span className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-saarthi-gold" /> Enterprise-friendly path
                </span>
                <span className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-saarthi-gold" /> Lead Saarthi
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

export default ConceptPage
