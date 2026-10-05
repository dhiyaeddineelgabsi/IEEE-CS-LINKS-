import type { IconType } from 'react-icons'
import { FaReact } from 'react-icons/fa'

export interface Formation {
  id: string
  title: string
  description: string
  icon: IconType
  date?: string
}

export const formations: Formation[] = [
  {
    id: 'react',
    title: 'Formation React',
    description: 'Les fondamentaux de React : composants, hooks et construction d’interfaces modernes.',
    icon: FaReact,
    date: '2026',
  },
]
