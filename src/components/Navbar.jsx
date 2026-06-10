import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
    >
      <div className="max-w-[1400px] mx-auto backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-between px-10 py-5 shadow-2xl">
        {/* Branding - Sharp & Pinned Left */}
        <div className="flex items-center gap-3 flex-shrink-0 cursor-pointer" onClick={(e) => scrollToSection(e, '#home')}>
          <span className="text-2xl" role="img" aria-label="chicken">🐓</span>
          <span className="font-black text-white tracking-tighter text-xl uppercase">BAGBAN Farm</span>
        </div>
        
        {/* Navigation - Neatly Spaced & Right Aligned */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-xs uppercase tracking-[0.25em] text-white font-bold hover:text-emerald-300 transition-colors duration-300 min-h-[48px] flex items-center"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle (Visual Placeholder for Layout Consistency) */}
        <div className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
