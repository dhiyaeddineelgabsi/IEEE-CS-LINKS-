import { Link } from 'react-router-dom'
import type { Workshop } from '../data/workshops'

export default function WorkshopCard({ workshop }: { workshop: Workshop }) {
  return (
    <Link
      to={`/workshop/${workshop.id}`}
      className="group flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ieee-blue hover:shadow-[0_12px_28px_rgba(0,98,155,0.14)]"
    >
      <span className="block h-28 w-full overflow-hidden rounded-xl bg-slate-100">
        <img
          src={workshop.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </span>

      <span className="flex-1">
        <span className="block font-display font-bold text-slate-900">
          {workshop.title}
        </span>
        {workshop.date && (
          <span className="mt-0.5 block text-xs font-medium tracking-wide text-slate-400">
            {workshop.date}
          </span>
        )}
        <span className="mt-2 block text-sm leading-relaxed text-slate-600">
          {workshop.description}
        </span>
      </span>
    </Link>
  )
}
