import type { ComponentType } from 'react'
import Bootcamp1 from './Bootcamp1'
import Bootcamp2 from './Bootcamp2'
import Bootcamp3 from './Bootcamp3'
import GitGithub from './GitGithub'

export const workshopPages: Record<string, ComponentType> = {
  'bootcamp-cp-1': Bootcamp1,
  'bootcamp-cp-2': Bootcamp2,
  'bootcamp-cp-3': Bootcamp3,
  'git-github': GitGithub,
}
