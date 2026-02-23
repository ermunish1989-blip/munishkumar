import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt, FaGlobe, FaChartLine, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const GCC = () => {
    return (
        <div className="w-full bg-[#050506] relative">
            <Helmet>
                <title>Business Advisor GCC | Agency Scaling Consultant Middle East</title>
                <meta name="description" content="Scale your B2B enterprise across the Gulf Cooperation Council. Munish Kumar is a premier Business Advisor helping agencies dominate the GCC market." />
                <meta name="keywords" content="Business Advisor GCC, Agency Growth Consultant Middle East, B2B Consulting Gulf, SaaS Scaling GCC, Middle East Market Entry Strategy" />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "B2B Business Advisor and Growth Consultant - GCC Market",
                        "description": "Premium consulting services dedicated to B2B agencies and SaaS firms scaling operations across the Gulf Cooperation Council (GCC).",
                        "about": {
                            "@type": "Service",
                            "name": "GCC Market Expansion Strategy",
                            "provider": {
                                "@type": "Person",
                                "name": "Munish Kumar"
                            },
                            "areaServed": [
                                { "@type": "Country", "name": "Bahrain" },
                                { "@type": "Country", "name": "Kuwait" },
                                { "@type": "Country", "name": "Oman" },
                                { "@type": "Country", "name": "Qatar" },
                                { "@type": "Country", "name": "Saudi Arabia" },
                                { "@type": "Country", "name": "United Arab Emirates" }
                            ]
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
                                Gulf Cooperation Council
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="heading-xl font-bold text-white mb-6 leading-tight"
                        >
                            Dominate Enterprise Tech in the <span className="text-gradient">GCC</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-400 font-light max-w-2xl mb-10 leading-relaxed"
                        >
                            With an operational base in Bahrain, I act as the strategic growth partner for global IT firms, digital agencies, and SaaS brands executing cross-border expansion throughout the Gulf region.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link to="/contact" className="inline-flex items-center group px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b89327] rounded-lg text-[#050506] font-bold shadow-[0_4px_20px_rgba(212,175,55,0.4)] transition-all hover:scale-105">
                                <span className="mr-3">Discuss Your GCC Strategy</span>
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
                                <FaMapMarkerAlt className="text-[#d4af37] text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Centralized Ecosystem</h3>
                            <p className="text-gray-400 leading-relaxed font-light">With an operational foothold in the GCC, I understand the interconnected nature of business across Saudi Arabia, UAE, Bahrain, Qatar, Oman, and Kuwait.</p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card p-8 rounded-2xl border border-[rgba(212,175,55,0.1)] hover:border-[#d4af37]/40 transition-colors group">
                            <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FaChartLine className="text-[#d4af37] text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">B2B Deal Structuring</h3>
                            <p className="text-gray-400 leading-relaxed font-light">Replacing ad-hoc regional networking with a mature, predictable, enterprise-grade B2B pipeline heavily favored by sovereign wealth funds and conglomerates.</p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass-card p-8 rounded-2xl border border-[rgba(212,175,55,0.1)] hover:border-[#d4af37]/40 transition-colors group">
                            <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FaGlobe className="text-[#d4af37] text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">SaaS Implementation</h3>
                            <p className="text-gray-400 leading-relaxed font-light">Building structured outbound methodologies that respect local data protection laws while aggressively acquiring high-value recurring revenue.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Section & FAQ */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="prose prose-invert prose-lg max-w-none mb-20 font-light text-gray-300">
                        <h2 className="text-3xl font-bold text-white mb-6 font-heading">The Premier Strategy for Middle East Expansion</h2>
                        <p className="mb-6 leading-relaxed">
                            The Gulf Cooperation Council (GCC) offers some of the highest spending capacities globally for digital transformation, bespoke software development, and enterprise SaaS. Yet, international brands repeatedly fail to gain traction because their sales and business development machinery is fundamentally misaligned with regional expectations.
                        </p>
                        <p className="mb-6 leading-relaxed">
                            Operating extensively from Bahrain, I act as an embedded Growth Consultant for software and B2B leaders wanting a piece of the Gulf market. We tear down your existing sales playbooks and rebuild them. We professionalize the proposal structure, implement multi-channel outbound systems, and physically coach your BD executives to navigate GCC procurement frameworks flawlessly. Moving from vendor perception to recognized strategic partner is the key to 30% YoY scaling.
                        </p>
                    </div>

                    <div className="border-t border-[rgba(255,255,255,0.05)] pt-16">
                        <h2 className="text-3xl font-bold text-white mb-8 font-heading text-center">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            <div className="border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 bg-[#111115]">
                                <h3 className="text-xl font-bold text-white mb-3">Does your strategy encompass the entire GCC or just specific hubs?</h3>
                                <p className="text-gray-400 font-light">While Riyadh and Dubai command massive volumes, our strategies ensure your brand captures multi-regional enterprise deals, cross-pollinating relationships across borders when targeting holding groups.</p>
                            </div>
                            <div className="border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 bg-[#111115]">
                                <h3 className="text-xl font-bold text-white mb-3">Do I need local corporate structuring immediately?</h3>
                                <p className="text-gray-400 font-light">Our initial priority is always remote revenue validation and BD pipeline maturation. You must build demand and learn the cultural sales nuances before investing heavily in GCC physical entities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GCC;
