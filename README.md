# VANTAGE Engineering Group — Corporate Website

A complete, professional, responsive corporate website for VANTAGE Engineering Group Limited, a fictional multidisciplinary engineering company based in Lagos, Nigeria.

> **Important:** VANTAGE Engineering Group is a fictional company created for demonstration purposes. All people, projects, contract values, and contact details are invented.

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite 6
- **Routing:** React Router v6
- **Styling:** Tailwind CSS v4 with custom design tokens
- **Animation:** Framer Motion
- **Icons:** Lucide React

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Open http://localhost:3000 in your browser.

### Build
```bash
npm run build
```
Output will be in the `dist/` directory.

### Type Check
```bash
npm run typecheck
```

## Pages Implemented

1. **Home** (`/`) — Hero, company intro, capabilities, featured projects, methodology, principles, insights, CTA
2. **About Us** (`/about`) — Story, mission/vision, principles, values, leadership, org structure
3. **Services Overview** (`/services`) — All six service divisions
4. **Civil & Structural Engineering** (`/services/civil-structural-engineering`)
5. **MEP Engineering** (`/services/mep-engineering`)
6. **Industrial Engineering** (`/services/industrial-engineering`)
7. **Infrastructure & Water Systems** (`/services/infrastructure-water-systems`)
8. **Energy & Sustainability** (`/services/energy-sustainability`)
9. **Project Management** (`/services/project-management`)
10. **Projects Portfolio** (`/projects`) — With working category filters
11. **Six Project Detail Pages** (`/projects/:slug`)
12. **Our Process** (`/our-process`) — Seven-stage methodology
13. **Insights Listing** (`/insights`)
14. **Three Insight Articles** (`/insights/:slug`)
15. **Careers** (`/careers`) — Open positions + application form
16. **Contact** (`/contact`) — Full enquiry form with validation
17. **Privacy Policy** (`/privacy`)
18. **Terms of Use** (`/terms`)
19. **Custom 404** (catch-all route)

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Working project category filters (client-side)
- ✅ Accessible navigation with mobile menu
- ✅ Form validation with error states
- ✅ Honest form submission states (no fake backend)
- ✅ Breadcrumbs on nested pages
- ✅ SEO metadata, Open Graph, sitemap, robots.txt
- ✅ Image fallbacks and lazy loading
- ✅ Reduced-motion support
- ✅ Keyboard navigation and focus indicators
- ✅ Fictional content disclaimers
- ✅ Custom 404 page

## Design Tokens

- **Midnight Graphite:** `#101820` — primary dark
- **Industrial Ivory:** `#F3F2ED` — light sections
- **Steel Blue:** `#B7D5E5` — accent
- **Structural Grey:** `#6F7C85` — secondary
- **Fonts:** Space Grotesk (headings), Inter (body), IBM Plex Mono (labels)

## Deployment

The built site can be deployed to any static hosting provider (Vercel, Netlify, Cloudflare Pages, etc.). Ensure SPA routing is configured to redirect all routes to `index.html`.

A `_redirects` file is included in `public/` for Netlify-compatible hosting.

## Remaining Configuration Before Production

- [ ] Replace all fictional company details with real information
- [ ] Replace placeholder contact details with real ones
- [ ] Verify and update image sources/licenses
- [ ] Configure real production domain
- [ ] Set up backend for form submissions (if needed)
- [ ] Add real professional registrations/certifications (if applicable)
- [ ] Review and update privacy policy for actual data practices
- [ ] Add real OG/social sharing images
- [ ] Configure analytics (if desired)
- [ ] Test with real content and images

## File Structure

```
├── public/
│   ├── _redirects
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Layout.tsx      # Navbar, Footer, Layout wrapper
│   │   └── UI.tsx          # Shared UI components
│   ├── data/
│   │   └── content.ts      # All content data
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx    # Overview + Detail
│   │   ├── Projects.tsx    # Overview + Detail
│   │   ├── Process.tsx
│   │   ├── Insights.tsx    # List + Detail
│   │   ├── Careers.tsx
│   │   ├── Contact.tsx
│   │   └── Legal.tsx       # Privacy, Terms, 404
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── IMAGE_CREDITS.md
├── README.md
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.js
```

## License

This project is a demonstration website. Code is provided as-is for educational and portfolio purposes.
