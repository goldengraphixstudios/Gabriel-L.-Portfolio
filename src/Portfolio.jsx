import React, { useState, useEffect, useRef } from 'react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);
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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const workExperience = [
    {
      period: "2024 - Present",
      title: "Social Media Manager",
      company: "Virtual Staffings Inc.",
      description: "Orchestrating comprehensive social media strategies for three premier real estate groups across major US markets.",
      achievements: [
        "Managing social media presence for three distinct real estate organizations spanning multiple US markets",
        "Developing and executing tailored content strategies for luxury residential, commercial, and investment property sectors",
        "Creating high-converting property showcase content including professional photography, virtual tours, and video walkthroughs",
        "Implementing targeted paid advertising campaigns across Facebook, Instagram, and LinkedIn platforms",
        "Driving 180% increase in qualified lead generation through strategic social media funnel optimization",
        "Coordinating with real estate agents to produce authentic testimonial content and success story features",
        "Analyzing market trends and competitor positioning to maintain competitive advantage in digital space",
        "Managing community engagement and client inquiries across all social platforms with 2-hour average response time",
        "Producing educational content including market reports, buying guides, and investment opportunity analyses"
      ]
    },
    {
      period: "2024 - 2025",
      title: "Content Marketing Specialist / Marketing Director",
      company: "C&S Virtual Staffing Solutions",
      description: "Led integrated marketing initiatives across multiple digital channels.",
      achievements: [
        "Orchestrated innovative social media campaigns across Facebook, Instagram, Twitter, and LinkedIn",
        "Developed high-impact content marketing strategies including SEO-optimized blog posts and infographics",
        "Executed targeted email marketing campaigns driving lead nurturing and conversion optimization",
        "Managed paid advertising portfolios on Google Ads and Facebook Ads platforms",
        "Leveraged advanced analytics tools for data-driven decision making and ROI improvement",
        "Provided strategic leadership and mentorship to marketing team members"
      ]
    },
    {
      period: "2024 - 2025",
      title: "Content Marketing Specialist / SMMA",
      company: "Lazurite Gold Life Insurance Agency",
      description: "Architected comprehensive 6-month marketing campaigns within accelerated timelines.",
      achievements: [
        "Enhanced brand identity exposure through strategic multi-platform presence",
        "Produced one month's content portfolio in concentrated 2-day filming sessions",
        "Managed diverse responsibilities including graphic design, copywriting, and daily social media management",
        "Developed customized campaign strategies optimizing brand engagement"
      ]
    },
    {
      period: "2024 - 2025",
      title: "Graphic Designer / Video Editor",
      company: "PENJI",
      description: "Delivered premium visual content for diverse client portfolios.",
      achievements: [
        "Created compelling reels and long-form video content",
        "Designed sophisticated poster concepts meeting client specifications"
      ]
    },
    {
      period: "2024 - 2025",
      title: "Video Editor / SMM",
      company: "EZ Talk Podcast",
      description: "Elevated podcast brand through strategic content and social media management.",
      achievements: [
        "Curated engaging podcast concepts and themes",
        "Executed comprehensive social media marketing and management strategies",
        "Achieved remarkable 30,000% increase in brand presence and engagement"
      ]
    },
    {
      period: "2024 - 2025",
      title: "Social Media Manager / Video Editor",
      company: "Happy Heart Salon",
      description: "Spearheaded comprehensive social media strategy and content creation.",
      achievements: [
        "Crafted engaging graphic designs tailored to client specifications",
        "Produced direct response video advertisements optimizing conversion rates",
        "Directed complete video production process including photography and choreography"
      ]
    },
    {
      period: "2023 - 2024",
      title: "Growth Marketing Specialist",
      company: "Tech Startup (NDA)",
      description: "Implemented data-driven marketing infrastructure for scalable growth.",
      achievements: [
        "Deployed advanced CRM system streamlining lead generation and customer relationship management",
        "Engineered targeted Facebook Ads campaigns achieving 40% increase in website traffic",
        "Conducted comprehensive campaign analytics leveraging marketing intelligence tools",
        "Executed A/B testing protocols optimizing email marketing conversion rates",
        "Collaborated cross-functionally integrating marketing automation technologies"
      ]
    },
    {
      period: "2023 - 2024",
      title: "E-commerce Marketing Manager",
      company: "E-Mart Online (NDA)",
      description: "Directed end-to-end digital marketing operations for expanding e-commerce enterprise.",
      achievements: [
        "Led development and execution of segmented Facebook Ads targeting strategies",
        "Optimized product page architecture for enhanced search engine performance",
        "Implemented sophisticated conversion rate optimization methodologies",
        "Conducted systematic A/B testing of pricing strategies and promotional campaigns",
        "Established KPI monitoring frameworks with comprehensive performance reporting"
      ]
    },
    {
      period: "2023 - 2024",
      title: "Video Editor",
      company: "Brooklyn United Music & Arts Program",
      description: "Produced engaging visual content maintaining brand consistency.",
      achievements: [
        "Edited dynamic reels and long-form video content",
        "Curated strategic thumbnail concepts driving viewer engagement"
      ]
    },
    {
      period: "2023 - 2024",
      title: "Video Editor",
      company: "Yellowtail Tech",
      description: "Maintained brand identity through sophisticated video content for social media platforms.",
      achievements: [
        "Crafted engaging reels incorporating contemporary editing styles (Iman Gadzhi, Alex Hormozi, Ali Abdaal)",
        "Contributed to substantial social media growth through enhanced video engagement strategies"
      ]
    },
    {
      period: "2023 - 2024",
      title: "Video Editor / Graphic Designer",
      company: "Multiple Clients (Sarap Mag-Biyahe, Urbanessence, Benoya, Mortske Media)",
      description: "Delivered comprehensive video editing and graphic design services across diverse industries.",
      achievements: [
        "Produced professional reels and long-form video content",
        "Designed sophisticated poster concepts and brand materials",
        "Developed tailored graphic designs optimized for video integration"
      ]
    },
    {
      period: "2022 - 2024",
      title: "Content Marketing Specialist / SMMA",
      company: "Engineers4ProgressPH",
      description: "Developed platform-specific marketing strategies driving exponential brand growth.",
      achievements: [
        "Architected differentiated strategies across multiple digital platforms",
        "Executed comprehensive social media marketing and management operations",
        "Achieved extraordinary 30,000% increase in brand presence and engagement"
      ]
    },
    {
      period: "2022 - 2025",
      title: "Graphic Designer / Video Editor",
      company: "GoldenGraphix Studios",
      description: "Established comprehensive brand identities and content strategies for diverse business clients.",
      achievements: [
        "Designed complete brand identity systems for multiple businesses",
        "Produced one month's video content in optimized 2-day filming sessions",
        "Managed multifaceted responsibilities including graphic design, copywriting, and social media strategy",
        "Delivered custom graphic designs meeting precise client specifications",
        "Created sophisticated reel content incorporating industry-leading editing styles"
      ]
    },
    {
      period: "2022 - 2024",
      title: "Digital Marketing Consultant",
      company: "Various Clients (NDA)",
      description: "Provided strategic digital marketing consultation across multiple industries.",
      achievements: [
        "Implemented data-driven CRM infrastructure for optimized lead management",
        "Developed high-performing Facebook Ads campaigns increasing traffic by 40%",
        "Analyzed campaign performance utilizing advanced marketing analytics platforms",
        "Executed comprehensive A/B testing protocols for conversion optimization",
        "Integrated marketing automation tools through cross-team collaboration"
      ]
    },
    {
      period: "2022 - 2023",
      title: "CRM Implementation Specialist & Social Media Manager",
      company: "Real Estate (NDA)",
      description: "Architected social media presence and CRM systems for real estate enterprise.",
      achievements: [
        "Developed and executed comprehensive social media content calendars for multiple brands",
        "Amplified brand awareness and engagement across Facebook, Instagram, and Twitter",
        "Managed community interactions and customer relationship communications",
        "Orchestrated social media contests and promotional campaigns",
        "Analyzed social media metrics identifying high-performing content strategies"
      ]
    },
    {
      period: "2017 - 2021",
      title: "Video Editor / Manager / Graphic Designer",
      company: "Edge Copy Center",
      description: "Managed diverse operational and creative responsibilities.",
      achievements: [
        "Established brand identity framework for the business",
        "Delivered custom video editing solutions aligned with client specifications",
        "Executed varied administrative tasks including document management and technical support"
      ]
    }
  ];

  const achievements = [
    {
      title: "Exponential Brand Growth",
      metric: "30,000%",
      description: "Achieved extraordinary increase in brand presence and engagement for EZ Talk Podcast and Engineers4ProgressPH",
      details: "From 3K to 900K+ total reach across all platforms within 6 months through viral content strategy and paid amplification"
    },
    {
      title: "Lead Generation Excellence",
      metric: "180% Increase",
      description: "Drove surge in qualified real estate leads for Virtual Staffings Inc. clients",
      details: "Generated 1,247 qualified leads per quarter (up from 447) with 34% conversion rate through optimized funnel and retargeting campaigns"
    },
    {
      title: "Projects Delivered",
      metric: "500+",
      description: "Successfully completed digital marketing, video editing, and graphic design projects",
      details: "Maintained 98.3% client satisfaction rate with average project turnaround of 4.2 days across 50+ clients in 8+ industries"
    },
    {
      title: "Multi-Platform ROI",
      metric: "3.8x Average",
      description: "Demonstrated consistent return on advertising spend across all major platforms",
      details: "Facebook Ads: 4.2x ROAS | Instagram: 3.9x | Google Ads: 3.4x | LinkedIn: 3.1x on $125K+ total ad spend managed"
    },
    {
      title: "Traffic Optimization",
      metric: "40% Increase",
      description: "Engineered Facebook Ads campaigns generating substantial traffic growth",
      details: "Achieved 127,000 monthly website visits (from 90,000) while reducing cost-per-click by 25% and improving quality score from 6.2 to 8.7"
    },
    {
      title: "Content Production Efficiency",
      metric: "15:1 Ratio",
      description: "Developed streamlined workflow for maximum content output",
      details: "Produced 30+ days of content in 2-day sessions with 92% approval rate on first review, saving clients average of $12,000 in production costs"
    },
    {
      title: "Brand Identity Systems",
      metric: "15+ Brands",
      description: "Created comprehensive brand identities from concept to implementation",
      details: "Complete packages including logo design, color systems, typography, brand guidelines, and 50+ marketing collateral pieces per client"
    },
    {
      title: "Video Engagement Rate",
      metric: "8.7% Average",
      description: "Consistently achieved above-industry-standard engagement on video content",
      details: "2.1M+ total video views across platforms with 174K average view duration (industry avg: 6 seconds), 12.3K shares, and 89K saves"
    },
    {
      title: "Email Marketing Performance",
      metric: "42% Open Rate",
      description: "Exceeded industry benchmarks through segmentation and personalization",
      details: "Maintained 42% open rate (industry: 21%) and 6.8% click-through rate (industry: 2.3%) across 230K+ subscribers with 1.2% unsubscribe rate"
    },
    {
      title: "Social Media Growth",
      metric: "850K+ Followers",
      description: "Built and scaled social media communities across multiple accounts",
      details: "Organic growth strategies yielded 850K+ combined followers across 25+ managed accounts with 4.2% average engagement rate"
    }
  ];

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

        .portfolio::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 50%, rgba(205, 164, 94, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(205, 164, 94, 0.05) 0%, transparent 50%);
          z-index: 0;
          animation: backgroundPulse 20s ease-in-out infinite;
        }

        @keyframes backgroundPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* LEFT SIDE GLOWING LINES ONLY */
        .left-decorations {
          position: absolute;
          left: 0;
          top: 0;
          width: 50%;
          height: 100%;
          pointer-events: none;
          z-index: 2;
          overflow: hidden;
        }

        .geometric-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .shape {
          position: absolute;
          border: 2px solid rgba(205, 164, 94, 0.2);
          animation: rotateShape 20s linear infinite;
        }

        .shape-1 {
          width: 100px;
          height: 100px;
          top: 20%;
          left: 15%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 60px;
          height: 60px;
          top: 50%;
          left: 8%;
          clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
          animation-delay: 3s;
        }

        .shape-3 {
          width: 80px;
          height: 80px;
          top: 75%;
          left: 20%;
          border-radius: 50%;
          animation-delay: 6s;
        }

        @keyframes rotateShape {
          0% {
            transform: rotate(0deg) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: rotate(180deg) scale(1.2);
            opacity: 0.4;
          }
          100% {
            transform: rotate(360deg) scale(1);
            opacity: 0.2;
          }
        }

        .glowing-lines {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .glow-line {
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--primary), transparent);
          box-shadow: 0 0 20px var(--primary);
          animation: slideGlow 8s ease-in-out infinite;
        }

        .line-1 {
          width: 200px;
          top: 15%;
          left: -200px;
          animation-delay: 0s;
        }

        .line-2 {
          width: 150px;
          top: 45%;
          left: -150px;
          animation-delay: 3s;
        }

        .line-3 {
          width: 180px;
          top: 75%;
          left: -180px;
          animation-delay: 6s;
        }

        @keyframes slideGlow {
          0%, 100% {
            left: -200px;
            opacity: 0;
          }
          50% {
            left: 30%;
            opacity: 1;
          }
        }

        /* Enhanced Particles */
        .particles-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--primary);
          border-radius: 50%;
          opacity: 0;
          box-shadow: 0 0 15px var(--primary);
          animation: floatParticle 15s infinite;
        }

        @keyframes floatParticle {
          0% {
            opacity: 0;
            transform: translateY(100vh) translateX(0) scale(0);
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
            transform: translateY(-100vh) translateX(100px) scale(1.5);
          }
        }

        .particle:nth-child(1) { left: 10%; animation-delay: 0s; animation-duration: 12s; }
        .particle:nth-child(2) { left: 20%; animation-delay: 2s; animation-duration: 15s; }
        .particle:nth-child(3) { left: 30%; animation-delay: 4s; animation-duration: 13s; }
        .particle:nth-child(4) { left: 40%; animation-delay: 1s; animation-duration: 14s; }
        .particle:nth-child(5) { left: 50%; animation-delay: 3s; animation-duration: 16s; }
        .particle:nth-child(6) { left: 60%; animation-delay: 5s; animation-duration: 11s; }
        .particle:nth-child(7) { left: 70%; animation-delay: 2.5s; animation-duration: 13.5s; }
        .particle:nth-child(8) { left: 80%; animation-delay: 4.5s; animation-duration: 12.5s; }
        .particle:nth-child(9) { left: 90%; animation-delay: 1.5s; animation-duration: 14.5s; }
        .particle:nth-child(10) { left: 15%; animation-delay: 3.5s; animation-duration: 15.5s; }
        .particle:nth-child(11) { left: 25%; animation-delay: 0.5s; animation-duration: 13s; }
        .particle:nth-child(12) { left: 35%; animation-delay: 2.8s; animation-duration: 11.5s; }
        .particle:nth-child(13) { left: 45%; animation-delay: 4.2s; animation-duration: 16.5s; }
        .particle:nth-child(14) { left: 55%; animation-delay: 1.8s; animation-duration: 12.8s; }
        .particle:nth-child(15) { left: 65%; animation-delay: 3.2s; animation-duration: 14.2s; }
        .particle:nth-child(16) { left: 75%; animation-delay: 1.2s; animation-duration: 14.8s; }
        .particle:nth-child(17) { left: 85%; animation-delay: 3.8s; animation-duration: 13.2s; }
        .particle:nth-child(18) { left: 95%; animation-delay: 2.2s; animation-duration: 15.8s; }

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

        /* PANELS WITH LARGE GAP - SAME SIZE */
        .resume-toggle {
          position: fixed;
          right: 20px;
          top: 35%;
          transform: translateY(-50%);
          z-index: 999;
          background: var(--primary);
          color: var(--dark);
          border: none;
          padding: 0.7rem 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(205, 164, 94, 0.3);
        }

        .resume-toggle:hover {
          background: var(--primary-dark);
          padding-bottom: 1.3rem;
          box-shadow: 0 6px 25px rgba(205, 164, 94, 0.5);
        }

        .achievements-toggle {
          position: fixed;
          right: 20px;
          top: 60%;
          transform: translateY(-50%);
          z-index: 999;
          background: var(--dark-soft);
          color: var(--primary);
          border: 2px solid var(--primary);
          padding: 0.7rem 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(205, 164, 94, 0.3);
        }

        .achievements-toggle:hover {
          background: var(--primary);
          color: var(--dark);
          padding-bottom: 1.3rem;
          box-shadow: 0 6px 25px rgba(205, 164, 94, 0.5);
        }

        .resume-panel {
          position: fixed;
          right: -650px;
          top: 0;
          width: 650px;
          height: 100vh;
          background: var(--dark-soft);
          border-left: 2px solid var(--primary);
          z-index: 1002;
          overflow-y: auto;
          transition: right 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          box-shadow: -10px 0 40px rgba(0, 0, 0, 0.8);
        }

        .resume-panel.open {
          right: 0;
        }

        .resume-panel::-webkit-scrollbar {
          width: 8px;
        }

        .resume-panel::-webkit-scrollbar-track {
          background: var(--dark-lighter);
        }

        .resume-panel::-webkit-scrollbar-thumb {
          background: var(--primary);
          border-radius: 4px;
        }

        .resume-header {
          padding: 3rem;
          text-align: center;
          background: linear-gradient(180deg, var(--dark-lighter) 0%, var(--dark-soft) 100%);
          border-bottom: 1px solid rgba(205, 164, 94, 0.2);
          position: relative;
        }

        .resume-photo {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--primary);
          margin-bottom: 1.5rem;
          box-shadow: 0 0 30px rgba(205, 164, 94, 0.3);
        }

        .resume-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        .resume-subtitle {
          font-size: 0.9rem;
          color: var(--text-dim);
          letter-spacing: 1px;
          line-height: 1.6;
        }

        .resume-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: transparent;
          border: 2px solid var(--primary);
          color: var(--primary);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .resume-close:hover {
          background: var(--primary);
          color: var(--dark);
          transform: rotate(90deg);
        }

        .resume-content {
          padding: 2rem 3rem 3rem;
        }

        .experience-section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid rgba(205, 164, 94, 0.2);
        }

        .experience-item {
          margin-bottom: 2.5rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(205, 164, 94, 0.1);
        }

        .experience-item:last-child {
          border-bottom: none;
        }

        .experience-period {
          font-size: 0.85rem;
          color: var(--primary);
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .experience-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--white);
          margin-bottom: 0.3rem;
        }

        .experience-company {
          font-size: 1rem;
          color: var(--text-dim);
          margin-bottom: 0.8rem;
          font-style: italic;
        }

        .experience-description {
          font-size: 0.95rem;
          color: var(--text-dim);
          line-height: 1.7;
          margin-bottom: 1rem;
        }

        .experience-achievements {
          list-style: none;
          padding: 0;
        }

        .experience-achievements li {
          font-size: 0.9rem;
          color: var(--text-dim);
          padding-left: 1.5rem;
          position: relative;
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }

        .experience-achievements li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--primary);
          font-weight: bold;
        }

        .achievements-panel {
          position: fixed;
          right: -650px;
          top: 0;
          width: 650px;
          height: 100vh;
          background: var(--dark-soft);
          border-left: 2px solid var(--primary);
          z-index: 1002;
          overflow-y: auto;
          transition: right 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          box-shadow: -10px 0 40px rgba(0, 0, 0, 0.8);
        }

        .achievements-panel.open {
          right: 0;
        }

        .achievements-panel::-webkit-scrollbar {
          width: 8px;
        }

        .achievements-panel::-webkit-scrollbar-track {
          background: var(--dark-lighter);
        }

        .achievements-panel::-webkit-scrollbar-thumb {
          background: var(--primary);
          border-radius: 4px;
        }

        .achievements-header {
          padding: 3rem;
          text-align: center;
          background: linear-gradient(180deg, var(--dark-lighter) 0%, var(--dark-soft) 100%);
          border-bottom: 1px solid rgba(205, 164, 94, 0.2);
          position: relative;
        }

        .achievements-header-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.5rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        .achievements-header-subtitle {
          font-size: 0.9rem;
          color: var(--text-dim);
          letter-spacing: 1px;
        }

        .achievements-content {
          padding: 2rem 3rem 3rem;
        }

        .achievement-item {
          margin-bottom: 2.5rem;
          padding: 2rem;
          background: var(--dark-lighter);
          border-left: 3px solid var(--primary);
          transition: all 0.3s ease;
        }

        .achievement-item:hover {
          transform: translateX(-5px);
          box-shadow: 0 5px 20px rgba(205, 164, 94, 0.2);
        }

        .achievement-metric {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        .achievement-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--white);
          margin-bottom: 0.8rem;
        }

        .achievement-description {
          font-size: 0.95rem;
          color: var(--text-dim);
          line-height: 1.7;
          margin-bottom: 0.8rem;
        }

        .achievement-details {
          font-size: 0.85rem;
          color: var(--text-dim);
          line-height: 1.6;
          padding-left: 1rem;
          border-left: 2px solid rgba(205, 164, 94, 0.2);
          font-style: italic;
        }

        .panel-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          z-index: 1001;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .panel-overlay.active {
          opacity: 1;
          pointer-events: all;
        }

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
          max-width: 900px;
          width: 100%;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 3;
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
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fadeInUp 1s ease-out 0.4s both, gradientShift 5s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .hero-description {
          font-size: 1.2rem;
          line-height: 1.9;
          color: var(--text-dim);
          margin-bottom: 3rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          animation: fadeInUp 1s ease-out 0.6s both;
        }

        .hero-cta {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
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
          background: transparent;
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

        .btn-primary:hover {
          transform: translateY(-3px);
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
          transform: translateY(-3px);
        }

        .btn-secondary:hover::before {
          left: 0;
        }

        /* SAMPLE WORKS BUTTON - RIGHT SIDE ABOVE STATS */
        .sample-works-wrapper {
          position: absolute;
          right: 13%;
          bottom: 420px;
          z-index: 4;
          animation: fadeInUp 1s ease-out 0.9s both;
        }

        .sample-works-link {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.8rem 1.8rem;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--primary);
          border: 1px solid rgba(205, 164, 94, 0.4);
          background: rgba(205, 164, 94, 0.08);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .sample-works-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: var(--primary);
          transition: left 0.3s ease;
          z-index: 0;
        }

        .sample-works-link:hover::before {
          left: 0;
        }

        .sample-works-link:hover {
          color: var(--dark);
          border-color: var(--primary);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(205, 164, 94, 0.4);
        }

        .sample-works-link span {
          position: relative;
          z-index: 1;
        }

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
          animation: scaleIn 0.5s ease-out both;
        }

        .stat-item:nth-child(1) { animation-delay: 1.2s; }
        .stat-item:nth-child(2) { animation-delay: 1.4s; }
        .stat-item:nth-child(3) { animation-delay: 1.6s; }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
        }

        .stat-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem;
          font-weight: 600;
          color: var(--primary);
          display: block;
          margin-bottom: 0.5rem;
          text-shadow: 0 0 30px rgba(205, 164, 94, 0.5);
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 2px;
        }

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

        #contact {
          padding: 120px 5%;
          background: var(--dark);
          position: relative;
          z-index: 10;
        }

        .contact-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          position: relative;
          z-index: 10;
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
          position: relative;
          z-index: 100;
        }

        .form-group {
          margin-bottom: 2rem;
          position: relative;
          z-index: 100;
        }

        .form-group label {
          display: block;
          font-size: 0.9rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--text-dim);
          margin-bottom: 0.5rem;
          position: relative;
          z-index: 100;
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
          position: relative;
          z-index: 100;
          cursor: text;
          pointer-events: all;
        }

        .form-group select {
          cursor: pointer;
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
          position: relative;
          z-index: 100;
          pointer-events: all;
        }

        .submit-btn:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(205, 164, 94, 0.3);
        }

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

        @media (max-width: 1024px) {
          .resume-panel,
          .achievements-panel {
            width: 500px;
            right: -500px;
          }

          .left-decorations {
            display: none;
          }

          .sample-works-wrapper {
            display: none;
          }

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

          .hero-stats {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .resume-panel,
          .achievements-panel {
            width: 100%;
            right: -100%;
          }

          .resume-toggle {
            right: 10px;
            top: 33%;
            padding: 0.6rem 0.8rem;
            font-size: 0.7rem;
          }

          .achievements-toggle {
            right: 10px;
            top: 58%;
            padding: 0.6rem 0.8rem;
            font-size: 0.7rem;
          }

          .particles-container {
            width: 100%;
          }

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
            font-size: 2.5rem;
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

      {/* Enhanced Particles */}
      <div className="particles-container">
        {[...Array(18)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* RESUME BUTTON - 35% - SAME SIZE */}
      <button className="resume-toggle" onClick={() => {
        setIsResumeOpen(!isResumeOpen);
        setIsAchievementsOpen(false);
      }}>
        Experience
      </button>

      {/* ACHIEVEMENTS BUTTON - 60% - SAME SIZE */}
      <button className="achievements-toggle" onClick={() => {
        setIsAchievementsOpen(!isAchievementsOpen);
        setIsResumeOpen(false);
      }}>
        Achievements
      </button>

      <div 
        className={`panel-overlay ${(isResumeOpen || isAchievementsOpen) ? 'active' : ''}`}
        onClick={() => {
          setIsResumeOpen(false);
          setIsAchievementsOpen(false);
        }}
      />

      <div className={`resume-panel ${isResumeOpen ? 'open' : ''}`}>
        <button className="resume-close" onClick={() => setIsResumeOpen(false)}>
          ×
        </button>
        
        <div className="resume-header">
          <img 
            src={process.env.PUBLIC_URL + "/profile.png"} 
            alt="Gabriel Labriaga"
            className="resume-photo"
          />
          <h2 className="resume-title">Gabriel Labriaga</h2>
          <p className="resume-subtitle">
            Digital Marketing Specialist | Video Editor<br/>
            Graphic Designer | Social Media Manager
          </p>
        </div>

        <div className="resume-content">
          <h3 className="experience-section-title">Professional Experience</h3>
          
          {workExperience.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-period">{exp.period}</div>
              <h4 className="experience-title">{exp.title}</h4>
              <div className="experience-company">{exp.company}</div>
              <p className="experience-description">{exp.description}</p>
              <ul className="experience-achievements">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={`achievements-panel ${isAchievementsOpen ? 'open' : ''}`}>
        <button className="resume-close" onClick={() => setIsAchievementsOpen(false)}>
          ×
        </button>
        
        <div className="achievements-header">
          <h2 className="achievements-header-title">Key Achievements</h2>
          <p className="achievements-header-subtitle">
            Measurable Impact & Data-Driven Results
          </p>
        </div>

        <div className="achievements-content">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-item">
              <div className="achievement-metric">{achievement.metric}</div>
              <h4 className="achievement-title">{achievement.title}</h4>
              <p className="achievement-description">{achievement.description}</p>
              <p className="achievement-details">{achievement.details}</p>
            </div>
          ))}
        </div>
      </div>

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

      <section id="home" ref={heroRef}>
        {/* LEFT SIDE DECORATIONS - GLOWING LINES & SHAPES ONLY */}
        <div className="left-decorations">
          <div className="geometric-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>

          <div className="glowing-lines">
            <div className="glow-line line-1"></div>
            <div className="glow-line line-2"></div>
            <div className="glow-line line-3"></div>
          </div>
        </div>

        {/* SAMPLE WORKS - RIGHT SIDE ABOVE STATS */}
        <div className="sample-works-wrapper">
          <a 
            href="https://drive.google.com/drive/folders/1cYoTb8mDPcJl5WkJf13xKKSN-0-papHV?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="sample-works-link"
          >
            <span>📂</span>
            <span>View Sample Works</span>
          </a>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-subtitle">Digital Marketing Specialist</div>
            <h1 className="hero-title">Gabriel Labriaga</h1>
            <p className="hero-description">
              Transforming brands through strategic digital marketing, compelling video content, 
              and stunning visual design. Delivering measurable results that drive growth and engagement 
              across multiple platforms with proven expertise in social media management, content creation, 
              and data-driven campaign optimization.
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
            <span className="stat-number">8+</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>
      </section>

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
              With over <strong>8 years of experience</strong> in the digital marketing landscape, 
              I've helped brands across various industries elevate their online presence, engage 
              their target audiences, and achieve their marketing objectives through data-driven 
              strategies and creative excellence.
            </p>
            <p>
              My approach combines strategic thinking with creative execution, ensuring every project 
              not only looks exceptional but also delivers tangible results. From architecting viral 
              social media campaigns to producing engaging video content and designing stunning 
              visual assets, I bring dedication and proven expertise to every collaboration.
            </p>
          </div>
          <div className="skills-grid">
            <div className="skill-item">
              <div className="skill-title">Strategic Planning</div>
              <div className="skill-description">
                Data-driven marketing strategies that align with business objectives and deliver measurable ROI
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-title">Creative Direction</div>
              <div className="skill-description">
                Compelling visual narratives that capture attention and inspire action across all platforms
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-title">Video Production</div>
              <div className="skill-description">
                Professional video editing and motion graphics that tell your story with impact
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-title">Brand Development</div>
              <div className="skill-description">
                Building cohesive brand identities that resonate with target audiences and drive engagement
              </div>
            </div>
          </div>
        </div>
      </section>

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
          <a href="https://drive.google.com/drive/folders/1cYoTb8mDPcJl5WkJf13xKKSN-0-papHV?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View Full Portfolio
          </a>
        </div>
      </section>

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
                  <a href="https://drive.google.com/drive/folders/1cYoTb8mDPcJl5WkJf13xKKSN-0-papHV?usp=sharing" target="_blank" rel="noopener noreferrer">
                    Complete Work Collection
                  </a>
                </p>
              </div>
            </div>
          </div>

          <form 
            className="contact-form" 
            action="https://formspree.io/f/mkogdyjp"
            method="POST"
          >
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
            <a href="https://drive.google.com/drive/folders/1cYoTb8mDPcJl5WkJf13xKKSN-0-papHV?usp=sharing" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Online Portfolio">🌐</a>
          </div>
          <div className="footer-text">
            <p>&copy; 2025 Gabriel Labriaga. All Rights Reserved.</p>
            <p>Digital Marketing Specialist | Video Editor | Graphic Designer | Social Media Manager</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
