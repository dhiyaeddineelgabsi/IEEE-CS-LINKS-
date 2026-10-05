import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-xl items-center justify-between px-5 lg:max-w-5xl">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Retour à l’accueil">
          <img
            src="/cs-logo.png"
            alt="IEEE Computer Society logo"
            className="h-8 w-auto sm:h-9"
          />
          <span className="hidden font-display text-sm font-bold tracking-wide text-slate-900 sm:block">
            IEEE CS <span className="text-ieee-blue">ENIT</span>
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <Link
            to="/"
            className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-ieee-blue/10 hover:text-ieee-blue"
          >
            Accueil
          </Link>
          <Link
            to="/#formations"
            className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-ieee-blue/10 hover:text-ieee-blue"
          >
            Formations
          </Link>
        </div>
      </div>
    </nav>
  )
}
