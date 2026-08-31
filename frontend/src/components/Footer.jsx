import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-12 pb-24 md:pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-heading font-bold text-brand-gold mb-4">Aarambh</h3>
            <p className="text-gray-400 mb-4">Pure veg family restaurant serving authentic multi-cuisine dishes with a touch of love.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-brand-gold">Home</Link></li>
              <li><Link to="/menu" className="hover:text-brand-gold">Our Menu</Link></li>
              <li><Link to="/about" className="hover:text-brand-gold">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>South Indian: 8:00 AM - 10:00 PM</li>
              <li>Punjabi/Chinese: 11:00 AM - 11:15 PM</li>
              <li>South Snacks: 11:00 AM - 4:00 PM</li>
              <li>Thali: 11:00 AM - 4:00 PM</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-gold flex-shrink-0 mt-1" />
                <span>FQ7G+W8X, Shivane<br/>Pune, Maharashtra 411023</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-gold flex-shrink-0" />
                <span>+91 (Update your number)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-gold flex-shrink-0" />
                <span>contact@aarambh.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brand-primary-light mt-8 pt-8 text-center text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} Aarambh Pure Veg. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
