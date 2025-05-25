import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:-translate-y-2">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={link} className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
        Learn more <ArrowRight size={16} className="ml-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;