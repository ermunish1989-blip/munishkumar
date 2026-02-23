import { Link } from 'react-router-dom';
import { FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="border-t border-[rgba(212,175,55,0.1)] bg-[#050506] pt-24 pb-8 relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.5)] to-transparent opacity-50"></div>
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-[#d4af37]/5 to-transparent blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* 12-Column Grid Symmetrical Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

                    {/* Column 1: Brand & Bio (4 cols) */}
                    <div className="lg:col-span-4 pr-0 lg:pr-8">
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Link to="/" className="text-3xl font-bold font-heading text-white mb-2 flex items-center gap-3 group w-fit">
                                <motion.span
                                    whileHover={{ rotate: 180 }}
                                    transition={{ duration: 0.6, type: "spring" }}
                                    className="w-10 h-10 rounded bg-gradient-to-br from-[#d4af37] to-[#b89327] text-black flex justify-center items-center text-sm font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]"
                                >
                                    MK
                                </motion.span>
                                <span>Munish<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#b89327]">Kumar</span>.</span>
                            </Link>
                        </motion.div>
                        <p className="text-[#d4af37] font-bold text-sm tracking-widest uppercase mb-8 ml-14">Business Advisor</p>

                        <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light pl-2 border-l-2 border-[rgba(212,175,55,0.2)]">
                            Strategic B2B Growth Consultant helping digital agencies, IT service firms, and SaaS companies scale predictably into global enterprise markets.
                        </p>

                        <div className="flex flex-wrap gap-2 text-white">
                            {['Strategy', 'M&A', 'Scaling', 'B2B Sales'].map(tag => (
                                <span key={tag} className="text-[10px] text-gray-500 border border-gray-800 rounded-full px-3 py-1 bg-[#111115] uppercase tracking-wider">{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Navigation (2 cols) */}
                    <div className="lg:col-span-2 lg:ml-auto">
                        <h4 className="text-white font-heading font-medium mb-8 text-lg tracking-wide flex items-center gap-2">
                            <span className="w-1 h-1 bg-[#d4af37] rounded-full"></span> Site Map
                        </h4>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Services', 'Experience', 'Blog', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        className="text-gray-400 hover:text-white transition-colors relative group block w-fit font-light"
                                    >
                                        <span className="relative z-10">{item}</span>
                                        <span className="absolute left-0 bottom-0 w-0 h-px bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Global Expertise (3 cols) */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white font-heading font-medium mb-8 text-lg tracking-wide flex items-center gap-2">
                            <span className="w-1 h-1 bg-[#d4af37] rounded-full"></span> Global Markets
                        </h4>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-4">
                            {[
                                { name: 'USA', path: '/locations/usa' },
                                { name: 'UK', path: '/locations/uk' },
                                { name: 'Europe', path: '/locations/europe' },
                                { name: 'UAE', path: '/locations/uae' },
                                { name: 'Bahrain', path: '/locations/bahrain' },
                                { name: 'KSA', path: '/locations/saudi-arabia' },
                                { name: 'India', path: '/locations/india' },
                                { name: 'GCC', path: '/locations/gcc' },
                                { name: 'APAC', path: '/locations/apac' }
                            ].map((loc) => (
                                <li key={loc.name}>
                                    <Link
                                        to={loc.path}
                                        className="text-gray-400 hover:text-[#d4af37] transition-colors relative group w-fit block font-light text-sm"
                                    >
                                        {loc.name}
                                        <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#d4af37] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Offices & Contact (3 cols) */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white font-heading font-medium mb-8 text-lg tracking-wide flex items-center gap-2">
                            <span className="w-1 h-1 bg-[#d4af37] rounded-full"></span> Intelligence HQ
                        </h4>
                        <div className="space-y-6">
                            <div className="group">
                                <h5 className="text-white group-hover:text-[#d4af37] transition-colors text-sm font-bold mb-1">Bahrain Base</h5>
                                <p className="text-gray-500 text-sm font-light leading-relaxed">P.O. Box 23765<br />Manama, Kingdom of Bahrain</p>
                            </div>
                            <div className="group">
                                <h5 className="text-white group-hover:text-[#d4af37] transition-colors text-sm font-bold mb-1">India Base</h5>
                                <p className="text-gray-500 text-sm font-light leading-relaxed">Chandigarh, Punjab<br />India</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Connect & SLA Sub-Footer */}
                <div className="border-t border-[rgba(255,255,255,0.05)] pt-8 pb-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col sm:flex-row gap-6 items-center">
                        <motion.a whileHover={{ y: -3, scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} href="mailto:info@munishkumar.com" className="text-gray-400 hover:text-white text-sm flex items-center gap-3 transition-colors group bg-[#111115] px-4 py-2 rounded-full border border-[rgba(255,255,255,0.05)] hover:border-[#d4af37]/30 shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_15px_rgba(212,175,55,0.1)]">
                            <FaEnvelope className="text-[#d4af37] group-hover:scale-110 transition-transform" /> info@munishkumar.com
                        </motion.a>
                        <motion.a whileHover={{ y: -3, scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} href="tel:+919317432236" className="text-gray-400 hover:text-white text-sm flex items-center gap-3 transition-colors group bg-[#111115] px-4 py-2 rounded-full border border-[rgba(255,255,255,0.05)] hover:border-[#d4af37]/30 shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_15px_rgba(212,175,55,0.1)]">
                            <FaWhatsapp className="text-[#25D366] group-hover:scale-110 transition-transform" /> +91 93174 32236
                        </motion.a>
                    </div>

                    <div className="bg-[#d4af37]/5 border border-[#d4af37]/20 rounded-full px-5 py-2.5 flex items-center gap-3 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                        <div className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </div>
                        <span className="text-xs text-gray-400 tracking-wide">SLA: <strong className="text-white font-medium">Within 24 Hours.</strong></span>
                    </div>
                </div>

                {/* Copyright Line */}
                <div className="border-t border-[rgba(255,255,255,0.05)] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p className="text-gray-500 tracking-widest uppercase">
                        © {new Date().getFullYear()} Munish Kumar. All Rights Reserved.
                    </p>

                    <div className="flex items-center gap-6 text-gray-400 font-medium tracking-wide uppercase">
                        <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Link to="/privacy-policy" className="hover:text-[#d4af37] transition-colors relative group">
                                Privacy Policy
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                            <a href="https://www.linkedin.com/in/munish-kumar-business-adviser/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5 relative group">
                                <FaLinkedin className="text-lg group-hover:scale-110 transition-transform" /> LinkedIn
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
