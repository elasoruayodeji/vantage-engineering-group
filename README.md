# VANTAGE Engineering Group — Corporate Website

<div align="center">

**Engineering Progress. Building Possibility.**

A complete, professional, responsive corporate website for VANTAGE Engineering Group Limited, a fictional multidisciplinary engineering company based in Lagos, Nigeria.

[![React](https://img.shields.io/badge/React-18.2-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

> **Important:** VANTAGE Engineering Group is a fictional company created for demonstration purposes. All people, projects, contract values, and contact details are invented.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/vantage-engineering-website.git
cd vantage-engineering-website

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

### View on Your Phone

```bash
# Start dev server
npm run dev

# Find your computer's IP address
# Windows: ipconfig
# Mac/Linux: ifconfig | grep "inet " | grep -v 127.0.0.1

# On your phone (same WiFi), open:
# http://YOUR_IP:3000
```

See [VIEW_ON_PHONE.md](VIEW_ON_PHONE.md) for detailed mobile viewing instructions.

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.2 | UI framework |
| **TypeScript** | 5.7 | Type safety |
| **Vite** | 6.3 | Build tool & dev server |
| **React Router** | 6.8 | Client-side routing |
| **Tailwind CSS** | 4.1 | Utility-first styling |
| **Framer Motion** | 11.16 | Animations & transitions |
| **Lucide React** | 0.294 | Icon library |

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

## 📄 Pages Implemented

### Core Pages
1. **Home** (`/`) — Hero, company intro, capabilities, featured projects, methodology, principles, insights, CTA
2. **About Us** (`/about`) — Story, mission/vision, principles, values, leadership, org structure
3. **Contact** (`/contact`) — Full enquiry form with validation
4. **Careers** (`/careers`) — Open positions + application form

### Services (7 pages)
5. **Services Overview** (`/services`) — All six service divisions
6. **Civil & Structural Engineering** (`/services/civil-structural-engineering`)
7. **MEP Engineering** (`/services/mep-engineering`)
8. **Industrial Engineering** (`/services/industrial-engineering`)
9. **Infrastructure & Water Systems** (`/services/infrastructure-water-systems`)
10. **Energy & Sustainability** (`/services/energy-sustainability`)
11. **Project Management** (`/services/project-management`)

### Projects (7 pages)
12. **Projects Portfolio** (`/projects`) — With working category filters
13-18. **Six Project Detail Pages** (`/projects/:slug`)

### Content (4 pages)
19. **Our Process** (`/our-process`) — Seven-stage methodology
20. **Insights Listing** (`/insights`)
21-23. **Three Insight Articles** (`/insights/:slug`)

### Legal (3 pages)
24. **Privacy Policy** (`/privacy`)
25. **Terms of Use** (`/terms`)
26. **Custom 404** (catch-all route)

**Total: 26 pages**

## ✨ Features

### 🎨 Design & UX
- ✅ **Premium animations** — Smooth transitions, parallax effects, magnetic buttons
- ✅ **Responsive design** — Mobile, tablet, and desktop optimized
- ✅ **Scroll progress indicator** — Visual feedback for page position
- ✅ **Back-to-top button** — Quick navigation on long pages
- ✅ **Animated counters** — Dynamic statistics display
- ✅ **Skeleton loaders** — Professional loading states
- ✅ **Reading progress bar** — For article pages
- ✅ **Enhanced card effects** — 3D tilt, glow, and hover animations
- ✅ **Dark header with smooth transitions** — No white flash on load

### 🛠️ Functionality
- ✅ **Working project filters** — Client-side category filtering
- ✅ **Form validation** — Comprehensive error handling
- ✅ **Honest form states** — No fake backend submissions
- ✅ **Breadcrumbs** — Clear navigation hierarchy
- ✅ **Accessible navigation** — Mobile menu with animations
- ✅ **Custom 404 page** — Professional error handling

### 🔍 SEO & Performance
- ✅ **SEO metadata** — Unique titles and descriptions per page
- ✅ **Open Graph tags** — Social sharing optimization
- ✅ **XML sitemap** — Complete page listing
- ✅ **robots.txt** — Search engine configuration
- ✅ **Image optimization** — Lazy loading and fallbacks
- ✅ **Performance optimized** — Minimal bundle size

### ♿ Accessibility
- ✅ **WCAG 2.2 AA compliant** — Accessibility best practices
- ✅ **Keyboard navigation** — Full keyboard support
- ✅ **Focus indicators** — Visible focus states
- ✅ **Reduced motion support** — Respects user preferences
- ✅ **Semantic HTML** — Proper heading structure
- ✅ **ARIA labels** — Screen reader support

### 📱 Mobile Optimizations
- ✅ **Touch-friendly** — 44x44px minimum touch targets
- ✅ **Mobile animations** — Simplified for performance
- ✅ **Responsive images** — Optimized for all screen sizes
- ✅ **Fast loading** — Optimized for mobile networks

### 🎯 Content
- ✅ **26 pages** — Complete website structure
- ✅ **6 service pages** — Detailed service descriptions
- ✅ **6 project case studies** — Fictional but realistic
- ✅ **3 technical articles** — Engineering insights
- ✅ **Team profiles** — Leadership section
- ✅ **Fictional disclaimers** — Clear demo notices

## Design Tokens

- **Midnight Graphite:** `#101820` — primary dark
- **Industrial Ivory:** `#F3F2ED` — light sections
- **Steel Blue:** `#B7D5E5` — accent
- **Structural Grey:** `#6F7C85` — secondary
- **Fonts:** Space Grotesk (headings), Inter (body), IBM Plex Mono (labels)

## 🚀 Deployment

### Quick Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repo at [vercel.com/new](https://vercel.com/new) for automatic deployments.

### Quick Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod
```

Or drag-and-drop the `dist/` folder at [app.netlify.com/drop](https://app.netlify.com/drop).

### Other Hosting Options

- **GitHub Pages**: Use `gh-pages` branch with base path configured
- **Cloudflare Pages**: Connect repo, auto-deploys on push
- **AWS S3 + CloudFront**: Upload `dist/` folder, configure SPA routing
- **Any static host**: Upload `dist/` folder contents

**Important:** Configure SPA routing to redirect all routes to `index.html` for client-side routing to work.

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

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

## 📁 Project Structure

```
vantage-engineering-website/
├── public/                  # Static assets
│   ├── _redirects          # SPA routing for Netlify
│   ├── robots.txt          # Search engine config
│   └── sitemap.xml         # XML sitemap
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Layout.tsx      # Navbar, Footer, Layout wrapper
│   │   ├── UI.tsx          # Shared UI components
│   │   ├── ScrollProgress.tsx      # Scroll indicator
│   │   ├── ScrollToTop.tsx         # Auto scroll to top
│   │   ├── AnimatedCounter.tsx     # Number animations
│   │   ├── InteractiveElements.tsx # Magnetic buttons, tilt cards
│   │   ├── ReadingProgress.tsx     # Article progress bar
│   │   └── Skeleton.tsx           # Loading skeletons
│   ├── data/
│   │   └── content.ts      # All content data (services, projects, etc.)
│   ├── pages/              # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx    # Overview + Detail
│   │   ├── Projects.tsx    # Overview + Detail
│   │   ├── Process.tsx
│   │   ├── Insights.tsx    # List + Detail
│   │   ├── Careers.tsx
│   │   ├── Contact.tsx
│   │   └── Legal.tsx       # Privacy, Terms, 404
│   ├── App.tsx             # Main app with routing
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles & Tailwind
├── .env.example            # Environment variables template
├── .gitignore             # Git ignore rules
├── vercel.json            # Vercel deployment config
├── netlify.toml           # Netlify deployment config
├── index.html             # HTML template
├── package.json           # Dependencies & scripts
├── tsconfig.json          # TypeScript config
├── vite.config.js         # Vite config
├── README.md              # This file
├── DEPLOYMENT.md          # Deployment guide
├── VIEW_ON_PHONE.md       # Mobile viewing guide
├── ENHANCEMENTS.md        # Premium features documentation
├── FIXES.md               # Bug fixes documentation
└── IMAGE_CREDITS.md       # Image attribution
```

## 📚 Documentation

- **[README.md](README.md)** — Project overview and setup (this file)
- **[DEPLOYMENT.md](DEPLOYMENT.md)** — Complete deployment guide
- **[VIEW_ON_PHONE.md](VIEW_ON_PHONE.md)** — Mobile viewing instructions
- **[QUICK_START.md](QUICK_START.md)** — Quick start guide
- **[ENHANCEMENTS.md](ENHANCEMENTS.md)** — Premium features details
- **[FIXES.md](FIXES.md)** — Bug fixes and solutions
- **[IMAGE_CREDITS.md](IMAGE_CREDITS.md)** — Image attribution

## 🎨 Design System

### Colors
- **Midnight Graphite:** `#101820` — Primary dark
- **Industrial Ivory:** `#F3F2ED` — Light sections
- **Steel Blue:** `#B7D5E5` — Accent
- **Structural Grey:** `#6F7C85` — Secondary

### Typography
- **Headings:** Plus Jakarta Sans
- **Body:** Inter
- **Technical:** IBM Plex Mono

### Design Principles
- Clean, modern, professional
- Engineering-focused aesthetic
- Responsive and accessible
- Performance optimized

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Building
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run typecheck    # TypeScript type checking

# Deployment
vercel --prod        # Deploy to Vercel
netlify deploy --prod  # Deploy to Netlify
```

## 🌟 Premium Features

This website includes advanced features typically found in enterprise-level websites:

- **Scroll Progress Indicator** — Visual feedback showing page progress
- **Animated Counters** — Dynamic number animations for statistics
- **Magnetic Buttons** — Interactive hover effects that follow cursor
- **3D Tilt Cards** — Cards that tilt in 3D space on hover
- **Skeleton Loaders** — Professional loading states
- **Reading Progress Bar** — Shows reading completion on articles
- **Back-to-Top Button** — Smooth scroll to top
- **Enhanced Card Effects** — Image zoom, gradient overlays, border animations
- **Parallax Hero** — Depth effects on hero sections
- **Staggered Animations** — Sophisticated reveal sequences

See [ENHANCEMENTS.md](ENHANCEMENTS.md) for complete details.

## 🤝 Contributing

This is a demonstration project. Feel free to:
- Fork and customize for your own projects
- Use as a template for engineering/consulting websites
- Learn from the code structure and patterns
- Report issues or suggest improvements

## 📝 License

This project is provided as-is for educational and portfolio purposes. 

**Note:** VANTAGE Engineering Group is a fictional company. All content is for demonstration purposes only.

## 🙏 Acknowledgments

- Stock photography from [Pexels](https://pexels.com) and [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com)

## 📞 Support

For questions or issues:
- Check the documentation files listed above
- Review [DEPLOYMENT.md](DEPLOYMENT.md) for deployment help
- See [VIEW_ON_PHONE.md](VIEW_ON_PHONE.md) for mobile viewing

---

<div align="center">

**Built with React, TypeScript, and Tailwind CSS**

**Engineering Progress. Building Possibility.**

Made with ❤️ for demonstration purposes

</div>
