
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Team from './components/Team';
import Safety from './components/Safety';
import BookingCTA from './components/BookingCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <Team />
        <Safety />
        <BookingCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
