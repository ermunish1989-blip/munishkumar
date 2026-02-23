import { motion } from 'framer-motion';

const TestimonialBlock2 = () => {
    return (
        <section className="py-20 bg-[#050506] relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-[rgba(212,175,55,0.03)] to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Client Photo - Left side this time */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 flex justify-center lg:justify-start w-full"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden glass p-2 border-[rgba(212,175,55,0.2)]">
                            <div className="w-full h-full rounded-xl bg-gray-800 flex items-center justify-center">
                                <img
                                    src="/client-2.jpg"
                                    alt="Sarah Jenkins"
                                    className="w-full h-full object-cover rounded-xl"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="hidden w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex-col items-center justify-center text-gray-500 text-center p-4">
                                    <span className="text-3xl font-heading font-bold mb-2">SJ</span>
                                    <span className="text-xs uppercase tracking-widest">Client Photo</span>
                                </div>
                            </div>

                            {/* Decorative Accent */}
                            <div className="absolute top-4 right-4 w-24 h-24 bg-[rgba(212,175,55,0.1)] rounded-full blur-xl z-[-1]"></div>
                        </div>
                    </motion.div>

                    {/* Quote Content - Right side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1"
                    >
                        <div className="text-[120px] text-[rgba(212,175,55,0.1)] font-serif leading-none absolute top-[-40px] right-[-20px] lg:right-0 select-none hidden lg:block">
                            "
                        </div>

                        <h3 className="text-2xl md:text-3xl lg:text-4xl text-white font-heading font-medium leading-relaxed mb-8 relative z-10">
                            The Agency Audit Munish conducted for us was a turning point. He identified profit leaks and pipeline gaps we did not even know existed. We recovered 15% of our margin in the very first quarter and finally have a BD team that operates with real discipline and consistency. I would recommend him to any agency founder serious about sustainable growth.
                        </h3>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-[2px] bg-[#d4af37]"></div>
                            <div>
                                <p className="text-white font-bold text-lg">Sarah Jenkins</p>
                                <p className="text-gray-400 text-sm uppercase tracking-wider">Lead Director, Creative Flow Agency</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default TestimonialBlock2;
