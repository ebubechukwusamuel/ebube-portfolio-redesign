// All site content lives here. Edit this file, then run: node build.mjs
// Style rule: no em dashes or en dashes anywhere (the build fails if one slips in).

export const SITE = {
  url: 'https://ebubechukwu-portfolio.vercel.app', // change to https://ebubesamuel.online when the domain is switched,
  name: 'Ebubechukwu Samuel',
  short: 'Ebube.',
  title: 'AI-Powered Product Designer & Builder',
  tagline: 'I combine strong visual design with AI-assisted product building to turn ideas into useful digital experiences.',
  description: 'Ebubechukwu Samuel combines visual design and AI-assisted product building to create thoughtful digital experiences, from product interfaces to working web apps.',
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
  { id: 'presentation', size: 'wide', dark: true, title: 'Presentation Design', icon: 'slides', colors: ['#2997ff', '#5e5ce6'],
    text: 'Pitch, corporate and consulting decks in PowerPoint, Keynote and Google Slides that tell a clear story.' },
  { id: 'brand', size: 'wide', dark: false, title: 'Brand Identity', icon: 'palette', colors: ['#bf5af2', '#ff375f'],
    text: 'Logos, color palettes, typography and guidelines that make a business memorable and consistent.' },
  { id: 'graphic', size: 'third', dark: false, title: 'Graphic Design', icon: 'image', colors: ['#ff9f0a', '#ff375f'],
    text: 'Flyers, banners, social media graphics and event materials for print and digital.' },
  { id: 'data', size: 'third', dark: true, title: 'Infographics & Data Visuals', icon: 'chart', colors: ['#30d158', '#0a84ff'],
    text: 'Complex data and ideas turned into clear infographics and visual stories people understand.' },
  { id: 'uiux', size: 'third', dark: false, title: 'UI/UX & Web Design', icon: 'layout', colors: ['#64d2ff', '#30d158'],
    text: 'Wireframes, prototypes and polished interface designs for websites, portfolios and stores.' },
  { id: 'web', size: 'third', dark: true, title: 'Web Development', icon: 'code', colors: ['#2997ff', '#5e5ce6'],
    text: 'Fast, responsive websites and full-stack web apps built with Next.js and TypeScript.' },
  { id: 'mobile', size: 'third', dark: false, title: 'Mobile Apps', icon: 'phone', colors: ['#ff9f0a', '#ff375f'],
    text: 'Cross-platform iOS and Android apps with React Native, Expo and Flutter.' },
  { id: 'ai', size: 'third', dark: true, title: 'AI Automation', icon: 'chat', colors: ['#30d158', '#0a84ff'],
    text: 'Workflow automations and chatbots with n8n, AI and browser automation that save time.' },
];

export const PROJECTS = [
  {
    slug: 'smart-pocket', cover: 'smart-pocket-home.png', shot: true,
    title: 'Smart Pocket', category: 'Product Design', filters: ['design'],
    summary: 'A personal finance concept that helps people organise one main account into clear spending, saving, and investment pockets.',
    overview: 'Smart Pocket explores a simpler way to manage money: keep one main account, then assign income to named pockets for everyday spending, priorities, savings, and investing. The mobile experience brings balances, budgets, progress, and automatic allocation into one place.',
    challenge: 'People often manage several goals from the same income. Smart Pocket explores a way to plan that money using one main account and clear pockets for different needs.',
    approach: 'I designed the key journey from setting monthly income to splitting it into pockets, checking spend and remaining balances, and viewing investments. The screens bring the overall balance and unallocated money forward, then make progress in each pocket easy to scan.',
    nextSteps: 'Next, I would test the pocket model and auto-split setup with people who manage monthly income. I would also validate the language for balances versus budgets, then refine error states, accessibility, and trust cues based on what people find confusing.',
    decisions: [
      'Show total balance and unallocated money near the top, so the starting point is clear.',
      'Use named pockets with remaining amounts and progress bars to make budget status quick to scan.',
      'Keep spending, savings, and locked pockets filterable in the Pockets screen.',
      'Give investing its own space with a portfolio summary and fund details.',
      'Make automatic allocation visible rather than hiding it inside settings.'
    ],
    screens: [
      { src: 'smart-pocket-home.png', title: 'Home dashboard', alt: 'Smart Pocket home screen with total balance, unallocated money, spending summary, pockets, and auto-split status' },
      { src: 'smart-pocket-pockets.png', title: 'Pockets overview', alt: 'Smart Pocket pockets screen with spending, savings, and locked filters and category balances' },
      { src: 'smart-pocket-invest.png', title: 'Investments', alt: 'Smart Pocket investments screen with portfolio value and fund choices' },
      { src: 'smart-pocket-income-setup.png', title: 'Income setup', alt: 'Smart Pocket income setup screen with monthly income and income timing fields' }
    ],
    caption: 'Home dashboard screen from the Smart Pocket Figma concept.',
    tags: ['Product Design', 'Figma', 'Personal Finance', 'Mobile UI', 'Interaction Design'],
    features: [
      'Set monthly income and income timing before assigning money.',
      'Organise money into pockets such as rent, emergency, transport, family, giving, fun, and eating out.',
      'See pocket amounts and spending progress from the home dashboard.',
      'Review spending categories and transactions in one place.',
      'Explore an Investments area with a portfolio summary and fund information.',
      'See when auto-split is enabled and how income is allocated across planned pockets.'
    ],
    links: [{ label: 'View Figma screens', url: 'https://www.figma.com/design/TRAToW0hPwhjmdrgJLd8Lq' }]
  },
  { slug: 'kredo', shot: true, title: 'Kredo', category: 'Development', filters: ['web'],
    summary: 'All-in-one freelancer OS: proposals, contracts, invoices, time tracking, and client portal in one unified app.',
    overview: 'Replaces 5+ tools freelancers juggle with one seamless experience. One tool covers proposals, e-signature contracts, invoicing with Paystack and Stripe, time tracking, expense management, and a client portal for collaboration.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Paystack', 'Stripe'],
    features: ['Unified dashboard replacing 5+ freelance tools', 'Proposal and contract generation with e-signatures', 'Invoice creation with Paystack & Stripe payment processing', 'Time tracking and expense management', 'Client portal for project collaboration and file sharing'],
    links: [{ label: 'Live Site', url: 'https://kredo-gray.vercel.app' }] },
  { slug: 'spyglass', shot: true, title: 'Spyglass', category: 'Development', filters: ['ai'],
    summary: 'Natural language Q&A for any codebase. Index once, ask questions with source citations.',
    overview: 'CLI tool published on npm that indexes any codebase locally using vector embeddings. It walks project files, chunks at function boundaries, embeds via Ollama (local) or OpenAI (cloud), and stores vectors in SQLite.',
    tags: ['Node.js', 'TypeScript', 'RAG', 'SQLite', 'OpenAI', 'Ollama', 'CLI'],
    features: ['Indexes codebases at function boundaries for precise answers', 'Supports both local (Ollama) and cloud (OpenAI) embeddings', 'Answers include source file and line number citations', 'Published as @mazion/spyglass on npm', 'Built with Node.js + Commander for a polished CLI experience'],
    links: [{ label: 'Source Code', url: 'https://github.com/ebubechukwusamuel/spyglass' }] },
  { slug: 'flowtrack', shot: true, title: 'FlowTrack', category: 'Development', filters: ['web'],
    summary: 'Project management with Kanban boards, team chat, voice and video calls, and analytics. Simple for freelancers, powerful for teams.',
    overview: 'A full-featured project management platform covering Kanban boards, task tracking, team management, activity feeds, chat, video calls, analytics, and calendar views.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'WebRTC', 'Framer Motion'],
    features: ['Customizable drag-and-drop Kanban boards', 'Team chat with voice and video calls', 'Project analytics dashboard', 'Calendar and submission review workflows', 'Role-based access control'],
    links: [{ label: 'Live Site', url: 'https://flowstarck.vercel.app' }] },
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
