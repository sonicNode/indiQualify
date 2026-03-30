import { createElement } from "react"
import { Link } from "react-router-dom"
import {
  Bot,
  Brain,
  Filter,
  BarChart3,
  Headphones,
  Mic,
  PhoneCall,
  Sparkles,
  Target,
  Volume2,
  Waves,
} from "lucide-react"
import Reveal from "../components/Reveal"

function WaveformVisual() {
  const bars = Array.from({ length: 12 }).map((_, i) => ({
    h: 16 + ((i * 23) % 40),
    d: i * 70,
  }))

  return (
    <div className="relative overflow-hidden rounded-[1.6rem] border border-saarthi-gold/20 bg-white/[0.03] p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(230,201,168,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(212,163,115,0.12),transparent_55%)]" />

      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-saarthi-gold/25 bg-saarthi-gold/10 shadow-glow-sm">
            <Mic className="h-6 w-6 text-saarthi-gold" />
          </div>
          <div className="min-w-0">
            <p className="font-serif text-sm font-semibold uppercase tracking-[0.16em] text-saarthi-gold">
              AI Lead Qualification System
            </p>
            <p className="mt-1 font-sans text-xs text-saarthi-muted">Engine: Voice → Intent → Score → Route</p>
          </div>
        </div>

        <div className="mt-6 flex items-end justify-center gap-[6px]">
          {bars.map((b, i) => (
            <div
              key={i}
              className="w-[3px] rounded-full bg-gradient-to-t from-saarthi-gold/90 via-saarthi-gold/40 to-transparent origin-bottom animate-wave"
              style={{ height: `${b.h}px`, animationDelay: `${b.d}ms` }}
            />
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {[
            { icon: Waves, label: "Multilingual voice" },
            { icon: Sparkles, label: "BANT signals" },
            { icon: Filter, label: "Quality routing" },
          ].map(({ icon: IconComponent, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-saarthi-gold/25 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-saarthi-muted"
            >
              {createElement(IconComponent, { className: "h-3.5 w-3.5 text-saarthi-gold" })}
              {label}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-saarthi-gold/20 bg-saarthi-gold/5">
              <Headphones className="h-4 w-4 text-saarthi-gold" />
            </span>
            <p className="font-sans text-xs text-saarthi-muted">Streaming conversation</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-saarthi-gold/20 bg-saarthi-gold/5">
              <Target className="h-4 w-4 text-saarthi-gold" />
            </span>
            <p className="font-sans text-xs text-saarthi-muted">Intent → BANT → score</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function SectionDivider({ className = "" }) {
  return (
    <div className={`relative my-6 ${className}`}>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-saarthi-gold/35 to-transparent" />
    </div>
  )
}

function StatCard({ value, label, icon: IconComponent }) {
  return (
    <article className="card h-full text-left">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-serif text-3xl font-semibold text-saarthi-gold">{value}</p>
          <p className="mt-2 font-sans text-sm leading-relaxed text-saarthi-muted">{label}</p>
        </div>
        <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-saarthi-gold/20 bg-saarthi-gold/5">
          {createElement(IconComponent, { className: "h-5 w-5 text-saarthi-gold" })}
        </span>
      </div>
    </article>
  )
}

function SmallCard({ title, detail, icon: IconComponent, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <article className="card h-full text-left">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-saarthi-gold/20 bg-saarthi-gold/5">
            {createElement(IconComponent, { className: "h-5 w-5 text-saarthi-gold" })}
          </span>
          <div>
            <p className="font-serif text-2xl font-semibold text-saarthi-cream">{title}</p>
            <p className="mt-3 font-sans text-sm leading-relaxed text-saarthi-muted">{detail}</p>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function HomePage() {
  return (
    <>
      <section className="slide-section relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_20%_-10%,rgba(230,201,168,0.16),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_90%_60%,rgba(212,163,115,0.10),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 animate-aurora bg-[length:400%_400%] bg-[linear-gradient(110deg,rgba(230,201,168,0.06),transparent_55%,rgba(212,163,115,0.10))]" />

        <div className="section-container grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
          <div>
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-saarthi-gold/25 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-saarthi-muted">
                  <span className="inline-flex h-2 w-2 rounded-full bg-saarthi-gold shadow-glow-sm" />
                  Team: AGENTX
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-saarthi-gold/25 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-saarthi-muted">
                  Track: Voice AI
                </span>
              </div>

              <h1 className="heading-display mt-5 text-5xl leading-[1.02] sm:text-6xl md:text-[4.35rem]">
                LEAD SAARTHI
              </h1>

              <p className="mt-4 font-sans text-lg font-medium text-saarthi-gold md:text-xl">
                Multilingual Voice AI Lead Qualifier
              </p>

              <p className="mt-6 max-w-2xl font-serif text-3xl leading-tight text-saarthi-cream">
                AI That Talks. Understands. Qualifies.
              </p>

              <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-saarthi-muted md:text-lg">
                An intelligent <span className="font-semibold text-saarthi-cream">AI Lead Qualification Engine</span> that filters high-intent prospects using real-time multilingual voice conversations.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById('system')?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    })
                  }
                  className="btn-primary w-full sm:w-auto"
                >
                  Explore System
                </button>
                <Link
                  to="/concept"
                  className="btn-primary w-full sm:w-auto bg-gradient-to-r from-white/[0.06] to-saarthi-goldDeep/10 hover:bg-white/[0.08]"
                >
                  View Concept
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-saarthi-muted">
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-saarthi-gold" />
                  AI Lead Qualification System
                </span>
                <span className="inline-flex items-center gap-2">
                  <PhoneCall className="h-4 w-4 text-saarthi-gold" />
                  Schedules follow-up
                </span>
                <span className="inline-flex items-center gap-2">
                  <Bot className="h-4 w-4 text-saarthi-gold" />
                  Not a voice bot  a qualifier engine
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[520px]">
              <WaveformVisual />
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE REALLY DO */}
      <section className="slide-section">
        <div className="section-container">
          <Reveal>
            <h2 className="heading-display text-4xl md:text-5xl">More Than a Voice Bot</h2>
            <p className="mt-3 max-w-3xl font-sans text-base leading-relaxed text-saarthi-muted md:text-lg">
              Not a chatbot. Not a call system. This is an <span className="font-semibold text-saarthi-cream">AI Lead Qualification System</span> — a dedicated{' '}
              <span className="font-semibold text-saarthi-gold">AI Lead Qualification Engine</span>.
            </p>
          </Reveal>

          <SectionDivider />

          <div className="grid gap-5 md:grid-cols-3">
            <SmallCard
              delay={0}
              title="Understands intent"
              detail="Not just words  extracts meaning across multilingual voice nuance."
              icon={Brain}
            />
            <SmallCard
              delay={80}
              title="Qualifies leads automatically"
              detail="Structured BANT signals become a score and routing decision."
              icon={Target}
            />
            <SmallCard
              delay={160}
              title="Filters before human interaction"
              detail="Only high-quality conversations reach reps  fewer wasted calls."
              icon={Filter}
            />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="slide-section bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="section-container">
              <Reveal>
                <h2 className="heading-display text-4xl md:text-5xl">The Problem</h2>
                <p className="mt-3 max-w-3xl font-sans text-base leading-relaxed text-saarthi-muted md:text-lg">
                  In India, multilingual, voice-first customers expect natural conversations — but most systems are built for text. That gap means sales teams talk to everyone instead of the right ones.
                </p>
              </Reveal>

          <SectionDivider className="mt-2" />

          <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
            <div className="grid gap-5 sm:grid-cols-2">
              <StatCard value="40–50%" label="Time wasted on low-intent leads (triage + follow-ups)." icon={Headphones} />
              <StatCard value="3–4 hrs" label="Lost daily per rep on qualification loops." icon={Volume2} />
              <StatCard value="₹25K–₹50K" label="Monthly loss from missed conversions and wasted outreach (SMB estimate)." icon={BarChart3} />
              <StatCard value="Multilingual" label="Hindi + English + regional intent gets flattened in text-first flows." icon={Bot} />
            </div>

            <Reveal delay={120}>
              <article className="card p-10 text-left">
                <p className="font-serif text-3xl leading-snug text-saarthi-cream">
                  Sales teams talk to everyone → <span className="text-saarthi-gold">instead of the right ones</span>
                </p>
                <p className="mt-4 font-sans text-sm leading-relaxed text-saarthi-muted md:text-base">
                  Lead Saarthi turns voice into structured signals using an AI Lead Qualification System, so only qualified prospects reach humans.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-2">
                  {['Voice-first preference', 'BANT extraction', 'Real-time score', 'Routed outcomes'].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-saarthi-gold/25 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-saarthi-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY SYSTEMS FAIL */}
      <section className="slide-section">
        <div className="section-container">
          <Reveal>
            <h2 className="heading-display text-4xl md:text-5xl">Why Current Systems Fail</h2>
            <p className="mt-3 max-w-3xl font-sans text-base leading-relaxed text-saarthi-muted md:text-lg">None of them QUALIFY leads.</p>
          </Reveal>

          <SectionDivider />

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: 'CRM',
                top: 'Stores data, no intelligence',
                icon: Brain,
                body: 'It records outcomes but doesn\'t understand what the prospect actually means in voice conversation.',
              },
              {
                title: 'Chatbots',
                top: 'Text-only, often English-focused',
                icon: Filter,
                body: 'They miss tone, urgency, and multilingual intent without voice comprehension and BANT extraction.',
              },
              {
                title: 'Call systems',
                top: 'No understanding of intent',
                icon: Headphones,
                body: 'Calls get routed, but qualification decisions never happen automatically — wasted human follow-ups.',
              },
            ].map((c) => (
              <Reveal key={c.title}>
                <article className="card h-full text-left">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-saarthi-gold/20 bg-saarthi-gold/5">
                      <c.icon className="h-5 w-5 text-saarthi-gold" />
                    </span>
                    <div>
                      <p className="font-serif text-2xl font-semibold text-saarthi-cream">{c.title}</p>
                      <p className="mt-1 text-sm font-medium text-saarthi-gold">{c.top}</p>
                    </div>
                  </div>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-saarthi-muted">{c.body}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <article className="card border-saarthi-gold/25 bg-gradient-to-br from-saarthi-gold/10 to-transparent p-10 text-left">
              <p className="font-serif text-3xl leading-snug text-saarthi-cream">
                What you need is an <span className="text-saarthi-gold">AI Lead Qualification System</span>
              </p>
              <p className="mt-3 font-sans text-sm leading-relaxed text-saarthi-muted">
                None of the current systems QUALIFY leads. Lead Saarthi qualifies with voice intent + BANT scoring and routes only high-quality outcomes.
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      {/* SOLUTION APPROACH */}
      <section id="system" className="slide-section relative">
        <div className="section-container">
          <Reveal>
            <h2 className="heading-display text-4xl md:text-5xl">Our Solution Approach</h2>
            <p className="mt-3 max-w-3xl font-sans text-base leading-relaxed text-saarthi-muted md:text-lg">
              A 6-step AI Lead Qualification Engine. Talk to everyone  and talk to the right ones.
            </p>
          </Reveal>

          <SectionDivider />

          <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr]">
            <div>
              <ol className="space-y-4">
                {[
                  { n: 1, title: 'Initiate', detail: 'Voice interaction starts automatically when a lead shows interest.' },
                  { n: 2, title: 'Question', detail: 'Structured BANT framework questions extract Budget, Need, Authority, Timeline.' },
                  { n: 3, title: 'Understand', detail: 'AI processes responses and intent across multilingual voice nuance.' },
                  { n: 4, title: 'Score', detail: 'Assign lead score (05) (0–10) based on qualification confidence.' },
                  { n: 5, title: 'Filter', detail: 'Forward only high-quality leads for the right sales action.' },
                  { n: 6, title: 'Action', detail: 'Schedules follow-up (demo call / human agent connection) based on lead quality.' },
                ].map((s) => (
                  <Reveal key={s.n} delay={s.n * 45}>
                    <li className="card p-5 text-left">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-saarthi-gold/35 bg-saarthi-gold/10 font-serif text-sm font-semibold text-saarthi-gold">
                          {s.n}
                        </div>
                        <div>
                          <p className="font-serif text-xl font-semibold text-saarthi-cream">{s.title}</p>
                          <p className="mt-2 font-sans text-sm leading-relaxed text-saarthi-muted">{s.detail}</p>
                        </div>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>

            <div className="space-y-6">
              <Reveal>
                <article className="card border-saarthi-gold/25 bg-gradient-to-br from-saarthi-gold/10 to-transparent p-10 text-left">
                  <p className="font-serif text-3xl leading-snug text-saarthi-cream">
                    Talk to everyone  <span className="text-saarthi-gold">Talk to the right ones</span>
                  </p>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-saarthi-muted">
                    Lead Saarthi qualifies intent in real time — then routes only outcomes that matter.
                  </p>
                </article>
              </Reveal>

              <Reveal delay={120}>
                <article className="card p-8 text-left">
                  <p className="font-serif text-2xl font-semibold text-saarthi-cream">System routing outcomes</p>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-saarthi-muted">
                    System filters, connects, or schedules follow-up based on lead quality.
                  </p>
                  <div className="mt-6 grid gap-4">
                    {[
                      { k: 'Hot leads', d: 'Direct connect + next step scheduled.' },
                      { k: 'Warm leads', d: 'Nurture questions + follow-up reminders.' },
                      { k: 'Cold leads', d: 'Deprioritized automatically to protect rep bandwidth.' },
                    ].map((x) => (
                      <div key={x.k} className="flex items-start gap-3">
                        <span className="mt-2 inline-flex h-2 w-2 rounded-full bg-saarthi-gold" />
                        <div>
                          <p className="font-serif text-sm font-semibold text-saarthi-cream">{x.k}</p>
                          <p className="mt-1 font-sans text-sm text-saarthi-muted">{x.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>

              <Reveal delay={180}>
                <article className="card p-8 text-left">
                  <p className="font-serif text-2xl font-semibold text-saarthi-cream">Explore the concept page</p>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-saarthi-muted">
                    Includes: 6-step workflow, BANT framework, system architecture, updated tech stack, demo flow, impact, and team.
                  </p>
                  <div className="mt-6">
                    <Link to="/concept" className="btn-primary w-full">View Concept Page</Link>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
