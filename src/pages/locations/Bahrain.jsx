import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt, FaGlobe, FaChartLine, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Bahrain = () => {
    return (
        <div className="w-full bg-[#050506] relative">
            <Helmet>
                <title>AI SEO Agency in Bahrain | Business Advisor Manama | Munish Kumar</title>
                <meta name="description" content="Looking for an AI SEO Agency in Bahrain? Munish Kumar is a premier Business Advisor and Growth Consultant helping Manama agencies scale with AEO and NLP strategies." />
                <meta name="keywords" content="AI SEO Agency Bahrain, Business Advisor Bahrain, Agency Growth Consultant Manama, B2B Consulting Bahrain, SaaS Scaling GCC, AEO Services Bahrain, NLP SEO Bahrain" />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Business Advisor and Growth Consultant in Bahrain",
                        "description": "Expert B2B consulting for agencies and SaaS companies expanding from or into the Kingdom of Bahrain.",
                        "about": {
                            "@type": "LocalBusiness",
                            "name": "Munish Kumar Business Advisor & Consultant (Bahrain Office)",
                            "address": {
                                "@type": "PostalAddress",
                                "postOfficeBoxNumber": "P.O. Box 23765",
                                "addressLocality": "Manama",
                                "addressCountry": "Kingdom of Bahrain"
                            },
                            "telephone": "+919317432236",
                            "email": "info@munishkumar.com"
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
                                Kingdom of Bahrain
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="heading-xl font-bold text-white mb-6 leading-tight"
                        >
                            Premier Business Advisor & Growth Consultant in <span className="text-gradient">Bahrain</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-400 font-light max-w-2xl mb-10 leading-relaxed"
                        >
                            Located in Manama, I partner with ambitious digital agencies, IT firms, and SaaS companies across the GCC to systematize operations, scale international revenue, and dominate their markets.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link to="/contact" className="inline-flex items-center group px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b89327] rounded-lg text-[#050506] font-bold shadow-[0_4px_20px_rgba(212,175,55,0.4)] transition-all hover:scale-105">
                                <span className="mr-3">Book a Strategy Call</span>
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
                            <h3 className="text-xl font-bold text-white mb-4">Local Presence</h3>
                            <p className="text-gray-400 leading-relaxed font-light">With physical operations based in Manama, I provide deep understanding of the local Bahraini and broader GCC business ecosystem.</p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card p-8 rounded-2xl border border-[rgba(212,175,55,0.1)] hover:border-[#d4af37]/40 transition-colors group">
                            <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FaChartLine className="text-[#d4af37] text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Agency Scaling</h3>
                            <p className="text-gray-400 leading-relaxed font-light">Transforming chaotic agency workflows into highly profitable, predictable systems that can handle exponential scale.</p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass-card p-8 rounded-2xl border border-[rgba(212,175,55,0.1)] hover:border-[#d4af37]/40 transition-colors group">
                            <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FaGlobe className="text-[#d4af37] text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Global Expansion</h3>
                            <p className="text-gray-400 leading-relaxed font-light">Building the exact BD frameworks needed to take Bahraini businesses into international markets like the USA and Europe.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Section & FAQ */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="prose prose-invert prose-lg max-w-none mb-20 font-light text-gray-300">
                        <h2 className="text-3xl font-bold text-white mb-6 font-heading">Why Choose a Business Advisor in Bahrain?</h2>
                        <p className="mb-6 leading-relaxed">
                            The Kingdom of Bahrain is rapidly evolving as a premier tech and business hub within the GCC. However, scaling a B2B service-based business or SaaS platform from the region requires more than just capital—it requires world-class operational structure and international business development systems.
                        </p>
                        <p className="mb-6 leading-relaxed">
                            As a dedicated Agency Growth Consultant, I help founders step out of day-to-day firefighting. We implement rigorous CRM cadences, train high-performance BD teams, and establish clear KPIs. Whether you are aiming to capture more market share within the Gulf or expand aggressively into western markets, the methodologies remain the same: predictable systems create predictable growth.
                        </p>
                    </div>

                    <div className="border-t border-[rgba(255,255,255,0.05)] pt-16">
                        <h2 className="text-3xl font-bold text-white mb-8 font-heading text-center">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            <div className="border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 bg-[#111115]">
                                <h3 className="text-xl font-bold text-white mb-3">Do you work with startups in Bahrain?</h3>
                                <p className="text-gray-400 font-light">Yes, I work with strategically positioned startups, specifically in the IT and SaaS sectors, helping them build their initial enterprise sales motions and operational architectures for scale.</p>
                            </div>
                            <div className="border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 bg-[#111115]">
                                <h3 className="text-xl font-bold text-white mb-3">Where is your Bahrain office located?</h3>
                                <p className="text-gray-400 font-light">My primary business address in the region is P.O. Box 23765, Manama, Kingdom of Bahrain. I conduct advisory sessions both virtually and in-person depending on client needs.</p>
                            </div>
                        </div>
                        <p className="mt-12 text-[10px] text-gray-500 uppercase tracking-widest text-center">Last Updated: February 24, 2026</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Bahrain;
