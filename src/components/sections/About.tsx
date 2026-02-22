"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row items-center gap-12"
                >
                    <div className="w-full md:w-1/2 relative flex justify-center">
                        {/* Image backing glow */}
                        <div className="absolute w-[300px] h-[400px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
                        <motion.div
                            animate={{
                                boxShadow: [
                                    "0px 0px 15px rgba(0, 229, 255, 0.2)",
                                    "0px 0px 35px rgba(0, 229, 255, 0.5)",
                                    "0px 0px 15px rgba(0, 229, 255, 0.2)"
                                ],
                                borderColor: [
                                    "rgba(0, 229, 255, 0.3)",
                                    "rgba(0, 229, 255, 0.7)",
                                    "rgba(0, 229, 255, 0.3)"
                                ]
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-64 h-80 sm:w-80 sm:h-96 rounded-2xl bg-slate-900/50 p-2 overflow-hidden glass-card"
                        >
                            <div className="w-full h-full relative rounded-xl overflow-hidden bg-slate-800">
                                <Image
                                    src="/profile.jpg"
                                    alt="Ericson Barato Profile"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 16rem, 20rem"
                                />
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
                            About <span className="text-primary">Ericson Barato</span>
                        </h2>
                        <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
                            <p>
                                I specialize in architecting advanced AI agents and seamlessly embedding them into modern web infrastructures. Deeply rooted in full-stack orchestration, I bridge the gap between complex AI logic and intuitive user experiences.
                            </p>
                            <p>
                                Whether it&apos;s deploying RAG-based systems, building generative UI patterns with React 19/Next.js, or triaging chaotic data pipelines with Node.js backends—my focus is on pristine execution and uncompromised security.
                            </p>
                            <p className="font-mono text-sm text-primary/80 pt-4 border-t border-slate-800 inline-block">
                                {"//"} System Status: Ready to Deploy
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
