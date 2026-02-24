import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaChartLine, FaSearchDollar, FaUsersCog } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            title: "1-on-1 Advisory",
            desc: "Direct access to me for strategic guidance. Weekly calls to keep you accountable and laser-focused on high-leverage growth activities.",
            icon: <FaChartLine size={24} />,
            badge: null,
            color: "from-blue-500/20"
        },
        {
            title: "Agency Audit",
            desc: "A comprehensive deep dive into your agency. We tear down your processes and rebuild them for predictable, scalable growth.",
            icon: <FaSearchDollar size={24} />,
            badge: "Most Popular",
            color: "from-[#d4af37]/20",
            highlight: true
        },
        {
            title: "Growth Workshops",
            desc: "Intensive workshops for your leadership team. Align your vision, set measurable KPIs, and build a culture that consistently wins.",
            icon: <FaUsersCog size={24} />,
            badge: null,
            color: "from-purple-500/20"
        }
    ];

    return (
        <section className="relative py-32 bg-[#0A0A0C] overflow-hidden">
            {/* Ambient Background Lights */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37]/5 blur-[120px] rounded-full mix-blend-screen animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#d4af37]/5 blur-[150px] rounded-full mix-blend-screen"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <span className="text-[#d4af37] font-heading font-medium tracking-wide text-sm uppercase mb-4 inline-block border border-[#d4af37]/30 px-4 py-1.5 rounded-full bg-[#d4af37]/10 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                        Services
                    </span>
                    <h2 className="heading-lg font-bold mb-6 text-white leading-tight">
                        How We Can <span className="text-gradient">Work Together</span>
                    </h2>
                    <p className="text-lg text-gray-400 font-light leading-relaxed">
                        Tailored engagements designed for where you are in your growth journey.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -12 }}
                            className={`group relative h-full rounded-2xl p-[1px] bg-gradient-to-b ${service.highlight ? 'from-[#d4af37]/50 via-[#d4af37]/20 to-transparent' : 'from-white/10 to-transparent'} overflow-hidden shadow-2xl transition-all duration-500`}
                        >
                            {/* Inner Card content */}
                            <div className={`relative h-full flex flex-col justify-between p-8 sm:p-10 rounded-[15px] ${service.highlight ? 'bg-[#121214]/95 shadow-[0_20px_50px_rgba(212,175,55,0.08)] border border-[#d4af37]/10' : 'bg-[#0a0a0c] border border-white/5'} backdrop-blur-2xl z-10 overflow-hidden`}>

                                {/* Background glow effect */}
                                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${service.color} to-transparent blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none rounded-full`}></div>
                                <div className={`absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr ${service.color} to-transparent blur-[70px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000 pointer-events-none rounded-full`}></div>

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-10">
                                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border ${service.highlight ? 'bg-gradient-to-br from-[#d4af37] to-[#b89327] text-[#050506] border-[#d4af37] shadow-[0_10px_30px_rgba(212,175,55,0.3)]' : 'bg-[#15151a] text-[#d4af37] border-white/10 group-hover:border-[#d4af37]/30 group-hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)]'} transition-all duration-500 scale-100 group-hover:scale-110`}>
                                            {service.icon}
                                        </div>
                                        {service.badge && (
                                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] bg-[#d4af37] text-[#050506] py-1.5 px-3.5 rounded-full shadow-[0_5px_15px_rgba(212,175,55,0.25)]">
                                                {service.badge}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-5 font-heading group-hover:text-[#d4af37] transition-colors leading-snug">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 font-light leading-relaxed mb-10 text-[17px]">
                                        {service.desc}
                                    </p>
                                </div>

                                <div className="mt-auto relative z-10">
                                    <Link
                                        to="/services"
                                        className={`inline-flex items-center text-sm font-bold uppercase tracking-[0.2em] ${service.highlight ? 'text-[#d4af37]' : 'text-gray-400 group-hover:text-[#d4af37]'} transition-all gap-3 overflow-hidden group/link`}
                                    >
                                        <span className="relative overflow-hidden inline-block">
                                            <span className="inline-block transition-transform duration-500 group-hover/link:-translate-y-full">Learn More</span>
                                            <span className="absolute top-0 left-0 inline-block transition-transform duration-500 translate-y-full group-hover/link:translate-y-0">Learn More</span>
                                        </span>
                                        <FaArrowRight className="transition-transform duration-500 group-hover/link:translate-x-2" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex justify-center"
                >
                    <Link to="/services" className="relative group px-10 py-4 bg-transparent border border-[#d4af37]/50 rounded-lg overflow-hidden flex items-center justify-center isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#d4af37] before:-z-10 before:aspect-square before:hover:scale-150 hover:text-[#050506] text-[#d4af37] font-bold tracking-wide transition-colors">
                        <span className="mr-3">See All Services</span>
                        <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
