
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    { number: 1, title: 'Choose Your Service', description: 'Select the cleaning type, date, and time that works best for you.' },
    { number: 2, title: 'Get Matched', description: 'We instantly connect you with a trusted and vetted cleaning professional.' },
    { number: 3, title: 'Relax & Enjoy', description: 'Your pro arrives on time and gets the job done. Manage everything easily online.' },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 text-center">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
