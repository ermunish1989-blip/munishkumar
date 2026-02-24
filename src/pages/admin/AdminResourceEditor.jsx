import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft, FaSave, FaImage, FaLink, FaInfoCircle } from 'react-icons/fa';
import { getResources, saveResources } from '../../utils/resourceStorage';

const AdminResourceEditor = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditing = id !== undefined;

    const [form, setForm] = useState(() => {
        const defaultState = {
            title: '',
            category: 'Infographics',
            description: '',
            imageUrl: '',
            downloadUrl: '',
            liveViewUrl: '',
            type: 'PDF'
        };

        if (isEditing) {
            const resources = getResources();
            const resource = resources[parseInt(id)];
            if (resource) return { ...resource };
        }
        return defaultState;
    });

    const [isSaving, setIsSaving] = useState(false);

    const categories = ['Infographics', 'plans', 'eBooks', 'Slide Decks', 'Research'];
    const types = ['PDF', 'eBook', 'PPTX', 'XLSX', 'Case Study', 'Model', 'URL'];

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSaving(true);

        setTimeout(() => {
            const resources = getResources();
            if (isEditing) {
                resources[parseInt(id)] = form;
            } else {
                resources.unshift({ ...form, id: Date.now().toString() });
            }
            saveResources(resources);
            setIsSaving(false);
            navigate('/admin', { state: { activeTab: 'resources' } });
        }, 800);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="min-h-screen bg-[#050506] py-12 px-6">
            <Helmet>
                <title>{isEditing ? 'Edit Resource' : 'New Resource'} | Admin</title>
            </Helmet>

            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <Link to="/admin" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Dashboard</span>
                    </Link>
                    <h1 className="text-2xl font-bold text-white font-heading">
                        {isEditing ? 'Edit Resource' : 'Add New Resource'}
                    </h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Main Settings */}
                    <div className="bg-[#0a0a0c] border border-white/5 rounded-2xl p-8 space-y-6 shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Resource Title</label>
                                <input
                                    required
                                    type="text"
                                    name="title"
                                    value={form.title}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37]/50 transition-all"
                                    placeholder="e.g. Scaling Framework 2026"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Category</label>
                                <select
                                    name="category"
                                    value={form.category}
                                    onChange={handleChange}
                                    className="w-full bg-[#111115] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37]/50 appearance-none cursor-pointer"
                                >
                                    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                </select>
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Short Description (Hook)</label>
                            <textarea
                                required
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                rows="3"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37]/50 resize-none transition-all"
                                placeholder="Explain what this resource provides and why it's valuable..."
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Resource Type (Badge)</label>
                                <select
                                    name="type"
                                    value={form.type}
                                    onChange={handleChange}
                                    className="w-full bg-[#111115] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37]/50 appearance-none cursor-pointer"
                                >
                                    {types.map(t => <option key={t} value={t}>{t}</option>)}
                                </select>
                            </div>
                            <div className="space-y-1.5 flex flex-col">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Action</label>
                                <div className="flex-1 flex items-end">
                                    <button
                                        type="submit"
                                        disabled={isSaving}
                                        className={`w-full h-[50px] flex items-center justify-center gap-3 bg-gradient-to-r from-[#d4af37] to-[#b89327] text-black font-bold rounded-xl shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.5)] transition-all ${isSaving ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        <FaSave /> {isSaving ? 'Saving...' : 'Save Resource'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* URLs & Media */}
                    <div className="bg-[#0a0a0c] border border-white/5 rounded-2xl p-8 space-y-6 shadow-2xl">
                        <div className="flex items-center gap-2 mb-2">
                            <FaImage className="text-[#d4af37]" />
                            <h2 className="text-lg font-bold text-white font-heading">Media & Links</h2>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                                    Thumbnail Image URL
                                    <span className="text-[10px] text-gray-600 lowercase font-normal">(use Unsplash or static link)</span>
                                </label>
                                <input
                                    type="text"
                                    name="imageUrl"
                                    value={form.imageUrl}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37]/50 transition-all font-mono text-sm"
                                    placeholder="https://images.unsplash.com/..."
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                                    Resource Download Link
                                    <span className="text-[10px] text-gray-600 lowercase font-normal">(Direct file link)</span>
                                </label>
                                <input
                                    type="text"
                                    name="downloadUrl"
                                    value={form.downloadUrl}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37]/50 transition-all font-mono text-sm"
                                    placeholder="https://example.com/file.pdf"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                                    Live View URL (Optional)
                                    <span className="text-[10px] text-gray-600 lowercase font-normal">(Demo or landing page)</span>
                                </label>
                                <input
                                    type="text"
                                    name="liveViewUrl"
                                    value={form.liveViewUrl}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37]/50 transition-all font-mono text-sm"
                                    placeholder="https://example.com/demo"
                                />
                            </div>
                        </div>

                        <div className="bg-blue-500/5 border border-blue-500/10 rounded-xl p-4 flex gap-4 items-start">
                            <FaInfoCircle className="text-blue-400 mt-1 flex-shrink-0" />
                            <p className="text-gray-400 text-xs leading-relaxed">
                                <strong>Tip:</strong> If you're uploading a file (like an infographic), upload it to your Google Drive or Hostinger File Manager first, and paste the direct public link in the <strong>Download URL</strong> field.
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminResourceEditor;
