"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Home", href: "#home" },
        { name: "The Philosophy", href: "#philosophy" },
        { name: "Nutrition Plans", href: "#nutrition" },
        { name: "Training Programs", href: "#training" },
        { name: "Results", href: "#results" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <nav className={`mx-auto max-w-7xl px-6 py-6 flex items-center justify-between relative z-50 transition-colors ${isOpen ? "" : "mix-blend-difference"}`}>
                <Link href="/" className="relative group">
                    <span className="font-heading text-3xl tracking-widest uppercase text-foreground group-hover:text-brand transition-colors duration-300">
                        Fit Legends
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-10">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="font-body text-sm font-semibold uppercase tracking-widest text-foreground/80 hover:text-brand transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-brand after:transition-all hover:after:w-full"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#join"
                        className="px-6 py-3 border border-surface text-sm font-bold uppercase tracking-widest hover:bg-brand hover:text-background hover:border-brand transition-all duration-300"
                    >
                        Apply Now
                    </Link>
                </div>

                <button
                    className="md:hidden text-foreground relative z-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8"
                    >
                        {links.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i, duration: 0.5 }}
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="font-heading text-5xl hover:text-brand transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <Link
                                href="#join"
                                onClick={() => setIsOpen(false)}
                                className="font-body mt-8 px-8 py-4 bg-brand text-background text-sm font-bold uppercase tracking-widest"
                            >
                                Apply Now
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
