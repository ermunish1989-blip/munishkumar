import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const { scrollY } = useScroll();
    const navBackground = useTransform(
        scrollY,
        [0, 50],
        ["rgba(10, 10, 12, 0)", "rgba(10, 10, 12, 0.8)"]
    );
    const navBorder = useTransform(
        scrollY,
        [0, 50],
        ["rgba(212, 175, 55, 0)", "rgba(212, 175, 55, 0.1)"]
    );
    const navBackdropBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (mobileMenuOpen) setMobileMenuOpen(false);
    }, [location, mobileMenuOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Experience', path: '/experience' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <motion.header
            style={{
                backgroundColor: navBackground,
                borderBottomColor: navBorder,
                backdropFilter: navBackdropBlur,
                WebkitBackdropFilter: navBackdropBlur
            }}
            className="fixed w-full top-0 z-50 transition-all duration-300 border-b border-transparent"
        >
            <div className={`container mx-auto flex justify-between items-center px-6 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}>
                {/* Logo */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link to="/" className="relative z-10 text-2xl font-bold font-heading tracking-wide text-white group flex items-center gap-2">
                        <motion.span
                            whileHover={{ rotate: 180 }}
                            transition={{ duration: 0.6, type: "spring" }}
                            className="w-8 h-8 rounded bg-[#d4af37] text-black flex justify-center items-center text-sm shadow-[0_0_10px_rgba(212,175,55,0.4)]"
                        >
                            MK
                        </motion.span>
                        <span className="hidden sm:inline-block">Munish<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#b89327] group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] transition-all">Kumar</span>.</span>
                    </Link>
                </motion.div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-1 items-center bg-[#ffffff05] rounded-full px-2 py-1.5 border border-[#ffffff0a] shadow-[0_0_20px_rgba(0,0,0,0.2)] ml-auto mr-8">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));

                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative px-5 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${isActive ? 'text-[#050506]' : 'text-gray-300 hover:text-white'}`}
                            >
                                <span className="relative z-10">{link.name}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-indicator"
                                        className="absolute inset-0 bg-gradient-to-r from-[#d4af37] to-[#b89327] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to="/contact" className="relative group px-6 py-2.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 hover:bg-[#d4af37] hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 text-sm font-bold tracking-wide text-[#d4af37] overflow-hidden block">
                            <span className="relative z-10">Work With Me</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37] to-[#b89327] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                    </motion.div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff05] border border-[#ffffff0a] text-[#d4af37]"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <div className="w-5 h-4 flex flex-col justify-between">
                        <span className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </div>
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-0 w-full bg-[#0A0A0C]/95 backdrop-blur-xl border-t border-[#d4af37]/10 py-8 px-6 flex flex-col gap-4 md:hidden shadow-2xl origin-top"
                    >
                        {navLinks.map((link, i) => (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + (i * 0.05) }}
                                key={link.name}
                            >
                                <Link
                                    to={link.path}
                                    className={`block text-xl font-heading font-medium pb-4 border-b border-white/5 ${location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path)) ? 'text-[#d4af37]' : 'text-gray-300'}`}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-6"
                        >
                            <Link to="/contact" className="flex items-center justify-center w-full py-4 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b89327] text-black font-bold shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                                Work With Me
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
