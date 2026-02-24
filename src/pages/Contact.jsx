import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaClock, FaPhone } from 'react-icons/fa';
import { useState } from 'react';
import SEO from '../components/ui/SEO';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const FORMSPREE_ID = 'xqedgwqy'; // Your verified Formspree ID

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const form = e.target;
        const data = new FormData(form);

        // If Formspree ID is not yet configured, use mailto: fallback
        if (FORMSPREE_ID === 'YOUR_FORMSPREE_ID') {
            const body = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ACompany: ${formData.company}%0AService: ${formData.service}%0A%0AMessage:%0A${formData.message}`;
            window.location.href = `mailto:info@munishkumar.com?subject=New Business Enquiry from ${formData.name}&body=${body}`;
            setIsLoading(false);
            setIsSubmitted(true);
            return;
        }

        // Formspree API path (primary — works on any host)
        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
            } else {
                const json = await response.json();
                alert(json?.errors?.[0]?.message || 'Submission failed. Please email info@munishkumar.com directly.');
            }
        } catch {
            // Network error — Netlify Forms may still have caught it server-side
            setIsSubmitted(true);
        } finally {
            setIsLoading(false);
        }
    };

    const faqs = [
        {
            q: "Who do you typically work with?",
            a: "I work with digital agency founders, IT and SaaS company leaders, startup entrepreneurs, and BD teams across all industries. My ideal clients are growth-focused professionals who are serious about implementing structured systems — not just getting advice."
        },
        {
            q: "Do you work with international clients?",
            a: "Absolutely. I have extensive hands-on experience across USA, Europe, GCC, and APAC markets. All engagements are conducted remotely and I'm comfortable working across all major time zones."
        },
        {
            q: "What does your consulting process look like?",
            a: "We start with a free discovery call, then I conduct a strategy audit of your current situation. From there, I build a custom growth roadmap and work hands-on with you on execution. Every engagement is tailored to your specific goals, team, and market."
        },
        {
            q: "Do you offer training for BD teams?",
            a: "Yes — BD team training and new joiner onboarding is one of my core services. I cover bidding strategy, proposal writing, CRM usage, lead generation frameworks, and building a high-performance BD culture from day one."
        },
        {
            q: "How quickly will I see results?",
            a: "Most clients see quick wins within the first 30 days — usually in the form of a cleaner pipeline, better qualified leads, or improved conversion rates. Structural changes take 60–90 days to fully embed. International pipeline growth typically shows measurable results within 90–120 days."
        }
    ];

    const toggleFaq = (idx) => {
        if (openFaq === idx) {
            setOpenFaq(null);
        } else {
            setOpenFaq(idx);
        }
    };

    return (
        <div className="w-full relative bg-[#050506]">
            {/* Page Hero */}
            <section className="pt-40 pb-20 bg-[#0a0a0c] relative border-b border-[rgba(255,255,255,0.05)]">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-[rgba(212,175,55,0.05)] to-transparent rounded-full blur-[100px] pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="heading-xl font-bold text-white mb-6"
                    >
                        Let's <span className="text-gradient">Talk</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 font-light"
                    >
                        Ready to scale globally? Let's build your growth strategy together. I respond to all inquiries within 24 hours.
                    </motion.p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                        {/* Left: Contact Info Side Panel */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:w-1/3 flex flex-col gap-8 order-2 lg:order-1"
                        >
                            <div className="glass p-8 border border-[rgba(212,175,55,0.1)] h-full">
                                <h3 className="text-2xl font-bold text-white mb-8 border-b border-[rgba(255,255,255,0.1)] pb-4">Contact Details</h3>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4 flex-col text-white">
                                        <div className="flex gap-4">
                                            <FaEnvelope size={20} className="text-[#d4af37]" />
                                            <a href="mailto:info@munishkumar.com" className="hover:text-[#d4af37] transition-colors break-all">info@munishkumar.com</a>
                                        </div>
                                        <div className="flex gap-4">
                                            <FaPhone size={20} className="text-[#d4af37]" />
                                            <span>+91 93174 32236</span>
                                        </div>
                                        <div className="flex gap-4">
                                            <FaLinkedin size={20} className="text-[#d4af37]" />
                                            <a href="https://www.linkedin.com/in/munish-kumar-business-adviser/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors break-all">linkedin.com/in/munish-kumar-business-adviser/</a>
                                        </div>
                                        <div className="flex gap-4">
                                            <FaMapMarkerAlt size={20} className="text-[#d4af37]" />
                                            <span>Chandigarh, India</span>
                                        </div>
                                        <div className="flex gap-4">
                                            <FaClock size={20} className="text-[#d4af37]" />
                                            <span>Response time: Within 24 hours</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:w-2/3 order-1 lg:order-2"
                        >
                            {isSubmitted ? (
                                <div className="glass p-12 text-center h-full flex flex-col justify-center items-center rounded-2xl border-[rgba(212,175,55,0.2)]">
                                    <div className="w-20 h-20 bg-[rgba(212,175,55,0.1)] rounded-full flex items-center justify-center text-[#d4af37] text-3xl mb-6">✓</div>
                                    <h3 className="text-3xl font-bold text-white mb-4">Thank you for reaching out!</h3>
                                    <p className="text-gray-400 text-lg">I'll review your message and get back to you within 24 hours. <br />— Munish Kumar</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} name="contact" data-netlify="true" className="glass p-8 md:p-10 rounded-2xl border-[rgba(255,255,255,0.05)] shadow-2xl space-y-6">

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm text-gray-300 ml-1">Full Name <span className="text-[#d4af37]">*</span></label>
                                            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-[#111115] border border-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#d4af37] transition-colors" />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm text-gray-300 ml-1">Email Address <span className="text-[#d4af37]">*</span></label>
                                            <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-[#111115] border border-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#d4af37] transition-colors" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm text-gray-300 ml-1">Phone Number</label>
                                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-[#111115] border border-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#d4af37] transition-colors" />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="company" className="text-sm text-gray-300 ml-1">Company / Agency Name</label>
                                            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full bg-[#111115] border border-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#d4af37] transition-colors" />
                                        </div>
                                    </div>

                                    <div className="space-y-2 relative">
                                        <label htmlFor="service" className="text-sm text-gray-300 ml-1">How Can I Help?</label>
                                        <div className="relative">
                                            <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full bg-[#111115] border border-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#d4af37] transition-colors appearance-none cursor-pointer">
                                                <option value="" disabled>Select an option...</option>
                                                <option value="B2B Growth Strategy">B2B Growth Strategy</option>
                                                <option value="Agency Scaling & Operations">Agency Scaling & Operations</option>
                                                <option value="BD Training for My Team">BD Training for My Team</option>
                                                <option value="Marketing & SEO Systems">Marketing & SEO Systems</option>
                                                <option value="White-Label Partnerships">White-Label Partnerships</option>
                                                <option value="Other / Not Sure Yet">Other / Not Sure Yet</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500">▼</div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm text-gray-300 ml-1">Your Message <span className="text-[#d4af37]">*</span></label>
                                        <textarea id="message" name="message" required rows="5" value={formData.message} onChange={handleChange} className="w-full bg-[#111115] border border-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#d4af37] transition-colors resize-y min-h-[120px]" />
                                    </div>

                                    <button type="submit" disabled={isLoading} className="btn btn-primary w-full py-4 text-lg mt-4 shadow-[0_0_20px_rgba(212,175,55,0.3)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3">
                                        {isLoading ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : 'Send Message'}
                                    </button>
                                </form>
                            )}
                        </motion.div>

                    </div>
                </div >
            </section >

            {/* FAQ Section */}
            < section className="py-24 bg-[#0a0a0c] border-y border-[rgba(255,255,255,0.05)]" >
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="text-gray-500 font-heading font-medium tracking-wider text-sm uppercase mb-4 block">FAQ</span>
                        <h2 className="heading-lg text-white font-bold">Common Questions Before You Reach Out</h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="border border-[rgba(255,255,255,0.05)] rounded-2xl overflow-hidden bg-[#111115]"
                            >
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full text-left px-8 py-6 flex justify-between items-center bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.05)] transition-colors focus:outline-none"
                                >
                                    <span className="text-lg font-bold text-white pr-8">{faq.q}</span>
                                    <span className="text-[#d4af37] text-2xl font-light w-6 h-6 flex items-center justify-center -mt-1 group-focus:rotate-45">
                                        {openFaq === idx ? '−' : '+'}
                                    </span>
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-8 pb-6 pt-2 text-gray-400 leading-relaxed border-t border-[rgba(255,255,255,0.02)]">
                                        {faq.a}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 text-center glass-card p-10 border-l-4 border-l-[#d4af37]">
                        <p className="text-2xl text-white italic font-light mb-4 text-center">"Your Growth = My Mission."</p>
                        <p className="text-gray-500 uppercase tracking-wider text-sm font-bold text-center">— Munish Kumar — Business Advisor & Consultant</p>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Contact;
