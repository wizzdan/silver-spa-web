
import { ServiceCategory, TeamMember, Testimonial, GalleryItem } from './types';

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'nails',
    title: 'Nail Couture',
    image: 'https://images.unsplash.com/photo-1632922267756-9b71242b1592?q=80&w=2070',
    description: 'Exquisite nail artistry and care using premium products.',
    items: [
      { name: 'Classic Manicure', price: 'Ksh 2,500', duration: '45 min', description: 'Shaping, cuticle care, hand massage, and polish.' },
      { name: 'Luxury Gel Pedicure', price: 'Ksh 3,500', duration: '60 min', description: 'Includes scrub, mask, hot towel, and gel finish.' },
      { name: 'Acrylic Extensions', price: 'Ksh 4,500', duration: '90 min', description: 'Full set sculpting with premium acrylics.' },
      { name: 'Bespoke Nail Art', price: 'From Ksh 500', duration: 'Var', description: 'Hand-painted designs, stones, and embellishments.' },
      { name: 'Gel Polish Removal & Care', price: 'Ksh 1,000', duration: '30 min', description: 'Safe removal and nail strengthening treatment.' },
    ]
  },
  {
    id: 'massage',
    title: 'Massage Therapy',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070',
    description: 'Rejuvenate your body and mind with our therapeutic touches.',
    items: [
      { name: 'Swedish Relaxation', price: 'Ksh 4,000', duration: '60 min', description: 'Gentle full-body massage to improve circulation.' },
      { name: 'Deep Tissue', price: 'Ksh 5,000', duration: '60 min', description: 'Intense pressure targeting deep muscle layers.' },
      { name: 'Hot Stone Therapy', price: 'Ksh 6,000', duration: '75 min', description: 'Smooth heated stones for deep relaxation.' },
      { name: 'Aromatherapy', price: 'Ksh 4,500', duration: '60 min', description: 'Uses essential oils to enhance physical and emotional well-being.' },
    ]
  },
  {
    id: 'hair',
    title: 'Hair Salon',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069',
    description: 'Transformative styling and treatments for all hair types.',
    items: [
      { name: 'Silk Press & Style', price: 'Ksh 3,500', duration: '90 min', description: 'Smooth, silky finish for natural hair.' },
      { name: 'Braiding (Knotless)', price: 'From Ksh 4,000', duration: '3 hrs+', description: 'Protective styling with neat, tension-free parting.' },
      { name: 'Hair Treatment & Steam', price: 'Ksh 2,500', duration: '60 min', description: 'Deep conditioning for moisture and repair.' },
      { name: 'Cut & Blowout', price: 'Ksh 3,000', duration: '60 min', description: 'Precision cut followed by a volumizing blow dry.' },
    ]
  },
  {
    id: 'barber',
    title: 'Gentlemen\'s Grooming',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074',
    description: 'Premium barbering services for the modern gentleman.',
    items: [
      { name: 'Signature Haircut', price: 'Ksh 1,500', duration: '45 min', description: 'Consultation, precision cut, wash, and style.' },
      { name: 'Beard Sculpting & Oil', price: 'Ksh 1,000', duration: '30 min', description: 'Trim, shape, and hot towel treatment.' },
      { name: 'The Executive Package', price: 'Ksh 3,000', duration: '75 min', description: 'Haircut, beard trim, and mini-facial.' },
      { name: 'Kids Cut', price: 'Ksh 1,000', duration: '30 min', description: 'Gentle styling for the young gentlemen.' },
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  { id: 1, name: 'Sarah Johnson', role: 'Lead Nail Technician', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000', bio: 'With over 10 years of experience, Sarah specializes in intricate nail art and nail health.' },
  { id: 2, name: 'Michael Chen', role: 'Senior Barber', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000', bio: 'Master of the fade and classic cuts, Michael brings precision to every style.' },
  { id: 3, name: 'Elena Rodriguez', role: 'Massage Therapist', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000', bio: 'Certified holistic therapist dedicated to relieving stress and tension.' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: 'Grace M.', rating: 5, text: 'The ambiance at Silver Beauty Spa is unmatched. My manicure lasted weeks and the staff treated me like royalty.', date: 'Oct 2023' },
  { id: 2, name: 'David K.', rating: 5, text: 'Best barber in town. The executive package is worth every shilling. Highly recommended.', date: 'Sep 2023' },
  { id: 3, name: 'Sheila W.', rating: 5, text: 'Truly a luxury experience. The massage therapy session relieved my back pain completely.', date: 'Nov 2023' },
];

export const GALLERY_IMAGES: GalleryItem[] = [
  { id: 1, imageUrl: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2036', category: 'Nails', title: 'Elegant Nude Gel' },
  { id: 2, imageUrl: 'https://images.unsplash.com/photo-1521590832169-cf1b5a25e664?q=80&w=1936', category: 'Massage', title: 'Relaxation Room' },
  { id: 3, imageUrl: 'https://images.unsplash.com/photo-1503951914875-bef564b3c0a5?q=80&w=2070', category: 'Hair', title: 'Bridal Styling' },
  { id: 4, imageUrl: 'https://images.unsplash.com/photo-1599351431202-6e0c0511f38a?q=80&w=2070', category: 'Barber', title: 'Classic Fade' },
  { id: 5, imageUrl: 'https://images.unsplash.com/photo-1632345031635-92a171c881f8?q=80&w=2070', category: 'Nails', title: 'Detailed Art' },
  { id: 6, imageUrl: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?q=80&w=1964', category: 'Barber', title: 'Beard Grooming' },
];
