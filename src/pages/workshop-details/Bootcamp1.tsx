import { FaCode } from 'react-icons/fa'
import WorkshopDetail, {
  type WorkshopResource,
} from '../../components/WorkshopDetail'

const resources: WorkshopResource[] = [
  {
    title: 'Support — Introduction to Competitive Programming',
    meta: 'PDF · Session 1',
    url: '/workshops/bootcamp-session-1.pdf',
    kind: 'pdf',
  },
]

export default function Bootcamp1() {
  return (
    <WorkshopDetail
      icon={FaCode}
      title="Bootcamp CP — Session 1"
      description="Première session du bootcamp Competitive Programming : découverte de l'univers CP, méthodologie de résolution de problèmes et premiers algorithmes fondamentaux. Retrouvez ici le support de la session."
      resources={resources}
    />
  )
}
