# AGENTS.md

## 🎯 Project Overview & Architecture
This is a high-performance, modern, single-page developer portfolio built strictly using **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.
* **No Dedicated Backend:** The application is entirely client-rendered or static-site generated (SSG). Do **not** spin up database pools, ORMs, or server-side state machines.
* **Data Sources:** All structural content (Projects, Experience, Skills, Certifications) is driven by static JSON/TypeScript configuration constants inside `src/config/portfolio.ts` or local Markdown/MDX text fixtures.
* **State Management:** Use native React `useState` / `useContext` or lightweight URL state via `next/navigation`.

---

## ⚡ Framework Rules & Local Documentation Routing
* **Agent Documentation Context:** Next.js bundles the framework documentation as native Markdown at the following path:
  `node_modules/next/dist/docs/`
  **Rule:** You must inspect these local directories to cross-reference current API design principles, layout architectures, or routing mechanisms before initializing logic or components. Do not rely exclusively on training weights.
* **File Conventions:** 
  * All functions inside `page.tsx` and `layout.tsx` must use **named `const` functions** (never use anonymous default exports or classic `function` blocks).
  * Functional suffixes: Name pages ending with `Page` (e.g., `const HomePage = () => {}`) and layouts ending with `Layout`.
  * Keep `layout.tsx` files strictly synchronous. Route `page.tsx` code as standard components.

---

## 🎨 Design System & UI Principles
* **Style Engine:** [Tailwind CSS](https://tailwindcss.com "Tailwind CSS Official Documentation") utility-first styling.
* **Component Layer:** [shadcn/ui](https://shadcn.com "shadcn/ui Component Library Docs") (Radix UI primitives). Do not build complex dropdowns, sheets, or tooltips from scratch. Use the existing primitives in `@/components/ui/`.
* **Motion:** [Framer Motion](https://framer.com "Framer Motion Production Documentation") for smooth scroll transitions, project hover interactions, and micro-interactions.
* **Visual Grid:** Keep layout structures focused around modern web visual systems (e.g., asymmetrical Bento grid blocks for project displays).

---

## 🛠️ Implementation Playbook (No-Backend Operations)

### 1. Hardcoded Configuration Schema (`src/config/portfolio.ts`)
Maintain an immutable type structure for all site content. Update this file directly when asked to add projects or experience fields.
```typescript
export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const PORTFOLIO_DATA = {
  profile: { name: "Your Name", role: "Agentic Engineer", bio: "..." },
  projects: [] as Project[],
  skills: [] as string[]
};
```

### 2. Form Submissions (Contact Section)
* **Constraint:** No API routes or local email daemons are allowed.
* **Execution:** Implement one of the following approaches exclusively:
  * Redirect execution context entirely to an external hyperlinked mailto URI (`mailto:your-email@domain.com`).
  * Process submission arrays via client-side handling to third-party endpoints like [Formspree](https://formspree.io "Formspree Form Endpoint System") or [Web3Forms](https://web3forms.com "Web3Forms Form Processing").

### 3. Analytics & Interactivity
* Track external project link engagement through client-side event tracking.
* Utilize local storage hooks (`localStorage`) for managing dark/light theme persistence or client preference configurations.

---

## 🤖 Agent Workflow Expectations
1. **Self-Correction:** If you receive a layout structure error, analyze browser execution contexts and check for hydration mismatches between server-rendered layouts and dynamic client items.
2. **Minimal Footprint:** Write code without adding unapproved dependencies. Prefer standard native browser Web APIs.
3. **No Phantom Code:** Never write mock API service folders or `src/app/api/` logic unless explicitly requested.
