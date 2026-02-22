import Link from "next/link";
import { Terminal } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center mx-auto px-4 md:px-8">
                <Link href="/" className="flex items-center space-x-2" aria-label="Ericson Barato Home">
                    <Terminal className="h-6 w-6 text-primary" aria-hidden="true" />
                    <span className="hidden font-bold sm:inline-block">
                        Ericson Barato
                    </span>
                </Link>
                <nav className="flex flex-1 items-center justify-end space-x-6 text-sm font-medium" aria-label="Main Navigation">
                    <Link
                        href="#about"
                        className="transition-colors hover:text-primary text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-2 py-1"
                    >
                        About
                    </Link>
                    <Link
                        href="#skills"
                        className="transition-colors hover:text-primary text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-2 py-1"
                    >
                        Skills
                    </Link>
                    <Link
                        href="#experience"
                        className="transition-colors hover:text-primary text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-2 py-1"
                    >
                        Experience
                    </Link>
                    <Link
                        href="#projects"
                        className="transition-colors hover:text-primary text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-2 py-1"
                    >
                        Workflows
                    </Link>
                    <Link
                        href="#contact"
                        className="transition-colors hover:text-primary text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-2 py-1"
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}
