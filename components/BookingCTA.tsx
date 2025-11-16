import React, { useState } from 'react';
import { SERVICES } from '../constants';

const BookingCTA: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; phoneNumber?: string; serviceType?: string }>({});

  const validate = () => {
    const newErrors: { name?: string; email?: string; phoneNumber?: string; serviceType?: string } = {};
    if (!name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!phoneNumber.trim()) {
        newErrors.phoneNumber = 'Phone number is required.';
    } else if (!/^\d{7,}$/.test(phoneNumber.replace(/\D/g, ''))) {
        newErrors.phoneNumber = 'Please enter a valid phone number.';
    }
    if (!serviceType) {
        newErrors.serviceType = 'Please select a service.';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with submission logic
      alert(`Thank you, ${name}! Your request for ${serviceType} has been submitted.`);
      // Clear form
      setName('');
      setEmail('');
      setPhoneNumber('');
      setServiceType('');
      setErrors({});
    }
  };

  return (
    <section id="book" className="py-16 md:py-24 bg-light text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Get your free estimate and schedule your service online in just a few clicks.</p>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-left mb-1">Name</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="Your Name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full p-3 border rounded-md focus:ring-2 focus:outline-none ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'}`}
                  aria-invalid={!!errors.name}
                  aria-describedby="name-error"
                />
                {errors.name && <p id="name-error" className="text-red-500 text-sm text-left mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left mb-1">Email</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="Your Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full p-3 border rounded-md focus:ring-2 focus:outline-none ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'}`}
                  aria-invalid={!!errors.email}
                  aria-describedby="email-error"
                />
                {errors.email && <p id="email-error" className="text-red-500 text-sm text-left mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 text-left mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone"
                  placeholder="e.g., 012 345 6789" 
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className={`w-full p-3 border rounded-md focus:ring-2 focus:outline-none ${errors.phoneNumber ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'}`}
                  aria-invalid={!!errors.phoneNumber}
                  aria-describedby="phone-error"
                />
                {errors.phoneNumber && <p id="phone-error" className="text-red-500 text-sm text-left mt-1">{errors.phoneNumber}</p>}
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 text-left mb-1">Service Type</label>
                <select
                  id="service"
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className={`w-full p-3 border rounded-md focus:ring-2 focus:outline-none bg-white ${errors.serviceType ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'}`}
                  aria-invalid={!!errors.serviceType}
                  aria-describedby="service-error"
                >
                  <option value="" disabled>Select a service</option>
                  {SERVICES.map(service => (
                    <option key={service.id} value={service.title}>{service.title}</option>
                  ))}
                </select>
                {errors.serviceType && <p id="service-error" className="text-red-500 text-sm text-left mt-1">{errors.serviceType}</p>}
              </div>
            </div>

            <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-primary-dark transition duration-300">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;