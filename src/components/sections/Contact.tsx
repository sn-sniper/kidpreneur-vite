import { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa6';
import { apiClient } from '../../services/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pathway: 'Workshops',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await apiClient('contact', {
        method: 'POST',
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `[Interest: ${formData.pathway}] [Phone: ${formData.phone || 'N/A'}] ${formData.message}`
        })
      });
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', pathway: 'Workshops', message: '' });
    } catch (err: unknown) {
      console.warn('API error submitting contact message:', err);
      // Even if API is down, fallback to opening user mail client
      window.location.href = `mailto:hello@the-kidpreneur-journey.com?subject=The%20Kidpreneur%20Journey%20-${encodeURIComponent(formData.pathway)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`)}`;
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-b-2 border-slate-900/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 mb-4 tracking-tight">
            Ready to Start the Journey?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
            Join an upcoming workshop, enroll in a course, or bring The Kidpreneur Journey to your school, scouts, or sports academy.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <a 
              href="mailto:hello@the-kidpreneur-journey.com?subject=The%20Kidpreneur%20Journey"
              className="group block bg-kidpreneur-offwhite rounded-3xl p-6 border-2 border-slate-900 shadow-[3px_3px_0px_#1e293b] hover:shadow-[5px_5px_0px_#1e293b] hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-200 border-2 border-slate-900 flex items-center justify-center text-slate-900 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Us Directly</span>
                  <div className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    hello@the-kidpreneur-journey.com
                  </div>
                  <p className="text-xs text-slate-500 mt-1">We typically reply within 24 hours.</p>
                </div>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a 
              href="https://wa.me/96179332143" 
              target="_blank" 
              rel="noreferrer"
              className="group block bg-emerald-50 rounded-3xl p-6 border-2 border-slate-900 shadow-[3px_3px_0px_#1e293b] hover:shadow-[5px_5px_0px_#1e293b] hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-400 border-2 border-slate-900 flex items-center justify-center text-slate-900 shrink-0">
                  <FaWhatsapp className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Chat on WhatsApp</span>
                  <div className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    +961 79 332 143
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Instant answers for parent & school inquiries.</p>
                </div>
              </div>
            </a>

            {/* Instagram Card */}
            <a 
              href="https://www.instagram.com/kidpreneur.journey/" 
              target="_blank" 
              rel="noreferrer"
              className="group block bg-pink-50 rounded-3xl p-6 border-2 border-slate-900 shadow-[3px_3px_0px_#1e293b] hover:shadow-[5px_5px_0px_#1e293b] hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-400 border-2 border-slate-900 flex items-center justify-center text-slate-900 shrink-0">
                  <FaInstagram className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-pink-800">Follow Our Journey</span>
                  <div className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-pink-600 transition-colors">
                    @kidpreneur.journey
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Workshop stories, kid pitches, and behind the scenes.</p>
                </div>
              </div>
            </a>

          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-slate-900 shadow-[4px_4px_0px_#1e293b]">
              
              {success ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-900">Message Received!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you for reaching out. Dr. Sarah and the team will get in touch with you shortly.
                  </p>
                  <button 
                    onClick={() => setSuccess(false)}
                    className="mt-4 px-6 py-2 rounded-full border-2 border-slate-900 text-xs font-bold bg-amber-400 hover:bg-amber-300"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">
                    Send Us a Message
                  </h3>

                  {error && (
                    <div className="flex items-center gap-2 p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Parent / Educator name"
                        className="w-full px-4 py-3 rounded-2xl border-2 border-slate-900/20 focus:border-slate-900 focus:outline-hidden text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-2xl border-2 border-slate-900/20 focus:border-slate-900 focus:outline-hidden text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+961 ..."
                        className="w-full px-4 py-3 rounded-2xl border-2 border-slate-900/20 focus:border-slate-900 focus:outline-hidden text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Pathway of Interest
                      </label>
                      <select 
                        value={formData.pathway}
                        onChange={(e) => setFormData({ ...formData, pathway: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border-2 border-slate-900/20 focus:border-slate-900 focus:outline-hidden text-sm font-medium bg-white"
                      >
                        <option value="Workshops">Workshops (Upcoming or Past)</option>
                        <option value="Courses - Online">Courses (Online)</option>
                        <option value="Courses - In Person">Courses (In-Person)</option>
                        <option value="Collab - School">Collab with School</option>
                        <option value="Collab - Scouts">Collab with Scouts</option>
                        <option value="Collab - Sports Academy">Collab with Sports Academy</option>
                        <option value="Collab - Camps">Collab with Camps</option>
                        <option value="General Inquiry">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Message *
                    </label>
                    <textarea 
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your child's age, your school, or your specific question..."
                      className="w-full px-4 py-3 rounded-2xl border-2 border-slate-900/20 focus:border-slate-900 focus:outline-hidden text-sm font-medium"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 border-2 border-slate-900 py-4 rounded-2xl font-bold text-base shadow-[3px_3px_0px_#1e293b] hover:shadow-[1px_1px_0px_#1e293b] hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-50"
                  >
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
