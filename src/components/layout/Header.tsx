import Link from "next/link";
import { Terminal } from "lucide-react";

const NAV_LINK_CLASSES =
    "transition-colors hover:text-primary text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-2 py-1";

const NAV_ITEMS = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Workflows" },
    { href: "#contact", label: "Contact" },
] as const;

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
                    {NAV_ITEMS.map((item) => (
                        <Link key={item.href} href={item.href} className={NAV_LINK_CLASSES}>
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
