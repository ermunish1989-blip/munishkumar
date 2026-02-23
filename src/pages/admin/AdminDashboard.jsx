import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaPenSquare, FaSignOutAlt, FaChartBar, FaTrash, FaEdit, FaPlus, FaGlobe, FaEnvelope } from 'react-icons/fa';
import { getBlogPosts, savePosts, FEATURED_KEY } from '../../utils/blogStorage';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState(() => getBlogPosts());
    const [activeTab, setActiveTab] = useState('posts');
    const [deleteId, setDeleteId] = useState(null);

    const handleLogout = () => {
        sessionStorage.removeItem('mk_admin_auth');
        navigate('/admin');
    };

    const handleDelete = (idx) => {
        const updated = posts.filter((_, i) => i !== idx);
        setPosts(updated);
        savePosts(updated);
        setDeleteId(null);
    };

    const handleFeature = (post) => {
        localStorage.setItem(FEATURED_KEY, JSON.stringify({
            category: post.category,
            title: post.title,
            excerpt: post.hook,
            meta: `Munish Kumar · ${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} · ${post.time}`
        }));
        alert('Post set as featured!');
    };

    return (
        <div className="min-h-screen bg-[#050506] flex">
            <Helmet><title>Admin Dashboard | Munish Kumar</title></Helmet>

            {/* Sidebar */}
            <aside className="w-64 bg-[#0a0a0c] border-r border-white/5 flex flex-col fixed top-0 left-0 h-screen z-50">
                {/* Brand */}
                <div className="p-6 border-b border-white/5">
                    <Link to="/" className="flex items-center gap-3">
                        <span className="w-9 h-9 rounded bg-gradient-to-br from-[#d4af37] to-[#b89327] text-black flex justify-center items-center text-xs font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)]">MK</span>
                        <div>
                            <p className="text-white font-bold text-sm font-heading">MunishKumar.</p>
                            <p className="text-gray-500 text-xs">Admin Panel</p>
                        </div>
                    </Link>
                </div>

                {/* Nav */}
                <nav className="flex-1 p-4 space-y-1">
                    {[
                        { id: 'posts', label: 'Blog Posts', icon: FaPenSquare },
                        { id: 'stats', label: 'Overview', icon: FaChartBar },
                        { id: 'enquiries', label: 'Enquiries', icon: FaEnvelope },
                    ].map(({ id, label, icon }) => (
                        <button
                            key={id}
                            onClick={() => setActiveTab(id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === id ? 'bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        >
                            {icon({ className: 'text-base' })}
                            {label}
                        </button>
                    ))}

                    <div className="border-t border-white/5 pt-3 mt-3">
                        <a href="/" target="_blank" rel="noopener noreferrer" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all">
                            <FaGlobe className="text-base" /> View Website
                        </a>
                    </div>
                </nav>

                {/* Logout */}
                <div className="p-4 border-t border-white/5">
                    <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition-all">
                        <FaSignOutAlt /> Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="ml-64 flex-1 p-8 min-h-screen">

                {/* ─── BLOG POSTS TAB ─── */}
                {activeTab === 'posts' && (
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h1 className="text-2xl font-bold text-white font-heading">Blog Posts</h1>
                                <p className="text-gray-500 text-sm mt-1">{posts.length} posts published</p>
                            </div>
                            <Link to="/admin/blog/new" className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#d4af37] to-[#b89327] text-black font-bold rounded-lg shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.5)] transition-all text-sm">
                                <FaPlus /> New Post
                            </Link>
                        </div>

                        <div className="bg-[#0a0a0c] border border-white/5 rounded-2xl overflow-hidden">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-white/5 text-gray-500 text-xs uppercase tracking-wider">
                                        <th className="text-left px-6 py-4 font-medium">Title</th>
                                        <th className="text-left px-6 py-4 font-medium">Category</th>
                                        <th className="text-left px-6 py-4 font-medium">Read Time</th>
                                        <th className="text-right px-6 py-4 font-medium">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {posts.length === 0 ? (
                                        <tr><td colSpan="4" className="text-center py-16 text-gray-600">No posts yet. <Link to="/admin/blog/new" className="text-[#d4af37] hover:underline">Add your first post →</Link></td></tr>
                                    ) : posts.map((post, idx) => (
                                        <tr key={idx} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors group">
                                            <td className="px-6 py-4">
                                                <p className="text-white font-medium line-clamp-1 group-hover:text-[#d4af37] transition-colors">{post.title}</p>
                                                <p className="text-gray-500 text-xs mt-1 line-clamp-1">{post.hook}</p>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-xs text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/20 px-3 py-1 rounded-full">{post.category}</span>
                                            </td>
                                            <td className="px-6 py-4 text-gray-400">{post.time}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button onClick={() => handleFeature(post)} className="text-xs text-gray-500 hover:text-yellow-400 transition-colors px-2 py-1 rounded" title="Set as Featured">★</button>
                                                    <Link to={`/admin/blog/edit/${idx}`} className="p-2 text-gray-500 hover:text-[#d4af37] hover:bg-[#d4af37]/10 rounded-lg transition-all">
                                                        <FaEdit />
                                                    </Link>
                                                    {deleteId === idx ? (
                                                        <div className="flex items-center gap-1">
                                                            <button onClick={() => handleDelete(idx)} className="text-xs bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-1 rounded-lg hover:bg-red-500/30 transition">Confirm</button>
                                                            <button onClick={() => setDeleteId(null)} className="text-xs text-gray-500 px-2 py-1">Cancel</button>
                                                        </div>
                                                    ) : (
                                                        <button onClick={() => setDeleteId(idx)} className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all">
                                                            <FaTrash />
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* ─── OVERVIEW TAB ─── */}
                {activeTab === 'stats' && (
                    <div>
                        <h1 className="text-2xl font-bold text-white font-heading mb-8">Overview</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {[
                                { label: 'Total Posts', value: posts.length, color: '#d4af37', desc: 'Published blog articles' },
                                { label: 'GEO Pages', value: 9, color: '#25D366', desc: 'Location landing pages' },
                                { label: 'Site Pages', value: 7, color: '#60a5fa', desc: 'Core website pages' },
                            ].map((stat, i) => (
                                <div key={i} className="bg-[#0a0a0c] border border-white/5 rounded-2xl p-6">
                                    <div className="text-3xl font-bold font-heading mb-1" style={{ color: stat.color }}>{stat.value}</div>
                                    <p className="text-white font-medium">{stat.label}</p>
                                    <p className="text-gray-500 text-sm mt-1">{stat.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-[#0a0a0c] border border-white/5 rounded-2xl p-6">
                            <h3 className="text-white font-bold mb-4">Quick Links</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { to: '/', label: '🏠 Homepage' },
                                    { to: '/blog', label: '📝 Blog' },
                                    { to: '/contact', label: '📧 Contact' },
                                    { to: '/admin/blog/new', label: '✏️ New Post' },
                                ].map((link, i) => (
                                    <a key={i} href={link.to} target="_blank" rel="noopener noreferrer" className="bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 rounded-xl px-4 py-3 text-sm text-gray-300 hover:text-white transition-all">
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* ─── ENQUIRIES TAB ─── */}
                {activeTab === 'enquiries' && (
                    <div>
                        <h1 className="text-2xl font-bold text-white font-heading mb-8">Form Enquiries</h1>
                        <div className="bg-[#0a0a0c] border border-[#d4af37]/20 rounded-2xl p-8 text-center">
                            <div className="text-4xl mb-4">📨</div>
                            <h3 className="text-white font-bold text-lg mb-2">View Enquiries on Formspree</h3>
                            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">Once you add your Formspree ID, all contact form and newsletter submissions will appear on your Formspree dashboard.</p>
                            <a href="https://formspree.io/login" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#b89327] text-black font-bold rounded-lg shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.5)] transition-all text-sm">
                                Open Formspree Dashboard →
                            </a>
                            <p className="text-gray-600 text-xs mt-4">Need to set it up first? Replace <code className="bg-white/5 px-2 py-0.5 rounded text-gray-400">YOUR_FORMSPREE_ID</code> in Contact.jsx and Blog.jsx</p>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default AdminDashboard;
