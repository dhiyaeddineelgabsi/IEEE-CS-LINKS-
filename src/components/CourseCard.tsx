import { Link } from 'react-router-dom'
import type { Formation } from '../data/formations'

export default function CourseCard({ formation }: { formation: Formation }) {
  const Icon = formation.icon

  return (
    <Link
      to={`/formation/${formation.id}`}
      className="group flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ieee-blue hover:shadow-[0_12px_28px_rgba(0,98,155,0.14)]"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ieee-blue/10 text-ieee-blue transition-colors duration-300 group-hover:bg-ieee-blue group-hover:text-white">
        <Icon aria-hidden="true" className="h-6 w-6" />
      </span>

      <span className="flex-1">
        <span className="block font-display font-bold text-slate-900">
          {formation.title}
        </span>
        {formation.date && (
          <span className="mt-0.5 block text-xs font-medium tracking-wide text-slate-400">
            {formation.date}
          </span>
        )}
        <span className="mt-2 block text-sm leading-relaxed text-slate-600">
          {formation.description}
        </span>
      </span>
    </Link>
  )
}
