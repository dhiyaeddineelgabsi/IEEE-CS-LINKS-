# IEEE CS ENIT — Official Links Hub

The official link hub of the **IEEE Computer Society ENIT Student Chapter** (Tunis, Tunisia).
All our social media in one place, plus links to our previous events.

## Stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [react-icons](https://react-icons.github.io/react-icons/)
- Deployed on [Vercel](https://vercel.com/)

## Design

Institutional light theme based on IEEE branding:

| Token | Value | Source |
| --- | --- | --- |
| IEEE Blue | `#00629B` | Official IEEE master brand (Pantone 301) |
| CS Orange | `#FAA41A` | Extracted from the official IEEE CS chapter logo |
| Headings | Montserrat | Official IEEE CS brand typeface |
| Body | Inter | — |

## Editing the links

All links live in a single file: [`src/data/links.ts`](src/data/links.ts).

- **Social media** → edit the `socialLinks` array
- **Previous events** → add entries to the `events` array:

```ts
export const events: EventLink[] = [
  {
    name: 'My Event Name',
    year: 2026,
    socials: [
      { platform: 'instagram', url: 'https://www.instagram.com/myevent/' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/company/myevent/' },
    ],
  },
]
```

The "Our Previous Events" section appears automatically once the array is non-empty.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

The project is auto-deployed on Vercel from the `main` branch.
