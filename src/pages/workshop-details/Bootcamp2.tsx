import WorkshopDetail, {
  type WorkshopResource,
} from '../../components/WorkshopDetail'

const resources: WorkshopResource[] = [
  {
    title: 'Support — Bootcamp Session 2',
    meta: 'PDF · Session 2',
    url: '/workshops/bootcamp-session-2.pdf',
    kind: 'pdf',
  },
]

export default function Bootcamp2() {
  return (
    <WorkshopDetail
      image="/workshops/bootcamp-session-2.png"
      title="Bootcamp CP — Session 2"
      description="Deuxième session du bootcamp Competitive Programming : structures de données et techniques essentielles pour aborder sereinement les concours. Retrouvez ici le support de la session."
      resources={resources}
    />
  )
}
