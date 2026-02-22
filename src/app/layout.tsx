import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ericson Barato | AI Agentic Workflow Developer",
  description: "Portfolio of Ericson Barato, specializing in scalable automation, full-stack orchestration, and AI integrations.",
  keywords: ["AI Developer", "Agentic Workflows", "Full-Stack Automation", "React", "Next.js", "Ericson Barato"],
  authors: [{ name: "Ericson Barato" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ericsonbarato.com",
    title: "Ericson Barato | AI Agentic Workflow Developer",
    description: "Engineering scalable automation. Portfolio of Ericson Barato, specializing in full-stack orchestration and AI workflows.",
    siteName: "Ericson Barato Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <div className="fixed inset-0 z-[-1] bg-grid opacity-30"></div>
        {children}
      </body>
    </html>
  );
}

