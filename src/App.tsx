import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Stack from './sections/Stack'
import Work from './sections/Work'

export default function App() {
  return (
    <div className="min-h-screen bg-canvas">
      <div className="px-6 sm:px-10 lg:px-[6vw]">
        <Navbar />
        <Hero />

        <div className="mt-6">
          <Work />
          <Stack />
          <Services />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  )
}