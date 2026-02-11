import { motion } from "motion/react";

export default function CTASection() {
    const coworkingHighlights = [
        "More Than a Desk. A Community.",
        "Connect. Create. Collaborate.",
        "Built for Growth.",
        "Where Work Meets Inspiration."
    ];

    return (
        <div className="max-w-5xl mx-auto mt-40 px-4">
            {/* Coworking Highlights */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                {coworkingHighlights.map((highlight, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center justify-center gap-3 px-6 py-4 rounded-lg bg-[#4682B4]/10 border border-[#4682B4]/30 hover:bg-[#4682B4]/20 transition-colors"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
                    >
                        <span className="text-[#4682B4] font-bold text-xl">•</span>
                        <p className="text-slate-200 text-sm font-medium text-center">{highlight}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Main Tagline */}
            <motion.h2
                className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white via-[#4682B4] to-[#315f7d] text-transparent bg-clip-text"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                Work Smarter. Dream Bigger.
            </motion.h2>

            {/* CTA Card */}
            <motion.div 
                className="py-16 md:pl-20 md:w-full flex flex-col md:flex-row max-md:gap-6 items-center justify-between text-left bg-gradient-to-b from-[#315f7d] to-[#1f3a55] rounded-2xl p-6 text-white"
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <div>
                    <motion.h1 
                        className="text-4xl md:text-[46px] md:leading-[60px] font-semibold bg-gradient-to-r from-white to-[#4682B4] text-transparent bg-clip-text"
                        initial={{ y: 80, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                    >
                        Ready to try-out this app?
                    </motion.h1>
                    <motion.p 
                        className="bg-gradient-to-r from-white to-[#4682B4] text-transparent bg-clip-text text-lg"
                        initial={{ y: 80, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, damping: 70, mass: 1 }}
                    >
                        Your next favourite tool is just one click away.
                    </motion.p>
                </div>
                <motion.button 
                    className="px-12 py-3 text-slate-800 bg-white hover:bg-slate-200 rounded-full text-sm mt-4"
                    initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    Get Started
                </motion.button>
            </motion.div>
        </div>
    );
}
