import { useState, useEffect } from 'react';
import { X, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function FoodDetailsModal({ item, isOpen, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  // Reset quantity when item changes
  useEffect(() => {
    setQuantity(1);
  }, [item]);

  if (!isOpen || !item) return null;

  const handleAddToCart = () => {
    addToCart(item, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <div className="h-64 bg-gray-200 relative flex items-center justify-center">
          {item.image ? (
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-gray-400 font-bold">[ {item.name} Image ]</span>
          )}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-colors backdrop-blur-md"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-2xl font-bold text-brand-dark">{item.name}</h2>
            <span className="text-xl font-bold text-brand-secondary">₹{item.price}</span>
          </div>
          
          <p className="text-gray-600 mb-6">{item.description}</p>
          
          {item.isAvailable ? (
            <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-4">
              <div className="flex items-center bg-brand-cream rounded-xl p-1 border border-gray-200">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white hover:shadow-sm transition-all text-brand-dark"
                >
                  <Minus size={18} />
                </button>
                <span className="w-10 text-center font-bold text-lg">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white hover:shadow-sm transition-all text-brand-dark"
                >
                  <Plus size={18} />
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="bg-brand-primary hover:bg-brand-primary-light text-white px-8 py-3 rounded-xl font-bold transition-colors flex-grow ml-4 shadow-sm"
              >
                ADD TO CART
              </button>
            </div>
          ) : (
            <div className="border-t border-gray-100 pt-6 mt-4">
              <button 
                disabled
                className="w-full bg-gray-300 text-gray-500 px-8 py-3 rounded-xl font-bold cursor-not-allowed"
              >
                CURRENTLY UNAVAILABLE
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
