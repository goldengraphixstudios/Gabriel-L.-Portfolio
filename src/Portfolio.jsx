import React, { useState, useEffect, useRef } from 'react';

// Custom SVG Icon Component
const CustomIcon = ({ type }) => {
  const iconGradient = (id) => (
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#FFD966" />
      <stop offset="50%" stopColor="#D4AF37" />
      <stop offset="100%" stopColor="#B29E82" />
    </linearGradient>
  );

  const glowFilter = (
    <filter id="iconGlow">
      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  );

  const icons = {
    socialMedia: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <defs>
          {iconGradient('gold1')}
          {glowFilter}
        </defs>
        <circle cx="24" cy="24" r="18" stroke="url(#gold1)" strokeWidth="2" fill="none" filter="url(#iconGlow)"/>
        <circle cx="24" cy="24" r="4" fill="url(#gold1)" filter="url(#iconGlow)"/>
        <circle cx="12" cy="16" r="3" fill="url(#gold1)" opacity="0.8"/>
        <circle cx="36" cy="16" r="3" fill="url(#gold1)" opacity="0.8"/>
        <circle cx="12" cy="32" r="3" fill="url(#gold1)" opacity="0.8"/>
        <circle cx="36" cy="32" r="3" fill="url(#gold1)" opacity="0.8"/>
        <line x1="24" y1="24" x2="12" y2="16" stroke="url(#gold1)" strokeWidth="1.5" opacity="0.6"/>
        <line x1="24" y1="24" x2="36" y2="16" stroke="url(#gold1)" strokeWidth="1.5" opacity="0.6"/>
        <line x1="24" y1="24" x2="12" y2="32" stroke="url(#gold1)" strokeWidth="1.5" opacity="0.6"/>
        <line x1="24" y1="24" x2="36" y2="32" stroke="url(#gold1)" strokeWidth="1.5" opacity="0.6"/>
      </svg>
    ),
    video: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <defs>
          {iconGradient('gold2')}
          {glowFilter}
        </defs>
        <rect x="8" y="14" width="28" height="20" rx="2" stroke="url(#gold2)" strokeWidth="2" fill="none" filter="url(#iconGlow)"/>
        <polygon points="19,21 19,27 26,24" fill="url(#gold2)" filter="url(#iconGlow)"/>
        <path d="M36 18 L42 14 L42 34 L36 30" stroke="url(#gold2)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" filter="url(#iconGlow)"/>
        <circle cx="11" cy="17" r="1.5" fill="#FFD966" filter="url(#iconGlow)"/>
        <circle cx="15" cy="17" r="1.5" fill="#FFD966" filter="url(#iconGlow)"/>
      </svg>
    ),
    design: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <defs>
          {iconGradient('gold3')}
          {glowFilter}
        </defs>
        <path d="M32 12 L36 20 L28 20 Z" fill="url(#gold3)" filter="url(#iconGlow)"/>
        <circle cx="16" cy="32" r="6" stroke="url(#gold3)" strokeWidth="2" fill="none" filter="url(#iconGlow)"/>
        <rect x="26" y="26" width="12" height="12" stroke="url(#gold3)" strokeWidth="2" fill="none" filter="url(#iconGlow)"/>
        <path d="M10 16 L16 10 L22 16 L16 22 Z" stroke="url(#gold3)" strokeWidth="2" fill="none" filter="url(#iconGlow)"/>
      </svg>
    ),
    ads: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <defs>
          {iconGradient('gold4')}
          {glowFilter}
        </defs>
        <rect x="10" y="12" width="28" height="24" rx="2" stroke="url(#gold4)" strokeWidth="2" fill="none" filter="url(#iconGlow)"/>
        <line x1="10" y1="20" x2="38" y2="20" stroke="url(#gold4)" strokeWidth="2"/>
        <circle cx="24" cy="28" r="5" stroke="url(#gold4)" strokeWidth="2" fill="none" filter="url(#iconGlow)"/>
        <path d="M24 24 L24 32 M20 28 L28 28" stroke="url(#gold4)" strokeWidth="2" strokeLinecap="round"/>
        <line x1="15" y1="16" x2="18" y2="16" stroke="url(#gold4)" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    content: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <defs>
          {iconGradient('gold5')}
          {glowFilter}
        </defs>
        <rect x="12" y="8" width="24" height="32" rx="2" stroke="url(#gold5)" strokeWidth="2" fill="none" filter="url(#iconGlow)"/>
        <line x1="16" y1="16" x2="32" y2="16" stroke="url(#gold5)" strokeWidth="2" strokeLinecap="round"/>
        <line x1="16" y1="22" x2="32" y2="22" stroke="url(#gold5)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
        <line x1="16" y1="27" x2="28" y2="27" stroke="url(#gold5)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
        <line x1="16" y1="32" x2="26" y2="32" stroke="url(#gold5)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <path d="M20 12 L20 6 L28 6 L28 12" stroke="url(#gold5)" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    growth: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <defs>
          {iconGradient('gold6')}
          {glowFilter}
        </defs>
        <polyline points="10,35 16,28 22,30 28,20 34,24 40,12" stroke="url(#gold6)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" filter="url(#iconGlow)"/>
        <circle cx="10" cy="35" r="2" fill="url(#gold6)" filter="url(#iconGlow)"/>
        <circle cx="16" cy="28" r="2" fill="url(#gold6)" filter="url(#iconGlow)"/>
        <circle cx="22" cy="30" r="2" fill="url(#gold6)" filter="url(#iconGlow)"/>
        <circle cx="28" cy="20" r="2" fill="url(#gold6)" filter="url(#iconGlow)"/>
        <circle cx="34" cy="24" r="2" fill="url(#gold6)" filter="url(#iconGlow)"/>
        <circle cx="40" cy="12" r="2" fill="url(#gold6)" filter="url(#iconGlow)"/>
        <path d="M36 12 L40 12 L40 16" stroke="url(#gold6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    website: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <defs>
          {iconGradient('gold7')}
          {glowFilter}
        </defs>
        <rect x="8" y="10" width="32" height="28" rx="2" stroke="url(#gold7)" strokeWidth="2" fill="none" filter="url(#iconGlow)"/>
        <line x1="8" y1="18" x2="40" y2="18" stroke="url(#gold7)" strokeWidth="2"/>
        <circle cx="12" cy="14" r="1.5" fill="url(#gold7)"/>
        <circle cx="16" cy="14" r="1.5" fill="url(#gold7)"/>
        <circle cx="20" cy="14" r="1.5" fill="url(#gold7)"/>
        <path d="M16 26 L20 30 L16 34" stroke="url(#gold7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" filter="url(#iconGlow)"/>
        <path d="M24 26 L28 30 L24 34" stroke="url(#gold7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" filter="url(#iconGlow)"/>
      </svg>
    )
  };

  return icons[type] || null;
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const heroRef = useRef(null);
  const trackRef = useRef(null);

  // Services for carousel with custom icon types
  const services = [
    {
      iconType: "socialMedia",
      title: "Social Media Marketing",
      description: "Comprehensive social media strategies that build communities and drive engagement",
      features: ["Content Strategy & Planning", "Community Management", "Social Media Analytics", "Influencer Partnerships"]
    },
    {
      iconType: "video",
      title: "Video Production",
      description: "Professional video editing and production that brings your vision to life",
      features: ["Video Editing & Post-Production", "Motion Graphics & Animation", "Color Grading & Sound Design", "YouTube Content Creation"]
    },
    {
      iconType: "design",
      title: "Graphic Design",
      description: "Stunning visual designs that communicate your brand message effectively",
      features: ["Brand Identity Design", "Marketing Materials", "Social Media Graphics", "Print & Digital Assets"]
    },
    {
      iconType: "ads",
      title: "Paid Advertising",
      description: "Targeted ad campaigns that maximize ROI and drive conversions",
      features: ["Facebook & Instagram Ads", "Google Ads Management", "Campaign Optimization", "Performance Analytics"]
    },
    {
      iconType: "content",
      title: "Content Marketing",
      description: "Compelling content that tells your story and engages your audience",
      features: ["Content Strategy", "Copywriting", "Blog & Article Writing", "SEO Optimization"]
    },
    {
      iconType: "growth",
      title: "Growth Strategy",
      description: "Comprehensive digital strategies that scale your business",
      features: ["Marketing Audits", "Growth Planning", "Funnel Optimization", "Performance Tracking"]
    },
    {
      iconType: "website",
      title: "Website Development",
      description: "Professional, responsive websites that convert visitors into customers",
      features: ["Custom Website Design & Development", "E-commerce Solutions", "Landing Page Optimization", "Mobile-Responsive Design"]
    }
  ];

  // Create triple array for infinite loop
  const infiniteServices = [...services, ...services, ...services];

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Handle infinite loop reset
  useEffect(() => {
    if (!isTransitioning) return;

    const handleReset = () => {
      // If we've scrolled past the second set, reset to first set
      if (currentIndex >= services.length * 2) {
        setIsTransitioning(false);
        setCurrentIndex(services.length);
      }
      // If we've scrolled before the first set, reset to second set
      else if (currentIndex < services.length) {
        setIsTransitioning(false);
        setCurrentIndex(services.length * 2 - 1);
      }
    };

    const timeout = setTimeout(handleReset, 600); // Match transition duration
    return () => clearTimeout(timeout);
  }, [currentIndex, isTransitioning, services.length]);

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

  // Auto-play carousel - loops continuously
  useEffect(() => {
    if (isCarouselPaused) return;

    const autoPlay = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(autoPlay);
  }, [isCarouselPaused]);

  // TAWK.TO CHATBOT INTEGRATION ✅ (FIXED)
useEffect(() => {
  // Prevent duplicate loading (important for React)
  if (window.Tawk_API) return;

  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_LoadStart = new Date();

  const s1 = document.createElement("script");
  s1.async = true;
  s1.src = "https://embed.tawk.to/69642916ebb1cc197fdf2e04/1jenk10mn";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");

  document.body.appendChild(s1);

  window.Tawk_API.onLoad = function () {
    console.log("✅ Tawk.to widget loaded successfully");
  };
}, []); // Only run once on mount


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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Montserrat:wght@300;400;500;600;700&family=Cinzel:wght@400;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="%23CDA45E" opacity="0.6"/><circle cx="12" cy="12" r="3" fill="%23CDA45E"/></svg>') 12 12, auto;
        }

        a, button, input, select, textarea {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="%23CDA45E" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="%23CDA45E"/></svg>') 12 12, pointer;
        }

        :root {
          /* Luxury Gold Palette */
          --luxury-gold: #D4AF37;
          --warm-glow: #FFD966;
          --muted-gold: #B29E82;
          --panel-overlay: #3A2D24;
          
          /* Dark Backgrounds */
          --dark: #0A0A0A;
          --dark-soft: #1A1A1A;
          --dark-lighter: #2A2A2A;
          
          /* Text Colors */
          --text-hero: #FFD966;
          --text-heading: #D4AF37;
          --text-body: #B29E82;
          --text-dim: #8A7A6A;
          --white: #FFFFFF;
          
          /* Legacy compatibility */
          --primary: #D4AF37;
          --primary-dark: #A58344;
          --accent: #FFD966;
          --text: #B29E82;
          
          /* Glow Effects */
          --glow-sm: 0 0 10px rgba(255, 217, 102, 0.3);
          --glow-md: 0 0 20px rgba(255, 217, 102, 0.4), 0 0 40px rgba(212, 175, 55, 0.2);
          --glow-lg: 0 0 30px rgba(255, 217, 102, 0.5), 0 0 60px rgba(212, 175, 55, 0.3);
          --glow-intense: 0 0 20px rgba(255, 217, 102, 0.8), 0 0 40px rgba(212, 175, 55, 0.6);
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Montserrat', 'Work Sans', sans-serif;
          background: var(--dark);
          color: var(--text-body);
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
          height: 4px;
          background: linear-gradient(90deg, 
            var(--warm-glow) 0%,    /* #FFD966 */
            var(--luxury-gold) 50%, /* #D4AF37 */
            var(--warm-glow) 100%); /* #FFD966 */
          z-index: 9999;
          transition: width 0.1s ease;
          box-shadow: var(--glow-intense);   /* Intense gold glow */
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
          background: rgba(10, 10, 10, 0.98);
          backdrop-filter: blur(30px) saturate(180%);
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);   /* Luxury gold border */
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.7);
          animation: slideDown 0.8s ease-out;
        }

        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
        }

        .logo {
          font-family: 'Cinzel', 'Cormorant Garamond', serif;   /* Luxury serif */
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--luxury-gold);   /* Luxury gold */
          letter-spacing: 0.15em;
          position: relative;
          text-shadow: var(--glow-sm);   /* Subtle glow */
        }

        .logo::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 60%;
          height: 2px;   /* Thicker */
          background: var(--luxury-gold);
          box-shadow: var(--glow-sm);
        }

        .nav-links {
          display: flex;
          gap: 3rem;
          align-items: center;
        }

        .nav-links a {
          color: var(--text-body);   /* Muted gold */
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          position: relative;
          transition: all 0.3s ease;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: var(--warm-glow);   /* Bright gold */
          box-shadow: var(--glow-sm);
          transition: width 0.3s ease;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: var(--warm-glow);   /* Bright gold on hover */
          text-shadow: var(--glow-sm);
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
          font-family: 'Playfair Display', 'Cormorant Garamond', serif;   /* Luxury serif */
          font-size: 5.5rem;
          font-weight: 900;   /* Bolder */
          line-height: 1.1;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, 
            var(--white) 0%, 
            var(--warm-glow) 30%,
            var(--luxury-gold) 60%,
            var(--white) 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fadeInUp 1s ease-out 0.4s both, gradientShift 8s ease infinite;
          filter: drop-shadow(0 4px 30px rgba(212, 175, 55, 0.3));   /* Gold glow */
          letter-spacing: -0.02em;
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
          font-family: 'Montserrat', sans-serif;
          font-size: 1.2rem;
          line-height: 1.9;
          color: var(--muted-gold);   /* Muted gold for description */
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
          display: inline-block;
          padding: 1.2rem 3rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-decoration: none;
          border: 2px solid var(--luxury-gold);
          border-radius: 6px;
          cursor: none;   /* Custom cursor */
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          background: transparent;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--luxury-gold) 0%, var(--muted-gold) 100%);
          color: var(--dark);
          border-color: var(--luxury-gold);
          box-shadow: var(--glow-md), 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        .btn-primary:hover {
          transform: translateY(-4px);
          box-shadow: var(--glow-intense), 0 8px 30px rgba(0, 0, 0, 0.6);
          border-color: var(--warm-glow);
        }

        .btn-secondary {
          background: rgba(212, 175, 55, 0.08);
          color: var(--luxury-gold);
          border-color: var(--luxury-gold);
          backdrop-filter: blur(10px);
        }

        .btn-secondary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: var(--luxury-gold);
          transition: left 0.3s ease;
          z-index: -1;
        }

        .btn-secondary:hover {
          color: var(--dark);
          transform: translateY(-4px);
          box-shadow: var(--glow-md), 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        .btn-secondary:hover::before {
          left: 0;
        }

        /* SAMPLE WORKS BUTTON - RIGHT SIDE ABOVE STATS */
        .sample-works-wrapper {
          position: absolute;
          right: 12%;
          bottom: 440px;
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
          font-family: 'Playfair Display', 'Cormorant Garamond', serif;
          font-size: 4rem;   /* Bigger */
          font-weight: 700;
          color: var(--luxury-gold);   /* Luxury gold */
          text-shadow: var(--glow-md);   /* Gold glow */
          letter-spacing: -0.01em;
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
          position: relative;
          overflow: hidden;
        }

        /* ANIMATED BACKGROUND ELEMENTS */
        #services::before {
          content: '';
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(205, 164, 94, 0.08) 0%, transparent 70%);
          top: -200px;
          left: -100px;
          border-radius: 50%;
          animation: floatBackground1 20s ease-in-out infinite;
          z-index: 1;
        }

        #services::after {
          content: '';
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(205, 164, 94, 0.06) 0%, transparent 70%);
          bottom: -150px;
          right: -80px;
          border-radius: 50%;
          animation: floatBackground2 25s ease-in-out infinite;
          z-index: 1;
        }

        @keyframes floatBackground1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.5;
          }
          33% {
            transform: translate(100px, 80px) scale(1.1);
            opacity: 0.7;
          }
          66% {
            transform: translate(-50px, 120px) scale(0.9);
            opacity: 0.6;
          }
        }

        @keyframes floatBackground2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          33% {
            transform: translate(-80px, -60px) scale(1.15);
            opacity: 0.6;
          }
          66% {
            transform: translate(70px, -100px) scale(0.95);
            opacity: 0.5;
          }
        }

        .section-header {
          position: relative;
          z-index: 2;
        }

        /* FLOATING GEOMETRIC SHAPES */
        .services-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 1;
          pointer-events: none;
        }

        .floating-shape {
          position: absolute;
          border: 2px solid rgba(205, 164, 94, 0.15);
          opacity: 0.6;
        }

        .shape-circle {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          top: 15%;
          right: 10%;
          animation: floatShape1 15s ease-in-out infinite;
        }

        .shape-square {
          width: 100px;
          height: 100px;
          top: 60%;
          left: 8%;
          transform: rotate(45deg);
          animation: floatShape2 18s ease-in-out infinite;
        }

        .shape-triangle {
          width: 0;
          height: 0;
          border-left: 60px solid transparent;
          border-right: 60px solid transparent;
          border-bottom: 100px solid rgba(205, 164, 94, 0.1);
          border-top: 0;
          top: 35%;
          right: 20%;
          animation: floatShape3 20s ease-in-out infinite;
        }

        .shape-hexagon {
          width: 80px;
          height: 80px;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          background: rgba(205, 164, 94, 0.08);
          top: 70%;
          right: 15%;
          animation: floatShape4 22s ease-in-out infinite;
        }

        @keyframes floatShape1 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(30px, -40px) rotate(180deg);
          }
        }

        @keyframes floatShape2 {
          0%, 100% {
            transform: translate(0, 0) rotate(45deg);
          }
          50% {
            transform: translate(-40px, 30px) rotate(225deg);
          }
        }

        @keyframes floatShape3 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translate(25px, 35px) rotate(180deg);
            opacity: 0.6;
          }
        }

        @keyframes floatShape4 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          50% {
            transform: translate(-30px, -25px) rotate(120deg) scale(1.2);
          }
        }

        /* PREMIUM SERVICES CAROUSEL - FIXED CONSTRAINTS */
        .services-carousel-container {
          max-width: 1600px;          /* Wider! Was 1400px */
          margin: 0 auto;
          position: relative;
          padding: 60px 100px;        /* More generous padding for hover space */
          z-index: 2;
        }

        .services-carousel {
          overflow: visible;          /* FIXED! Was hidden - this was clipping hover effects */
          position: relative;
          padding: 40px 0;            /* Extra vertical padding for hover lift */
        }

        .services-track {
          display: flex;
        }

        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, rgba(205, 164, 94, 0.15) 0%, rgba(205, 164, 94, 0.05) 100%);
          border: 2px solid rgba(205, 164, 94, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: var(--primary);
          cursor: none;
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 10;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .carousel-arrow:hover {
          background: linear-gradient(135deg, rgba(205, 164, 94, 0.25) 0%, rgba(205, 164, 94, 0.15) 100%);
          border-color: var(--primary);
          transform: translateY(-50%) scale(1.1);
          box-shadow: 
            0 8px 30px rgba(0, 0, 0, 0.5),
            0 0 40px rgba(205, 164, 94, 0.3);
        }

        .carousel-arrow.prev {
          left: 0;
        }

        .carousel-arrow.next {
          right: 0;
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 4rem;
        }

        .carousel-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(205, 164, 94, 0.2);
          border: 2px solid rgba(205, 164, 94, 0.3);
          cursor: none;
          transition: all 0.3s ease;
        }

        .carousel-dot.active {
          background: var(--primary);
          border-color: var(--primary);
          box-shadow: 0 0 20px rgba(205, 164, 94, 0.6);
          transform: scale(1.3);
        }

        .service-card {
          flex: 0 0 calc(33.333%);
          min-width: calc(33.333%);
          padding: 3.5rem 2.8rem;      /* Better internal spacing */
          margin-right: 0;
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(18, 18, 18, 0.9) 100%);
          border: 1px solid rgba(212, 175, 55, 0.2);  /* Luxury gold border */
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          box-sizing: border-box;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 217, 102, 0.08), transparent);
          transition: left 0.8s ease;
        }

        .service-card:hover::before {
          left: 100%;
        }

        .service-card:hover {
          border-color: var(--warm-glow);   /* Gold glow on hover */
          transform: translateY(-16px) scale(1.02);   /* More lift, won't clip now! */
          box-shadow: 
            var(--glow-md),
            0 25px 50px rgba(0, 0, 0, 0.7),
            0 0 0 1px rgba(212, 175, 55, 0.5),
            inset 0 0 60px rgba(255, 217, 102, 0.05);
        }

        .service-icon {
          width: 80px;
          height: 80px;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle, rgba(255, 217, 102, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          transition: all 0.4s ease;
        }

        .service-card:hover .service-icon {
          transform: scale(1.15);
          background: radial-gradient(circle, rgba(255, 217, 102, 0.2) 0%, transparent 70%);
          box-shadow: var(--glow-md);
        }

        .service-title {
          font-family: 'Cinzel', 'Playfair Display', serif;   /* Luxury serif */
          font-size: 2rem;
          font-weight: 600;
          color: var(--warm-glow);   /* Bright gold */
          margin-bottom: 1rem;
          letter-spacing: 0.02em;
        }

        .service-description {
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          line-height: 1.7;
          color: var(--muted-gold);   /* Muted gold for body */
          margin-bottom: 1.5rem;
        }

        .service-features {
          list-style: none;
          padding: 0;
        }

        .service-features li {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.95rem;
          color: var(--text-body);   /* Muted gold */
          padding: 0.6rem 0 0.6rem 1.8rem;
          position: relative;
          margin-bottom: 0.3rem;
          display: flex;
          align-items: center;
        }

        .service-features li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--luxury-gold);   /* Gold arrow */
          font-weight: 700;
          font-size: 1.2rem;
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

          .services-carousel-container {
            padding: 0 60px;
          }

          .carousel-arrow {
            width: 50px;
            height: 50px;
            font-size: 20px;
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

          .services-carousel-container {
            padding: 0 40px;
          }

          .carousel-arrow {
            width: 45px;
            height: 45px;
            font-size: 18px;
          }

          .service-card {
            flex: 0 0 100%;
            min-width: 100%;
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
        {/* Floating Geometric Shapes */}
        <div className="services-shapes">
          <div className="floating-shape shape-circle"></div>
          <div className="floating-shape shape-square"></div>
          <div className="floating-shape shape-triangle"></div>
          <div className="floating-shape shape-hexagon"></div>
        </div>

        <div className="section-header">
          <div className="section-subtitle">Services</div>
          <h2 className="section-title">What I Offer</h2>
        </div>
        
        <div 
          className="services-carousel-container"
          onMouseEnter={() => setIsCarouselPaused(true)}
          onMouseLeave={() => setIsCarouselPaused(false)}
        >
          <button className="carousel-arrow prev" onClick={prevSlide} aria-label="Previous services">
            ←
          </button>

          <div className="services-carousel">
            <div 
              ref={trackRef}
              className="services-track" 
              style={{ 
                transform: `translateX(calc(-${currentIndex * 33.333}%))`,
                transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
              }}
            >
              {infiniteServices.map((service, index) => (
                <div className="service-card" key={index}>
                  <div className="service-icon">
                    <CustomIcon type={service.iconType} />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-arrow next" onClick={nextSlide} aria-label="Next services">
            →
          </button>

          <div className="carousel-dots">
            {services.map((_, index) => (
              <div
                key={index}
                className={`carousel-dot ${currentIndex % services.length === index ? 'active' : ''}`}
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentIndex(services.length + index);
                }}
              />
            ))}
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
                <option value="website-development">Website Development</option>
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
