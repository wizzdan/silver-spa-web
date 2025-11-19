
import React from 'react';

interface ContactProps {
    simple?: boolean;
}

const Contact: React.FC<ContactProps> = ({ simple }) => {
  return (
    <div className={`${simple ? 'bg-brand-black' : 'bg-brand-black min-h-screen pt-24'}`}>
      {!simple && (
          <div className="text-center pt-12 mb-12 px-6">
              <h2 className="text-4xl font-serif text-brand-gold">Visit Us</h2>
              <p className="text-gray-500 mt-4">We are conveniently located to serve you.</p>
          </div>
      )}
      
      <div className="flex flex-col lg:flex-row">
        {/* Map Section */}
        <div className={`w-full ${simple ? 'h-96' : 'h-[500px] lg:h-auto lg:flex-1'} bg-gray-900 relative`}>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531593!3d-37.8162797420216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d327686a6a0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633073042304!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{border:0, filter: 'grayscale(100%) invert(92%) contrast(83%)'}} 
                allowFullScreen={true} 
                loading="lazy"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]"></div>
        </div>

        {/* Info Section */}
        <div className={`w-full lg:w-1/3 bg-brand-dark p-10 md:p-16 text-center lg:text-left border-l border-gray-800 flex flex-col justify-center`}>
             <div className="mb-10">
                 <h3 className="text-brand-gold uppercase tracking-widest text-sm font-bold mb-4">Locations</h3>
                 <p className="text-brand-cream mb-2">Silver Beauty Spa HQ</p>
                 <p className="text-gray-500 text-sm leading-relaxed">123 Luxury Lane, Westlands<br/>Nairobi, Kenya</p>
             </div>

             <div className="mb-10">
                 <h3 className="text-brand-gold uppercase tracking-widest text-sm font-bold mb-4">Contact</h3>
                 <p className="text-gray-400 text-sm mb-2">Phone: <span className="text-brand-cream">+254 700 123 456</span></p>
                 <p className="text-gray-400 text-sm">Email: <span className="text-brand-cream">concierge@silverbeauty.com</span></p>
             </div>

             <div>
                 <h3 className="text-brand-gold uppercase tracking-widest text-sm font-bold mb-4">Hours</h3>
                 <ul className="text-gray-500 text-sm space-y-2">
                     <li className="flex justify-between lg:justify-start lg:gap-8"><span>Mon - Fri</span> <span className="text-brand-cream">8am - 8pm</span></li>
                     <li className="flex justify-between lg:justify-start lg:gap-8"><span>Saturday</span> <span className="text-brand-cream">9am - 7pm</span></li>
                     <li className="flex justify-between lg:justify-start lg:gap-8"><span>Sunday</span> <span className="text-brand-cream">10am - 6pm</span></li>
                 </ul>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
