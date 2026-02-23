import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
    return (
        <div className="w-full relative bg-[#050506]">
            <Helmet>
                <title>Privacy Policy | Munish Kumar Business Advisor</title>
                <meta name="description" content="Privacy Policy detailing how Munish Kumar Business Advisor & Consultant collects, uses, and protects your business information globally." />
                <meta name="robots" content="noindex, follow" />
            </Helmet>

            {/* Page Hero */}
            <section className="pt-40 pb-20 bg-[#0a0a0c] relative border-b border-[rgba(255,255,255,0.05)]">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-[rgba(212,175,55,0.05)] to-transparent rounded-full blur-[100px] pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="heading-xl font-bold text-white mb-6"
                    >
                        Privacy <span className="text-gradient">Policy</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 font-light"
                    >
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="prose prose-invert prose-lg max-w-none font-light text-gray-300">
                        <p className="lead text-xl text-gray-400 mb-10">
                            Munish Kumar Business Advisor & Consultant ("we", "us", or "our") respects your privacy and is committed to protecting the personal and business data of our clients, partners, and site visitors across all global jurisdictions, including the USA, UK, EU, UAE, Saudi Arabia, Bahrain, India, and APAC regions.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-heading">1. Information We Collect</h2>
                        <p className="mb-4">We may collect and process the following data about you and your organization:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-400 marker:text-[#d4af37]">
                            <li><strong className="text-white">Professional Contact Information:</strong> Names, job titles, business email addresses, and phone numbers submitted via our contact forms or direct communication (including WhatsApp).</li>
                            <li><strong className="text-white">Business Data:</strong> Information regarding your agency, SaaS platform, revenue metrics, or strategic challenges voluntarily shared during consultations or strategy audits.</li>
                            <li><strong className="text-white">Technical Data:</strong> IP addresses, browser types, time zone settings, operating systems, and platform information collected automatically when you browse our website.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-heading">2. How We Use Your Data</h2>
                        <p className="mb-4">We utilize the data we collect exclusively for professional B2B purposes, including:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-400 marker:text-[#d4af37]">
                            <li>Executing requested advisory frameworks and strategy audits.</li>
                            <li>Managing our ongoing client relationships and business development pipelines.</li>
                            <li>Responding directly to your inquiries and support requests efficiently (e.g., via email or our 24-hour response framework).</li>
                            <li>Improving our website’s functionality, optimizing user experience, and analyzing geographical engagement (Answer Engine Optimization metrics).</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-heading">3. International Data Transfers</h2>
                        <p className="mb-8">
                            Because our operations span globally—with active physical footholds in Bahrain and India—the information we collect may be transferred to, stored, or processed in destinations outside your home jurisdiction. We ensure that your data is treated securely and in accordance with this privacy policy, adhering to stringent, enterprise-grade data protection standards globally, including the principles outlined by GDPR (Europe) and CCPA (USA) where applicable.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-heading">4. Data Security</h2>
                        <p className="mb-8">
                            We deploy strict security measures to prevent your personal data from being accidentally lost, used, altered, disclosed, or accessed in an unauthorized manner. Access to your personal data is limited strictly to employees, contractors, and third-party tools who have an absolute business "need to know." They will only process your personal data on our instructions and are subject to rigorous duties of confidentiality.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-heading">5. Cookies & Tracking Technologies</h2>
                        <p className="mb-8">
                            Our website utilizes standard analytical cookies and tracking scripts to understand visitor traffic patterns (such as which geographic landing pages perform best) and to provide a seamless browsing experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our site.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-heading">6. Your Legal Rights</h2>
                        <p className="mb-4">Depending on your geographic location, you possess defined rights under data protection laws in relation to your personal data, which include the right to:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-400 marker:text-[#d4af37]">
                            <li>Request access to your personal and business data.</li>
                            <li>Request correction of any incomplete or inaccurate data we hold about you.</li>
                            <li>Request the erasure of your personal data when there is no compelling professional necessity for its continued processing.</li>
                            <li>Withdraw consent at any time where we are relying on consent to process your personal data.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-6 font-heading">7. Contact Information</h2>
                        <p className="mb-8">
                            If you have any questions about this Privacy Policy, our operational privacy practices, or if you wish to exercise any of your legal rights, please contact us at: <br /><br />
                            <a href="mailto:info@munishkumar.com" className="text-[#d4af37] hover:border-b hover:border-[#d4af37] transition-all">info@munishkumar.com</a><br />
                            P.O. Box 23765, Manama, Kingdom of Bahrain<br />
                            Chandigarh, India
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
