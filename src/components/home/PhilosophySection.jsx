import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const PhilosophySection = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

    // Create a rotating background element based on scroll
    const rotateBg = useTransform(scrollYProgress, [0, 1], [0, 180]);

    const steps = [
        {
            title: "Structure",
            desc: "Build solid operational foundations — clear roles, processes, and KPIs that scale internationally without breaking."
        },
        {
            title: "Systems",
            desc: "Implement CRM, automation, and reporting frameworks that drive smarter decisions at every level of the business."
        },
        {
            title: "Sales",
            desc: "Launch global B2B frameworks with predictable international revenue pipelines and higher conversion rates."
        },
        {
            title: "Scale",
            desc: "Expand confidently into USA, Europe, GCC, and APAC markets — with a delivery team that won't break under growth pressure."
        }
    ];

    return (
        <section ref={sectionRef} className="relative py-32 bg-[#050506] overflow-hidden">
            {/* Background Scroll Animated Element */}
            <motion.div
                style={{ rotate: rotateBg }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[rgba(212,175,55,0.05)] rounded-full border-dashed opacity-50 z-0 pointer-events-none"
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* Left Sticky Content */}
                    <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-auto flex flex-col justify-start">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#d4af37] font-heading font-medium tracking-wide text-sm uppercase mb-4 inline-block border border-[#d4af37]/30 px-3 py-1 rounded-full bg-[rgba(212,175,55,0.05)]">
                                My Philosophy
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-8 text-white leading-tight">
                                From Chaos to <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#b89327]">Calculated Growth</span>
                            </h2>

                            <motion.blockquote
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="pl-6 border-l-2 border-[#d4af37] mt-8 text-gray-400 italic font-light text-lg lg:text-xl"
                            >
                                "Your Growth = My Mission."
                                <span className="block mt-4 text-[#d4af37] text-sm not-italic font-medium uppercase tracking-widest">Munish Kumar</span>
                            </motion.blockquote>
                        </motion.div>
                    </div>

                    {/* Right Scrolling Timeline */}
                    <div className="w-full lg:w-2/3 flex flex-col gap-12 relative">
                        {/* Connecting Line */}
                        <div className="absolute left-[23px] top-[40px] bottom-0 w-[2px] bg-gradient-to-b from-[#d4af37]/50 via-[#d4af37]/10 to-transparent hidden md:block"></div>

                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="group flex flex-col md:flex-row gap-6 md:gap-10 relative"
                            >
                                {/* Step Number Node */}
                                <div className="hidden md:flex w-12 h-12 rounded-full border-2 border-[#d4af37] bg-[#050506] items-center justify-center font-heading font-bold text-[#d4af37] z-10 shrink-0 group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-[#050506] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                                    0{index + 1}
                                </div>

                                {/* Timeline Card */}
                                <div className="flex-1 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-8 backdrop-blur-sm group-hover:border-[#d4af37]/30 transition-all duration-300 relative overflow-hidden">
                                    <div className="md:hidden text-[#d4af37] font-bold text-2xl mb-4">0{index + 1}</div>
                                    <div className="absolute -right-4 -bottom-8 text-[8rem] font-bold text-white/[0.02] group-hover:text-white/[0.04] transition-colors duration-500 font-heading pointer-events-none select-none">
                                        0{index + 1}
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4 font-heading group-hover:text-[#d4af37] transition-colors">{step.title}</h3>
                                    <p className="text-gray-400 font-light leading-relaxed text-lg">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PhilosophySection;
