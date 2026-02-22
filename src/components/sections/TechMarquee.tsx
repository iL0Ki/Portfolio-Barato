"use client";

import { motion } from "framer-motion";
import { SiN8N, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiSupabase, SiAnthropic, SiGoogle } from "react-icons/si";
import { TbCpu } from "react-icons/tb";

const techStack = [
    { name: "n8n", icon: <SiN8N className="w-5 h-5 text-[#ff6e6e]" /> }, // n8n brand color
    { name: "Gemini", icon: <SiGoogle className="w-5 h-5 text-[#4285F4]" /> }, // Google brand color
    { name: "Claude Code", icon: <SiAnthropic className="w-5 h-5 text-[#D1CEB7]" /> }, // Claude
    { name: "Antigravity", icon: <TbCpu className="w-5 h-5 text-[#00E5FF]" /> }, // Custom cyan
    { name: "JavaScript", icon: <SiJavascript className="w-5 h-5 text-[#F7DF1E]" /> }, // JS Yellow
    { name: "React / Next.js", icon: <div className="flex -space-x-1"><SiReact className="w-5 h-5 text-[#61DAFB]" /><SiNextdotjs className="w-5 h-5 text-white bg-black rounded-full p-[1px]" /></div> },
    { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5 text-[#339933]" /> }, // Node Green
    { name: "Supabase", icon: <SiSupabase className="w-5 h-5 text-[#3FCF8E]" /> }, // Supabase Green
];

export function TechMarquee() {
    return (
        <section className="relative py-12 flex items-center justify-center overflow-hidden bg-transparent">
            {/* The angled container covering the screen width */}
            <div className="absolute w-[110vw] left-1/2 -translate-x-1/2 -rotate-2 bg-[#050914] border-y border-[#00E5FF]/20 shadow-[0_0_30px_rgba(0,229,255,0.05)] py-4 flex overflow-hidden z-10">
                {/* 
                  Inner flex container containing exactly 4 identical lists. 
                  Animates to -50% to seamlessly loop through the first 2 lists. 
                */}
                <div className="flex animate-marquee whitespace-nowrap w-max">
                    {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-3 px-8 text-slate-300 hover:text-white transition-colors"
                        >
                            {/* Rendering the specific brand icon */}
                            <span>{tech.icon}</span>
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
