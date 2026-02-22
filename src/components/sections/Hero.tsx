"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedGrid = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Base Grid */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10" />

            {/* Animated floating particles / nodes */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary shadow-[0_0_15px_rgba(0,229,255,0.8)]"
            />
            <motion.div
                animate={{
                    y: [0, 30, 0],
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
                className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_rgba(0,229,255,0.8)]"
            />

            <motion.div
                animate={{
                    x: [0, 20, 0],
                    opacity: [0.1, 0.4, 0.1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                className="absolute top-1/2 left-2/3 w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_10px_rgba(249,115,22,0.8)]"
            />

            {/* Interactive Mouse Glow */}
            <motion.div
                animate={{
                    x: mousePosition.x - 400,
                    y: mousePosition.y - 400,
                }}
                transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 20,
                    mass: 0.5,
                }}
                className="absolute w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] opacity-50"
            />
        </div>
    );
};

export function Hero() {
    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4">
            <AnimatedGrid />

            {/* Background static glow effect (fallback/base) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="container relative z-10 mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="glass-card mx-auto mb-8 inline-block px-6 py-2 text-primary text-sm font-mono tracking-wider"
                >
          // SCALABLE. AUTOMATED. PRECISE.
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
                >
                    ENGINEERING SCALABLE <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-slate-100">AUTOMATION</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 sm:text-xl leading-relaxed"
                >
                    &quot;I don&apos;t just build AI; I engineer scalable automation. My goal is to transform your complex bottlenecks into flawless, autonomous workflows—saving you hundreds of hours, reducing operational friction, and unlocking your business&apos;s true capacity for growth.&quot;
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="rounded-md bg-primary px-8 py-3 text-sm font-semibold text-background transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
                    >
                        Explore Workflows
                    </a>
                    <a
                        href="#contact"
                        className="rounded-md border border-slate-700 bg-transparent px-8 py-3 text-sm font-semibold text-slate-300 transition-all hover:bg-slate-800 hover:text-white"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
