/** Data definitions for the Projects / Agentic Workflows section */

export interface Workflow {
    title: string;
    description: string;
    image: string;
    images?: string[];
    video?: string;
    tags: string[];
    toolsUsed: string[];
    timeReduced: string;
}

export const aiWorkflows: Workflow[] = [
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

export const projectsData: Workflow[] = [
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
        video: "https://drive.google.com/file/d/1iNbBWWGGMhGhZhJKVK5FqIe83TI_BZUz/preview",
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
        video: "https://drive.google.com/file/d/1jFYCHfhBQJE1Vd4SBEKEStAKj911hMQA/preview",
        tags: ["Web Scraping", "Automation", "Data Extraction", "Python"],
        toolsUsed: ["Python", "BeautifulSoup", "Playwright", "Pandas"],
        timeReduced: "Eliminates manual copy-pasting, reducing content migration time from days to minutes",
    }
];
