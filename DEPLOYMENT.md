# 🚀 GitHub & Deployment Guide

Now that you have a GitHub repository, here's how to push your code and deploy the website.

---

## 📤 **STEP 1: Push Code to GitHub**

### Initial Setup (First Time Only)

```bash
# 1. Navigate to your project folder
cd vantage-engineering-website

# 2. Initialize git (if not already done)
git init

# 3. Add all files
git add .

# 4. Create first commit
git commit -m "Initial commit: VANTAGE Engineering website"

# 5. Add your GitHub repository as remote
# Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual values
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 6. Push to GitHub
git branch -M main
git push -u origin main
```

### Subsequent Updates

```bash
# After making changes
git add .
git commit -m "Your commit message"
git push
```

---

## 🌐 **STEP 2: Deploy to Vercel (Recommended - Easiest)**

### Method A: Deploy via Vercel Dashboard (No CLI needed)

1. **Go to** https://vercel.com/signup
2. **Sign up** with GitHub (easiest)
3. **Click "Add New Project"**
4. **Import your GitHub repository**
5. **Vercel auto-detects Vite** - just click "Deploy"
6. **Wait 2-3 minutes** - your site is live!

**You'll get a URL like:** `https://your-project.vercel.app`

### Method B: Deploy via Vercel CLI

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# 4. Follow prompts (just press Enter for defaults)

# 5. Deploy to production
vercel --prod
```

---

## 🌐 **STEP 3: Deploy to Netlify (Alternative)**

### Method A: Deploy via Netlify Dashboard

1. **Go to** https://app.netlify.com/signup
2. **Sign up** with GitHub
3. **Click "Add new site" → "Import an existing project"**
4. **Connect your GitHub repository**
5. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
6. **Click "Deploy site"**

**You'll get a URL like:** `https://your-site.netlify.app`

### Method B: Deploy via Netlify CLI

```bash
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Login
netlify login

# 3. Build the project
npm run build

# 4. Deploy
netlify deploy --prod
```

---

## 🔧 **STEP 4: Configure Production Domain**

### Update Site URL

After deployment, you need to update the site URL in the code:

**File to update:** `src/data/content.ts`

```typescript
// Change this line:
export const SITE_URL = 'https://vantageengineering.example';

// To your actual deployed URL:
export const SITE_URL = 'https://your-actual-domain.com';
```

### Files to Update with Your Domain:

1. **`index.html`** - Update canonical URL and OG tags
2. **`public/sitemap.xml`** - Update all URLs
3. **`public/robots.txt`** - Update sitemap URL

**Example for index.html:**
```html
<link rel="canonical" href="https://your-domain.com/" />
<meta property="og:url" content="https://your-domain.com/" />
```

---

## 🌍 **STEP 5: Custom Domain (Optional)**

### Vercel Custom Domain

1. Go to your project in Vercel dashboard
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `vantageengineering.com`)
4. Follow DNS instructions:
   - Add A record or CNAME to your domain provider
   - Wait for DNS propagation (5 min - 48 hours)

### Netlify Custom Domain

1. Go to your site in Netlify dashboard
2. Click "Domain settings" → "Add custom domain"
3. Enter your domain
4. Follow DNS instructions
5. Enable HTTPS (automatic with Let's Encrypt)

---

## 🔐 **STEP 6: Environment Variables (Optional)**

If you add backend features later, you'll need environment variables.

### Create `.env.example` file:

```bash
# VITE_API_URL=https://api.yourdomain.com
# VITE_SUPABASE_URL=your-supabase-url
# VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Add to Vercel:
1. Project Settings → Environment Variables
2. Add each variable

### Add to Netlify:
1. Site settings → Environment variables
2. Add each variable

---

## ✅ **Deployment Checklist**

Before deploying to production:

- [ ] Test locally: `npm run build && npm run preview`
- [ ] Check all pages load correctly
- [ ] Verify mobile responsiveness
- [ ] Test all forms and interactions
- [ ] Update `SITE_URL` in `src/data/content.ts`
- [ ] Update canonical URLs in `index.html`
- [ ] Update sitemap.xml with real domain
- [ ] Update robots.txt with real domain
- [ ] Remove any console.log statements
- [ ] Check image loading (no broken images)
- [ ] Verify SEO meta tags
- [ ] Test 404 page
- [ ] Check accessibility (keyboard navigation)

---

## 📊 **Deployment Comparison**

| Feature | Vercel | Netlify | GitHub Pages |
|---------|--------|---------|--------------|
| Setup Time | 2 min | 5 min | 10 min |
| Free Tier | ✅ Generous | ✅ Generous | ✅ Limited |
| Custom Domain | ✅ Free | ✅ Free | ✅ Free |
| HTTPS | ✅ Automatic | ✅ Automatic | ✅ Automatic |
| Preview Deployments | ✅ Yes | ✅ Yes | ❌ No |
| Serverless Functions | ✅ Yes | ✅ Yes | ❌ No |
| Form Handling | ❌ External | ✅ Built-in | ❌ External |
| Analytics | ✅ Built-in | ✅ Built-in | ❌ External |

**Recommendation:** Use **Vercel** for easiest setup and best React/Vite support.

---

## 🔄 **Continuous Deployment**

Once connected to GitHub, both Vercel and Netlify automatically deploy when you push:

```bash
# Make changes
git add .
git commit -m "Update homepage"
git push

# Vercel/Netlify automatically:
# 1. Detect the push
# 2. Build the project
# 3. Deploy to production
# 4. Your site is updated!
```

---

## 🐛 **Troubleshooting Deployment**

### Build Fails on Vercel/Netlify

**Check:**
1. All dependencies in `package.json`
2. Build command is correct: `npm run build`
3. Output directory is correct: `dist`
4. No TypeScript errors: `npm run typecheck`

### 404 on Page Refresh

**Solution:** Already configured in `vercel.json` and `netlify.toml`
- Vercel: Rewrites all routes to `index.html`
- Netlify: Redirects all routes to `index.html`

### Images Not Loading

**Check:**
1. Image URLs are correct
2. Images are in `public/` folder or using external URLs
3. No CORS issues with external images

### Forms Not Working

**Note:** Forms currently show demo success message (no backend)
- To enable real form submission, add a backend service
- Options: Supabase, Formspree, Netlify Forms, Vercel Functions

---

## 📱 **Preview Deployments**

Both Vercel and Netlify create preview URLs for every push:

- **Vercel:** `https://your-project-git-branch.vercel.app`
- **Netlify:** `https://deploy-preview-123--your-site.netlify.app`

Perfect for testing before merging to main!

---

## 🎯 **Quick Deploy Commands**

### Vercel (Fastest)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

---

## 📞 **Need Help?**

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **Vite Deployment:** https://vitejs.dev/guide/static-deploy.html

---

## ✅ **Summary**

**Your deployment workflow:**

1. ✅ Code on GitHub
2. ✅ Connect to Vercel/Netlify
3. ✅ Auto-deploy on every push
4. ✅ Custom domain (optional)
5. ✅ HTTPS enabled automatically

**That's it! Your website is now live on the internet!** 🎉
