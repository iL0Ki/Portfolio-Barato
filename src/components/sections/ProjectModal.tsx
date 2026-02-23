"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { X, Clock, Wrench } from "lucide-react";
import Image from "next/image";
import { ImageSlider } from "@/components/ui/ImageSlider";
import type { Workflow } from "@/data/projectsData";

interface ProjectModalProps {
    workflow: Workflow;
    onClose: () => void;
}

function isGoogleDriveUrl(url: string): boolean {
    return url.includes("drive.google.com");
}

function MediaDisplay({ workflow }: { workflow: Workflow }) {
    if (workflow.video) {
        if (isGoogleDriveUrl(workflow.video)) {
            return (
                <iframe
                    src={workflow.video}
                    title={workflow.title}
                    allow="autoplay"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full rounded-lg border-none"
                />
            );
        }
        return (
            <video
                src={workflow.video}
                autoPlay
                muted
                loop
                playsInline
                poster={workflow.image}
                className="absolute inset-0 w-full h-full object-contain rounded-lg"
            />
        );
    }

    if (workflow.images && workflow.images.length > 0) {
        return <ImageSlider images={workflow.images} />;
    }

    return (
        <Image
            src={workflow.image}
            alt={workflow.title}
            fill
            className="object-contain"
        />
    );
}

export function ProjectModal({ workflow, onClose }: ProjectModalProps) {
    // Close modal on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    // Prevent body scroll while modal is open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = "unset"; };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
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
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-white rounded-full transition-colors z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    aria-label="Close modal"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="flex flex-col md:flex-row h-full">
                    {/* Left/Top Media Area */}
                    <div className="w-full md:w-1/2 bg-slate-900 overflow-hidden relative min-h-[250px] md:min-h-full flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-slate-800/50">
                        <div className="relative w-full h-full min-h-[200px] md:min-h-[350px]">
                            <MediaDisplay workflow={workflow} />
                        </div>
                    </div>

                    {/* Right/Bottom Details Area */}
                    <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
                        <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            {workflow.title}
                        </h2>

                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 text-justify">
                            {workflow.description}
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
                                        {workflow.timeReduced}
                                    </p>
                                </div>
                            </div>

                            {/* Tools Used Section */}
                            <div>
                                <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-200 mb-3 uppercase tracking-wider font-mono">
                                    <Wrench className="w-4 h-4" /> Tools & Integrations
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {workflow.toolsUsed.map((tool, idx) => (
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
    );
}
