# 🚀 Modern React & Tailwind CSS Personal Portfolio

A sleek, responsive, frontend-only personal portfolio web application built with **React.js**, **Tailwind CSS**, and **Lucide React**.

---

## 🌟 Key Features

- 🌓 **Dark & Light Mode Toggle**: Smooth theme switching with local storage persistence and system preference fallback.
- 📱 **Mobile-First Responsive Design**: Flawless experience across mobile phones (375px+), tablets, laptops, and ultra-wide displays.
- ⚡ **Zero Backend / 100% Frontend**: No databases, APIs, or servers required. All content is stored in a clean, centralized configuration file.
- 💎 **Single Source of Truth (`src/data/portfolio.js`)**: Easily customize your Name, Bio, Social Links, Skills, Projects, Education, and Achievements in one file.
- 🎯 **Interactive Project Modals**: Click "Details" on any project card to view an in-depth breakdown of features, tech stack, and direct GitHub/Live Demo links.
- 📋 **One-Click Email Copy & Toast**: Clicking on the email address copies it to the clipboard and triggers a smooth toast notification.
- 📄 **Curriculum Vitae / Resume Viewer**: Interactive in-app resume summary modal with a print/hire CTA.
- ✨ **Rich Modern Aesthetics**: Electric indigo/cyan gradients, glassmorphism, subtle micro-interactions, and active navigation scroll-spy.

---

## 📂 Project Structure

```
Portplio/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── components/
    │   ├── Navbar.jsx          # Sticky header with active scroll-spy, theme toggle & mobile menu
    │   ├── Hero.jsx            # Dynamic hero section with role gradient, CTAs & code terminal preview
    │   ├── About.jsx           # Bio narrative, structured facts, and 4 highlight cards
    │   ├── Skills.jsx          # Categorized skills (Languages, Frontend, Tools) with filter tabs
    │   ├── Projects.jsx        # Project cards with tags, GitHub and Live Demo buttons
    │   ├── ProjectModal.jsx    # Pop-up modal for detailed project highlights
    │   ├── Education.jsx       # Academic timeline cards with coursework & achievements
    │   ├── Achievements.jsx    # Certifications & Hackathon milestones
    │   ├── Contact.jsx         # Contact cards, copy-to-clipboard & validated frontend message form
    │   ├── Footer.jsx          # Footer with back-to-top button & social links
    │   ├── ResumeModal.jsx     # In-app CV preview modal with print support
    │   └── Toast.jsx           # Reusable notification toast
    ├── context/
    │   └── ThemeContext.jsx    # Dark/Light theme state and persistent storage
    ├── data/
    │   └── portfolio.js        # Central data file - Edit all your info here!
    ├── App.jsx                 # Main layout coordinator
    ├── main.jsx                # App bootstrap
    └── index.css               # Tailwind directives, custom scrollbars & glassmorphism utilities
```

---

## 🛠️ How to Customize Your Portfolio

Open [`src/data/portfolio.js`](./src/data/portfolio.js) in your editor and update any fields:

- **Personal Info**: Update `name`, `role`, `college`, `location`, `email`, `github`, `linkedin`, `availability`.
- **About Me**: Update `story`, `details.studying`, `details.interests`, `details.learning`, `details.careerGoals`.
- **Skills**: Add or remove items in `skills.list` with categories: `languages`, `frontend`, or `tools`.
- **Projects**: Add your own project name, description, tags, GitHub link, and live demo link in `projects`.
- **Education & Achievements**: Update your degrees, graduation years, grades, and certifications in `education` and `achievements`.

---

## 🚀 Running the Project Locally

### 1. Start the Dev Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 3. Deploy to Vercel / Netlify / GitHub Pages
- **Vercel**: Run `npx vercel` or connect your GitHub repository directly to Vercel (Framework preset: Vite).
- **Netlify**: Connect your GitHub repository with build command `npm run build` and publish directory `dist`.
