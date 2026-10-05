import WorkshopCard from '../components/WorkshopCard'
import { workshops } from '../data/workshops'

export default function Workshops() {
  return (
    <section
      aria-labelledby="workshops-heading"
      className="flex flex-col gap-4 lg:gap-5"
    >
      <div className="flex items-center gap-3">
        <span className="h-px flex-1 bg-slate-200" />
        <h2
          id="workshops-heading"
          className="font-display text-sm font-bold uppercase tracking-[0.2em] text-slate-500"
        >
          Nos Workshops
        </h2>
        <span className="h-px flex-1 bg-slate-200" />
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {workshops.map((workshop) => (
          <li key={workshop.id} className="h-full">
            <WorkshopCard workshop={workshop} />
          </li>
        ))}
      </ul>
    </section>
  )
}
