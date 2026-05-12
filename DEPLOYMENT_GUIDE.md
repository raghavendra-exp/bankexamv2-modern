# 🚀 Deployment Guide - Exam AI Prompt Generator

Complete guide to deploy your application on various hosting platforms.

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [GitHub Pages](#github-pages)
3. [Vercel](#vercel)
4. [Netlify](#netlify)
5. [Railway](#railway)
6. [Render](#render)
7. [AWS Amplify](#aws-amplify)
8. [Self-Hosted (VPS)](#self-hosted-vps)
9. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before deploying, ensure you have:

- Node.js 18+ installed locally
- Git installed and configured
- A GitHub account (for most platforms)
- The project files from this ZIP

### Local Setup

```bash
# Navigate to project directory
cd bankexamv2-modern

# Install dependencies
pnpm install

# Build the project
pnpm run build

# Test locally
pnpm run preview
```

---

## GitHub Pages

**Best for:** Free hosting with custom domain support

### Step 1: Create GitHub Repository

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: Exam AI Prompt Generator"

# Create new repository on GitHub
# Go to https://github.com/new
# Name: bankexamv2-modern
# Make it PUBLIC (required for free GitHub Pages)

# Add remote and push
git remote add origin https://github.com/YOUR_USERNAME/bankexamv2-modern.git
git branch -M main
git push -u origin main
```

### Step 2: Configure for GitHub Pages

Edit `package.json` and add:

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/bankexamv2-modern",
  "scripts": {
    "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
    "deploy": "gh-pages -d dist"
  },
  "devDependencies": {
    "gh-pages": "^6.1.1"
  }
}
```

### Step 3: Build and Deploy

```bash
# Install gh-pages
pnpm add -D gh-pages

# Build
pnpm run build

# Deploy to GitHub Pages
pnpm run deploy
```

### Step 4: Enable GitHub Pages

1. Go to repository Settings → Pages
2. Select "Deploy from a branch"
3. Choose `gh-pages` branch
4. Click Save

Your site will be live at: `https://YOUR_USERNAME.github.io/bankexamv2-modern`

### Custom Domain (Optional)

1. In Settings → Pages, add your custom domain
2. Update DNS records at your domain registrar:
   - Add CNAME record pointing to `YOUR_USERNAME.github.io`
3. Wait for DNS propagation (5-30 minutes)

---

## Vercel

**Best for:** Automatic deployments, fast performance, easy setup

### Step 1: Push to GitHub

```bash
git push origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Select "Other" as framework (since it's a custom Vite setup)
5. Build Command: `pnpm run build`
6. Output Directory: `dist`
7. Click Deploy

### Step 3: Configure Environment (if needed)

In Vercel dashboard:
- Settings → Environment Variables
- Add any required environment variables

Your site will be live at: `https://bankexamv2-modern.vercel.app`

### Custom Domain

1. Settings → Domains
2. Add your custom domain
3. Follow DNS instructions provided

---

## Netlify

**Best for:** Easy drag-and-drop, great UI, free tier

### Option A: Git Integration (Recommended)

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect GitHub account
4. Select your repository
5. Configure:
   - Build command: `pnpm run build`
   - Publish directory: `dist`
6. Click Deploy

### Option B: Manual Upload

1. Build locally: `pnpm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Your site is live!

### Custom Domain

1. Domain settings → Add custom domain
2. Update DNS records at your registrar
3. Wait for propagation

---

## Railway

**Best for:** Full-stack apps, database support, easy scaling

### Step 1: Create Railway Account

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub

### Step 2: Create New Project

1. Click "New Project"
2. Select "GitHub Repo"
3. Choose your repository
4. Railway auto-detects Node.js

### Step 3: Configure

In Railway dashboard:
- Variables: Add any environment variables
- Domains: Add custom domain
- Deploy button will appear automatically

Your site will be live with auto-deployment on every push!

---

## Render

**Best for:** Simple deployment, free tier, easy setup

### Step 1: Create Account

1. Go to [render.com](https://render.com)
2. Sign up with GitHub

### Step 2: Create Web Service

1. Click "New +" → "Web Service"
2. Connect GitHub repository
3. Configure:
   - Name: `bankexamv2-modern`
   - Environment: `Node`
   - Build Command: `pnpm install && pnpm run build`
   - Start Command: `pnpm run preview`
   - Publish directory: `dist`
4. Click Create Web Service

### Step 3: Add Custom Domain

- Settings → Custom Domain
- Add your domain
- Update DNS records

---

## AWS Amplify

**Best for:** AWS ecosystem, scalability, advanced features

### Step 1: Connect Repository

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "New app" → "Host web app"
3. Select GitHub
4. Authorize and select your repository

### Step 2: Configure Build

```
Build settings:
- Build command: pnpm run build
- Base directory: (leave empty)
- Build output directory: dist
```

### Step 3: Deploy

Click "Save and deploy" - AWS Amplify will handle the rest!

---

## Self-Hosted (VPS)

**Best for:** Full control, custom configuration, privacy

### Prerequisites

- VPS with Ubuntu 22.04 (DigitalOcean, Linode, AWS EC2, etc.)
- SSH access to your server
- Domain name

### Step 1: Server Setup

```bash
# SSH into your server
ssh root@YOUR_SERVER_IP

# Update system
apt update && apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt install -y nodejs

# Install pnpm
npm install -g pnpm

# Install PM2 (process manager)
npm install -g pm2

# Install Nginx (reverse proxy)
apt install -y nginx
```

### Step 2: Deploy Application

```bash
# Clone repository
cd /var/www
git clone https://github.com/YOUR_USERNAME/bankexamv2-modern.git
cd bankexamv2-modern

# Install dependencies
pnpm install

# Build
pnpm run build

# Start with PM2
pm2 start "pnpm run preview" --name "exam-ai"
pm2 startup
pm2 save
```

### Step 3: Configure Nginx

Create `/etc/nginx/sites-available/exam-ai`:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:4173;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:

```bash
ln -s /etc/nginx/sites-available/exam-ai /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

### Step 4: SSL Certificate (HTTPS)

```bash
# Install Certbot
apt install -y certbot python3-certbot-nginx

# Get certificate
certbot --nginx -d your-domain.com -d www.your-domain.com

# Auto-renewal is automatic
```

### Step 5: Update DNS

Point your domain to your server IP:
- A record: `your-domain.com` → `YOUR_SERVER_IP`
- A record: `www.your-domain.com` → `YOUR_SERVER_IP`

---

## Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm run build
```

### Music File Not Loading

The music file is at `/study-beats-lofi.mp3`. Ensure it's in the `public` folder:

```bash
# Copy music file to public
cp client/src/assets/study-beats-lofi.mp3 client/public/
```

### Environment Variables Not Working

1. Check `.env` file exists in root
2. Verify variable names match in code
3. Restart build process

### CORS Issues

Add to `vite.config.ts`:

```typescript
server: {
  cors: true,
  proxy: {
    '/api': {
      target: 'https://api.example.com',
      changeOrigin: true,
    }
  }
}
```

### Port Already in Use

```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 PID
```

---

## Performance Tips

1. **Enable Gzip Compression** (Nginx/Vercel handles automatically)
2. **Use CDN** (Vercel/Netlify do this automatically)
3. **Optimize Images** (Already done with Tailwind)
4. **Cache Headers** (Set in Nginx or platform settings)
5. **Monitor Performance** (Use Lighthouse, WebPageTest)

---

## Support & Resources

- **Vite Docs:** https://vitejs.dev
- **React Docs:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com
- **GitHub Pages:** https://pages.github.com
- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com

---

## Next Steps

After deployment:

1. ✅ Test all features on live site
2. ✅ Set up analytics (Google Analytics, Vercel Analytics)
3. ✅ Configure domain email (optional)
4. ✅ Set up monitoring/alerts
5. ✅ Create backup strategy
6. ✅ Document any custom configurations

---

**Happy Deploying! 🎉**
