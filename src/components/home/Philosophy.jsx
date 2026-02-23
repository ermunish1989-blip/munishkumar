import { motion } from 'framer-motion';

const Philosophy = () => {
    const steps = [
        {
            num: "01",
            title: "Structure",
            desc: "Build solid operational foundations — clear roles, processes, and KPIs that scale internationally without breaking."
        },
        {
            num: "02",
            title: "Systems",
            desc: "Implement CRM, automation, and reporting frameworks that drive smarter decisions at every level of the business."
        },
        {
            num: "03",
            title: "Sales",
            desc: "Launch global B2B frameworks with predictable international revenue pipelines and higher conversion rates."
        },
        {
            num: "04",
            title: "Scale",
            desc: "Expand confidently into USA, Europe, GCC, and APAC markets — with a delivery team that won't break under growth pressure."
        }
    ];

    return (
        <section className="py-24 bg-[#050506] relative border-y border-[rgba(255,255,255,0.05)]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-full bg-[rgba(212,175,55,0.05)] blur-[100px] pointer-events-none rounded-full"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="lg:w-1/3">
                        <span className="text-[#d4af37] font-heading font-medium tracking-wider text-sm uppercase mb-4 block">
                            My Philosophy
                        </span>
                        <h2 className="heading-lg text-white font-bold leading-tight mb-8">
                            From Chaos to <span className="text-gradient">Calculated Growth</span>
                        </h2>

                        <div className="glass p-6 rounded-2xl border-l-4 border-l-[#d4af37]">
                            <p className="text-xl text-gray-300 italic mb-4">"Your Growth = My Mission."</p>
                            <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">— Munish Kumar</p>
                        </div>
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative pl-12"
                            >
                                <span className="absolute left-0 top-0 text-5xl font-heading font-extrabold text-[rgba(212,175,55,0.2)]">
                                    {step.num}
                                </span>
                                <div className="relative z-10 pt-3">
                                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Philosophy;
