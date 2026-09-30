import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, MessageCircle, Camera } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-3xl font-bold text-white">FIXORA</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Reliable home services, simplified. Book trusted professionals for repairs, maintenance and home services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">
                <Camera className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Facebook">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/book" className="hover:text-primary transition-colors">Book a Service</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services/plumbing" className="hover:text-primary transition-colors">Plumbing</Link></li>
              <li><Link to="/services/electrical" className="hover:text-primary transition-colors">Electrical</Link></li>
              <li><Link to="/services/ac-repair" className="hover:text-primary transition-colors">AC Repair</Link></li>
              <li><Link to="/services/cleaning" className="hover:text-primary transition-colors">Cleaning</Link></li>
              <li><Link to="/services/appliance" className="hover:text-primary transition-colors">Appliance Repair</Link></li>
              <li><Link to="/services/painting" className="hover:text-primary transition-colors">Painting</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                <a href="mailto:support@fixora.in" className="hover:text-primary transition-colors">support@fixora.in</a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2026 Fixora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
