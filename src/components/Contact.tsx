import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Star,
  ExternalLink,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';
import { CLINIC_INFO, DENTAL_SERVICES } from '../data/clinicData';

interface ContactProps {
  onOpenAppointment: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenAppointment }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: DENTAL_SERVICES[0].title,
    date: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5A46D]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D]"></span>
            <span>Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#263638] tracking-tight">
            Visit Our <span className="text-[#176B68] font-serif font-normal italic">Dental Clinic</span>
          </h2>

          <p className="text-base sm:text-lg text-[#263638]/75 max-w-xl mx-auto leading-relaxed">
            We are here to assist with your oral health needs and answer any questions regarding treatment options.
          </p>
        </div>

        {/* 2-Column Responsive Layout: Contact Details & Directions VS Appointment Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Clinic Contact Details & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Details Card */}
            <div className="bg-[#FAF9F6] rounded-3xl p-7 sm:p-8 border border-[#E7F3F0] shadow-xs space-y-6">
              
              {/* Clinic Branding */}
              <div className="border-b border-[#E7F3F0] pb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A46D]">
                  Dental Practice
                </span>
                <h3 className="text-2xl font-bold text-[#263638] mt-1">
                  {CLINIC_INFO.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Professional & Personalized Dental Care
                </p>
              </div>

              {/* Clinic Direct Inquiries & Consultations */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E7F3F0] flex items-center justify-center text-[#176B68] shrink-0 shadow-2xs">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Consultations & Booking
                  </span>
                  <p className="text-base font-bold text-[#263638] mt-0.5">
                    By Appointment Request
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Submit the form to request a consultation; our reception will reach out directly.
                  </p>
                </div>
              </div>

              {/* Google Reviews & Rating Card */}
              <div className="p-4 rounded-2xl bg-white border border-[#E7F3F0] flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-1.5 text-[#C5A46D]">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#C5A46D] stroke-[#C5A46D]" />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-[#263638] tabular-nums">
                      {CLINIC_INFO.rating}/5
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    Based on <span className="font-semibold text-[#263638]">{CLINIC_INFO.reviewsCount} Google Reviews</span>
                  </p>
                </div>

                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#176B68] bg-[#E7F3F0] hover:bg-[#d5ebe5] rounded-lg transition-colors"
                >
                  <span>View</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Google Maps / Directions Action Button */}
              <div className="pt-2">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#176B68] hover:bg-[#125553] active:bg-[#0f4442] rounded-xl shadow-xs hover:shadow-md transition-all duration-200"
                >
                  <MapPin className="w-4 h-4 text-[#C5A46D]" />
                  <span>Google Maps & Directions</span>
                  <ExternalLink className="w-4 h-4 opacity-75" />
                </a>
              </div>

              {/* Consultation Hours */}
              <div className="pt-4 border-t border-[#E7F3F0] flex items-center gap-3 text-xs text-slate-600">
                <Clock className="w-4 h-4 text-[#176B68] shrink-0" />
                <div>
                  <span className="font-semibold text-[#263638]">Clinical Consultations: </span>
                  <span>Monday – Saturday (Appointments recommended)</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Appointment Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF9F6] rounded-3xl p-7 sm:p-10 border border-[#E7F3F0] shadow-xs">
              
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs font-bold text-[#176B68] uppercase tracking-wider">
                  <Calendar className="w-4 h-4 text-[#C5A46D]" />
                  <span>Online Appointment Request</span>
                </div>
                <h3 className="text-2xl font-bold text-[#263638] mt-1">
                  Schedule Your Visit
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Leave your details and our clinic reception will reach out to confirm your slot.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-white border border-[#E7F3F0] text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 rounded-full bg-[#E7F3F0] text-[#176B68] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#263638]">
                    Appointment Request Received
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-[#263638]">{formData.name}</span>. Our clinic staff will contact you at <span className="font-semibold text-[#176B68]">{formData.phone}</span> to confirm your appointment for <span className="font-semibold">{formData.service}</span>.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          service: DENTAL_SERVICES[0].title,
                          date: '',
                          notes: '',
                        });
                      }}
                      className="px-6 py-2.5 text-xs font-semibold text-white bg-[#176B68] hover:bg-[#125553] rounded-xl transition-colors cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Full Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#263638] mb-1.5">
                        Patient Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ayesha Khan"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#263638] focus:border-[#176B68] focus:ring-1 focus:ring-[#176B68] outline-hidden transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#263638] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 0332XXXXXXX"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#263638] focus:border-[#176B68] focus:ring-1 focus:ring-[#176B68] outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  {/* Dental Service & Preferred Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#263638] mb-1.5">
                        Desired Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#263638] focus:border-[#176B68] focus:ring-1 focus:ring-[#176B68] outline-hidden transition-all"
                      >
                        {DENTAL_SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="General Checkup & Consultation">General Checkup & Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#263638] mb-1.5">
                        Preferred Date (Optional)
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#263638] focus:border-[#176B68] focus:ring-1 focus:ring-[#176B68] outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-xs font-semibold text-[#263638] mb-1.5">
                      Symptoms / Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Let us know if you have toothache, sensitivity, or specific treatment questions..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#263638] focus:border-[#176B68] focus:ring-1 focus:ring-[#176B68] outline-hidden transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#176B68] hover:bg-[#125553] active:bg-[#0e4442] rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-[#C5A46D]" />
                      <span>Submit Appointment Request</span>
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2 flex items-center justify-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#176B68]" />
                      <span>Your phone and inquiry are kept confidential.</span>
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
