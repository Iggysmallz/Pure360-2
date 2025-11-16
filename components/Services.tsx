
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import type { Service } from '../types';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find(service => service.id === activeTab);

  return (
    <section id="services" className="bg-light py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {SERVICES.map((service: Service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`py-2 px-4 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
                activeTab === service.id 
                ? 'bg-primary text-white shadow-lg' 
                : 'bg-white text-gray-600 hover:bg-gray-200'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {activeService && (
            <div 
              key={activeService.id}
              className="bg-white p-6 md:p-10 rounded-xl shadow-lg animate-fade-scale-in"
            >
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{activeService.title}</h3>
                  <p className="text-gray-600 mb-6">{activeService.description}</p>
                  <ul className="space-y-2 mb-6">
                    {activeService.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-semibold text-gray-800 mb-6">{activeService.price}</p>
                  <a href="#book" className="bg-primary text-white font-bold py-3 px-6 rounded-full hover:bg-primary-dark transition duration-300">
                    Book {activeService.title}
                  </a>
                </div>
                <div className="order-1 md:order-2">
                  <img src={activeService.imageUrl} alt={activeService.title} className="rounded-lg shadow-md w-full h-auto object-cover aspect-video" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;