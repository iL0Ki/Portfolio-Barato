"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useEffect } from "react";

export function Contact() {
    useEffect(() => {
        // Re-initialize Calendly widget after component mounts
        if (typeof window !== "undefined" && (window as any).Calendly) {
            (window as any).Calendly.initInlineWidget({
                url: "https://calendly.com/ericson-barato/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=6dd58e",
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
                            className="calendly-inline-widget rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl mx-auto max-w-3xl"
                            data-url="https://calendly.com/ericson-barato/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=6dd58e"
                            style={{ minWidth: "320px", height: "700px" }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

