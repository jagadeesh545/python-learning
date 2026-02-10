## Python Software Engineering – Backend & Microservices

A modern, interactive learning platform for Python backend engineering and microservices, inspired by the `hpc-ai` React app.

### Prerequisites
- Node.js 16+
- npm 8+

### Installation
```bash
git clone https://github.com/yourusername/python-learning.git
cd python-learning
npm install
```

### Development
```bash
npm run dev
```
Open `http://localhost:5173/python-learning/` in your browser.

### Production Build
```bash
npm run build
```
The `dist/` folder contains production-ready files for GitHub Pages.

### Deployment to GitHub Pages

This project uses the `gh-pages` npm package for automated GitHub Pages deployment.

**One-time setup:**
1. Ensure `package.json` has `homepage` set to your GitHub Pages URL.
2. In GitHub, go to **Settings → Pages** and set:
   - Source: Deploy from a branch  
   - Branch: `gh-pages`  
   - Folder: `/ (root)`

**Deploy workflow:**
```bash
git add .
git commit -m "Your changes"
git push origin main

npm run deploy
```

The `main` branch holds the source code and the `gh-pages` branch holds the built static site.
