import type { IconType } from 'react-icons'
import { FaCode, FaGitAlt } from 'react-icons/fa'

export interface Workshop {
  id: string
  title: string
  description: string
  icon: IconType
  date?: string
}

export const workshops: Workshop[] = [
  {
    id: 'bootcamp-cp-1',
    title: 'Bootcamp CP — Session 1',
    description:
      'Introduction au Competitive Programming : les bases, la méthodologie et les premiers réflexes de résolution.',
    icon: FaCode,
    date: 'Session 1',
  },
  {
    id: 'bootcamp-cp-2',
    title: 'Bootcamp CP — Session 2',
    description:
      'Deuxième session du bootcamp : structures de données et techniques essentielles pour les concours.',
    icon: FaCode,
    date: 'Session 2',
  },
  {
    id: 'bootcamp-cp-3',
    title: 'Bootcamp CP — Session 3',
    description:
      'Troisième session du bootcamp : algorithmes avancés et entraînement sur des problèmes types.',
    icon: FaCode,
    date: 'Session 3',
  },
  {
    id: 'git-github',
    title: 'Workshop Git & GitHub',
    description:
      'Versionner son code avec Git et collaborer sur GitHub : commits, branches, pull requests et plus.',
    icon: FaGitAlt,
  },
]
