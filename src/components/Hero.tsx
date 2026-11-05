import React from 'react';
import { Calendar, ChevronRight, Star, ShieldCheck, HeartPulse, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import heroImage from '../assets/images/hero_female_dentist_1793896084271.jpg';

interface HeroProps {
  onOpenAppointment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-[#FAF9F6] to-white">
      {/* Subtle decorative background glow shapes */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[300px] sm:w-[800px] sm:h-[400px] bg-gradient-to-tr from-[#E7F3F0] to-[#FAF9F6] rounded-full blur-3xl opacity-70 -z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-1/3 w-72 h-72 bg-[#C5A46D]/10 rounded-full blur-2xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Value Proposition & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Top Kicker - Unboxed Clean Metadata */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#176B68]">
              <span className="w-2 h-2 rounded-full bg-[#176B68]"></span>
              <span>Dr. Sahar Ashiq · Female Dentist</span>
              <span className="text-[#C5A46D]">·</span>
              <span className="text-[#C5A46D] font-medium">Welcoming New Patients</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#263638] leading-[1.15] text-balance">
              Your Smile Deserves <br className="hidden sm:inline" />
              <span className="text-[#176B68] italic font-serif font-normal">Expert Care</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#263638]/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Experience comfortable, personalized dental care with Dr. Sahar Ashiq. Helping you achieve a healthier, brighter, and more confident smile.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenAppointment}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-[#176B68] hover:bg-[#135a57] active:bg-[#0f4a47] rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-[#C5A46D]" />
                <span>Book an Appointment</span>
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#176B68] bg-[#E7F3F0] hover:bg-[#d8ece7] rounded-xl border border-[#176B68]/15 transition-all duration-200"
              >
                <span>Explore Our Services</span>
                <ChevronRight className="w-4 h-4 text-[#176B68]" />
              </a>
            </div>

            {/* Google Rating Social Proof Strip */}
            <div className="pt-4 border-t border-slate-200/60 max-w-lg mx-auto lg:mx-0 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm text-[#263638]/80">
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 hover:text-[#176B68] transition-colors"
              >
                <div className="flex text-[#C5A46D]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A46D] stroke-[#C5A46D]" />
                  ))}
                </div>
                <span className="font-bold text-[#263638] tabular-nums group-hover:text-[#176B68]">
                  {CLINIC_INFO.rating} / 5.0
                </span>
                <span className="text-slate-500">
                  ({CLINIC_INFO.reviewsCount} Google Reviews)
                </span>
              </a>

              <span className="hidden sm:inline text-slate-300">·</span>
              
              <span className="flex items-center gap-1.5 text-slate-600">
                <ShieldCheck className="w-4 h-4 text-[#176B68]" />
                <span>Hygienic & Patient-Centered</span>
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual with Elegant Frame & Accent Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Champagne Outline Frame */}
              <div
                className="absolute -inset-3 rounded-3xl border border-[#C5A46D]/40 -rotate-1 hidden sm:block pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Photo Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#FAF9F6] border border-[#E7F3F0]">
                <img
                  src={heroImage}
                  alt="Dr. Sahar Ashiq - Professional Female Dentist in a modern clinic"
                  className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover object-top hover:scale-[1.02] transition-transform duration-500 ease-out"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to public path if needed
                    const target = e.target as HTMLImageElement;
                    if (target.src !== '/images/hero_female_dentist_1793896084271.jpg') {
                      target.src = '/images/hero_female_dentist_1793896084271.jpg';
                    }
                  }}
                />

                {/* Subtle soft gradient overlay at bottom of photo */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#263638]/70 via-[#263638]/20 to-transparent flex items-end p-5">
                  <div className="text-white">
                    <p className="font-display text-lg font-semibold tracking-tight text-white drop-shadow-xs">
                      Dr. Sahar Ashiq
                    </p>
                    <p className="text-xs text-[#E7F3F0] font-medium tracking-wide">
                      Dedicated Female Dental Practitioner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
