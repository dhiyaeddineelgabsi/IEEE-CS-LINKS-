import { IoLocationSharp } from 'react-icons/io5'
import { chapter } from '../data/links'

export default function Header() {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_10px_35px_rgba(0,98,155,0.12)] sm:p-9">
        <img
          src="/cs-logo.png"
          alt="IEEE Computer Society logo"
          className="w-56 h-auto sm:w-72"
        />
      </div>

      <span className="mt-7 inline-flex items-center gap-2 rounded-full border border-cs-orange/40 bg-cs-orange/10 px-4 py-1.5 font-display text-[11px] font-bold uppercase tracking-[0.22em] text-amber-700">
        Official Links Hub
      </span>

      <h1 className="mt-4 font-display text-2xl font-extrabold leading-tight text-slate-900 sm:text-[2rem]">
        {chapter.name}
        <span className="block text-ieee-blue">{chapter.chapter}</span>
      </h1>

      <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600 sm:text-base">
        {chapter.affiliation}
      </p>

      <span className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm">
        <IoLocationSharp aria-hidden="true" className="h-4 w-4 text-ieee-blue" />
        {chapter.location}
      </span>
    </header>
  )
}
