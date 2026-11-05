export interface DentalService {
  id: string;
  title: string;
  description: string;
  category: string;
  iconName: string;
}

export interface ClinicInfo {
  name: string;
  doctorName: string;
  subtitle: string;
  phone: string;
  phoneFormatted: string;
  rating: number;
  reviewsCount: number;
  googleMapsUrl: string;
}
