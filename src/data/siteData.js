import badrinathDhamImage from '../assets/travel/badrinath-dham.png';
import charDhamYatraImage from '../assets/travel/char-dham-yatra.png';
import kedarnathDhamImage from '../assets/travel/kedarnath-dham.png';

export const siteInfo = {
  name: 'Durga Tour and Travels',
  shortName: 'Durga',
  tagline: 'Tour and Travels',
  phoneDisplay: '+91-8077702728',
  phoneHref: 'tel:+918077702728',
  location: 'Haridwar, Uttarakhand',
};

export const navGroups = [
  {
    label: 'India Tour',
    items: ['Uttarakhand', 'Himachal', 'Kashmir', 'Rajasthan', 'Kerala', 'Goa'],
  },
  {
    label: 'Hotels',
    items: ['Haridwar', 'Rishikesh', 'Guptkashi', 'Badrinath', 'Sonprayag'],
  },
  {
    label: 'Char Dham 2026',
    items: ['Char Dham', 'Do Dham', 'Kedarnath', 'Badrinath', 'Helicopter Tour'],
  },
];

export const searchDestinations = [
  'Char Dham',
  'Kedarnath',
  'Badrinath',
  'Haridwar',
  'Kashmir',
  'Manali',
];

export const startingDestinations = [
  'Haridwar',
  'Rishikesh',
  'Dehradun',
  'Delhi',
  'Noida',
  'Ghaziabad',
  'Meerut',
];

export const endingDestinations = [
  'Kedarnath',
  'Badrinath',
  'Gangotri',
  'Yamunotri',
  'Char Dham Circuit',
  'Do Dham Circuit',
  'Rishikesh',
  'Haridwar',
];

export const featuredRegions = [
  {
    title: 'Char Dham Yatra',
    slug: 'char-dham-yatra',
    image: charDhamYatraImage,
  },
  {
    title: 'Jammu & Kashmir',
    slug: 'jammu-and-kashmir',
    image:
      'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Himachal Escapes',
    slug: 'himachal-escapes',
    image:
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80',
  },
];

export const quickDestinations = [
  { name: 'Chakrata', slug: 'chakrata', days: '3 Days', packages: '1+ Package' },
  { name: 'Kashmir', slug: 'kashmir', days: '9 Days', packages: '12+ Packages' },
  { name: 'Chopta', slug: 'chopta', days: '6 Days', packages: '3+ Packages' },
  { name: 'Srinagar', slug: 'srinagar', days: '8 Days', packages: '14+ Packages' },
  { name: 'Haridwar', slug: 'haridwar', days: '2 Days', packages: '56+ Packages' },
];

export const packages = [
  {
    title: 'Kedarnath Dham Yatra from Haridwar',
    slug: 'kedarnath-dham-yatra-from-haridwar',
    duration: '3 D / 2 N',
    places: 'Haridwar, Guptkashi, Kedarnath',
    image: kedarnathDhamImage,
    guests: '10K guests travelled',
  },
  {
    title: 'Badrinath Dham Yatra from Haridwar',
    slug: 'badrinath-dham-yatra-from-haridwar',
    duration: '3 D / 2 N',
    places: 'Haridwar, Joshimath, Badrinath',
    image: badrinathDhamImage,
    guests: '9K guests travelled',
  },
  {
    title: 'Nainital, Kausani and Ranikhet Tour',
    slug: 'nainital-kausani-and-ranikhet-tour',
    duration: '5 D / 4 N',
    places: 'Nainital, Ranikhet, Kausani',
    image:
      'https://images.unsplash.com/photo-1593181629936-11c609b8db9b?auto=format&fit=crop&w=900&q=80',
    guests: '10K guests travelled',
  },
  {
    title: 'Do Dham Charter Helicopter Day Tour',
    slug: 'do-dham-charter-helicopter-day-tour',
    duration: '1 D / 0 N',
    places: 'Kedarnath, Badrinath',
    image:
      'https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=900&q=80',
    guests: 'Premium departure',
  },
];

export const destinationFilters = [
  'All',
  'Domestic',
  'Do Dham',
  'Pilgrimage',
  'Honeymoon',
  'Short Break',
];

export const destinations = [
  { name: 'Gulmarg', slug: 'gulmarg', packages: '12+ Tour Packages', popularity: '2K loved it' },
  { name: 'Srinagar', slug: 'srinagar', packages: '14+ Tour Packages', popularity: '3K loved it' },
  { name: 'Haridwar', slug: 'haridwar', packages: '56+ Tour Packages', popularity: '2K loved it' },
  { name: 'Rishikesh', slug: 'rishikesh', packages: '44+ Tour Packages', popularity: '2K loved it' },
  { name: 'Delhi', slug: 'delhi', packages: '16+ Tour Packages', popularity: '7K loved it' },
  { name: 'Pahalgam', slug: 'pahalgam', packages: '8+ Tour Packages', popularity: '1K loved it' },
  { name: 'Leh', slug: 'leh', packages: '21+ Tour Packages', popularity: '7K loved it' },
  { name: 'Munnar', slug: 'munnar', packages: '8+ Tour Packages', popularity: '3K loved it' },
];

export const categories = [
  'Family',
  'Honeymoon',
  'Senior',
  'Women',
  'Adventure',
  'Pilgrimage',
  'Road Trip',
  'Short Trip',
  'Trek & Hikes',
  'Jungle Safari',
  'Helicopter Tour',
];

const sampleItinerary = [
  {
    day: 'Day 1',
    title: 'Arrival and local sightseeing',
    description:
      'Meet the driver at the pickup point, check in to the hotel and visit the main nearby temples or viewpoints in the evening.',
  },
  {
    day: 'Day 2',
    title: 'Main yatra route and destination visit',
    description:
      'Start early after breakfast, travel through the planned route and keep enough time for darshan, sightseeing or market walks.',
  },
  {
    day: 'Day 3',
    title: 'Return journey',
    description:
      'After breakfast, begin the return journey with comfort breaks and optional stops based on road and weather conditions.',
  },
];

const sampleTourInformation = [
  'Private cab support from pickup to drop point',
  'Hotel stay on twin or triple sharing basis',
  'Breakfast and dinner at the hotel',
  'Local sightseeing as per available time',
  'Toll, parking and driver allowance included',
  'Personal expenses, pony, palki, VIP darshan and tickets extra',
];

function createDetail(slug, title, summary, image, meta = {}) {
  return {
    slug,
    title,
    image,
    duration: meta.duration || '3 D / 2 N',
    places: meta.places || title,
    about:
      summary ||
      `${title} is a sample travel detail page. Replace this paragraph with final package copy, pricing notes and exact route inclusions when content is ready.`,
    itinerary: meta.itinerary || sampleItinerary,
    tourInformation: meta.tourInformation || sampleTourInformation,
  };
}

export const detailPages = [
  createDetail(
    'char-dham-yatra',
    'Char Dham Yatra',
    'Sample details for the complete Char Dham route covering Yamunotri, Gangotri, Kedarnath and Badrinath with comfortable road travel from Haridwar.',
    charDhamYatraImage,
    { duration: '10 D / 9 N', places: 'Haridwar, Yamunotri, Gangotri, Kedarnath, Badrinath' },
  ),
  createDetail(
    'jammu-and-kashmir',
    'Jammu & Kashmir',
    'Sample Kashmir holiday details with Srinagar, Gulmarg, Pahalgam and optional local sightseeing based on season and road conditions.',
    'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80',
    { duration: '6 D / 5 N', places: 'Srinagar, Gulmarg, Pahalgam' },
  ),
  createDetail(
    'kashmir',
    'Kashmir',
    'Sample Kashmir holiday details with Srinagar, Gulmarg, Pahalgam and optional local sightseeing based on season and road conditions.',
    'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80',
    { duration: '6 D / 5 N', places: 'Srinagar, Gulmarg, Pahalgam' },
  ),
  createDetail(
    'himachal-escapes',
    'Himachal Escapes',
    'Sample Himachal package details for mountain stays, sightseeing, temples, markets and private cab movement between hill stations.',
    'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    { duration: '5 D / 4 N', places: 'Shimla, Manali, Kullu' },
  ),
  createDetail(
    'chakrata',
    'Chakrata',
    'Sample Chakrata escape with forest roads, quiet viewpoints, Tiger Falls and a relaxed short-break itinerary from Dehradun or Haridwar.',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
    { duration: '3 D / 2 N', places: 'Dehradun, Chakrata, Tiger Falls' },
  ),
  createDetail(
    'haridwar',
    'Haridwar',
    'Sample Haridwar detail page for Ganga Aarti, temples, local transfers, nearby Rishikesh visits and Char Dham pickup support.',
    'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1200&q=80',
    { duration: '2 D / 1 N', places: 'Haridwar, Har Ki Pauri, Mansa Devi' },
  ),
  createDetail(
    'kedarnath-dham-yatra-from-haridwar',
    'Kedarnath Dham Yatra from Haridwar',
    'Sample Kedarnath yatra details from Haridwar with Guptkashi stay, Sonprayag transfer guidance and darshan planning.',
    kedarnathDhamImage,
    { duration: '3 D / 2 N', places: 'Haridwar, Guptkashi, Kedarnath' },
  ),
  createDetail(
    'badrinath-dham-yatra-from-haridwar',
    'Badrinath Dham Yatra from Haridwar',
    'Sample Badrinath yatra details from Haridwar via Joshimath with temple visit, Mana village option and return transfer.',
    badrinathDhamImage,
    { duration: '3 D / 2 N', places: 'Haridwar, Joshimath, Badrinath' },
  ),
  createDetail(
    'nainital-kausani-and-ranikhet-tour',
    'Nainital, Kausani and Ranikhet Tour',
    'Sample Kumaon hill tour details with lakes, Himalayan viewpoints, temples and private cab transfers.',
    'https://images.unsplash.com/photo-1593181629936-11c609b8db9b?auto=format&fit=crop&w=1200&q=80',
    { duration: '5 D / 4 N', places: 'Nainital, Ranikhet, Kausani' },
  ),
  createDetail(
    'do-dham-charter-helicopter-day-tour',
    'Do Dham Charter Helicopter Day Tour',
    'Sample Do Dham helicopter package details for Kedarnath and Badrinath darshan with premium same-day travel support.',
    'https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=1200&q=80',
    { duration: '1 D / 0 N', places: 'Kedarnath, Badrinath' },
  ),
  ...quickDestinations
    .filter((destination) => !['chakrata', 'kashmir', 'haridwar'].includes(destination.slug))
    .map((destination) =>
      createDetail(
        destination.slug,
        destination.name,
        `Sample details for ${destination.name}. Add final route plan, price and inclusions here when the package is ready.`,
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
        { duration: destination.days, places: destination.name },
      ),
    ),
  ...destinations
    .filter((destination) => !['haridwar', 'srinagar', 'gulmarg'].includes(destination.slug))
    .map((destination) =>
      createDetail(
        destination.slug,
        destination.name,
        `Sample details for ${destination.name}. Add final destination overview, itinerary and tour information here.`,
        'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80',
        { places: destination.name },
      ),
    ),
  createDetail(
    'gulmarg',
    'Gulmarg',
    'Sample Gulmarg details for snow activities, gondola planning and Kashmir transfers.',
    'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80',
    { duration: '3 D / 2 N', places: 'Srinagar, Gulmarg' },
  ),
];

export const detailPageMap = Object.fromEntries(detailPages.map((page) => [page.slug, page]));
