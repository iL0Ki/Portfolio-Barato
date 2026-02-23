"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useEffect } from "react";
import { CALENDLY_WIDGET_URL } from "@/lib/constants";

export function Contact() {
    useEffect(() => {
        if (typeof window !== "undefined" && (window as unknown as { Calendly?: { initInlineWidget: (opts: { url: string; parentElement: HTMLElement | null }) => void } }).Calendly) {
            (window as unknown as { Calendly: { initInlineWidget: (opts: { url: string; parentElement: HTMLElement | null }) => void } }).Calendly.initInlineWidget({
                url: CALENDLY_WIDGET_URL,
                parentElement: document.getElementById("calendly-inline-container"),
            });
        }
    }, []);

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

                    {/* Calendly Inline Widget */}
                    <div className="pt-8">
                        <div
                            id="calendly-inline-container"
                            className="calendly-inline-widget rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl mx-auto max-w-3xl min-w-[320px] h-[700px]"
                            data-url={CALENDLY_WIDGET_URL}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
