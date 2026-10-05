import WorkshopDetail, {
  type WorkshopResource,
} from '../../components/WorkshopDetail'

const resources: WorkshopResource[] = [
  {
    title: 'Présentation — Git & GitHub',
    meta: 'Support en ligne',
    url: 'https://eyaannabi.github.io/git-github/',
    kind: 'link',
  },
  {
    title: 'Replay vidéo — Workshop Git & GitHub',
    meta: 'YouTube',
    url: 'https://youtu.be/mAFoROnOfHs',
    kind: 'video',
  },
]

export default function GitGithub() {
  return (
    <WorkshopDetail
      image="/workshops/git-github.jpeg"
      title="Workshop Git & GitHub"
      description="Apprendre à versionner son code avec Git et à collaborer sur GitHub : commits, branches, pull requests et bonnes pratiques. Retrouvez ici la présentation et le replay vidéo du workshop."
      resources={resources}
    />
  )
}
