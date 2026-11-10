import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MegaMenuNavbar from './components/layout/MegaMenuNavbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Pathways from './components/sections/Pathways';
import SkillsWeTeach from './components/sections/SkillsWeTeach';
import About from './components/sections/About';
import BlogSection from './components/sections/BlogSection';
import Contact from './components/sections/Contact';
import { PortfolioPage } from './pages/PortfolioPage';
import { WorkshopDetailPage } from './pages/WorkshopDetailPage';

function HomePage() {
  return (
    <main>
      <Hero />
      <Pathways />
      <SkillsWeTeach />
      <About />
      <BlogSection />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-kidpreneur-offwhite font-sans text-slate-800 flex flex-col justify-between selection:bg-amber-300 selection:text-slate-900">
        <MegaMenuNavbar />
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
