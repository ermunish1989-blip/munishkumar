import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppWidget = () => {
    // WhatsApp configuration
    const phoneNumber = "919317432236"; // Format: country code + number without plus or spaces
    const message = encodeURIComponent("Hi Munish, I'm interested in discussing a growth strategy for my business. Can we connect?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 isolate"
        >
            {/* Tooltip to encourage clicks */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="bg-[#050506] border border-[#d4af37]/30 text-white text-xs px-3 py-2 rounded-lg shadow-lg mr-2 hidden md:block relative backdrop-blur-md"
            >
                <span className="text-gray-300">Have a question?</span> <span className="text-[#d4af37] font-bold">Chat with me!</span>
                <div className="absolute top-full right-4 w-2 h-2 bg-[#050506] border-b border-r border-[#d4af37]/30 transform rotate-45 -translate-y-1/2"></div>
            </motion.div>

            {/* Main Button */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300"
                aria-label="Chat on WhatsApp"
            >
                {/* Pulse ring effect */}
                <div className="absolute inset-0 rounded-full border border-[#25D366] opacity-0 group-hover:animate-ping z-[-1]"></div>

                <FaWhatsapp size={32} className="relative z-10" />
            </a>
        </motion.div>
    );
};

export default WhatsAppWidget;
