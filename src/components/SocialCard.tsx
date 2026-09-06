import { FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import type { SocialLink } from '../data/links'

const platforms = {
  instagram: {
    Icon: FaInstagram,
    chip: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]',
  },
  facebook: {
    Icon: FaFacebookF,
    chip: 'bg-[#1877F2]',
  },
  linkedin: {
    Icon: FaLinkedinIn,
    chip: 'bg-[#0A66C2]',
  },
}

export default function SocialCard({ link }: { link: SocialLink }) {
  const { Icon, chip } = platforms[link.platform]

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${link.label} — ${link.handle}`}
      className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ieee-blue hover:shadow-[0_14px_32px_rgba(0,98,155,0.15)] sm:p-5 lg:flex-col lg:gap-4 lg:p-7 lg:text-center"
    >
      <span
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl text-white lg:h-14 lg:w-14 lg:text-2xl ${chip}`}
      >
        <Icon aria-hidden="true" />
      </span>

      <span className="min-w-0 flex-1 text-left lg:flex-none lg:w-full lg:text-center">
        <span className="block font-display text-base font-bold text-slate-900">
          {link.label}
        </span>
        <span className="block truncate text-sm font-medium text-ieee-blue lg:whitespace-normal">
          {link.handle}
        </span>
        <span className="mt-0.5 hidden text-sm text-slate-500 sm:block">
          {link.description}
        </span>
      </span>

      <FaArrowRight
        aria-hidden="true"
        className="h-4 w-4 shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-ieee-blue lg:hidden"
      />

      <span className="hidden lg:inline-flex lg:items-center lg:gap-1.5 lg:rounded-full lg:border lg:border-slate-200 lg:px-4 lg:py-1.5 lg:font-display lg:text-[11px] lg:font-bold lg:uppercase lg:tracking-[0.14em] lg:text-ieee-blue lg:transition-all lg:duration-300 group-hover:border-ieee-blue group-hover:bg-ieee-blue group-hover:text-white">
        Follow
        <FaArrowRight aria-hidden="true" className="h-3 w-3" />
      </span>
    </a>
  )
}
