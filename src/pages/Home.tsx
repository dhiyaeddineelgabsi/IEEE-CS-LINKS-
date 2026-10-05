import Header from '../components/Header'
import SocialCard from '../components/SocialCard'
import EventsGrid from '../components/EventsGrid'
import CourseCard from '../components/CourseCard'
import { socialLinks } from '../data/links'
import { formations } from '../data/formations'

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

      <section
        id="formations"
        aria-labelledby="formations-heading"
        className="flex scroll-mt-24 flex-col gap-4 lg:gap-5"
      >
        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-slate-200" />
          <h2
            id="formations-heading"
            className="font-display text-sm font-bold uppercase tracking-[0.2em] text-slate-500"
          >
            Nos Formations
          </h2>
          <span className="h-px flex-1 bg-slate-200" />
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {formations.map((formation) => (
            <li key={formation.id} className="h-full">
              <CourseCard formation={formation} />
            </li>
          ))}
        </ul>
      </section>

      <EventsGrid />
    </>
  )
}
