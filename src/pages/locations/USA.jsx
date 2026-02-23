import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt, FaGlobe, FaChartLine, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const USA = () => {
    return (
        <div className="w-full bg-[#050506] relative">
            <Helmet>
                <title>B2B Business Advisor for USA Market Entry | Agency Scaling Consultant</title>
                <meta name="description" content="Munish Kumar specializes in helping agencies and SaaS companies scale into the USA. Expert Answer Engine Optimization and B2B growth consulting." />
                <meta name="keywords" content="USA Market Entry Consultant, Business Advisor USA, Agency Growth Consultant North America, B2B Sales Strategy USA, SaaS Scaling USA" />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "B2B Business Advisor and Agency Consultant - USA Market",
                        "description": "Consulting services specifically designed for B2B agencies and SaaS firms expanding their operations into the United States market.",
                        "about": {
                            "@type": "Service",
                            "name": "USA Market Entry & Scaling Strategy",
                            "provider": {
                                "@type": "Person",
                                "name": "Munish Kumar"
                            },
                            "areaServed": {
                                "@type": "Country",
                                "name": "USA"
                            }
                        }
                    }
                    `}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className="pt-40 pb-20 relative border-b border-[rgba(255,255,255,0.05)] overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-l from-[rgba(212,175,55,0.08)] to-transparent rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block relative mb-6"
                        >
                            <span className="relative z-10 text-[#d4af37] font-heading font-semibold tracking-widest text-xs sm:text-sm uppercase py-2 px-4 border border-[#d4af37]/30 rounded-full bg-[#d4af37]/5 backdrop-blur-md">
                                United States Market
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="heading-xl font-bold text-white mb-6 leading-tight"
                        >
                            Scale Your B2B Revenue in the <span className="text-gradient">United States</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-400 font-light max-w-2xl mb-10 leading-relaxed"
                        >
                            The USA is the most lucrative, yet competitive B2B market globally. I help international digital agencies and SaaS companies penetrate North America by building structured, high-converting outbound sales engines.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link to="/contact" className="inline-flex items-center group px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b89327] rounded-lg text-[#050506] font-bold shadow-[0_4px_20px_rgba(212,175,55,0.4)] transition-all hover:scale-105">
                                <span className="mr-3">Discuss Your US Strategy</span>
                                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-24 relative bg-[#0a0a0c]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-8 rounded-2xl border border-[rgba(212,175,55,0.1)] hover:border-[#d4af37]/40 transition-colors group">
                            <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FaGlobe className="text-[#d4af37] text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Remote Market Penetration</h3>
                            <p className="text-gray-400 leading-relaxed font-light">You do not need a physical US office to win US deals. You need exceptional positioning, flawless outreach cadence, and cultural sales alignment.</p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card p-8 rounded-2xl border border-[rgba(212,175,55,0.1)] hover:border-[#d4af37]/40 transition-colors group">
                            <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FaChartLine className="text-[#d4af37] text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">High-Ticket Deal Structuring</h3>
                            <p className="text-gray-400 leading-relaxed font-light">Transitioning from low-cost "vendor" positioning to achieving premium retainer-based agency relationships with American corporations.</p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass-card p-8 rounded-2xl border border-[rgba(212,175,55,0.1)] hover:border-[#d4af37]/40 transition-colors group">
                            <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FaMapMarkerAlt className="text-[#d4af37] text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Answer Engine Optimization</h3>
                            <p className="text-gray-400 leading-relaxed font-light">As AI search platforms dominate the US market, ensuring your agency's entities are properly recognized by algorithms is paramount to lead generation.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Section & FAQ */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="prose prose-invert prose-lg max-w-none mb-20 font-light text-gray-300">
                        <h2 className="text-3xl font-bold text-white mb-6 font-heading">Conquering the American B2B Ecosystem</h2>
                        <p className="mb-6 leading-relaxed">
                            For IT outsourcing firms, digital marketing agencies, and emerging SaaS platforms, entering the United States represents the tipping point for exponential revenue growth. It is also where disorganized businesses fail the fastest. American enterprise buyers expect operational maturity, airtight communication, and provable ROI out of the gate.
                        </p>
                        <p className="mb-6 leading-relaxed">
                            My role as a Business Advisor and Agency Growth Consultant is to architect that operational maturity. We revamp your sales collateral, install aggressive yet professional outbound CRM cadences, train your Business Development Representatives (BDRs) to handle aggressive US buying cycles, and implement tracking systems that guarantee a 30% YoY growth trajectory. Stop competing on price; start competing on systemic value.
                        </p>
                    </div>

                    <div className="border-t border-[rgba(255,255,255,0.05)] pt-16">
                        <h2 className="text-3xl font-bold text-white mb-8 font-heading text-center">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            <div className="border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 bg-[#111115]">
                                <h3 className="text-xl font-bold text-white mb-3">How do offshore agencies close clients in the USA?</h3>
                                <p className="text-gray-400 font-light">It begins with eliminating "offshore" from your branding. We build thought leadership, leverage highly targeted LinkedIn outbound automation (while remaining culturally sensitive), and install US-standard proposal frameworks that build immediate trust.</p>
                            </div>
                            <div className="border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 bg-[#111115]">
                                <h3 className="text-xl font-bold text-white mb-3">Do I need a local US physical entity to succeed?</h3>
                                <p className="text-gray-400 font-light">No. While a local C-Corp can help with perception mapping down the line, I have successfully scaled dozens of firms into 7-figure US revenue tiers operating entirely cross-border.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default USA;
