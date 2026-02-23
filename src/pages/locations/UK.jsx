import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt, FaGlobe, FaChartLine, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UK = () => {
    return (
        <div className="w-full bg-[#050506] relative">
            <Helmet>
                <title>B2B Business Advisor UK | Agency Growth Consultant London & UK</title>
                <meta name="description" content="Scale your agency or SaaS into the UK market with Munish Kumar. Strategic B2B growth consulting, out-bound sales systems, and expert Answer Engine Optimization." />
                <meta name="keywords" content="Business Advisor UK, Agency Growth Consultant London, B2B Consulting UK, SaaS Scaling Europe, UK Market Entry Consultant" />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "B2B Business Advisor and Agency Consultant - UK Market",
                        "description": "Consulting services dedicated to B2B agencies and SaaS firms scaling operations across the United Kingdom.",
                        "about": {
                            "@type": "Service",
                            "name": "UK Market Expansion Strategy",
                            "provider": {
                                "@type": "Person",
                                "name": "Munish Kumar"
                            },
                            "areaServed": {
                                "@type": "Country",
                                "name": "UK"
                            }
                        }
                    }
                    `}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className="pt-40 pb-20 relative border-b border-[rgba(255,255,255,0.05)] overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-[rgba(212,175,55,0.08)] to-transparent rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block relative mb-6"
                        >
                            <span className="relative z-10 text-[#d4af37] font-heading font-semibold tracking-widest text-xs sm:text-sm uppercase py-2 px-4 border border-[#d4af37]/30 rounded-full bg-[#d4af37]/5 backdrop-blur-md">
                                United Kingdom Market
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="heading-xl font-bold text-white mb-6 leading-tight"
                        >
                            Enterprise B2B Scaling in the <span className="text-gradient">UK</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-400 font-light max-w-2xl mb-10 leading-relaxed"
                        >
                            From London to Manchester, the UK requires a nuanced, highly qualitative approach to B2B business development. I provide the structural framework offshore and local firms need to secure British enterprise contracts.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link to="/contact" className="inline-flex items-center group px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b89327] rounded-lg text-[#050506] font-bold shadow-[0_4px_20px_rgba(212,175,55,0.4)] transition-all hover:scale-105">
                                <span className="mr-3">Build Your UK Strategy</span>
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
                            <h3 className="text-xl font-bold text-white mb-4">Navigating the UK Business Culture</h3>
                            <p className="text-gray-400 leading-relaxed font-light">British enterprise buyers value long-term partnerships, extreme professionalism, and compliance over transactional pitch cycles. Our systems are built to reflect that.</p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card p-8 rounded-2xl border border-[rgba(212,175,55,0.1)] hover:border-[#d4af37]/40 transition-colors group">
                            <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FaChartLine className="text-[#d4af37] text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Pipeline Architecture</h3>
                            <p className="text-gray-400 leading-relaxed font-light">Replacing fragmented local outreach with a highly targeted, predictable B2B sales pipeline designed for consistent 30% YoY growth metrics.</p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass-card p-8 rounded-2xl border border-[rgba(212,175,55,0.1)] hover:border-[#d4af37]/40 transition-colors group">
                            <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FaGlobe className="text-[#d4af37] text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">AI SEO & Entity Optimization</h3>
                            <p className="text-gray-400 leading-relaxed font-light">Ensuring your agency or SaaS brand ranks dynamically in AI Overviews across UK-specific search intent and localized digital footprints.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Section & FAQ */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="prose prose-invert prose-lg max-w-none mb-20 font-light text-gray-300">
                        <h2 className="text-3xl font-bold text-white mb-6 font-heading">Defining Trust in the UK Ecosystem</h2>
                        <p className="mb-6 leading-relaxed">
                            Whether you are an agile UK-based agency attempting to break through the £1M revenue barrier, or an offshore SaaS firm targeting British banks and enterprises, your operational foundation must be flawless. Scaling in the UK is heavily dependent on sophisticated business development practices, clear value propositions, and relentless operational discipline.
                        </p>
                        <p className="mb-6 leading-relaxed">
                            Acting as an embedded Business Advisor, I partner with CEOs and founders to strip away inefficiencies. We build out proper CRM frameworks, establish high-performing inbound/outbound systems, and optimize your overall digital presence. The goal is to construct an organization capable of delivering premium services at scale, allowing you to charge what you are actually worth.
                        </p>
                    </div>

                    <div className="border-t border-[rgba(255,255,255,0.05)] pt-16">
                        <h2 className="text-3xl font-bold text-white mb-8 font-heading text-center">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            <div className="border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 bg-[#111115]">
                                <h3 className="text-xl font-bold text-white mb-3">Do you provide LinkedIn lead generation specific to the UK?</h3>
                                <p className="text-gray-400 font-light">I do not provide generic spam services. I construct highly personalized, multi-channel account-based marketing (ABM) strategies that utilize LinkedIn heavily, ensuring high connection rates and actual booked meetings with UK decision makers.</p>
                            </div>
                            <div className="border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 bg-[#111115]">
                                <h3 className="text-xl font-bold text-white mb-3">How do you structure offshore teams targeting London clients?</h3>
                                <p className="text-gray-400 font-light">By professionalizing the entire front end. We map out strict proposal guidelines, establish synchronous communication rhythms, and ensure your BD personnel communicate as peers to European project managers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UK;
