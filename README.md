# Gabriel Labriaga - Professional Portfolio

A modern, sophisticated React portfolio website showcasing digital marketing expertise, video production, and graphic design services.

## ✨ Features

- **Modern Design**: Elegant, professional aesthetic with smooth animations
- **Fully Responsive**: Perfect on desktop, tablet, and mobile devices
- **Optimized Performance**: Fast loading and smooth scrolling
- **Professional Photo**: Enhanced profile image with custom styling
- **Contact Form**: Easy-to-use contact form with email integration
- **Portfolio Showcase**: Featured work samples and case studies
- **Service Overview**: Comprehensive service listings

## 🚀 Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. **Create a GitHub Repository**
   ```bash
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial commit"
   
   # Create repository on GitHub, then:
   git remote add origin https://github.com/yourusername/portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Update package.json**
   - Open `package.json`
   - Change `"homepage"` to: `"https://yourusername.github.io/portfolio"`
   - Replace `yourusername` with your GitHub username
   - Replace `portfolio` with your repository name

3. **Install Dependencies & Deploy**
   ```bash
   npm install
   npm run deploy
   ```

   This will:
   - Build your React app
   - Create a `gh-pages` branch
   - Push the build to GitHub Pages
   - Your site will be live at: `https://yourusername.github.io/portfolio`

### Option 2: Manual Deployment

1. **Build the project**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy build folder**
   - Go to your GitHub repository settings
   - Navigate to Pages section
   - Select `gh-pages` branch as source
   - Or manually push the `build` folder contents to `gh-pages` branch

### Option 3: GitHub Actions (Most Professional)

1. **Create `.github/workflows/deploy.yml`**
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       
       steps:
       - uses: actions/checkout@v3
       
       - name: Setup Node.js
         uses: actions/setup-node@v3
         with:
           node-version: '18'
           
       - name: Install dependencies
         run: npm ci
         
       - name: Build
         run: npm run build
         
       - name: Deploy
         uses: peaceiris/actions-gh-pages@v3
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./build
   ```

2. **Push to GitHub**
   - Every push to `main` will automatically build and deploy

## 🛠️ Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm start
   ```

3. **Open browser**
   - Navigate to `http://localhost:3000`
   - Changes will auto-reload

## 📝 Customization

### Update Personal Information
Edit `src/Portfolio.jsx`:
- Line 150-160: Hero section text
- Line 450-480: About section content
- Line 700-900: Services offered
- Line 1100-1200: Contact information

### Change Colors
Edit CSS variables in `src/Portfolio.jsx` (lines 50-60):
```css
:root {
  --primary: #CDA45E;        /* Main accent color */
  --primary-dark: #A58344;   /* Hover states */
  --accent: #F5F5DC;         /* Secondary accent */
  --dark: #0A0A0A;           /* Background */
  --text: #E8E8E8;           /* Text color */
}
```

### Update Photo
Replace `public/profile.png` with your own professional photo

### Modify Services
Edit the services array in the Services section (around line 600)

## 📦 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── profile.png          # Your professional photo
├── src/
│   ├── App.js              # Main app component
│   ├── Portfolio.jsx       # Portfolio component
│   └── index.js            # Entry point
├── package.json
└── README.md
```

## 🎨 Design Features

- **Typography**: Elegant Cormorant Garamond serif paired with Work Sans sans-serif
- **Color Scheme**: Sophisticated gold (#CDA45E) accents on dark background
- **Animations**: Smooth fade-in, slide, and hover effects
- **Layout**: Modern grid-based responsive design
- **Accessibility**: Semantic HTML and proper ARIA labels

## 📧 Contact Form

The contact form is configured to open the user's email client with pre-filled information. To use a backend service:

1. **EmailJS**: Free service for form submissions
2. **Formspree**: Simple form backend
3. **Netlify Forms**: If deploying to Netlify
4. **Custom API**: Build your own backend

## 🔗 Links to Update

Before deployment, update these links in `src/Portfolio.jsx`:
- Email: `goldengraphixstudios@gmail.com`
- Portfolio Drive: Google Drive link (line 1050)
- Online Portfolio: Canva site link (line 1060)

## 📱 Responsive Breakpoints

- Desktop: 1024px and above
- Tablet: 768px - 1023px
- Mobile: Below 768px

## 🚀 Performance

- Optimized images
- CSS-only animations (no JavaScript animation libraries)
- Minimal dependencies
- Code splitting enabled
- Production build minified

## 📄 License

© 2025 Gabriel Labriaga. All Rights Reserved.

---

## 🆘 Troubleshooting

### Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deployment not working
- Check `homepage` URL in `package.json` matches your GitHub Pages URL
- Ensure `gh-pages` package is installed
- Verify GitHub Pages is enabled in repository settings

### Images not loading
- Ensure images are in `public` folder
- Use `process.env.PUBLIC_URL + "/image.png"` for image paths
- Check browser console for 404 errors

---

**Need help?** Contact: goldengraphixstudios@gmail.com
