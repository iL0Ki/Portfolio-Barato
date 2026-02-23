"use client";


import {
    SiN8N, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiSupabase, SiAnthropic, SiGoogle,
    SiMake, SiZapier, SiAirtable, SiHubspot, SiNotion, SiSlack
} from "react-icons/si";
import { TbCpu } from "react-icons/tb";
import type { ReactNode } from "react";

/** Simple GoHighLevel Logo Approximation */
const GoHighLevelIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M4 16h4v4H4zm6-6h4v10h-4zm6-6h4v16h-4z" />
    </svg>
);

interface MarqueeItem {
    name: string;
    icon: ReactNode;
}

const techStack: MarqueeItem[] = [
    { name: "n8n", icon: <SiN8N className="w-5 h-5 text-[#ff6e6e]" /> },
    { name: "Gemini", icon: <SiGoogle className="w-5 h-5 text-[#4285F4]" /> },
    { name: "Claude Code", icon: <SiAnthropic className="w-5 h-5 text-[#D1CEB7]" /> },
    { name: "Antigravity", icon: <TbCpu className="w-5 h-5 text-[#00E5FF]" /> },
    { name: "JavaScript", icon: <SiJavascript className="w-5 h-5 text-[#F7DF1E]" /> },
    { name: "React / Next.js", icon: <div className="flex -space-x-1"><SiReact className="w-5 h-5 text-[#61DAFB]" /><SiNextdotjs className="w-5 h-5 text-white bg-black rounded-full p-[1px]" /></div> },
    { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5 text-[#339933]" /> },
    { name: "Supabase", icon: <SiSupabase className="w-5 h-5 text-[#3FCF8E]" /> },
];

const appStack: MarqueeItem[] = [
    { name: "Make", icon: <SiMake className="w-5 h-5 text-[#8D4AF8]" /> },
    { name: "GoHighLevel", icon: <GoHighLevelIcon className="w-5 h-5 text-[#00A1F1]" /> },
    { name: "Zapier", icon: <SiZapier className="w-5 h-5 text-[#FF4A00]" /> },
    { name: "Airtable", icon: <SiAirtable className="w-5 h-5 text-[#F82B60]" /> },
    { name: "HubSpot", icon: <SiHubspot className="w-5 h-5 text-[#FF7A59]" /> },
    { name: "Notion", icon: <SiNotion className="w-5 h-5 text-[#E2E8F0]" /> },
    { name: "Slack", icon: <SiSlack className="w-5 h-5 text-[#E01E5A]" /> },
];

/** Reusable horizontal marquee strip */
function MarqueeStrip({ items, animationClass }: { items: MarqueeItem[]; animationClass: string }) {
    // Quadruple the items for seamless infinite scrolling
    const repeatedItems = [...items, ...items, ...items, ...items];

    return (
        <div className={`flex ${animationClass} whitespace-nowrap w-max`}>
            {repeatedItems.map((item, idx) => (
                <div
                    key={`${item.name}-${idx}`}
                    className="flex items-center gap-3 px-8 text-slate-300 hover:text-white transition-colors"
                >
                    <span>{item.icon}</span>
                    <span className="font-mono text-lg font-semibold tracking-wider uppercase">
                        {item.name}
                    </span>
                    <span className="ml-8 text-[#00E5FF]/40 text-xl leading-none">&bull;</span>
                </div>
            ))}
        </div>
    );
}

const MARQUEE_STRIP_CLASSES =
    "absolute w-[110vw] left-1/2 -translate-x-1/2 -rotate-2 bg-[#050914] border-y border-[#00E5FF]/20 shadow-[0_0_30px_rgba(0,229,255,0.05)] py-4 flex overflow-hidden";

export function TechMarquee() {
    return (
        <section className="relative py-12 flex flex-col items-center justify-center overflow-hidden bg-transparent gap-0">
            {/* Top strip (apps, reverse direction) */}
            <div className={`${MARQUEE_STRIP_CLASSES} -translate-y-10 z-10`}>
                <MarqueeStrip items={appStack} animationClass="animate-marquee-reverse" />
            </div>

            {/* Bottom strip (tech, forward direction) */}
            <div className={`${MARQUEE_STRIP_CLASSES} translate-y-6 z-20`}>
                <MarqueeStrip items={techStack} animationClass="animate-marquee" />
            </div>

            {/* Space reservation so the absolute angled divs don't overlap text awkwardly */}
            <div className="h-48 w-full"></div>
        </section>
    );
}
