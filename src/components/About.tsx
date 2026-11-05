import React from 'react';
import { Sparkles, HeartHandshake, Smile, Check, Shield } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import aboutImage from '../assets/images/about_dentist_care_1793896085271.jpg';

interface AboutProps {
  onOpenAppointment: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenAppointment }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF9F6] relative overflow-hidden">
      {/* Background gentle aura */}
      <div
        className="absolute bottom-0 right-10 w-96 h-96 bg-[#E7F3F0]/60 rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backing decorative frame */}
              <div
                className="absolute inset-0 bg-[#E7F3F0] rounded-3xl translate-x-3 translate-y-3 -z-10"
                aria-hidden="true"
              />

              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E7F3F0] bg-white">
                <img
                  src={aboutImage}
                  alt="Dr. Sahar Ashiq interacting with a dental patient in a comfortable clinical environment"
                  className="w-full h-[380px] sm:h-[440px] object-cover hover:scale-[1.01] transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== '/images/about_dentist_care_1793896085271.jpg') {
                      target.src = '/images/about_dentist_care_1793896085271.jpg';
                    }
                  }}
                />

                {/* Subdued footer quote banner */}
                <div className="p-4 bg-white border-t border-[#E7F3F0]">
                  <p className="text-xs text-slate-600 font-medium italic">
                    "Every smile is unique, and every patient deserves gentle, attentive care."
                  </p>
                  <p className="text-[11px] font-semibold text-[#176B68] mt-1">
                    — {CLINIC_INFO.name}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5A46D]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D]"></span>
              <span>About The Practice</span>
            </div>

            {/* Section Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#263638] tracking-tight">
              Meet <span className="text-[#176B68] font-serif font-normal italic">Dr. Sahar Ashiq</span>
            </h2>

            {/* Exactly Specified Clinic Introduction Text */}
            <div className="text-base sm:text-lg text-[#263638]/85 leading-relaxed font-normal bg-white/70 p-6 rounded-2xl border border-[#E7F3F0] shadow-2xs">
              <p>
                Dr. Sahar Ashiq is dedicated to providing professional dental care in a comfortable and welcoming environment. Our focus is on maintaining healthy smiles through personalized dental treatments and patient-centered care.
              </p>
            </div>

            {/* Core Values / Atmosphere Pillars (without inventing degrees or claims) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E7F3F0] space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-[#E7F3F0] text-[#176B68] flex items-center justify-center">
                  <Smile className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-[#263638]">Welcoming Environment</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A serene clinical setting designed to make every dental visit relaxing and supportive.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E7F3F0] space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-[#E7F3F0] text-[#176B68] flex items-center justify-center">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-[#263638]">Personalized Focus</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Careful consultation tailored to your individual dental priorities and comfort.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenAppointment}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#176B68] hover:bg-[#125553] rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer"
              >
                Schedule a Consultation
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-[#263638] bg-transparent hover:bg-white rounded-xl border border-slate-300 transition-colors"
              >
                Clinic Location & Contact
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
