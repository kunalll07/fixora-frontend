import { Link } from 'react-router-dom';
import { Wrench, FileText, CheckSquare, Settings } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">How It Works</h1>
          <p className="text-lg text-gray-600">
            Booking a service with Fixora is quick, easy, and transparent. We've simplified the process so you can get your home fixed without any hassle.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line connecting steps */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between group">
              <div className="md:w-5/12 text-center md:text-right mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-dark mb-3">Choose a Service</h3>
                <p className="text-gray-600">Browse through our wide range of professional services and select the one that fits your needs.</p>
              </div>
              <div className="md:w-2/12 flex justify-center relative z-10">
                <div className="w-20 h-20 bg-white rounded-full border-4 border-orange-100 flex items-center justify-center shadow-lg group-hover:border-primary transition-colors duration-300">
                  <Wrench className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="md:w-5/12 hidden md:block">
                <div className="text-9xl font-black text-gray-50 opacity-50 absolute -top-10 left-10">01</div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row-reverse items-center justify-between group">
              <div className="md:w-5/12 text-center md:text-left mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-dark mb-3">Submit Your Request</h3>
                <p className="text-gray-600">Fill out our simple booking form with your contact details, address, and a brief description of the problem.</p>
              </div>
              <div className="md:w-2/12 flex justify-center relative z-10">
                <div className="w-20 h-20 bg-white rounded-full border-4 border-orange-100 flex items-center justify-center shadow-lg group-hover:border-primary transition-colors duration-300">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="md:w-5/12 hidden md:block relative">
                <div className="text-9xl font-black text-gray-50 opacity-50 absolute -top-10 right-10">02</div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between group">
              <div className="md:w-5/12 text-center md:text-right mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-dark mb-3">Get Confirmation</h3>
                <p className="text-gray-600">Our team will quickly review your request and confirm the booking along with the professional's details.</p>
              </div>
              <div className="md:w-2/12 flex justify-center relative z-10">
                <div className="w-20 h-20 bg-white rounded-full border-4 border-orange-100 flex items-center justify-center shadow-lg group-hover:border-primary transition-colors duration-300">
                  <CheckSquare className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="md:w-5/12 hidden md:block relative">
                <div className="text-9xl font-black text-gray-50 opacity-50 absolute -top-10 left-10">03</div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col md:flex-row-reverse items-center justify-between group">
              <div className="md:w-5/12 text-center md:text-left mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-dark mb-3">Get the Job Done</h3>
                <p className="text-gray-600">Our trusted service professional arrives at your doorstep to complete the job to your satisfaction.</p>
              </div>
              <div className="md:w-2/12 flex justify-center relative z-10">
                <div className="w-20 h-20 bg-white rounded-full border-4 border-orange-100 flex items-center justify-center shadow-lg group-hover:border-primary transition-colors duration-300">
                  <Settings className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="md:w-5/12 hidden md:block relative">
                <div className="text-9xl font-black text-gray-50 opacity-50 absolute -top-10 right-10">04</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <Link
            to="/book"
            className="inline-block bg-primary hover:bg-primaryDark text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl"
          >
            Start Booking Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
