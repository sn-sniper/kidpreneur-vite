import { BrowserRouter, Routes, Route } from "react-router-dom";
import MegaMenuNavbar from "./components/layout/MegaMenuNavbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Pathways from "./components/sections/Pathways";
import SkillsWeTeach from "./components/sections/SkillsWeTeach";
import BlogSection from "./components/sections/BlogSection";
import Contact from "./components/sections/Contact";
import { PortfolioPage } from "./pages/PortfolioPage";
import { WorkshopDetailPage } from "./pages/WorkshopDetailPage";

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Pathways />
      <SkillsWeTeach />
      <BlogSection />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#fffdf7] font-sans text-[#1c2455] flex flex-col justify-between selection:bg-[#ffc93c] selection:text-[#1c2455]">
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
