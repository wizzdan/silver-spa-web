
export type PageView = 'home' | 'about' | 'services' | 'gallery' | 'booking' | 'contact';

export interface ServiceItem {
  name: string;
  price: string;
  duration: string;
  description?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  image: string;
  description: string;
  items: ServiceItem[];
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface GalleryItem {
  id: number;
  imageUrl: string;
  category: string;
  title: string;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  description: string;
}
