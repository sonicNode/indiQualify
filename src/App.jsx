import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { Compass } from 'lucide-react'
import HomePage from './pages/HomePage'
import ConceptPage from './pages/ConceptPage'

function App() {
  return (
    <div className="min-h-screen bg-saarthi-bg text-saarthi-cream">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(230,201,168,0.12),transparent_60%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_100%_0%,rgba(212,163,115,0.08),transparent_45%)]" />

      <header className="sticky top-0 z-20 border-b border-saarthi-gold/10 bg-saarthi-bg/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-10 md:py-6">
          <Link
            to="/"
            className="group flex items-center gap-3 font-serif text-xl font-semibold tracking-wide text-saarthi-cream md:text-2xl"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-saarthi-gold/30 bg-saarthi-gold/5 text-saarthi-gold transition group-hover:border-saarthi-gold/50">
              <Compass className="h-5 w-5" aria-hidden />
            </span>
            Lead Saarthi
          </Link>
          <div className="flex items-center gap-1 rounded-full border border-saarthi-gold/15 bg-white/[0.03] p-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? 'bg-saarthi-gold/20 text-saarthi-cream shadow-glow-sm'
                    : 'text-saarthi-muted hover:text-saarthi-cream'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/concept"
              className={({ isActive }) =>
                `rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? 'bg-saarthi-gold/20 text-saarthi-cream shadow-glow-sm'
                    : 'text-saarthi-muted hover:text-saarthi-cream'
                }`
              }
            >
              Concept
            </NavLink>
          </div>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/concept" element={<ConceptPage />} />
        </Routes>
      </main>

      <footer className="border-t border-saarthi-gold/10">
        <div className="section-container py-8 text-center text-sm text-saarthi-muted">
          Lead Saarthi — Hackathon Project
        </div>
      </footer>
    </div>
  )
}

export default App
