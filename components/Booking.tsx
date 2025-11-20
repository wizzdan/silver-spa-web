
import React, { useState } from 'react';
import { SERVICE_CATEGORIES } from '../constants';

// Owner's contact configuration - Read safely from Environment Variable
// In Netlify, set REACT_APP_OWNER_PHONE in Site Settings > Environment Variables
const getOwnerPhone = () => {
  // Priority 1: Check for process.env (standard build/CRA)
  if (typeof process !== 'undefined' && process.env && process.env.REACT_APP_OWNER_PHONE) {
    return process.env.REACT_APP_OWNER_PHONE;
  }
  // Priority 2: Check for import.meta.env (Vite standard)
  try {
    const meta = import.meta as any;
    if (meta && meta.env && meta.env.VITE_OWNER_PHONE) {
      return meta.env.VITE_OWNER_PHONE;
    }
  } catch (e) {
    // Ignore errors if import.meta is not available
  }
  
  // Fallback/Default (Optional: remove this line if you want to enforce env vars)
  // Ideally, return an empty string to force the error check below
  return ''; 
};

const OWNER_PHONE = getOwnerPhone();

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
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
    setError(null); // Clear errors on type
  };

  // Validation Helpers
  const validateName = (name: string) => {
    return name.trim().split(/\s+/).length >= 2;
  };

  const validateKenyanPhone = (phone: string) => {
    // Allows: +2547..., 2547..., 07..., 01...
    const regex = /^(?:254|\+254|0)?([17](?:(?:[0-9][0-9])|(?:0[0-8])|(4[0-1]))[0-9]{6})$/;
    return regex.test(phone.replace(/\s/g, ''));
  };

  const validateDate = (dateStr: string) => {
    const selectedDate = new Date(dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  };

  const handleNextStep = () => {
    if (!formData.serviceCategory || !formData.service) {
      setError("Please select a service category and specific service.");
      return;
    }
    if (!formData.date || !formData.time) {
      setError("Please select a preferred date and time.");
      return;
    }
    if (!validateDate(formData.date)) {
      setError("Please select a date in the future.");
      return;
    }
    setError(null);
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // --- Validation ---
    if (!validateName(formData.name)) {
      setError("Please enter your full name (First and Last name).");
      setIsLoading(false);
      return;
    }

    if (!validateKenyanPhone(formData.phone)) {
      setError("Please enter a valid Kenyan phone number (e.g., 0712345678).");
      setIsLoading(false);
      return;
    }

    if (!OWNER_PHONE) {
        setError("Configuration Error: Shop phone number is missing. Please contact support.");
        setIsLoading(false);
        return;
    }

    // --- Notification Logic ---
    
    try {
      // 1. Simulate Processing Delay for UX
      await new Promise(resolve => setTimeout(resolve, 1500));

      // 2. Client-Side WhatsApp Trigger (Primary Notification)
      // This works perfectly on Netlify without a backend
      const message = `*New Booking Alert – Silver Beauty Spa*

*Service:* ${formData.service}
*Date:* ${formData.date}
*Time:* ${formData.time}
*Client:* ${formData.name}
*Phone:* ${formData.phone}
*Notes:* ${formData.notes || 'None'}

Please confirm availability.`;

      const whatsappUrl = `https://wa.me/${OWNER_PHONE}?text=${encodeURIComponent(message)}`;
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank');

      // 3. Success State
      setSubmitted(true);
      
    } catch (err) {
      setError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center p-6">
        <div className="bg-brand-dark p-10 rounded-sm border border-brand-gold text-center max-w-lg shadow-2xl animate-fade-in-up">
          <div className="w-20 h-20 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold text-4xl border border-brand-gold">
            ✓
          </div>
          <h2 className="text-3xl font-serif text-brand-cream mb-4">Request Initiated</h2>
          <p className="text-gray-300 mb-6">
            Thank you, <span className="text-brand-gold font-semibold">{formData.name}</span>. 
          </p>
          <div className="bg-brand-black/50 p-4 rounded-sm border border-gray-800 mb-8 text-sm text-gray-400">
            <p className="mb-2">We have opened WhatsApp to finalize your booking with our concierge.</p>
            <p>Please hit <strong>"Send"</strong> in WhatsApp to complete the process.</p>
          </div>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-brand-gold text-brand-black px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors"
          >
            Book Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-black pt-32 pb-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto bg-brand-dark border border-gray-800 rounded-sm overflow-hidden flex flex-col md:flex-row shadow-2xl">
        
        {/* Info Side */}
        <div className="md:w-1/3 bg-brand-burgundy p-8 text-brand-cream flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-serif mb-6">Concierge Booking</h3>
            <div className="space-y-6 text-sm opacity-90">
              <p>Secure your session with our master stylists and therapists.</p>
              <div className="h-[1px] bg-white/20"></div>
              <div>
                <p className="font-bold mb-1 text-brand-gold">Opening Hours</p>
                <p>Mon - Sat: 8:00 AM - 8:00 PM</p>
                <p>Sun: 10:00 AM - 6:00 PM</p>
              </div>
              <div>
                 <p className="font-bold mb-1 text-brand-gold">Direct Line</p>
                 <p>+254 740 619025</p>
              </div>
            </div>
          </div>
          <div className="mt-12 md:mt-0 relative z-10">
            <p className="italic text-xs opacity-75">"Beauty is power, and a smile is its sword."</p>
          </div>
        </div>

        {/* Form Side */}
        <div className="md:w-2/3 p-8 md:p-12 bg-brand-black">
          <div className="mb-8 flex items-center justify-between border-b border-gray-800 pb-4">
             <h2 className="text-2xl font-serif text-brand-gold">Request Appointment</h2>
             <span className="text-gray-500 text-xs uppercase tracking-widest">Step {step} of 2</span>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-900/20 border border-red-900/50 text-red-200 text-sm rounded-sm flex items-start gap-3">
              <span className="text-lg">⚠️</span>
              <p>{error}</p>
            </div>
          )}

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
                            disabled={!formData.serviceCategory}
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
                        <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Date</label>
                        <input 
                            type="date" 
                            name="date"
                            min={new Date().toISOString().split('T')[0]}
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full bg-brand-dark border border-gray-700 text-brand-cream p-3 rounded-sm focus:border-brand-gold focus:outline-none transition-colors scheme-dark"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Time</label>
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
                        onClick={handleNextStep}
                        className="bg-brand-white text-brand-black hover:bg-brand-gold font-bold py-3 px-8 uppercase tracking-widest transition-colors w-full md:w-auto rounded-sm"
                    >
                        Next Step
                    </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-fade-in">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Full Name <span className="text-brand-burgundy">*</span></label>
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Jane Doe"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-brand-dark border border-gray-700 text-brand-cream p-3 rounded-sm focus:border-brand-gold focus:outline-none transition-colors"
                        />
                        <p className="text-[10px] text-gray-600 mt-1">Min. 2 words required</p>
                    </div>
                    <div>
                        <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Mobile Number <span className="text-brand-burgundy">*</span></label>
                        <input 
                            type="tel" 
                            name="phone"
                            placeholder="0712 345 678"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-brand-dark border border-gray-700 text-brand-cream p-3 rounded-sm focus:border-brand-gold focus:outline-none transition-colors"
                        />
                        <p className="text-[10px] text-gray-600 mt-1">Kenyan format preferred</p>
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
                        className="w-full bg-brand-dark border border-gray-700 text-brand-cream p-3 rounded-sm focus:border-brand-gold focus:outline-none transition-colors"
                    />
                </div>

                 <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Special Requests / Notes</label>
                    <textarea 
                        name="notes"
                        rows={3}
                        placeholder="Any allergies, preferences, or specific requirements..."
                        value={formData.notes}
                        onChange={handleChange}
                        maxLength={500}
                        className="w-full bg-brand-dark border border-gray-700 text-brand-cream p-3 rounded-sm focus:border-brand-gold focus:outline-none transition-colors"
                    />
                </div>

                <div className="flex flex-col-reverse md:flex-row gap-4 pt-4">
                    <button 
                        type="button" 
                        onClick={() => setStep(1)}
                        className="border border-gray-600 text-gray-400 hover:text-brand-cream hover:border-brand-cream font-bold py-3 px-8 uppercase tracking-widest transition-colors rounded-sm w-full md:w-auto"
                    >
                        Back
                    </button>
                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className="bg-brand-gold text-brand-black hover:bg-white font-bold py-3 px-8 uppercase tracking-widest transition-colors flex-grow md:flex-grow-0 rounded-sm flex items-center justify-center"
                    >
                        {isLoading ? (
                          <span className="inline-block w-4 h-4 border-2 border-brand-black border-t-transparent rounded-full animate-spin mr-2"></span>
                        ) : null}
                        Confirm Appointment
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
