"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-slate-900/40">
            {/* Background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none z-0" />

            <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center justify-center p-3 sm:p-4 rounded-full bg-slate-800/50 border border-slate-700/50 mb-4">
                        <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary" aria-hidden="true" />
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-5xl">
                        Ready to Automate?
                    </h2>

                    <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                        Let&apos;s engineer a flawless workflow that saves you time and scales your capacity. I am currently open for new integration projects.
                    </p>

                    <div className="pt-8">
                        <button
                            onClick={() => {
                                if (typeof window !== 'undefined' && (window as any).Calendly) {
                                    (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/ericson-barato/30min' });
                                }
                            }}
                            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-semibold text-background transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer"
                            aria-label="Book a call with Ericson Barato"
                        >
                            Book Call
                            <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
