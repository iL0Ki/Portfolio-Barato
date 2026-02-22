"use client";

import { motion } from "framer-motion";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const workflows = [
    {
        title: "Inbox Agent",
        description: "Gmail automation agent that classifies incoming emails, routes to support/finance/priority queues, auto-drafts replies using Anthropic Claude, and manages promotions.",
        image: "/projects/inbox-agent.jpg",
        tags: ["Gmail API", "Claude AI", "Automation", "Email Classification", "Workflow"],
    },
    {
        title: "RAG for Q&A AI Agent Strategy",
        description: "Implements a Supabase Vector Store populated by Google Drive file triggers. Uses Google Gemini Embeddings to prepare data, powering an Anthropic Chat Model answering questions via vector search.",
        image: "/projects/rag-qa.jpg",
        tags: ["Supabase", "Gemini", "Anthropic", "Vector Search", "Google Drive"],
    },
    {
        title: "Q&A AI Agent Delivery System",
        description: "Elaborates the step-by-step chat process. Receives a message, assembles context, performs embedding & retrieval (RAG) using Simple Memory, and composes a prompt via OpenRouter/Anthropic to output an answer.",
        image: "/projects/qa-delivery.jpg",
        tags: ["OpenRouter", "RAG", "Simple Memory", "Context Assembly", "LLM"],
    },
    {
        title: "Facebook Autoreply Messenger",
        description: "Uses a Facebook Webhook to instantly process incoming messages. Implements request verification, filters, document retrieval, and leverages Google Gemini via OpenRouter Chat Model along with Simple Memory.",
        image: "/projects/fb-autoreply.jpg",
        tags: ["Facebook API", "Webhook", "Gemini", "OpenRouter", "Auto-responder"],
    }
];

export function Projects() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", skipSnaps: false });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section id="projects" className="py-24 relative bg-slate-900/20 border-t border-slate-800/50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl mb-4"
                    >
                        Agentic Workflows & <span className="text-primary">Projects</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl mx-auto"
                    >
                        A showcase of deeply integrated AI systems built to scale businesses, reduce friction, and automate complex tasks autonomously.
                    </motion.p>
                </div>

                <div className="relative group">
                    {/* Embla Carousel Viewport */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex touch-pan-y">
                            {workflows.map((workflow, idx) => (
                                <div className="flex-[0_0_100%] min-w-0 pl-4 md:pl-8 pr-4" key={idx}>
                                    <div className="flex flex-col rounded-2xl border border-slate-800/60 bg-[#0a0f1c] shadow-2xl overflow-hidden mx-auto max-w-5xl">
                                        {/* Top Image Section */}
                                        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-black/40 border-b border-slate-800/50 p-4 sm:p-8 flex items-center justify-center">
                                            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                                                <Image
                                                    src={workflow.image}
                                                    alt={workflow.title}
                                                    fill
                                                    className="object-contain"
                                                    sizes="(max-width: 1200px) 100vw, 1200px"
                                                    priority={idx === 0}
                                                />
                                            </div>
                                        </div>

                                        {/* Bottom Content Section */}
                                        <div className="p-8 sm:p-10 flex flex-col items-start text-left bg-gradient-to-b from-[#0a0f1c] to-[#05070f]">
                                            <h3 className="mb-4 text-3xl font-bold text-primary">
                                                {workflow.title}
                                            </h3>
                                            <p className="mb-8 text-base leading-relaxed text-slate-300 max-w-4xl">
                                                {workflow.description}
                                            </p>
                                            <div className="flex flex-wrap gap-3 mt-auto">
                                                {workflow.tags.map((tag, tagIdx) => (
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

                    {/* Navigation Buttons (Absolute positioning outside the cards) */}
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
        </section>
    );
}
