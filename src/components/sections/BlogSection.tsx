import { useState, useEffect } from 'react';
import { BookOpen, Clock, ArrowRight, X, Share2, Check } from 'lucide-react';
import { BLOG_POSTS, type BlogPost } from '../../data/blogPosts';

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [copied, setCopied] = useState(false);

  // Check URL hash on mount or change to open article directly if requested
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('blog-')) {
        const found = BLOG_POSTS.find(p => p.id === hash);
        if (found) {
          setSelectedPost(found);
        }
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const openPost = (post: BlogPost) => {
    setSelectedPost(post);
    window.location.hash = post.id;
  };

  const closePost = () => {
    setSelectedPost(null);
    window.location.hash = 'blog';
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="blog" className="py-20 lg:py-28 bg-kidpreneur-offwhite border-b-2 border-slate-900/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-900 text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
            <span>Articles & Insights</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 mb-4 tracking-tight">
            Stories, Ideas & Tips
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
            Practical insights for parents, teachers, and young creators to raise resilient, entrepreneurial thinkers.
          </p>
        </div>

        {/* 6 Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id}
              onClick={() => openPost(post)}
              className="group cursor-pointer bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-900 shadow-[3px_3px_0px_#1e293b] hover:shadow-[6px_6px_0px_#1e293b] hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Card Top Meta */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border-2 border-slate-200 flex items-center justify-center text-2xl shadow-xs group-hover:scale-110 transition-transform">
                    {post.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full">
                      {post.audience}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-kidpreneur-teal transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-slate-600 leading-relaxed font-sans line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-800">
                <span className="text-slate-500 font-medium">By {post.author}</span>
                <span className="inline-flex items-center gap-1 text-kidpreneur-teal group-hover:translate-x-1 transition-transform">
                  Read article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* In-Page Reader Modal (Unified Single Page Experience) */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fade-in">
          <div 
            className="relative w-full max-w-3xl bg-white rounded-3xl border-3 border-slate-900 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b-2 border-slate-900 flex items-center justify-between z-10">
              <button 
                onClick={closePost}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full transition-colors"
              >
                ← Back to the blog
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyLink}
                  title="Share article link"
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                </button>
                <button 
                  onClick={closePost}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-rose-100 text-slate-700 hover:text-rose-700 flex items-center justify-center font-bold transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Article Body */}
            <div className="overflow-y-auto p-6 sm:p-10 space-y-6">
              
              {/* Article Top Badge & Meta */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                    {selectedPost.audience}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    • {selectedPost.readTime}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    • By {selectedPost.author}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 leading-tight">
                  {selectedPost.title}
                </h1>
              </div>

              <hr className="border-slate-200" />

              {/* Formatted Sections */}
              <div className="space-y-6 text-slate-700 font-sans leading-relaxed text-base">
                {selectedPost.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-3">
                    {sec.heading && (
                      <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mt-6 pt-2">
                        {sec.heading}
                      </h2>
                    )}

                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="leading-relaxed text-slate-700">
                        {p}
                      </p>
                    ))}

                    {sec.listItems && sec.listItems.length > 0 && (
                      <ul className="space-y-2 pl-4 border-l-2 border-amber-300 my-4">
                        {sec.listItems.map((li, lIdx) => (
                          <li key={lIdx} className="text-sm sm:text-base text-slate-800 font-medium">
                            {li}
                          </li>
                        ))}
                      </ul>
                    )}

                    {sec.note && (
                      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-xl text-slate-800 text-sm font-medium my-4">
                        {sec.note}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Article CTA Footer */}
              <div className="pt-8 border-t-2 border-slate-900/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-6 rounded-2xl">
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-base">Ready to build these skills?</h4>
                  <p className="text-xs text-slate-600">Join our hands-on workshops and progressive courses.</p>
                </div>
                {selectedPost.ctaHref && (
                  <a 
                    href={selectedPost.ctaHref}
                    onClick={closePost}
                    className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 border-2 border-slate-900 px-6 py-2.5 rounded-full font-bold text-sm shadow-[2px_2px_0px_#1e293b] transition-all"
                  >
                    <span>{selectedPost.ctaText || 'Explore pathways'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}
