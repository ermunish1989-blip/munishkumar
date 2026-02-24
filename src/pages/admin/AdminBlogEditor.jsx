import { useState, lazy, Suspense } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaSave, FaStar, FaExclamationTriangle } from 'react-icons/fa';
// Dynamic import for ReactQuill to avoid build-time/init crashes
const ReactQuill = lazy(() => import('react-quill-new'));
import 'react-quill-new/dist/quill.snow.css';
import slugify from 'slugify';
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
        const defaultState = { title: '', category: 'B2B Growth', time: '5 min read', hook: '', content: '', slug: '', faq: [], setAsFeatured: false, imageUrl: '', updatedAt: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) };

        if (isEditing) {
            const posts = getBlogPosts();
            const post = posts[parseInt(id)];
            if (post) return { ...post, faq: post.faq || [], setAsFeatured: false, imageUrl: post.imageUrl || '', updatedAt: post.updatedAt || '' };
            return defaultState;
        }
        return defaultState;
    });
    const [saved, setSaved] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleContentChange = (content) => {
        setForm(prev => ({ ...prev, content }));
    };

    const handleAddFaq = () => {
        setForm(prev => ({ ...prev, faq: [...prev.faq, { question: '', answer: '' }] }));
    };

    const handleFaqChange = (index, field, value) => {
        const newFaq = [...form.faq];
        newFaq[index][field] = value;
        setForm(prev => ({ ...prev, faq: newFaq }));
    };

    const handleRemoveFaq = (index) => {
        setForm(prev => ({ ...prev, faq: prev.faq.filter((_, i) => i !== index) }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        const posts = getBlogPosts();

        let postSlug = form.slug;
        if (!isEditing || !postSlug) {
            postSlug = slugify(form.title, { lower: true, strict: true });
        }

        const postData = {
            title: form.title,
            category: form.category,
            time: form.time,
            hook: form.hook,
            content: form.content,
            slug: postSlug,
            faq: form.faq,
            imageUrl: form.imageUrl,
            updatedAt: form.updatedAt
        };

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

                        <div className="space-y-2 pt-2">
                            <label className="text-sm text-gray-400">Last Updated Date <span className="text-gray-600 ml-1">(Format: Month Day, Year)</span></label>
                            <input
                                type="text"
                                name="updatedAt"
                                value={form.updatedAt}
                                onChange={handleChange}
                                placeholder="e.g. February 24, 2026"
                                className="w-full bg-[#111115] border border-gray-800 text-white rounded-xl px-5 py-3.5 focus:outline-none focus:border-[#d4af37] transition-colors text-base"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="bg-[#0a0a0c] border border-white/5 rounded-2xl p-8 space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-white font-bold text-lg flex items-center gap-2">
                                <span className="w-6 h-6 rounded bg-[#d4af37]/20 text-[#d4af37] text-xs flex items-center justify-center font-bold">2</span>
                                Post Preview / Hook
                            </h2>
                        </div>

                        {/* Persistence Warning */}
                        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex gap-4 items-start">
                            <FaExclamationTriangle className="text-amber-500 mt-1 flex-shrink-0" />
                            <div className="text-xs space-y-1">
                                <p className="text-amber-200 font-bold uppercase tracking-wider">Local Storage Persistence</p>
                                <p className="text-gray-400 leading-relaxed">
                                    Changes are saved to your browser's local storage. To make them live for everyone, use the <strong>"Export Data"</strong> button in the dashboard and update <code className="text-[#d4af37]">blogData.json</code>.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400">Cover Image URL <span className="text-gray-600 ml-1">(Optional header image)</span></label>
                            <input
                                type="url"
                                name="imageUrl"
                                value={form.imageUrl}
                                onChange={handleChange}
                                placeholder="https://example.com/image.jpg"
                                className="w-full bg-[#111115] border border-gray-800 text-white rounded-xl px-5 py-3.5 focus:outline-none focus:border-[#d4af37] transition-colors text-base"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400">Hook / Excerpt <span className="text-[#d4af37]">*</span> <span className="text-gray-600 ml-1">(shown on blog cards)</span></label>
                            <textarea
                                name="hook"
                                required
                                rows="3"
                                value={form.hook}
                                onChange={handleChange}
                                placeholder="Write a compelling hook that makes readers want to click and read more..."
                                className="w-full bg-[#111115] border border-gray-800 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-[#d4af37] transition-colors resize-y min-h-[90px] text-base leading-relaxed"
                            />
                            <p className="text-gray-600 text-xs">{form.hook?.length || 0} characters</p>
                        </div>
                    </div>

                    {/* Rich Text Editor */}
                    <div className="bg-[#0a0a0c] border border-white/5 rounded-2xl p-8 space-y-6">
                        <h2 className="text-white font-bold text-lg flex items-center gap-2">
                            <span className="w-6 h-6 rounded bg-[#d4af37]/20 text-[#d4af37] text-xs flex items-center justify-center font-bold">3</span>
                            Full Article Content
                        </h2>

                        <div className="prose-editor-container min-h-[450px]">
                            <Suspense fallback={<div className="h-[450px] bg-[#111115] animate-pulse rounded-xl border border-gray-800" />}>
                                <ReactQuill
                                    theme="snow"
                                    value={form.content}
                                    onChange={handleContentChange}
                                    modules={{
                                        toolbar: [
                                            [{ 'header': [2, 3, false] }],
                                            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                            ['link', 'image', 'video'],
                                            ['clean']
                                        ],
                                    }}
                                    placeholder="Start writing your masterpiece..."
                                />
                            </Suspense>
                        </div>
                        <style>{`
                            .prose-editor-container .ql-toolbar {
                                border: 1px solid #1f2937;
                                border-top-left-radius: 0.75rem;
                                border-top-right-radius: 0.75rem;
                                background-color: #0d0d12;
                                border-bottom: none;
                            }
                            .prose-editor-container .ql-container {
                                border: 1px solid #1f2937;
                                border-bottom-left-radius: 0.75rem;
                                border-bottom-right-radius: 0.75rem;
                                min-height: 400px;
                                font-size: 1rem;
                                background-color: #111115;
                                color: #e5e7eb;
                            }
                            .prose-editor-container .ql-stroke { stroke: #9ca3af; }
                            .prose-editor-container .ql-fill { fill: #9ca3af; }
                            .prose-editor-container .ql-picker-label { color: #9ca3af; }
                            .prose-editor-container .ql-picker-options { background-color: #111115; border: 1px solid #1f2937; }
                            .prose-editor-container .ql-picker-item { color: #9ca3af; }
                            .prose-editor-container .ql-picker-item:hover { color: #d4af37; }
                            .prose-editor-container button:hover .ql-stroke { stroke: #d4af37; }
                            .prose-editor-container button:hover .ql-fill { fill: #d4af37; }
                            .prose-editor-container .ql-editor { min-height: 400px; }
                            .prose-editor-container .ql-editor p { margin-bottom: 1.25rem; line-height: 1.7; }
                            .prose-editor-container .ql-editor h2 { margin-top: 2rem; margin-bottom: 1rem; color: #fff; }
                            .prose-editor-container .ql-editor h3 { margin-top: 1.5rem; margin-bottom: 0.75rem; color: #fff; }
                            .prose-editor-container .ql-active .ql-stroke { stroke: #d4af37; }
                            .prose-editor-container .ql-active .ql-fill { fill: #d4af37; }
                        `}</style>
                    </div>

                    {/* FAQ / AEO Section */}
                    <div className="bg-[#0a0a0c] border border-white/5 rounded-2xl p-8 space-y-6">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-white font-bold text-lg flex items-center gap-2">
                                <span className="w-6 h-6 rounded bg-[#d4af37]/20 text-[#d4af37] text-xs flex items-center justify-center font-bold">4</span>
                                AI SEO & FAQ Schema (AEO)
                            </h2>
                            <button
                                type="button"
                                onClick={handleAddFaq}
                                className="text-xs text-[#d4af37] hover:text-[#b89327] font-bold tracking-wide uppercase px-3 py-1.5 border border-[#d4af37]/30 rounded-lg hover:bg-[#d4af37]/10 transition-colors"
                            >
                                + Add FAQ
                            </button>
                        </div>
                        <p className="text-gray-500 text-sm mb-6">These questions will appear at the bottom of your post and will be injected into the page's hidden JSON-LD schema to rank in Google AI Overviews and ChatGPT searches.</p>

                        {form.faq.length === 0 ? (
                            <div className="text-center py-8 border border-dashed border-gray-800 rounded-xl">
                                <p className="text-gray-500 text-sm">No FAQs added yet. Add some to boost Answer Engine Optimization.</p>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {form.faq.map((item, index) => (
                                    <div key={index} className="p-5 bg-[#111115] border border-gray-800 rounded-xl relative group">
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveFaq(index)}
                                            className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-sm transition-colors opacity-0 group-hover:opacity-100"
                                        >
                                            Remove
                                        </button>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1 block">Question {index + 1}</label>
                                                <input
                                                    type="text"
                                                    value={item.question}
                                                    onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
                                                    placeholder="e.g. What is the fastest way to scale a digital agency?"
                                                    className="w-full bg-transparent border-b border-gray-800 text-white px-0 py-2 focus:outline-none focus:border-[#d4af37] transition-colors text-sm"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1 block">Answer {index + 1}</label>
                                                <textarea
                                                    rows="2"
                                                    value={item.answer}
                                                    onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
                                                    placeholder="Provide a concise, direct answer optimized for AI extraction..."
                                                    className="w-full bg-[#15151a] border border-gray-800 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-[#d4af37] transition-colors text-sm resize-y min-h-[60px]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
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
