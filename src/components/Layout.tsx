import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { SHORT_NAME, CONTACT } from '../data/content';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-graphite/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="VANTAGE Engineering Group - Home">
            <div className="w-8 h-8 relative">
              <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                <path d="M4 6L16 28L28 6" stroke="#B7D5E5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 6L16 22L24 6" stroke="#F3F2ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
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
            className="lg:hidden text-ivory p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden bg-graphite border-t border-white/10 pb-6">
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 text-sm font-medium rounded transition-colors ${
                    location.pathname.startsWith(link.to)
                      ? 'text-steel bg-white/5'
                      : 'text-ivory/80 hover:text-ivory hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mx-4 mt-4 bg-steel text-graphite px-5 py-3 text-sm font-semibold rounded text-center hover:bg-steel-dark transition-colors"
              >
                Discuss a Project
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-graphite text-ivory/70 border-t border-white/5">
      {/* Fictional disclaimer */}
      <div className="bg-steel/10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-xs text-ivory/50 text-center">
            <strong>Demo Notice:</strong> VANTAGE Engineering Group is a fictional company. All project details, team members, and outcomes are illustrative only.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
                <path d="M4 6L16 28L28 6" stroke="#B7D5E5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-heading font-bold text-ivory text-lg">VANTAGE</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Integrated engineering, industrial systems and infrastructure solutions designed for lasting performance.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Phone size={14} className="text-steel" />
              <span>{CONTACT.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm mt-2">
              <Mail size={14} className="text-steel" />
              <span>{CONTACT.email}</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-ivory text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/civil-structural-engineering" className="text-sm hover:text-steel transition-colors">Civil & Structural</Link></li>
              <li><Link to="/services/mep-engineering" className="text-sm hover:text-steel transition-colors">MEP Engineering</Link></li>
              <li><Link to="/services/industrial-engineering" className="text-sm hover:text-steel transition-colors">Industrial Engineering</Link></li>
              <li><Link to="/services/infrastructure-water-systems" className="text-sm hover:text-steel transition-colors">Infrastructure & Water</Link></li>
              <li><Link to="/services/energy-sustainability" className="text-sm hover:text-steel transition-colors">Energy & Sustainability</Link></li>
              <li><Link to="/services/project-management" className="text-sm hover:text-steel transition-colors">Project Management</Link></li>
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
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
