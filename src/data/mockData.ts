export interface Listing {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: 'attraction' | 'hotel' | 'restaurant' | 'experience' | 'beach' | 'temple' | 'wildlife';
  location: {
    city: string;
    district: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  images: string[];
  rating: number;
  reviewCount: number;
  price?: {
    amount: number;
    currency: string;
    unit: string;
  };
  features: string[];
  contact?: {
    phone?: string;
    email?: string;
    website?: string;
  };
  openingHours?: string;
  bestTimeToVisit?: string;
  approved: boolean;
  createdBy: string;
  createdAt: string;
  featured: boolean;
}

export const mockListings: Listing[] = [
{
  id: '1',
  title: 'Sigiriya Rock Fortress',
  description: 'Sigiriya, also known as Lion Rock, is an ancient rock fortress located in the northern Matale District near the town of Dambulla. This archaeological wonder dates back to the 5th century and is considered one of the best-preserved examples of ancient urban planning. The massive column of rock rises dramatically from the surrounding plains, reaching a height of approximately 200 meters above sea level.',
  shortDescription: 'Ancient rock fortress with stunning frescoes and panoramic views',
  category: 'attraction',
  location: {
    city: 'Sigiriya',
    district: 'Matale',
    coordinates: { lat: 7.9568, lng: 80.7608 }
  },
  images: [
  'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800',
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800'],

  rating: 4.8,
  reviewCount: 2847,
  price: { amount: 30, currency: 'USD', unit: 'person' },
  features: ['World Heritage Site', 'Ancient Frescoes', 'Panoramic Views', 'Archaeological Site'],
  contact: { phone: '+94 66 2286451' },
  openingHours: '7:00 AM - 5:30 PM',
  bestTimeToVisit: 'Early morning to avoid crowds and heat',
  approved: true,
  createdBy: 'admin',
  createdAt: '2024-01-15',
  featured: true
},
{
  id: '2',
  title: 'Galle Fort Heritage Hotel',
  description: 'Experience luxury within the historic walls of Galle Fort at this beautifully restored colonial mansion. This boutique hotel seamlessly blends Dutch colonial architecture with modern amenities, offering guests an unforgettable stay in one of Sri Lanka\'s most iconic locations.',
  shortDescription: 'Luxury boutique hotel in historic Galle Fort',
  category: 'hotel',
  location: {
    city: 'Galle',
    district: 'Galle',
    coordinates: { lat: 6.0329, lng: 80.2168 }
  },
  images: [
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
  'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800',
  'https://images.unsplash.com/photo-1578774204375-826dc5d996ed?w=800'],

  rating: 4.7,
  reviewCount: 456,
  price: { amount: 250, currency: 'USD', unit: 'night' },
  features: ['Historic Location', 'Colonial Architecture', 'Ocean Views', 'Fine Dining'],
  contact: {
    phone: '+94 91 2234521',
    email: 'info@gallefort.com',
    website: 'www.galleforthotel.com'
  },
  approved: true,
  createdBy: 'user123',
  createdAt: '2024-01-20',
  featured: true
},
{
  id: '3',
  title: 'Ella Nine Arches Bridge',
  description: 'The Nine Arches Bridge, also called the Bridge in the Sky, is a viaduct bridge in Sri Lanka. It is one of the best examples of colonial-era railway construction in the country. The bridge is 300 feet in length, 25 feet in width and 80-100 feet in height.',
  shortDescription: 'Iconic railway bridge surrounded by lush tea plantations',
  category: 'attraction',
  location: {
    city: 'Ella',
    district: 'Badulla',
    coordinates: { lat: 6.8679, lng: 81.0465 }
  },
  images: [
  'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800',
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800'],

  rating: 4.6,
  reviewCount: 1234,
  features: ['Railway Heritage', 'Scenic Views', 'Photography Spot', 'Tea Country'],
  bestTimeToVisit: 'Early morning or late afternoon for best lighting',
  approved: true,
  createdBy: 'user456',
  createdAt: '2024-01-18',
  featured: true
},
{
  id: '4',
  title: 'Mirissa Beach Paradise',
  description: 'Mirissa is a small town on the south coast of Sri Lanka, famous for its beautiful beaches, whale watching, and vibrant nightlife. The golden sandy beach is perfect for swimming, surfing, and relaxation.',
  shortDescription: 'Pristine beach perfect for whale watching and surfing',
  category: 'beach',
  location: {
    city: 'Mirissa',
    district: 'Matara',
    coordinates: { lat: 5.9467, lng: 80.4590 }
  },
  images: [
  'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
  'https://images.unsplash.com/photo-1520637836862-4d197d17c786?w=800'],

  rating: 4.5,
  reviewCount: 892,
  features: ['Whale Watching', 'Surfing', 'Beach Bars', 'Sunset Views'],
  bestTimeToVisit: 'November to April for whale watching',
  approved: true,
  createdBy: 'user789',
  createdAt: '2024-01-22',
  featured: false
},
{
  id: '5',
  title: 'Temple of the Tooth - Kandy',
  description: 'The Temple of the Sacred Tooth Relic is a Buddhist temple in Kandy, Sri Lanka. It is located in the royal palace complex of the former Kingdom of Kandy, which houses the relic of the tooth of the Buddha.',
  shortDescription: 'Sacred Buddhist temple housing the tooth relic of Buddha',
  category: 'temple',
  location: {
    city: 'Kandy',
    district: 'Kandy',
    coordinates: { lat: 7.2906, lng: 80.6337 }
  },
  images: [
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
  'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800'],

  rating: 4.7,
  reviewCount: 1567,
  features: ['World Heritage Site', 'Sacred Relic', 'Royal Palace', 'Buddhist Art'],
  openingHours: '5:30 AM - 8:00 PM',
  approved: true,
  createdBy: 'admin',
  createdAt: '2024-01-10',
  featured: true
},
{
  id: '6',
  title: 'Yala National Park Safari',
  description: 'Yala National Park is the most visited and second largest national park in Sri Lanka. The park consists of five blocks, with only two currently open to the public. It is renowned for its variety of wild animals and is especially famous for its leopard population.',
  shortDescription: 'Premier wildlife sanctuary famous for leopards and elephants',
  category: 'wildlife',
  location: {
    city: 'Tissamaharama',
    district: 'Hambantota',
    coordinates: { lat: 6.3714, lng: 81.5209 }
  },
  images: [
  'https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800',
  'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800'],

  rating: 4.6,
  reviewCount: 743,
  price: { amount: 45, currency: 'USD', unit: 'person' },
  features: ['Leopard Spotting', 'Elephant Herds', 'Bird Watching', 'Safari Experience'],
  bestTimeToVisit: 'February to July for best wildlife viewing',
  approved: true,
  createdBy: 'user321',
  createdAt: '2024-01-25',
  featured: false
}];


export const categories = [
{ id: 'attraction', name: 'Attractions', icon: '🏛️' },
{ id: 'hotel', name: 'Hotels', icon: '🏨' },
{ id: 'restaurant', name: 'Restaurants', icon: '🍽️' },
{ id: 'experience', name: 'Experiences', icon: '🎭' },
{ id: 'beach', name: 'Beaches', icon: '🏖️' },
{ id: 'temple', name: 'Temples', icon: '🛕' },
{ id: 'wildlife', name: 'Wildlife', icon: '🦁' }];


export const districts = [
'Colombo', 'Gampaha', 'Kalutara', 'Kandy', 'Matale', 'Nuwara Eliya',
'Galle', 'Matara', 'Hambantota', 'Jaffna', 'Kilinochchi', 'Mannar',
'Anuradhapura', 'Kurunegala', 'Puttalam', 'Ratnapura', 'Kegalle',
'Badulla', 'Monaragala', 'Ampara', 'Batticaloa', 'Trincomalee',
'Vavuniya', 'Mullaitivu', 'Polonnaruwa'];


// Search functionality
export const searchListings = (query: string, category?: string, location?: string): Listing[] => {
  let results = mockListings.filter((listing) => listing.approved);

  if (query) {
    const searchTerm = query.toLowerCase();
    results = results.filter((listing) =>
    listing.title.toLowerCase().includes(searchTerm) ||
    listing.description.toLowerCase().includes(searchTerm) ||
    listing.location.city.toLowerCase().includes(searchTerm) ||
    listing.location.district.toLowerCase().includes(searchTerm) ||
    listing.features.some((feature) => feature.toLowerCase().includes(searchTerm))
    );
  }

  if (category && category !== 'all') {
    results = results.filter((listing) => listing.category === category);
  }

  if (location && location !== 'all') {
    results = results.filter((listing) =>
    listing.location.district.toLowerCase().includes(location.toLowerCase()) ||
    listing.location.city.toLowerCase().includes(location.toLowerCase())
    );
  }

  return results;
};

// Natural language processing for smart search
export const processNaturalLanguageQuery = (query: string): {category?: string;location?: string;processedQuery: string;} => {
  const lowerQuery = query.toLowerCase();

  // Category detection
  let category: string | undefined;
  if (lowerQuery.includes('hotel') || lowerQuery.includes('accommodation') || lowerQuery.includes('stay')) {
    category = 'hotel';
  } else if (lowerQuery.includes('restaurant') || lowerQuery.includes('food') || lowerQuery.includes('dining')) {
    category = 'restaurant';
  } else if (lowerQuery.includes('beach') || lowerQuery.includes('seaside') || lowerQuery.includes('coast')) {
    category = 'beach';
  } else if (lowerQuery.includes('temple') || lowerQuery.includes('religious') || lowerQuery.includes('sacred')) {
    category = 'temple';
  } else if (lowerQuery.includes('wildlife') || lowerQuery.includes('safari') || lowerQuery.includes('animals')) {
    category = 'wildlife';
  } else if (lowerQuery.includes('attraction') || lowerQuery.includes('sightseeing') || lowerQuery.includes('visit')) {
    category = 'attraction';
  }

  // Location detection
  let location: string | undefined;
  for (const district of districts) {
    if (lowerQuery.includes(district.toLowerCase())) {
      location = district;
      break;
    }
  }

  // Remove category and location words from query for cleaner search
  let processedQuery = query;
  if (category) {
    processedQuery = processedQuery.replace(new RegExp(category, 'gi'), '').trim();
  }
  if (location) {
    processedQuery = processedQuery.replace(new RegExp(location, 'gi'), '').trim();
  }

  return { category, location, processedQuery };
};