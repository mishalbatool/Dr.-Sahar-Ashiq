import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenAppointment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs py-3 border-b border-[#E7F3F0]'
          : 'bg-[#FAF9F6]/90 backdrop-blur-xs py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Wordmark & Subtitle */}
          <a
            href="#home"
            className="group flex flex-col focus:outline-hidden"
            aria-label="Dr. Sahar Ashiq - Return to top"
          >
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#176B68] group-hover:text-[#263638] transition-colors">
              {CLINIC_INFO.doctorName}
            </span>
            <span className="text-xs font-medium tracking-wider text-[#C5A46D] uppercase flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C5A46D]"></span>
              {CLINIC_INFO.subtitle}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#263638] hover:text-[#176B68] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#176B68] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAppointment}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#176B68] hover:bg-[#125553] active:bg-[#0e4442] rounded-xl shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 text-[#C5A46D]" />
              <span>Book an Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenAppointment}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#176B68] rounded-lg"
            >
              Book
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#263638] hover:text-[#176B68] focus:outline-hidden rounded-lg hover:bg-slate-100 transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-[#E7F3F0] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#263638] hover:bg-[#E7F3F0] hover:text-[#176B68] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#176B68] rounded-xl shadow-xs"
            >
              <Calendar className="w-4 h-4 text-[#C5A46D]" />
              <span>Book an Appointment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
