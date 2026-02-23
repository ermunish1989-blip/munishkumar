import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: "Before working with Munish, we were stuck at $2M ARR for three years. Within 12 months of implementing his operational framework, we crossed $5M with the same headcount. The clarity he brings is unmatched.",
            name: "James Carter",
            title: "CEO, Nexus Digital",
            location: "USA"
        },
        {
            quote: "Expanding into the GCC seemed impossible until we partnered with Munish. His strategic network in Bahrain and Saudi Arabia fast-tracked our enterprise contracts by 18 months.",
            name: "Ahmed Al-Farsi",
            title: "Founder, TechNova Solutions",
            location: "UAE"
        },
        {
            quote: "We tried opening a US office twice and failed. Munish restructured our outbound B2B sales pipeline, and within two quarters we secured three Fortune 500 accounts.",
            name: "David Chen",
            title: "Director of Sales, DevWorks Global",
            location: "APAC"
        },
        {
            quote: "The Agency Audit was an eye-opener. Munish identified profit leaks we didn't even know existed. We recovered 15% of our margin in the first quarter alone. Highly recommended.",
            name: "Sarah Jenkins",
            title: "Managing Partner, Creative Flow",
            location: "Europe"
        },
        {
            quote: "As an Indian IT firm, breaking into the UK market was brutal due to vendor bias. Munish rebranded our positioning to a strategic partner, effectively doubling our average deal size.",
            name: "Rajiv Khanna",
            title: "CEO, Innovate IT Services",
            location: "India"
        },
        {
            quote: "The level of clarity Munish brings to M&A and agency scaling is unparalleled. He doesn't just give advice; he builds the operational infrastructure alongside your executive team.",
            name: "Elena Rostova",
            title: "COO, ScaleSaaS Europe",
            location: "UK"
        },
        {
            quote: "He tore down our existing sales playbooks and completely rebuilt them for high-ticket closing. Our closing rate went from 12% to an astonishing 35% in just four months.",
            name: "Fatima Zahra",
            title: "Director, Digital Growth Partners",
            location: "Bahrain"
        },
        {
            quote: "Having a strategic Advisor who operates seamlessly across multiple time zones and cultures gave our executive board immense confidence during our recent Series B raise.",
            name: "Michael Sterling",
            title: "Founder & CEO, FinTech Dynamics",
            location: "USA"
        }
    ];

    return (
        <section className="relative py-32 bg-[#050506] overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#d4af37]/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mb-20"
                >
                    <span className="text-[#d4af37] font-heading font-medium tracking-wide text-sm uppercase mb-5 inline-block border border-[#d4af37]/30 px-4 py-1.5 rounded-full bg-[rgba(212,175,55,0.05)] backdrop-blur-sm">
                        Testimonials
                    </span>
                    <h2 className="heading-lg font-bold text-white leading-tight">
                        Trusted by <span className="text-gradient">Industry Leaders</span>
                    </h2>
                </motion.div>

                <div className="columns-1 md:columns-2 gap-10 w-full block">
                    {testimonials.map((test, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 50 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: (index % 2) * 0.15 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="relative group p-px rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.1)] to-transparent hover:from-[#d4af37]/50 hover:to-[#d4af37]/10 transition-all duration-500 overflow-hidden break-inside-avoid mb-10 inline-block w-full"
                        >
                            {/* Inner Card */}
                            <div className="h-full bg-[#0a0a0c] p-8 md:p-12 rounded-[15px] relative overflow-hidden">
                                {/* Ambient Background Animation */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 blur-[40px] rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

                                <FaQuoteLeft className="text-5xl text-[#d4af37]/20 mb-6 group-hover:text-[#d4af37]/40 transition-colors duration-500" />

                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="text-[#d4af37] text-sm" />
                                    ))}
                                </div>

                                <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed mb-10 italic">
                                    "{test.quote}"
                                </p>

                                <div className="flex items-center gap-4 border-t border-white/5 pt-6 group-hover:border-[#d4af37]/20 transition-colors">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b89327] flex items-center justify-center font-bold text-[#050506] text-xl shadow-[0_4px_10px_rgba(212,175,55,0.3)] shrink-0">
                                        {test.name.charAt(0)}{test.name.split(' ')[1].charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors">{test.name}</h4>
                                        <p className="text-sm text-gray-400 font-light">{test.title} • {test.location}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
