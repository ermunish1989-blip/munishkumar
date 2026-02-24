import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import DOMPurify from 'dompurify';
import { getBlogPosts, getFeaturedPost } from '../utils/blogStorage';

import BottomCTA from '../components/home/BottomCTA';

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        const posts = getBlogPosts();
        const featured = getFeaturedPost();

        // Find the post by slug
        let foundPost = posts.find(p => p.slug === slug);
        if (!foundPost && featured?.slug === slug) {
            foundPost = featured;
        }

        if (!foundPost) {
            navigate('/blog', { replace: true });
            return;
        }

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPost(foundPost);

        // Get related posts (same category, excluding current)
        const related = posts
            .filter(p => p.category === foundPost.category && p.slug !== foundPost.slug)
            .slice(0, 3);

        // If not enough related, just get latest
        if (related.length < 3) {
            const extra = posts.filter(p => p.slug !== foundPost.slug && !related.find(r => r.slug === p.slug));
            related.push(...extra.slice(0, 3 - related.length));
        }

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setRelatedPosts(related);
        // Scroll to top when changing posts
        window.scrollTo(0, 0);
    }, [slug, navigate]);

    if (!post) return null;

    const shareUrl = window.location.href;
    const shareTitle = encodeURIComponent(post.title);

    const faqSchema = post.faq && post.faq.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": post.faq.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    } : null;

    return (
        <div className="bg-[#050506] min-h-screen text-white pt-32 pb-20 font-sans">
            <Helmet>
                <title>{post.title} | Munish Kumar Blog</title>
                <meta name="description" content={post.hook} />
                {faqSchema && (
                    <script type="application/ld+json">
                        {JSON.stringify(faqSchema)}
                    </script>
                )}
            </Helmet>

            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                {/* Back Link */}
                <Link to="/blog" className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#b89327] transition-colors mb-10 text-sm font-bold uppercase tracking-widest">
                    <FaArrowLeft /> Back to Articles
                </Link>

                {/* Article Header */}
                <header className="mb-14">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#050506] bg-[#d4af37] px-3 py-1.5 rounded">
                            {post.category}
                        </span>
                        <div className="flex flex-col">
                            <span className="text-gray-400 text-sm">{post.time} read</span>
                            {post.updatedAt && (
                                <span className="text-[#d4af37]/70 text-[10px] uppercase tracking-tighter font-bold">
                                    Last Updated: {post.updatedAt}
                                </span>
                            )}
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-8">
                        {post.title}
                    </h1>

                    {/* Author & Share */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-6 border-y border-white/10">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-[#d4af37]/30">
                                <img src="/munish.jpg" alt="Munish Kumar" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="font-bold text-white text-sm">Munish Kumar</p>
                                <p className="text-gray-400 text-xs">B2B Business Advisor</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-gray-400 text-sm mr-2">Share:</span>
                            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#d4af37] hover:text-black flex items-center justify-center transition-all">
                                <FaLinkedin />
                            </a>
                            <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#d4af37] hover:text-black flex items-center justify-center transition-all">
                                <FaTwitter />
                            </a>
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#d4af37] hover:text-black flex items-center justify-center transition-all">
                                <FaFacebook />
                            </a>
                        </div>
                    </div>
                </header>

                {/* Hero Image (Optional) */}
                {post.imageUrl && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full h-[300px] md:h-[500px] rounded-[2rem] overflow-hidden mb-16 relative border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#0a0a0c]"
                    >
                        <img
                            src={post.imageUrl}
                            alt={`Cover image for '${post.title}': A professional and conceptual visual depicting ${post.category} themes such as ${post.tags?.join(', ') || 'business growth'} in a high-resolution, modern aesthetic.`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050506] via-transparent to-transparent opacity-80" />
                    </motion.div>
                )}

                {/* Article Content */}
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="prose prose-invert prose-lg max-w-none 
                        prose-headings:font-heading prose-headings:font-bold prose-headings:text-white
                        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-[#d4af37]
                        prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                        prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                        prose-a:text-[#d4af37] hover:prose-a:text-[#b89327]
                        prose-strong:text-white
                        prose-ul:text-gray-300 prose-ul:my-6
                        prose-ol:text-gray-300 prose-ol:my-6
                        prose-li:my-2
                        prose-blockquote:border-l-[#d4af37] prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:text-gray-300 prose-blockquote:italic
                        pb-16 border-b border-white/10"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content || `<p>${post.hook}</p>`) }}
                />

                {/* AI / FAQ SEO Section */}
                {post.faq && post.faq.length > 0 && (
                    <div className="py-12 border-b border-white/10">
                        <h3 className="text-2xl font-bold font-heading mb-8 flex items-center gap-3">
                            <span className="text-[#d4af37]">Frequently Asked</span> Questions
                        </h3>
                        <div className="space-y-4">
                            {post.faq.map((item, index) => (
                                <details key={index} className="group bg-[#0a0a0c] border border-white/5 rounded-2xl open:bg-[#111115] open:border-[#d4af37]/30 transition-all duration-300">
                                    <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg select-none list-none marker:hidden">
                                        <span className="text-white group-hover:text-[#d4af37] transition-colors pr-6">{item.question}</span>
                                        <span className="text-[#d4af37] text-2xl group-open:rotate-45 transition-transform duration-300 shrink-0">+</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                        {item.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                )}

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <div className="py-16">
                        <h3 className="text-2xl font-bold font-heading mb-8">Also Read</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedPosts.map((related, idx) => (
                                <Link key={idx} to={`/blog/${related.slug}`} className="group bg-[#0a0a0c] border border-white/5 hover:border-[#d4af37]/50 rounded-2xl p-6 transition-all block">
                                    <span className="text-xs text-[#d4af37] mb-3 block">{related.category}</span>
                                    <h4 className="text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors mb-2 line-clamp-2">
                                        {related.title}
                                    </h4>
                                    <p className="text-gray-500 text-xs">{related.time}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <BottomCTA />
        </div>
    );
};

export default BlogPost;
