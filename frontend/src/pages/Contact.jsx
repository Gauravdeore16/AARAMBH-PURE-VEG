import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-8 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-brand-primary mb-8 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-brand-primary/10 p-3 rounded-full mr-4 text-brand-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Address</h3>
                <p className="text-gray-600">Aarambh Pure Veg<br />Shivane, Pune, Maharashtra</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-brand-primary/10 p-3 rounded-full mr-4 text-brand-primary">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Phone</h3>
                <p className="text-gray-600">+91 XXXXX XXXXX</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
          <span className="text-gray-500 font-bold">[ Google Map Placeholder ]</span>
        </div>
      </div>
    </div>
  );
}
