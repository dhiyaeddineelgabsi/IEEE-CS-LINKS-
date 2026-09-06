export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4 px-5 py-9 text-center lg:max-w-5xl">
        <img
          src="/enit-branch.png"
          alt="IEEE ENIT Student Branch logo"
          className="w-44 h-auto opacity-90"
        />

        <p className="text-sm text-slate-500">
          A technical chapter of the IEEE ENIT Student Branch
        </p>

        <nav className="flex items-center gap-5 text-xs font-semibold uppercase tracking-wider">
          <a
            href="https://www.computer.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ieee-blue transition-colors hover:text-ieee-blue-dark hover:underline"
          >
            IEEE Computer Society
          </a>
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-slate-300" />
          <a
            href="https://www.ieee.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ieee-blue transition-colors hover:text-ieee-blue-dark hover:underline"
          >
            IEEE.org
          </a>
        </nav>

        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} IEEE Computer Society ENIT Student Chapter ·
          Tunis, Tunisia
        </p>
      </div>
    </footer>
  )
}
