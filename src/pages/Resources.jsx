import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaDownload, FaFilter, FaFilePdf, FaBook, FaProjectDiagram, FaFilePowerpoint, FaSearch } from 'react-icons/fa';
import { getResources } from '../utils/resourceStorage';

const Resources = () => {
    const [resourceList, setResourceList] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setResourceList(getResources());
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    const categories = ['All', 'Infographics', 'plans', 'eBooks', 'Slide Decks', 'Research'];

    const filteredResources = resourceList.filter(res => {
        const matchesFilter = activeFilter === 'All' || res.category === activeFilter;
        const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            res.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const getIcon = (type) => {
        switch (type) {
            case 'PDF': return <FaFilePdf className="text-red-500" />;
            case 'eBook': return <FaBook className="text-[#d4af37]" />;
            case 'PPTX': return <FaFilePowerpoint className="text-orange-500" />;
            case 'XLSX': return <FaProjectDiagram className="text-green-500" />;
            default: return <FaDownload />;
        }
    };

    return (
        <div className="pt-32 pb-24 min-h-screen bg-[#0A0A0C]">
            <Helmet>
                <title>Resources & Frameworks | Munish Kumar</title>
                <meta name="description" content="Download premium infographics, ebooks, and research work by Munish Kumar to help scale your business and master AI SEO." />
                <link rel="canonical" href="https://munishkumar.com/resources" />
            </Helmet>

            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="max-w-4xl mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[#d4af37] font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
                    >
                        Knowledge Center
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight"
                    >
                        Scale Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#b89327]">Premium Resources.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed"
                    >
                        Access my private collection of battle-tested frameworks, strategic plans, and deep-dive research to accelerate your growth.
                    </motion.p>
                </div>

                {/* Filters and Search */}
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between mb-12 bg-[#111115] p-6 rounded-2xl border border-white/5 shadow-2xl">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === cat
                                    ? 'bg-[#d4af37] text-black shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-80">
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search resources..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-12 pr-6 text-sm text-white focus:outline-none focus:border-[#d4af37]/50 focus:bg-[#111115] transition-all"
                        />
                    </div>
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredResources.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group bg-[#111115] rounded-2xl border border-white/5 overflow-hidden hover:border-[#d4af37]/30 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                            >
                                {/* Image Wrapper */}
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent opacity-60"></div>
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-[#d4af37] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                            {item.category}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-[#111115]/80 backdrop-blur-md border border-white/10 p-2 rounded-lg flex items-center gap-2 text-[11px] text-white">
                                        {getIcon(item.type)}
                                        {item.type}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3 font-light">
                                        {item.description}
                                    </p>

                                    <div className="flex items-center gap-4 mt-8">
                                        <motion.a
                                            href={item.downloadUrl}
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#d4af37] text-black font-bold py-2.5 rounded-lg text-sm hover:shadow-[0_4px_15px_rgba(212,175,55,0.3)] transition-all"
                                        >
                                            <FaDownload className="text-xs" />
                                            <span>Download</span>
                                        </motion.a>

                                        {item.liveViewUrl && (
                                            <motion.a
                                                href={item.liveViewUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ y: -2 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="flex-1 inline-flex items-center justify-center gap-2 border border-[#d4af37]/30 text-[#d4af37] font-bold py-2.5 rounded-lg text-sm hover:bg-[#d4af37]/10 transition-all"
                                            >
                                                <FaGlobe className="text-xs" />
                                                <span>View Live</span>
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredResources.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20 bg-[#111115] rounded-3xl border border-dashed border-white/20"
                    >
                        <p className="text-gray-500 text-lg">No resources found matching your search or filter.</p>
                        <button
                            onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}
                            className="mt-4 text-[#d4af37] hover:underline"
                        >
                            Reset everything
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Resources;
