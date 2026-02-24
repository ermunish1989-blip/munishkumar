import { motion } from 'framer-motion';
import BottomCTA from '../components/home/BottomCTA';
import { FaCheckCircle, FaAward, FaGlobe, FaCogs, FaHandshake, FaBullseye } from 'react-icons/fa';
import SEO from '../components/ui/SEO';

const About = () => {
    const values = [
        {
            title: "Results Over Activity",
            desc: "I focus exclusively on high-leverage actions that move the needle. Busy work isn't growth. Every recommendation I make is tied to a measurable outcome.",
            icon: <FaBullseye className="text-[#d4af37] text-3xl mb-4" />
        },
        {
            title: "Systems Over Guesswork",
            desc: "Every strategy I recommend is grounded in proven, repeatable frameworks. No gut feelings. No shortcuts. Just systems that scale.",
            icon: <FaCogs className="text-[#d4af37] text-3xl mb-4" />
        },
        {
            title: "Relationships Over Transactions",
            desc: "I build long-term partnerships based on trust, transparency, and real results. My clients don't just hire a consultant — they gain a strategic growth partner.",
            icon: <FaHandshake className="text-[#d4af37] text-3xl mb-4" />
        },
        {
            title: "Global Thinking, Local Execution",
            desc: "International strategy requires market-specific precision. I bring both — a global vision and the local intelligence to execute it across USA, Europe, GCC, and APAC.",
            icon: <FaGlobe className="text-[#d4af37] text-3xl mb-4" />
        }
    ];

    const philosophy = [
        {
            title: "Structure",
            desc: "Most agencies try to scale by hiring more people or running more campaigns. They skip the most critical step: building a solid foundation. Structure means defining clear roles, streamlined processes, accountability frameworks, and KPIs that everyone understands and works toward."
        },
        {
            title: "Systems",
            desc: "Once the structure is in place, we install the engine: CRM implementation, marketing automation workflows, performance reporting dashboards, and data-driven decision frameworks. Systems replace guesswork with predictability."
        },
        {
            title: "Sales",
            desc: "With structure and systems in place, sales becomes a science rather than an art. We build international B2B pipelines, optimize conversion at every stage of the funnel, and implement lead generation frameworks that produce consistent, qualified opportunities."
        },
        {
            title: "Scale",
            desc: "The final step is expansion — confidently entering new markets (USA, Europe, GCC, APAC) with a team and infrastructure that can handle the growth without breaking. Scale is the result of the first three steps done right."
        }
    ];

    const certs = [
        "LinkedIn Marketing",
        "Digital Marketing",
        "Microsoft .NET Fundamentals",
        "Introduction to Cybersecurity",
        "Introduction to Productivity Framework"
    ];

    return (
        <div className="w-full relative bg-[#050506]">
            <SEO
                title="About Munish Kumar | International Business Advisor & Growth Strategist"
                description="Learn about Munish Kumar's journey building and scaling 150+ member global teams and expanding digital agencies across Bahrain, USA, UK, UAE, and APAC."
                canonicalUrl="https://munishkumar.com/about"
            />
            {/* Page Hero */}
            <section className="pt-40 pb-20 bg-[#0A0A0C] relative border-b border-[#d4af37]/10 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#d4af37]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#d4af37]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="inline-block relative mb-6"
                    >
                        <span className="relative z-10 text-[#d4af37] font-heading font-semibold tracking-widest text-xs sm:text-sm uppercase py-2 px-6 border border-[#d4af37]/30 rounded-full bg-[#d4af37]/5 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                            My Journey
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="heading-xl font-bold text-white mb-6 leading-tight"
                    >
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#b89327] animate-pulse">Munish Kumar</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto"
                    >
                        15+ years building, scaling, and growing businesses globally.
                    </motion.p>
                </div>
            </section>

            {/* My Story */}
            <section className="py-32 relative overflow-hidden bg-[#050506]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-center mb-16"
                    >
                        <span className="text-gray-500 font-heading font-medium tracking-wider text-sm uppercase mb-4 block">My Story</span>
                        <h2 className="heading-lg text-white font-bold leading-tight">
                            15+ Years of Fixing What <span className="text-gradient hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.8)] transition-all">Holds Agencies Back</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative p-[1px] rounded-[2rem] bg-gradient-to-b from-[#d4af37]/40 via-[#d4af37]/5 to-transparent overflow-hidden shadow-2xl group hover:shadow-[0_0_50px_rgba(212,175,55,0.1)] transition-shadow duration-700"
                    >
                        <div className="absolute inset-0 bg-[#050506] rounded-[2rem] z-0"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent z-0"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-1000"></div>

                        <div className="w-full h-64 md:h-96 relative z-10 overflow-hidden rounded-t-[2rem]">
                            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop" alt="A team of business professionals sitting around a modern conference table reviewing laptops and structural growth strategy notes for a digital agency scaling workshop." className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050506] via-[#050506]/40 to-transparent" />
                        </div>

                        <div className="relative z-10 p-10 md:p-16 pt-0 md:pt-4 space-y-8 text-lg text-gray-300 leading-relaxed font-light backdrop-blur-sm -mt-8">
                            <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-[#d4af37] first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">
                                I started my journey in business development in 2012 at Next Black Computers in Bahrain — managing the full BD cycle from requirements analysis through to project delivery. Over 10 years, I didn't just grow a function, I built one from scratch.
                            </p>
                            <p>
                                From BD Manager to VP, I learned something that changed everything: <strong className="text-white font-bold bg-[#d4af37]/20 px-2 py-1 rounded">talent was never the problem. Structure was.</strong> When agencies hire great people but give them chaos to work in, they fail — not because of the people, but because of the system.
                            </p>
                            <p>
                                Since then, across Bahrain, GCC, and now globally at WTechy Pvt. Ltd., I've taken that lesson into every engagement. I build systems that create predictable, scalable, international growth for digital agencies, IT firms, and SaaS companies. That's what gets me up every morning.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-32 bg-[#0A0A0C] border-y border-[#d4af37]/10 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-full bg-gradient-to-r from-[#d4af37]/5 to-transparent pointer-events-none"></div>

                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="text-[#d4af37] font-heading font-medium tracking-wider text-sm uppercase mb-4 inline-block px-4 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30">What I Stand For</span>
                        <h2 className="heading-lg text-white font-bold">My Core Values</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {values.map((val, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="relative group rounded-3xl p-[1px] bg-gradient-to-b from-white/10 to-transparent hover:from-[#d4af37]/50 hover:to-transparent transition-all overflow-hidden cursor-default"
                            >
                                <div className="absolute -inset-10 bg-gradient-to-br from-[#d4af37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none"></div>
                                <div className="relative h-full bg-[#050506] rounded-[23px] p-10 z-10">
                                    {val.icon}
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#d4af37] transition-colors">{val.title}</h3>
                                    <p className="text-gray-400 leading-relaxed font-light text-lg">{val.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy Deep Dive */}
            <section className="py-32 relative bg-[#050506]">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="text-gray-500 font-heading font-medium tracking-wider text-sm uppercase mb-4 block">My Framework</span>
                        <h2 className="heading-lg text-white font-bold">The Scaling Philosophy</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        {philosophy.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: idx * 0.15, duration: 0.7 }}
                                className="relative group"
                            >
                                <div className="absolute -left-6 -top-6 text-[8rem] font-serif text-[#d4af37]/5 font-bold leading-none pointer-events-none group-hover:text-[#d4af37]/10 transition-colors duration-500 select-none">
                                    0{idx + 1}
                                </div>
                                <div className="relative z-10 pl-6 border-l-4 border-[#d4af37]/30 group-hover:border-[#d4af37] transition-colors duration-500">
                                    <h3 className="text-3xl font-bold text-white mb-4 block group-hover:translate-x-2 transition-transform duration-300">{item.title}</h3>
                                    <p className="text-gray-400 text-lg leading-relaxed font-light">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications and Quote */}
            <section className="py-32 bg-[#0A0A0C] border-t border-[#d4af37]/10 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1000px] bg-gradient-to-r from-[#d4af37]/5 to-[#b89327]/5 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#050506]/50 p-10 md:p-14 rounded-3xl border border-white/5 backdrop-blur-xl shadow-2xl"
                        >
                            <span className="flex items-center gap-3 text-[#d4af37] font-heading font-bold tracking-wider text-sm uppercase mb-6">
                                <FaAward size={20} /> Credentials
                            </span>
                            <h2 className="text-4xl md:text-5xl text-white font-bold mb-10 leading-tight">Certifications</h2>
                            <ul className="space-y-6">
                                {certs.map((cert, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (idx * 0.1) }}
                                        className="flex items-center gap-5 text-gray-300 text-lg group"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-[#d4af37]/10 flex items-center justify-center border border-[#d4af37]/30 group-hover:bg-[#d4af37] group-hover:text-black transition-all shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                                            <FaCheckCircle className="text-[#d4af37] group-hover:text-black" size={14} />
                                        </div>
                                        <span className="group-hover:text-white transition-colors">{cert}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative group bg-gradient-to-br from-[#d4af37] to-[#b89327] p-[2px] rounded-3xl overflow-hidden hover:shadow-[0_0_50px_rgba(212,175,55,0.3)] transition-all duration-700"
                        >
                            <div className="bg-[#050506] p-12 md:p-16 rounded-[22px] h-full relative overflow-hidden backdrop-blur-3xl">
                                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-[0.05] pointer-events-none"></div>
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[#d4af37]/20 blur-[50px] rounded-full group-hover:scale-150 transition-transform duration-1000"></div>

                                <div className="text-8xl text-[#d4af37]/20 font-serif absolute -top-4 -left-2 font-bold leading-none pointer-events-none">"</div>

                                <p className="text-2xl md:text-4xl text-white font-heading leading-tight mb-8 italic relative z-10 mt-8">
                                    Most agencies don't have a talent problem. They have a structure problem. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#b89327] font-bold">I fix that.</span>
                                </p>

                                <div className="flex items-center gap-4 relative z-10 border-t border-white/10 pt-8 mt-4">
                                    <div className="w-12 h-12 rounded-full border border-[#d4af37] bg-[#d4af37]/10 flex items-center justify-center font-bold text-[#d4af37]">MK</div>
                                    <p className="text-gray-300 font-bold uppercase tracking-wider text-sm">— Munish Kumar</p>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            <BottomCTA />
        </div>
    );
};

export default About;
