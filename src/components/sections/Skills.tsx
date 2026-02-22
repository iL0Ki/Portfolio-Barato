"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, BrainCircuit, Database, MessageSquare, Zap } from "lucide-react";

const skills = [
    {
        title: "Agentic AI Systems",
        description: "Building autonomous AI agents that work independently.",
        icon: <Bot className="h-5 w-5 text-primary" />,
        delay: 0.1,
    },
    {
        title: "Workflow Automation",
        description: "Multi-step pipelines with intelligent decision-making.",
        icon: <Workflow className="h-5 w-5 text-primary" />,
        delay: 0.2,
    },
    {
        title: "LLM Integration",
        description: "OpenAI, Anthropic, and custom LLM implementations.",
        icon: <BrainCircuit className="h-5 w-5 text-primary" />,
        delay: 0.3,
    },
    {
        title: "RAG & Vector Stores",
        description: "Semantic search with embeddings and retrieval systems.",
        icon: <Database className="h-5 w-5 text-primary" />,
        delay: 0.4,
    },
    {
        title: "Chatbot Development",
        description: "Messenger bots, Q&A agents, and conversational AI.",
        icon: <MessageSquare className="h-5 w-5 text-primary" />,
        delay: 0.5,
    },
    {
        title: "n8n / Make.com",
        description: "Low-code automation platforms for rapid deployment.",
        icon: <Zap className="h-5 w-5 text-primary" />,
        delay: 0.6,
    },
];

export function Skills() {
    return (
        <section id="skills" className="py-24 relative bg-background border-t border-white/5">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl inline-block relative pb-4"
                    >
                        Skills & <span className="text-primary">Expertise</span>
                        {/* The underline accent from the screenshot, adapted to primary color */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-24 bg-primary rounded-full"></div>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: skill.delay, duration: 0.4 }}
                            className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/40 p-6 hover:border-primary/50 hover:bg-slate-900/60 transition-colors group"
                        >
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 group-hover:border-primary/30 transition-colors">
                                {skill.icon}
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-slate-100 group-hover:text-primary transition-colors">
                                {skill.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-slate-400">
                                {skill.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
