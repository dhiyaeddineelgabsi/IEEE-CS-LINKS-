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
      className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-ieee-blue hover:shadow-[0_12px_28px_rgba(0,98,155,0.14)] sm:p-5"
    >
      <span
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl text-white ${chip}`}
      >
        <Icon aria-hidden="true" />
      </span>

      <span className="min-w-0 flex-1 text-left">
        <span className="block font-display text-base font-bold text-slate-900">
          {link.label}
        </span>
        <span className="block truncate text-sm font-medium text-ieee-blue">
          {link.handle}
        </span>
        <span className="mt-0.5 hidden text-sm text-slate-500 sm:block">
          {link.description}
        </span>
      </span>

      <FaArrowRight
        aria-hidden="true"
        className="h-4 w-4 shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-ieee-blue"
      />
    </a>
  )
}
