import { motion } from 'framer-motion';
import { AnimatedCounter } from '../ui/AnimatedCounter';

const StatsBar = () => {
    const stats = [
        { label: "Years Experience", value: 15, suffix: "+" },
        { label: "Team Members Led", value: 150, suffix: "+" },
        { label: "YoY Revenue Growth", value: 30, suffix: "%" },
        { label: "Global Markets", value: 4, suffix: "" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="relative py-16 bg-[#050506] border-y border-[rgba(212,175,55,0.1)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/5 via-transparent to-[#d4af37]/5 mix-blend-overlay"></div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="container mx-auto px-6 relative z-10"
            >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-x-0 lg:divide-x divide-[rgba(212,175,55,0.1)]">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`flex flex-col items-center justify-center text-center group ${index !== 0 ? 'lg:pl-10' : ''}`}
                        >
                            <div className="mb-2 relative">
                                <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white relative z-10 flex items-baseline justify-center">
                                    <span className="text-gradient drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]">
                                        <AnimatedCounter value={stat.value} duration={2.5} delay={index * 0.2} suffix="" />
                                    </span>
                                    <span className="text-[#d4af37] text-3xl md:text-4xl lg:text-5xl ml-1 group-hover:scale-125 group-hover:-translate-y-2 transition-transform duration-300">
                                        {stat.suffix}
                                    </span>
                                </h3>
                                {/* Hover Glow */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#d4af37]/20 rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            <p className="text-sm md:text-base text-gray-400 font-medium tracking-wide uppercase group-hover:text-gray-200 transition-colors duration-300">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Scrolling subtle text background */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden opacity-[0.02] pointer-events-none select-none flex whitespace-nowrap">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                    className="flex text-[15rem] font-bold tracking-tighter"
                >
                    <span className="mr-24">SCALE YOUR AGENCY</span>
                    <span className="mr-24 text-outline">GLOBAL MARKETS</span>
                    <span className="mr-24">SCALE YOUR AGENCY</span>
                    <span className="text-outline">GLOBAL MARKETS</span>
                </motion.div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .text-outline {
                    -webkit-text-stroke: 2px #fff;
                    color: transparent;
                }
            `}} />
        </section>
    );
};

export default StatsBar;
