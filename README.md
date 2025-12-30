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

---

## 🛠️ Tech Stack

### Frontend
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

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm installed
- Git installed

### Installation

```bash
# Clone the repository
git clone https://github.com/widgetwalker/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`

### Build for Production

```bash
# Build both client and server
npm run build

# Build client only
npm run build:client

# Build server only
npm run build:server

# Start production server
npm start
```

---

## 📂 Project Structure

```
portfolio/
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
```

---

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

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm run vercel-build
# Deploy using Vercel CLI or GitHub integration
```

### Netlify
Uses `netlify.toml` configuration with serverless functions.

### Traditional Node.js
```bash
npm run build
npm start
```

---

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

---

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome via issues or pull requests.

---

## 📧 Contact

**Dheeraj Pilli**
- GitHub: [@widgetwalker](https://github.com/widgetwalker)
- LinkedIn: [pilli-dheeraj](https://www.linkedin.com/in/pilli-dheeraj/)
- Portfolio: [Your Portfolio URL]

---

Built with ❤️ using React, TypeScript, and modern web technologies.
