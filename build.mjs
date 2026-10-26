// Static site generator. No dependencies. Run: node build.mjs
import fs from 'node:fs';

import crypto from 'node:crypto';
const hashFile = (f) => { try { return crypto.createHash('md5').update(fs.readFileSync(f)).digest('hex').slice(0, 8); } catch (e) { return '0'; } };
const ASSET_V = { css: hashFile('assets/css/style.css'), js: hashFile('assets/js/main.js') };
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, SERVICES, PROJECTS, FILTERS, TESTIMONIALS, ABOUT, EXPERIENCE, FAQS, TOOL_TICKER } from './data.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const written = [];
const write = (rel, content) => {
  const file = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
  written.push(rel);
};

const ICONS = {
  code: '<path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',
  phone: '<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>',
  palette: '<circle cx="12" cy="12" r="9"/><circle cx="8" cy="10" r="1.2" fill="#fff"/><circle cx="12" cy="7.5" r="1.2" fill="#fff"/><circle cx="16" cy="10" r="1.2" fill="#fff"/><path d="M12 21c-1.5 0-2-1.5-1-2.5s1-2-1-2.5"/>',
  chat: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 10h8M8 13h5"/>',
  slides: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="1.6"/><path d="m21 15-4.5-4.5L6 21"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M2 20h20"/>',
  layout: '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M3 9h18M9 9v11"/>',
};
const icon = (name) => `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;


function jpegSize(file) {
  try {
    const buf = fs.readFileSync(file); let i = 2;
    while (i < buf.length) {
      if (buf[i] !== 0xff) { i++; continue; }
      const m = buf[i + 1];
      if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) return { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) };
      i += 2 + buf.readUInt16BE(i + 2);
    }
  } catch (e) { /* ignore */ }
  return null;
}

const NAV = [['Home', '/'], ['About', '/about'], ['Projects', '/projects'], ['Contact', '/contact']];

function nav(active) {
  const links = NAV.map(([l, h]) => `<a href="${h}"${active === h ? ' aria-current="page"' : ''}>${l}</a>`).join('');
  return `<header class="nav"><div class="nav-in">
<a class="logo" href="/" aria-label="Ebube, home">${esc(SITE.short)}</a>
<nav class="nav-links" id="menu" aria-label="Main">${links}<a class="btn btn-primary btn-sm menu-cta" href="/contact">Contact Me</a></nav>
<a class="btn btn-primary btn-sm nav-cta" href="/contact">Contact Me</a>
<button class="burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="menu"><span></span><span></span></button>
</div></header>`;
}

function footer() {
  const social = SITE.social.map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label)}</a>`).join('');
  return `<footer class="footer"><div class="container">
<div class="foot-top">
<div class="foot-brand"><div class="foot-logo">${esc(SITE.short)}</div><p>AI-powered designer &amp; developer. Building brands, interfaces, and full-stack solutions that make an impact.</p></div>
<div class="foot-col"><h4>Navigation</h4>${NAV.map(([l, h]) => `<a href="${h}">${l}</a>`).join('')}<a href="/projects">All projects</a></div>
<div class="foot-col"><h4>Connect</h4><a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>${social}</div>
</div>
<div class="foot-bot"><span>&copy; <span id="year">2026</span> ${esc(SITE.name)}. All rights reserved.</span><span>Designed &amp; built with purpose</span></div>
</div></footer>`;
}

function layout({ title, desc, path: p, active, body, og = '/assets/og-image.jpg', jsonld = '', noindex = false }) {
  const full = title === SITE.name ? `${SITE.name} | ${SITE.title}` : `${title} | ${SITE.name}`;
  const url = SITE.url + (p === '/' ? '' : p);
  return `<!doctype html>
<html lang="en" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(full)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="theme-color" content="#000000">
${noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${url}">`}
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(SITE.name)}">
<meta property="og:title" content="${esc(full)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE.url}${og}">
<meta property="og:image:width" content="${og === '/assets/og-image.jpg' ? 1200 : 1600}">
<meta property="og:image:height" content="${og === '/assets/og-image.jpg' ? 630 : 900}">
<meta property="og:image:alt" content="${esc(full)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(full)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${SITE.url}${og}">
<meta name="twitter:image:alt" content="${esc(full)}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="/assets/css/style.css?v=${ASSET_V.css}">
<script>document.documentElement.className='js';</script>
${jsonld}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
${nav(active)}
<main id="main">
${body}
</main>
${footer()}
<script src="/assets/js/main.js?v=${ASSET_V.js}" defer></script>
</body>
</html>
`;
}

const pcard = (p, i = 0) => `<a class="pcard reveal" style="--d:${(i % 2) * 0.08}s" href="/projects/${p.slug}" data-filters="${p.filters.join(' ')}">
<div class="pimg${p.cover && p.coverOrientation !== 'landscape' ? ' pimg-mobile' : ''}"><img src="/assets/projects/${p.cover || (p.slug + '.jpg')}" alt="${esc(p.title)} ${p.cover ? 'product screen' : p.shot ? 'project cover' : 'cover illustration'}" width="${p.coverOrientation === 'landscape' ? 1440 : p.cover ? 360 : 1600}" height="${p.coverOrientation === 'landscape' ? 860 : p.cover ? 820 : 900}" loading="lazy" decoding="async"></div>
<div class="pbody"><span class="eyebrow">${esc(p.category)}</span><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p>
<div class="tags">${p.tags.slice(0, 2).map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div></div></a>`;

const cta = (title = "Let's build something great.") => `<section class="cta"><div class="container center reveal">
<h2 class="display">${esc(title)}</h2>
<p class="lead">Have a project in mind or just want to say hi? Drop me a message and I'll get back to you.</p>
<a class="btn btn-primary btn-lg" href="/contact">Contact Me</a></div></section>`;

const VIS = {
  web: `<svg viewBox="0 0 400 200" role="img" aria-label="Browser window with code"><rect x="40" y="20" width="320" height="160" rx="14" fill="#1c1c1e" stroke="#3a3a3c"/><rect x="40" y="20" width="320" height="30" rx="14" fill="#2c2c2e"/><circle cx="62" cy="35" r="5" fill="#ff5f57"/><circle cx="80" cy="35" r="5" fill="#febc2e"/><circle cx="98" cy="35" r="5" fill="#28c840"/><rect x="130" y="28" width="150" height="14" rx="7" fill="#1c1c1e"/><rect x="62" y="68" width="60" height="8" rx="4" fill="#bf5af2"/><rect x="130" y="68" width="90" height="8" rx="4" fill="#64d2ff"/><rect x="78" y="88" width="110" height="8" rx="4" fill="#30d158"/><rect x="196" y="88" width="50" height="8" rx="4" fill="#ff9f0a"/><rect x="78" y="108" width="70" height="8" rx="4" fill="#64d2ff"/><rect x="156" y="108" width="100" height="8" rx="4" fill="#8e8e93"/><rect x="62" y="128" width="40" height="8" rx="4" fill="#bf5af2"/><rect x="62" y="148" width="130" height="8" rx="4" fill="#2997ff"/></svg>`,
  mobile: `<svg viewBox="0 0 400 200" role="img" aria-label="Two phone screens"><rect x="110" y="14" width="86" height="172" rx="18" fill="#1d1d1f"/><rect x="116" y="22" width="74" height="156" rx="12" fill="#fff"/><rect x="124" y="34" width="58" height="34" rx="8" fill="#ff9f0a"/><rect x="124" y="76" width="58" height="8" rx="4" fill="#d2d2d7"/><rect x="124" y="92" width="40" height="8" rx="4" fill="#d2d2d7"/><rect x="124" y="112" width="26" height="26" rx="8" fill="#ff375f"/><rect x="156" y="112" width="26" height="26" rx="8" fill="#2997ff"/><rect x="204" y="30" width="86" height="172" rx="18" fill="#1d1d1f"/><rect x="210" y="38" width="74" height="156" rx="12" fill="#fff"/><circle cx="247" cy="76" r="22" fill="#ff375f"/><rect x="222" y="112" width="50" height="8" rx="4" fill="#d2d2d7"/><rect x="230" y="128" width="34" height="8" rx="4" fill="#d2d2d7"/><rect x="222" y="154" width="50" height="22" rx="11" fill="#ff9f0a"/></svg>`,
  brand: `<svg viewBox="0 0 400 200" role="img" aria-label="Logo mark and colour swatches"><rect x="50" y="30" width="140" height="140" rx="28" fill="#1d1d1f"/><path d="M90 130V70h36c14 0 22 8 22 19s-8 19-22 19h-20" fill="none" stroke="#fff" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/><circle cx="268" cy="62" r="26" fill="#bf5af2"/><circle cx="326" cy="62" r="26" fill="#ff375f"/><circle cx="268" cy="126" r="26" fill="#ff9f0a"/><circle cx="326" cy="126" r="26" fill="#64d2ff"/></svg>`,
  ai: `<svg viewBox="0 0 400 200" role="img" aria-label="Connected workflow nodes"><path d="M90 100H160M240 100H310M200 60V40M200 140V162" stroke="#48484a" stroke-width="3" stroke-dasharray="6 6"/><rect x="40" y="76" width="60" height="48" rx="14" fill="#0a84ff"/><rect x="170" y="70" width="60" height="60" rx="18" fill="#30d158"/><rect x="300" y="76" width="60" height="48" rx="14" fill="#bf5af2"/><circle cx="200" cy="32" r="10" fill="#ff9f0a"/><circle cx="200" cy="170" r="10" fill="#64d2ff"/><path d="M190 100l8 8 14-16" fill="none" stroke="#000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  uiux: `<svg viewBox="0 0 400 200" role="img" aria-label="Wireframe layout"><rect x="50" y="20" width="300" height="160" rx="14" fill="#fff" stroke="#c7c7cc" stroke-width="2"/><rect x="66" y="36" width="268" height="22" rx="8" fill="#e5e5ea"/><rect x="66" y="70" width="120" height="96" rx="10" fill="#64d2ff"/><rect x="200" y="70" width="134" height="12" rx="6" fill="#c7c7cc"/><rect x="200" y="92" width="100" height="12" rx="6" fill="#d9d9de"/><rect x="200" y="124" width="70" height="26" rx="13" fill="#30d158"/><path d="M300 140l10 22 6-9 10-3z" fill="#1d1d1f"/></svg>`,
};

// ---------- HOME ----------
function home() {
  const marquee = PROJECTS.map((p) => `<a href="/projects/${p.slug}">${esc(p.title)}</a>`).join('');
  const bento = SERVICES.map((s, i) => `<article class="bcard ${s.size} ${s.dark ? 'dark' : ''} reveal" style="--d:${(i % 3) * 0.08}s;--c1:${s.colors[0]};--c2:${s.colors[1]}"><span class="ibox" style="background:linear-gradient(135deg,${s.colors[0]},${s.colors[1]})">${icon(s.icon)}</span><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></article>`).join('');
  const jsonld = `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org', '@type': 'Person', name: SITE.name, jobTitle: SITE.title, url: SITE.url,
    email: SITE.email, address: { '@type': 'PostalAddress', addressCountry: 'NG' }, sameAs: SITE.social.map((s) => s.url),
  })}</script>`;
  const body = `
<section class="hero"><div class="container center">
<p class="hero-hi reveal">Hi, I'm</p>
<h1 class="hero-name reveal" style="--d:.06s">${esc(SITE.name)}</h1>
<p class="hero-role reveal" style="--d:.12s">${esc(SITE.title)}</p>
<p class="lead reveal" style="--d:.18s">${esc(SITE.tagline)}</p>
<div class="hero-cta reveal" style="--d:.24s"><a class="btn btn-primary btn-lg" href="/contact">Contact Me</a><a class="textlink" href="/projects">View my work <span aria-hidden="true">&rsaquo;</span></a></div>
</div></section>

<section class="marquee" aria-label="Selected projects"><div class="marquee-track"><div class="marquee-set">${marquee}</div><div class="marquee-set" aria-hidden="true">${PROJECTS.map((p) => `<a tabindex="-1" href="/projects/${p.slug}">${esc(p.title)}</a>`).join('')}</div></div></section>

<section class="tool-ticker" aria-label="Product design and development tools">
  <div class="container">
    <p class="tool-ticker-label">Tools I use to design and build</p>
  </div>
  <div class="tool-ticker-window">
    <div class="tool-ticker-track">
      <div class="tool-ticker-set">${TOOL_TICKER.map((name) => `<span class="tool-pill">${esc(name)}</span>`).join('')}</div>
      <div class="tool-ticker-set" aria-hidden="true">${TOOL_TICKER.map((name) => `<span class="tool-pill">${esc(name)}</span>`).join('')}</div>
    </div>
  </div>
</section>

<section class="section light" id="services"><div class="container">
<div class="shead reveal"><p class="eyebrow">My Services</p><h2 class="display">What I do.</h2></div>
<div class="bento">${bento}</div></div></section>

<section class="section dark" id="work"><div class="container">
<div class="shead reveal"><p class="eyebrow">Some of my Work</p><h2 class="display">Projects.</h2></div>
<div class="pgrid">${PROJECTS.slice(0, 6).map(pcard).join('')}</div>
<div class="center morewrap reveal"><a class="btn btn-primary btn-lg" href="/projects">View All Projects</a></div></div></section>

<section class="section white"><div class="container">
<div class="shead reveal"><p class="eyebrow">What clients say</p><h2 class="display">Kind words.</h2></div></div>
<div class="tick" data-speed="20" role="region" aria-label="Client testimonials" tabindex="0"><div class="tick-track">${[0, 1, 2].map((k) => `<div class="tick-set"${k ? ' aria-hidden="true"' : ''}>${TESTIMONIALS.map((t) => {
  const has = fs.existsSync(path.join(ROOT, `assets/people/${t.id}.jpg`));
  const ini = t.name.split(' ').map((w) => w[0]).slice(0, 2).join('');
  const av = has ? `<img class="avatar" src="/assets/people/${t.id}.jpg" alt="${esc(t.name)}" width="56" height="56" loading="lazy" decoding="async">` : `<span class="avatar">${esc(ini)}</span>`;
  return `<figure class="tcard"><blockquote>&ldquo;${esc(t.quote)}&rdquo;</blockquote><figcaption class="author">${av}<div><strong>${esc(t.name)}</strong><span>${esc(t.role)}</span></div></figcaption></figure>`;
}).join('')}</div>`).join('')}</div></div>
</section>
${cta()}`;
  write('index.html', layout({ title: SITE.name, desc: SITE.description, path: '/', active: '/', body, jsonld }));
}

// ---------- ABOUT ----------
function about() {
  const photo = ['png', 'jpg', 'jpeg', 'webp'].map((e) => `assets/profile.${e}`).find((f) => fs.existsSync(path.join(ROOT, f)));
  const portrait = photo
    ? `<div class="portrait"><img src="/${photo}" alt="Portrait of ${esc(SITE.name)}" width="1000" height="1000" decoding="async"></div>`
    : `<div class="portrait mono" aria-hidden="true"><span>ES</span></div>`;
  const exp = EXPERIENCE.map((e) => `<div class="role reveal"><div class="period">${esc(e.period)}</div><div class="rbody"><h3>${esc(e.org)}</h3><p class="rtitle">${esc(e.role)}</p><ul>${e.points.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>${e.link ? `<a class="textlink" href="${esc(e.link.url)}" target="_blank" rel="noopener noreferrer">${esc(e.link.label)} <span aria-hidden="true">&rsaquo;</span></a>` : ''}</div></div>`).join('');

  const PD = path.join(ROOT, 'assets/proof');
  const pf = fs.existsSync(PD) ? fs.readdirSync(PD).sort() : [];
  const pitems = pf.filter((f) => /\.(jpe?g|png|webp|mp4|webm|mov)$/i.test(f) && !/-poster\./i.test(f));
  const pcards = (hid) => pitems.map((f) => /\.(mp4|webm|mov)$/i.test(f)
    ? `<figure class="pf"><video muted loop playsinline preload="metadata" ${fs.existsSync(path.join(PD, f.replace(/\.\w+$/, '-poster.jpg'))) ? `poster="/assets/proof/${f.replace(/\.\w+$/, '-poster.jpg')}"` : ''} src="/assets/proof/${f}"${hid ? ' tabindex="-1"' : ''}></video></figure>`
    : (() => { const d = /\.jpe?g$/i.test(f) ? jpegSize(path.join(PD, f)) : null; return `<figure class="pf"><img src="/assets/proof/${f}" alt="Moment from Ebubechukwu's life and work" ${d ? `width="${d.w}" height="${d.h}"` : 'height="720"'} loading="lazy" decoding="async" draggable="false"></figure>`; })()).join('');
  const proofSec = pitems.length ? `
<section class="section white"><div class="container">
<div class="shead reveal"><p class="eyebrow">Proof of life</p><h2 class="display">Real moments.</h2></div></div>
<div class="tick proof" data-speed="20" role="region" aria-label="Photos and videos" tabindex="0"><div class="tick-track">${[0, 1, 2].map((k) => `<div class="tick-set"${k ? ' aria-hidden="true"' : ''}>${pcards(k)}</div>`).join('')}</div></div>
</section>` : '';
  const body = `
<section class="section dark pt-lg"><div class="container two">
<div class="reveal"><p class="eyebrow">Get to know me</p><h1 class="display">About.</h1>
${ABOUT.bio.map((b) => `<p class="lead left">${esc(b)}</p>`).join('')}
<a class="btn btn-primary btn-lg" href="/contact">Get in touch</a></div>
<div class="reveal" style="--d:.1s">${portrait}</div></div></section>

<section class="section light"><div class="container">
<div class="shead reveal"><p class="eyebrow">Skills</p><h2 class="display">What I bring.</h2></div>
<div class="skills">${ABOUT.skills.map(([t, d], i) => `<article class="skill reveal" style="--d:${(i % 3) * 0.08}s"><h3>${esc(t)}</h3><p>${esc(d)}</p></article>`).join('')}</div></div></section>

<section class="section dark"><div class="container">
<div class="shead reveal"><p class="eyebrow">Work experience</p><h2 class="display">Where I have worked.</h2></div>
<div class="timeline">${exp}</div></div></section>

${proofSec}

<section class="section light"><div class="container"><div class="trio duo">
<article class="skill reveal" style="--d:.08s"><p class="eyebrow sm">Languages</p><h3>${esc(ABOUT.languages)}</h3></article>
<article class="skill reveal" style="--d:.16s"><p class="eyebrow sm">Interests</p><h3>${esc(ABOUT.interests)}</h3></article>
</div></div></section>
${cta("Let's work together.")}`;
  write('about/index.html', layout({ title: 'About', desc: 'Ebubechukwu Samuel is a freelance designer and developer in Nigeria. See his skills, experience, and the brands and teams he has worked with.', path: '/about', active: '/about', body }));
}

// ---------- PROJECTS ----------
function projects() {
  const body = `
<section class="section dark pt-lg"><div class="container">
<div class="shead reveal"><p class="eyebrow">Some of my Work</p><h1 class="display xl">Projects.</h1></div>
<div class="filters reveal" role="group" aria-label="Filter projects">${FILTERS.map((f, i) => `<button type="button" class="chipbtn${i === 0 ? ' on' : ''}" data-filter="${f.key}" aria-pressed="${i === 0}">${esc(f.label)}</button>`).join('')}</div>
<div class="pgrid" id="pgrid">${PROJECTS.map(pcard).join('')}</div>
<p class="empty" id="empty" hidden>No projects in this category yet.</p></div></section>
${cta()}`;
  write('projects/index.html', layout({ title: 'Projects', desc: 'Selected web apps, AI automations, brand identities, and UI designs by Ebubechukwu Samuel.', path: '/projects', active: '/projects', body }));
}

function projectPages() {
  PROJECTS.forEach((p, i) => {
    const prev = PROJECTS[i - 1], next = PROJECTS[i + 1];
    const design = p.category === 'Design' || p.category === 'Product Design';
    const btns = p.links.map((l, k) => `<a class="btn ${k === 0 ? 'btn-primary' : 'btn-ghost'} btn-lg" href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">${esc(l.label)}</a>`).join('');
    const body = `
<article class="section dark pt-md"><div class="container narrow">
<a class="textlink back" href="/projects"><span aria-hidden="true">&lsaquo;</span> Back to projects</a>
<header class="phead reveal"><p class="eyebrow">${esc(p.category)}</p><h1 class="display ptitle">${esc(p.title)}</h1><p class="lead left big">${esc(p.overview)}</p>${btns ? `<div class="pbtns">${btns}</div>` : ''}</header>
<figure class="hero-img reveal"><img src="/assets/projects/${p.cover || (p.slug + '.jpg')}" alt="${esc(p.title)} ${p.cover ? 'product screen' : p.shot ? 'project cover' : 'cover illustration'}" width="${p.coverOrientation === 'landscape' ? 1440 : p.cover ? 360 : 1600}" height="${p.coverOrientation === 'landscape' ? 860 : p.cover ? 820 : 900}" decoding="async"><figcaption>${p.caption ? esc(p.caption) : p.shot ? '' : 'Cover illustration.'}${design && p.links.some((l) => l.url.includes('behance.net')) ? ' See the full project on Behance.' : ''}</figcaption></figure>

${p.challenge ? `<section class="pblock reveal"><h2>Problem space</h2><p>${esc(p.challenge)}</p></section>` : ''}
${p.approach ? `<section class="pblock reveal"><h2>Design approach</h2><p>${esc(p.approach)}</p></section>` : ''}
${p.decisions && p.decisions.length ? `<section class="pblock reveal"><h2>Key design decisions</h2><ul class="feats">${p.decisions.map((d) => `<li>${esc(d)}</li>`).join('')}</ul></section>` : ''}
${p.screens && p.screens.length ? `<section class="pblock reveal"><h2>Product screens</h2><div class="screen-grid">${p.screens.map((s) => `<figure class="screen-card${s.orientation === 'landscape' ? ' screen-card-landscape' : ''}"><img src="/assets/projects/${esc(s.src)}" alt="${esc(s.alt)}" width="${s.orientation === 'landscape' ? 1440 : 360}" height="${s.orientation === 'landscape' ? 860 : 820}" loading="lazy" decoding="async"><figcaption>${esc(s.title)}</figcaption></figure>`).join('')}</div></section>` : ''}
${p.caseNote ? `<p class="case-note">${esc(p.caseNote)}</p>` : ''}
${p.nextSteps ? `<section class="pblock reveal"><h2>What I would validate next</h2><p>${esc(p.nextSteps)}</p></section>` : ''}
${p.scopeNote ? `<section class="pblock reveal"><h2>What I chose not to ship yet</h2><p>${esc(p.scopeNote)}</p></section>` : ''}
<section class="pblock reveal"><h2>${design ? 'Focus areas' : 'Tech stack'}</h2><div class="tags big">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div></section>
<section class="pblock reveal"><h2>Key features</h2><ul class="feats">${p.features.map((f) => `<li>${esc(f)}</li>`).join('')}</ul></section>
<nav class="pager reveal" aria-label="More projects">
<div>${prev ? `<a href="/projects/${prev.slug}"><small>Previous</small><strong><span aria-hidden="true">&lsaquo;</span> ${esc(prev.title)}</strong></a>` : ''}</div>
<div class="r">${next ? `<a href="/projects/${next.slug}"><small>Next</small><strong>${esc(next.title)} <span aria-hidden="true">&rsaquo;</span></strong></a>` : ''}</div>
</nav></div></article>
${cta('Want something like this?')}`;
    write(`projects/${p.slug}/index.html`, layout({ title: p.title, desc: p.overview, path: `/projects/${p.slug}`, active: '/projects', body, og: `/assets/projects/${p.cover || (p.slug + '.jpg')}` }));
  });
}

// ---------- CONTACT ----------
function contact() {
  const body = `
<section class="section dark pt-lg"><div class="container">
<div class="shead reveal"><p class="eyebrow">Get in touch</p><h1 class="display xl">Contact.</h1></div>
<div class="two top">
<div class="formcard reveal"><h2>Send a Message</h2><p class="m">Have a project in mind or just want to say hi? Drop me a message and I'll get back to you.</p>
<form id="contact-form" novalidate>
<label>Name<input name="name" type="text" autocomplete="name" placeholder="Your name" required maxlength="120"></label>
<label>Email<input name="email" type="email" autocomplete="email" placeholder="you@example.com" required maxlength="160"></label>
<label>Message<textarea name="message" rows="6" placeholder="Tell me about your project" required maxlength="4000"></textarea></label>
<div class="hp" aria-hidden="true"><label>Leave this empty<input name="website" type="text" tabindex="-1" autocomplete="off"></label></div>
<button class="btn btn-primary btn-lg" type="submit">Send Message</button>
<p class="status" id="form-status" role="status" aria-live="polite"></p>
<noscript><p class="status err">Please turn on JavaScript, or email me at <a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>.</p></noscript>
</form></div>
<div class="reveal" style="--d:.1s"><h2 class="faqh">FAQs</h2>
<div class="faqs">${FAQS.map(([q, a]) => `<details class="faq"><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div>
<div class="direct"><p class="eyebrow sm">Or reach me directly</p><a class="mail" href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>
<div class="socials">${SITE.social.map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label)}</a>`).join('')}</div></div></div>
</div></div></section>`;
  write('contact/index.html', layout({ title: 'Contact', desc: 'Have a project in mind? Send Ebubechukwu Samuel a message about web, mobile, brand, or AI automation work.', path: '/contact', active: '/contact', body }));
}

// ---------- 404, SEO, icon ----------
function extras() {
  const body = `<section class="section dark pt-lg"><div class="container center"><p class="eyebrow">Error 404</p><h1 class="display xl">Page not found.</h1><p class="lead">The page you are looking for does not exist or has moved.</p><a class="btn btn-primary btn-lg" href="/">Back home</a></div></section>`;
  write('404.html', layout({ title: 'Page not found', desc: 'Page not found.', path: '/404', body, noindex: true }));
  const urls = ['/', '/about', '/projects', '/contact', ...PROJECTS.map((p) => `/projects/${p.slug}`)];
  write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${SITE.url}${u === '/' ? '' : u}</loc></url>`).join('\n')}\n</urlset>\n`);
  write('robots.txt', `User-agent: *\nAllow: /\nSitemap: ${SITE.url}/sitemap.xml\n`);
  write('favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#000"/><text x="32" y="43" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-weight="700" font-size="34" fill="#f5f5f7">E</text><circle cx="50" cy="45" r="4.5" fill="#2997ff"/></svg>\n`);
}

home(); about(); projects(); projectPages(); contact(); extras();

// Guard: this site must never contain em dashes or en dashes.
const bad = [];
for (const f of written.filter((w) => /\.(html|xml|txt|svg)$/.test(w))) {
  const t = fs.readFileSync(path.join(ROOT, f), 'utf8');
  if (/[–—]/.test(t)) bad.push(f);
}
if (bad.length) { console.error('Em/en dash found in:', bad.join(', ')); process.exit(1); }
console.log(`Built ${written.length} files.`);
