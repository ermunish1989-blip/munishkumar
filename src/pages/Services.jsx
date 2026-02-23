import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BottomCTA from '../components/home/BottomCTA';
import { FaCheckCircle, FaGlobe, FaHandshake, FaChartLine, FaSearchDollar, FaChalkboardTeacher, FaProjectDiagram } from 'react-icons/fa';
import SEO from '../components/ui/SEO';

const ServicesPage = () => {
    const services = [
        {
            icon: <FaGlobe size={32} className="text-[#d4af37]" />,
            glowColor: "from-blue-500/20 to-transparent",
            title: "Global B2B Growth Strategy",
            desc: "Build international sales frameworks that create predictable, scalable revenue pipelines across USA, Europe, GCC, and APAC markets. Stop relying on referrals and founder-led sales.",
            tags: ["B2B Sales", "Revenue Growth", "International"]
        },
        {
            icon: <FaHandshake size={32} className="text-[#d4af37]" />,
            glowColor: "from-purple-500/20 to-transparent",
            title: "Business Development Consulting",
            desc: "End-to-end BD strategy built around your business: lead generation systems, bidding and proposal frameworks, CRM setup and optimization, and pipeline management.",
            tags: ["BD Strategy", "Proposals", "CRM"]
        },
        {
            icon: <FaChartLine size={32} className="text-[#d4af37]" />,
            glowColor: "from-green-500/20 to-transparent",
            title: "Digital Agency Scaling",
            desc: "Transform your agency from operational chaos to a structured, scalable global operation — without burning out your team or sacrificing delivery quality. I know what it takes.",
            tags: ["Agency Growth", "Operations", "Systems"]
        },
        {
            icon: <FaSearchDollar size={32} className="text-[#d4af37]" />,
            glowColor: "from-[#d4af37]/20 to-transparent",
            title: "Marketing & SEO Systems",
            desc: "Multi-channel performance marketing that actually delivers: SEO strategy and implementation, PPC campaign management, Social Media Marketing, and LinkedIn lead generation.",
            tags: ["SEO", "PPC", "LinkedIn", "Content"]
        },
        {
            icon: <FaChalkboardTeacher size={32} className="text-[#d4af37]" />,
            glowColor: "from-red-500/20 to-transparent",
            title: "BD Training & Team Development",
            desc: "Train new BD joiners from day one. Build high-performance BD teams that understand bidding strategy, proposal writing, objection handling, and pipeline management.",
            tags: ["Training", "Leadership", "Bidding"]
        },
        {
            icon: <FaProjectDiagram size={32} className="text-[#d4af37]" />,
            glowColor: "from-cyan-500/20 to-transparent",
            title: "White-Label Partnerships",
            desc: "Scale your delivery capabilities without scaling your headcount. Through strategic white-label digital service partnerships, you can serve more clients and enter new service areas.",
            tags: ["White-Label", "Partnerships", "Scale"]
        }
    ];

    const idealClients = [
        "Digital Agency Founders",
        "IT & SaaS Company Leaders",
        "Startup Entrepreneurs",
        "BD Teams Seeking Training",
        "Companies Entering GCC, APAC & Western Markets"
    ];

    const whatYouGain = [
        "Predictable international revenue pipeline",
        "Higher conversion & client lifetime value",
        "Delivery teams that scale without chaos",
        "Confident entry into global markets",
        "Trained BD teams ready to win and retain"
    ];

    const process = [
        {
            step: "01",
            title: "Discovery Call",
            desc: "We start with a free 30-minute discovery call. I'll ask about your current situation, revenue goals, team structure, and the biggest challenges holding you back. No pitch — just clarity on where you are and where you need to go."
        },
        {
            step: "02",
            title: "Strategy Audit",
            desc: "A deep dive into your operations, BD processes, marketing systems, and market position. I identify the highest-leverage opportunities and the structural gaps that are costing you the most money right now."
        },
        {
            step: "03",
            title: "Custom Roadmap",
            desc: "I build you a tailored growth roadmap — with clear priorities, timelines, KPIs, and quick wins. You'll know exactly what to do, in what order, and why it will work for your specific situation."
        },
        {
            step: "04",
            title: "Execution & Growth",
            desc: "Hands-on support implementing the plan alongside your team — building systems, training your BD team, optimizing your pipeline, and tracking results. We move fast and measure everything."
        }
    ];

    return (
        <div className="w-full relative bg-[#050506]">
            <SEO
                title="Agency Scaling & B2B Growth Services | Munish Kumar"
                description="Expert B2B consulting services including Global Expansion Strategy, AI SEO Configuration, Answer Engine Optimization (AEO), and Team Structuring."
                canonicalUrl="https://munishkumar.com/services"
                keywords="B2B Growth Services, Agency Scaling Consulting, AI SEO Configuration, Global Expansion Strategy, Answer Engine Optimization Consulting"
            />
            {/* Page Hero */}
            <section className="pt-40 pb-20 bg-[#0A0A0C] relative border-b border-[#d4af37]/10 overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-[#d4af37]/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-l from-[#d4af37]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="inline-block relative mb-6"
                    >
                        <span className="relative z-10 text-[#d4af37] font-heading font-semibold tracking-widest text-xs sm:text-sm uppercase py-2 px-6 border border-[#d4af37]/30 rounded-full bg-[#d4af37]/5 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                            Premium Advisory
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="heading-xl font-bold text-white mb-6 leading-tight"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#b89327] animate-pulse">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto"
                    >
                        Structured consulting solutions designed to scale your business, optimize operations, and drive sustainable international revenue.
                    </motion.p>
                </div>
            </section>

            {/* All 6 Services */}
            <section className="py-32 relative bg-[#050506]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-center mb-20"
                    >
                        <span className="text-gray-500 font-heading font-medium tracking-wider text-sm uppercase mb-4 block">How I Help</span>
                        <h2 className="heading-lg text-white font-bold leading-tight">What I Offer</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="group relative h-full"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-b ${service.glowColor} rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10`}></div>

                                <div className="h-full bg-[#0a0a0c] border border-white/5 group-hover:border-[#d4af37]/40 rounded-[2rem] p-8 md:p-10 backdrop-blur-xl transition-all duration-500 flex flex-col relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-bl-full pointer-events-none group-hover:bg-[#d4af37]/[0.05] transition-colors duration-500"></div>

                                    <div className="flex items-center gap-6 mb-8 relative z-10 w-full justify-between items-start">
                                        <div className="w-16 h-16 rounded-2xl bg-[#050506] flex items-center justify-center border border-[#d4af37]/30 group-hover:scale-110 group-hover:bg-[#d4af37]/10 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                                            {service.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#d4af37] transition-colors relative z-10">{service.title}</h3>
                                    <p className="text-gray-400 leading-relaxed font-light text-lg mb-8 flex-grow relative z-10">{service.desc}</p>

                                    <div className="flex flex-wrap gap-2 mt-auto relative z-10 border-t border-white/5 pt-6 group-hover:border-[#d4af37]/20 transition-colors">
                                        {service.tags.map(tag => (
                                            <span key={tag} className="text-xs font-bold uppercase tracking-wider text-[#d4af37] bg-[#d4af37]/5 border border-[#d4af37]/20 px-3 py-1.5 rounded-full">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who This Is For */}
            <section className="py-32 bg-[#0A0A0C] border-y border-[#d4af37]/10 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent"></div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">

                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#050506] p-10 md:p-14 rounded-[2rem] border border-white/5 shadow-2xl relative group"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#d4af37]/5 blur-[60px] rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
                            <h3 className="text-3xl font-bold text-white mb-10 pb-6 border-b border-[#d4af37]/20 flex justify-between items-center group-hover:border-[#d4af37]/50 transition-colors">
                                <span>IDEAL CLIENTS</span>
                            </h3>
                            <ul className="space-y-6">
                                {idealClients.map((item, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (idx * 0.1) }}
                                        className="flex items-center gap-5 text-gray-300 text-xl font-light hover:text-white transition-colors cursor-default"
                                    >
                                        <FaCheckCircle className="text-[#d4af37]/50 flex-shrink-0" size={20} />
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-[#050506] p-10 md:p-14 rounded-[2rem] border border-[#d4af37]/30 shadow-[0_0_30px_rgba(212,175,55,0.05)] hover:shadow-[0_0_50px_rgba(212,175,55,0.1)] relative group transition-all duration-500"
                        >
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#d4af37]/10 blur-[60px] rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
                            <h3 className="text-3xl font-bold text-[#d4af37] mb-10 pb-6 border-b border-[#d4af37]/20 flex justify-between items-center">
                                <span>WHAT YOU GAIN</span>
                            </h3>
                            <ul className="space-y-6 flex flex-col justify-center h-full">
                                {whatYouGain.map((item, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + (idx * 0.1) }}
                                        className="flex items-center gap-5 text-white text-xl font-medium cursor-default group-hover:translate-x-2 transition-transform duration-300"
                                    >
                                        <FaCheckCircle className="text-[#d4af37] drop-shadow-[0_0_10px_rgba(212,175,55,0.5)] flex-shrink-0" size={20} />
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Engagement Process */}
            <section className="py-32 relative bg-[#050506]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-center mb-24"
                    >
                        <span className="text-gray-500 font-heading font-medium tracking-wider text-sm uppercase mb-4 block border border-white/5 inline-block px-4 py-1.5 rounded-full bg-white/[0.02]">How We Work</span>
                        <h2 className="heading-lg text-white font-bold">My 4-Step Engagement Process</h2>
                    </motion.div>

                    <div className="space-y-16 relative">
                        {/* Connecting Line */}
                        <div className="absolute left-[40px] md:left-[52px] top-[60px] bottom-[60px] w-px bg-gradient-to-b from-[#d4af37]/50 via-[#d4af37]/20 to-transparent hidden md:block"></div>

                        {process.map((p, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: idx * 0.15 }}
                                className="group relative flex flex-col md:flex-row gap-8 lg:gap-14 items-start"
                            >
                                {/* Circle Node Wrapper */}
                                <div className="relative z-10 bg-[#050506] shrink-0 pt-2 flex items-center justify-center">
                                    <div className="bg-gradient-to-br from-[#d4af37] to-[#b89327] text-[#050506] font-bold text-2xl w-24 h-24 rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center relative shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                        {p.step}
                                        {/* Outer Glow Ring on Hover */}
                                        <div className="absolute -inset-2 rounded-[2.8rem] border border-[#d4af37]/30 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity pointer-events-none"></div>
                                    </div>
                                </div>

                                <div className="glass flex-grow p-10 border border-[#d4af37]/10 hover:border-[#d4af37]/40 transition-colors duration-500 rounded-[2rem] bg-gradient-to-br from-white/[0.02] to-transparent relative overflow-hidden backdrop-blur-xl group-hover:shadow-[0_0_30px_rgba(212,175,55,0.05)]">
                                    <div className="text-[10rem] font-serif text-white/[0.02] font-bold absolute -right-10 -bottom-16 select-none pointer-events-none group-hover:text-[#d4af37]/[0.05] transition-colors duration-500">
                                        {p.step}
                                    </div>

                                    <div className="relative z-10">
                                        <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-[#d4af37] transition-colors">{p.title}</h3>
                                        <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">{p.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="text-center mt-24"
                    >
                        <Link to="/contact" className="relative group px-12 py-5 bg-gradient-to-r from-[#d4af37] to-[#b89327] rounded-full overflow-hidden inline-flex items-center justify-center isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#050506] before:-z-10 before:aspect-square before:hover:scale-150 hover:text-[#d4af37] text-[#050506] font-bold shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:shadow-[0_10px_40px_rgba(212,175,55,0.6)] border border-transparent hover:border-[#d4af37] transition-all text-xl tracking-wide">
                            <span className="relative z-10">Book a Free Discovery Call</span>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <BottomCTA />
        </div>
    );
};

export default ServicesPage;
