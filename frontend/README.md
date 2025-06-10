# 🍎 Sangeeta MacOS Portfolio

A stunning, interactive portfolio website inspired by macOS design principles, built with React and featuring smooth animations, modern UI components, and a comprehensive project showcase.

![Portfolio Preview](https://res.cloudinary.com/dfl9rotoy/image/upload/v1749549472/Screenshot_2025-06-10_152642_itfx4x.png)

## ✨ Features

- 🎨 **macOS-Inspired Design** - Authentic Apple-style interface and interactions
- 🚀 **Smooth Animations** - Powered by Framer Motion for fluid user experience
- 🌙 **Dark Mode Support** - Toggle between light and dark themes
- 📂 **Finder-Style Project Browser** - Navigate projects like macOS Finder
- 🔍 **Advanced Search & Filtering** - Find projects by category, technology, or status
- 🎯 **Interactive Project Modals** - Detailed project views with screenshots and features
- ⚡ **Fast Performance** - Optimized loading and smooth interactions
- 🎭 **Dynamic Animations** - Engaging hover effects and transitions

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Animation Library:** Framer Motion
- **Styling:** CSS3 with modern features
- **Build Tool:** Create React App
- **Deployment:** Vercel
- **Image Hosting:** Cloudinary
- **Version Control:** Git & GitHub

## 🚀 Live Demo

Visit the live portfolio: [https://sangeeta-portfolio.vercel.app/](https://sangeeta-portfolio.vercel.app/)

## 📁 Project Structure

```
Sangeeta-MacOs-Portfolio-main/
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── Project.js
│   │   │   ├── Project.css
│   │   │   └── ...
│   │   ├── assets/
│   │   │   └── Sangeeta/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
│   └── README.md
└── README.md
```

## 🎯 Featured Projects

### 1. 🏥 Healthcare Management System
- **Tech Stack:** React, Node.js, MongoDB, Socket.io
- **Features:** Patient management, appointment scheduling, telemedicine
- **Status:** In Progress

### 2. 💕 Matchmaking Pro Platform
- **Tech Stack:** React Native, Firebase, Python, TensorFlow
- **Features:** AI-powered matching, real-time chat, voice calls
- **Status:** In Progress

### 3. 🌤️ Weather Explorer
- **Tech Stack:** React, JavaScript, Weather API
- **Features:** Real-time weather data, 5-day forecasts, interactive charts
- **Status:** Completed

### 4. 💰 Crypto Dashboard
- **Tech Stack:** React, Cryptocurrency APIs
- **Features:** Real-time prices, portfolio tracking, market analysis
- **Status:** Completed

### 5. 🛍️ Electra Shop (Animated)
- **Tech Stack:** React, Framer Motion, CSS3
- **Features:** Animated product showcases, smooth transitions
- **Status:** Completed

### 6. 🎮 3D Landing Page
- **Tech Stack:** React, Spline, WebGL
- **Features:** Interactive 3D models, immersive animations
- **Status:** Completed

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sangeeta-Prajapati/Sangeeta-Mac0S-Portfolio.git
   cd Sangeeta-MacOs-Portfolio-main
   ```

2. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎨 Design Philosophy

This portfolio embraces the **macOS design language** with:

- **Clean Minimalism** - Uncluttered layouts with purposeful whitespace
- **Intuitive Navigation** - Familiar macOS-style interactions
- **Smooth Animations** - Fluid transitions that feel natural
- **Consistent Typography** - San Francisco-inspired font choices
- **Thoughtful Color Palette** - Subtle gradients and modern colors

## 🔧 Customization

### Adding New Projects

1. Open `frontend/src/components/Project.js`
2. Add your project object to the `projects` array:

```javascript
{
  id: 'your-project-id',
  title: 'Your Project Title',
  category: 'web', // or 'mobile', 'desktop'
  description: 'Project description...',
  image: 'project-image-url',
  technologies: ['React', 'Node.js'],
  status: 'completed', // or 'in-progress'
  liveUrl: 'https://your-live-demo.com',
  githubUrl: 'https://github.com/your-repo',
  features: ['Feature 1', 'Feature 2'],
  screenshots: ['screenshot1.jpg', 'screenshot2.jpg']
}
```

### Updating Styles

- Main styles: `frontend/src/components/Project.css`
- Global styles: `frontend/src/App.css`
- Component-specific styles: Individual CSS files

## 🚀 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   cd frontend
   vercel --prod
   ```


## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## 👩‍💻 About the Developer

**Sangeeta Prajapati** - Full Stack Developer

- 🌐 Portfolio: [https://sangeeta-portfolio.vercel.app/](https://sangeeta-portfolio.vercel.app/)
- 💼 GitHub: [@Sangeeta-Prajapati](https://github.com/Sangeeta-Prajapati)
- 📧 Email: [your-email@example.com](mailto:your-email@example.com)

## 🙏 Acknowledgments

- Apple Inc. for the macOS design inspiration
- Framer Motion team for the amazing animation library
- React community for the excellent documentation
- Cloudinary for image hosting services

## 📊 Project Stats

- ⭐ **React Components:** 10+
- 🎨 **CSS Lines:** 2000+
- 📱 **Responsive Breakpoints:** 4
- 🚀 **Performance Score:** 95+
- 📦 **Bundle Size:** < 2MB

---

<div align="center">
  <p>Made with ❤️ by Sangeeta Prajapati</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
