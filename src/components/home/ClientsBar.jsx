import { motion } from 'framer-motion';

const ClientsBar = () => {
    const clients = [
        "WTechy Pvt. Ltd.",
        "Next Black Computers — Bahrain",
        "Spark Business Support Services",
        "GCC  |  USA  |  Europe  |  APAC",
        "Digital Agencies  |  IT Firms  |  SaaS Companies"
    ];

    return (
        <section className="py-10 bg-[#050506] border-y border-[rgba(255,255,255,0.05)] overflow-hidden relative">
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#050506] to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#050506] to-transparent z-10"></div>

            <div className="container mx-auto px-6 mb-6">
                <h3 className="text-center text-gray-500 font-heading tracking-widest text-sm uppercase">
                    Some of the Amazing Clients & Markets I’ve Worked With
                </h3>
            </div>

            <div className="flex w-[200%] gap-12 whitespace-nowrap animate-scroll items-center h-16">
                {/* Duplicate the array twice for an infinite scrolling effect */}
                {[...clients, ...clients].map((client, index) => (
                    <div key={index} className="flex items-center gap-12 text-gray-400 font-bold text-lg opacity-60 hover:opacity-100 hover:text-[#d4af37] transition-all cursor-default">
                        <span>{client}</span>
                        <span className="text-[#d4af37] opacity-50 text-xs">◆</span>
                    </div>
                ))}
            </div>

            {/* Manual CSS for Infinite Scroll */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}} />
        </section>
    );
};

export default ClientsBar;
