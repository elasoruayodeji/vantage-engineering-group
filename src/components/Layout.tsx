import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { SHORT_NAME, CONTACT } from '../data/content';
import { BackToTop } from './ScrollProgress';
import ScrollToTop from './ScrollToTop';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    // Set initial state
    setScrolled(window.scrollY > 50);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
    { to: '/insights', label: 'Insights' },
    { to: '/careers', label: 'Careers' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-graphite/95 backdrop-blur-md shadow-lg' : 'bg-graphite'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="VANTAGE Engineering Group - Home">
            <div className="w-8 h-8 relative">
              <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                <path d="M4 6L16 28L28 6" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 6L16 22L24 6" stroke="#F8F6F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-ivory font-heading font-bold text-lg tracking-tight leading-none">{SHORT_NAME.split(' ')[0]}</span>
              <span className="text-structural-light text-[9px] tracking-[0.2em] uppercase leading-none mt-0.5">Engineering Group</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  location.pathname.startsWith(link.to)
                    ? 'text-steel'
                    : 'text-ivory/80 hover:text-ivory'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-steel text-graphite px-5 py-2.5 text-sm font-semibold rounded hover:bg-steel-dark transition-colors"
            >
              Discuss a Project
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <div className="relative w-6 h-5">
              <span 
                className={`absolute left-0 h-0.5 w-6 bg-ivory transition-all duration-300 ease-in-out ${
                  isOpen ? 'top-2 rotate-45' : 'top-0'
                }`} 
              />
              <span 
                className={`absolute left-0 top-2 h-0.5 w-6 bg-ivory transition-all duration-300 ease-in-out ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`} 
              />
              <span 
                className={`absolute left-0 h-0.5 w-6 bg-ivory transition-all duration-300 ease-in-out ${
                  isOpen ? 'top-2 -rotate-45' : 'top-4'
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Nav - Full Screen Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed inset-0 top-16 lg:top-20 bg-graphite z-40 lg:hidden overflow-y-auto"
            >
              <div className="max-w-7xl mx-auto px-6 py-12">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={`block py-4 text-2xl font-heading font-semibold border-b border-white/10 transition-colors ${
                        location.pathname.startsWith(link.to)
                          ? 'text-steel'
                          : 'text-ivory hover:text-steel'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="pt-8">
                    <Link
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className="block bg-steel text-graphite px-8 py-4 text-base font-semibold rounded-sm text-center hover:bg-steel-dark transition-colors"
                    >
                      Discuss a Project
                    </Link>
                  </div>
                  
                  {/* Contact Info */}
                  <div className="mt-12 pt-8 border-t border-white/10">
                    <a 
                      href="https://wa.me/2348142485613" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-ivory/70 hover:text-steel transition-colors mb-4"
                    >
                      <Phone size={16} />
                      <span className="text-sm">{CONTACT.phone}</span>
                    </a>
                    <a 
                      href="mailto:elasoruayodeji@gmail.com"
                      className="flex items-center gap-3 text-ivory/70 hover:text-steel transition-colors"
                    >
                      <Mail size={16} />
                      <span className="text-sm">{CONTACT.email}</span>
                    </a>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-graphite text-ivory/70 border-t border-white/5">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
                <path d="M4 6L16 28L28 6" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-heading font-bold text-ivory text-lg">VANTAGE</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Integrated engineering, industrial systems and infrastructure solutions designed for lasting performance.
            </p>
            <a 
              href="https://wa.me/2348075690088" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-steel transition-colors"
            >
              <Phone size={14} className="text-steel flex-shrink-0" />
              <span>{CONTACT.phone}</span>
            </a>
            <a 
              href="mailto:elasoruayodeji@gmail.com"
              className="flex items-center gap-2 text-sm mt-2 hover:text-steel transition-colors"
            >
              <Mail size={14} className="text-steel flex-shrink-0" />
              <span>{CONTACT.email}</span>
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-ivory text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {['Civil & Structural', 'MEP Engineering', 'Industrial Engineering', 'Infrastructure & Water', 'Energy & Sustainability', 'Project Management'].map((label, i) => {
                const slugs = ['civil-structural-engineering', 'mep-engineering', 'industrial-engineering', 'infrastructure-water-systems', 'energy-sustainability', 'project-management'];
                return (
                  <li key={label}>
                    <Link 
                      to={`/services/${slugs[i]}`} 
                      className="text-sm hover:text-steel transition-colors inline-flex items-center gap-1 group"
                    >
                      <span className="w-0 h-px bg-steel group-hover:w-2 transition-all duration-300" />
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-heading font-semibold text-ivory text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm hover:text-steel transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-sm hover:text-steel transition-colors">Projects</Link></li>
              <li><Link to="/our-process" className="text-sm hover:text-steel transition-colors">Our Process</Link></li>
              <li><Link to="/insights" className="text-sm hover:text-steel transition-colors">Insights</Link></li>
              <li><Link to="/careers" className="text-sm hover:text-steel transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-steel transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-semibold text-ivory text-sm uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm hover:text-steel transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm hover:text-steel transition-colors">Terms of Use</Link></li>
            </ul>
            <div className="mt-6">
              <h4 className="text-xs text-ivory/50 uppercase tracking-wider mb-2">Office Hours</h4>
              <p className="text-sm">{CONTACT.hours}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ivory/40">
            © {new Date().getFullYear()} {SHORT_NAME}. All rights reserved. Fictional company for demonstration purposes.
          </p>
          <p className="text-xs text-ivory/40">
            vantageengineering.example
          </p>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
