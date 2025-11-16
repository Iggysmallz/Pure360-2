
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center h-[70vh] text-white text-center overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        poster="https://cdn-ildodlm.nitrocdn.com/GoxtReMIrPbNRjTNbiBtsgsvUzuIOcSC/assets/images/optimized/rev-4c1bc8e/www.buildersingauteng.co.za/wp-content/uploads/2025/07/A-professional-pool-cleaning-service-in-Gauteng-South-Africa.-A-clean-modern-pool-house-with--1024x585.jpeg"
      >
        <source src="https://videos.pexels.com/video-files/4689035/4689035-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-60 z-10"></div>
      <div className="relative z-20 container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">All the Cleaning Help Your Home Needs</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Reliable, vetted cleaners for your home, garden, and vehicles. Book professional service in minutes.</p>
        <a href="#book" className="bg-white text-primary font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
