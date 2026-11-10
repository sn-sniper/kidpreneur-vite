import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, X, Sparkles, User as UserIcon, LogOut, ArrowRight } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import AuthModal from "../auth/AuthModal";
import type { AuthMode } from "../auth/AuthModal";

const LAB_PORTAL_URL = import.meta.env.VITE_LAB_URL || (import.meta.env.DEV ? 'http://localhost:3000' : 'https://lab.the-kidpreneur-journey.com');

type MegaColumn = {
  eyebrow: string;
  links: { label: string; href: string; active?: boolean; badge?: string; icon?: string; desc?: string }[];
};

type MegaMenu = {
  columns: MegaColumn[];
  footerLinks?: { label: string; href: string }[];
  image?: { src: string; alt: string };
  imageCaption?: string;
};

const PATHWAYS_MENU: MegaMenu = {
  columns: [
    {
      eyebrow: "The 3 Pathways",
      links: [
        { label: "Workshops", href: "/#pathways", badge: "Short & Energizing", icon: "🚀", desc: "Upcoming sessions & past workshop highlights" },
        { label: "Courses", href: "/#pathways", badge: "Structured", icon: "📚", desc: "Online & in-person progressive learning journeys" },
        { label: "Collabs", href: "/#pathways", badge: "Partnerships", icon: "🤝", desc: "Schools, Scouts, Sports Academies & Camps" },
      ],
    },
    {
      eyebrow: "Explore More",
      links: [
        { label: "All Portfolio Showcase", href: "/portfolio", icon: "✦", desc: "Browse full gallery of workshops and events" },
        { label: "8 Skills We Teach", href: "/#skills", icon: "💡", desc: "Curriculum core competencies and mindset" },
      ],
    },
  ],
  footerLinks: [
    { label: "Follow @kidpreneur.journey on Instagram", href: "https://www.instagram.com/kidpreneur.journey/" },
    { label: "Enroll in Kidpreneur Lab Cohort", href: `${LAB_PORTAL_URL}/register/lab` },
  ],
  image: {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    alt: "Young Founders Market",
  },
  imageCaption: "Hands-on experiential entrepreneurship for kids",
};

const ABOUT_MENU: MegaMenu = {
  columns: [
    {
      eyebrow: "About The Initiative",
      links: [
        { label: "Meet Dr. Sarah Sidani", href: "/#about", icon: "👩‍🏫", desc: "Founder, academic and youth educator" },
        { label: "Our Mission & Vision", href: "/#about", icon: "🌟", desc: "Inspiring curious minds to create value" },
        { label: "3-Step Approach", href: "/#about", icon: "🌱", desc: "Explore, Create, and Pitch framework" },
      ],
    },
    {
      eyebrow: "Why Choose Us",
      links: [
        { label: "Learning By Doing", href: "/#skills", icon: "🛠️", desc: "Real creation instead of passive screen time" },
        { label: "Confidence For Life", href: "/#skills", icon: "🎤", desc: "Speaking up and seeing problems as opportunities" },
      ],
    },
  ],
  footerLinks: [
    { label: "Read stories and tips on our Blog", href: "/#blog" },
  ],
  image: {
    src: "/About.png",
    alt: "Dr. Sarah Sidani",
  },
  imageCaption: "Founded by academic educator Dr. Sarah Sidani",
};

const BLOG_MENU: MegaMenu = {
  columns: [
    {
      eyebrow: "Featured Articles",
      links: [
        { label: "5 signs your child has an entrepreneurial mindset", href: "/#blog-mindset", icon: "🧠", badge: "4 min read" },
        { label: "How to help your child spot problems worth solving", href: "/#blog-problems", icon: "🔎", badge: "4 min read" },
        { label: "Why public speaking is a superpower for kids", href: "/#blog-speaking", icon: "🎤", badge: "4 min read" },
      ],
    },
    {
      eyebrow: "Practical Guides",
      links: [
        { label: "Design thinking at home: 3 simple activities", href: "/#blog-design", icon: "✏️", badge: "5 min read" },
        { label: "From lemonade stand to real pitch", href: "/#blog-lemonade", icon: "🍋", badge: "4 min read" },
        { label: "Bringing entrepreneurship to schools & clubs", href: "/#blog-schools", icon: "🏫", badge: "4 min read" },
      ],
    },
  ],
  footerLinks: [
    { label: "Browse all articles & insights", href: "/#blog" },
  ],
};

const MEGA_MENUS: Record<string, MegaMenu> = {
  "About": ABOUT_MENU,
  "Pathways": PATHWAYS_MENU,
  "Blog": BLOG_MENU,
};

const NAV_ITEMS = [
  { label: "About", hasMenu: true, href: "/#about" },
  { label: "Pathways", hasMenu: true, href: "/#pathways" },
  { label: "Skills We Teach", hasMenu: false, href: "/#skills" },
  { label: "Blog", hasMenu: true, href: "/#blog" },
  { label: "Contact", hasMenu: false, href: "/#contact" },
];

export default function MegaMenuNavbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode | null>(null);
  const { user, logout } = useAuth();

  const toggleMenu = (label: string, hasMenu: boolean) => {
    if (!hasMenu) {
      setOpenMenu(null);
      return;
    }
    setOpenMenu((current) => (current === label ? null : label));
  };

  const activeMenu = openMenu ? MEGA_MENUS[openMenu] : null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-3 bg-kidpreneur-offwhite/90 backdrop-blur-md">
      <div className="w-full max-w-7xl">
        <motion.div
          layout
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-3xl border border-zinc-200/80 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-8px_rgba(0,0,0,0.08)]"
        >
          {/* Top Navbar Row */}
          <div className="flex items-center justify-between gap-4 px-6 py-3.5 sm:px-8">
            
            {/* Logo */}
            <a href="/#home" className="flex shrink-0 items-center gap-2 group py-0.5">
              <img
                src="/kidpreneur-logo-header-56h@2x.png"
                alt="The Kidpreneur Journey"
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLElement).setAttribute('src', '/kidpreneur-logo.png');
                }}
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 lg:flex">
              {NAV_ITEMS.map((item) => {
                const isOpen = openMenu === item.label;

                if (!item.hasMenu) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => toggleMenu(item.label, false)}
                      className="rounded-full px-4 py-2 text-[14px] font-semibold text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
                    >
                      {item.label}
                    </a>
                  );
                }

                return (
                  <div key={item.label} className="relative">
                    <button
                      onClick={() => toggleMenu(item.label, item.hasMenu)}
                      aria-expanded={isOpen}
                      className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-[14px] font-semibold transition-colors ${
                        isOpen
                          ? "bg-zinc-100 text-zinc-900"
                          : "text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 text-zinc-400 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden items-center gap-2 sm:flex">
              {/* Lab Portal Badge */}
              <a
                href={`${LAB_PORTAL_URL}/register/lab`}
                className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 transition-colors shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                <span>Kidpreneur Lab</span>
                <span className="text-[10px] bg-amber-200 text-amber-800 px-1.5 py-0.2 rounded-full uppercase">Portal</span>
              </a>

              {/* User Profile / Auth Button */}
              {user ? (
                <div className="flex items-center gap-2 pl-2 border-l border-zinc-200">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-50 rounded-full border border-zinc-200 text-xs font-semibold text-zinc-800">
                    <UserIcon className="w-3.5 h-3.5 text-kidpreneur-teal" />
                    <span className="truncate max-w-[120px]">{user.fullName}</span>
                  </div>
                  <button
                    onClick={() => logout()}
                    title="Sign Out"
                    className="p-1.5 rounded-full hover:bg-zinc-100 text-zinc-400 hover:text-zinc-600 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setAuthMode('login')}
                  className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-xs font-bold text-zinc-700 hover:bg-zinc-50 transition-colors"
                >
                  Sign In
                </button>
              )}
            </div>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-full p-2 text-zinc-600 hover:bg-zinc-100 lg:hidden"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Mega Dropdown Drawer */}
          <AnimatePresence>
            {activeMenu && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="border-t border-zinc-100 bg-zinc-50/80 px-6 py-8 sm:px-8"
              >
                <div className="grid gap-8 lg:grid-cols-12">
                  <div className={`space-y-6 ${activeMenu.image ? 'lg:col-span-8' : 'lg:col-span-12'}`}>
                    <div className="grid gap-8 sm:grid-cols-2">
                      {activeMenu.columns.map((col, idx) => (
                        <div key={idx} className="space-y-3">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                            {col.eyebrow}
                          </p>
                          <ul className="space-y-2">
                            {col.links.map((link, lIdx) => (
                              <li key={lIdx}>
                                <a
                                  href={link.href}
                                  onClick={() => setOpenMenu(null)}
                                  className="group flex items-start gap-3 rounded-2xl p-2.5 transition-colors hover:bg-white hover:shadow-xs"
                                >
                                  {link.icon && (
                                    <span className="text-xl shrink-0 mt-0.5">
                                      {link.icon}
                                    </span>
                                  )}
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                      <span className="text-sm font-bold text-zinc-800 group-hover:text-kidpreneur-teal transition-colors">
                                        {link.label}
                                      </span>
                                      {link.badge && (
                                        <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-800">
                                          {link.badge}
                                        </span>
                                      )}
                                    </div>
                                    {link.desc && (
                                      <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">
                                        {link.desc}
                                      </p>
                                    )}
                                  </div>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {activeMenu.footerLinks && (
                      <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-zinc-200/60 text-xs font-semibold text-zinc-600">
                        {activeMenu.footerLinks.map((fl, fIdx) => (
                          <a
                            key={fIdx}
                            href={fl.href}
                            onClick={() => setOpenMenu(null)}
                            className="hover:text-kidpreneur-teal transition-colors flex items-center gap-1.5"
                          >
                            <span>{fl.label}</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  {activeMenu.image && (
                    <div className="lg:col-span-4 flex flex-col justify-between rounded-3xl overflow-hidden bg-white p-4 border border-zinc-200/80 shadow-xs">
                      <div className="aspect-4/3 rounded-2xl overflow-hidden mb-3">
                        <img
                          src={activeMenu.image.src}
                          alt={activeMenu.image.alt}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      {activeMenu.imageCaption && (
                        <p className="text-xs text-zinc-500 font-medium">
                          {activeMenu.imageCaption}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Navigation Drawer */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-zinc-100 px-6 py-6 lg:hidden space-y-4"
              >
                <div className="space-y-1">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2 rounded-xl text-base font-bold text-zinc-800 hover:bg-zinc-50"
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="/portfolio"
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 rounded-xl text-base font-bold text-zinc-800 hover:bg-zinc-50"
                  >
                    All Workshops & Portfolio
                  </a>
                </div>

                <div className="pt-4 border-t border-zinc-100 flex flex-col gap-2">
                  <a
                    href={`${LAB_PORTAL_URL}/register/lab`}
                    className="flex items-center justify-center gap-2 rounded-2xl bg-amber-400 py-3 text-sm font-bold text-slate-900 shadow-xs"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Enroll in Kidpreneur Lab</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <AuthModal
        isOpen={authMode !== null}
        initialMode={authMode || 'login'}
        onClose={() => setAuthMode(null)}
      />
    </header>
  );
}
