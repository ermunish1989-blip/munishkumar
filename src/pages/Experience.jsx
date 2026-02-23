import { motion } from 'framer-motion';
import BottomCTA from '../components/home/BottomCTA';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';

const Experience = () => {
    const roles = [
        {
            period: "Feb 2025 – Present",
            company: "WTechy Pvt. Ltd., Panchkula",
            role: "Global Head of Business Development",
            bullets: [
                "Architected a global B2B sales framework delivering up to 30% YoY revenue growth across international markets",
                "Led 150+ member team across digital marketing, web development, and strategic sales — spanning 4 continents (USA, Europe, GCC, APAC)",
                "Managed multi-channel campaigns (SEO, PPC, Social Media, Content) consistently exceeding KPIs",
                "Implemented CRM systems and marketing automation workflows for white-label agency partners",
                "Built long-term partnerships with agencies, SaaS companies, and IT firms globally",
                "Aligned cross-functional teams around unified revenue targets and global expansion goals"
            ]
        },
        {
            period: "Mar 2023 – Dec 2024",
            company: "Next Black Computers, Bahrain",
            role: "Director of Business Development",
            bullets: [
                "Led a full-scale BD transformation — rebuilding growth strategy and expanding into new GCC markets",
                "Designed comprehensive BD strategy driving measurable pipeline growth across private and government sectors",
                "Built and mentored a high-performance BD team with clear KPIs and data-driven reporting frameworks",
                "Represented the company at industry events and government stakeholder forums across Bahrain",
                "Expanded into new GCC market segments, growing revenue beyond the existing client base"
            ]
        },
        {
            period: "Mar 2022 – Feb 2023",
            company: "Spark Business Support Services, Bahrain",
            role: "Vice President of Business Development",
            bullets: [
                "Drove BD strategy for Bahrain-based IT services firm across the GCC professional services sector",
                "Conducted in-depth market research to uncover high-potential client segments and emerging opportunities",
                "Built strong pipeline through strategic outreach and relationship-based selling",
                "Maintained and deepened existing client accounts, ensuring high satisfaction and repeat business"
            ]
        },
        {
            period: "Jan 2012 – Mar 2022",
            company: "Next Black Computers, Bahrain",
            role: "VP of Business Development",
            bullets: [
                "Transitioned the company from reactive sales to a structured, proactive BD operation — built from ground up",
                "Built and managed channel partner networks, opening new revenue streams through strategic alliances",
                "Established scalable sales processes covering lead generation, proposal development, and deal closure",
                "Consistently exceeded quarterly targets delivering tailored technology solutions to enterprise clients",
                "Mentored and trained junior BD professionals, building a culture of results and accountability",
                "Spearheaded digital strategy and e-commerce initiatives, expanding the company's service portfolio"
            ]
        }
    ];

    const highlights = [
        { value: 30, suffix: "%", text: "YoY Revenue Growth" },
        { value: 150, suffix: "+", text: "Team Members Led" },
        { value: 4, suffix: "", text: "Continents" },
        { value: 10, suffix: "+", text: "Years at Next Black Computers" }
    ];

    const skills = [
        {
            category: "Strategy",
            items: ["Global B2B Sales", "Business Development", "Revenue Growth", "International Expansion", "Startup Scaling"],
            color: "from-blue-500/20"
        },
        {
            category: "Marketing",
            items: ["SEO & Performance Marketing", "LinkedIn Lead Generation", "Content Marketing", "PPC Campaigns", "Marketing Automation"],
            color: "from-purple-500/20"
        },
        {
            category: "Operations",
            items: ["CRM Implementation", "White-Label Partnerships", "KPI Frameworks", "Process Design", "Team Structuring"],
            color: "from-[#d4af37]/20"
        },
        {
            category: "Leadership",
            items: ["Team Building (150+)", "BD Training & Mentoring", "Bidding & Proposal Writing", "Client Relationship Management"],
            color: "from-red-500/20"
        }
    ];

    return (
        <div className="w-full relative bg-[#050506]">
            {/* Page Hero */}
            <section className="pt-40 pb-20 bg-[#0A0A0C] relative border-b border-[#d4af37]/10 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#d4af37]/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="inline-block relative mb-6"
                    >
                        <span className="relative z-10 text-[#d4af37] font-heading font-semibold tracking-widest text-xs sm:text-sm uppercase py-2 px-6 border border-[#d4af37]/30 rounded-full bg-[#d4af37]/5 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                            Track Record
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="heading-xl font-bold text-white mb-6 leading-tight"
                    >
                        Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#b89327] animate-pulse">Track Record</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto"
                    >
                        15+ years across Bahrain, GCC, and globally — building, leading, and scaling BD teams from the ground up.
                    </motion.p>
                </div>
            </section>

            {/* Key Achievements Highlight Bar */}
            <section className="py-20 relative bg-[#050506] border-y border-[#d4af37]/5 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-x-0 lg:divide-x divide-white/5">
                        {highlights.map((h, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: idx * 0.1 }}
                                className={`text-center group ${idx !== 0 ? 'lg:pl-8' : ''}`}
                            >
                                <div className="text-5xl md:text-6xl lg:text-[4.5rem] font-heading font-extrabold text-[#d4af37] mb-2 flex justify-center items-baseline group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                                    <AnimatedCounter value={h.value} duration={2} delay={0.2} />
                                    <span className="text-3xl md:text-4xl ml-1">{h.suffix}</span>
                                </div>
                                <div className="text-gray-400 tracking-wider text-sm uppercase font-bold group-hover:text-white transition-colors">
                                    {h.text}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Career Timeline */}
            <section className="py-32 relative bg-[#0A0A0C]">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-center mb-20"
                    >
                        <span className="text-gray-500 font-heading font-medium tracking-wider text-sm uppercase mb-4 block inline-block px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/5">Career Journey</span>
                        <h2 className="heading-lg text-white font-bold leading-tight">From BD Manager to <span className="text-gradient">Global Head</span></h2>
                    </motion.div>

                    <div className="relative pl-6 md:pl-0 border-l-2 border-[#d4af37]/20 md:border-none space-y-24">
                        {roles.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: 0.1, duration: 0.7 }}
                                className="relative md:flex gap-16 group items-start"
                            >
                                {/* Mobile Timeline Dot */}
                                <div className="md:hidden absolute top-2 -left-[31px] w-[18px] h-[18px] rounded-full bg-gradient-to-br from-[#d4af37] to-[#b89327] border-[4px] border-[#0A0A0C] shadow-[0_0_15px_rgba(212,175,55,0.5)]" />

                                {/* Left Side: Period & Title */}
                                <div className="md:w-1/3 md:text-right md:border-r-2 border-[#d4af37]/20 md:pr-16 pb-6 md:pb-0 relative z-10 transition-transform duration-500 transform origin-right group-hover:-translate-x-2">
                                    {/* Desktop Timeline Dot */}
                                    <div className="hidden md:block absolute top-[10px] -right-[9px] w-[16px] h-[16px] rounded-full bg-gradient-to-br from-[#d4af37] to-[#b89327] border-[4px] border-[#0A0A0C] group-hover:scale-[1.5] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.8)] transition-all duration-300 z-20" />

                                    <span className="text-[#d4af37] font-bold tracking-wider inline-block mb-3 bg-[#d4af37]/10 px-3 py-1 rounded-full text-sm border border-[#d4af37]/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">{item.period}</span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">{item.company}</h3>
                                    <p className="text-gray-400 uppercase tracking-widest text-xs font-bold leading-relaxed">{item.role}</p>
                                </div>

                                {/* Right Side: Details Box */}
                                <div className="md:w-2/3 md:pl-0 relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/[0.03] to-transparent rounded-[2rem] -z-10 group-hover:from-[#d4af37]/5 transition-colors duration-500 border border-white/5 group-hover:border-[#d4af37]/20 pointer-events-none"></div>
                                    <div className="p-8 md:p-10 rounded-[2rem] transition-colors">
                                        <ul className="space-y-6">
                                            {item.bullets.map((bullet, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                                    className="flex items-start gap-5 text-gray-300 text-lg hover:text-white transition-colors leading-relaxed"
                                                >
                                                    <div className="mt-2 block w-[8px] h-[8px] rounded-full flex-shrink-0 bg-gradient-to-r from-[#d4af37] to-[#b89327] shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                                                    <span>{bullet}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills & Expertise */}
            <section className="py-32 bg-[#050506] border-y border-[#d4af37]/10 relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-[#d4af37]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="text-[#d4af37] font-heading font-medium tracking-wider text-sm uppercase mb-4 inline-block px-4 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30">Capabilities</span>
                        <h2 className="heading-lg text-white font-bold">Skills & Expertise</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skills.map((skill, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="relative group h-full rounded-[2rem] p-[1px] bg-gradient-to-b from-white/10 to-transparent hover:from-[#d4af37]/50 transition-all overflow-hidden"
                            >
                                <div className="h-full bg-[#0a0a0c] p-8 md:p-10 flex flex-col items-center text-center rounded-[31px]">
                                    <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${skill.color} to-transparent blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full`}></div>

                                    <h3 className="text-[#d4af37] font-bold text-xl uppercase tracking-wider mb-6 pb-4 border-b border-white/5 w-full relative z-10 group-hover:border-[#d4af37]/30 transition-colors">
                                        {skill.category}
                                    </h3>

                                    <ul className="space-y-4 w-full text-center text-gray-300 relative z-10 flex-grow">
                                        {skill.items.map((item, i) => (
                                            <li key={i} className="leading-snug block hover:text-white transition-colors cursor-default drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] duration-300 group-hover:scale-105">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <BottomCTA />
        </div>
    );
};

export default Experience;
