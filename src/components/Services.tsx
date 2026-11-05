import React from 'react';
import {
  Sparkles,
  Smile,
  ShieldCheck,
  Gem,
  Layers,
  HeartPulse,
  CheckCircle2,
  Baby,
  Feather,
  ScanLine,
  ArrowRight,
  Calendar,
} from 'lucide-react';
import { DENTAL_SERVICES } from '../data/clinicData';
import { DentalService } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  // Helper to render relevant Lucide icon
  const getServiceIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#176B68]' };
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Smile':
        return <Smile {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'Gem':
        return <Gem {...props} />;
      case 'Layers':
        return <Layers {...props} />;
      case 'HeartPulse':
        return <HeartPulse {...props} />;
      case 'CheckCircle2':
        return <CheckCircle2 {...props} />;
      case 'Baby':
        return <Baby {...props} />;
      case 'Feather':
        return <Feather {...props} />;
      case 'ScanLine':
        return <ScanLine {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-white relative">
      {/* Decorative accent divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5A46D]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D]"></span>
            <span>Clinical Specialties</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#263638] tracking-tight">
            Our Dental <span className="text-[#176B68] font-serif font-normal italic">Services</span>
          </h2>

          <p className="text-base sm:text-lg text-[#263638]/75 max-w-xl mx-auto leading-relaxed">
            Comprehensive dental care to keep your smile healthy and beautiful.
          </p>
        </div>

        {/* 10 Services Grid - 1 to 3 columns responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DENTAL_SERVICES.map((service: DentalService, index: number) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service.title)}
              className="group relative bg-[#FAF9F6] hover:bg-white rounded-2xl p-6 sm:p-7 border border-[#E7F3F0] hover:border-[#C5A46D]/40 transition-all duration-300 shadow-2xs hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Top Row: Icon and Service Index */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-[#E7F3F0] border border-[#E7F3F0] flex items-center justify-center transition-colors duration-200">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-bold text-slate-400 group-hover:text-[#C5A46D] tabular-nums tracking-wider transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-[#263638] group-hover:text-[#176B68] transition-colors mb-2.5">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-[#263638]/70 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              {/* Bottom Card Action / Subtle affordance */}
              <div className="mt-6 pt-4 border-t border-[#E7F3F0] flex items-center justify-between text-xs font-semibold text-[#176B68]">
                <span className="group-hover:translate-x-0.5 transition-transform flex items-center gap-1.5">
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-[11px] text-[#C5A46D] font-medium">
                  {service.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom prompt strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#E7F3F0] border border-[#176B68]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-[#263638]">
              Need guidance on which dental treatment is right for you?
            </h4>
            <p className="text-xs sm:text-sm text-[#263638]/75">
              Dr. Sahar Ashiq conducts gentle, comprehensive oral assessments before recommending any procedure.
            </p>
          </div>
          <button
            onClick={() => onSelectService('General Checkup & Consultation')}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#176B68] hover:bg-[#125553] rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#C5A46D]" />
            <span>Book Consultation</span>
          </button>
        </div>

      </div>
    </section>
  );
};
