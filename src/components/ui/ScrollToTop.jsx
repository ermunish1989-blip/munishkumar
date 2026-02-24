import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[100] w-12 h-12 bg-gradient-to-br from-[#d4af37] to-[#b89327] text-black rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.4)] flex items-center justify-center group transition-all"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp className="text-xl transition-transform duration-300 group-hover:-translate-y-1" />

                    {/* Ring animation */}
                    <div className="absolute inset-0 rounded-full border border-[#d4af37] animate-ping opacity-20 pointer-events-none"></div>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
