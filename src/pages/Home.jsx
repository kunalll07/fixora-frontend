import { Link } from 'react-router-dom';
import { CheckCircle2, Clock, Shield, Star, Wrench, FileText, CheckSquare, Settings } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/servicesData';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 pt-16 pb-24 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-orange-200 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark leading-tight tracking-tight mb-6">
                Reliable Home Services, <br />
                <span className="text-primary">Just a Booking Away.</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Book trusted professionals for repairs, maintenance and home services — quickly and conveniently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/book"
                  className="bg-primary hover:bg-primaryDark text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center"
                >
                  Book a Service
                </Link>
                <Link
                  to="/services"
                  className="bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-full font-bold text-lg transition-all hover:border-gray-300 text-center"
                >
                  Explore Services
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm font-medium text-gray-600">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  Verified Pros
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  Easy Booking
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Clear Pricing
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Reliable
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000" 
                  alt="Professional Home Service" 
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Star className="w-6 h-6 text-green-600 fill-current" />
                    </div>
                    <div>
                      <p className="font-bold text-dark">4.9/5 Average Rating</p>
                      <p className="text-sm text-gray-600">Based on 10,000+ reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">
              Everything you need to keep your home running smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get your home services done in four simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center relative">
              <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 mb-6 z-10 relative">
                <Wrench className="w-10 h-10 text-primary" />
                <div className="absolute -top-3 -right-3 bg-dark text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">01</div>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Choose a Service</h3>
              <p className="text-gray-600">Select the service you need from our list.</p>
              <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 -z-0"></div>
            </div>

            <div className="text-center relative">
              <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 mb-6 z-10 relative">
                <FileText className="w-10 h-10 text-primary" />
                <div className="absolute -top-3 -right-3 bg-dark text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">02</div>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Submit Request</h3>
              <p className="text-gray-600">Enter your details and describe the problem.</p>
              <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 -z-0"></div>
            </div>

            <div className="text-center relative">
              <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 mb-6 z-10 relative">
                <CheckSquare className="w-10 h-10 text-primary" />
                <div className="absolute -top-3 -right-3 bg-dark text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">03</div>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Get Confirmation</h3>
              <p className="text-gray-600">Our team reviews your request and contacts you.</p>
              <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 -z-0"></div>
            </div>

            <div className="text-center relative">
              <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 mb-6 z-10 relative">
                <Settings className="w-10 h-10 text-primary" />
                <div className="absolute -top-3 -right-3 bg-dark text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">04</div>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Get the Job Done</h3>
              <p className="text-gray-600">A service professional completes the work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Why Choose Fixora</h2>
              <p className="text-lg text-gray-600 mb-10">
                We believe in providing top-notch quality and ensuring complete peace of mind for all your home service needs.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-dark mb-2">Trusted Professionals</h4>
                    <p className="text-gray-600">Connect with reliable, background-verified service professionals.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-dark mb-2">Easy Booking</h4>
                    <p className="text-gray-600">Request a service in just a few simple steps. Save time and effort.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-dark mb-2">Transparent Pricing</h4>
                    <p className="text-gray-600">Clear starting prices with no hidden charges or unnecessary complexity.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                      <Star className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-dark mb-2">Quick Support</h4>
                    <p className="text-gray-600">Get assistance whenever you need it from our dedicated support team.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 transform rotate-3 rounded-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80&w=800" 
                alt="Fixora Professional" 
                className="relative rounded-3xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to get your home fixed?</h2>
          <p className="text-orange-100 text-lg mb-10 max-w-2xl mx-auto">
            Book a service today and experience hassle-free home maintenance with Fixora.
          </p>
          <Link
            to="/book"
            className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
