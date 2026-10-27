import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, X, Sparkles, User as UserIcon, LogOut, ArrowRight } from "lucide-react";
import {
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";
import { useAuth } from "../../context/AuthContext";
import AuthModal from "../auth/AuthModal";
import type { AuthMode } from "../auth/AuthModal";

type MegaColumn = {
  eyebrow: string;
  links: { label: string; href: string; active?: boolean; badge?: string; icon?: string }[];
};

type MegaMenu = {
  columns: MegaColumn[];
  footerLinks?: { label: string; href: string }[];
  showSocials?: boolean;
  image: { src: string; alt: string };
  imageCaption?: string;
};

const LAB_PORTAL_URL = import.meta.env.VITE_LAB_URL || (import.meta.env.DEV ? 'http://localhost:3000' : 'https://lab.the-kidpreneur-journey.com');

const ACTIVITIES_MENU: MegaMenu = {
  columns: [
    {
      eyebrow: "Activity Formats",
      links: [
        { label: "Upcoming Workshops", href: "/portfolio?filter=UPCOMING", badge: "Register", icon: "🚀" },
        { label: "Past Activities", href: "/portfolio?filter=COMPLETED", badge: "Highlights", icon: "🏆" },
        { label: "Instagram Posts", href: "/portfolio?filter=INSTAGRAM", badge: "@kidpreneur", icon: "📸" },
        { label: "All Portfolio Showcase", href: "/portfolio", icon: "✦" },
      ],
    },
    {
      eyebrow: "Learning Tracks",
      links: [
        { label: "Entrepreneurship & Pitching", href: "/#activities", icon: "💡" },
        { label: "Artificial Intelligence & Logic", href: "/#activities", icon: "🤖" },
        { label: "Robotics & Maker Circuits", href: "/#activities", icon: "⚙️" },
        { label: "Digital Storytelling & Media", href: "/#activities", icon: "🎬" },
      ],
    },
  ],
  footerLinks: [
    { label: "Follow @kidpreneur.journey on Instagram", href: "https://www.instagram.com/kidpreneur.journey/" },
    { label: "Enroll in Kidpreneur Lab Cohort", href: `${LAB_PORTAL_URL}/register/lab` },
  ],
  showSocials: true,
  image: {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    alt: "Young Founders Market",
  },
  imageCaption: "Young founders pitching at our Young Founders Market",
};

const JOURNEY_MENU: MegaMenu = {
  columns: [
    {
      eyebrow: "Our Philosophy",
      links: [
        { label: "Welcome & Mission", href: "/#about", icon: "🌟" },
        { label: "F.A.I.L. (First Attempt In Learning)", href: "/#about", active: true, icon: "🌱" },
        { label: "Screen Time to Active Creation", href: "/#about", icon: "🎨" },
      ],
    },
    {
      eyebrow: "The Kidpreneur Lab",
      links: [
        { label: "10-Session Roadmap", href: LAB_PORTAL_URL, icon: "🗺️" },
        { label: "Interactive Tools & Calculators", href: LAB_PORTAL_URL, badge: "Portal", icon: "🧮" },
        { label: "Register Your Child in the Lab", href: `${LAB_PORTAL_URL}/register/lab`, badge: "Enroll Now", icon: "✨" },
      ],
    },
  ],
  footerLinks: [
    { label: "Founded & led by Dr. Sarah Sidani", href: "https://www.instagram.com/kidpreneur.journey/" },
  ],
  showSocials: false,
  image: {
    src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    alt: "Hands-on maker lab",
  },
  imageCaption: "Hands-on experiential learning for ages 7–16",
};

const MEGA_MENUS: Record<string, MegaMenu> = {
  "Our Activities": ACTIVITIES_MENU,
  "The Journey": JOURNEY_MENU,
};

const NAV_ITEMS = [
  { label: "Our Activities", hasMenu: true },
  { label: "The Journey", hasMenu: true },
  { label: "Kidpreneur Lab", hasMenu: false, href: `${LAB_PORTAL_URL}/register/lab`, isLabBadge: true },
  { label: "Portfolio", hasMenu: false, href: "/portfolio" },
  { label: "Contact", hasMenu: false, href: "/#contact" },
];

const SOCIALS = [
  { href: "https://www.instagram.com/kidpreneur.journey/", label: "Instagram", icon: FaInstagram },
  { href: "https://wa.me/96179332143", label: "WhatsApp", icon: FaWhatsapp },
  { href: "#", label: "YouTube", icon: FaYoutube },
  { href: "#", label: "LinkedIn", icon: FaLinkedin },
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
            <Link to="/" className="flex shrink-0 items-center group py-0.5">
              <img
                src="/logo.jpg"
                alt="The Kidpreneur Journey - By Dr. Sarah Sidani"
                className="h-11 sm:h-12 w-auto max-w-[200px] object-contain rounded-xl shadow-xs group-hover:scale-[1.02] transition-transform"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 lg:flex">
              {NAV_ITEMS.map((item) => {
                const isOpen = openMenu === item.label;

                if (!item.hasMenu) {
                  if (item.isLabBadge) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 transition-colors shadow-xs ml-1"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                        <span>Kidpreneur Lab</span>
                        <span className="text-[10px] bg-amber-200 text-amber-800 px-1.5 py-0.2 rounded-full uppercase">Portal</span>
                      </a>
                    );
                  }

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => toggleMenu(item.label, false)}
                      className="rounded-full px-4 py-2 text-[14px] font-medium text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
                    >
                      {item.label}
                    </a>
                  );
                }

                return (
                  <button
                    key={item.label}
                    onClick={() => toggleMenu(item.label, item.hasMenu)}
                    aria-expanded={isOpen}
                    className={`flex items-center gap-1 rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${
                      isOpen
                        ? "bg-zinc-100 text-zinc-900 font-semibold"
                        : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden shrink-0 items-center gap-3 lg:flex">
              {user ? (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full">
                    <div className="w-6 h-6 rounded-full bg-kidpreneur-teal flex items-center justify-center text-white text-xs">
                      <UserIcon className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-semibold text-kidpreneur-slate text-xs">{user.fullName}</span>
                  </div>
                  <button 
                    onClick={logout}
                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    title="Log Out"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => setAuthMode('login')}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-bold text-zinc-800 transition-colors hover:bg-zinc-100"
                  >
                    Sign In
                  </button>
                  <a
                    href={`${LAB_PORTAL_URL}/register/lab`}
                    className="rounded-full bg-kidpreneur-teal px-5 py-2 text-xs font-bold text-white transition-all hover:bg-teal-700 shadow-sm flex items-center gap-1.5"
                  >
                    <span>Enroll in Lab</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="flex items-center justify-center rounded-full p-2 text-zinc-700 lg:hidden"
              aria-label="Open menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Mega Dropdown */}
          <AnimatePresence initial={false}>
            {activeMenu && (
              <motion.div
                key={openMenu}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="hidden overflow-hidden lg:block border-t border-zinc-100 bg-slate-50/40"
              >
                <div className="grid grid-cols-[1fr_1fr_auto] gap-10 px-8 pb-8 pt-6">
                  {activeMenu.columns.map((col, colIdx) => (
                    <div key={col.eyebrow} className="flex flex-col gap-5">
                      <span className="w-fit rounded-full border border-zinc-200/80 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-kidpreneur-teal">
                        {col.eyebrow}
                      </span>
                      <ul className="flex flex-col gap-3">
                        {col.links.map((link) => (
                          <li key={link.label}>
                            <a
                              href={link.href}
                              onClick={() => setOpenMenu(null)}
                              className="group flex items-center gap-2.5 text-base font-semibold text-zinc-800 hover:text-kidpreneur-teal transition-colors"
                            >
                              {link.icon && <span className="text-base">{link.icon}</span>}
                              <span className="group-hover:translate-x-0.5 transition-transform">{link.label}</span>
                              {link.badge && (
                                <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                                  link.badge === 'Register' || link.badge === 'Enroll Now'
                                    ? 'bg-amber-100 text-amber-800'
                                    : link.badge === '@kidpreneur'
                                    ? 'bg-pink-100 text-pink-700'
                                    : 'bg-zinc-900 text-white'
                                }`}>
                                  {link.badge}
                                </span>
                              )}
                            </a>
                          </li>
                        ))}
                      </ul>

                      {colIdx === activeMenu.columns.length - 1 && activeMenu.footerLinks && (
                        <div className="mt-auto flex flex-col gap-2 pt-6 border-t border-slate-200/60">
                          {activeMenu.footerLinks.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="text-xs font-semibold text-slate-500 hover:text-kidpreneur-teal transition-colors"
                            >
                              {item.label} &rarr;
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Visual Preview Card */}
                  <div className="relative hidden h-60 w-72 flex-col justify-end overflow-hidden rounded-2xl md:flex border border-slate-200 shadow-sm">
                    <img
                      src={activeMenu.image.src}
                      alt={activeMenu.image.alt}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    {activeMenu.imageCaption && (
                      <div className="relative z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 pt-10">
                        <p className="text-xs font-semibold text-white">
                          {activeMenu.imageCaption}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Socials bar */}
                {activeMenu.showSocials && (
                  <div className="flex items-center justify-between px-8 py-3 bg-white border-t border-zinc-100">
                    <span className="text-xs font-semibold text-slate-500">
                      Join our young founder community online:
                    </span>
                    <div className="flex items-center gap-4">
                      {SOCIALS.map(({ href, label, icon: Icon }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={label}
                          className="text-zinc-500 hover:text-pink-600 transition-colors"
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Navigation Panel */}
          <AnimatePresence initial={false}>
            {mobileOpen && (
              <motion.div
                key="mobile-panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden lg:hidden border-t border-zinc-100"
              >
                <div className="flex flex-col gap-1 px-6 py-4">
                  {NAV_ITEMS.map((item) =>
                    item.hasMenu ? (
                      <div key={item.label} className="border-b border-zinc-100 pb-2 mb-1">
                        <button
                          onClick={() => toggleMenu(item.label, true)}
                          className="flex items-center justify-between w-full py-2.5 text-left text-sm font-bold text-zinc-800"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              openMenu === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {openMenu === item.label && activeMenu && (
                          <div className="ml-2 flex flex-col gap-2 pl-3 border-l-2 border-teal-500 py-2">
                            {activeMenu.columns.flatMap((c) =>
                              c.links.map((link) => (
                                <a
                                  key={link.label}
                                  href={link.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center justify-between text-xs font-medium text-zinc-600 py-1"
                                >
                                  <span>{link.label}</span>
                                  {link.badge && (
                                    <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded font-bold">
                                      {link.badge}
                                    </span>
                                  )}
                                </a>
                              ))
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="py-2.5 text-sm font-semibold text-zinc-700"
                      >
                        {item.label}
                      </a>
                    )
                  )}

                  {/* Mobile Kidpreneur Lab CTA */}
                  <div className="mt-3 pt-3 border-t border-zinc-100 flex flex-col gap-2">
                    <a
                      href={`${LAB_PORTAL_URL}/register/lab`}
                      className="rounded-2xl bg-kidpreneur-teal text-white font-bold py-3 text-center text-sm shadow-sm"
                    >
                      Enroll in Kidpreneur Lab
                    </a>
                  </div>
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
