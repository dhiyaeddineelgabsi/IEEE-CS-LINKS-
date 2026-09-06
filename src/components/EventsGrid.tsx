import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { events } from '../data/links'
import type { SocialPlatform } from '../data/links'

const icons: Record<SocialPlatform, typeof FaInstagram> = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  linkedin: FaLinkedinIn,
}

export default function EventsGrid() {
  if (events.length === 0) return null

  return (
    <section aria-labelledby="events-heading" className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <span className="h-px flex-1 bg-slate-200" />
        <h2
          id="events-heading"
          className="font-display text-sm font-bold uppercase tracking-[0.2em] text-slate-500"
        >
          Our Previous Events
        </h2>
        <span className="h-px flex-1 bg-slate-200" />
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {events.map((event) => (
          <li
            key={event.name}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-ieee-blue hover:shadow-[0_12px_28px_rgba(0,98,155,0.14)]"
          >
            <p className="font-display font-bold text-slate-900">{event.name}</p>
            {event.year && (
              <p className="mt-0.5 text-xs font-medium tracking-wide text-slate-400">
                {event.year}
              </p>
            )}
            <div className="mt-3 flex gap-2">
              {event.socials.map((social) => {
                const Icon = icons[social.platform]
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${event.name} on ${social.platform}`}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all duration-200 hover:border-ieee-blue hover:bg-ieee-blue hover:text-white"
                  >
                    <Icon aria-hidden="true" className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
