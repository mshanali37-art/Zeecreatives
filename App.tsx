import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Menu, 
  X, 
  Star, 
  Figma, 
  Linkedin, 
  Instagram, 
  Dribbble,
  Award,
  CheckCircle,
  Quote,
  Briefcase,
  TrendingUp,
  ExternalLink,
  Mail
} from 'lucide-react';
import { LINKS, FEATURED_PROJECTS, WALL_IMAGES, BUDDABOMB_CAMPAIGNS, GOGOOD_CAMPAIGNS, FIT_FIGHTER_CAMPAIGNS, GORAL_CAMPAIGNS, CUPPINGS_CAMPAIGNS, STATS, TESTIMONIALS } from './constants';
import { Project } from './types';

// Scroll Reveal Wrapper Component
// Using React.FC to properly handle children and special props like key
const Reveal: React.FC<{ children: React.ReactNode; width?: string; delay?: number }> = ({ children, width = "w-full", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`${width} transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Navbar component for site-wide navigation
const Navbar = ({ onBackHome }: { onBackHome?: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement> | React.TouchEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    onBackHome?.();

    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Navbar height + buffer
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/60 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="text-xl font-extrabold tracking-tighter text-white cursor-pointer group flex items-center gap-2"
          onClick={(e) => { 
            // @ts-ignore
            scrollToSection(e, 'home'); 
          }}
        >
          <div className="w-8 h-8 bg-[#ccff00] rounded-lg flex items-center justify-center text-black font-black text-xs rotate-12 group-hover:rotate-0 transition-transform">ZC</div>
          <span>ZEE <span className="text-[#ccff00]">CREATIVES</span></span>
        </div>
        
        <div className="hidden md:flex items-center space-x-10">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-xs font-bold tracking-widest uppercase hover:text-[#ccff00] transition-colors cursor-pointer">Home</a>
          <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="text-xs font-bold tracking-widest uppercase hover:text-[#ccff00] transition-colors cursor-pointer">Projects</a>
          <a href="#designs" onClick={(e) => scrollToSection(e, 'designs')} className="text-xs font-bold tracking-widest uppercase hover:text-[#ccff00] transition-colors cursor-pointer">Designs</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-xs font-bold tracking-widest uppercase hover:text-[#ccff00] transition-colors cursor-pointer">About</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-xs font-bold tracking-widest uppercase hover:text-[#ccff00] transition-colors cursor-pointer">Contact</a>
          <a 
            href={LINKS.upwork}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ccff00] text-black px-6 py-2.5 rounded-full text-xs font-black uppercase flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)]"
          >
            Hire Me <ArrowRight size={14} />
          </a>
        </div>

        <button className="md:hidden text-white p-2 relative z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black z-[60] flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <button className="absolute top-8 right-8 text-white p-4" onClick={() => setIsOpen(false)}><X size={32} /></button>
        <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-3xl font-black uppercase tracking-tighter hover:text-[#ccff00] transition-colors">Home</a>
        <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="text-3xl font-black uppercase tracking-tighter hover:text-[#ccff00] transition-colors">Projects</a>
        <a href="#designs" onClick={(e) => scrollToSection(e, 'designs')} className="text-3xl font-black uppercase tracking-tighter hover:text-[#ccff00] transition-colors">Designs</a>
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-3xl font-black uppercase tracking-tighter hover:text-[#ccff00] transition-colors">About</a>
        <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-3xl font-black uppercase tracking-tighter hover:text-[#ccff00] transition-colors">Contact</a>
        <a href={LINKS.upwork} className="bg-[#ccff00] text-black px-10 py-4 rounded-full font-black uppercase tracking-widest mt-8">Hire Me</a>
      </div>
    </nav>
  );
};

// Scrolling Ticker Component
const ScrollingTicker = () => {
  const items = [
    "IDENTITY", "UI/UX DESIGN", "VISUAL STORYTELLING", "PRODUCT STRATEGY", 
    "MOTION GRAPHICS", "DESIGN THINKING", "CONVERSION OPTIMIZATION", "BRANDING"
  ];
  
  return (
    <div className="w-full overflow-hidden bg-black flex flex-col items-center z-10 relative">
      <div className="relative w-full h-16 md:h-24 bg-[#ccff00] -rotate-1 flex items-center overflow-hidden border-y-2 border-black/20 shadow-2xl">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <span className="text-black font-black text-xl md:text-3xl px-12 tracking-tighter uppercase">{item}</span>
                  <span className="text-black text-3xl">✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Hero section with typing effect
const Hero = () => {
  const words = ['GRAPHIC', 'EMAIL', 'LOGO'];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const currentFullWord = words[wordIndex];
      
      if (!isDeleting) {
        const nextText = currentFullWord.substring(0, displayText.length + 1);
        setDisplayText(nextText);
        
        if (nextText === currentFullWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        const nextText = currentFullWord.substring(0, displayText.length - 1);
        setDisplayText(nextText);
        
        if (nextText === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(
      handleTyping, 
      isDeleting ? deletingSpeed : typingSpeed
    );
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <section id="home" className="relative pt-40 pb-20 px-6 bg-mesh min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] bg-[#ccff00]/5 rounded-full blur-[120px] pointer-events-none -z-0"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center text-left relative z-10">
        <div className="lg:col-span-8 space-y-12">
          <Reveal delay={100}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-black text-[#ccff00] uppercase tracking-widest">
              <span className="w-2 h-2 bg-[#ccff00] rounded-full animate-pulse"></span>
              Top Rated Visual Designer
            </div>
          </Reveal>
          
          <Reveal delay={300}>
            <div className="space-y-6">
              <h1 className="flex flex-col items-start uppercase tracking-tighter leading-[0.9]">
                <span className="text-3xl md:text-5xl font-bold text-gray-500 mb-2">I’M A</span>
                <span className="text-6xl md:text-9xl font-black text-[#ccff00] mb-2 drop-shadow-[0_0_30px_rgba(204,255,0,0.4)]">
                  {displayText}<span className="text-white animate-pulse">|</span>
                </span>
                <span className="text-6xl md:text-8xl lg:text-[9rem] font-black text-white">DESIGNER</span>
              </h1>

              <div className="flex flex-wrap items-center gap-8 py-8 border-y border-white/5 max-w-fit mt-8 bg-white/[0.02] backdrop-blur-sm px-6 rounded-2xl">
                <div className="flex items-center gap-3">
                  <TrendingUp size={24} className="text-[#ccff00]" />
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-white leading-none">{STATS.earnings}</span>
                    <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest mt-1">Earnings</span>
                  </div>
                </div>
                <div className="w-[1px] h-10 bg-white/10 hidden sm:block"></div>
                <div className="flex items-center gap-3">
                  <Briefcase size={24} className="text-[#ccff00]" />
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-white leading-none">{STATS.jobs}</span>
                    <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest mt-1">Jobs</span>
                  </div>
                </div>
                <div className="w-[1px] h-10 bg-white/10 hidden sm:block"></div>
                <div className="flex items-center gap-3">
                  <Star size={24} className="text-[#ccff00]" fill="#ccff00" />
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-white leading-none">{STATS.jss}</span>
                    <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest mt-1">Success</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed font-medium">
              Bridging <span className="text-white">Consumer Psychology</span> and <span className="text-[#ccff00]">Premium Aesthetics</span> to help brands convert attention into revenue. High-impact visuals that don't just look good—they perform.
            </p>
          </Reveal>
          
          <Reveal delay={700}>
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <a 
                href="#projects" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  const element = document.getElementById('projects');
                  if (element) {
                    const offset = 100;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="group px-10 py-5 bg-[#ccff00] text-black rounded-full font-black text-lg hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-2xl active:scale-95 cursor-pointer"
              >
                Explore Portfolio <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={LINKS.email} 
                className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full font-black text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3 backdrop-blur-md"
              >
                <Mail size={20} /> Contact Me
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-4 relative group hidden lg:block">
          <Reveal delay={400}>
            <div className="relative z-10 bg-[#0a0a0a] border border-white/10 rounded-[3rem] overflow-hidden p-6 glow-accent group-hover:border-[#ccff00]/30 transition-all duration-700">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 relative">
                <img 
                  src="https://lh3.googleusercontent.com/d/1ETQbcLs-u-OvRjGS6-2mI3CSIImtzUNw" 
                  alt="Abdul Ahad" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute top-6 right-6 bg-[#ccff00] text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                  {STATS.status}
                </div>
              </div>
              <div className="space-y-3 px-2">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none italic underline decoration-[#ccff00]/50 underline-offset-8">Zeshan Khalid</h3>
                <p className="text-[#ccff00] font-black text-[10px] uppercase tracking-[0.4em] pt-2">Visual Strategy Lead</p>
                <div className="flex items-center gap-3 pt-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">In-Session / Active</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#ccff00]/10 rounded-full blur-[80px] -z-0 animate-pulse"></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

// Component for rendering featured project cards
const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => (
  <Reveal>
    <div className="group cursor-pointer relative" onClick={onClick}>
      <div className="relative h-[550px] md:h-[750px] rounded-[3.5rem] overflow-hidden border border-white/5 bg-[#080808] mb-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.8)] transition-all duration-700">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-60 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-all duration-700"></div>
        
        {/* Decorative corner element */}
        <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-[#ccff00]/0 group-hover:border-[#ccff00]/40 transition-all duration-700 rounded-tr-3xl"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-[#ccff00]/0 group-hover:border-[#ccff00]/40 transition-all duration-700 rounded-bl-3xl"></div>

        <div className="absolute bottom-16 left-16 right-16 z-10">
          <div className="translate-y-8 group-hover:translate-y-0 transition-all duration-700 ease-out">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[2px] w-12 bg-[#ccff00]"></span>
              <p className="text-[#ccff00] text-sm font-black uppercase tracking-[0.5em]">{project.category}</p>
            </div>
            <h4 className="text-4xl md:text-6xl font-black text-white group-hover:text-[#ccff00] transition-colors mb-8 uppercase tracking-tighter leading-none">{project.title}</h4>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
              <p className="text-gray-400 leading-relaxed text-lg max-w-xl font-medium">
                {project.description}
              </p>
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-[#ccff00] rounded-2xl flex items-center justify-center text-black shadow-2xl hover:scale-110 active:scale-95 transition-all rotate-3 group-hover:rotate-0">
                  <ExternalLink size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Reveal>
);

// Testimonials Section
const Testimonials = () => (
  <section className="relative py-40 px-6 bg-[#030303]">
    <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent"></div>
    <div className="max-w-7xl mx-auto relative z-10">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-16 border-b border-white/5 pb-20">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">Global <br /><span className="text-[#ccff00] italic">Endorsements</span></h2>
            <p className="text-xl text-gray-500 max-w-xl font-black uppercase tracking-[0.3em] leading-relaxed">Validation from industry leaders and high-growth founders.</p>
          </div>
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-12 rounded-[3.5rem] flex items-center gap-12 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <div className="text-center group">
              <div className="text-5xl font-black text-white group-hover:text-[#ccff00] transition-colors">{STATS.jss}</div>
              <div className="text-[10px] font-black text-[#ccff00] uppercase tracking-widest mt-2">Satisfaction</div>
            </div>
            <div className="w-[1px] h-16 bg-white/10"></div>
            <div className="text-center group">
              <div className="text-5xl font-black text-white group-hover:text-[#ccff00] transition-colors">5.0</div>
              <div className="text-[10px] font-black text-[#ccff00] uppercase tracking-widest mt-2">Rating Avg</div>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.id} delay={i * 200}>
            <div className="bg-white/[0.02] border border-white/5 p-16 rounded-[4rem] hover:border-[#ccff00]/30 transition-all group relative overflow-hidden h-full flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ccff00]/5 blur-3xl rounded-full group-hover:bg-[#ccff00]/10 transition-colors"></div>
              <div>
                <Quote size={48} className="text-[#ccff00] mb-12 opacity-30 group-hover:opacity-100 transition-all transform group-hover:-translate-y-2" />
                <p className="text-2xl text-white font-medium italic mb-16 leading-relaxed">"{t.comment}"</p>
              </div>
              <div className="flex items-center justify-between pt-10 border-t border-white/5">
                <div>
                  <p className="text-white font-black uppercase tracking-tight text-xl">{t.client}</p>
                  <p className="text-[#ccff00] text-[10px] font-black uppercase tracking-[0.3em] mt-2">{t.project}</p>
                </div>
                <div className="flex gap-1.5">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="#ccff00" className="text-[#ccff00]" />)}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

// Detailed project view component
const ProjectDetailsView = ({ type, onBack }: { type: 'buddabomb' | 'gogood' | 'fitfighter' | 'goral' | 'cuppings', onBack: (section?: string) => void }) => {
  let campaigns;
  let title;
  let subtitle;
  let description;

  if (type === 'buddabomb') {
    campaigns = BUDDABOMB_CAMPAIGNS;
    title = 'BUUDABOMB';
    subtitle = 'RETENTION & LIFECYCLE MARKETING';
    description = "To keep subscribers happy, I start with a warm welcome series that teaches them how to use the product so they see value right away. I also set up automated check-ins to celebrate their milestones and dunning flows to fix payment issues before their service gets cut off. By sending regular tips and asking for feedback, I can catch any problems early and keep the brand top of mind.";
  } else if (type === 'gogood') {
    campaigns = GOGOOD_CAMPAIGNS;
    title = 'GOGOOD';
    subtitle = 'Lifecycle & Retention Automation';
    description = "High-conversion visual storytelling and marketing automation designed to drive real business growth. Each campaign is a blend of strategic copywriting, clean typography, and high-impact imagery.";
  } else if (type === 'fitfighter') {
    campaigns = FIT_FIGHTER_CAMPAIGNS;
    title = 'FIT FIGHTER';
    subtitle = 'Brand Identity & Social';
    description = "A complete visual overhaul for a combat sports lifestyle brand. This project merged aggressive, high-energy aesthetics with clean, functional design systems for web and apparel, targeting a young, digitally-native demographic.";
  } else if (type === 'goral') {
    campaigns = GORAL_CAMPAIGNS;
    title = 'GORAL';
    subtitle = 'Premium Footwear Identity';
    description = "A distinct visual identity system for a heritage footwear brand, blending traditional craftsmanship with modern streetwear aesthetics. The project focused on elevating the digital storefront and social presence to compete in the high-end sneaker market.";
  } else {
    campaigns = CUPPINGS_CAMPAIGNS;
    title = 'CUPPINGS';
    subtitle = 'Branding & Packaging';
    description = "A comprehensive branding and packaging suite designed to elevate a modern wellness brand. The visual identity balances organic warmth with premium minimalism, creating a serene yet impactful consumer experience.";
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-black pt-40 pb-40 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[600px] bg-mesh opacity-50 -z-0"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <button 
          onClick={() => onBack('projects')}
          className="mb-20 flex items-center gap-4 text-gray-500 hover:text-[#ccff00] transition-all font-black uppercase tracking-[0.4em] text-xs group"
        >
          <div className="p-2 border border-white/10 rounded-full group-hover:border-[#ccff00]/50 transition-colors">
            <ArrowLeft size={16} />
          </div>
          Back to Portfolio
        </button>

        <Reveal>
          <div className="mb-40 space-y-10 text-center">
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-none italic">{title}</h1>
            <h2 className="text-sm md:text-xl font-black text-[#ccff00] uppercase tracking-[0.6em] bg-white/5 py-3 px-8 rounded-full inline-block">{subtitle}</h2>
            <p className="text-gray-400 max-w-4xl mx-auto pt-10 leading-relaxed text-2xl font-medium">
              {description}
            </p>
          </div>
        </Reveal>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
          {campaigns.map((campaign, i) => (
            <Reveal key={campaign.id} delay={i % 3 * 150}>
              <div className="break-inside-avoid group flex flex-col mb-12">
                <div className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-[0_30px_60px_rgba(0,0,0,0.6)] group-hover:shadow-[0_40px_80px_rgba(204,255,0,0.1)] transition-all duration-700">
                  <img 
                    src={campaign.imageUrl} 
                    alt={campaign.title} 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-12">
                    <div className="space-y-4 translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                      <p className="text-[#ccff00] text-[10px] font-black uppercase tracking-[0.4em]">Creative Direction</p>
                      <p className="text-white font-black text-3xl uppercase tracking-tighter leading-tight">{campaign.title}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 px-6 flex items-center justify-between group-hover:px-2 transition-all duration-500">
                  <h3 className="text-xl font-black text-white uppercase tracking-tight">{campaign.title}</h3>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#ccff00] group-hover:text-black transition-all">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-60 pt-32 border-t border-white/10 text-center">
          <Reveal>
            <button 
              onClick={() => onBack('home')}
              className="group px-16 py-8 bg-[#ccff00] text-black rounded-full font-black text-2xl hover:scale-105 transition-all inline-flex items-center gap-8 shadow-[0_20px_60px_rgba(204,255,0,0.3)]"
            >
              <ArrowLeft size={32} className="group-hover:-translate-x-2 transition-transform" /> Back to Home
            </button>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

// Main landing page content
const MainPortfolio = ({ onOpenProject, onHome, initialSection }: { onOpenProject: (type: 'buddabomb' | 'gogood' | 'fitfighter' | 'goral' | 'cuppings') => void, onHome: () => void, initialSection?: string }) => {
  
  useEffect(() => {
    if (initialSection) {
      setTimeout(() => {
        const element = document.getElementById(initialSection);
        if (element) {
          const offset = 100;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        } else {
           window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [initialSection]);

  return (
    <div className="bg-black">
      <Navbar onBackHome={onHome} />
      <Hero />
      <ScrollingTicker />

      <section id="projects" className="py-40 px-6 relative">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#ccff00]/5 blur-[150px] -z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-40 space-y-10">
              <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase whitespace-nowrap italic drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">Featured Projects</h2>
              <div className="w-40 h-1.5 bg-[#ccff00] mx-auto rounded-full"></div>
              <p className="text-2xl text-gray-500 max-w-4xl mx-auto pt-10 leading-relaxed font-black uppercase tracking-widest italic opacity-60">
                Conversion Focused Design Systems
              </p>
            </div>
          </Reveal>
          
          <div className="space-y-40">
            {FEATURED_PROJECTS.map(proj => (
              <ProjectCard 
                key={proj.id} 
                project={proj} 
                onClick={() => {
                  if (proj.title.toUpperCase() === 'BUUDABOMB') onOpenProject('buddabomb');
                  if (proj.title === 'GOGOOD CAMPAIGNS') onOpenProject('gogood');
                  if (proj.title === 'FIT FIGHTER') onOpenProject('fitfighter');
                  if (proj.title === 'GORAL') onOpenProject('goral');
                  if (proj.title === 'CUPPINGS') onOpenProject('cuppings');
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section id="about" className="py-40 px-6 bg-mesh relative overflow-hidden">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-3xl -z-10"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-start relative z-10">
          <div className="lg:col-span-7 space-y-24">
            <Reveal>
              <div className="space-y-10">
                <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none italic">The <span className="text-[#ccff00]">Designer</span></h2>
                <div className="space-y-10 text-2xl text-gray-400 leading-relaxed font-medium">
                  <p>
                    I’m Zeshan Khalid (Zee), a <span className="text-white font-black underline decoration-[#ccff00] decoration-4 underline-offset-8">Top Rated</span> specialist with an MBA in Marketing. I solve business problems through visual architecture.
                  </p>
                  <p>
                    Specializing in high-end retention visual systems, I help premium brands maximize their revenue flows using data-backed creative logic.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="pt-10 space-y-12">
                <p className="text-xs font-black text-[#ccff00] mb-8 uppercase tracking-[0.6em] italic">Core Technical Stack</p>
                <div className="flex flex-wrap gap-5">
                  {['Figma', 'Adobe Photoshop', 'Illustrator', 'Klaviyo', 'After Effects', 'InDesign', 'Canva', 'AI Management'].map((tool, i) => (
                    <span key={tool} className="px-8 py-4 bg-white/[0.03] rounded-2xl text-white font-black border border-white/10 text-sm hover:border-[#ccff00]/50 hover:bg-[#ccff00]/5 transition-all cursor-default shadow-xl">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 pt-24 border-t border-white/5">
                <div className="space-y-4">
                  <div className="text-5xl font-black text-white">{STATS.earnings}</div>
                  <div className="text-[10px] text-gray-500 uppercase font-black tracking-[0.4em]">Portfolio Value</div>
                </div>
                <div className="space-y-4">
                  <div className="text-5xl font-black text-white">{STATS.jobs}</div>
                  <div className="text-[10px] text-gray-500 uppercase font-black tracking-[0.4em]">Deployments</div>
                </div>
                <div className="space-y-4">
                  <div className="text-5xl font-black text-white">{STATS.jss}</div>
                  <div className="text-[10px] text-gray-500 uppercase font-black tracking-[0.4em]">Integrity Score</div>
                </div>
              </div>
            </Reveal>
          </div>
          
          <div className="lg:col-span-5 sticky top-40 space-y-16">
            <Reveal delay={600}>
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-[4rem] border-2 border-dashed border-[#ccff00]/20 animate-spin-slow"></div>
                <div className="absolute inset-10 rounded-[3.5rem] overflow-hidden border-8 border-white/5 glow-accent transition-all duration-700 shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
                  <img src="https://lh3.googleusercontent.com/d/1ETQbcLs-u-OvRjGS6-2mI3CSIImtzUNw" alt="Abdul Ahad" className="w-full h-full object-cover scale-110" />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-[#ccff00] text-black p-10 rounded-3xl shadow-[0_20px_50px_rgba(204,255,0,0.3)] hover:scale-110 transition-transform rotate-6 hover:rotate-0">
                   <Award size={56} />
                </div>
              </div>
            </Reveal>

            <Reveal delay={800}>
              <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[4rem] p-12 space-y-10 shadow-2xl max-w-md mx-auto relative group">
                <div className="absolute top-8 right-8 w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-[#ccff00] group-hover:text-black transition-all">
                  <ExternalLink size={18} />
                </div>
                <h4 className="text-2xl font-black text-white uppercase tracking-tighter italic underline decoration-[#ccff00]/30 underline-offset-8">Academic Foundation</h4>
                <div className="space-y-8">
                  <div className="flex items-center gap-8 group/item">
                    <div className="w-16 h-16 bg-[#ccff00]/10 rounded-3xl flex items-center justify-center text-[#ccff00] transition-transform group-hover/item:scale-110">
                        <CheckCircle size={32} />
                    </div>
                    <div>
                        <p className="text-white font-black text-lg">Klaviyo Master Certification</p>
                        <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mt-1">E-commerce Retention</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8 group/item">
                    <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-white transition-transform group-hover/item:scale-110">
                        <Award size={32} />
                    </div>
                    <div>
                        <p className="text-white font-black text-lg">MBA in Marketing</p>
                        <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mt-1">Strategy & Consumer Behavior</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="designs" className="py-40 px-6 relative overflow-hidden bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(204,255,0,0.03)_0%,transparent_70%)] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto text-center mb-40 space-y-10">
          <Reveal>
            <h2 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none italic">Design <br /><span className="text-[#ccff00]">Showcase</span></h2>
            <p className="text-2xl text-gray-500 max-w-3xl mx-auto font-black uppercase tracking-widest opacity-60 italic pt-6">
              A curated wall of high-performance visual assets.
            </p>
          </Reveal>
        </div>
        
        <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
          {WALL_IMAGES.map((img, i) => (
            <Reveal key={i} delay={i % 4 * 100}>
              <div className="break-inside-avoid rounded-[3.5rem] overflow-hidden border border-white/5 group relative shadow-2xl bg-[#0a0a0a]">
                <img src={img.url} alt={img.name} className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-[1.5s] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-700 flex flex-col justify-end p-12">
                  <p className="text-[10px] font-black text-[#ccff00] uppercase tracking-[0.5em] mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{img.name}</p>
                  <p className="text-white text-3xl font-black uppercase tracking-tighter transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200 italic">Visual Core</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contact" className="py-40 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="bg-gradient-to-br from-[#061e12] to-black rounded-[5rem] p-16 md:p-32 text-center border border-white/10 relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] group">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] bg-[#ccff00]/10 blur-[180px] -z-0 pointer-events-none group-hover:bg-[#ccff00]/15 transition-all duration-1000"></div>
              
              <div className="relative z-10 space-y-16">
                <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none italic">Let's Ignite Your <br /><span className="text-[#ccff00]">Next Campaign</span></h2>
                <p className="text-2xl text-gray-400 max-w-4xl mx-auto font-medium leading-relaxed">
                  Ready to deploy high-conversion visuals that define your brand's future? From lifecycle flows to complex identities, I’m built for the challenge.
                </p>
                <div className="pt-12 flex flex-col lg:flex-row items-center justify-center gap-12">
                  <a 
                    href={LINKS.upwork} 
                    className="group px-16 py-8 bg-[#ccff00] text-black rounded-full font-black text-2xl flex items-center gap-6 hover:scale-105 active:scale-95 transition-all shadow-[0_20px_60px_rgba(204,255,0,0.4)]"
                  >
                    Hire Me on Upwork <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
                  </a>
                  <a 
                    href={LINKS.email} 
                    className="text-white font-black text-xl hover:text-[#ccff00] transition-colors border-b-4 border-[#ccff00]/20 hover:border-[#ccff00] pb-2 uppercase tracking-[0.2em] italic"
                  >
                    mshanali37@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="py-32 px-6 border-t border-white/5 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-t from-[#ccff00]/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-24 relative z-10">
          <div className="space-y-8 text-center md:text-left">
            <div className="text-3xl font-black text-white tracking-tighter italic">ZEE <span className="text-[#ccff00]">CREATIVES</span></div>
            <p className="text-gray-500 text-[10px] max-w-xs uppercase tracking-[0.4em] font-black leading-loose">
              Visual engineering for performance-driven brands. Strategic, elite, and effective.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-12">
            <div className="flex gap-12">
              <a href={LINKS.linkedin} className="text-gray-600 hover:text-[#ccff00] hover:scale-110 transition-all"><Linkedin size={32} /></a>
              <a href={LINKS.instagram} className="text-gray-600 hover:text-[#ccff00] hover:scale-110 transition-all"><Instagram size={32} /></a>
              <a href={LINKS.dribbble} className="text-gray-600 hover:text-[#ccff00] hover:scale-110 transition-all"><Dribbble size={32} /></a>
              <a href={LINKS.behance} className="text-gray-600 hover:text-[#ccff00] hover:scale-110 transition-all text-4xl font-black italic transform -rotate-6">Bē</a>
            </div>
            <p className="text-[10px] text-gray-800 font-black uppercase tracking-[0.5em]">© 2025 ZEE CREATIVES. PRODUCED FOR PERFORMANCE.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Main App Component holding state for navigation
const App = () => {
  const [currentView, setCurrentView] = useState<'home' | 'buddabomb' | 'gogood' | 'fitfighter' | 'goral' | 'cuppings'>('home');
  const [targetSection, setTargetSection] = useState<string | undefined>(undefined);

  const handleBack = (section?: string) => {
    setTargetSection(section || 'home');
    setCurrentView('home');
  };

  if (currentView === 'buddabomb') {
    return <ProjectDetailsView type="buddabomb" onBack={handleBack} />;
  }

  if (currentView === 'gogood') {
    return <ProjectDetailsView type="gogood" onBack={handleBack} />;
  }

  if (currentView === 'fitfighter') {
    return <ProjectDetailsView type="fitfighter" onBack={handleBack} />;
  }

  if (currentView === 'goral') {
    return <ProjectDetailsView type="goral" onBack={handleBack} />;
  }

  if (currentView === 'cuppings') {
    return <ProjectDetailsView type="cuppings" onBack={handleBack} />;
  }

  return (
    <MainPortfolio 
      onOpenProject={(type) => {
        setTargetSection(undefined);
        setCurrentView(type);
      }} 
      onHome={() => {
        setTargetSection('home');
        setCurrentView('home');
      }} 
      initialSection={targetSection}
    />
  );
};

export default App;