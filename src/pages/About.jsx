import { Users, ShieldCheck, Clock, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">About Fixora</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fixora is a premium home-service platform designed to make everyday repairs and maintenance simpler. We connect customers with trusted service professionals and make it easier to request and manage home services.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-orange-50 p-10 rounded-3xl">
              <h2 className="text-3xl font-bold text-dark mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To simplify home maintenance by providing a reliable, transparent, and high-quality service platform. We aim to take the stress out of finding trusted professionals for everyday home needs.
              </p>
            </div>
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
              <h2 className="text-3xl font-bold text-dark mb-6">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become the most trusted and widely used home services platform in India, empowering service professionals and delighting customers with seamless experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">500+</div>
              <div className="text-orange-100 font-medium text-lg">Service Requests</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">50+</div>
              <div className="text-orange-100 font-medium text-lg">Professionals</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">6</div>
              <div className="text-orange-100 font-medium text-lg">Service Categories</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">24/7</div>
              <div className="text-orange-100 font-medium text-lg">Booking System</div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark mb-16">Our Customer-First Approach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Vetted Professionals</h3>
              <p className="text-gray-600">Every service partner undergoes strict background checks.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Quality Guarantee</h3>
              <p className="text-gray-600">We stand by the quality of work delivered by our professionals.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">On-Time Service</h3>
              <p className="text-gray-600">We respect your time and ensure timely service delivery.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">No hidden costs. You know exactly what you are paying for.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
