import React from 'react';
import { UserCheck, HeartHandshake, Sparkles, CheckCircle } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/clinicData';
import operatoryImage from '../assets/images/clinic_interior_operatory_1793896085960.jpg';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-[#176B68]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#176B68]" />;
      case 'Sparkle':
        return <Sparkles className="w-6 h-6 text-[#176B68]" />;
      default:
        return <CheckCircle className="w-6 h-6 text-[#176B68]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5A46D]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D]"></span>
            <span>Why Choose Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#263638] tracking-tight">
            Your Smile, <span className="text-[#176B68] font-serif font-normal italic">Our Priority</span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#263638]/75 max-w-xl mx-auto">
            Providing patient-centered oral health solutions in a tranquil and supportive atmosphere.
          </p>
        </div>

        {/* 3 Simple Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-8 border border-[#E7F3F0] shadow-xs hover:shadow-md transition-shadow duration-300 space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E7F3F0] flex items-center justify-center">
                {getIcon(item.icon)}
              </div>
              <div className="text-xs font-bold text-[#C5A46D] tracking-wider uppercase">
                Highlight 0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-[#263638]">
                {item.title}
              </h3>
              <p className="text-sm text-[#263638]/75 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Clinic Atmosphere Showcase Card */}
        <div className="rounded-3xl overflow-hidden bg-white border border-[#E7F3F0] shadow-md grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 h-64 sm:h-80 lg:h-96 relative overflow-hidden bg-[#FAF9F6]">
            <img
              src={operatoryImage}
              alt="Dr. Sahar Ashiq modern dental clinic operatory and clinical facilities"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src !== '/images/clinic_interior_operatory_1793896085960.jpg') {
                  target.src = '/images/clinic_interior_operatory_1793896085960.jpg';
                }
              }}
            />
          </div>
          <div className="lg:col-span-5 p-8 sm:p-10 space-y-4">
            <span className="text-xs font-bold text-[#C5A46D] uppercase tracking-wider">
              A Welcoming Clinic Setting
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#263638]">
              Modern, Gentle & Attentive
            </h3>
            <p className="text-sm text-[#263638]/75 leading-relaxed">
              We understand dental visits can sometimes feel intimidating. Our operatory is carefully curated with soothing natural illumination, ergonomic patient seating, and strict hygiene protocols to ensure every visit is restful.
            </p>
            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#176B68]"></span>
              <span>Sanitized instruments & patient-focused consultations</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
