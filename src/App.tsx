import Header from './components/Header'
import SocialCard from './components/SocialCard'
import EventsGrid from './components/EventsGrid'
import Footer from './components/Footer'
import { socialLinks } from './data/links'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <div aria-hidden="true" className="matrix-bg fixed inset-0" />
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 h-72 bg-gradient-to-b from-ieee-blue/10 to-transparent"
      />

      <main className="relative mx-auto flex w-full max-w-xl flex-col gap-10 px-5 py-12 sm:gap-12 sm:py-16">
        <Header />

        <section aria-labelledby="follow-heading" className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px flex-1 bg-slate-200" />
            <h2
              id="follow-heading"
              className="font-display text-sm font-bold uppercase tracking-[0.2em] text-slate-500"
            >
              Follow Us
            </h2>
            <span className="h-px flex-1 bg-slate-200" />
          </div>

          {socialLinks.map((link) => (
            <SocialCard key={link.platform} link={link} />
          ))}
        </section>

        <EventsGrid />
      </main>

      <Footer />
    </div>
  )
}
