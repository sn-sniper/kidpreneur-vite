import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import MissionVision from './components/sections/MissionVision';
import Activities from './components/sections/Activities';
import { FeaturedPortfolio } from './components/sections/FeaturedPortfolio';
import Contact from './components/sections/Contact';
import { PortfolioPage } from './pages/PortfolioPage';
import { WorkshopDetailPage } from './pages/WorkshopDetailPage';

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <MissionVision />
      <Activities />
      <FeaturedPortfolio />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-kidpreneur-offwhite font-sans text-slate-800 flex flex-col justify-between">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:slug" element={<WorkshopDetailPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
