import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { CLINIC_INFO, DENTAL_SERVICES } from '../data/clinicData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService || DENTAL_SERVICES[0].title,
    date: '',
    notes: '',
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      service: DENTAL_SERVICES[0].title,
      date: '',
      notes: '',
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      {/* Background click overlay */}
      <div className="fixed inset-0" onClick={handleResetAndClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E7F3F0] z-10 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-[#263638] hover:bg-slate-100 transition-colors focus:outline-hidden"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#E7F3F0] text-[#176B68] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-[#263638]">
              Appointment Request Sent
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              Thank you, <span className="font-semibold text-[#263638]">{formData.name}</span>. We have received your booking request for{' '}
              <span className="font-semibold text-[#176B68]">{formData.service}</span>. Our clinic staff will call you shortly at{' '}
              <span className="font-semibold text-[#263638]">{formData.phone}</span> to confirm your time slot.
            </p>

            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={handleResetAndClose}
                className="w-full py-3 text-sm font-semibold text-white bg-[#176B68] hover:bg-[#125553] rounded-xl transition-colors cursor-pointer"
              >
                Close & Return to Website
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 pr-8">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#C5A46D] uppercase tracking-wider">
                <Calendar className="w-4 h-4" />
                <span>Dr. Sahar Ashiq · Dental Clinic</span>
              </div>
              <h3 id="modal-title" className="text-2xl font-bold text-[#263638] mt-1">
                Book an Appointment
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Fill in your details below and our team will get in touch with you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#263638] mb-1">
                  Patient Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Fatima Tariq"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-[#263638] focus:border-[#176B68] focus:ring-1 focus:ring-[#176B68] outline-hidden transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#263638] mb-1">
                  Contact Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 0332XXXXXXX"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-[#263638] focus:border-[#176B68] focus:ring-1 focus:ring-[#176B68] outline-hidden transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#263638] mb-1">
                    Select Dental Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#263638] focus:border-[#176B68] focus:ring-1 focus:ring-[#176B68] outline-hidden"
                  >
                    {DENTAL_SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="General Consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#263638] mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#263638] focus:border-[#176B68] focus:ring-1 focus:ring-[#176B68] outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#263638] mb-1">
                  Notes or Symptoms (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Briefly describe your concern..."
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 text-sm text-[#263638] focus:border-[#176B68] focus:ring-1 focus:ring-[#176B68] outline-hidden resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 text-sm font-semibold text-white bg-[#176B68] hover:bg-[#125553] active:bg-[#0e4442] rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  Confirm Appointment Request
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#176B68]" />
                  <span>Confidential booking</span>
                </span>
                <span className="text-slate-400">
                  Reception contacts you directly
                </span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
