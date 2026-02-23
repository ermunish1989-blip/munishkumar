import { motion } from 'framer-motion';
import { FaBolt, FaChartLine, FaUsersCog, FaMoneyCheckAlt } from 'react-icons/fa';

const ProblemSection = () => {
    const problems = [
        {
            title: "Operational Chaos",
            description: "Processes that rely on heroics rather than systems. When you scale, things break and you find yourself putting out fires instead of growing the business.",
            icon: <FaBolt className="text-[#d4af37] text-3xl" />,
            glowColor: "from-yellow-500/20 to-transparent",
        },
        {
            title: "Lead Gen Fatigue",
            description: "Feast or famine cycles. Your pipeline is inconsistent, relying on referrals or founder-led sales that cannot scale beyond your personal capacity.",
            icon: <FaChartLine className="text-[#d4af37] text-3xl" />,
            glowColor: "from-red-500/20 to-transparent",
        },
        {
            title: "Talent Without Structure",
            description: "Great teams held back by poor BD processes, weak CRM usage, and misaligned performance frameworks. The problem was never the people.",
            icon: <FaUsersCog className="text-[#d4af37] text-3xl" />,
            glowColor: "from-blue-500/20 to-transparent",
        },
        {
            title: "Profit Stagnation",
            description: "Top-line revenue grows, but margins shrink. You're doing more work for less profit, trapped without productized or scalable offerings.",
            icon: <FaMoneyCheckAlt className="text-[#d4af37] text-3xl" />,
            glowColor: "from-green-500/20 to-transparent",
        }
    ];

    return (
        <section className="relative py-24 bg-[#0A0A0C] overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/5 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mb-16"
                >
                    <span className="text-[#d4af37] font-heading font-medium tracking-wide text-sm uppercase mb-4 block">
                        The Challenge
                    </span>
                    <h2 className="heading-lg font-bold mb-6 text-white leading-tight">
                        Why Agencies Struggle <br />
                        to <span className="text-gradient">Scale</span>
                    </h2>
                    <p className="text-lg text-gray-400 font-light leading-relaxed">
                        Most digital agencies are leaving millions on the table — not because of lack of talent, but because they're building revenue on chaos instead of systems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {problems.map((prob, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="group relative h-full"
                        >
                            {/* Animated Background Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-b ${prob.glowColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            <div className="relative h-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-8 backdrop-blur-md overflow-hidden z-10 hover:border-[#d4af37]/30 hover:bg-[rgba(212,175,55,0.03)] transition-all duration-300 flex flex-col">
                                <span className="absolute -right-4 -top-8 text-[8rem] font-bold text-white/5 group-hover:text-[#d4af37]/5 transition-colors duration-500 font-heading pointer-events-none select-none">
                                    0{index + 1}
                                </span>

                                <div className="mb-6 w-14 h-14 rounded-xl bg-[#050506] border border-[#d4af37]/20 flex items-center justify-center relative shadow-[0_4px_20px_rgba(212,175,55,0.1)] group-hover:scale-110 transition-transform duration-300">
                                    <div className="absolute inset-0 bg-[#d4af37]/10 rounded-xl animate-pulse group-hover:opacity-100 opacity-0 transition-opacity"></div>
                                    {prob.icon}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4 font-heading group-hover:text-[#d4af37] transition-colors">{prob.title}</h3>
                                <p className="text-gray-400 font-light leading-relaxed flex-grow">
                                    {prob.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
