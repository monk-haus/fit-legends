"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 pt-20">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
                src="/vid.mp4"
            />
            <div className="absolute inset-0 bg-background/60 z-0" />
            <div className="mx-auto max-w-7xl w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">

                <div className="lg:col-span-8 flex flex-col">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <h1 className="font-heading text-[12vw] leading-[0.85] lg:text-[9rem] tracking-tight uppercase text-foreground">
                            Become A <br />
                            <span className="text-brand">Fit Legend</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="font-body mt-8 text-lg lg:text-xl text-foreground/70 max-w-xl font-light"
                    >
                        Empowering every Queen and King to their ultimate fit physique. 18 years of elite, science-based training experience designed to transform your mind, body, and spirit.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="mt-12 flex flex-col sm:flex-row gap-4"
                    >
                        <button className="px-8 py-5 bg-brand text-background font-body font-bold uppercase tracking-widest text-sm hover:bg-foreground hover:text-background transition-colors duration-300">
                            Start Your Transformation
                        </button>
                        <button className="px-8 py-5 border border-surface text-foreground font-body font-bold uppercase tracking-widest text-sm hover:border-foreground transition-colors duration-300">
                            Explore Programs
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="lg:col-span-4 lg:ml-auto max-w-sm lg:pb-8"
                >
                    <div className="border-l-2 border-brand pl-6 relative">
                        <p className="font-body text-sm leading-relaxed text-foreground/60 italic">
                            "No man has the right to be an amateur in the matter of physical training. It is a shame for a man to grow old without seeing the beauty and strength of which his body is capable."
                        </p>
                        <p className="font-body text-xs font-bold uppercase tracking-widest mt-4 text-brand">
                            — Socrates
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
