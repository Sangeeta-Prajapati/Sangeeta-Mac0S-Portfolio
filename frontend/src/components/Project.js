import React, { useState } from 'react';
import { motion } from 'framer-motion';

import './Project.css';

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [currentPath, setCurrentPath] = useState('Projects');

  const projects = [

    // 01. Healthcare Management System
    {
      id: 'healthcare-app',
      title: 'Healthcare Management System',
      category: 'web',
      description: 'A comprehensive healthcare management platform with patient records, appointment scheduling, and telemedicine features.',
      image: 'https://res.cloudinary.com/dfnj5fh0i/image/upload/v1749099571/DoctorSelection_bterjz.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express'],
      status: 'in-progress',
      liveUrl: 'https://healthcare-demo.com',
      githubUrl: 'https://github.com/Sangeeta-Prajapati/HealthCare-Project',
      features: [
        'Patient Management System',
        'Appointment Scheduling',
        'Telemedicine Integration',
        'Medical Records Management',
        'Real-time Notifications',
        'Prescription Management'
      ],
      screenshots: [
        'https://res.cloudinary.com/dfnj5fh0i/image/upload/v1749099571/AppointmentPreview_tkq3yh.png',
        'https://res.cloudinary.com/dfnj5fh0i/image/upload/v1749099571/AppointmentBooking_rezbxg.png',
        'https://res.cloudinary.com/dfnj5fh0i/image/upload/v1749099575/SignUp_In_xk4jlz.png'
      ]
    },

    // 02. Matrimonial Software
    {
      id: 'matchmaking-pro',
      title: 'Matchmaking Pro Platform',
      category: 'mobile',
      description: 'An advanced matchmaking platform with AI-powered compatibility matching and real-time chat features.',
      image: 'https://res.cloudinary.com/dfnj5fh0i/image/upload/v1749099572/MP-Dashboard_mdp0i4.png',
      technologies: ['React Native', 'Firebase', 'Python', 'TensorFlow', 'WebRTC'],
      status: 'in-progress',
      liveUrl: 'https://matchmaking-demo.com',
      githubUrl: 'https://github.com/Sangeeta-Prajapati/Matrimonial-Project',
      features: [
        'AI-Powered Matching Algorithm',
        'Real-time Chat System',
        'Voice Call Integration',
        'Profile Verification',
        'Advanced Filtering',
        'Compatibility Scoring'
      ],
      screenshots: [
        'https://res.cloudinary.com/dfnj5fh0i/image/upload/v1749099572/ProfileView_h7prhv.png',
        'https://res.cloudinary.com/dfnj5fh0i/image/upload/v1749099572/LiveStatus_hf5pfe.png',
        'https://res.cloudinary.com/dfnj5fh0i/image/upload/v1749099571/CallRecording_qu5vft.png'
      ]
    },

    //03. Portfolio Project
    {
      id: 'portfolio',
      title: 'Interactive Portfolio Website',
      category: 'web',
      description: 'A modern, interactive portfolio website built with React and featuring macOS-inspired design elements.',
      image: 'https://res.cloudinary.com/dfl9rotoy/image/upload/v1749545880/Screenshot_2025-06-05_144737_nnnzxs.png',
      technologies: ['React', 'Framer Motion', 'CSS3', 'JavaScript', 'Vercel'],
      status: 'completed',
      liveUrl: 'https://sangeeta-portfolio.vercel.app/',
      githubUrl: 'https://github.com/Sangeeta-Prajapati/Sangeeta-Portfolio.git',
      features: [
        'macOS-Inspired Interface',
        'Interactive Animations',
        'Responsive Design',
        'Dark Mode Support',
        'Project Showcase',
        'Contact Integration'
      ],
      screenshots: [
        'https://res.cloudinary.com/dfl9rotoy/image/upload/v1749546204/Screenshot_2025-06-10_143259_urawec.png',
        'https://res.cloudinary.com/dfl9rotoy/image/upload/v1749546204/Screenshot_2025-06-10_143259_urawec.png'
      ]
    },

    // 04. Weather Forecast

        {
      id: 'weather-forecast',
      title: 'Weather Explorer',
      category: 'weather-forecast',
      description: 'A comprehensive weather forecasting application that brings real-time weather data to life with stunning visuals and intuitive user experience. Get instant access to current weather conditions, hourly forecasts, and 5-day predictions. The dashboard features dynamic weather icons,temperature trends, and detailed meteorological data including humidity, wind speed, and atmospheric pressure. ',
      image: 'https://res.cloudinary.com/dfl9rotoy/image/upload/v1749542497/Screenshot_2025-06-01_141802_1_ojagjw.png',
      technologies: ['React', 'Framer Motion', 'CSS3', 'JavaScript', 'Vercel'],
      status: 'completed',
      liveUrl: 'https://weather-data-forecast-frontend-assgn.vercel.app/',
      githubUrl: 'https://github.com/Sangeeta-Prajapati/WeatherData-Forecast-Frontend-Assgn',
      features: [
       'Real-time Weather Data',
        'Hourly Weather Forecasts',
        '5-Day Weather Predictions',
        'Dynamic Weather Icons',
        'Temperature Trends & Charts',
        'Humidity & Wind Speed Tracking',
        'Atmospheric Pressure Monitoring',
        'Location-based Weather Search',
        'Responsive Weather Dashboard',
        'Weather Alerts & Notifications'
      ],
      screenshots: [
        'https://res.cloudinary.com/dfl9rotoy/image/upload/v1749542600/Screenshot_2025-06-01_141917_vwedan.png',
        'https://res.cloudinary.com/dfl9rotoy/image/upload/v1749542600/Screenshot_2025-06-01_141917_vwedan.png'
      ]
    },

    // 05. Crypto Current Tracker

        {
      id: 'crypto-currency-tracker',
      title: 'Crypto Dashboard',
      category: 'crypto-currency-tracker',
      description: 'A comprehensive cryptocurrency tracking dashboard that provides real-time market data, price analysis, and portfolio management tools with an intuitive and modern interface.  Track live cryptocurrency prices, market cap, volume, and price changes across hundreds of digital assets. The dashboard features interactive charts, trending coins, and detailed market statistics with automatic data refresh.  Browse and filter through thousands of cryptocurrencies with advanced search functionality. Compare different coins, view historical data, and analyze market trends with interactive price charts and downloads into excel, PNG and SVG.',
      image: 'https://res.cloudinary.com/dfl9rotoy/image/upload/v1749542949/Screenshot_2025-06-01_142628_b73m0y.png',
      technologies: ['React', 'Framer Motion', 'CSS3', 'JavaScript', 'Vercel'],
      status: 'completed',
      liveUrl: 'https://reacts-dashboard-crypo-project.vercel.app/',
      githubUrl: 'https://github.com/Sangeeta-Prajapati/Reacts-Dashboard--Crypo--Project',
      features: [
 'Real-time Cryptocurrency Prices',
        'Market Cap & Volume Tracking',
        'Interactive Price Charts',
        'Portfolio Management Tools',
        'Trending Coins Dashboard',
        'Advanced Search & Filtering',
        'Historical Data Analysis',
        'Price Change Indicators',
        'Export Data (Excel, PNG, SVG)',
        'Responsive Crypto Dashboard'
      ],
      screenshots: [
        'https://res.cloudinary.com/dfl9rotoy/image/upload/v1749542965/Screenshot_2025-06-01_142725_mqkwst.png',
        'https://res.cloudinary.com/dfl9rotoy/image/upload/v1749542965/Screenshot_2025-06-01_142725_mqkwst.png'
      ]
    },

    
    // 06. Animated Electra Shop

        {
      id: 'electra-shop',
      title: 'Electra Homepage',
      category: 'electra-shop',
      description: 'A comprehensive cryptocurrency tracking dashboard that provides real-time market data, price analysis, and portfolio management tools with an intuitive and modern interface.  Track live cryptocurrency prices, market cap, volume, and price changes across hundreds of digital assets. The dashboard features interactive charts, trending coins, and detailed market statistics with automatic data refresh.  Browse and filter through thousands of cryptocurrencies with advanced search functionality. Compare different coins, view historical data, and analyze market trends with interactive price charts and downloads into excel, PNG and SVG.',
      image: 'https://res.cloudinary.com/dfl9rotoy/image/upload/v1749543352/Screenshot_2025-06-01_142215_ybea85.png',
      technologies: ['React', 'Framer Motion', 'CSS3', 'JavaScript', 'Vercel'],
      status: 'completed',
      liveUrl: 'https://electra-shop-animated.vercel.app/',
      githubUrl: 'https://github.com/Sangeeta-Prajapati/ElectraShop-animated',
      features: [
       'Animated Product Showcases',
        'Interactive Shopping Experience',
        'Smooth Page Transitions',
        'Modern E-commerce Design',
        'Responsive Product Gallery',
        'Animated Cart Functionality',
        'Dynamic Product Filtering',
        'Hover Effects & Animations',
        'Mobile-Optimized Interface',
        'Framer Motion Integrations'

      ],
      screenshots: [
        'https://res.cloudinary.com/dfl9rotoy/image/upload/v1749543359/Screenshot_2025-06-01_142310_umszjm.png',
        'https://res.cloudinary.com/dfl9rotoy/image/upload/v1749543352/Screenshot_2025-06-01_142215_ybea85.png'
      ]
    },


     // 07. 3D-Animation

        {
      id: '3d-animation',
      title: '3D Landing Page',
      category: '3d-animation',
      description: ' An immersive 3D animated landing page that showcases cutting-edge web technologies with stunning visual effects, interactive 3D elements, and smooth animations that create an unforgettable user experience. Experience breathtaking 3D models and animations created with Spline that respond to user interactions. From floating objects to rotating geometries, every element is designed to engage and captivate visitors with smooth, realistic movements.',
      image: 'https://res.cloudinary.com/dfl9rotoy/image/upload/v1749544895/Screenshot_2025-06-01_142049_k6rsin.png',
      technologies: ['React', 'Framer Motion', 'CSS3', 'JavaScript', 'Vercel'],
      status: 'completed',
      liveUrl: 'https://3-d-animation-two.vercel.app/',
      githubUrl: 'https://github.com/Sangeeta-Prajapati/3D-animation-',
      features: [
       'Interactive 3D Models',
        'Spline 3D Integrations',
        'Floating Object Animations',
        'Rotating Geometries',
        'Smooth 3D Transitions',
        'User-Responsive Elements',
        'Immersive Visual Effects',
        'Real-time 3D Rendering',
        'Touch & Mouse Interactions',
        'WebGL Performance Optimization'

      ],
      screenshots: [
        'https://res.cloudinary.com/dfl9rotoy/image/upload/v1749544905/Screenshot_2025-06-01_142116_my54xt.png',
        'https://res.cloudinary.com/dfl9rotoy/image/upload/v1749544905/Screenshot_2025-06-01_142116_my54xt.png'
      ]
    },

    




  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: '📁', count: projects.length },
    { id: 'web', name: 'Web Apps', icon: '🌐', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', name: 'Mobile Apps', icon: '📱', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'desktop', name: 'Desktop Apps', icon: '💻', count: projects.filter(p => p.category === 'desktop').length }
  ];

  const sidebarSections = [
    { 
      name: 'Categories', 
      icon: '📂', 
      items: categories.map(cat => ({ name: cat.name, icon: cat.icon, count: cat.count, id: cat.id }))
    },
    { 
      name: 'Status', 
      icon: '🏷️', 
      items: [
        { name: 'Completed', icon: '✅', count: projects.filter(p => p.status === 'completed').length },
        { name: 'In Progress', icon: '🔄', count: projects.filter(p => p.status === 'in-progress').length }
      ]
    },
    { 
      name: 'Technologies', 
      icon: '⚙️', 
      items: [
        { name: 'React', icon: '⚛️', count: projects.filter(p => p.technologies.includes('React')).length },
        { name: 'Node.js', icon: '🟢', count: projects.filter(p => p.technologies.includes('Node.js')).length },
        { name: 'Mobile', icon: '📱', count: projects.filter(p => p.technologies.includes('React Native')).length }
      ]
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    const category = categories.find(cat => cat.id === categoryId);
    setCurrentPath(category ? category.name : 'Projects');
  };

  // Helper function to handle image loading errors
  const handleImageError = (e) => {
    e.target.src = 'https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/fallback/project-placeholder.jpg';
  };

  return (
    <div className="projects-finder">
      {/* Finder-style Toolbar */}
      <div className="projects-toolbar">
        <div className="toolbar-left">
          <button className="nav-btn">←</button>
          <button className="nav-btn">→</button>
          <span className="current-path">{currentPath}</span>
        </div>
        <div className="toolbar-center">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search Projects" />
          </div>
        </div>
        <div className="toolbar-right">
          <button 
            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            ⊞
          </button>
          <button 
            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
          >
            ☰
          </button>
        </div>
      </div>

      <div className="projects-main">
        {/* Finder-style Sidebar */}
        <motion.div 
          className="projects-sidebar"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {sidebarSections.map((section, index) => (
            <div key={index} className="sidebar-section">
              <div className="section-header">
                <span className="section-icon">{section.icon}</span>
                <span className="section-name">{section.name}</span>
              </div>
              <div className="section-items">
                {section.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className={`sidebar-item ${item.id === selectedCategory ? 'active' : ''}`}
                    onClick={() => item.id && handleCategoryClick(item.id)}
                  >
                    <span className="item-icon">{item.icon}</span>
                    <span className="item-name">{item.name}</span>
                    <span className="item-count">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Projects Content Area */}
        <motion.div 
          className="projects-content-area"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className={`projects-container ${viewMode}`}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-item"
                whileHover={{ scale: viewMode === 'grid' ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                onClick={() => openProjectModal(project)}
              >
                <div className="project-icon">
                  <div className="project-preview">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      onError={handleImageError}
                      loading="lazy"
                    />
                  </div>
                  <div className="project-status-badge">
                    <span className={`status-indicator ${project.status}`}>
                      {project.status === 'completed' ? '✅' : '🔄'}
                    </span>
                  </div>
                </div>
                <div className="project-info">
                  <div className="project-name">{project.title}</div>
                  <div className="project-meta">
                    <span className="project-category">
                      {categories.find(cat => cat.id === project.category)?.name || 'Project'}
                    </span>
                    <span className="project-tech-count">
                      {project.technologies.length} technologies
                    </span>
                  </div>
                </div>
                {viewMode === 'list' && (
                  <div className="project-actions">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="action-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      🚀
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="action-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      📂
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="project-modal-overlay"
          onClick={closeProjectModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className="modal-title">
                <h2>{selectedProject.title}</h2>
                <div className="modal-category">
                  {categories.find(cat => cat.id === selectedProject.category)?.name}
                </div>
              </div>
              <button className="close-btn" onClick={closeProjectModal}>
                ✕
              </button>
            </div>
            
            <div className="modal-content">
              <div className="modal-body">
                <div className="modal-left">
                  <div className="project-description">
                    <h3>About This Project</h3>
                    <p>{selectedProject.description}</p>
                  </div>
                  
                  <div className="project-features">
                    <h3>Key Features</h3>
                    <ul>
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>✓ {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="modal-right">
                  <div className="modal-screenshot">
                    <img
                      src={selectedProject.screenshots[0]}
                      alt={`${selectedProject.title} preview`}
                      className="main-screenshot"
                      onError={handleImageError}
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="project-technologies">
                    <h3>Technologies Used</h3>
                    <div className="tech-grid">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="modal-actions">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-btn primary-btn"
                >
                  🚀 Live Demo
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                                    rel="noopener noreferrer"
                  className="modal-btn secondary-btn"
                >
                  📂 View Code
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Project;

