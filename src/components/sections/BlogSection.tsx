import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { BLOG_POSTS, type BlogPost } from "../../data/blogPosts";

export default function BlogSection() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  // Sync with URL hash for direct links like #blog-mindset
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash.startsWith("blog-")) {
        const found = BLOG_POSTS.find((p) => p.id === hash);
        if (found) {
          setActivePost(found);
          const el = document.getElementById("blog");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      } else if (hash === "blog") {
        setActivePost(null);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const openBlog = (post: BlogPost) => {
    setActivePost(post);
    window.history.pushState(null, "", `#${post.id}`);
    const el = document.getElementById("blog");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const closeBlog = () => {
    setActivePost(null);
    window.history.pushState(null, "", "#blog");
    const el = document.getElementById("blog");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <section id="blog" className="scroll-mt-24 py-16 sm:py-24 bg-[#fffdf7] border-t-2 border-[#dfe6f5]">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6">
        {/* Full Blog Post Reader View */}
        {activePost ? (
          <div className="max-w-[720px] mx-auto">
            {/* Back button */}
            <button
              onClick={closeBlog}
              className="inline-flex items-center gap-2 font-bold text-sm text-[#1c2455] hover:text-[#2f7de1] mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to the blog</span>
            </button>

            {/* Post Header */}
            <div className="mb-8">
              <span className="inline-block bg-[#eef5ff] text-[#1c2455] border border-[#dfe6f5] font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                {activePost.audience}
              </span>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c2455] leading-tight mb-3">
                {activePost.title}
              </h1>
              <p className="text-sm font-bold text-[#4d5580]">
                By {activePost.author} · {activePost.readTime}
              </p>
            </div>

            {/* Post Content */}
            <div className="space-y-6 text-[#1c2455] text-base sm:text-lg leading-relaxed font-sans">
              {activePost.sections.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  {section.heading && (
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1c2455] mt-6 mb-2">
                      {section.heading}
                    </h2>
                  )}

                  {section.paragraphs?.map((p, pIdx) => (
                    <p key={pIdx} className="text-[#1c2455] leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {section.listItems && (
                    <ul className="list-disc pl-6 space-y-2 text-[#1c2455]">
                      {section.listItems.map((item, itemIdx) => (
                        <li key={itemIdx} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.note && (
                    <div className="bg-[#eef5ff] border-l-6 border-[#ffc93c] rounded-xl p-4 sm:p-5 my-4 text-sm sm:text-base text-[#1c2455]">
                      <strong>Note: </strong>
                      {section.note}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Post Bottom CTA */}
            <div className="mt-10 pt-8 border-t-2 border-[#dfe6f5] flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={closeBlog}
                className="btn-alt text-sm"
              >
                ← Back to the blog
              </button>

              <a
                href={activePost.ctaHref || "#pathways"}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(activePost.ctaHref ? activePost.ctaHref.replace("#", "") : "pathways");
                }}
                className="btn-sun text-sm"
              >
                {activePost.ctaText || "Explore our pathways"}
              </a>
            </div>
          </div>
        ) : (
          /* Blog Grid View (All 6 posts) */
          <div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c2455] mb-4">
              Blog
            </h1>
            <p className="text-lg sm:text-xl text-[#4d5580] leading-relaxed mb-10 max-w-[750px]">
              Stories, ideas, and tips for raising young entrepreneurs. Practical insights for parents, teachers, and young creators.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {BLOG_POSTS.map((post) => (
                <article
                  key={post.id}
                  onClick={() => openBlog(post)}
                  className="bg-white border-2 border-[#1c2455] rounded-[20px] p-6 shadow-[3px_3px_0_#1c2455] hover:shadow-[5px_5px_0_#1c2455] hover:-translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-[#4d5580] mb-3">
                      <span>{post.audience}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#1c2455] mb-2 leading-snug hover:text-[#2f7de1] transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-sm text-[#4d5580] leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Read Blog CTA (Item 4 in Notes-To-Change.md: "read blog not read article") */}
                  <div className="pt-4 border-t border-[#dfe6f5] flex items-center justify-between text-xs font-bold text-[#1c2455]">
                    <span className="text-[#4d5580]">By {post.author}</span>
                    <span className="inline-flex items-center gap-1 text-[#2f7de1]">
                      <span>Read blog</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
