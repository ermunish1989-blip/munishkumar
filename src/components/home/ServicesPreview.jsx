import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCommentDots, FaSearch, FaChalkboardTeacher } from 'react-icons/fa';

const ServicesPreview = () => {
    const services = [
        {
            icon: <FaCommentDots size={28} className="text-[#d4af37]" />,
            title: "1-on-1 Advisory",
            desc: "Direct access to me for strategic guidance. Weekly calls to keep you accountable and laser-focused on high-leverage growth activities.",
            popular: false
        },
        {
            icon: <FaSearch size={28} className="text-[#d4af37]" />,
            title: "Agency Audit",
            desc: "A comprehensive deep dive into your agency. We tear down your processes and rebuild them for predictable, scalable growth.",
            popular: true
        },
        {
            icon: <FaChalkboardTeacher size={28} className="text-[#d4af37]" />,
            title: "Growth Workshops",
            desc: "Intensive workshops for your leadership team. Align your vision, set measurable KPIs, and build a culture that consistently wins.",
            popular: false
        }
    ];

    return (
        <section className="py-24 bg-[#0a0a0c] relative">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-[#d4af37] font-heading font-medium tracking-wider text-sm uppercase mb-4 block">
                        Services
                    </span>
                    <h2 className="heading-lg text-white font-bold mb-4">
                        How We Can <span className="text-gradient">Work Together</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Tailored engagements designed for where you are in your growth journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`glass-card p-8 group relative overflow-hidden flex flex-col ${service.popular ? 'border-[#d4af37] shadow-[0_0_30px_rgba(212,175,55,0.1)]' : ''}`}
                        >
                            {service.popular && (
                                <div className="absolute top-0 right-0 bg-gradient-to-r from-[#d4af37] to-[#b89327] text-[#050506] font-bold text-xs uppercase tracking-wider py-1 px-3 rounded-bl-lg">
                                    Most Popular
                                </div>
                            )}
                            <div className="w-14 h-14 rounded-full bg-[rgba(212,175,55,0.1)] flex items-center justify-center mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#d4af37] transition-colors">{service.title}</h3>
                            <p className="text-gray-400 mb-8 flex-grow">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link to="/services" className="inline-flex items-center text-[#d4af37] font-bold uppercase tracking-wider text-sm hover:text-white transition-colors group">
                        See All Services <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
