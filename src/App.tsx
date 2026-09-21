import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import MissionVision from './components/sections/MissionVision'
import Activities from './components/sections/Activities'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-kidpreneur-offwhite font-sans text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
