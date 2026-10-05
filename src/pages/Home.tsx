import { Link } from 'react-router-dom'
import { FaArrowRight, FaChalkboardTeacher } from 'react-icons/fa'
import Header from '../components/Header'
import SocialCard from '../components/SocialCard'
import EventsGrid from '../components/EventsGrid'
import { socialLinks } from '../data/links'

export default function Home() {
  return (
    <>
      <Header />

      <section aria-labelledby="follow-heading" className="flex flex-col gap-4 lg:gap-5">
        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-slate-200" />
          <h2
            id="follow-heading"
            className="font-display text-sm font-bold uppercase tracking-[0.2em] text-slate-500"
          >
            Follow Us
          </h2>
          <span className="h-px flex-1 bg-slate-200" />
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
          {socialLinks.map((link) => (
            <SocialCard key={link.platform} link={link} />
          ))}
        </div>
      </section>

      <section aria-labelledby="workshops-heading" className="flex flex-col gap-4 lg:gap-5">
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

        <Link
          to="/workshops"
          className="group flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ieee-blue hover:shadow-[0_14px_32px_rgba(0,98,155,0.15)] sm:p-6"
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ieee-blue/10 text-ieee-blue transition-colors duration-300 group-hover:bg-ieee-blue group-hover:text-white">
            <FaChalkboardTeacher aria-hidden="true" className="h-7 w-7" />
          </span>

          <span className="flex-1">
            <span className="block font-display font-bold text-slate-900">
              Découvrir nos workshops
            </span>
            <span className="mt-1 block text-sm leading-relaxed text-slate-600">
              Bootcamp Competitive Programming, Git &amp; GitHub et bien plus :
              supports, replays et ressources de chaque session.
            </span>
          </span>

          <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-slate-200 px-4 py-1.5 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-ieee-blue transition-all duration-300 group-hover:border-ieee-blue group-hover:bg-ieee-blue group-hover:text-white sm:inline-flex">
            Voir
            <FaArrowRight aria-hidden="true" className="h-3 w-3" />
          </span>

          <FaArrowRight
            aria-hidden="true"
            className="h-4 w-4 shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-ieee-blue sm:hidden"
          />
        </Link>
      </section>

      <EventsGrid />
    </>
  )
}
