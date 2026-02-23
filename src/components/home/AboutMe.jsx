import { motion } from 'framer-motion';

const AboutMe = () => {
    const milestones = [
        { year: "2025", text: "Global Head of BD, WTechy Pvt. Ltd., Panchkula" },
        { year: "2023", text: "Director of Business Development, Next Black Computers, Bahrain" },
        { year: "2022", text: "VP of Business Development, Spark Business Support Services, Bahrain" },
        { year: "2012", text: "Built the entire BD function from ground up at Next Black Computers" }
    ];

    const awards = [
        { title: "30% YoY Revenue Growth", desc: "WTechy Global Campaigns" },
        { title: "150+ Member Team", desc: "Built & Led Internationally" },
        { title: "4 Global Markets", desc: "USA, Europe, GCC, APAC" },
        { title: "10 Years", desc: "Senior BD Leadership — Next Black Computers" }
    ];

    return (
        <section id="about" className="section bg-[#0a0a0c] relative">
            <div className="container mx-auto px-6">

                {/* Header Content */}
                <div className="text-center md:text-left mb-16 max-w-4xl">
                    <span className="text-gray-500 font-heading font-medium tracking-wider text-sm uppercase mb-4 block">
                        About Me
                    </span>
                    <h2 className="heading-lg text-white font-bold leading-tight">
                        I Help Agencies & SaaS Companies Scale Globally with <span className="text-gradient">Proven Systems</span>
                    </h2>
                </div>

                {/* Philosophy Text */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gray-300 text-lg leading-relaxed relative"
                    >
                        <div className="absolute top-0 left-[-24px] w-1 h-full bg-gradient-to-b from-[#d4af37] to-transparent hidden md:block"></div>
                        <p>
                            I started my career in business development in 2012, building the entire BD function at Next Black Computers in Bahrain from the ground up — progressing from BD Manager to VP over 10 years. I learned early that talent is never the problem. Structure is. Most agencies fail to scale not because they lack great people, but because they give those people chaos to work in instead of systems.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-lg leading-relaxed"
                    >
                        <p>
                            Today, as Global Head of Business Development at WTechy Pvt. Ltd., I lead a 150+ member team delivering up to 30% YoY revenue growth across USA, Europe, GCC, and APAC. My philosophy is simple: <strong className="text-white">Structure → Systems → Sales → Scale.</strong> Build the right foundation, install the right engine, and growth becomes predictable — not accidental.
                        </p>
                    </motion.div>
                </div>

                {/* Milestones & Awards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Milestones Timeline */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
                            <span className="w-8 h-[2px] bg-[#d4af37]"></span> Career Milestones
                        </h3>
                        <div className="flex flex-col gap-6 pl-4 border-l border-[rgba(255,255,255,0.1)]">
                            {milestones.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative pl-6"
                                >
                                    <div className="absolute top-2 -left-[25px] w-3 h-3 rounded-full bg-[#d4af37] border-4 border-[#0a0a0c]"></div>
                                    <span className="text-[#d4af37] font-bold text-lg block mb-1">{item.year}</span>
                                    <p className="text-gray-300">{item.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Awards Focus */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
                            <span className="w-8 h-[2px] bg-[#d4af37]"></span> Achievements
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {awards.map((award, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass-card p-6 border-[rgba(212,175,55,0.1)] hover:border-[rgba(212,175,55,0.4)]"
                                >
                                    <h4 className="text-[#d4af37] font-bold text-xl mb-2">{award.title}</h4>
                                    <p className="text-gray-400 text-sm">{award.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutMe;
