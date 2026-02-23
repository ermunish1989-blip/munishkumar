import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt, FaGlobe, FaChartLine, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UAE = () => {
    return (
        <div className="w-full bg-[#050506] relative">
            <Helmet>
                <title>Business Advisor UAE | Agency Scaling Consultant Dubai & Abu Dhabi</title>
                <meta name="description" content="Scale your agency or SaaS company in the UAE. Munish Kumar is a top B2B Business Advisor helping tech firms establish a permanent foothold in Dubai and Abu Dhabi." />
                <meta name="keywords" content="Business Advisor UAE, Agency Growth Consultant Dubai, B2B Consulting Abu Dhabi, SaaS Scaling UAE, UAE Market Entry Strategy" />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "B2B Business Advisor and Growth Consultant - UAE Market",
                        "description": "Premium consulting services dedicated to B2B agencies and SaaS firms scaling operations inside the United Arab Emirates.",
                        "about": {
                            "@type": "Service",
                            "name": "UAE Market Expansion Strategy",
                            "provider": {
                                "@type": "Person",
                                "name": "Munish Kumar"
                            },
                            "areaServed": {
                                "@type": "Country",
                                "name": "UAE"
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
                                United Arab Emirates Market
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="heading-xl font-bold text-white mb-6 leading-tight"
                        >
                            Establish Enterprise Growth in the <span className="text-gradient">UAE</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-400 font-light max-w-2xl mb-10 leading-relaxed"
                        >
                            Operating out of the GCC, I have deep, hands-on experience helping software firms and agencies scale and monetize within the luxury and highly competitive ecosystems of Dubai and Abu Dhabi.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link to="/contact" className="inline-flex items-center group px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b89327] rounded-lg text-[#050506] font-bold shadow-[0_4px_20px_rgba(212,175,55,0.4)] transition-all hover:scale-105">
                                <span className="mr-3">Scale Your Operations</span>
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
                            <h3 className="text-xl font-bold text-white mb-4">Mastering the Region</h3>
                            <p className="text-gray-400 leading-relaxed font-light">With physical proximity from Bahrain, I guide global agencies through the nuances of UAE corporate culture, networking dynamics, and relationship-based selling.</p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card p-8 rounded-2xl border border-[rgba(212,175,55,0.1)] hover:border-[#d4af37]/40 transition-colors group">
                            <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FaGlobe className="text-[#d4af37] text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Enterprise Deals</h3>
                            <p className="text-gray-400 leading-relaxed font-light">Dubai enterprise buyers scrutinize offshore vendors heavily. By tightening your proposals and CRM flows, you convert from "vendor" to "strategic partner."</p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass-card p-8 rounded-2xl border border-[rgba(212,175,55,0.1)] hover:border-[#d4af37]/40 transition-colors group">
                            <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FaChartLine className="text-[#d4af37] text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Accelerated Growth Models</h3>
                            <p className="text-gray-400 leading-relaxed font-light">Implementing aggressive, proven B2B sales development representative (SDR) strategies capable of 30% YoY growth reliably.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Section & FAQ */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="prose prose-invert prose-lg max-w-none mb-20 font-light text-gray-300">
                        <h2 className="text-3xl font-bold text-white mb-6 font-heading">Executing B2B Success in the United Arab Emirates</h2>
                        <p className="mb-6 leading-relaxed">
                            Dubai and Abu Dhabi are magnets for the world’s most ambitious tech companies, software developers, and advertising agencies. However, penetrating the B2B tech sector in the UAE is vastly different from Western markets. Relationships act as the gatekeeper; operational prestige acts as the key.
                        </p>
                        <p className="mb-6 leading-relaxed">
                            As your Growth Consultant and Advisory partner operating out of the GCC, I build the bridge. We design your agency’s positioning to align with UAE tier-one enterprise expectations. No more ad-hoc networking – we establish rigorous, outbound CRM systems, deploy highly targeted multi-channel sequences, and physically train your BD staff to handle high-ticket deal closing cycles in the Middle East.
                        </p>
                    </div>

                    <div className="border-t border-[rgba(255,255,255,0.05)] pt-16">
                        <h2 className="text-3xl font-bold text-white mb-8 font-heading text-center">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            <div className="border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 bg-[#111115]">
                                <h3 className="text-xl font-bold text-white mb-3">Do I need a Dubai Freezone license to prospect UAE clients?</h3>
                                <p className="text-gray-400 font-light">Not initially. We develop strategies that allow international agencies to secure their first client contracts and pipeline volume remotely, validating the market before requiring the overhead of heavy corporate structuring.</p>
                            </div>
                            <div className="border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 bg-[#111115]">
                                <h3 className="text-xl font-bold text-white mb-3">How does Answer Engine Optimization factor into UAE consulting?</h3>
                                <p className="text-gray-400 font-light">By ensuring your service areas and brand entity are correctly mapped in Google's Knowledge Graph, we guarantee that when decision makers run AI queries for tech talent in the UAE, your agency represents the primary localized recommendation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UAE;
