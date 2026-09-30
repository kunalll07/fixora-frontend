import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const ServiceDetails = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold text-dark mb-4">Service Not Found</h2>
        <p className="text-gray-600 mb-8">The service you are looking for does not exist.</p>
        <Link to="/services" className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primaryDark transition-colors">
          Browse All Services
        </Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="bg-white">
      {/* Service Hero */}
      <section className="relative pt-12 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4 text-primary font-semibold">
                <Icon className="w-6 h-6" />
                <span>Fixora Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">{service.name}</h1>
              <p className="text-lg text-gray-600 mb-8">{service.longDescription}</p>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 inline-block">
                <p className="text-sm text-gray-500 font-medium mb-1">Starting Price</p>
                <p className="text-3xl font-bold text-dark">₹{service.price}</p>
              </div>
              
              <div className="mt-8">
                <Link
                  to={`/book?service=${service.id}`}
                  className="inline-flex items-center justify-center bg-primary hover:bg-primaryDark text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-md group"
                >
                  Book Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={service.image} 
                alt={service.name} 
                className="rounded-2xl shadow-lg w-full h-auto object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* What we provide */}
            <div>
              <h3 className="text-2xl font-bold text-dark mb-6">What We Provide</h3>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Common Problems */}
            <div>
              <h3 className="text-2xl font-bold text-dark mb-6">Common Problems We Fix</h3>
              <div className="bg-orange-50 rounded-2xl p-8">
                <ul className="space-y-4">
                  {service.problems.map((problem, index) => (
                    <li key={index} className="flex items-center text-gray-800 font-medium">
                      <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
