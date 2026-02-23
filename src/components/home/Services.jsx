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
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className={`group relative h-full rounded-2xl p-[1px] bg-gradient-to-b ${service.highlight ? 'from-[#d4af37]/50 via-[#d4af37]/10 to-transparent' : 'from-white/10 to-transparent'} overflow-hidden shadow-xl`}
                        >
                            {/* Inner Card content */}
                            <div className={`relative h-full flex flex-col justify-between p-8 sm:p-10 rounded-[15px] ${service.highlight ? 'bg-[#151515]/95 shadow-[0_0_30px_rgba(212,175,55,0.1)] border-x border-b border-[#d4af37]/20' : 'bg-[#0a0a0c] border border-transparent'} backdrop-blur-xl z-10 overflow-hidden`}>

                                {/* Background glow effect */}
                                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} to-transparent blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full`}></div>

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center border ${service.highlight ? 'bg-[#d4af37] text-[#050506] border-[#d4af37] shadow-[0_4px_20px_rgba(212,175,55,0.4)]' : 'bg-[#15151a] text-[#d4af37] border-white/10 group-hover:border-[#d4af37]/50 group-hover:shadow-[0_4px_20px_rgba(212,175,55,0.2)]'} transition-all duration-300`}>
                                            {service.icon}
                                        </div>
                                        {service.badge && (
                                            <span className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#d4af37] to-[#b89327] text-[#050506] py-1.5 px-3 rounded-full shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                                                {service.badge}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4 font-heading group-hover:text-[#d4af37] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 font-light leading-relaxed mb-10 text-lg">
                                        {service.desc}
                                    </p>
                                </div>

                                <div className="mt-auto relative z-10">
                                    <Link
                                        to="/services"
                                        className={`inline-flex items-center text-sm font-bold uppercase tracking-wider ${service.highlight ? 'text-[#d4af37]' : 'text-gray-400 group-hover:text-[#d4af37]'} transition-colors gap-2 group-hover:gap-4`}
                                    >
                                        Learn More <FaArrowRight />
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
