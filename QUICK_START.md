# 🚀 Quick Start: View Website on Your Phone

## ⚡ FASTEST METHOD (2 minutes)

### Step 1: Find Your Computer's IP Address

**Windows:**
```bash
ipconfig
```
Look for "IPv4 Address" (e.g., `192.168.1.100`)

**Mac/Linux:**
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

### Step 2: Start the Server

**Windows:**
```bash
start-local.bat
```

**Mac/Linux:**
```bash
chmod +x start-local.sh
./start-local.sh
```

**Or manually:**
```bash
npm run dev
```

### Step 3: Open on Your Phone

Make sure your phone is on the **same WiFi** as your computer, then open:

```
http://YOUR_IP:3000
```

Example: `http://192.168.1.100:3000`

**That's it!** 🎉

---

## 🌐 Need Public Access? (Works Anywhere)

Use **ngrok** to get a public URL:

```bash
# Install ngrok
npm install -g ngrok

# Sign up at https://ngrok.com and get your authtoken
ngrok config add-authtoken YOUR_TOKEN

# Start server (terminal 1)
npm run dev

# Start tunnel (terminal 2)
ngrok http 3000
```

You'll get a URL like `https://abc123.ngrok.io` that works anywhere!

---

## 🐛 Troubleshooting

### Can't connect from phone?

1. **Check you're on the same WiFi**
   - Both devices must be on the same network
   - Not guest network, not VPN

2. **Check firewall**
   - Windows: Allow Node.js through Windows Defender Firewall
   - Mac: System Preferences → Security → Firewall → Allow Node

3. **Try different port**
   Edit `vite.config.js`, change port from 3000 to 8080:
   ```javascript
   server: {
     port: 8080,
   }
   ```

4. **Use IP, not localhost**
   - ❌ `http://localhost:3000` (won't work on phone)
   - ✅ `http://192.168.1.100:3000` (use your actual IP)

---

## 📱 What You'll See

Your website will look exactly like it does on your computer:
- ✅ All pages working
- ✅ All animations working
- ✅ All images loading
- ✅ Mobile responsive design
- ✅ Touch interactions working

---

## 📖 Full Documentation

For detailed instructions, see: `VIEW_ON_PHONE.md`

---

## ✅ Summary

| Method | Time | Best For |
|--------|------|----------|
| Local Network | 2 min | Quick testing on your phone |
| ngrok | 5 min | Sharing with others, public access |
| Vercel/Netlify | 10 min | Production deployment |

**Start with local network - it's the fastest!** 🚀
