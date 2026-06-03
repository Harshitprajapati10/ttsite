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
    image: charDhamYatraImage,
  },
  {
    title: 'Jammu & Kashmir',
    image:
      'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Himachal Escapes',
    image:
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80',
  },
];

export const quickDestinations = [
  { name: 'Jaipur', days: '6 Days', packages: '13+ Packages' },
  { name: 'Chakrata', days: '3 Days', packages: '1+ Package' },
  { name: 'Kashmir', days: '9 Days', packages: '12+ Packages' },
  { name: 'Chopta', days: '6 Days', packages: '3+ Packages' },
  { name: 'Srinagar', days: '8 Days', packages: '14+ Packages' },
  { name: 'Haridwar', days: '2 Days', packages: '56+ Packages' },
];

export const packages = [
  {
    title: 'Kedarnath Dham Yatra from Haridwar',
    duration: '3 D / 2 N',
    places: 'Haridwar, Guptkashi, Kedarnath',
    image: kedarnathDhamImage,
    guests: '10K guests travelled',
  },
  {
    title: 'Badrinath Dham Yatra from Haridwar',
    duration: '3 D / 2 N',
    places: 'Haridwar, Joshimath, Badrinath',
    image: badrinathDhamImage,
    guests: '9K guests travelled',
  },
  {
    title: 'Nainital, Kausani and Ranikhet Tour',
    duration: '5 D / 4 N',
    places: 'Nainital, Ranikhet, Kausani',
    image:
      'https://images.unsplash.com/photo-1593181629936-11c609b8db9b?auto=format&fit=crop&w=900&q=80',
    guests: '10K guests travelled',
  },
  {
    title: 'Do Dham Charter Helicopter Day Tour',
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
  { name: 'Gulmarg', packages: '12+ Tour Packages', popularity: '2K loved it' },
  { name: 'Srinagar', packages: '14+ Tour Packages', popularity: '3K loved it' },
  { name: 'Haridwar', packages: '56+ Tour Packages', popularity: '2K loved it' },
  { name: 'Rishikesh', packages: '44+ Tour Packages', popularity: '2K loved it' },
  { name: 'Delhi', packages: '16+ Tour Packages', popularity: '7K loved it' },
  { name: 'Pahalgam', packages: '8+ Tour Packages', popularity: '1K loved it' },
  { name: 'Leh', packages: '21+ Tour Packages', popularity: '7K loved it' },
  { name: 'Munnar', packages: '8+ Tour Packages', popularity: '3K loved it' },
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
