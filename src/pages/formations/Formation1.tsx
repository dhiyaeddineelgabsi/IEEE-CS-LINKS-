import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import type { IconType } from 'react-icons'
import {
  FaArrowLeft,
  FaBookOpen,
  FaExternalLinkAlt,
  FaFilePdf,
  FaReact,
  FaYoutube,
} from 'react-icons/fa'

interface ResourceItem {
  title: string
  meta: string
  url: string
}

const videos: ResourceItem[] = [
  { title: 'Session 1 — Introduction à React', meta: 'Vidéo à remplacer', url: '#' },
  { title: 'Session 2 — Composants, props et state', meta: 'Vidéo à remplacer', url: '#' },
]

const pdfs: ResourceItem[] = [
  { title: 'Slides — Formation React', meta: 'PDF à remplacer', url: '#' },
]

const externalLinks: ResourceItem[] = [
  { title: 'Documentation officielle React', meta: 'react.dev', url: 'https://react.dev' },
  { title: 'Apprendre React pas à pas', meta: 'react.dev/learn', url: 'https://react.dev/learn' },
]

const modules = [
  {
    title: 'Module 1 — Découverte de React',
    description: 'Pourquoi React, mise en place de l’environnement et premier composant.',
  },
  {
    title: 'Module 2 — Composants & données',
    description: 'Props, state et cycles de rendu avec les hooks de base.',
  },
  {
    title: 'Module 3 — Projet pratique',
    description: 'Construction d’une petite application pour appliquer les notions vues.',
  },
]

function Section({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="h-px flex-1 bg-slate-200" />
        <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
          {heading}
        </h2>
        <span className="h-px flex-1 bg-slate-200" />
      </div>
      {children}
    </section>
  )
}

function ResourceLink({ item, icon: Icon }: { item: ResourceItem; icon: IconType }) {
  const isPlaceholder = item.url === '#'

  return (
    <a
      href={item.url}
      target={isPlaceholder ? undefined : '_blank'}
      rel={isPlaceholder ? undefined : 'noopener noreferrer'}
      aria-label={isPlaceholder ? `${item.title} (à venir)` : item.title}
      className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-ieee-blue hover:shadow-[0_12px_28px_rgba(0,98,155,0.14)]"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ieee-blue/10 text-ieee-blue">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </span>
      <span className="flex-1">
        <span className="block font-display font-bold text-slate-900">{item.title}</span>
        <span className="mt-0.5 block text-xs font-medium text-slate-400">{item.meta}</span>
      </span>
      <FaExternalLinkAlt
        aria-hidden="true"
        className="h-3.5 w-3.5 text-slate-300 transition-colors group-hover:text-ieee-blue"
      />
    </a>
  )
}

export default function Formation1() {
  return (
    <div className="flex flex-col gap-8">
      <Link
        to="/"
        className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition-all duration-200 hover:border-ieee-blue hover:text-ieee-blue"
      >
        <FaArrowLeft aria-hidden="true" className="h-3.5 w-3.5" />
        Accueil
      </Link>

      <div className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_10px_35px_rgba(0,98,155,0.12)] sm:p-9">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-ieee-blue/10 text-ieee-blue">
            <FaReact aria-hidden="true" className="h-9 w-9" />
          </span>
          <div>
            <span className="inline-flex items-center rounded-full border border-cs-orange/40 bg-cs-orange/10 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.22em] text-amber-700">
              Formation
            </span>
            <h1 className="mt-2 font-display text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
              Formation React
            </h1>
          </div>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
          Les fondamentaux de React : composants, hooks et construction d’interfaces
          modernes. Retrouvez ici toutes les ressources de la formation — vidéos,
          supports et liens utiles.
        </p>
      </div>

      <Section heading="Vidéos">
        <ul className="flex flex-col gap-3">
          {videos.map((item) => (
            <li key={item.title}>
              <ResourceLink item={item} icon={FaYoutube} />
            </li>
          ))}
        </ul>
      </Section>

      <Section heading="Ressources PDF">
        <ul className="flex flex-col gap-3">
          {pdfs.map((item) => (
            <li key={item.title}>
              <ResourceLink item={item} icon={FaFilePdf} />
            </li>
          ))}
        </ul>
      </Section>

      <Section heading="Liens externes">
        <ul className="flex flex-col gap-3">
          {externalLinks.map((item) => (
            <li key={item.title}>
              <ResourceLink item={item} icon={FaBookOpen} />
            </li>
          ))}
        </ul>
      </Section>

      <Section heading="Modules">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => (
            <li
              key={module.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-ieee-blue hover:shadow-[0_12px_28px_rgba(0,98,155,0.14)]"
            >
              <span className="font-display text-xs font-bold uppercase tracking-widest text-ieee-blue">
                0{index + 1}
              </span>
              <p className="mt-2 font-display font-bold text-slate-900">{module.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                {module.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  )
}
