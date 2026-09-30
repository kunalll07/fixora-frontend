import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group flex flex-col h-full">
      <div className="p-6 flex-grow">
        <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
          <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-xl font-bold text-dark mb-3">{service.name}</h3>
        <p className="text-gray-600 mb-6 line-clamp-3">{service.description}</p>
        <div className="text-sm text-gray-500 font-medium mb-4">
          Starting from <span className="text-primary text-lg font-bold">₹{service.price}</span>
        </div>
      </div>
      <div className="px-6 pb-6 pt-2">
        <Link
          to={`/services/${service.id}`}
          className="flex items-center justify-center w-full bg-gray-50 hover:bg-primary text-gray-800 hover:text-white py-3 rounded-xl font-semibold transition-colors group/btn"
        >
          Book Now
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
