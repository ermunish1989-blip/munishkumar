import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import SEO from '../components/ui/SEO';

const NotFound = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#050506] relative overflow-hidden px-4 py-20">
            <SEO
                title="Page Not Found | Munish Kumar"
                description="The page you are looking for does not exist. Please return to the homepage."
                path="/404"
            />

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center relative z-10 max-w-2xl mx-auto"
            >
                <h1 className="text-[120px] md:text-[180px] font-bold text-white/5 font-heading leading-none mb-4 uppercase tracking-tighter">
                    404
                </h1>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">
                    Page Not <span className="text-[#d4af37]">Found</span>
                </h2>

                <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto font-light leading-relaxed">
                    The URL you requested was either moved, deleted, or doesn't exist. Let's get you back on track.
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#d4af37] text-[#050506] font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-white transition-colors duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_4px_25px_rgba(255,255,255,0.4)]"
                >
                    <FaHome size={18} />
                    Return Home
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFound;
