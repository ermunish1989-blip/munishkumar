import { motion } from 'framer-motion';
import { FaFire, FaChartLine, FaUsersSlash, FaMoneyBillWave } from 'react-icons/fa';

const TheProblem = () => {
    const cards = [
        {
            icon: <FaFire size={24} className="text-[#d4af37]" />,
            title: "Operational Chaos",
            desc: "Processes that rely on heroics rather than systems. When you scale, things break and you find yourself putting out fires instead of growing the business."
        },
        {
            icon: <FaChartLine size={24} className="text-[#d4af37]" />,
            title: "Lead Gen Fatigue",
            desc: "Feast or famine cycles. Your pipeline is inconsistent, relying on referrals or founder-led sales that cannot scale beyond your personal capacity."
        },
        {
            icon: <FaUsersSlash size={24} className="text-[#d4af37]" />,
            title: "Talent Without Structure",
            desc: "Great teams held back by poor BD processes, weak CRM usage, and misaligned performance frameworks. The problem was never the people."
        },
        {
            icon: <FaMoneyBillWave size={24} className="text-[#d4af37]" />,
            title: "Profit Stagnation",
            desc: "Top-line revenue grows, but margins shrink. You're doing more work for less profit, trapped without productized or scalable offerings."
        }
    ];

    return (
        <section className="py-24 bg-[#0a0a0c] relative">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-gray-500 font-heading font-medium tracking-wider text-sm uppercase mb-4 block">
                        The Challenge
                    </span>
                    <h2 className="heading-lg text-white font-bold leading-tight mb-6">
                        Why Agencies <span className="text-gradient">Struggle to Scale</span>
                    </h2>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        Most digital agencies are leaving millions on the table — not because of lack of talent, but because they're building revenue on chaos instead of systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card p-6 border border-[rgba(255,255,255,0.05)] hover:border-[rgba(212,175,55,0.3)] group relative overflow-hidden"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[rgba(212,175,55,0.1)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-heading">{card.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TheProblem;
