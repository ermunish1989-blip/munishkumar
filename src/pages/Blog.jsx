import { motion } from 'framer-motion';
import { FaArrowRight, FaPaperPlane, FaBolt } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BottomCTA from '../components/home/BottomCTA';
import { getBlogPosts, getFeaturedPost } from '../utils/blogStorage';
import SEO from '../components/ui/SEO';

const Blog = () => {
    const posts = getBlogPosts();
    const featuredPost = getFeaturedPost();
    const [isSubscribed, setIsSubscribed] = useState(false);

    const FORMSPREE_ID = 'xqedgwqy'; // Your verified Formspree ID
    const [isLoading, setIsLoading] = useState(false);

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const form = e.target;
        const email = form.email.value;

        // If Formspree ID is not yet configured, open email client as fallback
        if (FORMSPREE_ID === 'YOUR_FORMSPREE_ID') {
            window.location.href = `mailto:info@munishkumar.com?subject=Newsletter Subscription&body=Please add me to your newsletter list.%0A%0AEmail: ${email}`;
            setIsLoading(false);
            setIsSubscribed(true);
            return;
        }

        const data = new FormData(form);
        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                setIsSubscribed(true);
                form.reset();
            } else {
                alert("There was a problem. Please try again.");
            }
        } catch {
            setIsSubscribed(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-[#050506] min-h-screen text-white pt-32 font-sans">
            <SEO
                title="B2B Growth & Agency Scaling Blog | Munish Kumar"
                description="Actionable strategies, playbooks, and insights on B2B global expansion, LinkedIn lead generation, and structural agency scaling."
                canonicalUrl="https://munishkumar.com/blog"
            />
            {/* Page Hero */}
            <section className="pt-40 pb-20 bg-[#0A0A0C] relative border-b border-[#d4af37]/10 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-[#d4af37]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-t from-[#d4af37]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="inline-block relative mb-6"
                    >
                        <span className="relative z-10 text-[#d4af37] font-heading font-semibold tracking-widest text-xs sm:text-sm uppercase py-2 px-6 border border-[#d4af37]/30 rounded-full bg-[#d4af37]/5 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                            Next-Gen Business Strategies
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="heading-xl font-bold text-white mb-6 leading-tight"
                    >
                        Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#b89327] animate-pulse">Articles</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto"
                    >
                        Agency scaling, B2B growth, and international business development — practical insights every week.
                    </motion.p>
                </div>
            </section>

            {/* Featured Post */}
            <section className="py-24 relative bg-[#050506]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative group rounded-[2.5rem] p-[1px] bg-gradient-to-br from-[#d4af37]/40 via-white/5 to-transparent hover:from-[#d4af37]/60 transition-colors duration-700 overflow-hidden shadow-2xl hover:shadow-[0_0_50px_rgba(212,175,55,0.15)]"
                    >
                        <div className="absolute -inset-10 bg-gradient-to-br from-[#d4af37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl pointer-events-none"></div>

                        <div className="bg-[#0A0A0C] flex flex-col lg:flex-row rounded-[2.4rem] overflow-hidden relative z-10 h-full">

                            {/* Graphic Section */}
                            <div className="lg:w-1/2 bg-gradient-to-br from-[#101014] to-[#050506] min-h-[350px] lg:min-h-full flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                                {featuredPost.imageUrl ? (
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${featuredPost.imageUrl})` }}>
                                        <div className="absolute inset-0 bg-[#050506]/30 group-hover:bg-[#050506]/10 transition-colors duration-500"></div>
                                    </div>
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-[#d4af37]/5 z-0"></div>
                                        <div className="absolute top-0 right-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-[0.05] z-0"></div>
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#d4af37]/20 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-1000"></div>

                                        <h2 className="text-6xl md:text-8xl text-white/[0.03] font-bold absolute font-heading select-none w-full text-center pointer-events-none tracking-widest whitespace-nowrap -rotate-12 group-hover:text-white/[0.05] transition-colors duration-500">
                                            FEATURED
                                        </h2>
                                        <span className="relative z-10 text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-br from-[#d4af37] to-[#b89327] drop-shadow-[0_0_30px_rgba(212,175,55,0.4)] group-hover:animate-pulse">
                                            <FaBolt />
                                        </span>
                                    </>
                                )}
                            </div>

                            {/* Text Section */}
                            <div className="lg:w-1/2 p-10 md:p-14 lg:p-16 flex flex-col justify-center relative backdrop-blur-sm border-l border-white/5">
                                <span className="text-xs font-bold uppercase tracking-wider text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/30 px-4 py-1.5 rounded-full self-start mb-8 shadow-[0_0_10px_rgba(212,175,55,0.1)]">
                                    {featuredPost.category}
                                </span>

                                <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#d4af37] group-hover:to-white transition-all duration-500">
                                    {featuredPost.title}
                                </h2>

                                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-10 text-balance">
                                    {featuredPost.excerpt}
                                </p>

                                <div className="flex flex-wrap items-center justify-between gap-6 mt-auto pt-6 border-t border-white/10">
                                    <span className="text-gray-500 text-sm font-bold uppercase tracking-wider flex items-center gap-3">
                                        {featuredPost.meta}
                                    </span>
                                    <Link to={`/blog/${featuredPost.slug}`} className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-[#d4af37]/50 bg-[#d4af37]/10 text-[#d4af37] font-bold text-sm uppercase tracking-wider hover:bg-[#d4af37] hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 group/btn">
                                        Read Article <FaArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 6 Blog Posts Grid */}
            <section className="py-32 bg-[#0A0A0C] border-y border-[#d4af37]/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-[#d4af37]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#d4af37]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="group relative h-full"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/10 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>

                                <div className="glass h-full p-8 md:p-10 rounded-[2rem] border border-white/5 hover:border-[#d4af37]/30 transition-all duration-500 flex flex-col bg-gradient-to-br from-white/[0.02] to-transparent relative overflow-hidden group-hover:bg-white/[0.04]">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-bl-full pointer-events-none group-hover:bg-[#d4af37]/[0.05] transition-colors duration-500"></div>

                                    {/* Cover Image Banner */}
                                    {post.imageUrl && (
                                        <div className="w-full h-48 mb-8 rounded-2xl overflow-hidden relative">
                                            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] to-transparent opacity-80"></div>
                                        </div>
                                    )}

                                    <div className={`flex items-center justify-between relative z-10 ${post.imageUrl ? 'mb-4 mt-[-2rem]' : 'mb-8'}`}>
                                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/20 px-3 py-1.5 rounded-full backdrop-blur-md">
                                            {post.category}
                                        </span>
                                        <span className="text-gray-500 text-xs font-bold uppercase tracking-wider ml-2 text-right">{post.time}</span>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-6 leading-snug group-hover:text-[#d4af37] transition-colors relative z-10 line-clamp-3">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-10 flex-grow relative z-10 text-pretty">
                                        {post.hook}
                                    </p>

                                    <Link to={`/blog/${post.slug}`} className="mt-auto inline-flex items-center justify-between text-gray-300 font-bold text-sm uppercase tracking-wider group-hover:text-[#d4af37] transition-colors pt-6 border-t border-white/5 group-hover:border-[#d4af37]/20 relative z-10 w-full group/link">
                                        <span>Read Article</span>
                                        <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center group-hover/link:border-[#d4af37] group-hover/link:bg-[#d4af37]/10 transition-colors">
                                            <FaArrowRight className="text-xs group-hover/link:translate-x-1 transition-transform" />
                                        </div>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-32 relative overflow-hidden bg-[#050506]">
                <div className="absolute inset-0 bg-[#d4af37]/5 blur-[200px] pointer-events-none rounded-full max-w-[1000px] h-[600px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto glass p-10 md:p-16 rounded-[3rem] border border-[#d4af37]/20 shadow-[0_0_50px_rgba(212,175,55,0.1)] text-center relative overflow-hidden"
                    >
                        {isSubscribed ? (
                            <div className="text-center py-10">
                                <div className="w-20 h-20 bg-[#d4af37]/20 border border-[#d4af37]/50 rounded-full flex items-center justify-center text-[#d4af37] text-3xl mx-auto mb-6">✓</div>
                                <h3 className="text-3xl font-bold text-white mb-4">Confirmed!</h3>
                                <p className="text-gray-400 text-lg font-light">You're on the list. Get ready for next-gen strategies.</p>
                            </div>
                        ) : (
                            <>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 blur-[80px] rounded-full pointer-events-none"></div>

                                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] mb-8 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                                    <FaPaperPlane size={24} className="-ml-1" />
                                </span>

                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                    Subscribe to Next-Gen <br />Business Strategies
                                </h2>
                                <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed font-light max-w-2xl mx-auto">
                                    Weekly insights on agency scaling, B2B growth, and international business. Practical, actionable, no fluff. Join founders who are building smarter.
                                </p>

                                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto relative z-10">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your best email..."
                                        required
                                        className="w-full flex-grow bg-[#111115] border border-gray-700 text-white rounded-full px-8 py-5 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all text-lg shadow-inner"
                                    />
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="btn btn-primary px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm flex-shrink-0 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] disabled:opacity-70 flex items-center gap-2"
                                    >
                                        {isLoading ? (
                                            <>
                                                <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : 'Subscribe'}
                                    </button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </div>
            </section>

            <BottomCTA />
        </div>
    );
};

export default Blog;
