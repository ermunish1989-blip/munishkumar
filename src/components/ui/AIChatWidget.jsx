import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AIChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [awaitingEmail, setAwaitingEmail] = useState(false);
    const messagesEndRef = useRef(null);

    const FORMSPREE_ID = 'xqedgwqy'; // Sourced from existing codebase

    // Initial greeting
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            const timer = setTimeout(() => {
                setIsTyping(true);
                setTimeout(() => {
                    setMessages([
                        {
                            sender: 'ai',
                            text: "Hi there! I'm Munish AI. How can I help you scale your business today?",
                            options: [
                                "How can you help scale my agency?",
                                "What are your services?",
                                "I want to leave a message."
                            ]
                        }
                    ]);
                    setIsTyping(false);
                }, 1000);
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [isOpen, messages.length]);

    // Auto-scroll
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isTyping]);

    const handleOptionClick = (option) => {
        // Add user message
        setMessages(prev => [...prev, { sender: 'user', text: option }]);
        setIsTyping(true);

        // Remove options from previous message to keep UI clean
        setMessages(prev => {
            const newMessages = [...prev];
            const lastAiMsgIndex = newMessages.length - 2;
            if (lastAiMsgIndex >= 0 && newMessages[lastAiMsgIndex].options) {
                delete newMessages[lastAiMsgIndex].options;
            }
            return newMessages;
        });

        // Determine response based on option
        setTimeout(() => {
            setIsTyping(false);
            if (option === "How can you help scale my agency?") {
                setMessages(prev => [...prev, {
                    sender: 'ai',
                    text: "Munish specializes in building structural systems (fulfillment, automations, team processes) so you can safely increase sales without breaking your operations. He focuses heavily on global B2B expansion.",
                    options: ["What are your services?", "I want to leave a message."]
                }]);
            } else if (option === "What are your services?") {
                setMessages(prev => [...prev, {
                    sender: 'ai',
                    text: (
                        <span>
                            He offers B2B Growth Strategy, Agency Scaling & Operations, and BD Team Training. You can view all details on the <Link to="/services" className="text-[#d4af37] underline" onClick={() => setIsOpen(false)}>Services page</Link>.
                        </span>
                    ),
                    options: ["How can you help scale my agency?", "I want to leave a message."]
                }]);
            } else if (option === "I want to leave a message.") {
                setMessages(prev => [...prev, {
                    sender: 'ai',
                    text: "Great. Please type your email address below, and Munish will get back to you within 24 hours."
                }]);
                setAwaitingEmail(true);
            }
        }, 1500);
    };

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        if (!email) return;

        setMessages(prev => [...prev, { sender: 'user', text: email }]);
        e.target.reset();
        setIsTyping(true);
        setAwaitingEmail(false);

        // Send to formspree silently
        fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, source: "AIChatWidget" })
        }).then(() => {
            setTimeout(() => {
                setIsTyping(false);
                setMessages(prev => [...prev, {
                    sender: 'ai',
                    text: "Thanks! I've sent your email to Munish. He will reach out to you shortly. Feel free to explore the site in the meantime.",
                    options: ["What are your services?", "How can you help scale my agency?"]
                }]);
            }, 1000);
        }).catch(() => {
            setTimeout(() => {
                setIsTyping(false);
                setMessages(prev => [...prev, {
                    sender: 'ai',
                    text: "Oops, something went wrong on my end. Please use the Contact page instead."
                }]);
            }, 1000);
        });
    };

    return (
        <div className="fixed bottom-6 left-6 z-[99]">
            {/* Widget Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(true)}
                        className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-[#111115] to-[#1a1a20] border border-[#d4af37]/30 text-[#d4af37] shadow-[0_4px_20px_rgba(212,175,55,0.2)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.4)] transition-all duration-300"
                    >
                        {/* Pulse ring */}
                        <div className="absolute inset-0 rounded-full border border-[#d4af37] opacity-0 group-hover:animate-ping z-[-1] pointer-events-none"></div>
                        <FaRobot size={28} />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Interface */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-0 left-0 w-[350px] sm:w-[380px] h-[500px] max-h-[80vh] bg-[#0a0a0c] border border-white/10 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden glass z-50 origin-bottom-left"
                    >
                        {/* Header */}
                        <div className="px-5 py-4 bg-gradient-to-r from-[#d4af37] to-[#b89327] flex items-center justify-between shadow-md relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center text-black">
                                    <FaRobot size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-black text-sm">Munish AI</h3>
                                    <p className="text-black/70 text-xs flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-green-900 animate-pulse"></span>
                                        Online
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-black/70 hover:text-black transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/10"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent bg-[#050506]/50">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                                    <div className="flex items-end gap-2 max-w-[85%]">
                                        {msg.sender === 'ai' && (
                                            <div className="w-6 h-6 rounded-full bg-[#111115] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] flex-shrink-0 mb-1">
                                                <FaRobot size={12} />
                                            </div>
                                        )}
                                        <div
                                            className={`p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                                                ? 'bg-[#d4af37] text-black rounded-br-sm'
                                                : 'bg-[#15151a] border border-white/5 text-gray-200 rounded-bl-sm'
                                                }`}
                                        >
                                            {msg.text}
                                        </div>
                                    </div>

                                    {/* Action Options associated with this message */}
                                    {msg.options && (
                                        <div className="flex flex-col gap-2 mt-3 ml-8 w-full pr-8">
                                            {msg.options.map((opt, optIdx) => (
                                                <button
                                                    key={optIdx}
                                                    onClick={() => handleOptionClick(opt)}
                                                    className="text-left text-xs bg-[#d4af37]/10 hover:bg-[#d4af37]/20 border border-[#d4af37]/30 text-[#d4af37] py-2 px-3 rounded-xl transition-colors duration-200 w-fit sm:max-w-xs"
                                                >
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex items-end gap-2">
                                    <div className="w-6 h-6 rounded-full bg-[#111115] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] flex-shrink-0">
                                        <FaRobot size={12} />
                                    </div>
                                    <div className="bg-[#15151a] border border-white/5 px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area (Only visible when awaiting email) */}
                        <div className="p-4 bg-[#111115] border-t border-white/5 relative z-10 transition-all duration-300 h-20 flex items-center justify-center">
                            {awaitingEmail ? (
                                <form onSubmit={handleEmailSubmit} className="flex gap-2 w-full">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email..."
                                        required
                                        autoFocus
                                        className="flex-1 bg-[#0a0a0c] border border-white/10 text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#d4af37] transition-colors"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-[#d4af37] text-black w-10 h-10 rounded-xl flex items-center justify-center hover:bg-[#b89327] transition-colors flex-shrink-0"
                                    >
                                        <FaPaperPlane size={14} className="ml-[-2px] mt-[1px]" />
                                    </button>
                                </form>
                            ) : (
                                <p className="text-gray-600 text-xs text-center w-full">
                                    Select an option above to chat with Munish AI
                                </p>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AIChatWidget;
