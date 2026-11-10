import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <footer className="bg-[#1c2455] text-[#fffdf7] border-t-4 border-[#ffc93c] py-14">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Byline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("home");
              }}
              className="flex items-center gap-2 group"
            >
              <img
                src="/kidpreneur-logo-light.png"
                alt="The Kidpreneur Journey"
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = "none";
                }}
              />
            </a>
            <p className="text-xs text-[#dfe6f5]">
              Founded & led by <strong className="text-[#ffc93c]">Dr. Sarah Sidani</strong>
            </p>
          </div>

          {/* Navigation Links with Smooth Scrolling */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm font-bold text-[#dfe6f5]">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("about");
              }}
              className="hover:text-[#ffc93c] transition-colors"
            >
              About
            </a>
            <a
              href="#pathways"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("pathways");
              }}
              className="hover:text-[#ffc93c] transition-colors"
            >
              Pathways
            </a>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("skills");
              }}
              className="hover:text-[#ffc93c] transition-colors"
            >
              Skills We Teach
            </a>
            <a
              href="#blog"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("blog");
              }}
              className="hover:text-[#ffc93c] transition-colors"
            >
              Blog
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
              className="hover:text-[#ffc93c] transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/dr.sarahsidani/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#12163a] hover:bg-[#ffc93c] hover:text-[#1c2455] text-white flex items-center justify-center transition-colors border border-[#2c3570]"
              title="Dr. Sarah Sidani on Instagram"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/kidpreneur.journey/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#12163a] hover:bg-[#ffc93c] hover:text-[#1c2455] text-white flex items-center justify-center transition-colors border border-[#2c3570]"
              title="The Kidpreneur Journey on Instagram"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/96179332143"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#12163a] hover:bg-[#2f7de1] text-white flex items-center justify-center transition-colors border border-[#2c3570]"
              title="Chat on WhatsApp"
            >
              <FaWhatsapp className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#2c3570] text-center text-xs text-[#dfe6f5] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 The Kidpreneur Journey. All rights reserved.</p>
          <p className="text-[#dfe6f5]">Where young minds learn to think, create, and lead.</p>
        </div>
      </div>
    </footer>
  );
}
