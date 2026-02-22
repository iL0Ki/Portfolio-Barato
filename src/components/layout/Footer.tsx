export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-background py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row mx-auto px-4 md:px-8">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0 text-center md:text-left">
                    <p className="text-sm leading-loose text-slate-400">
                        Built by <span className="text-slate-100 font-medium">Ericson Barato</span>. Engineering scalable automation.
                    </p>
                </div>
                <nav className="flex gap-4" aria-label="Social Links">
                    <a href="#" className="text-sm text-slate-400 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-2 py-1">GitHub</a>
                    <a href="#" className="text-sm text-slate-400 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-2 py-1">LinkedIn</a>
                    <a href="#" className="text-sm text-slate-400 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-2 py-1">Twitter</a>
                </nav>
            </div>
        </footer>
    );
}
