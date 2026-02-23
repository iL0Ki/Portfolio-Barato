"use client";

import { motion } from "framer-motion";
import { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { ImageSlider } from "@/components/ui/ImageSlider";
import { ProjectModal } from "@/components/sections/ProjectModal";
import { aiWorkflows, projectsData } from "@/data/projectsData";
import type { Workflow } from "@/data/projectsData";

const TAB_DESCRIPTIONS = {
    workflows: "A showcase of deeply integrated AI systems built to scale businesses, reduce friction, and automate complex tasks autonomously.",
    projects: "Traditional web development projects, custom interfaces, and full-stack applications built for scale.",
} as const;

type TabKey = keyof typeof TAB_DESCRIPTIONS;

const TABS: { key: TabKey; label: string; data: Workflow[] }[] = [
    { key: "projects", label: "Projects", data: projectsData },
    { key: "workflows", label: "Agentic Workflows", data: aiWorkflows },
];

export function Projects() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", skipSnaps: false });
    const [selectedWorkflow, setSelectedWorkflow] = useState<Workflow | null>(null);
    const [activeTab, setActiveTab] = useState<TabKey>("projects");

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    // Re-initialize carousel on tab change to recalculate bounds
    useEffect(() => {
        if (emblaApi) {
            emblaApi.reInit();
            emblaApi.scrollTo(0, true);
        }
    }, [activeTab, emblaApi]);

    const activeData = TABS.find((t) => t.key === activeTab)?.data ?? projectsData;

    return (
        <section id="projects" className="py-24 relative bg-slate-900/20 border-t border-slate-800/50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl inline-block relative pb-4 mb-8"
                    >
                        My <span className="text-primary">Works</span>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-24 bg-primary rounded-full"></div>
                    </motion.h2>

                    {/* Tab Buttons */}
                    <div className="flex flex-row items-center justify-center gap-4 mb-4">
                        {TABS.map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${activeTab === tab.key
                                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                                    : "bg-slate-800/50 text-slate-400 border border-slate-700 hover:bg-slate-800 hover:text-slate-300"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl mx-auto mt-6"
                    >
                        {TAB_DESCRIPTIONS[activeTab]}
                    </motion.p>
                </div>

                {/* Carousel */}
                <div className="relative group">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex touch-pan-y">
                            {activeData.map((item, idx) => (
                                <div className="flex-[0_0_100%] min-w-0 pl-4 md:pl-8 pr-4" key={`${activeTab}-${idx}`}>
                                    <div
                                        className="flex flex-col rounded-2xl border border-slate-800/60 bg-[#0a0f1c] shadow-2xl overflow-hidden mx-auto max-w-5xl cursor-pointer hover:border-primary/50 transition-colors group/card"
                                        onClick={() => setSelectedWorkflow(item)}
                                    >
                                        {/* Card Image */}
                                        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-black/40 border-b border-slate-800/50 p-4 sm:p-8 flex items-center justify-center overflow-hidden">
                                            <div className="absolute inset-0 bg-primary/0 group-hover/card:bg-primary/5 transition-colors z-10" />
                                            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl group-hover/card:scale-[1.02] transition-transform duration-500 ease-out">
                                                {item.images && item.images.length > 0 ? (
                                                    <ImageSlider images={item.images} />
                                                ) : (
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        fill
                                                        className="object-contain transform"
                                                        sizes="(max-width: 1200px) 100vw, 1200px"
                                                        priority={idx === 0}
                                                    />
                                                )}
                                            </div>
                                        </div>

                                        {/* Card Content */}
                                        <div className="p-8 sm:p-10 flex flex-col items-start text-left bg-gradient-to-b from-[#0a0f1c] to-[#05070f]">
                                            <div className="flex justify-between items-center w-full mb-4">
                                                <h3 className="text-3xl font-bold text-primary group-hover/card:text-white transition-colors">
                                                    {item.title}
                                                </h3>
                                                <span className="text-sm font-mono text-slate-400 border border-slate-700 px-3 py-1 rounded-full group-hover/card:border-primary/30 transition-colors">
                                                    Click for details
                                                </span>
                                            </div>
                                            <p className="mb-8 text-base leading-relaxed text-slate-300 max-w-4xl line-clamp-2">
                                                {item.description}
                                            </p>
                                            <div className="flex flex-wrap gap-3 mt-auto">
                                                {item.tags.map((tag, tagIdx) => (
                                                    <span
                                                        key={tagIdx}
                                                        className="px-4 py-1.5 rounded-full border border-[#b89510] text-[#eebc1d] text-sm font-medium bg-[#1e1a0b]/40 backdrop-blur-sm shadow-sm"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={scrollPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full md:-translate-x-12 p-2 text-slate-400 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full hidden sm:block opacity-0 group-hover:opacity-100"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full md:translate-x-12 p-2 text-slate-400 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full hidden sm:block opacity-0 group-hover:opacity-100"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>
                </div>
            </div>

            {/* Project Details Modal */}
            {selectedWorkflow && (
                <ProjectModal
                    workflow={selectedWorkflow}
                    onClose={() => setSelectedWorkflow(null)}
                />
            )}
        </section>
    );
}
