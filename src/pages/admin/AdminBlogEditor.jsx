import { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaSave, FaStar } from 'react-icons/fa';
import { getBlogPosts } from '../../utils/blogStorage';

const STORAGE_KEY = 'mk_blog_posts';
const FEATURED_KEY = 'mk_featured_post';

const CATEGORIES = ['B2B Growth', 'Agency Scaling', 'Marketing', 'Operations', 'Leadership', 'International Business', 'Strategy', 'Other'];
const READ_TIMES = ['3 min read', '4 min read', '5 min read', '6 min read', '7 min read', '8 min read', '9 min read', '10 min read'];

const AdminBlogEditor = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEditing = id !== undefined;

    const [form, setForm] = useState(() => {
        if (isEditing) {
            const posts = getBlogPosts();
            const post = posts[parseInt(id)];
            if (post) return { ...post, setAsFeatured: false };
        }
        return { title: '', category: 'B2B Growth', time: '5 min read', hook: '', setAsFeatured: false };
    });
    const [saved, setSaved] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        const posts = getBlogPosts();
        const postData = { title: form.title, category: form.category, time: form.time, hook: form.hook };

        let updatedPosts;
        if (isEditing) {
            updatedPosts = posts.map((p, i) => i === parseInt(id) ? postData : p);
        } else {
            updatedPosts = [postData, ...posts]; // New post goes to top
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPosts));

        if (form.setAsFeatured) {
            localStorage.setItem(FEATURED_KEY, JSON.stringify({
                category: form.category,
                title: form.title,
                excerpt: form.hook,
                meta: `Munish Kumar · ${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} · ${form.time}`
            }));
        }

        setSaved(true);
        setTimeout(() => navigate('/admin/dashboard'), 1200);
    };

    return (
        <div className="min-h-screen bg-[#050506]">
            <Helmet><title>{isEditing ? 'Edit Post' : 'New Post'} | Munish Kumar Admin</title></Helmet>

            {/* Top Bar */}
            <header className="bg-[#0a0a0c] border-b border-white/5 px-8 py-4 flex items-center justify-between sticky top-0 z-50">
                <div className="flex items-center gap-4">
                    <Link to="/admin/dashboard" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                        <FaArrowLeft /> Back to Dashboard
                    </Link>
                    <div className="w-px h-5 bg-white/10" />
                    <h1 className="text-white font-bold font-heading">{isEditing ? 'Edit Post' : 'New Blog Post'}</h1>
                </div>
                <button form="blog-form" type="submit" className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#d4af37] to-[#b89327] text-black font-bold rounded-lg text-sm shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.5)] transition-all">
                    {saved ? '✓ Saved!' : <><FaSave /> Save Post</>}
                </button>
            </header>

            <div className="max-w-4xl mx-auto px-8 py-10">
                <form id="blog-form" onSubmit={handleSave} className="space-y-8">

                    {/* Title */}
                    <div className="bg-[#0a0a0c] border border-white/5 rounded-2xl p-8 space-y-6">
                        <h2 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                            <span className="w-6 h-6 rounded bg-[#d4af37]/20 text-[#d4af37] text-xs flex items-center justify-center font-bold">1</span>
                            Post Details
                        </h2>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400">Post Title <span className="text-[#d4af37]">*</span></label>
                            <input
                                type="text"
                                name="title"
                                required
                                value={form.title}
                                onChange={handleChange}
                                placeholder="e.g. 5 Ways to Scale Your Agency in 2025"
                                className="w-full bg-[#111115] border border-gray-800 text-white rounded-xl px-5 py-3.5 focus:outline-none focus:border-[#d4af37] transition-colors text-base"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Category <span className="text-[#d4af37]">*</span></label>
                                <select name="category" value={form.category} onChange={handleChange} className="w-full bg-[#111115] border border-gray-800 text-white rounded-xl px-5 py-3.5 focus:outline-none focus:border-[#d4af37] transition-colors appearance-none cursor-pointer">
                                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Reading Time <span className="text-[#d4af37]">*</span></label>
                                <select name="time" value={form.time} onChange={handleChange} className="w-full bg-[#111115] border border-gray-800 text-white rounded-xl px-5 py-3.5 focus:outline-none focus:border-[#d4af37] transition-colors appearance-none cursor-pointer">
                                    {READ_TIMES.map(t => <option key={t} value={t}>{t}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="bg-[#0a0a0c] border border-white/5 rounded-2xl p-8 space-y-6">
                        <h2 className="text-white font-bold text-lg flex items-center gap-2">
                            <span className="w-6 h-6 rounded bg-[#d4af37]/20 text-[#d4af37] text-xs flex items-center justify-center font-bold">2</span>
                            Post Preview / Hook
                        </h2>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400">Hook / Excerpt <span className="text-[#d4af37]">*</span> <span className="text-gray-600 ml-1">(shown on blog cards)</span></label>
                            <textarea
                                name="hook"
                                required
                                rows="5"
                                value={form.hook}
                                onChange={handleChange}
                                placeholder="Write a compelling hook that makes readers want to click and read more..."
                                className="w-full bg-[#111115] border border-gray-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-[#d4af37] transition-colors resize-y min-h-[130px] text-base leading-relaxed"
                            />
                            <p className="text-gray-600 text-xs">{form.hook.length} characters</p>
                        </div>
                    </div>

                    {/* Featured Option */}
                    <div className="bg-[#0a0a0c] border border-[#d4af37]/20 rounded-2xl p-6">
                        <label className="flex items-center gap-4 cursor-pointer group">
                            <div className="relative">
                                <input type="checkbox" name="setAsFeatured" checked={form.setAsFeatured} onChange={handleChange} className="sr-only" />
                                <div className={`w-12 h-6 rounded-full transition-all ${form.setAsFeatured ? 'bg-[#d4af37]' : 'bg-gray-800'}`}>
                                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all ${form.setAsFeatured ? 'left-7' : 'left-1'}`} />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 text-white font-medium">
                                    <FaStar className="text-[#d4af37] text-sm" /> Set as Featured Post
                                </div>
                                <p className="text-gray-500 text-xs mt-0.5">This post will appear in the large featured section at the top of the blog page</p>
                            </div>
                        </label>
                    </div>

                    {/* Preview */}
                    {(form.title || form.hook) && (
                        <div className="bg-[#0a0a0c] border border-white/5 rounded-2xl p-8">
                            <h2 className="text-gray-500 text-xs uppercase tracking-wider mb-6 font-medium">Live Preview</h2>
                            <div className="border border-white/5 rounded-xl p-6 bg-[#111115]">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/20 px-3 py-1 rounded-full">{form.category}</span>
                                    <span className="text-gray-500 text-xs">{form.time}</span>
                                </div>
                                <h3 className="text-white font-bold text-xl mb-3 leading-snug">{form.title || 'Your post title will appear here'}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{form.hook || 'Your hook/excerpt will appear here...'}</p>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default AdminBlogEditor;
