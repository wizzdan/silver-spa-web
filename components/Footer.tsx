
import React from 'react';
import { FacebookIcon, InstagramIcon, TikTokIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-brand-cream pt-16">
       <div className="container mx-auto px-6">
        <div className="w-full h-64 bg-gray-700 rounded-lg mb-12 flex items-center justify-center">
          <p className="text-brand-gold font-serif text-2xl">[ Google Map of Salon Locations ]</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-xl font-serif text-brand-gold mb-4">Silver Beauty Spa</h4>
            <p className="text-sm text-gray-400">The pinnacle of luxury hair care and authentic beauty experiences.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">Our Salons</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">Book Now</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Care</h4>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">FAQs</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><InstagramIcon /></a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><TikTokIcon /></a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><FacebookIcon /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 py-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Silver Beauty Spa. All Rights Reserved. Redesign Concept.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
