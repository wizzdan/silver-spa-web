
import React, { useState } from 'react';
import { SERVICE_CATEGORIES } from '../constants';

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceCategory: '',
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    console.log('Booking Submitted:', formData);
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center p-6">
        <div className="bg-brand-dark p-10 rounded-sm border border-brand-gold text-center max-w-lg">
          <div className="w-20 h-20 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold text-4xl">
            ✓
          </div>
          <h2 className="text-3xl font-serif text-brand-cream mb-4">Reservation Received</h2>
          <p className="text-gray-400 mb-8">
            Thank you, {formData.name}. Your appointment request for <span className="text-brand-gold">{formData.service}</span> has been received. We will send a confirmation via SMS to {formData.phone} shortly.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-brand-gold text-brand-black px-8 py-3 uppercase tracking-widest text-xs font-bold"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-black pt-32 pb-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto bg-brand-dark border border-gray-800 rounded-sm overflow-hidden flex flex-col md:flex-row shadow-2xl">
        
        {/* Info Side */}
        <div className="md:w-1/3 bg-brand-burgundy p-8 text-brand-cream flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-serif mb-6">Booking Details</h3>
            <div className="space-y-6 text-sm opacity-90">
              <p>Please fill out the form to secure your session with our specialists.</p>
              <div className="h-[1px] bg-white/20"></div>
              <div>
                <p className="font-bold mb-1">Opening Hours</p>
                <p>Mon - Sat: 8:00 AM - 8:00 PM</p>
                <p>Sun: 10:00 AM - 6:00 PM</p>
              </div>
              <div>
                 <p className="font-bold mb-1">Contact</p>
                 <p>+254 700 000 000</p>
              </div>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <p className="italic text-xs opacity-75">"Beauty is power, and a smile is its sword."</p>
          </div>
        </div>

        {/* Form Side */}
        <div className="md:w-2/3 p-8 md:p-12 bg-brand-black">
          <div className="mb-8 flex items-center justify-between border-b border-gray-800 pb-4">
             <h2 className="text-2xl font-serif text-brand-gold">Request Appointment</h2>
             <span className="text-gray-500 text-sm">Step {step} of 2</span>
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 ? (
              <div className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Service Category</label>
                        <select 
                            name="serviceCategory"
                            value={formData.serviceCategory}
                            onChange={handleChange}
                            className="w-full bg-brand-dark border border-gray-700 text-brand-cream p-3 rounded-sm focus:border-brand-gold focus:outline-none transition-colors"
                        >
                            <option value="">Select Category</option>
                            {SERVICE_CATEGORIES.map(cat => (
                                <option key={cat.id} value={cat.title}>{cat.title}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Specific Service</label>
                        <select 
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full bg-brand-dark border border-gray-700 text-brand-cream p-3 rounded-sm focus:border-brand-gold focus:outline-none transition-colors"
                        >
                            <option value="">Select Service</option>
                            {SERVICE_CATEGORIES.find(c => c.title === formData.serviceCategory)?.items.map(item => (
                                <option key={item.name} value={item.name}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Preferred Date</label>
                        <input 
                            type="date" 
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full bg-brand-dark border border-gray-700 text-brand-cream p-3 rounded-sm focus:border-brand-gold focus:outline-none transition-colors scheme-dark"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Preferred Time</label>
                        <input 
                            type="time" 
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full bg-brand-dark border border-gray-700 text-brand-cream p-3 rounded-sm focus:border-brand-gold focus:outline-none transition-colors scheme-dark"
                        />
                    </div>
                </div>
                
                <div className="pt-4">
                    <button 
                        type="button" 
                        onClick={() => setStep(2)}
                        className="bg-brand-white text-brand-black hover:bg-brand-gold font-bold py-3 px-8 uppercase tracking-widest transition-colors w-full md:w-auto"
                    >
                        Next Step
                    </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-fade-in">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Full Name</label>
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Jane Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-brand-dark border border-gray-700 text-brand-cream p-3 rounded-sm focus:border-brand-gold focus:outline-none transition-colors"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Phone Number</label>
                        <input 
                            type="tel" 
                            name="phone"
                            placeholder="+254..."
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full bg-brand-dark border border-gray-700 text-brand-cream p-3 rounded-sm focus:border-brand-gold focus:outline-none transition-colors"
                        />
                    </div>
                </div>
                
                <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Email Address</label>
                    <input 
                        type="email" 
                        name="email"
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-brand-dark border border-gray-700 text-brand-cream p-3 rounded-sm focus:border-brand-gold focus:outline-none transition-colors"
                    />
                </div>

                 <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Special Requests / Notes</label>
                    <textarea 
                        name="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleChange}
                        className="w-full bg-brand-dark border border-gray-700 text-brand-cream p-3 rounded-sm focus:border-brand-gold focus:outline-none transition-colors"
                    />
                </div>

                <div className="flex gap-4 pt-4">
                    <button 
                        type="button" 
                        onClick={() => setStep(1)}
                        className="border border-gray-600 text-gray-400 hover:text-brand-cream hover:border-brand-cream font-bold py-3 px-8 uppercase tracking-widest transition-colors"
                    >
                        Back
                    </button>
                    <button 
                        type="submit" 
                        className="bg-brand-gold text-brand-black hover:bg-white font-bold py-3 px-8 uppercase tracking-widest transition-colors flex-grow md:flex-grow-0"
                    >
                        Confirm Booking
                    </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
