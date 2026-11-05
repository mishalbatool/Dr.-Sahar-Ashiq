/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';

export default function App() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenAppointment = (service?: string) => {
    setSelectedService(service);
    setIsAppointmentModalOpen(true);
  };

  const handleCloseAppointment = () => {
    setIsAppointmentModalOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#263638] flex flex-col font-sans selection:bg-[#E7F3F0] selection:text-[#176B68]">
      {/* Sticky Navigation */}
      <Navbar onOpenAppointment={() => handleOpenAppointment()} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* A. Hero Section */}
        <Hero onOpenAppointment={() => handleOpenAppointment()} />

        {/* B. About Section */}
        <About onOpenAppointment={() => handleOpenAppointment()} />

        {/* C. Dental Services Section (10 services) */}
        <Services onSelectService={(serviceTitle) => handleOpenAppointment(serviceTitle)} />

        {/* D. Why Choose Us Section (3 highlights) */}
        <WhyChooseUs />

        {/* E. Contact Section */}
        <Contact onOpenAppointment={() => handleOpenAppointment()} />
      </main>

      {/* F. Footer */}
      <Footer onOpenAppointment={() => handleOpenAppointment()} />

      {/* Interactive Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={handleCloseAppointment}
        initialService={selectedService}
      />
    </div>
  );
}
