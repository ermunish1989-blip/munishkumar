import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const ADMIN_PASSWORD = 'munish@admin2024';

const AdminLogin = () => {
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setTimeout(() => {
            if (password === ADMIN_PASSWORD) {
                sessionStorage.setItem('mk_admin_auth', 'true');
                navigate('/admin/dashboard');
            } else {
                setError('Incorrect password. Please try again.');
            }
            setIsLoading(false);
        }, 500);
    };

    return (
        <div className="min-h-screen bg-[#050506] flex items-center justify-center relative overflow-hidden">
            <Helmet><title>Admin Login | Munish Kumar</title></Helmet>

            {/* Ambient glows */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#d4af37]/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="w-full max-w-md px-6 relative z-10">
                {/* Logo */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <span className="w-12 h-12 rounded bg-gradient-to-br from-[#d4af37] to-[#b89327] text-black flex justify-center items-center text-sm font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)]">MK</span>
                        <span className="text-2xl font-bold text-white font-heading">Munish<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#b89327]">Kumar</span>.</span>
                    </div>
                    <p className="text-gray-500 text-sm uppercase tracking-widest font-medium">Admin Panel</p>
                </div>

                {/* Login Card */}
                <div className="bg-[#0a0a0c] border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 shadow-[0_0_60px_rgba(0,0,0,0.5)]">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center">
                            <FaLock className="text-[#d4af37] text-sm" />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold text-white">Secure Access</h1>
                            <p className="text-xs text-gray-500">Enter your admin password</p>
                        </div>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div>
                            <label className="text-sm text-gray-400 mb-2 block">Password</label>
                            <div className="relative">
                                <input
                                    type={showPass ? 'text' : 'password'}
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    required
                                    autoFocus
                                    placeholder="Enter admin password..."
                                    className="w-full bg-[#111115] border border-gray-800 text-white rounded-lg px-4 py-3 pr-12 focus:outline-none focus:border-[#d4af37] transition-colors text-sm"
                                />
                                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#d4af37] transition-colors">
                                    {showPass ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg px-4 py-3 text-sm">
                                {error}
                            </div>
                        )}

                        <button type="submit" disabled={isLoading} className="w-full py-3 bg-gradient-to-r from-[#d4af37] to-[#b89327] text-black font-bold rounded-lg shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.5)] transition-all disabled:opacity-70 flex items-center justify-center gap-2">
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                    </svg>
                                    Verifying...
                                </>
                            ) : 'Login to Admin'}
                        </button>
                    </form>
                </div>

                <p className="text-center text-xs text-gray-600 mt-6">
                    <a href="/" className="hover:text-[#d4af37] transition-colors">← Back to website</a>
                </p>
            </div>
        </div>
    );
};

export default AdminLogin;
