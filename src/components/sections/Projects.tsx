"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Database, MessageSquare, Mail, MessageCircle } from "lucide-react";

import Image from "next/image";

const workflows = [
    {
        title: "RAG for Q&A AI Agent Strategy",
        description: "Implements a Supabase Vector Store populated by Google Drive file triggers (Upload, Delete, Update). Uses Google Gemini Embeddings to prepare data, powering an Anthropic Chat Model answering questions via vector search.",
        icon: <Database className="h-6 w-6 text-primary" />,
        image: "/projects/rag-qa.jpg",
        delay: 0.1
    },
    {
        title: "Q&A AI Agent Delivery System",
        description: "Elaborates the step-by-step chat process. Receives a message, assembles context, performs embedding & retrieval (RAG) using Simple Memory, and composes a prompt via OpenRouter/Anthropic to output an answer.",
        icon: <MessageSquare className="h-6 w-6 text-primary" />,
        image: "/projects/qa-delivery.jpg",
        delay: 0.2
    },
    {
        title: "Inbox Agent & Triaging",
        description: "A Gmail Trigger activates a Text Classifier AI that routes incoming messages into categories (Customer Support, Finance/Billing, High Priority, Promotion). Dedicated sub-agents create drafts, reply automatically, or mark as read.",
        icon: <Mail className="h-6 w-6 text-primary" />,
        image: "/projects/inbox-agent.jpg",
        delay: 0.3
    },
    {
        title: "Facebook Autoreply Messenger",
        description: "Uses a Facebook Webhook to instantly process incoming messages. Implements request verification, filters, document retrieval, and leverages Google Gemini via OpenRouter Chat Model along with Simple Memory.",
        icon: <MessageCircle className="h-6 w-6 text-primary" />,
        image: "/projects/fb-autoreply.jpg",
        delay: 0.4
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-24 relative bg-slate-900/20 border-t border-slate-800/50">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <div className="text-center mb-16">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {workflows.map((workflow, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: workflow.delay, duration: 0.5 }}
                        >
                            <Card className="h-full hover:border-primary/50 transition-colors duration-300 group flex flex-col overflow-hidden">
                                <CardHeader>
                                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800 border border-slate-700 group-hover:bg-primary/10 transition-colors">
                                        {workflow.icon}
                                    </div>
                                    <CardTitle className="text-xl text-slate-100">{workflow.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col flex-1">
                                    <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-md border border-slate-800/60 bg-slate-900/50">
                                        <Image
                                            src={workflow.image}
                                            alt={workflow.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                    <CardDescription className="text-sm leading-relaxed text-slate-400 mt-auto">
                                        {workflow.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
