import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  const LAB_PORTAL_URL = "https://lab.the-kidpreneur-journey.com";

  return (
    <section id="home" className="scroll-mt-24 pt-12 sm:pt-16 pb-16 bg-[#fffdf7]">
      {/* Hero Header Area */}
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6">
        {/* Subheader Pill */}
        <div className="mb-4">
          <span className="inline-block bg-[#eef5ff] text-[#1c2455] border border-[#dfe6f5] font-extrabold text-xs sm:text-sm px-4 py-1.5 rounded-full uppercase tracking-wider">
            Where Kids Turn Ideas into Actions
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1c2455] leading-[1.12] mb-5 tracking-tight max-w-[850px]">
          Where young minds learn to think, create, and lead.
        </h1>

        {/* Lead Paragraph */}
        <p className="text-lg sm:text-xl text-[#4d5580] leading-relaxed max-w-[700px] mb-8 font-sans">
          The Kidpreneur Journey helps children discover their ideas, build
          real-world skills, and gain the confidence to turn curiosity into
          action.
        </p>

        {/* CTA Buttons (Strictly inline, never wrapping icons) */}
        <div className="flex flex-wrap items-center gap-3.5 mb-10">
          {/* Explore Lab Button linking to lab.the-kidpreneur-journey.com */}
          <a
            href={LAB_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sun text-base inline-flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <span>Explore Lab</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>

          {/* Checkout Pathways Button linking to #pathways */}
          <a
            href="#pathways"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("pathways");
            }}
            className="btn-alt text-base inline-flex items-center justify-center whitespace-nowrap"
          >
            Checkout Pathways
          </a>
        </div>
      </div>

      {/* Band: Every child has ideas worth listening to */}
      <div className="bg-[#eef5ff] border-y-2 border-[#dfe6f5] py-10 sm:py-12 mt-6">
        <div className="max-w-[1040px] mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1c2455] mb-3">
            Every child has ideas worth listening to.
          </h2>
          <p className="text-[#4d5580] text-base sm:text-lg leading-relaxed max-w-[800px] m-0">
            Entrepreneurship is more than starting a business. It is a way of seeing
            problems as opportunities, working with others, and speaking up with
            confidence. Through hands-on, playful, and purposeful learning, we help
            kids build a mindset and skills they will use for life.
          </p>
        </div>
      </div>
    </section>
  );
}
