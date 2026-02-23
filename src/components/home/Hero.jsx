import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { useRef } from 'react';

const Hero = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

    // Parallax Effects
    const yHero = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // Floating Orbs Logic
    const orbs = [
        { size: 500, color: 'from-[#d4af37]/10 to-[#b89327]/5', top: '10%', right: '5%', duration: 15 },
        { size: 600, color: 'from-[#050506] to-[#d4af37]/5', bottom: '-20%', left: '-10%', duration: 25 },
        { size: 300, color: 'from-blue-500/10 to-[#d4af37]/10', top: '40%', left: '30%', duration: 20 },
    ];

    return (
        <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-[#0A0A0C]">
            {/* Advanced Animated Orbs Background */}
            {orbs.map((orb, i) => (
                <motion.div
                    key={i}
                    animate={{
                        x: [0, 50, -50, 0],
                        y: [0, -50, 50, 0],
                        scale: [1, 1.1, 0.9, 1]
                    }}
                    transition={{
                        duration: orb.duration,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className={`absolute blur-[120px] rounded-full bg-gradient-to-br ${orb.color} pointer-events-none`}
                    style={{
                        width: orb.size,
                        height: orb.size,
                        top: orb.top,
                        left: orb.left,
                        right: orb.right,
                        bottom: orb.bottom
                    }}
                />
            ))}

            <motion.div style={{ y: yHero, opacity: opacityHero }} className="container mx-auto px-6 relative z-10 w-full h-full flex-grow flex items-center">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12 w-full">

                    {/* Left Text Content */}
                    <div className="flex-1 text-center lg:text-left pt-12 lg:pt-0 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="inline-block relative mb-6"
                        >
                            <span className="relative z-10 text-[#d4af37] font-heading font-semibold tracking-widest text-xs sm:text-sm uppercase py-2 px-4 border border-[#d4af37]/30 rounded-full bg-[#d4af37]/5 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                                Business Advisor & Consultant
                                <span className="absolute -inset-0.5 rounded-full blur-[10px] bg-[#d4af37]/20 z-[-1] animate-pulse"></span>
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, filter: "blur(10px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                            className="heading-xl font-bold mb-6 text-white leading-[1.1]"
                        >
                            Scale Your Agency <br />
                            to <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#b89327] animate-gradient-x">New Heights.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
                        >
                            Expert B2B growth consulting for founders ready to break through revenue ceilings, operational chaos, and lead generation fatigue.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-12"
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                                <Link to="/contact" className="relative group w-full px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b89327] rounded-lg overflow-hidden flex items-center justify-center isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#050506] before:-z-10 before:aspect-square before:hover:scale-150 hover:text-[#d4af37] text-[#050506] font-bold shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.6)] transition-all">
                                    <span className="mr-3">Work With Me</span>
                                    <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                                <Link to="/about" className="group w-full px-8 py-4 relative rounded-lg border border-gray-700 bg-[rgba(255,255,255,0.02)] hover:border-[#d4af37]/50 hover:bg-[rgba(212,175,55,0.05)] transition-all duration-300 flex items-center justify-center text-white backdrop-blur-md">
                                    <span className="mr-3">My Story</span>
                                    <FaArrowRight className="text-[#d4af37] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Social Icons with Tooltips */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="flex items-center justify-center lg:justify-start gap-5"
                        >
                            <a
                                href="https://www.linkedin.com/in/munish-kumar-business-adviser/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group flex items-center justify-center w-14 h-14 rounded-full border border-gray-700/50 bg-[rgba(255,255,255,0.02)] text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(212,175,55,0.2)] backdrop-blur-sm"
                            >
                                <FaLinkedin size={24} />
                                <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all bg-[#050506] text-[#d4af37] text-xs py-1 px-3 rounded border border-[#d4af37]/30 whitespace-nowrap">LinkedIn</span>
                            </a>
                            <a
                                href="mailto:info@munishkumar.com"
                                className="relative group flex items-center justify-center w-14 h-14 rounded-full border border-gray-700/50 bg-[rgba(255,255,255,0.02)] text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(212,175,55,0.2)] backdrop-blur-sm"
                            >
                                <FaEnvelope size={24} />
                                <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all bg-[#050506] text-[#d4af37] text-xs py-1 px-3 rounded border border-[#d4af37]/30 whitespace-nowrap">Email Me</span>
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Image Content - High End Parallax Frame */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1 w-full flex justify-center lg:justify-end relative"
                    >
                        <div className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[540px] lg:h-[540px] perspective-1000">

                            {/* Elaborate Glows */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b89327] blur-[60px] opacity-20 animate-pulse mix-blend-screen" />

                            <motion.div
                                className="absolute inset-4 rounded-[2rem] overflow-hidden border border-gray-600/30 bg-[#050506]/80 backdrop-blur-xl shadow-2xl relative z-10 group rotate-3"
                                whileHover={{ rotate: 0, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                            >
                                {/* Glass shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"></div>

                                {/* Placeholder logic with advanced styling */}
                                <div className="w-full h-full bg-gradient-to-br from-[#101014] to-[#050506] flex items-center justify-center relative overflow-hidden group">
                                    <img
                                        src="/munish.jpg"
                                        alt="Munish Kumar"
                                        className="w-full h-full object-cover relative z-10 transition-transform duration-1000 group-hover:scale-110 filter brightness-90 group-hover:brightness-110"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop";
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050506] via-transparent to-transparent opacity-80 z-10 pointer-events-none"></div>
                                </div>
                            </motion.div>

                            {/* Floating decorative cards */}
                            <motion.div
                                animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 lg:-right-10 glass-card p-4 rounded-xl backdrop-blur-xl border border-[#d4af37]/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-20"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping"></div>
                                    <div>
                                        <p className="text-[#d4af37] font-bold text-lg leading-tight">15+ Yrs</p>
                                        <p className="text-xs text-gray-400">Experience</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [15, -15, 15], rotate: [2, -2, 2] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-8 -left-4 lg:-left-12 glass-card p-4 rounded-xl backdrop-blur-xl border border-[#d4af37]/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-20"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[#d4af37]/10 flex items-center justify-center border border-[#d4af37]/30">
                                        <FaArrowRight className="text-[#d4af37] -rotate-45" size={12} />
                                    </div>
                                    <div>
                                        <p className="text-[#d4af37] font-bold text-lg leading-tight">30% YoY</p>
                                        <p className="text-xs text-gray-400">Growth Average</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Decorative framing box */}
                            <div className="absolute inset-0 rounded-[2rem] border-2 border-[#d4af37]/20 -rotate-3 scale-105 z-0 transition-transform duration-700 hover:rotate-0 hover:scale-100"></div>

                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
