
import React from 'react';
import { FacebookIcon, InstagramIcon, TikTokIcon } from './icons/SocialIcons';
import { PageView } from '../types';

interface FooterProps {
  onNavigate?: (view: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black text-white border-t border-brand-gold/20 pt-20 pb-10">
       <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left mb-16">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <h4 className="text-2xl font-serif text-brand-gold mb-6">Silver Beauty Spa</h4>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Redefining luxury grooming in Kenya. We blend international standards with authentic hospitality to create a sanctuary for your beauty needs.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.facebook.com/SilverBeautySpaAndBarberShop/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors p-2 border border-gray-800 rounded-full hover:border-brand-gold"><FacebookIcon /></a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors p-2 border border-gray-800 rounded-full hover:border-brand-gold"><InstagramIcon /></a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors p-2 border border-gray-800 rounded-full hover:border-brand-gold"><TikTokIcon /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><button onClick={() => onNavigate && onNavigate('services')} className="hover:text-brand-gold transition-colors">Services Menu</button></li>
              <li><button onClick={() => onNavigate && onNavigate('gallery')} className="hover:text-brand-gold transition-colors">Visual Gallery</button></li>
              <li><button onClick={() => onNavigate && onNavigate('about')} className="hover:text-brand-gold transition-colors">Our Artisans</button></li>
              <li><button onClick={() => onNavigate && onNavigate('booking')} className="hover:text-brand-gold transition-colors">Book Appointment</button></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
             <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">The Inner Circle</h4>
             <p className="text-xs text-gray-500 mb-4">Subscribe for exclusive offers and beauty insights.</p>
             <form className="flex flex-col space-y-2">
               <input type="email" placeholder="Email Address" className="bg-gray-900 border border-gray-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-brand-gold rounded-sm" />
               <button className="bg-brand-gold text-brand-black font-bold uppercase tracking-widest text-xs py-3 hover:bg-white transition-colors rounded-sm">Subscribe</button>
             </form>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 text-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Silver Beauty Spa & Barber Shop. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
