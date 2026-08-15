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
  home:     { label: "Home base",        color: "#2f6d57" },
  exchange: { label: "Exchange program", color: "#cf4436" },
  business: { label: "Business trip",    color: "#bf5245" },
  personal: { label: "Personal travel",  color: "#b5643a" }
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
    id: "example-business",
    name: "Add your business trip",
    tag: "Example pin — edit me",
    category: "business",
    lat: 35.6762,
    lon: 139.6503,
    episode: "Placeholder (currently Tokyo) for a work/conference trip. Edit js/travel-data.js: update name/tag/episode, set lat/lon, and add photos to assets/img/travel/.",
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
