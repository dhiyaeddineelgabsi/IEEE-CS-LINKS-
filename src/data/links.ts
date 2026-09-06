export type SocialPlatform = 'instagram' | 'facebook' | 'linkedin'

export interface SocialLink {
  platform: SocialPlatform
  label: string
  handle: string
  url: string
  description: string
}

export interface EventSocial {
  platform: SocialPlatform
  url: string
}

export interface EventLink {
  name: string
  year?: number
  socials: EventSocial[]
}

export const chapter = {
  name: 'IEEE Computer Society',
  chapter: 'ENIT Student Chapter',
  affiliation: 'A technical chapter of the IEEE ENIT Student Branch',
  location: 'Tunis, Tunisia',
}

export const socialLinks: SocialLink[] = [
  {
    platform: 'instagram',
    label: 'Instagram',
    handle: '@ieee.cs.enit.sbc',
    url: 'https://www.instagram.com/ieee.cs.enit.sbc/',
    description: 'Event recaps, announcements and community',
  },
  {
    platform: 'facebook',
    label: 'Facebook',
    handle: 'CS.IEEE.ENIT',
    url: 'https://www.facebook.com/CS.IEEE.ENIT',
    description: 'News, events and chapter updates',
  },
  {
    platform: 'linkedin',
    label: 'LinkedIn',
    handle: 'IEEE CS ENIT Student Chapter',
    url: 'https://www.linkedin.com/company/106629452/',
    description: 'Professional network and career content',
  },
]

export const events: EventLink[] = []
