import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BarChart3,
  Brain,
  CalendarDays,
  CheckCircle2,
  Cloud,
  Database,
  Gauge,
  Layers,
  Mic,
  PhoneCall,
  Shield,
  Sparkles,
  Volume2,
} from 'lucide-react'
import Reveal from '../components/Reveal'

const workflow = [
  'User speaks in any language',
  'Speech-to-Text (STT)',
  'AI understands intent',
  'Dynamic BANT questions',
  'BANT evaluation',
  'Lead scoring & routing',
]

const bant = [
  { k: 'Budget', icon: Gauge, desc: 'Can they afford the solution?' },
  { k: 'Authority', icon: Brain, desc: 'Who decides and influences?' },
  { k: 'Need', icon: Sparkles, desc: 'What pain and fit are indicated?' },
  { k: 'Timeline', icon: CalendarDays, desc: 'When do they plan to buy?' },
]

const architecture = [
  { label: 'Voice Input', icon: Mic },
  { label: 'STT', icon: Volume2 },
  { label: 'Bedrock', icon: Brain },
  { label: 'Lambda', icon: Layers },
  { label: 'Logic', icon: Gauge },
  { label: 'Polly', icon: Volume2 },
  { label: 'Output', icon: BarChart3 },
]

const demoFlow = ['Form', 'AI Call', 'Conversation', 'Processing', 'Result']

const impact = [
  { range: '+20–30%', label: 'productivity' },
  { range: '+15–25%', label: 'lead quality' },
  { range: '+10–20%', label: 'conversions' },
]

const team = [
  { name: 'Rishika - 1MS24AD052', role: 'Backend + AWS', icon: Cloud },
  { name: 'Ankit - 1MS24AD009', role: 'Frontend', icon: Layers },
  { name: 'Rishi - 1MS24AD051', role: 'AI Logic', icon: Brain },
  { name: 'Shivam - 1MS24MD040', role: 'Integration', icon: PhoneCall },
]

function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-saarthi-gold/25 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-saarthi-muted">
      {children}
    </span>
  )
}

function TimelineSteps() {
  return (
    <div className="mt-10 grid gap-5 lg:grid-cols-3">
      {workflow.map((step, i) => (
        <Reveal key={step} delay={i * 60}>
          <div className="card text-left p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-saarthi-gold/35 bg-saarthi-gold/10 font-serif text-sm font-semibold text-saarthi-gold">
                {i + 1}
              </div>
              <div>
                <p className="font-serif text-xl font-semibold text-saarthi-cream">
                  {step.split(' ')[0]}
                </p>
                <p className="mt-2 font-sans text-sm leading-relaxed text-saarthi-muted">
                  {step}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

function ArchitectureFlow() {
  return (
    <div className="card border-saarthi-gold/20 bg-white/[0.03] p-6 md:p-10">
      <div className="flex flex-col gap-5 lg:flex-row lg:flex-wrap lg:gap-4">
        {architecture.map((n, i) => (
          <div key={n.label} className="flex items-center justify-start gap-3 lg:basis-[30%]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-saarthi-gold/20 bg-saarthi-gold/5">
              <n.icon className="h-5 w-5 text-saarthi-gold" />
            </div>
            <div className="min-w-0">
              <p className="font-serif text-base font-semibold text-saarthi-cream">{n.label}</p>
              {i < architecture.length - 1 && (
                <div className="hidden items-center gap-2 text-saarthi-gold/70 lg:flex">
                  <ArrowRight className="h-4 w-4" />
                </div>
              )}
            </div>
            {i < architecture.length - 1 && (
              <div className="flex flex-1 justify-center lg:hidden">
                <ArrowRight className="h-4 w-4 text-saarthi-gold/60" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        {['Scalable', 'Secure', 'Real-time', 'Serverless'].map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </div>
  )
}

function CircularDemoFlow() {
  return (
    <div className="mt-12">
      <div className="relative mx-auto max-w-3xl">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_40%,rgba(230,201,168,0.10),transparent_60%)]" />
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {demoFlow.map((label, i) => (
            <Reveal key={label} delay={i * 70}>
              <div className="flex items-center gap-4 rounded-2xl border border-saarthi-gold/15 bg-white/[0.03] p-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-saarthi-gold/30 bg-saarthi-gold/10 font-serif text-sm font-semibold text-saarthi-cream">
                  {i + 1}
                </div>
                <div>
                  <p className="font-serif text-lg font-semibold text-saarthi-cream">{label}</p>
                  <p className="mt-1 font-sans text-sm text-saarthi-muted">
                    {i === 0 && 'Capture intent'}
                    {i === 1 && 'Voice-first qualification'}
                    {i === 2 && 'BANT dialogue'}
                    {i === 3 && 'Scoring + evaluation'}
                    {i === 4 && 'Human routing / scheduling'}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-10 card p-8 border-saarthi-gold/25 bg-gradient-to-br from-saarthi-gold/10 to-transparent text-left">
        <p className="font-serif text-2xl leading-snug text-saarthi-cream">
          System filters, connects, or schedules based on lead quality.
        </p>
        <p className="mt-3 font-sans text-sm leading-relaxed text-saarthi-muted">
          Instead of routing every call to a rep, Lead Saarthi keeps your pipeline clean and your team focused.
        </p>
      </div>
    </div>
  )
}

export default function ConceptPage() {
  return (
    <div className="pb-16">
      <section className="slide-section relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_20%_-10%,rgba(230,201,168,0.12),transparent_55%)]" />
        <div className="section-container pb-10 pt-14 md:pb-16 md:pt-16">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <Tag>LEAD SAARTHI</Tag>
              <Tag>Team: AGENTX</Tag>
              <Tag>Track: Voice AI</Tag>
            </div>

            <h1 className="heading-display mt-6 text-4xl leading-tight md:text-6xl">
              How Lead Saarthi Works
            </h1>
            <p className="mt-5 max-w-3xl font-sans text-lg text-saarthi-muted md:text-xl">
              Multilingual Voice AI Lead Qualifier built as an <span className="text-saarthi-cream font-semibold">AI Lead Qualification System</span> —
              an AI Lead Qualifier Engine that talks, understands intent, and qualifies inbound prospects in real time.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-saarthi-gold/25 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-saarthi-muted">
                <CheckCircle2 className="h-4 w-4 text-saarthi-gold" />
                BANT dialogue, not static forms
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-saarthi-gold/25 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-saarthi-muted">
                <Shield className="h-4 w-4 text-saarthi-gold" />
                Route only quality leads
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-saarthi-gold/25 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-saarthi-muted">
                <Sparkles className="h-4 w-4 text-saarthi-gold" />
                Real-time scoring
              </span>
            </div>

            <div className="mt-10">
              <Link to="/" className="btn-primary">
                Back to Landing
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="slide-section">
        <div className="section-container">
          <Reveal>
            <h2 className="heading-display text-3xl md:text-4xl">How It Works</h2>
            <p className="mt-3 max-w-2xl font-sans text-base text-saarthi-muted">
              A timeline-style workflow from voice input to a scored lead outcome.
            </p>
          </Reveal>
          <TimelineSteps />
        </div>
      </section>

      {/* BANT */}
      <section className="slide-section bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="section-container">
          <Reveal>
            <h2 className="heading-display text-3xl md:text-4xl">BANT Framework</h2>
            <p className="mt-3 max-w-2xl font-sans text-base text-saarthi-muted">
              Budget, Authority, Need, Timeline — captured during conversation and translated into score signals.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {bant.map((b) => (
              <Reveal key={b.k} delay={b.k.length * 20}>
                <article className="card text-left">
                  <b.icon className="h-6 w-6 text-saarthi-gold" />
                  <h3 className="mt-4 font-serif text-xl font-semibold text-saarthi-cream">{b.k}</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-saarthi-muted">{b.desc}</p>
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
            <p className="mt-3 max-w-2xl font-sans text-base text-saarthi-muted">
              Voice → Transcribe → Bedrock → Lambda → Logic → Polly → Output
            </p>
          </Reveal>
          <Reveal className="mt-2">
            <ArchitectureFlow />
          </Reveal>
        </div>
      </section>

      {/* Tech stack */}
      <section className="slide-section bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="section-container">
          <Reveal>
            <h2 className="heading-display text-3xl md:text-4xl">Tech Stack</h2>
            <p className="mt-3 max-w-2xl font-sans text-base text-saarthi-muted">
              Built for production-style voice qualification with scalable AWS components.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <Reveal delay={30}>
              <article className="card text-left">
                <div className="flex items-center gap-3">
                  <Mic className="h-5 w-5 text-saarthi-gold" />
                  <h3 className="font-serif text-xl font-semibold text-saarthi-cream">Voice Layer</h3>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <Volume2 className="mt-0.5 h-4 w-4 text-saarthi-gold" />
                    <div>
                      <p className="font-sans text-sm font-semibold text-saarthi-cream">Amazon Transcribe</p>
                      <p className="mt-1 font-sans text-xs text-saarthi-muted">Speech-to-text for multilingual calls.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Volume2 className="mt-0.5 h-4 w-4 text-saarthi-gold" />
                    <div>
                      <p className="font-sans text-sm font-semibold text-saarthi-cream">Amazon Polly</p>
                      <p className="mt-1 font-sans text-xs text-saarthi-muted">Text-to-speech responses in natural tone.</p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={70}>
              <article className="card text-left">
                <div className="flex items-center gap-3">
                  <Brain className="h-5 w-5 text-saarthi-gold" />
                  <h3 className="font-serif text-xl font-semibold text-saarthi-cream">AI & Intelligence</h3>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <Cloud className="mt-0.5 h-4 w-4 text-saarthi-gold" />
                    <div>
                      <p className="font-sans text-sm font-semibold text-saarthi-cream">Amazon Bedrock (Claude)</p>
                      <p className="mt-1 font-sans text-xs text-saarthi-muted">LLM reasoning and structured extraction.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Cloud className="mt-0.5 h-4 w-4 text-saarthi-gold" />
                    <div>
                      <p className="font-sans text-sm font-semibold text-saarthi-cream">LLM API</p>
                      <p className="mt-1 font-sans text-xs text-saarthi-muted">Fast question generation & scoring.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Cloud className="mt-0.5 h-4 w-4 text-saarthi-gold" />
                    <div>
                      <p className="font-sans text-sm font-semibold text-saarthi-cream">AWS Lambda</p>
                      <p className="mt-1 font-sans text-xs text-saarthi-muted">Serverless orchestration for the dialogue pipeline.</p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={110}>
              <article className="card text-left">
                <div className="flex items-center gap-3">
                  <PhoneCall className="h-5 w-5 text-saarthi-gold" />
                  <h3 className="font-serif text-xl font-semibold text-saarthi-cream">Call System</h3>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <PhoneCall className="mt-0.5 h-4 w-4 text-saarthi-gold" />
                    <div>
                      <p className="font-sans text-sm font-semibold text-saarthi-cream">Amazon Connect</p>
                      <p className="mt-1 font-sans text-xs text-saarthi-muted">Handles calls and transfers qualified outcomes to reps.</p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={150}>
              <article className="card text-left">
                <div className="flex items-center gap-3">
                  <Database className="h-5 w-5 text-saarthi-gold" />
                  <h3 className="font-serif text-xl font-semibold text-saarthi-cream">Database</h3>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <Database className="mt-0.5 h-4 w-4 text-saarthi-gold" />
                    <div>
                      <p className="font-sans text-sm font-semibold text-saarthi-cream">DynamoDB</p>
                      <p className="mt-1 font-sans text-xs text-saarthi-muted">Stores scores, signals, and routing state.</p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={190}>
              <article className="card text-left lg:col-span-2">
                <div className="flex items-center gap-3">
                  <Layers className="h-5 w-5 text-saarthi-gold" />
                  <h3 className="font-serif text-xl font-semibold text-saarthi-cream">Frontend</h3>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <Layers className="mt-0.5 h-4 w-4 text-saarthi-gold" />
                    <div>
                      <p className="font-sans text-sm font-semibold text-saarthi-cream">React + AWS Amplify</p>
                      <p className="mt-1 font-sans text-xs text-saarthi-muted">Pitch-ready UI for lead capture and operator workflows.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="mt-0.5 h-4 w-4 text-saarthi-gold" />
                    <div>
                      <p className="font-sans text-sm font-semibold text-saarthi-cream">Secure handoff</p>
                      <p className="mt-1 font-sans text-xs text-saarthi-muted">Privacy-first routing with role-aware access patterns.</p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Demo flow */}
      <section className="slide-section">
        <div className="section-container">
          <Reveal>
            <h2 className="heading-display text-3xl md:text-4xl">Demo Flow</h2>
            <p className="mt-3 max-w-2xl font-sans text-base text-saarthi-muted">
              Form → AI Call → Conversation → Processing → Result
            </p>
          </Reveal>
          <CircularDemoFlow />
        </div>
      </section>

      {/* Impact */}
      <section className="slide-section bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="section-container">
          <Reveal>
            <h2 className="heading-display text-3xl md:text-4xl">Impact</h2>
            <p className="mt-3 max-w-2xl font-sans text-base text-saarthi-muted">
              Clear outcomes for sales teams: more productivity, better lead quality, higher conversions.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {impact.map((m, i) => (
              <Reveal key={m.label} delay={i * 80}>
                <article className="card text-center p-8">
                  <p className="font-serif text-4xl font-semibold text-saarthi-gold">{m.range}</p>
                  <p className="mt-3 font-sans text-sm uppercase tracking-widest text-saarthi-muted">
                    {m.label}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <div className="card border-saarthi-gold/25 bg-gradient-to-br from-saarthi-gold/10 to-transparent p-8">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div className="max-w-xl">
                  <p className="font-serif text-2xl font-semibold text-saarthi-cream">
                    Lead Saarthi is not replacing humans — it removes repetitive qualification work.
                  </p>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-saarthi-muted">
                    Humans stay in the loop for final decisions, while the engine scores intent and routes only qualified outcomes.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center rounded-2xl border border-saarthi-gold/20 bg-saarthi-gold/10 p-3">
                    <Sparkles className="h-6 w-6 text-saarthi-gold" />
                  </span>
                  <span className="inline-flex items-center justify-center rounded-2xl border border-saarthi-gold/20 bg-saarthi-gold/10 p-3">
                    <CheckCircle2 className="h-6 w-6 text-saarthi-gold" />
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="slide-section">
        <div className="section-container">
          <Reveal>
            <h2 className="heading-display text-3xl md:text-4xl">Team AGENTX</h2>
            <p className="mt-3 max-w-2xl font-sans text-base text-saarthi-muted">
              Built for Voice AI. Designed for AI Lead Qualification System clarity.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <Reveal key={m.name} delay={m.name.length * 30}>
                <article className="card text-left">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-saarthi-gold/20 bg-saarthi-gold/5">
                      <m.icon className="h-5 w-5 text-saarthi-gold" />
                    </div>
                    <div>
                      <p className="font-serif text-xl font-semibold text-saarthi-cream">{m.name}</p>
                      <p className="mt-1 font-sans text-sm text-saarthi-muted">{m.role}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

