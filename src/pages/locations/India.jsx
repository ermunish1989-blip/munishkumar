import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt, FaGlobe, FaChartLine, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const India = () => {
    return (
        <div className="w-full bg-[#050506] relative">
            <Helmet>
                <title>AI SEO Agency in India | Business Advisor Chandigarh | Munish Kumar</title>
                <meta name="description" content="Munish Kumar is a top AI SEO Agency expert and Business Advisor in India. Helping IT companies and SaaS founders scale with NLP and AEO strategies." />
                <meta name="keywords" content="AI SEO Agency India, Business Advisor India, Agency Growth Consultant Chandigarh, B2B Consulting India, SaaS Scaling India, IT Company Growth Expert, AEO Services India" />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Business Advisor and Growth Consultant in India",
                        "description": "Expert B2B consulting for IT agencies and SaaS companies expanding from India into global markets.",
                        "about": {
                            "@type": "LocalBusiness",
                            "name": "Munish Kumar Business Advisor & Consultant (India Office)",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Chandigarh",
                                "addressRegion": "Punjab",
                                "addressCountry": "India"
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
                                India
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="heading-xl font-bold text-white mb-6 leading-tight"
                        >
                            Strategic IT Business Advisor & Growth Consultant in <span className="text-gradient">India</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-400 font-light max-w-2xl mb-10 leading-relaxed"
                        >
                            From Chandigarh to the world — I partner with fast-growing Indian digital agencies, IT service providers, and SaaS startups to secure high-ticket clients in the USA, UK, and European markets.
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
                                <FaGlobe className="text-[#d4af37] text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Exporting IT Services</h3>
                            <p className="text-gray-400 leading-relaxed font-light">I specialize in helping Indian firms cross borders profitably. I build the exact BD and sales frameworks required to close enterprise deals abroad.</p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card p-8 rounded-2xl border border-[rgba(212,175,55,0.1)] hover:border-[#d4af37]/40 transition-colors group">
                            <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FaChartLine className="text-[#d4af37] text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Operational Discipline</h3>
                            <p className="text-gray-400 leading-relaxed font-light">Moving from an ad-hoc outsourcing model to a mature, predictable enterprise delivery structure ensuring 30% YoY growth.</p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass-card p-8 rounded-2xl border border-[rgba(212,175,55,0.1)] hover:border-[#d4af37]/40 transition-colors group">
                            <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FaMapMarkerAlt className="text-[#d4af37] text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Headquartered in Chandigarh</h3>
                            <p className="text-gray-400 leading-relaxed font-light">With an operational base in India, I understand the unique challenges of domestic talent scaling while meeting international client expectations.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Section & FAQ */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="prose prose-invert prose-lg max-w-none mb-20 font-light text-gray-300">
                        <h2 className="text-3xl font-bold text-white mb-6 font-heading">Scaling Indian IT & Agencies to the Next Level</h2>
                        <p className="mb-6 leading-relaxed">
                            India stands as a global powerhouse for software development, IT services, and digital marketing. However, the difference between a $1M agency and a $10M enterprise firm lies entirely in business development structures.
                        </p>
                        <p className="mb-6 leading-relaxed">
                            I act as a fractional Business Advisor and Growth Consultant for visionary Indian founders. I do not just offer advice; I actively build and oversee your B2B sales pipelines, bidding strategies, and international market penetration plans. By professionalizing your CRM systems and training your BD talent, we ensure your firm is positioned as a premium partner in the US and European markets, rather than a low-cost vendor.
                        </p>
                    </div>

                    <div className="border-t border-[rgba(255,255,255,0.05)] pt-16">
                        <h2 className="text-3xl font-bold text-white mb-8 font-heading text-center">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            <div className="border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 bg-[#111115]">
                                <h3 className="text-xl font-bold text-white mb-3">Do you help Indian companies get clients in the USA?</h3>
                                <p className="text-gray-400 font-light">Yes. International B2B growth is my core specialty. I construct outbound engines and go-to-market strategies targeting North American, European, and APAC clients.</p>
                            </div>
                            <div className="border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 bg-[#111115]">
                                <h3 className="text-xl font-bold text-white mb-3">Do you offer on-site consulting in India?</h3>
                                <p className="text-gray-400 font-light">While I am highly active remotely across multiple timezones, my India office in Chandigarh serves as an operational hub. On-site team workshops and strategy sessions can be arranged depending on the scope of our engagement.</p>
                            </div>
                        </div>
                        <p className="mt-12 text-[10px] text-gray-500 uppercase tracking-widest text-center">Last Updated: February 24, 2026</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default India;
