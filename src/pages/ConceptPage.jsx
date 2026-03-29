import {
  ArrowRightLeft,
  Bot,
  BriefcaseBusiness,
  Flame,
  Gauge,
  Goal,
  Mic,
  Snowflake,
  UsersRound,
  Waves,
} from 'lucide-react'

const blocks = [
  {
    title: 'Problem Statement',
    points: [
      'Sales reps spend too much time on unqualified leads.',
      'Inefficient use of resources reduces team productivity.',
      'Poor engagement with cold calling lowers trust.',
    ],
    icon: UsersRound,
  },
  {
    title: 'Solution Overview',
    points: [
      'AI voice SDR (Sales Development Representative).',
      'Works only on inbound/warm leads.',
      'Creates natural conversations instead of spam calls.',
    ],
    icon: Bot,
  },
  {
    title: 'How the System Works',
    points: [
      'Voice input to Speech-to-Text.',
      'AI processes conversation and decides next question.',
      'Text-to-Speech responds and updates real-time scoring.',
    ],
    icon: ArrowRightLeft,
  },
  {
    title: 'BANT Framework',
    points: [
      'Budget, Authority, Need, Timeline are captured in the call.',
      'AI maps each answer to qualification confidence.',
      'Final score reflects purchase readiness and urgency.',
    ],
    icon: BriefcaseBusiness,
  },
  {
    title: 'Lead Classification',
    points: ['Hot Leads (high score)', 'Warm Leads', 'Cold Leads'],
    icon: Gauge,
  },
  {
    title: 'Output',
    points: [
      'Filters low-quality leads automatically.',
      'Sends high-quality leads to the human sales team.',
      'Optional demo/appointment scheduling for ready buyers.',
    ],
    icon: Waves,
  },
  {
    title: 'Goal',
    points: [
      'Not replacing humans.',
      'Removing repetitive qualification work.',
      'Improving conversion efficiency for SMB teams.',
    ],
    icon: Goal,
  },
]

function ConceptPage() {
  return (
    <div className="section-container py-16 md:py-20">
      <section className="animate-fade-up">
        <h1 className="text-4xl font-bold text-white md:text-5xl">
          IndiQualify - Concept Overview
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          IndiQualify is a multilingual AI voice-based lead qualification system designed to help
          Indian SMBs improve sales efficiency by filtering and qualifying inbound leads
          automatically.
        </p>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-2">
        {blocks.map((block) => (
          <article key={block.title} className="card animate-fade-up">
            <div className="mb-4 inline-flex rounded-lg bg-indigo-300/15 p-2 text-indigo-200">
              <block.icon className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold text-white">{block.title}</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {block.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-200" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <article className="card flex items-center gap-3">
          <Flame className="h-5 w-5 text-red-300" />
          <div>
            <p className="text-sm font-semibold text-white">Hot Leads</p>
            <p className="text-xs text-slate-300">High intent, quick follow-up</p>
          </div>
        </article>
        <article className="card flex items-center gap-3">
          <Mic className="h-5 w-5 text-amber-300" />
          <div>
            <p className="text-sm font-semibold text-white">Warm Leads</p>
            <p className="text-xs text-slate-300">Potential buyers, nurture flow</p>
          </div>
        </article>
        <article className="card flex items-center gap-3">
          <Snowflake className="h-5 w-5 text-cyan-300" />
          <div>
            <p className="text-sm font-semibold text-white">Cold Leads</p>
            <p className="text-xs text-slate-300">Low fit, deprioritized automatically</p>
          </div>
        </article>
      </section>
    </div>
  )
}

export default ConceptPage
