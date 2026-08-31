import { Link, useLocation } from 'react-router-dom';
import { Home, UtensilsCrossed, ShoppingCart, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function MobileNav() {
  const location = useLocation();
  const path = location.pathname;
  const { cartCount } = useCart();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center h-16">
        <Link to="/" className={`flex flex-col items-center justify-center w-full h-full ${path === '/' ? 'text-brand-primary' : 'text-gray-500'}`}>
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link to="/menu" className={`flex flex-col items-center justify-center w-full h-full ${path === '/menu' ? 'text-brand-primary' : 'text-gray-500'}`}>
          <UtensilsCrossed size={24} />
          <span className="text-xs mt-1">Menu</span>
        </Link>
        <Link to="/cart" className={`flex flex-col items-center justify-center w-full h-full relative ${path === '/cart' ? 'text-brand-primary' : 'text-gray-500'}`}>
          <ShoppingCart size={24} />
          <span className="text-xs mt-1">Cart</span>
          {cartCount > 0 && (
            <span className="absolute top-2 right-6 bg-brand-secondary text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
        <Link to="/contact" className={`flex flex-col items-center justify-center w-full h-full ${path === '/contact' ? 'text-brand-primary' : 'text-gray-500'}`}>
          <Phone size={24} />
          <span className="text-xs mt-1">Call</span>
        </Link>
      </div>
    </div>
  );
}
