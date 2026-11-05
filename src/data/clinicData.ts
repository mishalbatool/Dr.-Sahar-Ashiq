import { ClinicInfo, DentalService } from '../types';

export const CLINIC_INFO: ClinicInfo = {
  name: 'Dr. Sahar Ashiq – Female Dentist',
  doctorName: 'Dr. Sahar Ashiq',
  subtitle: 'Female Dentist',
  phone: '03326688811',
  phoneFormatted: '0332 6688811',
  rating: 4.6,
  reviewsCount: 184,
  googleMapsUrl:
    'https://maps.google.com/maps?vet=10CAAQoqAOahcKEwj415ixtfGXAxUAAAAAHQAAAAAQBQ..i&sca_esv=6b0e606c2b1206da&udm&fvr=1&pvq=Cg0vZy8xMXE4Z2tnM2wyIg0KB2RlbnRpc3QQAhgDiQHAX2z6jScQog&lqi=ChJmYWlzYWxhYmFkIGRlbnRpc3RIwpzc6KG2gIAIWhoQARgAGAEiEmZhaXNhbGFiYWQgZGVudGlzdJIBDWRlbnRhbF9jbGluaWOaASRDaGREU1VoTk1HOW5TMFZRTFdwMk9TMDFjall6WkhablJSQUL6AQQIABBK&cs=0&um=1&ie=UTF-8&fb=1&gl=pk&sa=X&ftid=0x3922693320f02407:0xa210278dfa6c5fc0',
};

// ONLY the 10 services requested:
export const DENTAL_SERVICES: DentalService[] = [
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    description:
      'Professional clinical whitening treatments formulated to remove discoloration and enhance your natural enamel luster safely and gently.',
    category: 'Cosmetic Dentistry',
    iconName: 'Sparkles',
  },
  {
    id: 'braces',
    title: 'Braces',
    description:
      'Modern orthodontic care and alignment solutions to correct dental irregularities, improve bite harmony, and guide teeth into proper position.',
    category: 'Orthodontics',
    iconName: 'Smile',
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    description:
      'Biocompatible titanium root replacements that permanently restore missing teeth with exceptional stability, strength, and authentic aesthetics.',
    category: 'Restorative Care',
    iconName: 'ShieldCheck',
  },
  {
    id: 'crown-and-bridge',
    title: 'Crown & Bridge',
    description:
      'Precision-milled ceramic crowns and bridges designed to reinforce damaged teeth and seamlessly span gaps with lifelike translucency.',
    category: 'Restorative Care',
    iconName: 'Gem',
  },
  {
    id: 'full-mouth-dentures',
    title: 'Full Mouth Dentures',
    description:
      'Custom-engineered full and partial prosthetics contoured for maximum suction, natural comfort, effortless chewing, and clear speech.',
    category: 'Prosthodontics',
    iconName: 'Layers',
  },
  {
    id: 'root-canal-treatment',
    title: 'Root Canal Treatment (RCT)',
    description:
      'Gentle, modern endodontic therapy to alleviate deep toothache, clear bacterial infection, and save your natural tooth structure.',
    category: 'Endodontics',
    iconName: 'HeartPulse',
  },
  {
    id: 'dental-fillings',
    title: 'Dental Fillings',
    description:
      'Tooth-colored composite resin fillings that repair cavities and minor fractures while preserving maximum healthy enamel.',
    category: 'General Dentistry',
    iconName: 'CheckCircle2',
  },
  {
    id: 'pediatric-dental-treatment',
    title: 'Pediatric Dental Treatment',
    description:
      'Friendly, reassuring dental checkups and treatments specially designed for infants, children, and teens in a calm, welcoming setting.',
    category: 'Pediatric Care',
    iconName: 'Baby',
  },
  {
    id: 'scaling-and-polishing',
    title: 'Scaling & Polishing',
    description:
      'Comprehensive ultrasonic dental hygiene cleaning to eliminate stubborn calculus, surface stains, and plaque for refreshed gum wellness.',
    category: 'Preventive Care',
    iconName: 'Feather',
  },
  {
    id: 'dental-x-rays',
    title: 'Dental X-rays – OPG, CEPH & Periapical',
    description:
      'Low-radiation digital radiography providing panoramic OPG, cephalometric, and periapical views for accurate clinical diagnostic planning.',
    category: 'Diagnostics',
    iconName: 'ScanLine',
  },
];

export const WHY_CHOOSE_US = [
  {
    id: 'personalized-care',
    title: 'Personalized Dental Care',
    description:
      'Every patient receives individualized treatment plans tailored specifically to their personal comfort, schedule, and oral health priorities.',
    icon: 'UserCheck',
  },
  {
    id: 'comfortable-experience',
    title: 'Comfortable Patient Experience',
    description:
      'A calm, hygienic, and welcoming environment created to ensure a stress-free and supportive visit for individuals and families alike.',
    icon: 'HeartHandshake',
  },
  {
    id: 'comprehensive-services',
    title: 'Comprehensive Dental Services',
    description:
      'From preventive checkups and restorative treatments to cosmetic smile care and modern radiography—all under one roof.',
    icon: 'Sparkle',
  },
];
