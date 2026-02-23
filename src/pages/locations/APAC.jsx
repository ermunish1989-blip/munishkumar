import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt, FaGlobe, FaChartLine, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const APAC = () => {
    return (
        <div className="w-full bg-[#050506] relative">
            <Helmet>
                <title>B2B Business Advisor APAC | Asia-Pacific SaaS & Agency Growth</title>
                <meta name="description" content="Dominate the Asia-Pacific B2B markets. Munish Kumar is a premier Business Advisor helping digital agencies scale their enterprise operations in the APAC region." />
                <meta name="keywords" content="Business Advisor APAC, Asia Pacific Agency Consultant, B2B Consulting Singapore, SaaS Scaling Australia, APAC Market Entry Strategy" />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "B2B Business Advisor and Growth Consultant - APAC Market",
                        "description": "Premium consulting services dedicated to B2B agencies and SaaS firms scaling operations across the Asia-Pacific (APAC) region.",
                        "about": {
                            "@type": "Service",
                            "name": "APAC Market Expansion Strategy",
                            "provider": {
                                "@type": "Person",
                                "name": "Munish Kumar"
                            },
                            "areaServed": {
                                "@type": "Continent",
                                "name": "Asia Pacific"
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
                                Asia-Pacific Market
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="heading-xl font-bold text-white mb-6 leading-tight"
                        >
                            Scaling Enterprise B2B in <span className="text-gradient">APAC</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-400 font-light max-w-2xl mb-10 leading-relaxed"
                        >
                            From Singapore to Sydney, I act as an elite Growth Consultant for digital agencies, IT service firms, and ambitious SaaS platforms capturing B2B revenue across the rapidly expanding Asia-Pacific region.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link to="/contact" className="inline-flex items-center group px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b89327] rounded-lg text-[#050506] font-bold shadow-[0_4px_20px_rgba(212,175,55,0.4)] transition-all hover:scale-105">
                                <span className="mr-3">Discuss APAC Growth Strategy</span>
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
                            <h3 className="text-xl font-bold text-white mb-4">Fragmented Market Unification</h3>
                            <p className="text-gray-400 leading-relaxed font-light">APAC is not a monolith. I help structure BD strategies that cater individually to the massive enterprise ecosystems of Australia and Singapore, while scaling emerging Asian markets.</p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card p-8 rounded-2xl border border-[rgba(212,175,55,0.1)] hover:border-[#d4af37]/40 transition-colors group">
                            <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FaChartLine className="text-[#d4af37] text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Pipeline Restructuring</h3>
                            <p className="text-gray-400 leading-relaxed font-light">Eradicating inefficient lead generation tactics in favor of heavily structured, personalized, and culturally resonant outbound B2B cadences.</p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass-card p-8 rounded-2xl border border-[rgba(212,175,55,0.1)] hover:border-[#d4af37]/40 transition-colors group">
                            <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FaGlobe className="text-[#d4af37] text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Cross-Border Agency Scaling</h3>
                            <p className="text-gray-400 leading-relaxed font-light">Whether operating from India or branching out of Europe, I train your off-shore teams to navigate APAC enterprise procurement environments as trusted high-level peers.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Section & FAQ */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="prose prose-invert prose-lg max-w-none mb-20 font-light text-gray-300">
                        <h2 className="text-3xl font-bold text-white mb-6 font-heading">Consulting the Highest Growth Region Globally</h2>
                        <p className="mb-6 leading-relaxed">
                            The Asia-Pacific region houses some of the fastest-growing technology, real estate, and financial enterprise clusters in the world. However, many IT firms and SaaS platforms fail to capitalize because their B2B sales development processes lack the requisite sophistication to penetrate hubs like Singapore, Japan, and Sydney.
                        </p>
                        <p className="mb-6 leading-relaxed">
                            Acting as an embedded Growth Advisor, I physically architect your regional expansion. I tear down your existing sales playbooks, install multi-channel CRM systems, and guide your BDRs in adopting localized, hyper-relevant outbound strategies. By systemizing operations and refining your agency's value proposition, we shed the “cheap offshore vendor” stigma and establish a premium strategic partnership with top-tier APAC clients.
                        </p>
                    </div>

                    <div className="border-t border-[rgba(255,255,255,0.05)] pt-16">
                        <h2 className="text-3xl font-bold text-white mb-8 font-heading text-center">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            <div className="border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 bg-[#111115]">
                                <h3 className="text-xl font-bold text-white mb-3">Does your strategy include language-based SEO localized to Asian markets?</h3>
                                <p className="text-gray-400 font-light">While we primarily focus on securing high-level English-speaking tech acquisitions via structural sales systems, our strategy does include broad Answer Engine Optimization tailored to the primary geopolitical hubs driving tech spending.</p>
                            </div>
                            <div className="border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 bg-[#111115]">
                                <h3 className="text-xl font-bold text-white mb-3">Do I need to maintain SDR teams natively in APAC timezones?</h3>
                                <p className="text-gray-400 font-light">We synchronize your existing offshore teams (e.g., in India or Bahrain) with stringent operational cadences designed to perfectly match APAC enterprise operating hours.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default APAC;
