import { motion } from 'framer-motion';

const MainTestimonial = () => {
    return (
        <section className="py-20 bg-[#050506] relative border-y border-[rgba(255,255,255,0.05)] overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[rgba(212,175,55,0.03)] to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Quote Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 order-2 lg:order-1"
                    >
                        <div className="text-[120px] text-[rgba(212,175,55,0.1)] font-serif leading-none absolute top-[-40px] left-[-20px] lg:left-0 select-none">
                            "
                        </div>

                        <h3 className="text-2xl md:text-3xl lg:text-4xl text-white font-heading font-medium leading-relaxed mb-8 relative z-10">
                            Before working with Munish, we were stuck at the same revenue level for three years. Within 12 months of implementing his BD framework and operational systems, we broke through and scaled into two new international markets. The clarity and structure he brings is unlike anything we had experienced before.
                        </h3>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-[2px] bg-[#d4af37]"></div>
                            <div>
                                <p className="text-white font-bold text-lg">James Carter</p>
                                <p className="text-gray-400 text-sm uppercase tracking-wider">CEO, Nexus Digital Agency</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Client Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 order-1 lg:order-2 flex justify-center lg:justify-end w-full"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden glass p-2 border-[rgba(212,175,55,0.2)]">
                            <div className="w-full h-full rounded-xl bg-gray-800 flex items-center justify-center">
                                <img
                                    src="/client-1.jpg"
                                    alt="James Carter"
                                    className="w-full h-full object-cover rounded-xl"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="hidden w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex-col items-center justify-center text-gray-500 text-center p-4">
                                    <span className="text-3xl font-heading font-bold mb-2">JC</span>
                                    <span className="text-xs uppercase tracking-widest">Client Photo Placeholder</span>
                                </div>
                            </div>

                            {/* Decorative Accent */}
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[rgba(212,175,55,0.1)] rounded-full blur-xl z-[-1]"></div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default MainTestimonial;
