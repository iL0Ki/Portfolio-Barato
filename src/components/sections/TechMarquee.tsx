"use client";


import {
    SiN8N, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiSupabase, SiAnthropic, SiGoogle,
    SiMake, SiZapier, SiAirtable, SiHubspot, SiNotion, SiSlack
} from "react-icons/si";
import { TbCpu } from "react-icons/tb";

// Simple GoHighLevel Logo Approximation (Ascending Bar Chart with style)
const GoHighLevelIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M4 16h4v4H4zm6-6h4v10h-4zm6-6h4v16h-4z" />
    </svg>
);

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

const appStack = [
    { name: "Make", icon: <SiMake className="w-5 h-5 text-[#8D4AF8]" /> },
    { name: "GoHighLevel", icon: <GoHighLevelIcon className="w-5 h-5 text-[#00A1F1]" /> }, // GHL Blue
    { name: "Zapier", icon: <SiZapier className="w-5 h-5 text-[#FF4A00]" /> },
    { name: "Airtable", icon: <SiAirtable className="w-5 h-5 text-[#F82B60]" /> },
    { name: "HubSpot", icon: <SiHubspot className="w-5 h-5 text-[#FF7A59]" /> },
    { name: "Notion", icon: <SiNotion className="w-5 h-5 text-[#E2E8F0]" /> },
    { name: "Slack", icon: <SiSlack className="w-5 h-5 text-[#E01E5A]" /> },
];

export function TechMarquee() {
    return (
        <section className="relative py-12 flex flex-col items-center justify-center overflow-hidden bg-transparent gap-0">
            {/* The Top Container (App Marquee running backwards) */}
            <div className="absolute w-[110vw] left-1/2 -translate-x-1/2 -translate-y-10 -rotate-2 bg-[#050914] border-y border-[#00E5FF]/20 shadow-[0_0_30px_rgba(0,229,255,0.05)] py-4 flex overflow-hidden z-10">
                <div className="flex animate-marquee-reverse whitespace-nowrap w-max">
                    {[...appStack, ...appStack, ...appStack, ...appStack].map((app, idx) => (
                        <div
                            key={`app-${idx}`}
                            className="flex items-center gap-3 px-8 text-slate-300 hover:text-white transition-colors"
                        >
                            <span>{app.icon}</span>
                            <span className="font-mono text-lg font-semibold tracking-wider uppercase">
                                {app.name}
                            </span>
                            <span className="ml-8 text-[#00E5FF]/40 text-xl leading-none">&bull;</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* The Bottom Container (Tech Marquee running forwards) */}
            <div className="absolute w-[110vw] left-1/2 -translate-x-1/2 translate-y-6 -rotate-2 bg-[#050914] border-y border-[#00E5FF]/20 shadow-[0_0_30px_rgba(0,229,255,0.05)] py-4 flex overflow-hidden z-20">
                <div className="flex animate-marquee whitespace-nowrap w-max">
                    {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, idx) => (
                        <div
                            key={`tech-${idx}`}
                            className="flex items-center gap-3 px-8 text-slate-300 hover:text-white transition-colors"
                        >
                            <span>{tech.icon}</span>
                            <span className="font-mono text-lg font-semibold tracking-wider uppercase">
                                {tech.name}
                            </span>
                            <span className="ml-8 text-[#00E5FF]/40 text-xl leading-none">&bull;</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Space reservation so the absolute angled divs don't overlap text awkwardly */}
            <div className="h-48 w-full"></div>
        </section>
    );
}
