
import { Service, TeamMember } from './types';

export const SERVICES: Service[] = [
  {
    id: 'pool',
    title: 'Pool Cleaning',
    description: 'Keep your pool sparkling clean with our professional services. We handle vacuuming, chemical balancing, filter cleaning, and more.',
    features: ['Weekly or one-time options', 'Eco-friendly chemicals', 'Trained technicians'],
    price: 'Pricing starts at R500 per session.',
    imageUrl: 'https://cdn-ildodlm.nitrocdn.com/GoxtReMIrPbNRjTNbiBtsgsvUzuIOcSC/assets/images/optimized/rev-4c1bc8e/www.buildersingauteng.co.za/wp-content/uploads/2025/07/A-professional-pool-cleaning-service-in-Gauteng-South-Africa.-A-clean-modern-pool-house-with--1024x585.jpeg',
  },
  {
    id: 'gardening',
    title: 'Gardening',
    description: 'Transform your outdoor space with expert gardening help. Services include lawn mowing, planting, weeding, and landscape maintenance.',
    features: ['Seasonal care plans', 'Organic fertilizers', 'Custom designs'],
    price: 'Pricing starts at R300 per hour.',
    imageUrl: 'https://braza.co.za/wp-content/uploads/2023/10/Garden-Services.jpg',
  },
  {
    id: 'deep',
    title: 'Deep Cleaning',
    description: 'Go beyond surface cleaning with our thorough deep clean. Ideal for move-ins/outs, post-construction, or seasonal refreshes—covering ovens, carpets, windows, and more.',
    features: ['Full home or targeted areas', 'High-touch sanitization', 'Eco-safe products'],
    price: 'Pricing starts at R800 for a standard home.',
    imageUrl: 'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100063673144233',
  },
  {
    id: 'bin',
    title: 'Bin Cleaning',
    description: 'Eliminate odors and bacteria with our bin cleaning service. We use high-pressure washing and disinfectants for wheelie bins, recycling bins, and more.',
    features: ['Monthly subscriptions available', 'Odor-neutralizing treatments', 'Quick and mess-free'],
    price: 'Pricing starts at R100 per bin.',
    imageUrl: 'https://3.bp.blogspot.com/-iY-J1vyRXPk/WxZl98HTq3I/AAAAAAAABVQ/DMLSaD3wxMAJtaA8kzQcVSBssO8sSQXIQCLcBGAs/s1600/Morclean%2BNebula%2BWheelie%2BBin%2BCleaner%2Bdealers.jpeg',
  },
  {
    id: 'car',
    title: 'Car Wash',
    description: 'Get your vehicle looking brand new with our mobile car wash service. Includes exterior wash, interior vacuuming, waxing, and tire shining.',
    features: ['On-site convenience', 'Waterless options available', 'Detailing add-ons'],
    price: 'Pricing starts at R250 per car.',
    imageUrl: 'http://autowash.co.za/wp-content/uploads/2015/08/car-wash-lenasia-tertis-design-autowash-full-valet-02-390x260.jpg',
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
    {
        name: 'Jane Doe',
        quote: 'Reliable and thorough!',
        imageUrl: 'https://picsum.photos/seed/janedoe/400/400'
    },
    {
        name: 'John Smith',
        quote: 'Always goes the extra mile.',
        imageUrl: 'https://picsum.photos/seed/johnsmith/400/400'
    },
    {
        name: 'Emily White',
        quote: 'My garden has never looked better!',
        imageUrl: 'https://picsum.photos/seed/emilywhite/400/400'
    }
];
