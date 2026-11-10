import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function MegaMenuNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pathwaysOpen, setPathwaysOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("home");

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "home";
      setActiveHash(hash);
    };
    window.addEventListener("hashchange", onHashChange);
    onHashChange();
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    setPathwaysOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
      setActiveHash(id);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#fffdf7]/95 backdrop-blur-md border-b-2 border-[#dfe6f5]">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
        {/* Single Official Brand Logo with 'By Dr. Sarah Sidani' (No duplicate text next to it) */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("home");
          }}
          className="flex items-center hover:opacity-90 transition-opacity"
          aria-label="The Kidpreneur Journey - By Dr. Sarah Sidani Home"
        >
          <img
            src="/kidpreneur-logo-with-byline.png"
            alt="The Kidpreneur Journey - By Dr. Sarah Sidani"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5" aria-label="Main">
          {/* About (Direct Link - NO dropdown) */}
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("about");
            }}
            className={`px-3.5 py-2 rounded-full font-bold text-sm transition-colors ${
              activeHash === "about"
                ? "bg-[#1c2455] text-[#fffdf7]"
                : "text-[#1c2455] hover:bg-[#eef5ff]"
            }`}
          >
            About
          </a>

          {/* Pathways with Floating Absolute Dropdown (Only 3 pathways, no 'explore more') */}
          <div
            className="relative"
            onMouseEnter={() => setPathwaysOpen(true)}
            onMouseLeave={() => setPathwaysOpen(false)}
          >
            <button
              onClick={() => scrollTo("pathways")}
              className={`flex items-center gap-1 px-3.5 py-2 rounded-full font-bold text-sm transition-colors ${
                activeHash === "pathways"
                  ? "bg-[#1c2455] text-[#fffdf7]"
                  : "text-[#1c2455] hover:bg-[#eef5ff]"
              }`}
              aria-expanded={pathwaysOpen}
            >
              <span>Pathways</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  pathwaysOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Floating Dropdown - positioned absolute so it NEVER shifts or expands navbar */}
            {pathwaysOpen && (
              <div className="absolute top-full left-0 mt-1 w-80 bg-white border-2 border-[#1c2455] rounded-2xl shadow-[4px_4px_0_#1c2455] p-3 z-50">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#4d5580] px-3 py-1">
                  The 3 Pathways
                </div>
                <div className="space-y-1 mt-1">
                  <a
                    href="#pathways"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo("pathways");
                    }}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-[#eef5ff] transition-colors group"
                  >
                    <span className="text-xl">🚀</span>
                    <div>
                      <div className="text-sm font-bold text-[#1c2455] group-hover:text-[#2f7de1]">
                        Workshops
                      </div>
                      <div className="text-xs text-[#4d5580]">
                        Upcoming sessions & past workshop highlights
                      </div>
                    </div>
                  </a>

                  <a
                    href="#pathways"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo("pathways");
                    }}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-[#eef5ff] transition-colors group"
                  >
                    <span className="text-xl">📚</span>
                    <div>
                      <div className="text-sm font-bold text-[#1c2455] group-hover:text-[#2f7de1]">
                        Courses
                      </div>
                      <div className="text-xs text-[#4d5580]">
                        Online progressive learning journeys
                      </div>
                    </div>
                  </a>

                  <a
                    href="#pathways"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo("pathways");
                    }}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-[#eef5ff] transition-colors group"
                  >
                    <span className="text-xl">🤝</span>
                    <div>
                      <div className="text-sm font-bold text-[#1c2455] group-hover:text-[#2f7de1]">
                        Collabs
                      </div>
                      <div className="text-xs text-[#4d5580]">
                        Schools, Scouts, Sports Academies & Camps
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Skills We Teach */}
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("skills");
            }}
            className={`px-3.5 py-2 rounded-full font-bold text-sm transition-colors ${
              activeHash === "skills"
                ? "bg-[#1c2455] text-[#fffdf7]"
                : "text-[#1c2455] hover:bg-[#eef5ff]"
            }`}
          >
            Skills We Teach
          </a>

          {/* Blog */}
          <a
            href="#blog"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("blog");
            }}
            className={`px-3.5 py-2 rounded-full font-bold text-sm transition-colors ${
              activeHash.startsWith("blog")
                ? "bg-[#1c2455] text-[#fffdf7]"
                : "text-[#1c2455] hover:bg-[#eef5ff]"
            }`}
          >
            Blog
          </a>
        </nav>

        {/* Right CTA button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contact");
            }}
            className="btn-sun text-sm py-2 px-5"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl border-2 border-[#1c2455] bg-white text-[#1c2455] shadow-[2px_2px_0_#1c2455]"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t-2 border-[#dfe6f5] bg-[#fffdf7] px-4 py-4 space-y-2 shadow-lg">
          <button
            onClick={() => scrollTo("home")}
            className="w-full text-left font-bold text-base text-[#1c2455] p-2.5 rounded-xl hover:bg-[#eef5ff]"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="w-full text-left font-bold text-base text-[#1c2455] p-2.5 rounded-xl hover:bg-[#eef5ff]"
          >
            About
          </button>
          <div className="border-l-2 border-[#2f7de1] pl-3 py-1 space-y-1">
            <button
              onClick={() => scrollTo("pathways")}
              className="w-full text-left font-bold text-base text-[#1c2455]"
            >
              Pathways
            </button>
            <div className="flex flex-col gap-1 text-sm text-[#4d5580] pt-1">
              <button onClick={() => scrollTo("pathways")} className="text-left py-1 hover:text-[#1c2455]">
                • Workshops
              </button>
              <button onClick={() => scrollTo("pathways")} className="text-left py-1 hover:text-[#1c2455]">
                • Courses
              </button>
              <button onClick={() => scrollTo("pathways")} className="text-left py-1 hover:text-[#1c2455]">
                • Collabs
              </button>
            </div>
          </div>
          <button
            onClick={() => scrollTo("skills")}
            className="w-full text-left font-bold text-base text-[#1c2455] p-2.5 rounded-xl hover:bg-[#eef5ff]"
          >
            Skills We Teach
          </button>
          <button
            onClick={() => scrollTo("blog")}
            className="w-full text-left font-bold text-base text-[#1c2455] p-2.5 rounded-xl hover:bg-[#eef5ff]"
          >
            Blog
          </button>
          <div className="pt-2">
            <button
              onClick={() => scrollTo("contact")}
              className="w-full btn-sun text-center py-2.5 font-bold"
            >
              Get in touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
