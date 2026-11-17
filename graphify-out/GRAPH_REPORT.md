# Graph Report - vilsend-landing  (2026-11-17)

## Corpus Check
- Corpus is ~7,225 words - fits in a single context window. You may not need a graph.

## Summary
- 199 nodes · 422 edges · 19 communities (12 shown, 7 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.8)
- Token cost: 14,498 input · 0 output

## Community Hubs (Navigation)
- App Shell & SEO
- Landing Page Sections
- Waitlist Form & UI
- Hero & Iconography
- Build Dev Dependencies
- TypeScript Config
- Runtime Dependencies
- FAQ Accordion
- NPM Scripts
- Form & Style Utilities
- Tailwind Config
- Brand Assets
- Next.js Config
- Accordion Dependency
- Label Dependency
- React DOM Dependency
- Zod Dependency

## God Nodes (most connected - your core abstractions)
1. `Reveal()` - 21 edges
2. `cn()` - 18 edges
3. `compilerOptions` - 16 edges
4. `Home()` - 14 edges
5. `react` - 14 edges
6. `next` - 12 edges
7. `Hero()` - 10 edges
8. `Waitlist()` - 9 edges
9. `StaggerGroup()` - 9 edges
10. `StaggerItem()` - 9 edges

## Surprising Connections (you probably didn't know these)
- `SecureServerLandingPage` --conceptually_related_to--> `VilSend V Logo Icon`  [INFERRED]
  README.md → app/icon.png
- `Home()` --calls--> `Footer()`  [EXTRACTED]
  app/page.tsx → components/footer.tsx
- `Home()` --calls--> `Hero()`  [EXTRACTED]
  app/page.tsx → components/hero.tsx
- `Home()` --calls--> `Nav()`  [EXTRACTED]
  app/page.tsx → components/nav.tsx
- `Home()` --calls--> `Comparison()`  [EXTRACTED]
  app/page.tsx → components/sections/comparison.tsx

## Import Cycles
- None detected.

## Communities (19 total, 7 thin omitted)

### Community 0 - "App Shell & SEO"
Cohesion: 0.10
Nodes (20): fraunces, inter, metadata, plexMono, metadata, PrivacyPage(), metadata, TermsPage() (+12 more)

### Community 1 - "Landing Page Sections"
Cohesion: 0.23
Nodes (17): Home(), metadata, ArrowRightIcon(), Reveal(), BuiltFor(), tags, features, Features() (+9 more)

### Community 2 - "Waitlist Form & UI"
Cohesion: 0.18
Nodes (15): AccountType, individualSchema, orgSchema, Waitlist(), Input, InputProps, Label, SelectContent (+7 more)

### Community 3 - "Hero & Iconography"
Cohesion: 0.21
Nodes (14): Hero(), BoltIcon(), CheckIcon(), LaptopIcon(), MonitorIcon(), PhoneIcon(), ShieldIcon(), TabletIcon() (+6 more)

### Community 4 - "Build Dev Dependencies"
Cohesion: 0.15
Nodes (18): devDependencies, autoprefixer@^10.4.20, postcss@^8.4.49, tailwindcss-animate@^1.0.7, @types/node@^22, @types/react@^18, @types/react-dom@^18, typescript@^5 (+10 more)

### Community 5 - "TypeScript Config"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 6 - "Runtime Dependencies"
Cohesion: 0.12
Nodes (17): dependencies, clsx@^2.1.1, framer-motion@^11.11.17, lucide-react@^0.456.0, @radix-ui/react-select@^2.1.2, @radix-ui/react-slot@^1.1.0, @radix-ui/react-toast@^1.2.2, react@^18.3.1 (+9 more)

### Community 7 - "FAQ Accordion"
Cohesion: 0.46
Nodes (5): Faq(), faqs, AccordionContent, AccordionItem, AccordionTrigger

### Community 8 - "NPM Scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

### Community 10 - "Form & Style Utilities"
Cohesion: 0.33
Nodes (4): class-variance-authority@^0.7.0, @hookform/resolvers@^3.9.1, class-variance-authority, @hookform/resolvers

### Community 11 - "Tailwind Config"
Cohesion: 0.50
Nodes (3): tailwindcss@^3.4.15, tailwindcss, config

### Community 12 - "Brand Assets"
Cohesion: 0.67
Nodes (3): VilSend Brand Mark, VilSend V Logo Icon, SecureServerLandingPage

## Knowledge Gaps
- **2 isolated node(s):** `SecureServerLandingPage`, `VilSend Brand Mark`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 63 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `App Shell & SEO` to `Landing Page Sections`, `Build Dev Dependencies`?**
  _High betweenness centrality (0.178) - this node is a cross-community bridge._
- **What connects `SecureServerLandingPage`, `VilSend Brand Mark` to the rest of the system?**
  _2 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App Shell & SEO` be split into smaller, more focused modules?**
  _Cohesion score 0.10252100840336134 - nodes in this community are weakly interconnected._
- **Why does `react` connect `Waitlist Form & UI` to `App Shell & SEO`, `Landing Page Sections`, `Hero & Iconography`, `Build Dev Dependencies`, `Runtime Dependencies`, `FAQ Accordion`?**
  _High betweenness centrality (0.134) - this node is a cross-community bridge._
- **Should `Build Dev Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.14619883040935672 - nodes in this community are weakly interconnected._
- **Why does `dependencies` connect `Runtime Dependencies` to `App Shell & SEO`, `Build Dev Dependencies`, `Form & Style Utilities`, `Accordion Dependency`, `Label Dependency`, `React DOM Dependency`, `Zod Dependency`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._
- **Should `TypeScript Config` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._