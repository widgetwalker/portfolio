
# Portfolio Website

Modern, full-stack React portfolio website showcasing projects, skills, and professional experience with a stunning dark futuristic design.

**Live Site:** [Your Portfolio URL]  
**GitHub:** [widgetwalker](https://github.com/widgetwalker)

---

## 🚀 Features

- **Dynamic GitHub Integration** - Automatically fetches and displays real GitHub repositories
- **Smooth SPA Navigation** - React Router with hash-based routing for seamless page transitions
- **LinkedIn-Synced Timeline** - Professional experience and education timeline
- **Responsive Design** - Mobile-first approach with modern UI/UX
- **Dark Futuristic Theme** - Neon violet and electric cyan accents with glassmorphism effects
- **Animated Components** - Intersection Observer animations and smooth transitions
- **Type-Safe** - Full TypeScript coverage across client and server
=======
# 💼 Portfolio Website

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-0.176-000000?style=for-the-badge&logo=three.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**Live Demo:** [[portfolio-six-puce-65.vercel.app](https://portfolio-six-puce-65.vercel.app)](https://widgetwalker.netlify.app/)

A modern, interactive portfolio website showcasing my work in web development, 3D graphics, and AI/ML. Built with cutting-edge technologies and featuring immersive 3D experiences.

---

## ✨ Features

- 🎨 **Interactive 3D Graphics** - Powered by Three.js and React Three Fiber
- 🌓 **Dark/Light Mode** - Seamless theme switching with next-themes
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎭 **Smooth Animations** - Framer Motion for fluid transitions
- 🎯 **Modern UI Components** - Radix UI primitives with custom styling
- 📊 **Data Visualization** - Interactive charts with Recharts
- 🔍 **SEO Optimized** - Proper meta tags and semantic HTML
>>>>>>> 5fc1e9cda7d310de9ad2f12bbfb00067b8dac464

---

## 🛠️ Tech Stack

### Frontend
<<<<<<< HEAD
- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool with SWC
- **React Router 6** - SPA routing
- **TailwindCSS 3** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Radix UI** - Accessible component primitives (49 components)
- **Lucide React** - Beautiful icons
- **TanStack Query** - Server state management

### Backend
- **Express** - API server
- **CORS** - Cross-origin resource sharing

### Development
- **Vitest** - Unit testing
- **Prettier** - Code formatting
- **npm** - Package management

---

## 📦 Recent Updates

### v1.1.0 - December 2025

**🔧 Fixed GitHub Projects Section**
- ✅ Replaced anchor tags with React Router Links for smooth SPA navigation
- ✅ Removed hardcoded placeholder repositories
- ✅ Increased display limit from 12 to 30 repositories
- ✅ Improved error handling with helpful GitHub profile fallback

**📝 Updated Timeline**  
- ✅ Added current internships at Blend Vidya and Hyderabad Central University
- ✅ Added past internship at Atal Incubation Centre - BIMTECH
- ✅ Added freelance work experience (Content Writer, Student projects)
- ✅ Maintained all education and achievement entries

**⚙️ Configuration Fix**
- ✅ Fixed Vite 403 error by updating file serving permissions

---

## 🎨 Design System

**Color Palette:**
- Background: Deep navy (#0a0e17)
- Primary: Neon violet (#a855f7)
- Accent: Electric cyan (#00aaff)
- Card: Dark slate with transparency

**Typography:**
- Primary: Space Grotesk
- Headings: GFS Decker
- Code: JetBrains Mono

**Effects:**
- Gradient text
- Neon borders
- Glassmorphism cards
- Smooth hover animations
- Fade-up entrance animations
=======
- **Framework:** React 18.3 with TypeScript
- **Build Tool:** Vite 7.1
- **Styling:** Tailwind CSS 3.4 + CSS Modules
- **3D Graphics:** Three.js 0.176 + React Three Fiber + Drei
- **Animations:** Framer Motion 12
- **UI Components:** Radix UI + shadcn/ui
- **Routing:** React Router DOM 6.30
- **State Management:** TanStack Query 5
- **Forms:** React Hook Form + Zod validation

### Backend
- **Runtime:** Node.js with Express 5
- **API:** RESTful endpoints
- **Deployment:** Vercel (Frontend) + Netlify Functions (Serverless)

### Development Tools
- **Package Manager:** pnpm
- **Type Checking:** TypeScript 5.9
- **Code Quality:** Prettier
- **Testing:** Vitest
>>>>>>> 5fc1e9cda7d310de9ad2f12bbfb00067b8dac464

---

## 🚀 Quick Start

### Prerequisites
<<<<<<< HEAD
- Node.js 18+ and npm installed
- Git installed
=======
- Node.js 18+ 
- pnpm (recommended) or npm
>>>>>>> 5fc1e9cda7d310de9ad2f12bbfb00067b8dac464

### Installation

```bash
# Clone the repository
git clone https://github.com/widgetwalker/portfolio.git
cd portfolio

# Install dependencies
<<<<<<< HEAD
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`
=======
pnpm install

# Start development server
pnpm dev
```

The app will be available at `http://localhost:5173`
>>>>>>> 5fc1e9cda7d310de9ad2f12bbfb00067b8dac464

### Build for Production

```bash
<<<<<<< HEAD
# Build both client and server
npm run build

# Build client only
npm run build:client

# Build server only
npm run build:server

# Start production server
npm start
=======
# Build client and server
pnpm build

# Start production server
pnpm start
>>>>>>> 5fc1e9cda7d310de9ad2f12bbfb00067b8dac464
```

---

## 📂 Project Structure

```
portfolio/
<<<<<<< HEAD
├── client/              # React frontend (SPA)
│   ├── pages/          # Route components
│   ├── components/     # Reusable components
│   │   ├── sections/  # Page sections (Hero, Projects, Timeline, etc.)
│   │   ├── layout/    # Header, Footer
│   │   └── ui/        # 49 Radix UI components
│   ├── lib/           # Utilities and config
│   └── global.css     # Theme and global styles
├── server/             # Express API backend
│   ├── routes/        # API endpoints
│   └── index.ts       # Server setup
├── shared/            # Shared types between client/server
└── public/            # Static assets
=======
├── client/                 # Frontend React application
│   ├── components/        # Reusable UI components
│   ├── pages/            # Route pages
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── App.tsx           # Main app component
├── server/                # Backend Express server
├── shared/                # Shared types and utilities
├── public/                # Static assets
├── netlify/              # Netlify serverless functions
└── dist/                 # Production build output
>>>>>>> 5fc1e9cda7d310de9ad2f12bbfb00067b8dac464
```

---

<<<<<<< HEAD
## 🔗 Key Sections

### Hero
- Rotating taglines with crossfade animation
- Profile image with neon effects
- Stats cards (Projects, Hackathons, GPA)

### About
- Personal bio and background
- Focus areas grid (12 specialties)

### Projects
- Dynamic GitHub repository integration
- Filters out forked repos
- Shows top 30 most recently updated projects
- Click through to detailed project pages

### Skills
- Technical skills showcase
- Technology stack display

### Timeline
- Education: BSc Computer Science at Pondicherry University
- Current Internships: Blend Vidya, Hyderabad Central University
- Past Experience: BIMTECH, Freelance work
- Achievements: Awards, Hackathons, Competitions

### Contact
- Contact form
- Social links
=======
## 🎨 Key Sections

### 🏠 Home
Interactive landing page with 3D particle effects and animated typography

### 👨‍💻 About
Personal introduction, skills matrix, and professional journey

### 💼 Projects
Showcase of featured projects with live demos and GitHub links

### 🛠️ Skills
Visual representation of technical proficiencies across multiple domains

### 📫 Contact
Get in touch form with validation and email integration
>>>>>>> 5fc1e9cda7d310de9ad2f12bbfb00067b8dac464

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
<<<<<<< HEAD
npm run vercel-build
# Deploy using Vercel CLI or GitHub integration
```

### Netlify
Uses `netlify.toml` configuration with serverless functions.

### Traditional Node.js
```bash
npm run build
npm start
=======
# Deploy to Vercel
vercel deploy --prod
```

### Netlify
```bash
# Build and deploy
netlify deploy --prod
>>>>>>> 5fc1e9cda7d310de9ad2f12bbfb00067b8dac464
```

---

<<<<<<< HEAD
## ⚙️ Configuration

### GitHub Username
Update in `client/lib/config.ts`:
```typescript
export const GITHUB_USERNAME = "widgetwalker";
```

Or set environment variable:
```bash
VITE_GITHUB_USERNAME=your-username
```

### GitHub API Token (Optional)
For higher API rate limits, set:
```bash
GITHUB_TOKEN=your-token
```

### Theme Colors
Customize in `client/global.css` (HSL CSS variables):
```css
:root {
  --primary: 262 83% 58%;    /* Neon violet */
  --accent: 200 100% 50%;     /* Electric cyan */
  --background: 222 47% 6%;   /* Deep navy */
}
```

---

## 🧪 Testing

```bash
# Run all tests
npm test

# Type checking
npm run typecheck

# Code formatting
npm run format.fix
```

---

## 📝 License

MIT License - feel free to use this template for your own portfolio!
=======
## 📜 License

This project is licensed under the **GPL-3.0 License** - see the [LICENSE](LICENSE) file for details.
>>>>>>> 5fc1e9cda7d310de9ad2f12bbfb00067b8dac464

---

## 🤝 Contributing

<<<<<<< HEAD
This is a personal portfolio, but suggestions and improvements are welcome via issues or pull requests.
=======
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/widgetwalker/portfolio/issues).
>>>>>>> 5fc1e9cda7d310de9ad2f12bbfb00067b8dac464

---

## 📧 Contact

<<<<<<< HEAD
**Dheeraj Pilli**
- GitHub: [@widgetwalker](https://github.com/widgetwalker)
- LinkedIn: [pilli-dheeraj](https://www.linkedin.com/in/pilli-dheeraj/)
- Portfolio: [Your Portfolio URL]

---

Built with ❤️ using React, TypeScript, and modern web technologies.
=======
**Dheeraj Pilli** - [@widgetwalker](https://github.com/widgetwalker)

- 📧 Email: dheeraj5765483@gmail.com
- 💼 LinkedIn: [pillidheeraj](https://linkedin.com/in/pillidheeraj)
- 🌐 Portfolio: [portfolio-six-puce-65.vercel.app](https://portfolio-six-puce-65.vercel.app)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

*Built with ❤️ by Widget-Walker*

</div>
>>>>>>> 5fc1e9cda7d310de9ad2f12bbfb00067b8dac464
