/* AL-Ghous Real Estate — Property Catalog */
const PROPERTIES = [
  {
    id: "p1",
    title: "Elegant 10 Marla Corner House",
    type: "House",
    purpose: "sale",
    location: "Sabzazar Housing Scheme, Lahore",
    area: "10 Marla",
    price: 32500000,
    priceLabel: "PKR 3.25 Crore",
    beds: 5,
    baths: 4,
    yearBuilt: 2021,
    parking: 2,
    featured: true,
    cover: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1400&auto=format&fit=crop"
    ],
    description: "A beautifully maintained corner-plot house in the heart of Sabzazar, designed for families who want space, light, and a quiet street. The layout balances open living areas with private bedrooms across two floors, finished with imported tiles and modern fittings throughout.",
    amenities: ["Gated street", "Servant quarter", "Marble flooring", "Modern kitchen", "Rooftop terrace", "Solar-ready wiring", "Covered parking", "Near mosque & park"]
  },
  {
    id: "p2",
    title: "Modern 1 Kanal Luxury Villa",
    type: "House",
    purpose: "sale",
    location: "DHA Phase 6, Lahore",
    area: "1 Kanal",
    price: 145000000,
    priceLabel: "PKR 14.5 Crore",
    beds: 6,
    baths: 6,
    yearBuilt: 2022,
    parking: 4,
    featured: true,
    cover: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1400&auto=format&fit=crop"
    ],
    description: "An architect-designed villa on a premium DHA street, featuring double-height living spaces, a home theatre, and a landscaped garden built for entertaining. Every finish — from the imported marble to the smart-home wiring — is set up for a move-in-ready luxury lifestyle.",
    amenities: ["Home theatre", "Swimming pool", "Landscaped lawn", "Smart home wiring", "Study room", "Guest suite", "Generator backup", "4-car garage"]
  },
  {
    id: "p3",
    title: "5 Marla Ready-to-Move House",
    type: "House",
    purpose: "sale",
    location: "Wapda Town, Lahore",
    area: "5 Marla",
    price: 18500000,
    priceLabel: "PKR 1.85 Crore",
    beds: 3,
    baths: 3,
    yearBuilt: 2019,
    parking: 1,
    featured: true,
    cover: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1400&auto=format&fit=crop"
    ],
    description: "A compact, efficiently planned home ideal for a first-time buyer or a small family. Clean modern finishes, good cross-ventilation, and a location close to schools and Wapda Town's main market make this an easy, low-maintenance choice.",
    amenities: ["Near schools", "Tiled flooring", "Boundary wall", "Water tank", "Kitchen cabinets", "Close to market"]
  },
  {
    id: "p4",
    title: "10 Marla House — Prime Location",
    type: "House",
    purpose: "rent",
    location: "Johar Town, Lahore",
    area: "10 Marla",
    price: 180000,
    priceLabel: "PKR 1,80,000 / month",
    beds: 4,
    baths: 4,
    yearBuilt: 2020,
    parking: 2,
    featured: true,
    cover: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1400&auto=format&fit=crop"
    ],
    description: "Fully furnished house available on rent in a prime Johar Town block, walking distance from Emporium Mall and main boulevard. Suitable for a family or corporate lease, with a dedicated driver room and covered parking for two cars.",
    amenities: ["Fully furnished", "Near Emporium Mall", "Driver room", "Covered parking", "Backup generator", "24/7 security street"]
  },
  {
    id: "p5",
    title: "1 Kanal Residential Plot",
    type: "Plot",
    purpose: "sale",
    location: "Bahria Town, Lahore",
    area: "1 Kanal",
    price: 62000000,
    priceLabel: "PKR 6.2 Crore",
    beds: 0,
    baths: 0,
    yearBuilt: null,
    parking: 0,
    featured: false,
    cover: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?q=80&w=1400&auto=format&fit=crop"
    ],
    description: "A well-located residential plot in a developed Bahria Town block with possession in hand, ready for immediate construction. Wide carpeted street, functional sewerage and electricity, and close to Bahria's commercial and park zones.",
    amenities: ["Possession in hand", "Corner option", "Developed block", "Wide street", "Near park", "Clear title"]
  },
  {
    id: "p6",
    title: "Furnished Apartment — 3 Bed",
    type: "Apartment",
    purpose: "rent",
    location: "Gulberg III, Lahore",
    area: "1,800 sqft",
    price: 120000,
    priceLabel: "PKR 1,20,000 / month",
    beds: 3,
    baths: 3,
    yearBuilt: 2018,
    parking: 1,
    featured: false,
    cover: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1400&auto=format&fit=crop"
    ],
    description: "A bright, fully furnished apartment in a secure Gulberg III building, minutes from Liberty Market and MM Alam Road. Elevator access, on-site security, and a compact layout make it ideal for a small family or corporate tenant.",
    amenities: ["Elevator access", "On-site security", "Fully furnished", "Near Liberty Market", "Balcony", "Backup power"]
  },
  {
    id: "p7",
    title: "Commercial Shop — Main Boulevard",
    type: "Commercial",
    purpose: "sale",
    location: "Pine Avenue, Lahore",
    area: "5 Marla",
    price: 27500000,
    priceLabel: "PKR 2.75 Crore",
    beds: 0,
    baths: 1,
    yearBuilt: 2023,
    parking: 0,
    featured: false,
    cover: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1400&auto=format&fit=crop"
    ],
    description: "A double-height commercial shop on a high-footfall main boulevard, suitable for retail, a pharmacy, or a café. Glass frontage, ample parking on the service road, and strong surrounding commercial activity make this a solid income-generating unit.",
    amenities: ["Main boulevard frontage", "Glass shopfront", "High footfall", "Service road parking", "Ready possession"]
  },
  {
    id: "p8",
    title: "10 Marla Corner Plot",
    type: "Plot",
    purpose: "sale",
    location: "Lake City, Lahore",
    area: "10 Marla",
    price: 28000000,
    priceLabel: "PKR 2.8 Crore",
    beds: 0,
    baths: 0,
    yearBuilt: null,
    parking: 0,
    featured: false,
    cover: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1400&auto=format&fit=crop"
    ],
    description: "A corner plot in a fully developed Lake City sector, close to the club and commercial boulevard. Ideal for a buyer looking to build a family home in a well-planned, secure community with strong resale demand.",
    amenities: ["Corner plot", "Near club", "Gated community", "Developed sector", "Clear title"]
  },
  {
    id: "p9",
    title: "2 Kanal Farmhouse-Style Residence",
    type: "House",
    purpose: "sale",
    location: "Raiwind Road, Lahore",
    area: "2 Kanal",
    price: 98000000,
    priceLabel: "PKR 9.8 Crore",
    beds: 7,
    baths: 6,
    yearBuilt: 2020,
    parking: 5,
    featured: false,
    cover: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop"
    ],
    description: "A sprawling farmhouse-style residence set on a lush 2-Kanal plot along Raiwind Road, offering privacy, mature landscaping, and generous outdoor entertaining space alongside a spacious, family-sized interior layout.",
    amenities: ["Lush lawn", "Outdoor seating area", "Guest house", "Servant quarters", "5-car parking", "Borewell water supply"]
  }
];

function formatPKR(amount, purpose) {
  if (amount >= 10000000) return "PKR " + (amount / 10000000).toFixed(2).replace(/\.00$/, '') + " Crore";
  if (amount >= 100000) return "PKR " + (amount / 100000).toFixed(1).replace(/\.0$/, '') + " Lac" + (purpose === "rent" ? " / month" : "");
  return "PKR " + amount.toLocaleString() + (purpose === "rent" ? " / month" : "");
}

var ICONS = {
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  bed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18v-6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6"/><path d="M2 18v2"/><path d="M22 18v2"/><path d="M4 10V7a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3"/><path d="M13 10V8a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2"/></svg>',
  bath: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16a1 1 0 0 1 1 1v2a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-2a1 1 0 0 1 1-1z"/><path d="M6 12V6a2 2 0 0 1 3.5-1.3"/><line x1="8" y1="20" x2="8" y2="22"/><line x1="16" y1="20" x2="16" y2="22"/></svg>',
  area: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  car: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 13l2-6a2 2 0 0 1 2-1h10a2 2 0 0 1 2 1l2 6"/><path d="M3 13v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-5"/><circle cx="7.5" cy="16.5" r="1.5"/><circle cx="16.5" cy="16.5" r="1.5"/></svg>'
};

function propertyCardHTML(p) {
  var tagClass = p.purpose === "rent" ? "property-tag rent" : "property-tag";
  var tagLabel = p.purpose === "rent" ? "For Rent" : "For Sale";
  var specs = '<div class="spec">' + ICONS.area + '<span>' + p.area + '</span></div>';
  if (p.beds) specs += '<div class="spec">' + ICONS.bed + '<span>' + p.beds + ' Beds</span></div>';
  if (p.baths) specs += '<div class="spec">' + ICONS.bath + '<span>' + p.baths + ' Baths</span></div>';
  return (
    '<article class="property-card reveal">' +
      '<a href="property-detail.html?id=' + p.id + '" class="property-media">' +
        '<img src="' + p.cover + '" alt="' + p.title + '" loading="lazy">' +
        '<span class="' + tagClass + '">' + tagLabel + '</span>' +
        '<span class="property-fav" aria-hidden="true">' + ICONS.heart + '</span>' +
      '</a>' +
      '<div class="property-body">' +
        '<div class="property-price">' + p.priceLabel + '</div>' +
        '<a href="property-detail.html?id=' + p.id + '"><h3 class="property-title">' + p.title + '</h3></a>' +
        '<div class="property-loc">' + ICONS.pin + '<span>' + p.location + '</span></div>' +
        '<div class="property-specs">' + specs + '</div>' +
      '</div>' +
    '</article>'
  );
}
