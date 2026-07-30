export interface Room {
  id: string;
  name: string;
  type: 'executive' | 'presidential' | 'penthouse' | 'suite' | 'deluxe';
  pricePerNight: number;
  capacity: {
    adults: number;
    children: number;
  };
  sqft: number;
  bed: string;
  view: string;
  description: string;
  longDescription: string;
  amenities: string[];
  rating: number;
  reviewsCount: number;
  image: string;
  gallery: string[];
  isFeatured?: boolean;
}

export interface Apartment {
  id: string;
  name: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  pricePerNight: number;
  description: string;
  image: string;
  features: string[];
}

export interface DiningVenue {
  id: string;
  name: string;
  tagline: string;
  cuisine: string;
  dressCode: string;
  timing: string;
  image: string;
  description: string;
  menuHighlights: {
    name: string;
    description: string;
    price: string;
    category: 'Starters' | 'Mains' | 'Desserts' | 'Cocktails';
  }[];
}

export interface SpaTreatment {
  id: string;
  title: string;
  category: 'Massage' | 'Facial' | 'Body Wrap' | 'Hydrotherapy';
  duration: string;
  price: number;
  description: string;
  image: string;
}

export interface EventVenue {
  id: string;
  name: string;
  capacity: number;
  areaSqFt: number;
  suitableFor: string[];
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  guestName: string;
  title: string;
  location: string;
  quote: string;
  avatar: string;
  rating: number;
  roomStayed: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Booking' | 'Amenities' | 'Dining' | 'Policies';
}

export interface BookingDetails {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomTypeId: string;
  addons: string[];
  guestName?: string;
  guestEmail?: string;
  guestPhone?: string;
  specialRequests?: string;
}
