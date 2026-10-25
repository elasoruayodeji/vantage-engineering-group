# View Website on Your Phone - Complete Guide

Since we can't connect to GitHub, here are **two methods** to view your website on your phone.

---

## 🏠 METHOD 1: Local Network (Easiest - Same WiFi)

**Best for:** Quick testing on your own devices, no internet required

### Prerequisites
- Your computer and phone must be on the **same WiFi network**
- Node.js installed
- Project dependencies installed (`npm install`)

### Step 1: Find Your Computer's IP Address

**Windows:**
```bash
ipconfig
```
Look for "IPv4 Address" under your WiFi adapter (usually `192.168.x.x` or `10.x.x.x`)

**Mac:**
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```
Or: System Preferences → Network → WiFi → Advanced → TCP/IP tab → IPv4 Address

**Linux:**
```bash
hostname -I
```

Example IP: `192.168.1.100`

### Step 2: Start the Development Server

```bash
npm run dev
```

You should see output like:
```
  VITE v6.4.3  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://192.168.1.100:3000/
```

### Step 3: Access from Your Phone

1. Open your phone's browser (Safari, Chrome, etc.)
2. Enter the URL: `http://YOUR_IP:3000`
3. Example: `http://192.168.1.100:3000`

### Troubleshooting

**Can't connect? Try these:**

1. **Check Firewall**
   - Windows: Allow Node.js through Windows Defender Firewall
   - Mac: System Preferences → Security & Privacy → Firewall → Allow incoming connections
   
2. **Verify Same Network**
   - Both devices must be on the same WiFi
   - Check you're not on a guest network or VPN

3. **Try Different Port**
   - If 3000 is blocked, edit `vite.config.js` and change port to 8080 or 5173

4. **Use IP Instead of Hostname**
   - Don't use `localhost` on your phone
   - Always use the actual IP address

---

## 🌐 METHOD 2: ngrok (Public URL - Anywhere)

**Best for:** Sharing with others, testing on mobile data, public access

### What is ngrok?
ngrok creates a secure tunnel to your localhost, giving you a public URL that anyone can access.

### Step 1: Install ngrok

**Option A: Download from website**
1. Go to https://ngrok.com/download
2. Download for your OS
3. Extract and add to PATH

**Option B: Using npm (easiest)**
```bash
npm install -g ngrok
```

**Option C: Using Homebrew (Mac)**
```bash
brew install ngrok
```

**Option D: Using Chocolatey (Windows)**
```bash
choco install ngrok
```

### Step 2: Sign Up for ngrok (Free)

1. Go to https://ngrok.com/signup
2. Create a free account
3. Get your authtoken from https://dashboard.ngrok.com/get-started/your-authtoken

### Step 3: Authenticate ngrok

```bash
ngrok config add-authtoken YOUR_AUTH_TOKEN
```

Replace `YOUR_AUTH_TOKEN` with the token from step 2.

### Step 4: Start Your Dev Server

```bash
npm run dev
```

Keep this running in one terminal.

### Step 5: Start ngrok Tunnel

In a **new terminal window**:

```bash
ngrok http 3000
```

You'll see output like:
```
Session Status    online
Account           Your Name (Plan: Free)
Version           3.0.0
Region            United States (us)
Web Interface     http://127.0.0.1:4040
Forwarding        http://abc123.ngrok.io -> http://localhost:3000
Forwarding        https://abc123.ngrok.io -> http://localhost:3000
```

### Step 6: Access Your Site

**From your phone (or anywhere):**
- Open: `https://abc123.ngrok.io` (use the URL from ngrok output)
- Works on mobile data, different WiFi, anywhere!

### ngrok Free Tier Limits
- 1 tunnel at a time
- Random subdomain (changes each restart)
- 40 connections/minute
- Perfect for testing and demos

### Upgrade Options (Optional)
- **Personal ($8/month):** Custom subdomains, no limits
- **Pro ($20/month):** Multiple tunnels, custom domains

---

## 🚀 METHOD 3: Cloudflare Tunnel (Alternative to ngrok)

**Best for:** More stable tunnels, custom domains

### Install cloudflared

**Mac:**
```bash
brew install cloudflared
```

**Windows:**
```bash
choco install cloudflared
```

**Or download:** https://github.com/cloudflare/cloudflared/releases

### Start Tunnel

```bash
cloudflared tunnel --url http://localhost:3000
```

You'll get a URL like: `https://random-name.trycloudflare.com`

---

## 📱 METHOD 4: Vercel/Netlify CLI (Deploy to Real Hosting)

**Best for:** Production-like testing, permanent URL

### Option A: Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts, get permanent URL
```

### Option B: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod

# Get permanent URL
```

Both offer free tiers perfect for testing.

---

## 🔧 Quick Reference Commands

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```
Then access at `http://YOUR_IP:4173`

### Find Your IP (Quick Commands)

**Windows:**
```bash
ipconfig | findstr /i "IPv4"
```

**Mac/Linux:**
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

---

## 🐛 Common Issues & Solutions

### Issue: "Can't access site on phone"

**Solution 1: Check Firewall**
```bash
# Windows - Allow Node through firewall
netsh advfirewall firewall add rule name="Node.js Server" dir=in action=allow program="C:\Program Files\nodejs\node.exe" enable=yes

# Mac - Allow through firewall
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add /usr/local/bin/node
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --unblockapp /usr/local/bin/node
```

**Solution 2: Use Different Port**
Edit `vite.config.js`:
```javascript
server: {
  port: 8080,  // Changed from 3000
}
```

**Solution 3: Disable Firewall Temporarily (Testing Only)**
⚠️ Only for testing, re-enable after!

### Issue: "Page loads but styles/images broken"

**Solution:** Clear browser cache on phone
- Safari: Settings → Safari → Clear History and Website Data
- Chrome: Settings → Privacy → Clear browsing data

### Issue: "Hot reload not working on phone"

**Solution:** The Vite config is already optimized for this. If still broken:
1. Make sure you're using the IP address, not localhost
2. Check that port 3000 is accessible
3. Try hard refresh (pull down to refresh on mobile)

### Issue: "ngrok tunnel disconnects"

**Solution:**
1. Free tier has connection limits
2. Upgrade to paid plan for stability
3. Or use Cloudflare Tunnel (free, more stable)

---

## 📊 Comparison Table

| Method | Setup Time | Cost | Best For | Public Access |
|--------|-----------|------|----------|---------------|
| Local Network | 2 min | Free | Quick testing | ❌ Same WiFi only |
| ngrok | 5 min | Free/Paid | Sharing, demos | ✅ Anywhere |
| Cloudflare | 5 min | Free | Stable tunnels | ✅ Anywhere |
| Vercel | 10 min | Free | Production | ✅ Anywhere |
| Netlify | 10 min | Free | Production | ✅ Anywhere |

---

## 🎯 My Recommendation

**For quick testing on your phone:**
→ Use **Method 1 (Local Network)** - Takes 2 minutes, no setup

**For sharing with clients/team:**
→ Use **Method 2 (ngrok)** - Takes 5 minutes, public URL

**For production deployment:**
→ Use **Vercel or Netlify** - Takes 10 minutes, permanent URL

---

## ✅ Quick Start (Copy-Paste Commands)

### Local Network Method:
```bash
# 1. Find your IP
# Windows: ipconfig
# Mac: ifconfig | grep "inet " | grep -v 127.0.0.1

# 2. Start server
npm run dev

# 3. Open on phone: http://YOUR_IP:3000
```

### ngrok Method:
```bash
# 1. Install ngrok
npm install -g ngrok

# 2. Sign up at https://ngrok.com/signup
# 3. Get authtoken from dashboard

# 4. Authenticate
ngrok config add-authtoken YOUR_TOKEN

# 5. Start server (terminal 1)
npm run dev

# 6. Start tunnel (terminal 2)
ngrok http 3000

# 7. Open the ngrok URL on your phone
```

---

## 📞 Need Help?

If you run into issues:
1. Check that both devices are on the same WiFi (for local network)
2. Verify your firewall isn't blocking Node.js
3. Try a different port (8080, 5173, etc.)
4. Clear browser cache on your phone
5. Restart your dev server

---

**That's it! You should now be able to view your website on your phone.** 🎉
