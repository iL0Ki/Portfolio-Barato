# AI Agent Portfolio Instruction Manual

This document serves as the foundational context for any AI (Claude, Codex, Cursor, etc.) assisting with the development, maintenance, or scaling of this portfolio website.

Read these instructions carefully to understand the developer's identity, the technical stack, the desired design system, and the project references before generating code.

---

## 1. Identity & Persona

**Title**: AI Agentic Workflow Developer
**Name**: Ericson Barato
**Goal**: Build a stunning, highly-interactive, and modern portfolio that showcases expertise in AI integrations, full-stack orchestration, and workflow automation.

## 2. Business Value Quote

When writing the hero section or "About Me," incorporate variations of the following core quote to emphasize business impact:
> *"I don't just build AI; I engineer scalable automation. My goal is to transform your complex bottlenecks into flawless, autonomous workflows—saving you hundreds of hours, reducing operational friction, and unlocking your business's true capacity for growth."*

## 3. Technical Stack & Required Skills

When writing code for this project, you must adhere to the best practices outlined in the local `.agent/skills/` directory.

- **Frontend Development** (`frontend-developer`): Use React 19 and Next.js 15. Prioritize modern frontend architecture, responsive layouts, client-side state management, and accessibility.
- **Frontend Security** (`frontend-security-coder`): Implement strict output sanitization, XSS prevention, and secure client-side patterns.
- **Backend Architecture** (`nodejs-backend-patterns`): Build production-ready Node.js services (Express/Fastify) with robust middleware, proper error handling, and robust API design.
- **Styling & Design System** (`tailwind-design-system`): Use Tailwind CSS to build scalable design tokens and reusable component libraries. Stay strictly within the defined design aesthetics (see section 3).
- **Full-Stack Orchestration** (`full-stack-orchestration-full-stack-feature`): Implement seamless integration between the frontend UI, robust backends, and AI agent workflows.

## 3. Design System & Aesthetics

The portfolio must look premium, modern, and highly technical, but **clean and minimalist**. Avoid visually overwhelming or overly cluttered "cyberpunk" elements.

### Color Palette (Based on Reference UI)

- **Backgrounds**: Deep Dark Blues/Blacks. A clean, spacious dark canvas (e.g., `#050914`, `#0f172a` or Tailwind `slate-950`).
- **Primary Accent**: Subtle Cyan / Neon Teal (e.g., `#00E5FF`, `#06b6d4`, `cyan-400`). Used sparingly for thin borders, active states, and key terminology.
- **Secondary Accent**: Muted Orange (e.g., `#f97316`, `orange-500`). Used only for minor punctuation or secondary highlights to avoid visual noise.
- **Text**: Off-white / Light gray for primary readability (`#e2e8f0`, `slate-200`). Muted blue-grays for secondary text (`#94a3b8`, `slate-400`).

### Visual Elements & Typography

- **Typography**: Focus heavily on clean, highly legible Sans-Serif (e.g., `Inter`, `Outfit`, `Space Grotesk`). Monospace is allowed only for rendering explicitly technical data.
- **UI Details**:
  - Extremely subtle grid patterns or solid dark backgrounds. Too much noise is detrimental.
  - Interactive micro-animations should be gentle and smooth, not erratic.
  - Generous negative space (padding/margins) to let the content breathe.
  - Use simple glassmorphism or flat dark-grey cards with 1px cyan borders to delineate sections without feeling heavy.
  - Clean, sharp borders; aim for "elegant precision".

## 4. References & Inspiration

Study the following reference URLs and styles to match the desired vibe:

- **Reference 1**: [Roj Modern Portfolio](https://roj-modern-portfolio.vercel.app/) (Clean, modern, interactive)
- **Reference 2**: [Work with Gen](https://www.workwithgen.space/#) (Automation, CRM, dark bold themes)
- **Vibe summary**: "Elite GoHighLevel automation, cyberpunk precision, dark mode elegance."

## 5. Assets

- **Profile Picture**: The developer's profile picture is provided. When integrating the hero section or "About Me", ensure the image is cleanly masked or blended into the dark theme (e.g., using subtle cyan/orange backlights or drop shadows to make the picture pop).
- **Complementary Background**: A highly technical, sleek, and modern dark mode background representing an AI Agentic Workflow Developer. Think abstract node connections, AI workflow graphs, cyberpunk precision, clean radar lines, and fiber optics on a deep void background with neon cyan and vibrant orange highlights. Use it in the hero or footer sections without cluttering the text readability.

## 6. AI Generation Rules

- **DO NOT** use default, boring Tailwind colors without thought. Use the specific custom colors mentioned above.
- **PROACTIVELY** build components using the `.agent/skills/` guidelines.
- **ALWAYS** implement SEO best practices (Meta tags, semantic HTML, `<h1>` hierarchy).
- Keep the `index.css` or `globals.css` updated with the core CSS variables corresponding to the design system.

## 7. Past Projects & Workflows (To Showcase)

When designing the "Projects" or "Case Studies" section, you must include the following workflows specifically accomplished by Ericson:

1. **RAG for Q&A AI Agent Strategy**:
   - *Details*: Implements a Supabase Vector Store populated by Google Drive file triggers (Upload, Delete, Update). Uses Google Gemini Embeddings to prepare data, powering an Anthropic Chat Model answering questions via vector search.
2. **Q&A AI Agent Delivery System**:
   - *Details*: Elaborates the step-by-step chat process. Receives a message, assembles context, performs embedding & retrieval (RAG) using Simple Memory, and composes a prompt via OpenRouter/Anthropic to output an answer.
3. **Inbox Agent & Triaging**:
   - *Details*: A Gmail Trigger activates a Text Classifier AI that routes incoming messages into categories (Customer Support, Finance/Billing, High Priority, Promotion). Includes dedicated sub-agents to create drafts, reply automatically, or mark as read based on urgency and topic.
4. **Facebook Autoreply Messenger**:
   - *Details*: Uses a Facebook Webhook to instantly process incoming messages. Implements request verification, rate-limit filters, document retrieval, and leverages Google Gemini via OpenRouter Chat Model along with Simple Memory to deliver context-aware automated responses directly to clients.
