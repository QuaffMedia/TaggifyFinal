import React from 'react';
import { Shield, Award, TrendingUp } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
} 

const Hero: React.FC<HeroProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <div
      className="relative min-h-screen flex items-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 32, 0.7), rgba(0, 0, 32, 0.8)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 py-20 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 leading-relaxed animate-fade-in-delay">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-delay-2">
            <a
              href="#contact-form"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300 text-center"
            >
              Schedule a Consultation
            </a>
            <a
              href="#services"
              className="inline-block bg-transparent hover:bg-white/10 text-white border border-white font-semibold py-3 px-8 rounded-md transition-colors duration-300 text-center"
            >
              Explore Our Services
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in-delay-3">
            <div className="flex text-sm items-center">
              <Shield className="mr-3 text-blue-400" size={24} />
              <span>Certified Audit Experts</span>
            </div>
            <div className="flex text-sm items-center">
              <Award className="mr-3 text-sm text-blue-400" size={24} />
              <span>Recognized Industry Experts</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="mr-3 text-blue-400" size={24} />
              <span>98% Client Satisfaction</span>
            </div>
          </div> 
        </div>
      </div> 
    </div> 
  );
};

export default Hero;