"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        role: "WordPress Developer & SysAdmin",
        company: "DVelarde Trading Co",
        duration: "Mar. 2020 – Feb. 2024",
        pill: "2020 - 2024",
        description: "Managed and troubleshot hardware and software to optimize company operations with minimal downtime. Served as a WordPress Developer, creating a web-based e-commerce platform for selling company products such as fire extinguishers.",
    },
    {
        role: "Software Developer",
        company: "Pamantasan Lungsod ng Valenzuela",
        duration: "Jan. 2023 – Nov. 2023",
        pill: "2023",
        description: "Developed a desktop application for NSTP student data management, achieving a 40% reduction in data profiling time. Built a secure and smooth voting system for the PLV BSIT department. Gained hands-on experience in database management with MySQL and SQL Server.",
    },
    {
        role: "Intern System Administrator",
        company: "Scheele Laboratories Phils. Inc.",
        duration: "Aug. 2022 – Jan. 2023",
        pill: "2022 - 2023",
        description: "Established data security measures by implementing pfSense to monitor and manage internet access, reducing the risk of data breaches by 70%. Oversaw Ethernet cable installations company-wide, improving connectivity speed and overall employee efficiency.",
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24"
                >
                    <h3 className="text-primary font-mono text-sm tracking-widest uppercase mb-2">
                        Journey
                    </h3>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-5xl">
                        My Experience
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* The Central Vertical Line */}
                    <div
                        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2"
                        aria-hidden="true"
                    />

                    <ol className="space-y-8 md:space-y-12 list-none p-0 m-0">
                        {experiences.map((exp, idx) => {
                            const isEven = idx % 2 === 0;

                            return (
                                <li key={idx} className="relative flex flex-col md:flex-row items-start md:justify-between w-full">

                                    {/* Timeline dot */}
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.2 }}
                                        className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-primary -translate-x-1/2 transform shadow-[0_0_0_4px_rgba(15,23,42,1)] z-10 mt-6 md:mt-8"
                                        aria-hidden="true"
                                    />

                                    {/* Content Container */}
                                    <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${isEven ? "md:pr-8" : "md:order-2 md:pl-8"}`}>
                                        <motion.article
                                            initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5 }}
                                            className="glass-card p-6 md:p-8 hover:border-primary/50 transition-colors group relative flex flex-col gap-4 text-left"
                                        >
                                            <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-4">
                                                <div className="flex flex-col gap-1.5">
                                                    <h4 className="text-xl md:text-2xl font-bold text-slate-100 group-hover:text-primary transition-colors">
                                                        {exp.role}
                                                    </h4>
                                                    <div className="flex flex-wrap items-center gap-2 text-sm font-mono text-slate-400 mt-1">
                                                        <span className="text-slate-200 font-medium">{exp.company}</span>
                                                        <span className="hidden sm:inline-block opacity-50">•</span>
                                                        <span className="bg-slate-800/50 px-2 py-0.5 rounded text-xs text-slate-300">{exp.duration}</span>
                                                    </div>
                                                </div>
                                                <div className="shrink-0 mt-1 xl:mt-0">
                                                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold tracking-wider border border-primary/20">
                                                        {exp.pill}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="w-full h-px bg-slate-800/50 my-1" aria-hidden="true" />

                                            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                                {exp.description}
                                            </p>
                                        </motion.article>
                                    </div>

                                    {/* Spacer for the other side */}
                                    <div className="hidden md:block md:w-5/12" aria-hidden="true" />
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </section>
    );
}
