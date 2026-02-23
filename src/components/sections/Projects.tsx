"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X, Clock, Wrench } from "lucide-react";
import Image from "next/image";

interface Workflow {
    title: string;
    description: string;
    image: string;
    images?: string[];
    video?: string;
    tags: string[];
    toolsUsed: string[];
    timeReduced: string;
}

const aiWorkflows: Workflow[] = [
    {
        title: "RAG for Q&A AI Agent Strategy",
        description: "Implements a Supabase Vector Store populated by Google Drive file triggers. Uses Google Gemini Embeddings to prepare data, powering an Anthropic Chat Model answering questions via vector search.",
        image: "/projects/rag-qa.jpg",
        video: "https://drive.google.com/file/d/1KgoGwlPAl8ZwOVjhJwulHZrnmlMPXe9n/preview",
        tags: ["Supabase", "Gemini", "Anthropic", "Vector Search", "Google Drive"],
        toolsUsed: ["n8n", "Supabase", "Google Drive", "Google Gemini", "Anthropic Claude"],
        timeReduced: "Instantly retrieves accurate handbook answers, eliminating 5+ hours/week of manual knowledge lookup",
    },
    {
        title: "Q&A AI Agent Delivery System",
        description: "Elaborates the step-by-step chat process. Receives a message, assembles context, performs embedding & retrieval (RAG) using Simple Memory, and composes a prompt via OpenRouter/Anthropic to output an answer.",
        image: "/projects/qa-delivery.jpg",
        tags: ["OpenRouter", "RAG", "Simple Memory", "Context Assembly", "LLM"],
        toolsUsed: ["n8n", "OpenRouter", "Anthropic Claude", "Simple Memory"],
        timeReduced: "Automates 90% of routine client questions instantly, reducing response times from hours to seconds",
    },
    {
        title: "Facebook Autoreply Messenger",
        description: "Uses a Facebook Webhook to instantly process incoming messages. Implements request verification, filters, document retrieval, and leverages Google Gemini via OpenRouter Chat Model along with Simple Memory.",
        image: "/projects/fb-autoreply.jpg",
        images: [
            "/projects/fb-slide-1.png",
            "/projects/fb-slide-2.png",
            "/projects/fb-slide-3.png"
        ],
        video: "https://drive.google.com/file/d/1yr2d8YWZa77MmYEHntDhwCDjfWu9qdtU/preview",
        tags: ["Facebook API", "Webhook", "Gemini", "OpenRouter", "Auto-responder"],
        toolsUsed: ["n8n", "Facebook Messenger API", "Google Gemini", "OpenRouter", "Simple Memory"],
        timeReduced: "Provides 24/7 immediate responses, saving 20+ hours/week on initial client triage and engagement",
    },
    {
        title: "GHL Appointment Automation",
        description: "A comprehensive GoHighLevel workflow designed to manage the entire appointment lifecycle. It handles everything from initial booking confirmation to intelligent SMS/Email reminders at critical intervals before the meeting.",
        image: "/projects/ghl-slide-1.png",
        images: [
            "/projects/ghl-slide-1.png",
            "/projects/ghl-slide-2.png"
        ],
        video: "/projects/inboxAgent.mp4",
        tags: ["GoHighLevel", "Automation", "CRM", "Scheduling"],
        toolsUsed: ["GoHighLevel", "GHL Workflows", "Twilio", "Mailgun"],
        timeReduced: "Virtually eliminates no-shows and automates 100% of standard pre-meeting communication",
    },
    {
        title: "GHL Lead Nurture Automation",
        description: "A comprehensive multi-week automated follow-up sequence built in GoHighLevel to engage cold or new leads. Delivers a staggered series of tailored nurture emails with strategic wait periods to organically drive form submissions down the sales funnel.",
        image: "/projects/ghl-slide-3.jpg",
        video: "/projects/inboxAgent.mp4",
        tags: ["GoHighLevel", "Email Marketing", "Lead Nurture", "Sales Pipeline"],
        toolsUsed: ["GoHighLevel", "GHL Campaigns", "Lead Scoring", "Email Automation"],
        timeReduced: "Replaces hours of manual follow-ups per week with a consistent, 24/7 automated sales pipeline",
    },
    {
        title: "Inbox Agent",
        description: "An intelligent Gmail automation agent that classifies incoming emails, routes them to specific queues like support or finance, auto-drafts replies using Anthropic Claude, and intelligently handles priority and promotional messages.",
        image: "/projects/inbox-agent-thumbnail-new.jpg",
        video: "https://drive.google.com/file/d/1ytuKp5F_R6J7_ZAN38WaEqNDdsQfmTlx/preview",
        tags: ["Gmail API", "Claude AI", "Email Classification", "Workflow"],
        toolsUsed: ["n8n", "Gmail API", "Anthropic Claude", "Text Classifier"],
        timeReduced: "Saves 15+ hours/week by pre-drafting responses and filtering noise from primary inboxes",
    }
];

const projectsData: Workflow[] = [
    {
        title: "Employee Management System",
        description: "A comprehensive Employee Dashboard for Swirls Arts.Inc, designed to streamline HR operations, track performance metrics, and centrally manage staff data securely.",
        image: "/projects/ems-thumbnail.jpg",
        images: [
            "/projects/ems-slide-1.png",
            "/projects/ems-slide-2.png",
            "/projects/ems-slide-3.png",
            "/projects/ems-slide-4.png",
            "/projects/ems-slide-5.png"
        ],
        video: "/projects/EMS.mp4",
        tags: ["Dashboard", "Portal", "Authentication", "System"],
        toolsUsed: ["React", "Next.js", "Tailwind CSS", "Prisma"],
        timeReduced: "Digitizes manual workflows, saving an estimated 12+ hours per week of admin data entry",
    },
    {
        title: "Automated Blog Scraper",
        description: "A specialized scraping utility designed to automatically extract article content, metadata, and media from targeted blog sites, formatting the output for direct CMS ingestion.",
        image: "/projects/scrape-thumbnail.png",
        images: [
            "/projects/scraper-slide-1.png",
            "/projects/scraper-slide-2.jpg",
            "/projects/scraper-slide-3.png",
            "/projects/scraper-slide-4.png"
        ],
        video: "/projects/scrape-blog.mp4",
        tags: ["Web Scraping", "Automation", "Data Extraction", "Python"],
        toolsUsed: ["Python", "BeautifulSoup", "Playwright", "Pandas"],
        timeReduced: "Eliminates manual copy-pasting, reducing content migration time from days to minutes",
    }
];

function ImageSlider({ images }: { images: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length === 0) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    if (!images.length) return null;

    return (
        <div className="relative w-full h-full">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        fill
                        className="object-contain transform"
                        sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export function Projects() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", skipSnaps: false });
    const [selectedWorkflow, setSelectedWorkflow] = useState<Workflow | null>(null);
    const [activeTab, setActiveTab] = useState<"workflows" | "projects">("projects");

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    // Handle Escape key to close modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedWorkflow(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedWorkflow) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [selectedWorkflow]);

    // Re-initialize carousel on tab change to recalculate bounds
    useEffect(() => {
        if (emblaApi) {
            emblaApi.reInit();
            emblaApi.scrollTo(0, true);
        }
    }, [activeTab, emblaApi]);

    const activeData = activeTab === "workflows" ? aiWorkflows : projectsData;

    return (
        <section id="projects" className="py-24 relative bg-slate-900/20 border-t border-slate-800/50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
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

                    <div className="flex flex-row items-center justify-center gap-4 mb-4">
                        <button
                            onClick={() => setActiveTab("projects")}
                            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${activeTab === "projects"
                                ? "bg-primary text-white shadow-lg shadow-primary/25"
                                : "bg-slate-800/50 text-slate-400 border border-slate-700 hover:bg-slate-800 hover:text-slate-300"
                                }`}
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => setActiveTab("workflows")}
                            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${activeTab === "workflows"
                                ? "bg-primary text-white shadow-lg shadow-primary/25"
                                : "bg-slate-800/50 text-slate-400 border border-slate-700 hover:bg-slate-800 hover:text-slate-300"
                                }`}
                        >
                            Agentic Workflows
                        </button>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl mx-auto mt-6"
                    >
                        {activeTab === "workflows"
                            ? "A showcase of deeply integrated AI systems built to scale businesses, reduce friction, and automate complex tasks autonomously."
                            : "Traditional web development projects, custom interfaces, and full-stack applications built for scale."
                        }
                    </motion.p>
                </div>

                <div className="relative group">
                    {/* Embla Carousel Viewport */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex touch-pan-y">
                            {activeData.map((item, idx) => (
                                <div className="flex-[0_0_100%] min-w-0 pl-4 md:pl-8 pr-4" key={`${activeTab}-${idx}`}>
                                    <div
                                        className="flex flex-col rounded-2xl border border-slate-800/60 bg-[#0a0f1c] shadow-2xl overflow-hidden mx-auto max-w-5xl cursor-pointer hover:border-primary/50 transition-colors group/card"
                                        onClick={() => setSelectedWorkflow(item)}
                                    >
                                        {/* Top Image Section */}
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

                                        {/* Bottom Content Section */}
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

            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedWorkflow && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedWorkflow(null)}
                            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
                            aria-hidden="true"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-4xl max-h-full overflow-y-auto bg-[#0a0f1c] border border-slate-700/50 rounded-2xl shadow-2xl z-10 overscroll-contain"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-title"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedWorkflow(null)}
                                className="absolute top-4 right-4 p-2 bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-white rounded-full transition-colors z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="flex flex-col md:flex-row h-full">
                                {/* Left/Top Image Area */}
                                <div className="w-full md:w-1/2 bg-slate-900 overflow-hidden relative min-h-[250px] md:min-h-full flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-slate-800/50">
                                    <div className="relative w-full h-full min-h-[200px] md:min-h-[350px]">
                                        {selectedWorkflow.video ? (
                                            selectedWorkflow.video.includes('drive.google.com') ? (
                                                <iframe
                                                    src={selectedWorkflow.video}
                                                    title={selectedWorkflow.title}
                                                    allow="autoplay"
                                                    allowFullScreen
                                                    className="absolute inset-0 w-full h-full rounded-lg border-none"
                                                />
                                            ) : (
                                                <video
                                                    src={selectedWorkflow.video}
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                    poster={selectedWorkflow.image}
                                                    className="absolute inset-0 w-full h-full object-contain rounded-lg"
                                                />
                                            )
                                        ) : selectedWorkflow.images && selectedWorkflow.images.length > 0 ? (
                                            <ImageSlider images={selectedWorkflow.images} />
                                        ) : (
                                            <Image
                                                src={selectedWorkflow.image}
                                                alt={selectedWorkflow.title}
                                                fill
                                                className="object-contain"
                                            />
                                        )}
                                    </div>
                                </div>

                                {/* Right/Bottom Details Area */}
                                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
                                    <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                        {selectedWorkflow.title}
                                    </h2>

                                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 text-justify">
                                        {selectedWorkflow.description}
                                    </p>

                                    <div className="space-y-6 mt-auto">
                                        {/* Time Reduced Metrics */}
                                        <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-start gap-4">
                                            <div className="p-2 bg-primary/10 rounded-lg shrink-0 text-primary">
                                                <Clock className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-semibold text-slate-200 mb-1 uppercase tracking-wider font-mono">
                                                    Estimated Time Reduced
                                                </h4>
                                                <p className="text-primary font-medium">
                                                    {selectedWorkflow.timeReduced}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Tools Used Section */}
                                        <div>
                                            <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-200 mb-3 uppercase tracking-wider font-mono">
                                                <Wrench className="w-4 h-4" /> Tools & Integrations
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedWorkflow.toolsUsed.map((tool, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1.5 bg-slate-800/50 border border-slate-700 text-slate-200 rounded-md text-sm font-medium shadow-sm hover:border-slate-500 hover:bg-slate-800 transition-colors"
                                                    >
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
