import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Workshops from './pages/Workshops'
import { workshopPages } from './pages/workshop-details'

function WorkshopRoute() {
  const { id } = useParams()
  const Page = id ? workshopPages[id] : undefined

  if (!Page) return <Navigate to="/workshops" replace />
  return <Page />
}

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div aria-hidden="true" className="matrix-bg fixed inset-0" />
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 h-72 bg-gradient-to-b from-ieee-blue/10 to-transparent"
      />

      <ScrollToTop />
      <Navbar />

      <main className="relative mx-auto flex w-full max-w-xl flex-1 flex-col justify-center gap-10 px-5 pb-12 pt-28 sm:gap-12 sm:pb-16 sm:pt-32 lg:max-w-5xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/workshop/:id" element={<WorkshopRoute />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
