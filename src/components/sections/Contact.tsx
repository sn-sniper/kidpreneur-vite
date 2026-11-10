import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { apiClient } from "../../services/api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pathway: "Workshops",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await apiClient("contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `[Interest: ${formData.pathway}] [Phone: ${
            formData.phone || "N/A"
          }] ${formData.message}`,
        }),
      });
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        pathway: "Workshops",
        message: "",
      });
    } catch (err: unknown) {
      console.warn("API fallback to mailto:", err);
      window.location.href = `mailto:hello@the-kidpreneur-journey.com?subject=The%20Kidpreneur%20Journey%20-${encodeURIComponent(
        formData.pathway
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${
          formData.phone
        }\n\nMessage:\n${formData.message}`
      )}`;
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-16 sm:py-24 bg-[#fffdf7] border-t-2 border-[#dfe6f5]"
    >
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6">
        {/* Title & Introduction */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c2455] mb-4">
          Ready to start the journey?
        </h1>
        <p className="text-lg sm:text-xl text-[#4d5580] leading-relaxed mb-10 max-w-[750px]">
          Join an upcoming workshop, enroll in a course, or bring The Kidpreneur
          Journey to your school, scouts, sports academy, or camp.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Cards (2 Instagram + 1 WhatsApp) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Card 1: Instagram (The Kidpreneur Journey) */}
            <a
              href="https://www.instagram.com/kidpreneur.journey/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border-2 border-[#1c2455] rounded-[20px] p-5 sm:p-6 shadow-[3px_3px_0_#1c2455] hover:shadow-[5px_5px_0_#1c2455] hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#ffc93c] border-2 border-[#1c2455] flex items-center justify-center text-[#1c2455] shrink-0">
                  <FaInstagram className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#4d5580]">
                    Instagram
                  </span>
                  <div className="text-base sm:text-lg font-bold text-[#1c2455]">
                    @kidpreneur.journey
                  </div>
                  <p className="text-xs text-[#4d5580] mt-1">
                    The Kidpreneur Journey official page.
                  </p>
                </div>
              </div>
            </a>

            {/* Card 2: WhatsApp (+961 79 332 143) */}
            <a
              href="https://wa.me/96179332143"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border-2 border-[#1c2455] rounded-[20px] p-5 sm:p-6 shadow-[3px_3px_0_#1c2455] hover:shadow-[5px_5px_0_#1c2455] hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#2f7de1] border-2 border-[#1c2455] flex items-center justify-center text-white shrink-0">
                  <FaWhatsapp className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#4d5580]">
                    Chat on WhatsApp
                  </span>
                  <div className="text-base sm:text-lg font-bold text-[#1c2455]">
                    +961 79 332 143
                  </div>
                  <p className="text-xs text-[#4d5580] mt-1">
                    Instant parent & organizer support.
                  </p>
                </div>
              </div>
            </a>

            {/* Card 3: Instagram (Dr. Sarah Sidani) */}
            <a
              href="https://www.instagram.com/dr.sarahsidani/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border-2 border-[#1c2455] rounded-[20px] p-5 sm:p-6 shadow-[3px_3px_0_#1c2455] hover:shadow-[5px_5px_0_#1c2455] hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1c2455] border-2 border-[#1c2455] flex items-center justify-center text-[#ffc93c] shrink-0">
                  <FaInstagram className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#4d5580]">
                    Instagram
                  </span>
                  <div className="text-base sm:text-lg font-bold text-[#1c2455]">
                    @dr.sarahsidani
                  </div>
                  <p className="text-xs text-[#4d5580] mt-1">
                    Dr. Sarah Sidani personal & behind the scenes.
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Quick Inquiry Form */}
          <div className="lg:col-span-7 bg-white border-2 border-[#1c2455] rounded-[20px] p-6 sm:p-8 shadow-[3px_3px_0_#1c2455]">
            <h2 className="font-display text-2xl font-bold text-[#1c2455] mb-2">
              Send us a message
            </h2>
            <p className="text-sm text-[#4d5580] mb-6">
              Let us know how we can help your child or organization.
            </p>

            {success ? (
              <div className="p-6 bg-[#eef5ff] border-2 border-[#2f7de1] rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-[#2f7de1] mx-auto shrink-0" />
                <h3 className="font-display text-xl font-bold text-[#1c2455]">
                  Message Sent!
                </h3>
                <p className="text-sm text-[#4d5580]">
                  Thank you! We will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="btn-alt text-xs mt-3 inline-flex items-center justify-center whitespace-nowrap"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold uppercase text-[#1c2455] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Maya Haddad"
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-[#1c2455] text-sm text-[#1c2455] focus:outline-none focus:ring-2 focus:ring-[#2f7de1]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase text-[#1c2455] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="maya@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-[#1c2455] text-sm text-[#1c2455] focus:outline-none focus:ring-2 focus:ring-[#2f7de1]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold uppercase text-[#1c2455] mb-1">
                      Phone Number (optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+961 ..."
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-[#1c2455] text-sm text-[#1c2455] focus:outline-none focus:ring-2 focus:ring-[#2f7de1]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase text-[#1c2455] mb-1">
                      Interested In
                    </label>
                    <select
                      value={formData.pathway}
                      onChange={(e) =>
                        setFormData({ ...formData, pathway: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-[#1c2455] text-sm text-[#1c2455] bg-white focus:outline-none focus:ring-2 focus:ring-[#2f7de1]"
                    >
                      <option value="Workshops">Workshops</option>
                      <option value="Courses">Courses (Online)</option>
                      <option value="Collabs">Collabs (Schools, Scouts, Camps)</option>
                      <option value="General">General Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase text-[#1c2455] mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your child's age or your school/group requirements..."
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-[#1c2455] text-sm text-[#1c2455] focus:outline-none focus:ring-2 focus:ring-[#2f7de1]"
                  />
                </div>

                {/* Send Message Button - Icon and text strictly side-by-side on one line */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-sun text-sm inline-flex items-center justify-center gap-2 whitespace-nowrap w-full sm:w-auto px-8"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
