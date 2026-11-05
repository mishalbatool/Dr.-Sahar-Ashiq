import React from 'react';
import { Phone, MapPin, Heart, ArrowUp } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FooterProps {
  onOpenAppointment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointment }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#263638] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-700/60">
          
          {/* Clinic Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                {CLINIC_INFO.doctorName}
              </span>
              <span className="text-xs font-semibold tracking-widest text-[#C5A46D] uppercase">
                {CLINIC_INFO.subtitle}
              </span>
            </div>
            
            <p className="text-sm text-slate-300/80 max-w-sm leading-relaxed">
              Dedicated to delivering comfortable, personalized dental care in a welcoming and supportive clinical setting.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A46D]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Dr. Sahar Ashiq
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Our Dental Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A46D]">
              Clinic Contact
            </h4>
            <div className="space-y-2.5 text-sm text-slate-300">
              <p className="flex items-center gap-2.5 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#176B68]"></span>
                <span>Consultations by appointment request</span>
              </p>

              <p className="flex items-start gap-2.5 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                <span>Visit clinic via Google Maps directions</span>
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenAppointment}
                  className="px-4 py-2 text-xs font-semibold text-[#263638] bg-[#C5A46D] hover:bg-[#d6b783] rounded-lg transition-colors cursor-pointer"
                >
                  Book an Appointment
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} {CLINIC_INFO.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors p-1"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
