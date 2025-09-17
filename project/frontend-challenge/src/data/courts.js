// Curated selection of 12 premium tennis courts
export const courts = [
  {
    id: 1,
    name: "BYOB Miami Beach Courts",
    location: "Miami Beach, FL",
    surface: "Hard Court",
    rating: 4.9,
    reviewCount: 127,
    price: "$35/hour",
    lighting: "Yes",
    images: [
      "https://picsum.photos/seed/miami1/800/600",
      "https://picsum.photos/seed/miami2/800/600",
      "https://picsum.photos/seed/miami3/800/600"
    ],
    description: "Premium courts in the heart of Miami Beach with ocean views and professional coaching."
  },
  {
    id: 2,
    name: "Sunset Tennis Club",
    location: "Los Angeles, CA",
    surface: "Clay Court",
    rating: 4.8,
    reviewCount: 89,
    price: "$30/hour",
    lighting: "Yes",
    images: [
      "https://picsum.photos/seed/la1/800/600",
      "https://picsum.photos/seed/la2/800/600",
      "https://picsum.photos/seed/la3/800/600"
    ],
    description: "Beautiful clay courts with stunning sunset views and professional coaching available."
  },
  {
    id: 3,
    name: "Central Park Tennis Center",
    location: "New York, NY",
    surface: "Hard Court",
    rating: 4.7,
    reviewCount: 156,
    price: "$40/hour",
    lighting: "Yes",
    images: [
      "https://picsum.photos/seed/nyc1/800/600",
      "https://picsum.photos/seed/nyc2/800/600",
      "https://picsum.photos/seed/nyc3/800/600"
    ],
    description: "Iconic courts in Central Park with professional-grade facilities and city views."
  },
  {
    id: 4,
    name: "Mountain View Tennis Academy",
    location: "Denver, CO",
    surface: "Hard Court",
    rating: 4.6,
    reviewCount: 203,
    price: "$28/hour",
    lighting: "Yes",
    images: [
      "https://picsum.photos/seed/denver1/800/600",
      "https://picsum.photos/seed/denver2/800/600",
      "https://picsum.photos/seed/denver3/800/600"
    ],
    description: "High-altitude training facility with breathtaking mountain views."
  },
  {
    id: 5,
    name: "Beachside Tennis Resort",
    location: "San Diego, CA",
    surface: "Clay Court",
    rating: 4.9,
    reviewCount: 312,
    price: "$45/hour",
    lighting: "Yes",
    images: [
      "https://picsum.photos/seed/sandiego1/800/600",
      "https://picsum.photos/seed/sandiego2/800/600",
      "https://picsum.photos/seed/sandiego3/800/600"
    ],
    description: "Luxury resort courts just steps from the beach with world-class amenities."
  },
  {
    id: 6,
    name: "Urban Tennis Hub",
    location: "Seattle, WA",
    surface: "Hard Court",
    rating: 4.5,
    reviewCount: 98,
    price: "$32/hour",
    lighting: "Yes",
    images: [
      "https://picsum.photos/seed/seattle1/800/600",
      "https://picsum.photos/seed/seattle2/800/600",
      "https://picsum.photos/seed/seattle3/800/600"
    ],
    description: "Modern indoor/outdoor facility in the heart of the city."
  },
  {
    id: 7,
    name: "Country Club Tennis Courts",
    location: "Atlanta, GA",
    surface: "Grass Court",
    rating: 4.8,
    reviewCount: 145,
    price: "$50/hour",
    lighting: "No",
    images: [
      "https://picsum.photos/seed/atlanta1/800/600",
      "https://picsum.photos/seed/atlanta2/800/600",
      "https://picsum.photos/seed/atlanta3/800/600"
    ],
    description: "Exclusive grass courts with traditional tennis atmosphere."
  },
  {
    id: 8,
    name: "Desert Oasis Tennis Club",
    location: "Phoenix, AZ",
    surface: "Hard Court",
    rating: 4.4,
    reviewCount: 167,
    price: "$26/hour",
    lighting: "Yes",
    images: [
      "https://picsum.photos/seed/phoenix1/800/600",
      "https://picsum.photos/seed/phoenix2/800/600",
      "https://picsum.photos/seed/phoenix3/800/600"
    ],
    description: "Desert oasis with multiple courts and excellent year-round weather."
  },
  {
    id: 9,
    name: "Lakefront Tennis Center",
    location: "Chicago, IL",
    surface: "Hard Court",
    rating: 4.3,
    reviewCount: 134,
    price: "$24/hour",
    lighting: "Yes",
    images: [
      "https://picsum.photos/seed/chicago1/800/600",
      "https://picsum.photos/seed/chicago2/800/600",
      "https://picsum.photos/seed/chicago3/800/600"
    ],
    description: "Beautiful lakefront location with well-maintained courts."
  },
  {
    id: 10,
    name: "Golden Gate Tennis Courts",
    location: "San Francisco, CA",
    surface: "Hard Court",
    rating: 4.6,
    reviewCount: 189,
    price: "$38/hour",
    lighting: "Yes",
    images: [
      "https://picsum.photos/seed/sf1/800/600",
      "https://picsum.photos/seed/sf2/800/600",
      "https://picsum.photos/seed/sf3/800/600"
    ],
    description: "Iconic courts with views of the Golden Gate Bridge."
  },
  {
    id: 11,
    name: "Hillside Tennis Club",
    location: "Portland, OR",
    surface: "Clay Court",
    rating: 4.7,
    reviewCount: 112,
    price: "$29/hour",
    lighting: "No",
    images: [
      "https://picsum.photos/seed/portland1/800/600",
      "https://picsum.photos/seed/portland2/800/600",
      "https://picsum.photos/seed/portland3/800/600"
    ],
    description: "Nestled in the hills with panoramic city views."
  },
  {
    id: 12,
    name: "Metro Tennis Complex",
    location: "Dallas, TX",
    surface: "Hard Court",
    rating: 4.2,
    reviewCount: 178,
    price: "$23/hour",
    lighting: "Yes",
    images: [
      "https://picsum.photos/seed/dallas1/800/600",
      "https://picsum.photos/seed/dallas2/800/600",
      "https://picsum.photos/seed/dallas3/800/600"
    ],
    description: "Large complex with multiple courts and professional instruction."
  }
];

// Mock reviews data
export const reviews = {
  1: [
    {
      id: 1,
      author: "Sarah M.",
      rating: 5,
      date: "2024-01-15",
      text: "Absolutely fantastic courts! Well-maintained and the staff is incredibly helpful. The location in Central Park makes it even more special."
    },
    {
      id: 2,
      author: "Mike R.",
      rating: 4,
      date: "2024-01-10",
      text: "Great facility with professional-grade courts. Can get busy during peak hours but overall excellent experience."
    },
    {
      id: 3,
      author: "Jennifer L.",
      rating: 5,
      date: "2024-01-08",
      text: "Love playing here! The courts are always in perfect condition and the atmosphere is amazing."
    }
  ],
  2: [
    {
      id: 4,
      author: "David K.",
      rating: 5,
      date: "2024-01-12",
      text: "The clay courts are pristine and the sunset views are breathtaking. Highly recommend for serious players."
    },
    {
      id: 5,
      author: "Lisa P.",
      rating: 4,
      date: "2024-01-09",
      text: "Beautiful facility with excellent coaching staff. The clay surface is perfect for my playing style."
    }
  ],
  3: [
    {
      id: 6,
      author: "Tom W.",
      rating: 4,
      date: "2024-01-14",
      text: "Nice riverside location with good courts. Could use better lighting for evening play."
    },
    {
      id: 7,
      author: "Amy S.",
      rating: 4,
      date: "2024-01-11",
      text: "Solid courts with reasonable pricing. The river views are a nice bonus during breaks."
    }
  ]
};