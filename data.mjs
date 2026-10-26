// All site content lives here. Edit this file, then run: node build.mjs
// Style rule: no em dashes or en dashes anywhere (the build fails if one slips in).

export const SITE = {
  url: 'https://ebubeportfolio.vercel.app',
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
  {
    "slug": "nuvora",
    "cover": "nuvora-patient-home.png",
    "coverOrientation": "portrait",
    "shot": true,
    "title": "Nuvora",
    "category": "Product Design",
    "filters": [
      "design",
      "ai",
      "web"
    ],
    "summary": "An AI-assisted healthcare experience connecting health questions with care navigation, doctor booking and appointments.",
    "overview": "Nuvora is an AI-assisted healthcare product designed to help people understand a health concern and choose a next step. The patient experience connects an AI consultation with doctor discovery, booking, appointments, nearby hospitals, first aid, lab results and health history. The interface makes room for human care and clearly frames AI guidance as support rather than a replacement for a healthcare professional.",
    "challenge": "A person who has a health question may not know which action to take, how to find an appropriate professional or where to keep track of care. I approached the experience as a navigation problem: make the next step clear, keep common care tasks close at hand and preserve a visible distinction between AI guidance and care from a qualified professional.",
    "approach": "The home screen prioritizes Book a Doctor, AI Consultation, My Appointments, First Aid and Nearby Hospitals, while keeping a compact summary of medications, consultations and lab results. The consultation interface uses readable conversation turns with text and listening affordances, then reinforces the boundary with a clear AI guidance disclaimer. The appointments screen separates all, active and completed visits and shows status and payment context at a glance.",
    "nextSteps": "I would review symptom language and escalation rules with qualified healthcare professionals, then test the main journeys with patients using accessible language and assistive technology. I would also validate consent and privacy controls, emergency guidance, booking changes and cancellations, failed or delayed AI responses, and the handoff from AI guidance to human care. The screens are not evidence of clinical validation or improved health outcomes.",
    "scopeNote": "This case study documents the patient-facing interface and intended care-navigation workflows. Sample names, symptoms, conditions, appointment dates and prices are illustrative. Clinical safety, privacy, medical accuracy and live integrations require separate validation; the UI should not be interpreted as diagnosis or treatment.",
    "caseNote": "The patient home, AI consultation and appointments screens come from the supplied Figma file. AI guidance is presented as supportive information and not as a substitute for professional medical advice.",
    "decisions": [
      "Make the next action easy to find on the home screen instead of presenting every health feature with equal priority.",
      "Separate AI consultation from doctor booking and appointments so the paths to automated guidance and human care remain clear.",
      "Keep an AI guidance disclaimer visible in the conversation interface.",
      "Use distinct appointment states and filters to make scheduled, completed, cancelled and pending-payment items easier to scan.",
      "Design loading, empty, error and escalation states for health-related flows rather than treating the happy path as the whole experience."
    ],
    "screens": [
      {
        "src": "nuvora-ai-consultation.png",
        "title": "AI consultation",
        "alt": "Nuvora AI consultation screen with readable conversation turns, symptom input and an AI guidance disclaimer"
      },
      {
        "src": "nuvora-appointments.png",
        "title": "Appointments",
        "alt": "Nuvora appointments screen with all, active and completed filters and visible appointment statuses"
      }
    ],
    "caption": "Nuvora patient home with quick actions for doctor booking, AI consultation, appointments, first aid and nearby hospitals.",
    "tags": [
      "Product Design",
      "Healthcare UX",
      "AI-assisted product",
      "Mobile interface",
      "Care navigation",
      "Patient experience"
    ],
    "features": [
      "Patient home with quick access to AI consultation and common care tasks.",
      "AI consultation interface with text, listening and conversation-history states.",
      "Doctor discovery and booking flows.",
      "Appointment list with status filters and appointment detail states.",
      "Nearby hospitals, first aid, lab results, medication and health timeline routes.",
      "Clear boundary between AI guidance and professional medical care."
    ],
    "links": [
      {
        "label": "Open Nuvora",
        "url": "https://nuvora-kappa.vercel.app"
      },
      {
        "label": "View Nuvora screens in Figma",
        "url": "https://www.figma.com/design/rrXQDVoHhWJrgNlfSNMyfg/Kredo-and-FlowTrack-Screens"
      },
      {
        "label": "View original Nuvora design file",
        "url": "https://www.figma.com/design/Wjq3ZsyyjKVztCTJzULySI"
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
    "coverOrientation": "landscape",
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
    "caseNote": "The Figma link opens the original Fundi designs, including mobile screens and web dashboard states. Transaction rows and finance figures shown here are illustrative sample data, not real user balances or performance results.",
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
        "alt": "Original Fundi web dashboard design with account overview, transactions, budgets and AI insights"
      },
      {
        "src": "fundi-ai-insights.png",
        "orientation": "landscape",
        "title": "AI insights",
        "alt": "Original Fundi AI insights screen showing finance guidance and spending patterns"
      }
    ],
    "caption": "Web dashboard from the original Fundi Figma design.",
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
        "label": "View original Fundi Figma UI",
        "url": "https://www.figma.com/design/KTyguYsirmN8T0GP4fIaSt"
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
    "coverOrientation": "landscape",
    "shot": true,
    "title": "Kredo",
    "category": "Product Design",
    "filters": [
      "web",
      "design"
    ],
    "summary": "A freelancer workspace that connects client requests, projects, proposals, time tracking, expenses and invoices.",
    "overview": "Kredo is a freelancer management product built around the journey from a new client request to delivered work and payment follow-up. I designed the experience to keep client, project and billing context connected, so freelancers can find the next action without jumping between separate tools. The screen set covers the main workspace, requests, clients, projects, proposals, invoices, time tracking, expenses, onboarding, settings and client-facing invoice states.",
    "challenge": "Freelancers often manage client details, project work, proposals, time, expenses and payment reminders in different places. I approached this as a workflow problem: how might one workspace make the status of work and money owed easier to see, from the first request through to invoice follow-up?",
    "approach": "I grouped the main workspace around the tasks freelancers repeat: requests, clients, projects, proposals, invoices, time and expenses. The dashboard brings client and project counts, proposal volume, revenue and pending invoice amounts into one scan, with quick actions and an active timer nearby. Invoice details keep line items, tax, due date, payment history and remaining balance together. Client-facing pages separate the handoff from the internal workspace.",
    "nextSteps": "I would test the end-to-end journey with freelancers, from receiving a request to sending a proposal, recording work, raising an invoice and confirming payment. I would also test partial payments, overdue invoices, interrupted timers, expense corrections and duplicate submissions. I would measure task completion and error rates only after observing real users; the screens alone do not prove time saved or payment performance.",
    "scopeNote": "The screens show the product UI and its intended workflow. Client names, project counts, revenue figures, dates and payment rows are sample interface content. Paystack and Stripe payment flows, webhooks, authentication and permission handling need end-to-end verification before the portfolio claims they work reliably in production.",
    "caseNote": "The dashboard, project list and invoice detail are exports from the supplied Figma file. Financial amounts and client records are illustrative, not live revenue or real client data.",
    "decisions": [
      "Organize the workspace around the client-to-payment workflow instead of making users manage separate mini tools.",
      "Show client, project, proposal and invoice status together so work and payment follow-up can be understood in one scan.",
      "Keep invoice totals, due dates, payment history and outstanding balance in the same detail view.",
      "Surface quick actions and the active timer on the dashboard to support everyday work, not just reporting.",
      "Separate public client-facing invoice states from internal management screens."
    ],
    "screens": [
      {
        "src": "kredo-projects.png",
        "title": "Project workspace",
        "alt": "Kredo project list in the dark freelancer workspace, showing project records and their status",
        "orientation": "landscape"
      },
      {
        "src": "kredo-invoices.png",
        "title": "Invoice and payment detail",
        "alt": "Kredo invoice detail with totals, line items, due date, payment history and remaining balance",
        "orientation": "landscape"
      }
    ],
    "caption": "Kredo dashboard showing client and project totals, proposals, invoices and the active timer.",
    "tags": [
      "Product Design",
      "Freelancer tools",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Paystack",
      "Stripe"
    ],
    "features": [
      "Client request intake and client profiles.",
      "Project lists and project detail views.",
      "Proposal creation and status tracking.",
      "Time tracking and expense recording.",
      "Invoice creation with due dates, line items, tax and payment states.",
      "Client-facing invoice and payment status pages."
    ],
    "links": [
      {
        "label": "Open Kredo",
        "url": "https://kredo-gray.vercel.app"
      },
      {
        "label": "View Kredo screens in Figma",
        "url": "https://www.figma.com/design/rrXQDVoHhWJrgNlfSNMyfg/Kredo-and-FlowTrack-Screens"
      },
      {
        "label": "View source code",
        "url": "https://github.com/ebubechukwusamuel/kredo"
      }
    ]
  },
  {
    "slug": "flowtrack",
    "cover": "flowtrack-project-detail.png",
    "coverOrientation": "landscape",
    "shot": true,
    "title": "FlowTrack",
    "category": "Product Design",
    "filters": [
      "web",
      "design"
    ],
    "summary": "A team workspace for project visibility, task ownership, deadlines, submissions and communication.",
    "overview": "FlowTrack is a project and task management product designed around shared visibility of work. Teams can view projects, inspect task status and ownership, see personal workload in a member dashboard, manage team membership and communicate through activity, submissions and chat. The case study focuses on the interface and intended workflow, rather than claiming measured productivity outcomes.",
    "challenge": "When task owners, deadlines, submissions and team conversations are spread across separate tools, it becomes harder to see what is moving and what needs attention. I focused on making project scope, task status and personal priorities visible without removing the context needed to act on them.",
    "approach": "I used a consistent workspace navigation to separate projects and tasks from team and communication areas. Project detail keeps task title, assignee, due date, status, submission and actions in a single table. The member dashboard adds an overdue alert, assigned-task counts, a task-state chart and upcoming deadlines. The team screen gives membership a dedicated place, while chat, activity and submissions support work around the task itself.",
    "nextSteps": "I would test the workflow with teams working on real projects and varied task volumes. Important scenarios include changing an assignee, updating task status, reviewing a submission, inviting a member, handling overdue work and recovering from permission or connection errors. Voice and video flows need separate reliability, accessibility and device testing. I would not claim increased productivity without a measured baseline and follow-up.",
    "scopeNote": "The project and team names, task counts, dates, assignees and activity shown in the screens are illustrative. This screen set represents a project task table and member dashboard; it does not present the current implementation as a working calendar or claim that team productivity has been measured.",
    "caseNote": "The project detail, member dashboard and team screens are taken from the supplied Figma file. The project detail view is a task table with status and ownership fields, not a Kanban board.",
    "decisions": [
      "Keep task title, assignee, due date, status, submission and actions together so people can assess a task without opening every record.",
      "Use an overdue alert and task summary on the member dashboard to point attention toward work that needs action.",
      "Give team membership its own space instead of mixing access management into task editing.",
      "Keep submissions, activity and chat close to project work to support handoffs and follow-up.",
      "Show task states and deadlines explicitly, and validate permission, empty and error states before relying on the workflow."
    ],
    "screens": [
      {
        "src": "flowtrack-dashboard.png",
        "title": "Member dashboard",
        "alt": "FlowTrack member dashboard with overdue alert, assigned task metrics, task states and upcoming deadlines",
        "orientation": "landscape"
      },
      {
        "src": "flowtrack-team.png",
        "title": "Team management",
        "alt": "FlowTrack team management screen in the dark workspace with lime accents",
        "orientation": "landscape"
      }
    ],
    "caption": "FlowTrack project detail showing tasks, owners, due dates, status, submissions and row actions.",
    "tags": [
      "Product Design",
      "Project management",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Task workflows",
      "Team collaboration"
    ],
    "features": [
      "Project list and project detail screens.",
      "Task records with assignee, due date, status, submission and actions.",
      "Member dashboard with task counts, overdue notice and upcoming deadlines.",
      "Team membership and profile/settings routes.",
      "Activity feed and submission review workflows.",
      "Chat and voice/video collaboration screens in the design set."
    ],
    "links": [
      {
        "label": "Open FlowTrack",
        "url": "https://flowstarck.vercel.app"
      },
      {
        "label": "View FlowTrack screens in Figma",
        "url": "https://www.figma.com/design/rrXQDVoHhWJrgNlfSNMyfg/Kredo-and-FlowTrack-Screens"
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
