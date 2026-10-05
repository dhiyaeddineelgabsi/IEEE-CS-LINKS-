import { Link } from 'react-router-dom'
import type { IconType } from 'react-icons'
import {
  FaArrowLeft,
  FaBookOpen,
  FaExternalLinkAlt,
  FaFilePdf,
  FaYoutube,
} from 'react-icons/fa'

export interface WorkshopResource {
  title: string
  meta: string
  url: string
  kind: 'pdf' | 'video' | 'link'
}

const resourceIcons: Record<WorkshopResource['kind'], IconType> = {
  pdf: FaFilePdf,
  video: FaYoutube,
  link: FaBookOpen,
}

interface WorkshopDetailProps {
  icon: IconType
  title: string
  description: string
  resources: WorkshopResource[]
}

export default function WorkshopDetail({
  icon: Icon,
  title,
  description,
  resources,
}: WorkshopDetailProps) {
  return (
    <div className="flex flex-col gap-8">
      <Link
        to="/workshops"
        className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition-all duration-200 hover:border-ieee-blue hover:text-ieee-blue"
      >
        <FaArrowLeft aria-hidden="true" className="h-3.5 w-3.5" />
        Workshops
      </Link>

      <div className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_10px_35px_rgba(0,98,155,0.12)] sm:p-9">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-ieee-blue/10 text-ieee-blue">
            <Icon aria-hidden="true" className="h-8 w-8" />
          </span>
          <div>
            <span className="inline-flex items-center rounded-full border border-cs-orange/40 bg-cs-orange/10 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.22em] text-amber-700">
              Workshop
            </span>
            <h1 className="mt-2 font-display text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
              {title}
            </h1>
          </div>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
          {description}
        </p>
      </div>

      <section aria-labelledby="resources-heading" className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-slate-200" />
          <h2
            id="resources-heading"
            className="font-display text-sm font-bold uppercase tracking-[0.2em] text-slate-500"
          >
            Ressources
          </h2>
          <span className="h-px flex-1 bg-slate-200" />
        </div>

        <ul className="flex flex-col gap-3">
          {resources.map((item) => {
            const ResourceIcon = resourceIcons[item.kind]
            const isPlaceholder = item.url === '#'

            return (
              <li key={item.title}>
                <a
                  href={item.url}
                  target={isPlaceholder ? undefined : '_blank'}
                  rel={isPlaceholder ? undefined : 'noopener noreferrer'}
                  aria-label={
                    isPlaceholder ? `${item.title} (à venir)` : item.title
                  }
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-ieee-blue hover:shadow-[0_12px_28px_rgba(0,98,155,0.14)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ieee-blue/10 text-ieee-blue">
                    <ResourceIcon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-display font-bold text-slate-900">
                      {item.title}
                    </span>
                    <span className="mt-0.5 block text-xs font-medium text-slate-400">
                      {item.meta}
                    </span>
                  </span>
                  <FaExternalLinkAlt
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-slate-300 transition-colors group-hover:text-ieee-blue"
                  />
                </a>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
