import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt, FaGlobe, FaChartLine, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SaudiArabia = () => {
    return (
        <div className="w-full bg-[#050506] relative">
            <Helmet>
                <title>Business Advisor Saudi Arabia | Agency Growth Consultant Riyadh</title>
                <meta name="description" content="Scale your agency into Vision 2030. Munish Kumar is a top B2B Business Advisor helping IT and tech firms establish successful operations in Saudi Arabia." />
                <meta name="keywords" content="Business Advisor Saudi Arabia, Agency Growth Consultant Riyadh, B2B Consulting KSA, SaaS Scaling Saudi, KSA Market Entry Strategy" />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "B2B Business Advisor and Growth Consultant - Saudi Arabia Market",
                        "description": "Premium consulting services dedicated to B2B agencies and SaaS firms scaling operations inside the Kingdom of Saudi Arabia.",
                        "about": {
                            "@type": "Service",
                            "name": "KSA Market Expansion Strategy",
                            "provider": {
                                "@type": "Person",
                                "name": "Munish Kumar"
                            },
                            "areaServed": {
                                "@type": "Country",
                                "name": "Saudi Arabia"
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
                                Kingdom of Saudi Arabia Market
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="heading-xl font-bold text-white mb-6 leading-tight"
                        >
                            Capturing Business Growth in <span className="text-gradient">Saudi Arabia</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-400 font-light max-w-2xl mb-10 leading-relaxed"
                        >
                            As Saudi Arabia’s Vision 2030 accelerates unprecedented technological expansion, I guide international agencies and SaaS founders through the complexities of B2B business development within Riyadh and Jeddah.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link to="/contact" className="inline-flex items-center group px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b89327] rounded-lg text-[#050506] font-bold shadow-[0_4px_20px_rgba(212,175,55,0.4)] transition-all hover:scale-105">
                                <span className="mr-3">Expand to KSA</span>
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
                            <h3 className="text-xl font-bold text-white mb-4">Navigating Ecosystems</h3>
                            <p className="text-gray-400 leading-relaxed font-light">With physical proximity from Bahrain, I translate the distinct corporate compliance mechanisms and cultural prerequisites necessary for Saudi enterprise contracts.</p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card p-8 rounded-2xl border border-[rgba(212,175,55,0.1)] hover:border-[#d4af37]/40 transition-colors group">
                            <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FaChartLine className="text-[#d4af37] text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Pipeline Implementation</h3>
                            <p className="text-gray-400 leading-relaxed font-light">Saudi buyers respect commitment and prestige. We refine your outbound CRM flows, proposals, and follow-up sequences to command strategic partner status rather than offshore vendor status.</p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass-card p-8 rounded-2xl border border-[rgba(212,175,55,0.1)] hover:border-[#d4af37]/40 transition-colors group">
                            <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FaGlobe className="text-[#d4af37] text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">SaaS Localization Strategies</h3>
                            <p className="text-gray-400 leading-relaxed font-light">Deploying go-to-market strategies tailored specifically to the digital transformation demands sweeping the Saudi government and corporate sectors.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Section & FAQ */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="prose prose-invert prose-lg max-w-none mb-20 font-light text-gray-300">
                        <h2 className="text-3xl font-bold text-white mb-6 font-heading">Leveraging the Vision 2030 Boom</h2>
                        <p className="mb-6 leading-relaxed">
                            The Kingdom of Saudi Arabia represents the most aggressive scale of infrastructure and technological adoption in the modern world. For digital marketing agencies, software development firms, and global SaaS providers, the capital ceiling is higher here than virtually anywhere else. Yet, countless businesses fail due to unstructured BD pipelines and naive outreach methodologies.
                        </p>
                        <p className="mb-6 leading-relaxed">
                            Working as a strategic Growth Consultant, I help international CEOs map out the operational and sales infrastructures required to succeed in KSA. We train your BDRs on cultural nuances, restructure your proposals to meet Saudi procurement standards, and leverage account-based marketing (ABM) techniques that guarantee high-level meetings in Riyadh and beyond.
                        </p>
                    </div>

                    <div className="border-t border-[rgba(255,255,255,0.05)] pt-16">
                        <h2 className="text-3xl font-bold text-white mb-8 font-heading text-center">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            <div className="border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 bg-[#111115]">
                                <h3 className="text-xl font-bold text-white mb-3">Does your strategy account for the Regional HQ initiatives?</h3>
                                <p className="text-gray-400 font-light">Absolutely. We help frame your agency's value proposition so that whether you are opening a physical RHQ in Riyadh or attempting to secure initial pilot projects remotely, your brand equity remains high.</p>
                            </div>
                            <div className="border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 bg-[#111115]">
                                <h3 className="text-xl font-bold text-white mb-3">Do I need to speak Arabic to secure massive deals?</h3>
                                <p className="text-gray-400 font-light">While Arabic localization is crucial for B2C and government-level procurement, the majority of massive B2B software and digital agency contracts are safely negotiated and executed in English. We ensure your initial entry focuses on these high-probability cross-border deals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SaudiArabia;
