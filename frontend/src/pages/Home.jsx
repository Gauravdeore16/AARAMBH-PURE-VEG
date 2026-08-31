import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-primary text-white py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/interior_1.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-brand-secondary/20 border border-brand-secondary text-brand-amber rounded-full text-sm font-semibold mb-6">
                Pure Vegetarian Dining Experience
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                AARAMBH
                <span className="block text-brand-gold mt-2 text-4xl lg:text-5xl font-sans">PURE VEG</span>
              </h1>
              <p className="text-lg lg:text-xl text-brand-cream-dark opacity-90 mb-8 max-w-lg">
                Discover our delicious vegetarian menu featuring authentic Indian, South Indian, and Chinese cuisines in the heart of Shivane.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/menu" className="px-8 py-3 bg-brand-secondary hover:bg-brand-secondary-light text-white font-bold rounded-lg transition-colors flex items-center">
                  Explore Menu <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link to="/cart" className="px-8 py-3 bg-white text-brand-primary hover:bg-brand-cream-dark font-bold rounded-lg transition-colors">
                  Order Now
                </Link>
              </div>
              <div className="mt-8 flex items-center text-sm">
                <span className="flex text-brand-gold mr-2">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </span>
                <span className="opacity-80">Loved by 1000+ happy customers in Pune</span>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="w-full h-[500px] bg-brand-cream-dark rounded-2xl overflow-hidden relative shadow-2xl border-4 border-brand-gold/20">
                <div className="absolute inset-0 flex items-center justify-center text-brand-primary/20 flex-col">
                  {/* Placeholder for real food image */}
                  <span className="text-2xl font-bold">[ Food Image ]</span>
                  <span className="text-sm mt-2">Replace with high-quality photography</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-brand-dark p-4 rounded-xl shadow-xl border border-gray-100 flex items-center">
                <div className="bg-green-100 text-green-600 p-2 rounded-lg mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-semibold uppercase">Location</div>
                  <div className="font-bold">Shivane, Pune</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Thali Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-cream rounded-3xl overflow-hidden shadow-lg border border-brand-cream-dark flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-brand-primary mb-2">Aarambh Special Thali</h2>
              <div className="text-2xl font-bold text-brand-secondary mb-6">₹309 <span className="text-sm text-gray-500 font-normal">+ GST</span></div>
              
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start"><span className="text-brand-secondary mr-2">✓</span> Tomato Soup & Roasted Papad</li>
                <li className="flex items-start"><span className="text-brand-secondary mr-2">✓</span> Dal & 2 Punjabi Subji</li>
                <li className="flex items-start"><span className="text-brand-secondary mr-2">✓</span> 2 Roti or 3 Chapati</li>
                <li className="flex items-start"><span className="text-brand-secondary mr-2">✓</span> Jeera Rice</li>
                <li className="flex items-start"><span className="text-brand-secondary mr-2">✓</span> Gulab Jamun or Fruit Salad</li>
                <li className="flex items-start"><span className="text-brand-secondary mr-2">✓</span> Butter Milk</li>
              </ul>
              
              <div className="bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-lg inline-block w-fit mb-8 font-semibold text-sm">
                Available: 11:00 AM – 4:00 PM
              </div>
              
              <Link to="/cart" className="w-full md:w-auto px-8 py-3 bg-brand-primary text-white text-center font-bold rounded-lg hover:bg-brand-primary-light transition-colors">
                Order Thali Now
              </Link>
            </div>
            <div className="md:w-1/2 bg-gray-200 min-h-[300px] flex items-center justify-center relative">
               {/* Placeholder for Thali image */}
               <span className="text-gray-500 font-bold">[ Thali Image ]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Chef's Special Section Placeholder */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Chef's Special</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Our highly recommended signature dishes crafted with authentic spices and fresh ingredients.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* We will map real data here later */}
            {[
              { name: 'Veg Egg Curry', price: '369' },
              { name: 'Paneer Dhamaka', price: '329' },
              { name: 'Paneer Rogan Masala', price: '329' },
              { name: 'Veg Ratnagiri', price: '349' },
              { name: 'Paneer Mumtaj', price: '349' },
              { name: 'Bamboo Biryani', price: '350' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-left flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg text-brand-dark">{item.name}</h3>
                  <div className="text-brand-secondary font-semibold mt-1">₹{item.price}</div>
                </div>
                <button className="h-10 w-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-colors">
                  +
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <Link to="/menu" className="inline-flex items-center text-brand-primary font-bold hover:text-brand-secondary transition-colors">
              VIEW FULL MENU <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      {/* Popular Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Popular Categories</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Explore our wide variety of pure vegetarian delicacies.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {['South Indian', 'Starters', 'Main Course', 'Paneer', 'Chinese', 'Rice & Biryani', 'Beverages', 'Desserts'].map((category, idx) => (
              <Link to={`/menu?category=${category}`} key={idx} className="group relative rounded-2xl overflow-hidden aspect-square flex flex-col justify-end p-4 border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-brand-primary/20 transition-colors z-0"></div>
                <h3 className="font-bold text-lg text-brand-dark group-hover:text-brand-primary transition-colors z-10 bg-white/80 backdrop-blur-sm p-2 rounded-lg inline-block w-fit">
                  {category}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
