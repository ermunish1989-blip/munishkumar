import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const BottomCTA = () => {
    return (
        <section className="relative py-32 bg-[#0A0A0C] overflow-hidden">
            {/* Ambient Background Grid & Glows */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[800px] bg-gradient-to-r from-[#d4af37]/10 to-[#b89327]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative max-w-5xl mx-auto rounded-[2rem] p-1 overflow-hidden"
                >
                    {/* Animated Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent opacity-80 animate-spin-slow pointer-events-none" style={{ animationDuration: '6s' }}></div>
                    <div className="relative bg-[#050506]/90 backdrop-blur-3xl rounded-[1.9rem] p-12 md:p-20 text-center flex flex-col items-center justify-center border border-white/5 shadow-2xl overflow-hidden group hover:border-[#d4af37]/30 transition-colors">

                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>

                        <span className="relative z-10 text-[#d4af37] font-heading font-medium tracking-widest text-sm uppercase mb-4 inline-block px-4 py-1.5 rounded-full bg-[#d4af37]/10 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                            Ready to Scale?
                        </span>

                        <h2 className="relative z-10 text-4xl md:text-5xl lg:text-showcase font-bold font-heading mb-6 text-white leading-tight">
                            Ready to Break Through <span className="text-gradient">the Ceiling?</span>
                        </h2>

                        <p className="relative z-10 text-xl text-gray-400 mb-12 max-w-2xl font-light leading-relaxed">
                            Stop guessing. Start scaling. Let's build the roadmap to your next level of growth.
                        </p>

                        <div className="relative z-10 flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center">
                            <Link to="/contact" className="relative group px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b89327] rounded-lg overflow-hidden flex items-center justify-center isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#050506] before:-z-10 before:aspect-square before:hover:scale-150 hover:text-white text-[#050506] font-bold shadow-[0_4px_20px_rgba(212,175,55,0.4)] transition-colors text-lg">
                                <span className="mr-3">Book a Strategy Call</span>
                                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                            </Link>

                            <Link to="/services" className="group px-8 py-4 relative rounded-lg border border-gray-700 bg-[rgba(255,255,255,0.02)] hover:border-[#d4af37]/50 hover:bg-[rgba(212,175,55,0.05)] transition-all duration-300 flex items-center justify-center text-white backdrop-blur-md text-lg">
                                <span className="mr-3">View Services</span>
                                <FaArrowRight className="text-[#d4af37] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .animate-spin-slow {
                    animation: spin linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .text-showcase {
                    font-size: clamp(2.5rem, 5vw, 4.5rem);
                }
            `}} />
        </section>
    );
};

export default BottomCTA;
