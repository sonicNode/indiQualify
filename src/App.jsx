import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import HomePage from './pages/HomePage'
import ConceptPage from './pages/ConceptPage'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/85 backdrop-blur">
        <nav className="section-container flex items-center justify-between py-4 md:py-5">
          <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-white">
            <Sparkles className="h-5 w-5 text-indigo-300" />
            IndiQualify
          </Link>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive ? 'bg-white text-slate-900' : 'text-slate-300 hover:text-white'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/concept"
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive ? 'bg-white text-slate-900' : 'text-slate-300 hover:text-white'
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

      <footer className="border-t border-white/10">
        <div className="section-container py-6 text-center text-sm text-slate-400">
          IndiQualify - Hackathon Project
        </div>
      </footer>
    </div>
  )
}

export default App
