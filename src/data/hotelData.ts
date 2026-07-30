import { Room, Apartment, DiningVenue, SpaTreatment, EventVenue, Testimonial, FAQItem } from '../types';

export const HOTEL_INFO = {
  name: 'Black Haven Hotel & Suites',
  tagline: 'Experience Luxury Beyond Expectations',
  subtext: 'A sanctuary of timeless opulence, bespoke butler service, Michelin-starred gastronomy, and holistic wellness nestled in the heart of the prestige metropolis.',
  address: '777 Obsidian Drive, Mayfair, London W1J 8AQ',
  phone: '+44 (0) 20 7946 0990',
  email: 'concierge@blackhavenhotel.com',
  reservationsEmail: 'reservations@blackhavenhotel.com',
  checkInTime: '3:00 PM',
  checkOutTime: '12:00 PM',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.336423984381!2d-0.14725068423009712!3d51.50735097963503!2m3!1f0!0!f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876052f5d94e243%3A0xb369528d223838!2sMayfair%2C%20London!5e0!3m2!1sen!2suk!4v1690000000000!5m2!1sen!2suk',
};

export const HOTEL_AMENITIES_LIST = [
  { id: 'wifi', name: 'Ultra-Fast High-Speed Wi-Fi', icon: 'Wifi', desc: 'Encrypted 1Gbps dedicated fiber connection across all suites and grounds.' },
  { id: 'tv', name: '8K OLED Smart TV & Surround Sound', icon: 'Tv', desc: '65" to 85" curved displays with complimentary streaming services and Bang & Olufsen sound.' },
  { id: 'ac', name: 'Precision Climate Control', icon: 'Wind', desc: 'Individual room temperature & HEPA medical-grade air purification system.' },
  { id: 'pool', name: 'Heated Infinity Rooftop Pool', icon: 'Waves', desc: 'Temperature-regulated 30m rooftop pool overlooking panoramic skyline views.' },
  { id: 'gym', name: '24/7 Technogym Fitness Club', icon: 'Dumbbell', desc: 'State-of-the-art bio-tracking machinery, resident personal trainers, and private yoga studio.' },
  { id: 'spa', name: 'Aura Thermal Spa & Hydrotherapy', icon: 'Sparkles', desc: 'Finnish saunas, aroma steam rooms, snow room, and custom caviar facials.' },
  { id: 'restaurant', name: '3 Michelin-Star Fine Dining', icon: 'Utensils', desc: 'World-renowned Chef Julian Vance delivering seasonal tasting menus and rare wine pairings.' },
  { id: 'bar', name: 'The Gold Vault Cocktail Lounge', icon: 'Wine', desc: 'Bespoke mixology, rare single-malt whiskeys, and private sommelier lockers.' },
  { id: 'parking', name: 'Subterranean Valet Parking', icon: 'Car', desc: 'Secure heated underground parking with EV superchargers and 24-hour security.' },
  { id: 'shuttle', name: 'Private Airport Chauffeur', icon: 'Plane', desc: 'Complimentary luxury fleet (Rolls-Royce Phantom & Maybach) airport transfers for suite guests.' },
  { id: 'roomservice', name: '24/7 In-Suite Dining & Butler', icon: 'Clock', desc: 'Personal butler available at the touch of a button and gourmet room service.' },
  { id: 'laundry', name: 'Express Dry Cleaning & Garment Care', icon: 'Shirt', desc: 'Same-day eco-friendly laundry, shoe shine, and tailored garment pressing.' }
];

export const ROOMS_DATA: Room[] = [
  {
    id: 'obsidian-penthouse',
    name: 'The Obsidian Grand Penthouse',
    type: 'penthouse',
    pricePerNight: 2850,
    capacity: { adults: 4, children: 2 },
    sqft: 3200,
    bed: 'King Size Handcrafted Silk Bed',
    view: 'Panoramic City Skyline & Park View',
    description: 'The pinnacle of luxury with a private rooftop wrap-around terrace, heated infinity plunge pool, personal 24-hour butler, and private elevator.',
    longDescription: 'Perched on the top floor of Black Haven Hotel, the Obsidian Grand Penthouse is an architectural masterpiece. Spanning over 3,200 square feet, this residence features floor-to-ceiling glass windows, rare Italian Nero Marquina marble, a grand piano, private dining room for ten, and a dedicated butler team available around the clock.',
    amenities: ['Private Rooftop Plunge Pool', '24/7 Personal Butler', 'Rolls-Royce Chauffeur Included', 'Private Elevator Access', 'Steinway Grand Piano', 'Sub-Zero Wine Cellar', 'B&O Surround Audio'],
    rating: 5.0,
    reviewsCount: 48,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=85'
    ],
    isFeatured: true
  },
  {
    id: 'presidential-suite',
    name: 'The Royal Sovereign Suite',
    type: 'presidential',
    pricePerNight: 1950,
    capacity: { adults: 3, children: 2 },
    sqft: 2100,
    bed: 'Emperor Sized Down Mattress',
    view: 'Private Garden & Fountain View',
    description: 'An opulent suite featuring handcrafted velvet furnishings, gold leaf accents, a fireplace parlour, and an oversized marble spa bathroom.',
    longDescription: 'Designed for royalty and world leaders, the Royal Sovereign Suite combines traditional European grandeur with state-of-the-art modern comforts. Features a lavish living salon with a marble fireplace, private study, walk-in dressing room, and double soaking tub.',
    amenities: ['Fireplace Parlour', 'Hermès Paris Amenities', 'Private Study & Meeting Desk', 'Walk-in Dressing Suite', 'Bespoke Pillow Menu', 'Daily Champagne Breakfast'],
    rating: 4.9,
    reviewsCount: 62,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1600&q=85'
    ],
    isFeatured: true
  },
  {
    id: 'black-haven-executive-suite',
    name: 'Black Haven Executive Suite',
    type: 'executive',
    pricePerNight: 1100,
    capacity: { adults: 2, children: 1 },
    sqft: 1250,
    bed: 'King Bed with Egyptian Cotton Sheets',
    view: 'Mayfair High Avenue View',
    description: 'Sleek dark oak panelling, gold trim finishings, expansive lounge area, and acoustic floor-to-ceiling soundproof glass.',
    longDescription: 'Tailored for discerning business executives and luxury travelers. This suite includes an expansive working sanctuary, state-of-the-art media setup, oversized rain shower, and complimentary access to the private Executive Club Lounge.',
    amenities: ['Executive Club Lounge Access', 'Nespresso Atelier Station', 'Oversized Rain Shower', 'Automated Mood Lighting', 'Dyson Supersonic Care', 'Cocktail Bar Console'],
    rating: 4.9,
    reviewsCount: 89,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=85'
    ],
    isFeatured: true
  },
  {
    id: 'diplomatic-sky-suite',
    name: 'Diplomatic Sky Suite',
    type: 'suite',
    pricePerNight: 850,
    capacity: { adults: 2, children: 1 },
    sqft: 950,
    bed: 'Super King Featherbed',
    view: 'High-floor Skyline View',
    description: 'Elevated urban sanctuary with custom Italian leather loungers, deep marble soaking tub, and sunset balconies.',
    longDescription: 'Situated on floors 18 through 24, the Diplomatic Sky Suite offers breathtaking sunset views over the skyline. Decorated in deep charcoal and gold tones with brushed metallic accents.',
    amenities: ['Sunset Balcony', 'Deep Marble Soaking Tub', 'Bespoke Minibar', 'Custom Scent Diffuser', '24/7 Room Service', 'Turn-Down Gift Service'],
    rating: 4.8,
    reviewsCount: 114,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85'
    ],
    isFeatured: true
  },
  {
    id: 'haven-deluxe-king',
    name: 'Haven Deluxe King Room',
    type: 'deluxe',
    pricePerNight: 550,
    capacity: { adults: 2, children: 0 },
    sqft: 650,
    bed: 'King Pillow-Top Mattress',
    view: 'Courtyard & Fountain View',
    description: 'Refined intimate comfort featuring velvet wall panels, ambient intelligent lighting, and an elegant marble vanity.',
    longDescription: 'The Haven Deluxe King Room offers an oasis of calm. Ideal for weekend getaways or solitary business trips requiring privacy and supreme comfort.',
    amenities: ['Velvet Lounger', 'Smart Room Control Tablet', 'High-Speed Wi-Fi', 'Marble Bath & Vanity', 'Etro Milan Bathrobe'],
    rating: 4.8,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=85'
    ]
  },
  {
    id: 'signature-gold-suite',
    name: 'Signature Gold Corner Suite',
    type: 'suite',
    pricePerNight: 980,
    capacity: { adults: 2, children: 1 },
    sqft: 1100,
    bed: 'King Size Custom Hypnos Mattress',
    view: 'Dual Aspect Skyline & Gardens',
    description: 'Dual-aspect corner positioning with floor-to-ceiling glass, custom brass fixtures, and a private wine chilling bar.',
    longDescription: 'Bathed in natural daylight and ambient gold illumination by night, this corner suite showcases spectacular dual views of the city skyline and verdant gardens.',
    amenities: ['Dual Aspect Glass Windows', 'Private Wine Chilling Bar', 'Freestanding Stone Tub', 'Subwoofer Audio System', 'Concierge VIP Priority'],
    rating: 4.9,
    reviewsCount: 76,
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1600&q=85'
    ]
  }
];

export const APARTMENTS_DATA: Apartment[] = [
  {
    id: 'residence-three-bedroom',
    name: 'The Crown Imperial Residence',
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 3800,
    pricePerNight: 3500,
    description: 'Extensive 3-bedroom luxury apartment residence designed for extended stay diplomat visits, featuring a professional Gaggenau kitchen and private elevator.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    features: ['Private Direct Elevator', 'Fully Equipped Gaggenau Chef Kitchen', '24/7 Dedicated Butler Service', 'Private Terrace with Gas Firepit', 'In-Residence Laundry & Dry Room', 'Unlimited Chauffeur Service']
  },
  {
    id: 'residence-two-bedroom',
    name: 'The Mayfair Garden Duplex',
    bedrooms: 2,
    bathrooms: 2.5,
    sqft: 2200,
    pricePerNight: 2100,
    description: 'Two-story private residence overlooking the hotel botanical gardens, complete with a private library lounge and dining area for eight.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    features: ['Two-Story Duplex Layout', 'Private Courtyard Access', 'Miele Kitchen Appliances', 'Private Wine Tasting Cabinet', 'Dedicated Housekeeping Team', 'Daily Flower Arrangements']
  },
  {
    id: 'residence-one-bedroom',
    name: 'The Obsidian Executive Apartment',
    bedrooms: 1,
    bathrooms: 1.5,
    sqft: 1400,
    pricePerNight: 1250,
    description: 'Sophisticated one-bedroom residence crafted with acoustic privacy, custom Italian cabinetry, and spacious living space for long-term luxury stays.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    features: ['Spacious Living & Dining Salon', 'Gourmet Kitchenette', 'Acoustic Soundproofing', 'Custom Walk-In Closet', 'Spa Steam Shower', 'Bi-Weekly Private Chef Option']
  }
];

export const DINING_VENUES: DiningVenue[] = [
  {
    id: 'letoile-noir',
    name: 'L\'Étoile Noir',
    tagline: '3 Michelin Star French Fine Dining',
    cuisine: 'Modern Haute Cuisine',
    dressCode: 'Formal / Black Tie Optional',
    timing: 'Dinner: 6:00 PM - 11:00 PM (Tue-Sun)',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=85',
    description: 'Helmed by Executive Chef Julian Vance, L\'Étoile Noir presents a multi-sensory 9-course tasting menu paired with rare vintages from our 5,000-bottle subterranean vault.',
    menuHighlights: [
      { name: 'Osetra Caviar & Gold Leaf Tartelette', description: 'Imperial Osetra caviar, crème fraîche, 24k gold leaf crust', price: '$120', category: 'Starters' },
      { name: 'A5 Miyazaki Wagyu Tenderloin', description: 'Truffled potato mousseline, fermented black garlic jus', price: '$195', category: 'Mains' },
      { name: 'Brittany Blue Lobster Bisque', description: 'Cognac reduction, braised fennel, tarragon emulsion', price: '$85', category: 'Starters' },
      { name: 'Valrhona Grand Cru Chocolate Sphere', description: 'Smoked hazelnut praline, warm gold caramel drizzle', price: '$45', category: 'Desserts' },
      { name: 'The Obsidian Old Fashioned', description: '25yr Macallan, truffle bitters, gold-dusted ice sphere', price: '$65', category: 'Cocktails' }
    ]
  },
  {
    id: 'gold-vault-bar',
    name: 'The Gold Vault Bar & Lounge',
    tagline: 'Craft Cocktails & Rare Whiskeys',
    cuisine: 'Mixology & Gourmet Tapas',
    dressCode: 'Smart Casual / Elegant',
    timing: '4:00 PM - 2:00 AM Daily',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=85',
    description: 'Set inside a refurbished 1920s steel vault, this moody sanctuary features custom velvet booths, live jazz performances, and hand-crafted botanical cocktails.',
    menuHighlights: [
      { name: 'Black Haven Botanical Elixir', description: 'Empress Gin, elderflower, champagne float, gold leaf', price: '$32', category: 'Cocktails' },
      { name: 'Smoked Toro & Truffle Crostini', description: 'Fatty bluefin tuna, shaved black Périgord truffle', price: '$55', category: 'Starters' }
    ]
  },
  {
    id: 'aura-rooftop',
    name: 'Aura Skyline Rooftop Lounge',
    tagline: 'Panoramic Views & Mediterranean Small Plates',
    cuisine: 'Coastal Mediterranean & Seafood',
    dressCode: 'Resort Chic / Smart Casual',
    timing: '12:00 PM - 1:00 AM Daily',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=85',
    description: 'Suspended high above the city with firepits, infinity pool views, and live resident DJs spinning deep ambient house as twilight falls.',
    menuHighlights: [
      { name: 'Wild Mediterranean Sea Bass Carpaccio', description: 'Citrus reduction, pink pepper, olive oil snow', price: '$48', category: 'Mains' },
      { name: 'Dom Pérignon Vintage Flute', description: 'Served ice cold with fresh berries', price: '$75', category: 'Cocktails' }
    ]
  },
  {
    id: 'veranda-tea-salon',
    name: 'Veranda High Tea Salon',
    tagline: 'Traditional Afternoon Tea with a Modern Touch',
    cuisine: 'Artisanal Teas & Fine Pastries',
    dressCode: 'Smart Casual',
    timing: '1:00 PM - 6:00 PM Daily',
    image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1600&q=85',
    description: 'An ethereal conservatory glasshouse serving rare single-estate teas, freshly baked scones with clotted cream, and delicate finger sandwiches.',
    menuHighlights: [
      { name: 'Grand Imperial Tea Ceremony', description: 'Selection of 30 teas, tiers of savory & sweet delights', price: '$95/person', category: 'Starters' }
    ]
  }
];

export const SPA_TREATMENTS: SpaTreatment[] = [
  {
    id: 'black-diamond-massage',
    title: 'Black Diamond & Gold Radiance Massage',
    category: 'Massage',
    duration: '90 Mins',
    price: 380,
    description: 'A signature ritual utilizing heated diamond-infused oil and 24k gold foil to relieve deep muscle tension and leave skin luminously glowing.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'caviar-oxygen-facial',
    title: 'La Prairie Caviar Lifting Facial',
    category: 'Facial',
    duration: '75 Mins',
    price: 420,
    description: 'Pure Swiss caviar extracts paired with hyperbaric oxygen therapy to firm, hydrate, and visibly restore skin youthfulness.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'thermal-hydrotherapy-circuit',
    title: 'Private Hydrotherapy & Sauna Experience',
    category: 'Hydrotherapy',
    duration: '120 Mins',
    price: 290,
    description: 'Exclusive access to our private thermal suite including Himalayan salt sauna, herbal steam room, icy plunge pool, and hydro-jet jacuzzi.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'detox-volcanic-wrap',
    title: 'Volcanic Basalt Body Detox Wrap',
    category: 'Body Wrap',
    duration: '60 Mins',
    price: 260,
    description: 'Warm obsidian volcanic mud rich in minerals formulated to stimulate lymphatic drainage and deeply detoxify skin tissue.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1600&q=85'
  }
];

export const EVENT_VENUES: EventVenue[] = [
  {
    id: 'grand-ballroom',
    name: 'The Grand Obsidian Ballroom',
    capacity: 450,
    areaSqFt: 8500,
    suitableFor: ['Weddings', 'Gala Dinners', 'Award Ceremonies', 'Product Launches'],
    description: 'Featuring 20-foot ceilings hung with Baccarat crystal chandeliers, custom LED wall panels, and state-of-the-art acoustic soundproofing.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'mayfair-boardroom',
    name: 'The Mayfair Executive Forum',
    capacity: 35,
    areaSqFt: 1800,
    suitableFor: ['Corporate Board Meetings', 'Diplomatic Summits', 'Private Dining'],
    description: 'An executive sanctuary equipped with secure video conferencing matrix, ergonomic leather seating, and dedicated butler catering service.',
    image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1600&q=85'
  },
  {
    id: 'sky-terrace-garden',
    name: 'Aura Sky Garden Terrace',
    capacity: 180,
    areaSqFt: 3500,
    suitableFor: ['Cocktail Receptions', 'Wedding Ceremonies', 'Fashion Shows'],
    description: 'An open-air glass enclosed rooftop venue surrounded by lush botanical installations and sweeping views of the illuminated skyline.',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=85'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    guestName: 'Lord Harrison Vance',
    title: 'International Executive',
    location: 'London & Geneva',
    quote: 'Black Haven is quite simply in a league of its own. The personal butler team anticipated every desire before we even voiced it. The Obsidian Penthouse view is unforgettable.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    roomStayed: 'Obsidian Grand Penthouse'
  },
  {
    id: 'test-2',
    guestName: 'Elena Rostova',
    title: 'Fashion Director',
    location: 'Milan, Italy',
    quote: 'From the private Rolls-Royce airport transfer to the Michelin dining at L\'Étoile Noir, every second felt like a dream. Unrivaled sophistication and detail.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    roomStayed: 'Royal Sovereign Suite'
  },
  {
    id: 'test-3',
    guestName: 'Dr. Arthur Sterling',
    title: 'Surgeon & Philanthropist',
    location: 'New York, USA',
    quote: 'The Aura Spa facility is divine. I have stayed at 5-star properties across Tokyo, Paris, and Dubai, but Black Haven sets a new worldwide benchmark.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    roomStayed: 'Diplomatic Sky Suite'
  }
];

export const STATS_DATA = [
  { label: 'Luxury Suites & Residences', value: '150+', icon: 'Building' },
  { label: 'Michelin Star Gastronomy', value: '3 Stars', icon: 'Award' },
  { label: 'Guest Satisfaction Rating', value: '99.8%', icon: 'Star' },
  { label: '24/7 Dedicated Butler Care', value: '100%', icon: 'Clock' }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Booking',
    question: 'What are the check-in and check-out times?',
    answer: 'Standard check-in begins at 3:00 PM and check-out is until 12:00 PM (Noon). Early check-in and late check-out options are available upon request for suite guests or subject to availability.'
  },
  {
    id: 'faq-2',
    category: 'Amenities',
    question: 'Are airport transfers complimentary?',
    answer: 'Complimentary chauffeured Rolls-Royce Phantom or Mercedes-Maybach airport transfers are included for guests staying in our Penthouse, Sovereign Suite, and Long-Stay Apartments. Chauffeur service can also be arranged for all guests.'
  },
  {
    id: 'faq-3',
    category: 'Dining',
    question: 'How far in advance should I reserve a table at L\'Étoile Noir?',
    answer: 'Due to high demand for Executive Chef Julian Vance\'s 3-Michelin-star tasting menu, we recommend booking tables 2 to 4 weeks in advance. Hotel guests enjoy priority reservation access through our VIP Concierge.'
  },
  {
    id: 'faq-4',
    category: 'Policies',
    question: 'What is the cancellation policy?',
    answer: 'Reservations can be modified or cancelled without penalty up to 48 hours prior to arrival for standard suites. Penthouse and multi-bedroom apartment bookings require 7 days notice.'
  },
  {
    id: 'faq-5',
    category: 'Amenities',
    question: 'Is the rooftop pool open year-round?',
    answer: 'Yes! Our infinity rooftop pool is heated to a comfortable 30°C (86°F) year-round and features climate-sheltered luxury cabanas and fireplace seating.'
  }
];

export const GALLERY_IMAGES = [
  { id: 'g1', title: 'Grand Obsidian Exterior', category: 'Grounds', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85' },
  { id: 'g2', title: 'The Obsidian Grand Penthouse', category: 'Rooms', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85' },
  { id: 'g3', title: 'L\'Étoile Noir Dining Salon', category: 'Dining', image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85' },
  { id: 'g4', title: 'Heated Infinity Rooftop Pool', category: 'Grounds', image: 'https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=1200&q=85' },
  { id: 'g5', title: 'Aura Thermal Spa Sanctuary', category: 'Spa', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85' },
  { id: 'g6', title: 'Grand Ballroom Gala Setup', category: 'Events', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85' },
  { id: 'g7', title: 'Royal Sovereign Master Bedroom', category: 'Rooms', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85' },
  { id: 'g8', title: 'The Gold Vault Cocktail Bar', category: 'Dining', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=85' },
  { id: 'g9', title: 'Technogym Fitness Sanctuary', category: 'Spa', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85' }
];
