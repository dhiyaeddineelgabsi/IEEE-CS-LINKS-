import { FaCode } from 'react-icons/fa'
import WorkshopDetail, {
  type WorkshopResource,
} from '../../components/WorkshopDetail'

const resources: WorkshopResource[] = [
  {
    title: 'Support — Bootcamp Session 3',
    meta: 'PDF · Session 3',
    url: '/workshops/bootcamp-session-3.pdf',
    kind: 'pdf',
  },
  {
    title: 'Replay vidéo — Session 3',
    meta: 'YouTube',
    url: 'https://youtu.be/DWdz0jcq2kg',
    kind: 'video',
  },
]

export default function Bootcamp3() {
  return (
    <WorkshopDetail
      icon={FaCode}
      title="Bootcamp CP — Session 3"
      description="Troisième session du bootcamp Competitive Programming : algorithmes avancés et entraînement sur des problèmes types. Retrouvez ici le support et le replay vidéo de la session."
      resources={resources}
    />
  )
}
