import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-[#0a0a0c]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-gradient-to-r from-[rgba(212,175,55,0.15)] via-[rgba(212,175,55,0.08)] to-transparent blur-[120px] rounded-full pointer-events-none z-0"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="heading-xl font-bold text-white mb-6 leading-tight">
                        Ready to Break Through the <span className="text-gradient">Ceiling?</span>
                    </h2>

                    <p className="text-xl text-gray-300 mb-10 font-light">
                        Stop guessing. Start scaling. Let's build the roadmap to your next level of growth.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link
                            to="/contact"
                            className="btn btn-primary w-full sm:w-auto px-10 py-4 text-lg font-bold rounded-full group hover:-translate-y-1 shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all"
                        >
                            Book a Strategy Call
                        </Link>
                        <Link
                            to="/services"
                            className="btn btn-secondary w-full sm:w-auto px-10 py-4 text-lg font-bold rounded-full hover:bg-[rgba(212,175,55,0.1)] transition-all"
                        >
                            View Services
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
