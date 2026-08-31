import { Link } from 'react-router-dom';
import { ShoppingCart, User, LogOut, Menu as MenuIcon, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { cartCount } = useCart();
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-brand-primary text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-heading font-bold text-brand-gold">
              Aarambh
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <Link to="/menu" className="hover:text-brand-gold transition-colors">Menu</Link>
            <Link to="/about" className="hover:text-brand-gold transition-colors">About</Link>
            <Link to="/gallery" className="hover:text-brand-gold transition-colors">Gallery</Link>
            <Link to="/offers" className="hover:text-brand-gold transition-colors">Offers</Link>
            <Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:text-brand-gold transition-colors">
              <Search size={20} />
            </button>
            <Link to="/cart" className="p-2 hover:text-brand-gold transition-colors relative">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-brand-secondary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            
            {isAuthenticated ? (
              <div className="hidden md:flex items-center space-x-4">
                {user?.role === 'ADMIN' && (
                  <Link to="/admin" className="text-sm font-bold text-brand-gold hover:text-white">Admin</Link>
                )}
                <button onClick={logout} className="p-2 hover:text-brand-gold transition-colors" title="Logout">
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <Link to="/login" className="hidden md:block p-2 hover:text-brand-gold transition-colors">
                <User size={20} />
              </Link>
            )}
            
            <button className="md:hidden p-2 hover:text-brand-gold transition-colors">
              <MenuIcon size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
