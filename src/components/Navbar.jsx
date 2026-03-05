import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // Defaulting to your premium dark theme

  // Handle dark mode toggle
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Metrics', href: '#metrics' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-[0_0_15px_rgba(34,211,238,0.5)]">
              S
            </span>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
              Mohd.Sahil
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Theme Toggle Button (Desktop) */}
            <button 
              onClick={toggleTheme} 
              className="p-2.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:scale-110 transition-all duration-300"
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <Sun size={20} className="text-cyan-400" />
              ) : (
                <Moon size={20} className="text-slate-700" />
              )}
            </button>
            
            <a href="#contact" className="px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10"
            >
              {isDark ? <Sun size={18} className="text-cyan-400" /> : <Moon size={18} className="text-slate-700" />}
            </button>
            
            <button onClick={toggleMenu} className="text-slate-900 dark:text-white p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 py-4' : 'max-h-0 py-0 border-transparent'}`}>
        <div className="px-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-cyan-500 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 mt-4 text-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;