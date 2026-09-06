// Travel map data.
//
// TRAVEL_CATEGORIES defines the pin colors + filter-button labels. Add a new key here
// if you want a new category (e.g. "conference") — a filter button appears automatically
// for any category used by at least one pin below.
//
// TRAVEL_PINS is one entry per pin. lat/lon are real-world coordinates (decimal degrees) —
// look them up for any city (e.g. search "<city name> latitude longitude").
// To add a new trip: copy an entry, fill in the fields, and add photos to assets/img/travel/.

var TRAVEL_CATEGORIES = {
  home:     { label: "Home base",        color: "#2f6d57" },  /* primary teal */
  exchange: { label: "Exchange program", color: "#8a7f52" },  /* muted olive */
  business: { label: "Business trip",    color: "#a1573f" },  /* muted rust */
  personal: { label: "Personal travel",  color: "#5c6f8a" }   /* muted slate blue */
};

var TRAVEL_PINS = [
  {
    id: "seoul",
    name: "Seoul, South Korea",
    tag: "Home base",
    category: "home",
    lat: 37.5665,
    lon: 126.9780,
    episode: "Home base — Biological Systems Engineering Laboratory, Sejong University. Most of my story starts and ends here between experiments.",
    photos: []
  },
  {
    id: "example-exchange",
    name: "Add your exchange program",
    tag: "Example pin — edit me",
    category: "exchange",
    lat: 48.8566,
    lon: 2.3522,
    episode: "Placeholder (currently Paris) for an exchange-student trip. Edit js/travel-data.js: update name/tag/episode, set lat/lon, and add photos to assets/img/travel/.",
    photos: []
  },
  {
    id: "birdbrain-pittsburgh",
    name: "Pittsburgh, USA",
    tag: "CreArtBot · BirdBrain Technologies",
    category: "business",
    lat: 40.4406,
    lon: -79.9959,
    episode: "Visited BirdBrain Technologies for the Catalyze Learning Summer Institute — hands-on training with the team behind the Hummingbird robotics platform, and my first experience working directly with an international engineering and education community.",
    photos: ["assets/img/travel/birdbrain-2018.jpg"]
  },
  {
    id: "biochip-jeju",
    name: "Jeju, South Korea",
    tag: "2025 한국바이오칩학회 추계학술대회 · Poster",
    category: "business",
    lat: 33.4996,
    lon: 126.5312,
    episode: "Presented a poster — \"Cardiac Organoid Platform with Micropillar-Assisted Calcium and Optical Signal Analysis\" — at the 2025 Korea BioChip Society Fall Conference (2025 한국바이오칩학회 추계학술대회), November 12–14, 2025.",
    photos: []
  },
  {
    id: "example-personal",
    name: "Add your personal trip",
    tag: "Example pin — edit me",
    category: "personal",
    lat: 13.7563,
    lon: 100.5018,
    episode: "Placeholder (currently Bangkok) for a personal trip. Edit js/travel-data.js: update name/tag/episode, set lat/lon, and add photos to assets/img/travel/.",
    photos: []
  }
];
