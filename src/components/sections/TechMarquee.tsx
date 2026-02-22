"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, Database, Workflow, Cpu, Layers } from "lucide-react";

// Using Lucide icons to represent the requested tools
const techStack = [
    { name: "n8n", icon: <Workflow className="w-5 h-5" /> },
    { name: "Gemini", icon: <Sparkles className="w-5 h-5" /> },
    { name: "Claude Code", icon: <Code2 className="w-5 h-5" /> },
    { name: "Antigravity", icon: <Cpu className="w-5 h-5" /> },
    { name: "JavaScript", icon: <Layers className="w-5 h-5" /> },
    { name: "React / Next.js", icon: <Code2 className="w-5 h-5" /> },
    { name: "Node.js", icon: <Database className="w-5 h-5" /> },
    { name: "Supabase", icon: <Database className="w-5 h-5" /> },
];

export function TechMarquee() {
    return (
        <section className="relative py-12 flex items-center justify-center overflow-hidden bg-transparent">
            {/* The angled container covering the screen width */}
            <div className="absolute w-[110vw] left-1/2 -translate-x-1/2 -rotate-2 bg-[#050914] border-y border-[#00E5FF]/20 shadow-[0_0_30px_rgba(0,229,255,0.05)] py-4 flex overflow-hidden z-10">
                {/* 
                  Inner flex container that is wider than the screen. 
                  We repeat the techStack list twice (or more) and translate it 
                */}
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-3 px-8 text-slate-300 hover:text-[#00E5FF] transition-colors"
                        >
                            <span className="text-[#00E5FF]/80">{tech.icon}</span>
                            <span className="font-mono text-lg font-semibold tracking-wider uppercase">
                                {tech.name}
                            </span>
                            {/* Dot separator */}
                            <span className="ml-8 text-[#00E5FF]/40 text-xl leading-none">&bull;</span>
                        </div>
                    ))}
                </div>
            </div>
            {/* Space reservation so the absolute angled div doesn't overlap text awkwardly */}
            <div className="h-16 w-full"></div>
        </section>
    );
}
