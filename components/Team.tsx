
import React from 'react';
import { TEAM_MEMBERS } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Trusted Cleaners</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className="bg-light rounded-lg shadow-lg overflow-hidden text-center p-6 transform hover:-translate-y-2 transition duration-300">
              <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary" />
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600 italic">"{member.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
