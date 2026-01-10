import React, { useState, useEffect, useRef } from 'react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);

      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="portfolio">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Work+Sans:wght@300;400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary: #CDA45E;
          --primary-dark: #A58344;
          --accent: #F5F5DC;
          --dark: #0A0A0A;
          --dark-soft: #1A1A1A;
          --dark-lighter: #2A2A2A;
          --text: #E8E8E8;
          --text-dim: #999999;
          --white: #FFFFFF;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Work Sans', sans-serif;
          background: var(--dark);
          color: var(--text);
          overflow-x: hidden;
          line-height: 1.6;
        }

        .portfolio {
          position: relative;
          min-height: 100vh;
        }

        /* Animated Background */
        .portfolio::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 50%, rgba(205, 164, 94, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(205, 164, 94, 0.03) 0%, transparent 50%);
          z-index: 0;
          animation: backgroundPulse 20s ease-in-out infinite;
        }

        @keyframes backgroundPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* Scroll Progress Bar */
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          z-index: 9999;
          transition: width 0.1s ease;
          box-shadow: 0 0 20px rgba(205, 164, 94, 0.6);
        }

        /* Navigation */
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.5rem 5%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(205, 164, 94, 0.1);
          animation: slideDown 0.8s ease-out;
        }

        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
        }

        .logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--primary);
          letter-spacing: 3px;
          position: relative;
        }

        .logo::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 60%;
          height: 1px;
          background: var(--primary);
        }

        .nav-links {
          display: flex;
          gap: 3rem;
          align-items: center;
        }

        .nav-links a {
          color: var(--text-dim);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          position: relative;
          transition: all 0.3s ease;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--primary);
          transition: width 0.3s ease;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: var(--primary);
        }

        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }

        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 10px;
        }

        .menu-toggle span {
          width: 25px;
          height: 2px;
          background: var(--primary);
          transition: all 0.3s ease;
        }

        .menu-toggle.active span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .menu-toggle.active span:nth-child(2) {
          opacity: 0;
        }

        .menu-toggle.active span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        /* Hero Section */
        #home {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 100px 5% 50px;
          overflow: hidden;
        }

        .hero-content {
          max-width: 1400px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-text {
          animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
        }

        .hero-subtitle {
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--primary);
          margin-bottom: 1.5rem;
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 5rem;
          font-weight: 600;
          line-height: 1.1;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, var(--white) 0%, var(--primary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fadeInUp 1s ease-out 0.4s both;
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-dim);
          margin-bottom: 3rem;
          max-width: 500px;
          animation: fadeInUp 1s ease-out 0.6s both;
        }

        .hero-cta {
          display: flex;
          gap: 1.5rem;
          animation: fadeInUp 1s ease-out 0.8s both;
        }

        .btn {
          padding: 1rem 2.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          border: 2px solid var(--primary);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-primary {
          background: var(--primary);
          color: var(--dark);
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: var(--primary-dark);
          transition: left 0.3s ease;
          z-index: -1;
        }

        .btn-primary:hover::before {
          left: 0;
        }

        .btn-secondary {
          background: transparent;
          color: var(--primary);
        }

        .btn-secondary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: var(--primary);
          transition: left 0.3s ease;
          z-index: -1;
        }

        .btn-secondary:hover {
          color: var(--dark);
        }

        .btn-secondary:hover::before {
          left: 0;
        }

        /* Hero Image */
        .hero-image {
          position: relative;
          animation: fadeInUp 1s ease-out 0.4s both;
        }

        .image-container {
          position: relative;
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
        }

        .image-frame {
          position: relative;
          overflow: hidden;
          border-radius: 2px;
        }

        .image-frame::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, var(--primary), var(--accent), var(--primary));
          background-size: 200% 200%;
          animation: borderGlow 3s ease infinite;
          z-index: -1;
        }

        @keyframes borderGlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .hero-photo {
          width: 100%;
          height: auto;
          display: block;
          position: relative;
          z-index: 1;
          filter: grayscale(20%) contrast(1.1);
          transition: all 0.5s ease;
        }

        .hero-photo:hover {
          filter: grayscale(0%) contrast(1.15);
          transform: scale(1.02);
        }

        .image-accent {
          position: absolute;
          width: 200px;
          height: 200px;
          border: 1px solid var(--primary);
          opacity: 0.3;
          pointer-events: none;
          transition: all 0.3s ease;
        }

        .accent-1 {
          top: -30px;
          right: -30px;
        }

        .accent-2 {
          bottom: -30px;
          left: -30px;
        }

        /* Stats Section */
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin-top: 5rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(205, 164, 94, 0.2);
          animation: fadeInUp 1s ease-out 1s both;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem;
          font-weight: 600;
          color: var(--primary);
          display: block;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        /* About Section */
        #about {
          padding: 120px 5%;
          background: var(--dark-soft);
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-subtitle {
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--primary);
          margin-bottom: 1rem;
        }

        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.5rem;
          font-weight: 600;
          color: var(--white);
        }

        .about-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .about-text {
          font-size: 1.1rem;
          line-height: 1.9;
          color: var(--text-dim);
        }

        .about-text p {
          margin-bottom: 1.5rem;
        }

        .about-text strong {
          color: var(--primary);
          font-weight: 600;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .skill-item {
          padding: 2rem;
          background: var(--dark-lighter);
          border: 1px solid rgba(205, 164, 94, 0.1);
          transition: all 0.3s ease;
        }

        .skill-item:hover {
          border-color: var(--primary);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(205, 164, 94, 0.2);
        }

        .skill-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        .skill-description {
          font-size: 0.95rem;
          color: var(--text-dim);
          line-height: 1.6;
        }

        /* Services Section */
        #services {
          padding: 120px 5%;
          background: var(--dark);
        }

        .services-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }

        .service-card {
          padding: 3rem;
          background: var(--dark-soft);
          border: 1px solid rgba(205, 164, 94, 0.1);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(205, 164, 94, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .service-card:hover::before {
          left: 100%;
        }

        .service-card:hover {
          border-color: var(--primary);
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        .service-icon {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }

        .service-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--white);
          margin-bottom: 1rem;
        }

        .service-description {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-dim);
          margin-bottom: 1.5rem;
        }

        .service-features {
          list-style: none;
          padding: 0;
        }

        .service-features li {
          font-size: 0.9rem;
          color: var(--text-dim);
          padding-left: 1.5rem;
          position: relative;
          margin-bottom: 0.5rem;
        }

        .service-features li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--primary);
        }

        /* Portfolio Section */
        #portfolio {
          padding: 120px 5%;
          background: var(--dark-soft);
        }

        .portfolio-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
        }

        .portfolio-item {
          position: relative;
          height: 400px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid rgba(205, 164, 94, 0.1);
        }

        .portfolio-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(10, 10, 10, 0.9) 100%);
          z-index: 1;
          transition: all 0.4s ease;
        }

        .portfolio-item:hover::before {
          background: linear-gradient(180deg, rgba(205, 164, 94, 0.2) 0%, rgba(10, 10, 10, 0.95) 100%);
        }

        .portfolio-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .portfolio-item:hover .portfolio-image {
          transform: scale(1.1);
        }

        .portfolio-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2rem;
          z-index: 2;
          transform: translateY(20px);
          transition: transform 0.4s ease;
        }

        .portfolio-item:hover .portfolio-info {
          transform: translateY(0);
        }

        .portfolio-category {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        .portfolio-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--white);
          margin-bottom: 0.5rem;
        }

        .portfolio-description {
          font-size: 0.95rem;
          color: var(--text-dim);
          opacity: 0;
          transition: opacity 0.4s ease 0.2s;
        }

        .portfolio-item:hover .portfolio-description {
          opacity: 1;
        }

        .portfolio-cta {
          margin-top: 3rem;
          text-align: center;
        }

        /* Contact Section */
        #contact {
          padding: 120px 5%;
          background: var(--dark);
        }

        .contact-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
        }

        .contact-icon {
          font-size: 1.5rem;
          color: var(--primary);
          padding: 1rem;
          background: var(--dark-soft);
          border: 1px solid rgba(205, 164, 94, 0.2);
        }

        .contact-details h3 {
          font-size: 1.2rem;
          color: var(--white);
          margin-bottom: 0.5rem;
        }

        .contact-details p {
          font-size: 1rem;
          color: var(--text-dim);
        }

        .contact-details a {
          color: var(--primary);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-details a:hover {
          color: var(--accent);
        }

        .contact-form {
          background: var(--dark-soft);
          padding: 3rem;
          border: 1px solid rgba(205, 164, 94, 0.1);
        }

        .form-group {
          margin-bottom: 2rem;
        }

        .form-group label {
          display: block;
          font-size: 0.9rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--text-dim);
          margin-bottom: 0.5rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          background: var(--dark-lighter);
          border: 1px solid rgba(205, 164, 94, 0.2);
          color: var(--text);
          font-family: 'Work Sans', sans-serif;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(205, 164, 94, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 150px;
        }

        .submit-btn {
          width: 100%;
          padding: 1.2rem;
          background: var(--primary);
          color: var(--dark);
          border: none;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(205, 164, 94, 0.3);
        }

        /* Footer */
        footer {
          padding: 3rem 5%;
          background: var(--dark-soft);
          border-top: 1px solid rgba(205, 164, 94, 0.1);
          text-align: center;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 600;
          color: var(--primary);
          letter-spacing: 3px;
          margin-bottom: 2rem;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-bottom: 2rem;
        }

        .footer-links a {
          color: var(--text-dim);
          text-decoration: none;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: var(--primary);
        }

        .footer-social {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .social-link {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(205, 164, 94, 0.2);
          color: var(--text-dim);
          text-decoration: none;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: var(--primary);
          color: var(--dark);
          border-color: var(--primary);
          transform: translateY(-5px);
        }

        .footer-text {
          font-size: 0.9rem;
          color: var(--text-dim);
          line-height: 1.8;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-content,
          .about-content,
          .contact-content {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .portfolio-grid {
            grid-template-columns: 1fr;
          }

          .hero-title {
            font-size: 4rem;
          }

          .image-container {
            order: -1;
          }

          .hero-stats {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 75px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 75px);
            background: rgba(10, 10, 10, 0.98);
            flex-direction: column;
            justify-content: center;
            gap: 2rem;
            transition: left 0.3s ease;
          }

          .nav-links.active {
            left: 0;
          }

          .menu-toggle {
            display: flex;
          }

          .hero-title {
            font-size: 3rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .hero-stats {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-links {
            flex-direction: column;
            gap: 1rem;
          }
        }

        /* Success Message */
        .success-message {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          background: var(--dark-soft);
          border: 2px solid var(--primary);
          padding: 3rem;
          text-align: center;
          z-index: 10000;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .success-message.show {
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
        }

        .success-message h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          color: var(--primary);
          margin-bottom: 1rem;
        }

        .success-message p {
          color: var(--text-dim);
        }
      `}</style>

      {/* Scroll Progress */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Navigation */}
      <nav>
        <div className="logo">LABRIAGA</div>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a 
            href="#home" 
            className={activeSection === 'home' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={activeSection === 'about' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
          >
            About
          </a>
          <a 
            href="#services" 
            className={activeSection === 'services' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
          >
            Services
          </a>
          <a 
            href="#portfolio" 
            className={activeSection === 'portfolio' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}
          >
            Portfolio
          </a>
          <a 
            href="#contact" 
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
          >
            Contact
          </a>
        </div>
        <div 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" ref={heroRef}>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-subtitle">Digital Marketing Specialist</div>
            <h1 className="hero-title">Gabriel Labriaga</h1>
            <p className="hero-description">
              Transforming brands through strategic digital marketing, compelling video content, 
              and stunning visual design. Delivering measurable results that drive growth and engagement.
            </p>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                Let's Work Together
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('portfolio')}>
                View My Work
              </button>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-container">
              <div className="image-frame">
                <img 
                  src={process.env.PUBLIC_URL + "/profile.png"} 
                  alt="Gabriel Labriaga - Digital Marketing Specialist"
                  className="hero-photo"
                />
              </div>
              <div className="image-accent accent-1"></div>
              <div className="image-accent accent-2"></div>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="section-header">
          <div className="section-subtitle">About Me</div>
          <h2 className="section-title">Crafting Digital Excellence</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a <strong>Digital Marketing Specialist</strong> with a passion for creating 
              compelling narratives that resonate with audiences and drive measurable business results. 
              My expertise spans across social media strategy, video production, graphic design, 
              and paid advertising campaigns.
            </p>
            <p>
              With over <strong>5 years of experience</strong> in the digital marketing landscape, 
              I've helped brands across various industries elevate their online presence, engage 
              their target audiences, and achieve their marketing objectives through data-driven 
              strategies and creative excellence.
            </p>
            <p>
              My approach combines strategic thinking with creative execution, ensuring every project 
              not only looks exceptional but also delivers tangible results. Whether it's crafting 
              a viral social media campaign, producing engaging video content, or designing stunning 
              visual assets, I bring dedication and expertise to every collaboration.
            </p>
          </div>
          <div className="skills-grid">
            <div className="skill-item">
              <div className="skill-title">Strategic Planning</div>
              <div className="skill-description">
                Data-driven marketing strategies that align with business objectives and deliver ROI
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-title">Creative Direction</div>
              <div className="skill-description">
                Compelling visual narratives that capture attention and inspire action
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-title">Video Production</div>
              <div className="skill-description">
                Professional video editing and motion graphics that tell your story
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-title">Brand Development</div>
              <div className="skill-description">
                Building cohesive brand identities that resonate with target audiences
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="section-header">
          <div className="section-subtitle">Services</div>
          <h2 className="section-title">What I Offer</h2>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3 className="service-title">Social Media Marketing</h3>
            <p className="service-description">
              Comprehensive social media strategies that build communities and drive engagement
            </p>
            <ul className="service-features">
              <li>Content Strategy & Planning</li>
              <li>Community Management</li>
              <li>Social Media Analytics</li>
              <li>Influencer Partnerships</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">🎬</div>
            <h3 className="service-title">Video Production</h3>
            <p className="service-description">
              Professional video editing and production that brings your vision to life
            </p>
            <ul className="service-features">
              <li>Video Editing & Post-Production</li>
              <li>Motion Graphics & Animation</li>
              <li>Color Grading & Sound Design</li>
              <li>YouTube Content Creation</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">🎨</div>
            <h3 className="service-title">Graphic Design</h3>
            <p className="service-description">
              Stunning visual designs that communicate your brand message effectively
            </p>
            <ul className="service-features">
              <li>Brand Identity Design</li>
              <li>Marketing Materials</li>
              <li>Social Media Graphics</li>
              <li>Print & Digital Assets</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">📊</div>
            <h3 className="service-title">Paid Advertising</h3>
            <p className="service-description">
              Targeted ad campaigns that maximize ROI and drive conversions
            </p>
            <ul className="service-features">
              <li>Facebook & Instagram Ads</li>
              <li>Google Ads Management</li>
              <li>Campaign Optimization</li>
              <li>Performance Analytics</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">✍️</div>
            <h3 className="service-title">Content Marketing</h3>
            <p className="service-description">
              Compelling content that tells your story and engages your audience
            </p>
            <ul className="service-features">
              <li>Content Strategy</li>
              <li>Copywriting</li>
              <li>Blog & Article Writing</li>
              <li>SEO Optimization</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">🚀</div>
            <h3 className="service-title">Growth Strategy</h3>
            <p className="service-description">
              Comprehensive digital strategies that scale your business
            </p>
            <ul className="service-features">
              <li>Marketing Audits</li>
              <li>Growth Planning</li>
              <li>Funnel Optimization</li>
              <li>Performance Tracking</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <div className="section-header">
          <div className="section-subtitle">Portfolio</div>
          <h2 className="section-title">Featured Work</h2>
        </div>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
              alt="Social Media Campaign"
              className="portfolio-image"
            />
            <div className="portfolio-info">
              <div className="portfolio-category">Social Media</div>
              <h3 className="portfolio-title">Brand Campaign Strategy</h3>
              <p className="portfolio-description">
                Comprehensive social media campaign that increased engagement by 350%
              </p>
            </div>
          </div>

          <div className="portfolio-item">
            <img 
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80" 
              alt="Video Production"
              className="portfolio-image"
            />
            <div className="portfolio-info">
              <div className="portfolio-category">Video Production</div>
              <h3 className="portfolio-title">Product Launch Video</h3>
              <p className="portfolio-description">
                Dynamic video content that generated 1M+ views and drove sales
              </p>
            </div>
          </div>

          <div className="portfolio-item">
            <img 
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80" 
              alt="Brand Identity"
              className="portfolio-image"
            />
            <div className="portfolio-info">
              <div className="portfolio-category">Graphic Design</div>
              <h3 className="portfolio-title">Complete Brand Identity</h3>
              <p className="portfolio-description">
                Full brand redesign including logo, colors, and marketing materials
              </p>
            </div>
          </div>

          <div className="portfolio-item">
            <img 
              src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80" 
              alt="Content Marketing"
              className="portfolio-image"
            />
            <div className="portfolio-info">
              <div className="portfolio-category">Content Marketing</div>
              <h3 className="portfolio-title">Content Strategy</h3>
              <p className="portfolio-description">
                Strategic content plan that doubled organic traffic in 6 months
              </p>
            </div>
          </div>
        </div>
        <div className="portfolio-cta">
          <a href="https://goldengraphixstudios.my.canva.site/main-portfolio" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View Full Portfolio
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="section-header">
          <div className="section-subtitle">Get In Touch</div>
          <h2 className="section-title">Let's Create Something Amazing</h2>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">✉</div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>
                  <a href="mailto:goldengraphixstudios@gmail.com">
                    goldengraphixstudios@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📂</div>
              <div className="contact-details">
                <h3>Portfolio Drive</h3>
                <p>
                  <a href="https://drive.google.com/drive/folders/1cYoTb8mDPcJl5WkJf13xKKSN-0-papHV?usp=sharing" target="_blank" rel="noopener noreferrer">
                    View My Work Samples
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🌐</div>
              <div className="contact-details">
                <h3>Online Portfolio</h3>
                <p>
                  <a href="https://goldengraphixstudios.my.canva.site/main-portfolio" target="_blank" rel="noopener noreferrer">
                    goldengraphixstudios.my.canva.site
                  </a>
                </p>
              </div>
            </div>
          </div>

          <form className="contact-form" id="contactForm" onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            
            const subject = encodeURIComponent(`New Project Inquiry from ${data.name}`);
            const body = encodeURIComponent(`
CONTACT INFORMATION:
═══════════════════════════════════════
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}

PROJECT DETAILS:
═══════════════════════════════════════
Service: ${data.service}
Budget: ${data.budget || 'Not specified'}

Message:
${data.message}

═══════════════════════════════════════
Sent from: Portfolio Contact Form
            `);
            
            window.location.href = `mailto:goldengraphixstudios@gmail.com?subject=${subject}&body=${body}`;
            
            const successMessage = document.getElementById('successMessage');
            if (successMessage) {
              successMessage.classList.add('show');
              e.target.reset();
              setTimeout(() => {
                successMessage.classList.remove('show');
              }, 4000);
            }
          }}>
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input type="text" id="name" name="name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            
            <div className="form-group">
              <label htmlFor="service">Service Interested In *</label>
              <select id="service" name="service" required>
                <option value="">Select a service</option>
                <option value="social-media">Social Media Marketing</option>
                <option value="video-production">Video Production & Editing</option>
                <option value="graphic-design">Graphic Design</option>
                <option value="paid-advertising">Paid Advertising</option>
                <option value="content-marketing">Content Marketing</option>
                <option value="growth-strategy">Growth Strategy</option>
                <option value="multiple">Multiple Services</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="budget">Budget Range</label>
              <select id="budget" name="budget">
                <option value="">Select budget range</option>
                <option value="under-500">Under $500</option>
                <option value="500-1000">$500 - $1,000</option>
                <option value="1000-2500">$1,000 - $2,500</option>
                <option value="2500-5000">$2,500 - $5,000</option>
                <option value="over-5000">Over $5,000</option>
                <option value="flexible">Flexible / Let's Discuss</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Project Details *</label>
              <textarea id="message" name="message" required placeholder="Tell me about your project, goals, and timeline..."></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-logo">LABRIAGA</div>
          <div className="footer-links">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>
            <a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}>Portfolio</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          </div>
          <div className="footer-social">
            <a href="mailto:goldengraphixstudios@gmail.com" className="social-link" aria-label="Email">✉</a>
            <a href="https://drive.google.com/drive/folders/1cYoTb8mDPcJl5WkJf13xKKSN-0-papHV?usp=sharing" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Portfolio Drive">📂</a>
            <a href="https://goldengraphixstudios.my.canva.site/main-portfolio" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Online Portfolio">🌐</a>
          </div>
          <div className="footer-text">
            <p>&copy; 2025 Gabriel Labriaga. All Rights Reserved.</p>
            <p>Digital Marketing Specialist | Video Editor | Graphic Designer | Social Media Manager</p>
          </div>
        </div>
      </footer>

      <div className="success-message" id="successMessage">
        <h3>Message Sent!</h3>
        <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
      </div>
    </div>
  );
}
