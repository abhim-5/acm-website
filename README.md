# ACM NIT Surat — Official Chapter Portal

> The official website of the ACM Student Chapter at NIT Surat (SVNIT), India.  
> Built to showcase the chapter's events, team history (2011–2025), and foster community engagement.

---

## 📌 Project Description

### Overview

The **ACM NIT Surat Portal** is a modern, high-performance single-page website for the official ACM Student Chapter at NIT Surat (SVNIT). It serves as the primary digital presence for the chapter, providing prospective and current members with a rich overview of the organization's identity, events, team history, and contact information.

The site spans **15 years of team archives (2011–2025)**, presenting each year's leadership and members in an interactive, animated directory panel — making it a living historical record as well as a contemporary recruitment and community platform.

---

### Architecture

The project is a **client-side SPA (Single Page Application)** built with Vue 3 (Composition API) and bundled via Vite. It requires no backend — all data (team members, events, navigation) is statically declared in TypeScript source files.

```
acm/
├── public/
│   ├── team/{year}/       # Member headshots organized by year (2011–2025)
│   └── *.jpg              # Event images (Dotslash, Epiphany, SIH, etc.)
├── src/
│   ├── animations/        # GSAP animation utilities (hero, navbar, scroll)
│   ├── assets/
│   │   ├── fonts/         # CabinetGrotesk & Switzer variable fonts
│   │   └── videos/        # contact.mp4 (footer background)
│   ├── components/
│   │   ├── common/        # Nav, Button — shared across all sections
│   │   ├── design/        # Splash, Cursor, EventTicker, QuoteSlider, NavFooter, Circles
│   │   └── sections/      # Hero, About, Events, Team, Community, SiteFooter
│   ├── data.ts            # Nav links and social media links
│   ├── functions/         # textSplitterIntoChar, gotoSection helpers
│   ├── main.ts            # Lenis smooth-scroll setup, app mount
│   ├── style.css          # Global Tailwind CSS v4 design tokens
│   └── App.vue            # Root component — assembles all sections
```

### Key Sections

| Section | Component | Purpose |
|---|---|---|
| Hero | `Hero.vue` | Animated title, tagline, floating orb background |
| About | `About.vue` | Chapter pillars: Competitive Programming, Dev, Design |
| Events | `Events.vue` | Showcases chapter events (Dotslash, Epiphany, SIH, etc.) |
| Team Archive | `Team.vue` | Interactive year selector (2011–2025) with member cards |
| Community | `Community.vue` | Member quotes + validated contact form with success state |
| Footer | `SiteFooter.vue` | Animated footer with nav links, social links, background video |

---

### Design Choices

- **Tailwind CSS v4** — utility-first styling with custom design tokens for the `flax-smoke` palette and `font-fancy`/`font-mono` typography families.
- **GSAP + ScrollTrigger** — powers all scroll-based animations: hero text reveal, section transitions, marquee ticker, and the team panel horizontal accordion.
- **Lenis** — custom smooth-scroll engine, paused when modals are open to prevent scroll hijacking.
- **Vue 3 Composition API** — reactive year-based team filtering using `computed()` and `ref()` with a clean `allTeamsData` dictionary pattern.
- **`object-contain` for team photos** — ensures all member headshots are fully visible regardless of original aspect ratio, placed on a dark `#111` background.

---

## 🚀 Future Scope

### Near-Term
- [ ] **Backend integration** — Replace static `allTeamsData` with a headless CMS (Contentful / Sanity) so new teams can be added without a code deploy.
- [ ] **Contact form submission** — Wire the validated contact form (People.vue) to a backend endpoint (Node.js/Express or Supabase Edge Functions) and send email via Resend or Nodemailer.
- [ ] **Event detail pages** — Expand the Works section to individual event pages with full photo galleries, participant stats, and problem statements.
- [ ] **Search & filter** — Add search by name and filter by role across the 15-year team archive.

### Medium-Term
- [ ] **Member profiles** — Dedicated pages/modals per member with bio, social links, and contributions during their tenure.
- [ ] **Alumni network page** — A separate section highlighting alumni working at top companies, connecting current students with chapter graduates.
- [ ] **Blog/Articles** — Integrate a Markdown-based blog for technical writeups, event recaps, and competitive programming editorials.
- [ ] **Dark/Light mode toggle** — Currently dark-themed; add a user preference toggle persisted via `localStorage`.

### Long-Term
- [ ] **Progressive Web App (PWA)** — Offline support and installability for mobile users.
- [ ] **Multilingual support** — i18n for Hindi/Gujarati to reach a broader NIT Surat audience.
- [ ] **Automated team onboarding** — A GitHub Actions workflow to auto-resize and rename uploaded member photos to the project's naming convention.
- [ ] **Analytics dashboard** — Integrate Plausible (privacy-first) to track event page engagement and form conversion rates.

---

## 🛠️ Skills Matrix

| **Domain** | **Technologies / Frameworks / Tools** |
|---|---|
| **Frontend** | JavaScript, React, Tailwind CSS, HTML5, CSS3 |
| **Backend** | Node.js, Express, REST APIs |
| **AI** | Gemini API, OpenAI API, Prompt Engineering |
| **ML** | Python, NumPy, Pandas, Scikit-learn, Matplotlib |
| **DevOps** | Git, GitHub Actions, Vercel |
| **Other** | GSAP 3, Lenis Smooth Scroll, UI/UX Design |

---

## ⚙️ Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📄 License

This project is maintained by **ACM NIT Surat Student Chapter**.  
© ACM NIT Surat — All rights reserved.
