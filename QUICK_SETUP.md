# 🚀 Quick Setup Guide

## Get Your Portfolio Live in 5 Minutes!

### Step 1: Download & Extract
Download all the files and extract them to a folder on your computer.

### Step 2: Update Your GitHub Username
Open `package.json` and change this line:
```json
"homepage": "https://yourusername.github.io/portfolio"
```
Replace `yourusername` with your actual GitHub username.

### Step 3: Create GitHub Repository
1. Go to github.com
2. Click the "+" button → "New repository"
3. Name it `portfolio` (or any name you like)
4. Don't initialize with README
5. Click "Create repository"

### Step 4: Deploy!
Open terminal/command prompt in your project folder and run:

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Connect to GitHub (replace with your repository URL)
git remote add origin https://github.com/yourusername/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main

# Install dependencies and deploy
npm install
npm run deploy
```

### Step 5: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings"
3. Click "Pages" in the left sidebar
4. Select `gh-pages` branch as source
5. Click "Save"

### Done! 🎉
Your portfolio will be live at: `https://yourusername.github.io/portfolio`

---

## 💡 What's Different from the Old Portfolio?

### ✅ Improvements Made:
1. **No More Emojis** - Replaced with professional icons and symbols
2. **Your Professional Photo** - Featured prominently with elegant styling
3. **Modern React Framework** - Better performance and maintainability
4. **Cleaner Design** - Refined, sophisticated aesthetic
5. **Better Typography** - Elegant Cormorant Garamond + Work Sans
6. **Smooth Animations** - Professional fade-ins and transitions
7. **Mobile Optimized** - Perfect on all devices
8. **Better Contact Form** - Cleaner layout and validation

### 🎨 Design Philosophy:
- **Elegant & Professional**: Gold accents on dark background
- **Typography-Focused**: Beautiful serif/sans-serif pairing
- **Sophisticated**: Refined details and subtle animations
- **Portfolio-First**: Your work takes center stage

---

## 📝 Quick Customization

### Change Your Photo
Replace `public/profile.png` with your new photo

### Update Contact Info
Edit `src/Portfolio.jsx` - search for:
- `goldengraphixstudios@gmail.com`
- Google Drive link
- Canva portfolio link

### Modify Colors
In `src/Portfolio.jsx`, find the CSS variables section:
```css
--primary: #CDA45E;  /* Change this for different accent color */
```

### Add/Remove Services
Edit the services section in `src/Portfolio.jsx` (around line 600)

---

## 🆘 Need Help?

**Common Issues:**

1. **npm not found**: Install Node.js from nodejs.org
2. **Permission denied**: Run terminal as administrator/sudo
3. **Deploy failed**: Check your GitHub username in package.json
4. **Site not loading**: Wait 2-3 minutes after deployment

**Still stuck?** Email: goldengraphixstudios@gmail.com

---

## 🎯 Next Steps

After deployment:
1. Test on different devices
2. Share your new portfolio link
3. Update your social media bios
4. Send to potential clients!

**Your new portfolio URL:**
`https://yourusername.github.io/portfolio`

(Replace `yourusername` with your actual GitHub username)
