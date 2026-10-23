// All site content lives here. Edit this file, then run: node build.mjs
// Style rule: no em dashes or en dashes anywhere (the build fails if one slips in).

export const SITE = {
  url: 'https://www.ebubesamuel.online',
  name: 'Ebubechukwu Samuel',
  short: 'Ebube.',
  title: 'AI-Powered Product Designer & Builder',
  tagline: 'I combine strong visual design with AI-assisted product building to turn ideas into useful digital experiences.',
  description: 'Ebubechukwu Samuel is an AI-powered product designer and builder in Nigeria, with 5+ years of visual design experience. He creates clear product interfaces, brand systems, and working web experiences using Figma and AI-assisted tools.',
  email: 'ebubechkwu.samuel.com@gmail.com',
  social: [
    { label: 'GitHub', url: 'https://github.com/ebubechukwusamuel' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/ebubechukwusamuel' },
    { label: 'X', url: 'https://x.com/ebubechukwu_sam' },
    { label: 'Instagram', url: 'https://www.instagram.com/ebubechukwu.sam/' },
    { label: 'Behance', url: 'https://www.behance.net/ebubecsamuel' },
  ],
};

export const SERVICES = [
  { id: 'uiux', size: 'wide', dark: true, title: 'Product Design & UI/UX', icon: 'layout', colors: ['#2997ff', '#5e5ce6'],
    text: 'User flows, prototypes, and polished mobile and web interfaces shaped around a clear user problem.' },
  { id: 'web', size: 'wide', dark: false, title: 'AI-Assisted Product Building', icon: 'code', colors: ['#30d158', '#0a84ff'],
    text: 'I use AI coding tools to turn product ideas and designs into working web experiences, then refine the details.' },
  { id: 'brand', size: 'third', dark: false, title: 'Brand Identity', icon: 'palette', colors: ['#bf5af2', '#ff375f'],
    text: 'Logos, color palettes, typography and guidelines that make a business memorable and consistent.' },
  { id: 'graphic', size: 'third', dark: false, title: 'Graphic Design', icon: 'image', colors: ['#ff9f0a', '#ff375f'],
    text: 'Flyers, banners, social media graphics and event materials for print and digital.' },
  { id: 'mobile', size: 'third', dark: false, title: 'Mobile Apps', icon: 'phone', colors: ['#ff9f0a', '#ff375f'],
    text: 'Mobile-first product experiences for iOS and Android, from onboarding to everyday use.' },
  { id: 'presentation', size: 'third', dark: true, title: 'Presentation Design', icon: 'slides', colors: ['#2997ff', '#5e5ce6'],
    text: 'Pitch, corporate and consulting decks in PowerPoint, Keynote and Google Slides that tell a clear story.' },
  { id: 'data', size: 'third', dark: true, title: 'Infographics & Data Visuals', icon: 'chart', colors: ['#30d158', '#0a84ff'],
    text: 'Complex data and ideas turned into clear infographics and visual stories people understand.' },
  { id: 'ai', size: 'third', dark: true, title: 'AI Automation', icon: 'chat', colors: ['#30d158', '#0a84ff'],
    text: 'Workflow automations and chatbots with n8n, AI and browser automation that save time.' },
];
export const PROJECTS = [
  {
    slug: 'smart-pocket', cover: 'smart-pocket-home.png', shot: true,
    title: 'Smart Pocket', category: 'Product Design', filters: ['design'],
    summary: 'A mobile finance concept that helps people give each part of one income a clear purpose through named money pockets.',
    overview: 'Smart Pocket is a mobile finance concept for people who manage several priorities from one income. Set income and timing, split money into named pockets, then track what is available and spent. Auto-split rules make the plan visible. The Invest tab clearly shows that investing is not open yet and offers learning content while a licensed partner is not connected.',
    challenge: 'One income has to cover bills, everyday spending, emergencies, and personal goals. Without a clear plan, it can be hard to see what money is already committed and what is still free to use.',
    approach: 'I mapped the journey from income setup to assigning money to pockets, then made the home screen show total balance, unallocated money, monthly spending, and pocket progress. I kept auto-split visible instead of burying it in settings. For investing, I used a clear unavailable state and learning content rather than presenting unverified returns as live financial information.',
    nextSteps: 'I would test whether people understand the difference between total balance, unallocated money, and pocket balances; verify that the displayed amounts reconcile across screens; and run usability tests on income setup and auto-split. I would use those findings to refine the wording, accessibility, error states, and trust cues. User testing and live financial integrations have not been completed yet.',
    scopeNote: 'I deliberately did not present investing as a live feature. The Figma design says a licensed investment partner is not connected yet, so the Invest screen explains the limitation and offers learning content instead of implying that users can buy funds or earn the sample returns shown in earlier concept screens.',
    caseNote: 'This is a concept design. Amounts shown are sample interface content, not live financial data. The Invest tab is unavailable until a licensed investment partner is connected.',
    decisions: [
      'Keep total balance and unallocated money near the top to show what has not been assigned.',
      'Use named pockets with remaining amounts and progress bars so budget status is easy to scan.',
      'Make spending, savings, and locked states filterable on the Pockets screen.',
      'Show auto-split status on the home screen so people can tell when allocation rules are active.',
      'Keep investing unavailable until a licensed partner is connected, and use the Invest tab for education rather than unverified balances or returns.'
    ],
    screens: [
      { src: 'smart-pocket-home.png', title: 'Home dashboard', alt: 'Smart Pocket home screen showing total balance, unallocated money, spending summary, pocket balances, and auto-split status' },
      { src: 'smart-pocket-pockets.png', title: 'Pockets overview', alt: 'Smart Pocket pockets screen with All, Spending, Savings, and Locked filters and pocket balances' },
      { src: 'smart-pocket-income-setup.png', title: 'Income setup', alt: 'Smart Pocket income setup screen with monthly income, income type, and income timing fields' },
      { src: 'smart-pocket-invest.png', title: 'Invest availability state', alt: 'Smart Pocket Invest screen explaining that investing is not open yet and providing financial learning content' }
    ],
    caption: 'Home dashboard screen from the Smart Pocket Figma concept.',
    tags: ['Product Design', 'Figma', 'Personal Finance', 'Mobile UI', 'Interaction Design'],
    features: [
      'Set monthly income, income type, and expected income timing before building a plan.',
      'Organise one balance into named pockets such as rent, emergency, transport, family, giving, fun, and eating out.',
      'View remaining pocket amounts and spending progress from the home dashboard.',
      'Review spending activity and transaction categories in one place.',
      'Set and display auto-split rules for planned pockets.',
      'Show a clear unavailable state and financial learning content for investing until a licensed investment partner is connected.'
    ],
    links: [{ label: 'View Figma screens', url: 'https://www.figma.com/design/TRAToW0hPwhjmdrgJLd8Lq' }]
  },
  { slug: 'kredo', shot: true, title: 'Kredo', category: 'Development', filters: ['web'],
    summary: 'All-in-one freelancer OS: proposals, contracts, invoices, time tracking, and client portal in one unified app.',
    overview: 'Replaces 5+ tools freelancers juggle with one seamless experience. One tool covers proposals, e-signature contracts, invoicing with Paystack and Stripe, time tracking, expense management, and a client portal for collaboration.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Paystack', 'Stripe'],
    features: ['Unified dashboard replacing 5+ freelance tools', 'Proposal and contract generation with e-signatures', 'Invoice creation with Paystack & Stripe payment processing', 'Time tracking and expense management', 'Client portal for project collaboration and file sharing'],
    links: [{ label: 'Live Site', url: 'https://kredo-gray.vercel.app' }] },
  {
    "slug": "nuvora",
    "cover": "nuvora-patient-home.png",
    "shot": true,
    "title": "Nuvora",
    "category": "Product Design",
    "filters": [
      "design",
      "ai",
      "web"
    ],
    "summary": "An AI-assisted healthcare platform designed to help people understand health concerns, keep track of care, and reach qualified professionals.",
    "overview": "Nuvora is an AI and human healthcare product with separate patient, doctor and admin experiences. The current app includes a patient home, AI consultation, doctor booking, appointments, health records and timeline, with a doctor portal for schedules and earnings. The product aims to make healthcare decisions easier to navigate without presenting AI as a replacement for professional care.",
    "challenge": "When people have a health concern, they may not know what the information means, where to go next, or how to reach the right professional. Nuvora brings guidance, health records and routes to human care into one product journey.",
    "approach": "I built a connected product experience across patient and doctor tasks. For patients, the home screen prioritises starting a health conversation and quick access to booking, hospital search, lab reading and records. The doctor workspace keeps appointment status and earnings information visible. The interface direction uses a dark clinical palette, restrained green and cyan accents, and clear information grouping.",
    "nextSteps": "I would validate the language used in AI health guidance with healthcare professionals, test escalation and emergency states, check privacy and consent flows, and test patient onboarding and doctor booking with users. Clinical safety, user outcomes and every live integration need separate verification; the screenshots alone do not establish those results.",
    "scopeNote": "This case study focuses on navigation and product structure: ask, understand, track, and connect to human care. The AI should support health education and decision-making, not claim to replace professional diagnosis. Doctor earnings are presented as ledger records, not as a stored-value wallet.",
    "caseNote": "These editable reference screens were recreated from the current project code because an older light-blue mockup did not match the current dark clinical interface. Names and figures are illustrative. The screens are not evidence of clinical validation or confirmed live integration status.",
    "decisions": [
      "Keep the patient home focused on the next action instead of showing every health feature at once.",
      "Provide direct paths to AI consultation, doctor booking, hospital search, lab reading and health records.",
      "Separate the patient portal from the doctor workspace because their tasks and permissions differ.",
      "Show doctor earnings as a ledger with payout status, not as a wallet that holds user funds.",
      "Use explicit human-care escalation and safety wording rather than suggesting AI replaces clinicians."
    ],
    "screens": [
      {
        "src": "nuvora-patient-home.png",
        "title": "Patient home",
        "alt": "Editable reference for the Nuvora patient home screen, with health guide and quick actions"
      },
      {
        "src": "nuvora-doctor-portal.png",
        "title": "Doctor portal",
        "alt": "Editable reference for the Nuvora doctor dashboard with appointments, earnings and verification state"
      }
    ],
    "caption": "Nuvora patient home reference, recreated from the current app implementation.",
    "tags": [
      "Product Design",
      "Healthcare",
      "AI-assisted product",
      "Patient experience",
      "Doctor portal",
      "Next.js"
    ],
    "features": [
      "Patient home with quick access to health conversation and care tasks.",
      "AI consultation and plain-language health guidance experience.",
      "Doctor discovery, booking and appointment management routes.",
      "Health timeline, prescriptions, lab reader and personal records.",
      "Separate doctor workspace for schedules, appointments and earnings history.",
      "Admin and operational routes for platform management."
    ],
    "links": [
      {
        "label": "Open Nuvora app",
        "url": "https://nuvora-kappa.vercel.app"
      },
      {
        "label": "View editable UI references",
        "url": "https://www.figma.com/design/tax8ZIyDdVyp4loUr5KSVP"
      },
      {
        "label": "View project source",
        "url": "https://github.com/ebubechukwusamuel/my-assistant/tree/master/projects/nuvora"
      }
    ]
  },
  {
    "slug": "fundi",
    "cover": "fundi-dashboard.png",
    "shot": true,
    "title": "Fundi",
    "category": "Product Design",
    "filters": [
      "design",
      "ai",
      "web"
    ],
    "summary": "A personal finance assistant for viewing transactions, planning budgets, tracking savings goals and making sense of spending.",
    "overview": "Fundi is a personal finance product with web and mobile interfaces. It brings balances, transaction activity, budgets, goals and AI-generated insights into one view, with account connection flows planned around open-banking providers. The interface uses a dark finance dashboard with emerald accents so money movement, progress and alerts are easy to scan.",
    "challenge": "Money information is often scattered across account screens, notes and mental calculations. People need to see what came in, what went out, which budgets are getting close to their limits and what they can adjust next.",
    "approach": "I organised the core experience around a finance snapshot, recent activity, budget progress and insights. Transactions can be reviewed separately, while the AI insights area gives context to potential budget alerts, spending patterns and saving habits. Web and mobile screens follow the same dark palette and green highlight system.",
    "nextSteps": "I would test whether people understand transaction categories, budget progress and insight wording without over-trusting automated suggestions. I would also test account-link failure, duplicate transactions, stale balances, low-data states, privacy consent and how a user can correct an insight that does not match their situation. Metrics and user outcomes should only be added after real testing.",
    "scopeNote": "The AI features are framed as decision support, not financial advice. Account connection and transaction refresh states need testing against real provider responses, and all demo values must remain clearly labelled as sample content.",
    "caseNote": "These editable reference screens were recreated from the current Fundi app structure and design tokens. The displayed transaction rows and finance figures are illustrative sample data, not real user balances or performance results.",
    "decisions": [
      "Put balance, income, expenses and savings rate together for a quick financial snapshot.",
      "Keep recent transactions close to the summary so users can verify what changed.",
      "Show budget progress using both amounts and a simple visual indicator.",
      "Separate AI insights into alerts, spending patterns and practical saving prompts.",
      "Treat bank linking and data refresh as trust-critical flows, with clear success, failure and stale-data states."
    ],
    "screens": [
      {
        "src": "fundi-dashboard.png",
        "title": "Finance dashboard",
        "alt": "Editable reference for Fundi's overview dashboard with balance, income, expenses, transactions, budgets and insights"
      },
      {
        "src": "fundi-ai-insights.png",
        "title": "AI insights",
        "alt": "Editable reference for Fundi's AI insights area with budget alert, spending pattern and savings prompt"
      }
    ],
    "caption": "Fundi dashboard reference, recreated from the current web app design tokens and information structure.",
    "tags": [
      "Product Design",
      "Personal Finance",
      "Mobile and web",
      "AI insights",
      "Dashboard UI",
      "Open banking"
    ],
    "features": [
      "Dashboard summary for balances, income, expenses and savings rate.",
      "Transaction list with income and expense categories.",
      "Budget setup and progress tracking by category.",
      "Savings goals and progress review.",
      "AI-generated budget alerts, spending observations and saving tips.",
      "Bank connection and transaction-sync flows designed around external providers."
    ],
    "links": [
      {
        "label": "View editable UI references",
        "url": "https://www.figma.com/design/tax8ZIyDdVyp4loUr5KSVP"
      },
      {
        "label": "View project source",
        "url": "https://github.com/ebubechukwusamuel/my-assistant/tree/master/projects/fundi"
      }
    ]
  },
  {
    "slug": "kredo",
    "cover": "kredo-dashboard.png",
    "shot": true,
    "title": "Kredo",
    "category": "Product Design",
    "filters": [
      "web",
      "design"
    ],
    "summary": "A freelancer workspace that connects client management, proposals, projects, time tracking, expenses and invoicing.",
    "overview": "Kredo brings core freelance operations into one workspace. The current app includes client and request flows, proposal management, project tracking, billable time, expenses and invoice status. Instead of jumping between separate tools, a freelancer can follow work from a new client request through delivery and payment follow-up.",
    "challenge": "Freelancers often handle client details, proposals, project work, time, expenses and payment reminders in separate places. That makes it harder to see what needs action and what has already been billed or paid.",
    "approach": "I structured the workspace around recurring freelance tasks and put key areas in one navigation system. The dashboard brings clients, projects, proposals and billing into view, with time tracking and invoice actions nearby. The invoice table makes status and due dates visible so pending, partial and overdue invoices can be followed up.",
    "nextSteps": "I would test the flow with working freelancers from a new client request through proposal acceptance, project work, invoicing and payment confirmation. Important edge cases include partial payments, late invoices, timer interruptions, expense corrections, duplicate submissions and payment-webhook delays. Real payment success rates or time saved should not be claimed without evidence.",
    "scopeNote": "The case study focuses on the workflow and product UI. Payment provider paths and invoice states should be validated in a test environment before claiming a production-verified payment experience.",
    "caseNote": "These editable reference screens were recreated from the Kredo app source and its dark red-accented design system. Client names, amounts, counts and invoice rows shown are sample interface data, not real revenue or client results.",
    "decisions": [
      "Keep clients, proposals, projects, time, expenses and invoices in one workspace navigation.",
      "Show client and project counts alongside billing status to connect delivery with money owed.",
      "Make time tracking visible on the dashboard so billable work is easier to record.",
      "Use explicit invoice states such as sent, paid, partial and overdue to support clear follow-up.",
      "Treat payment confirmation, duplicate submissions and partial payment as states that need verification, not just polished success screens."
    ],
    "screens": [
      {
        "src": "kredo-dashboard.png",
        "title": "Freelancer dashboard",
        "alt": "Editable reference for Kredo's dashboard with clients, projects, proposals, timer and invoice summary"
      },
      {
        "src": "kredo-invoices.png",
        "title": "Invoice workspace",
        "alt": "Editable reference for Kredo's invoice table with issue date, due date, amount and payment status"
      }
    ],
    "caption": "Kredo freelancer workspace reference, recreated from the current app source.",
    "tags": [
      "Product Design",
      "Freelancer tools",
      "Next.js",
      "TypeScript",
      "Time tracking",
      "Invoicing"
    ],
    "features": [
      "Client profiles and client request intake.",
      "Proposal creation and proposal status tracking.",
      "Project management and project detail workflows.",
      "Billable time logging and timer controls.",
      "Expense recording and project cost visibility.",
      "Invoice creation with paid, sent, partial and overdue states.",
      "Payment-related flows designed around Paystack and Stripe, pending end-to-end verification."
    ],
    "links": [
      {
        "label": "Open Kredo",
        "url": "https://kredo-gray.vercel.app"
      },
      {
        "label": "View editable UI references",
        "url": "https://www.figma.com/design/tax8ZIyDdVyp4loUr5KSVP"
      },
      {
        "label": "View source code",
        "url": "https://github.com/ebubechukwusamuel/kredo"
      }
    ]
  },
  {
    "slug": "flowtrack",
    "cover": "flowtrack-board.png",
    "shot": true,
    "title": "FlowTrack",
    "category": "Product Design",
    "filters": [
      "web",
      "design"
    ],
    "summary": "A team project workspace for task boards, delivery planning, collaboration and activity tracking.",
    "overview": "FlowTrack is a project and task management platform with a dashboard, task boards, team membership, calendar, submissions, activity and chat routes. The task model supports ownership, status, priorities and due dates, so teams can see work that is planned, in progress, completed or overdue.",
    "challenge": "When team tasks, deadlines, comments and ownership live in separate tools, it is difficult to see what is moving, what is blocked and who needs follow-up. FlowTrack brings project status and collaboration into a shared workspace.",
    "approach": "I focused the board on clear task states and team context. Project metrics make the workload scannable, while task cards keep the title, category, assignee and due-date information together. The calendar gives a second view for deadlines and team commitments, complementing the board rather than replacing it.",
    "nextSteps": "I would validate the board with teams using realistic task volumes and test dragging tasks between states, task ownership changes, invitations, empty boards, overdue states, mobile layout and permissions. Chat and voice/video call flows also need reliability and accessibility testing before claiming team outcomes.",
    "scopeNote": "The portfolio shows the product's interface and intended workflows. Team names, task counts, event labels and status examples are illustrative and should not be treated as live activity or evidence of productivity improvement.",
    "caseNote": "These editable reference screens were recreated from the FlowTrack app source and current dark/lime design tokens. Task names, counts, dates and activity shown are illustrative sample data.",
    "decisions": [
      "Use visible task columns to make status and work-in-progress easier to scan.",
      "Keep assignee, category and due date on the task card so basic decisions do not require opening every task.",
      "Pair the Kanban board with a calendar for deadline-based planning.",
      "Keep activity and collaboration routes in the same workspace as project tasks.",
      "Design empty, loading, permission and task-move failure states before relying on the board in team workflows."
    ],
    "screens": [
      {
        "src": "flowtrack-board.png",
        "title": "Project board",
        "alt": "Editable reference for FlowTrack's Kanban-style board with task status, assignment and due dates"
      },
      {
        "src": "flowtrack-calendar.png",
        "title": "Team calendar",
        "alt": "Editable reference for FlowTrack's calendar with sample team events and project deadlines"
      }
    ],
    "caption": "FlowTrack project board reference, recreated from the current app source.",
    "tags": [
      "Product Design",
      "Project management",
      "Kanban",
      "Team collaboration",
      "Calendar",
      "Next.js"
    ],
    "features": [
      "Project board with task status, assignees and due dates.",
      "My tasks and team workload views.",
      "Project calendar for deadlines and shared commitments.",
      "Organization and member management flows.",
      "Activity feed and submission review workflows.",
      "Chat and voice/video collaboration routes in the product code."
    ],
    "links": [
      {
        "label": "View editable UI references",
        "url": "https://www.figma.com/design/tax8ZIyDdVyp4loUr5KSVP"
      },
      {
        "label": "View source code",
        "url": "https://github.com/ebubechukwusamuel/flowtrack"
      }
    ]
  },
  { slug: 'spyglass', shot: true, title: 'Spyglass', category: 'Development', filters: ['ai'],
    summary: 'Natural language Q&A for any codebase. Index once, ask questions with source citations.',
    overview: 'CLI tool published on npm that indexes any codebase locally using vector embeddings. It walks project files, chunks at function boundaries, embeds via Ollama (local) or OpenAI (cloud), and stores vectors in SQLite.',
    tags: ['Node.js', 'TypeScript', 'RAG', 'SQLite', 'OpenAI', 'Ollama', 'CLI'],
    features: ['Indexes codebases at function boundaries for precise answers', 'Supports both local (Ollama) and cloud (OpenAI) embeddings', 'Answers include source file and line number citations', 'Published as @mazion/spyglass on npm', 'Built with Node.js + Commander for a polished CLI experience'],
    links: [{ label: 'Source Code', url: 'https://github.com/ebubechukwusamuel/spyglass' }] },
  { slug: 'twitter-automation', shot: true, title: 'Twitter/X Automation', category: 'Development', filters: ['ai'],
    summary: 'Browser-based Twitter/X automation using Playwright. Posts tweets, manages content strategy, and publishes from markdown files without API keys.',
    overview: 'Automated Twitter posting for @ebubechukwu_sam using browser-based automation via Playwright (no API keys needed). It logs into x.com in an existing Chrome session, reads posts from markdown files, and publishes them.',
    tags: ['Playwright', 'Automation', 'Groq AI', 'Browser Automation', 'Node.js'],
    features: ['Browser-based automation via Playwright, no API keys required', 'Post management via markdown files in posts/ directory', 'AI-generated content using Groq SDK for varied posting', 'Content strategy: services, building in public, design/dev insights', 'Runs in existing Chrome session via PlayWriter extension'],
    links: [{ label: 'Source Code', url: 'https://github.com/ebubechukwusamuel/twitter-automation' }] },
  { slug: 'linkedin-optimizer', title: 'LinkedIn Profile Optimizer', category: 'Development', filters: ['ai'],
    summary: 'AI-powered LinkedIn optimization workflow. Analyzes profiles, rewrites every section, and generates before and after reports.',
    overview: 'An automated n8n workflow scrapes a LinkedIn profile with Playwright, uses AI to analyze each section, and rewrites the headline, about, experience, and skills. It then produces a before and after report with SEO keyword impact analysis.',
    tags: ['n8n', 'OpenAI', 'Playwright', 'Google Drive', 'Automation'],
    features: ['AI analysis of the headline, about, experience, and skills sections', 'Before and after comparison report with SEO keyword impact', 'Automated delivery to Google Drive for client handoff', 'End-to-end no-code automation with error handling'],
    links: [] },
  { slug: 'mazion-brand', shot: true, title: 'Mazion Brand Identity', category: 'Design', filters: ['brand', 'design'],
    summary: 'Complete brand identity system for a design & development agency: logo, palette, typography, and guidelines.',
    overview: 'Complete brand identity system for a design & development agency: logo, palette, typography, and guidelines.',
    tags: ['Brand Identity', 'Logo Design', 'Visual Identity', 'Typography'],
    features: ['Full brand identity system including primary and secondary logos', 'Curated color palette with light and dark mode applications', 'Typography system with header and body pairings', 'Brand guidelines document with usage rules and examples'],
    links: [{ label: 'View on Behance', url: 'https://www.behance.net/gallery/242177593/Mazion-Brand-Identity' }] },
  { slug: 'japalearn', title: 'JapaLearn Brand & UI', category: 'Design', filters: ['design'],
    summary: 'Brand identity and mobile-first UI design for a language learning platform.',
    overview: 'Brand identity and mobile-first UI design for a language learning platform.',
    tags: ['UI/UX Design', 'Branding', 'EdTech', 'Mobile Design'],
    features: ['Brand identity including logo, color system, and iconography', 'Mobile-first interface design with onboarding flow', 'Lesson progression UI and gamification elements', 'Design system with reusable components'],
    links: [{ label: 'View on Behance', url: 'https://www.behance.net/gallery/245222745/JapaLearn-Designs' }] },
  { slug: 'tobam-group', title: 'Tobam Group', category: 'Design', filters: ['brand', 'design'],
    summary: 'Corporate brand identity for a business group: professional, trustworthy, and modern.',
    overview: 'Corporate brand identity for a business group: professional, trustworthy, and modern.',
    tags: ['Brand Identity', 'Corporate Design', 'Logo Design'],
    features: ['Professional logo suite with lockups and variations', 'Corporate color palette and typography system', 'Stationery design (business cards, letterhead, envelopes)', 'Brand guidelines for consistent application'],
    links: [{ label: 'View on Behance', url: 'https://www.behance.net/gallery/243149555/Tobam-Group-work' }] },
  { slug: 'enibo-albert', title: 'Enibo Albert Charity Foundation', category: 'Design', filters: ['brand', 'design'],
    summary: 'Brand identity and visual design for a charitable foundation with a warm, compassionate feel.',
    overview: 'Brand identity and visual design for a charitable foundation with a warm, compassionate feel.',
    tags: ['Brand Identity', 'Non-profit', 'Social Impact', 'Visual Identity'],
    features: ['Warm, approachable brand identity for a non-profit', 'Logo design with meaningful symbolism', 'Color palette evoking trust and compassion', 'Application examples including brochures and social media'],
    links: [{ label: 'View on Behance', url: 'https://www.behance.net/gallery/242181621/Enibo-Albert-Charity-Foundation-ProJect' }] },
  { slug: 'linkedin-local-nigeria', title: 'LinkedIn Local Nigeria', category: 'Design', filters: ['brand', 'design'],
    summary: 'Brand visuals for the LinkedIn Local Nigeria community, connecting professionals across the country.',
    overview: 'Brand visuals for the LinkedIn Local Nigeria community, connecting professionals across the country.',
    tags: ['Brand Identity', 'Community', 'Events', 'Social Media'],
    features: ['Event branding for professional networking gatherings', 'Social media templates and promotional materials', 'Consistent visual language across all touchpoints'],
    links: [{ label: 'View on Behance', url: 'https://www.behance.net/gallery/242181243/LinkedIn-Local-Nigeria-(LLN)-Project' }] },
  { slug: 'logofolio-2024', title: 'LOGOFOLIO 2024', category: 'Design', filters: ['brand', 'design'],
    summary: 'Curated collection of logo designs and brand marks from 2024, spanning multiple industries and styles.',
    overview: 'Curated collection of logo designs and brand marks from 2024, spanning multiple industries and styles.',
    tags: ['Logo Design', 'Branding', 'Portfolio', 'Typography'],
    features: ['20+ logo designs across various industries', 'Range of styles from minimalist to illustrative', 'Each logo presented with concept and application context'],
    links: [{ label: 'View on Behance', url: 'https://www.behance.net/gallery/218454879/LOGOFOLIO-2024' }] },
];

export const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web Apps' },
  { key: 'ai', label: 'AI & Automation' },
  { key: 'brand', label: 'Brand Identity' },
  { key: 'design', label: 'Design' },
];

export const TESTIMONIALS = [
  { id: 'williams', name: 'Williams Tomide Sodunke', role: 'GTMe & AI Product Marketing Manager, 2x TEDx Speaker',
    quote: "An amazing graphic designer who contributed significantly to our team at LinkedIn Local Nigeria, constantly delivering high-quality visuals in record time without sacrificing innovation." },
  { id: 'enibo', name: 'Enibo Albert', role: 'Founder and Executive Director, Enibo Albert Charity Foundation',
    quote: "His infographic on Nigeria's Out-of-School Children Crisis made the data clear and urgent. He didn't just make a graphic, he told a story." },
  { id: 'elijah', name: 'Elijah Adegun', role: 'Systems Architect and AgTech Founder',
    quote: 'Thanks so much for the great work done on the logo and banner design. Within a short period of time you delivered. More work to come.' },
  { id: 'isaac', name: 'Mr. Isaac', role: 'Client, janitorial cleaning services',
    quote: "Truly impressed with the design for my janitorial cleaning services. A clean, professional layout with great color and trustworthy branding. I couldn't be happier." },
  { id: 'zeeky', name: 'Zeeky Stitches', role: 'Client',
    quote: "This flyer looks vibrant, professional and eye catching. Good job. I commend your patience in dealing with clients. You are recommendable. Keep soaring high." },
  { id: 'olu', name: 'Olu Segun', role: 'Client',
    quote: 'Ebube has designed flyers and built a website for me; he is very creative and pays attention to detail. I recommend him any day.' },
];

export const ABOUT = {
  bio: [
    "I'm Ebube, a designer and AI-powered product builder based in Nigeria. I started in graphic and brand design, and now bring that eye for visual detail into digital products. I use Figma and AI coding tools to move from an idea to a working experience.",
    "I work across brand identity, product UI, and web experiences. I care about making the main action clear, keeping screens visually consistent, and turning designs into something people can use. I'm interested in teams where design decisions and implementation stay close.",
    "I bring more than five years of visual design experience and a practical interest in AI-assisted product building. I want to make digital products that look considered and work well for the people using them.",
  ],
  skills: [
    ['Presentation Design', 'PowerPoint, Keynote, and Google Slides decks built to corporate and consulting standards.'],
    ['Adobe Creative Suite', 'Photoshop and Illustrator for brand, print, and digital work.'],
    ['Data Visualization', 'Turning complex data into clear infographics and visual stories.'],
    ['Brand Consistency', 'Design systems that keep every touchpoint on brand.'],
    ['Visual Storytelling', 'Corporate decks and campaigns that carry a clear narrative.'],
    ['Collaboration', 'Clear communication with stakeholders, teams, and clients.'],
    ['Product Design and UI/UX', 'Figma flows, prototypes, and polished interfaces for mobile and web products.'],
    ['AI-Assisted Product Building', 'Using AI coding tools and web technologies to turn product ideas into working experiences.'],
    ['AI Automation', 'n8n workflows, chatbots, and browser automation that save hours.'],
  ],
  education: [
    ['B Eng. Automotive Engineering', 'Bayero University Kano, in view'],
    ['Senior School Certificate, 2022', 'ECWA Aro Restoration College, Kano'],
  ],
  languages: 'English, Igbo',
  interests: 'Research, travelling, music and photography',
};

// Roles written from the CV plus the roles given in chat. Duty lines marked (draft) were
// written from the role title and should be checked and edited to match what you actually did.
export const EXPERIENCE = [
  { period: '2026', org: 'Yinaga', role: 'Lead Graphic Designer', points: [
    'Lead the graphic design direction for the brand and set the visual standard for its campaigns and communications.',
    'Design marketing visuals, social media graphics, and presentation materials across digital and print.',
    'Keep every output consistent with the brand guidelines.'] },
  { period: '2026', org: 'Chapman', role: 'Lead Graphic Designer', points: [
    "Lead the graphic design direction and own the visual quality of the brand's communications.",
    'Design campaign visuals, social media content, and presentation materials.',
    'Maintain a consistent visual identity across all channels.'] },
  { period: '2025', org: 'Enibo Albert Charity Foundation', role: 'Visual Designer', points: [
    'Designed high-impact presentation decks, banners, and webinar assets for large-scale campaigns.',
    'Translated complex ideas into engaging visual narratives to support advocacy and communication goals.',
    'Ensured consistency across all digital and print materials.'] },
  { period: '2025', org: 'BNM Brand House', role: 'Intern Brand Designer and Strategist', points: [
    'Created structured pitch decks and presentation materials for client-facing proposals.',
    'Developed cohesive brand systems and maintained consistency across visual outputs.',
    'Collaborated with teams to turn research insights into compelling visual communication.',
    'Created digital and print designs, including social media graphics, that improved audience engagement.'] },
  { period: '2022 to 2025', org: 'Treasure Life Family Church', role: 'Brand and Graphic Designer', points: [
    'Designed brand and graphic materials for church programs, events, and communications.',
    'Maintained a consistent visual identity across print and digital media.'] },
  { period: '2022 to 2025', org: 'Impact Orphans Project', role: 'Graphic Designer (Volunteer)', points: [
    "Volunteered as the organization's graphic designer, creating visuals for its outreach and communication.",
    "Kept the project's materials clear, consistent, and on brand."] },
  { period: '2024', org: 'LinkedIn Local Nigeria', role: 'Assistant Brand Designer', points: [
    'Created event branding for professional networking gatherings.',
    'Designed social media templates and promotional materials.',
    'Kept a consistent visual language across all touchpoints.'] },
  { period: '2024', org: 'TRC Staffing Solutions', role: 'Graphic Artist', points: [
    'Designed branding assets and marketing visuals aligned with corporate standards.',
    'Produced engaging graphics to support digital campaigns.'] },
  { period: '2024', org: "Parazim Int'l Chaplains Organization", role: 'Graphic Artist', points: [
    'Developed consistent branding materials across multiple projects.',
    'Designed visual assets supporting organizational communication.'] },
  { period: 'Past role', org: 'Cresol', role: 'Graphic Designer', points: [
    'Designed graphics and brand visuals for Cresol.'] },
  { period: 'Website project', org: 'Elijah Adegun', role: 'Website Designer', points: [
    'Worked on his personal portfolio website, elijahadegun.com.',
    'Presented his work and personal brand online for clients and collaborators.'],
    link: { label: 'elijahadegun.com', url: 'https://elijahadegun.com' } },
];

export const FAQS = [
  ['What services do you offer?', 'Web development, mobile apps, brand identity, AI automation, and UI/UX design. If you are not sure which you need, tell me what you are trying to achieve and I will point you in the right direction.'],
  ['How much does a project typically cost?', 'It depends on the scope, the timeline, and how much custom work is involved. Send me a short description of the project and I will reply with a clear quote.'],
  ["What's the typical turnaround time?", 'Timelines depend on the size of the project. Once I understand what you need, I will give you a realistic schedule before we start.'],
  ['Do you offer revisions?', 'Yes. Revisions are part of the process, and we agree on how many are included before the project starts.'],
  ['How do we get started?', 'Send me a message through the form or email me directly. Tell me about your project, your goals, and your deadline, and I will get back to you.'],
];
