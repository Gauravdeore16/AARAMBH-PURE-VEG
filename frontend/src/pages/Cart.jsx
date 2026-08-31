import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, subtotal, gst, deliveryCharge, total } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="pt-8 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-sm text-center max-w-md w-full">
          <div className="w-24 h-24 bg-brand-cream rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingCartIcon className="text-brand-primary" size={40} />
          </div>
          <h2 className="text-2xl font-bold text-brand-dark mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Link to="/menu" className="bg-brand-primary text-white font-bold px-8 py-3 rounded-xl hover:bg-brand-primary-light transition-colors block w-full">
            Browse Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-8 pb-24 md:pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-brand-primary mb-8">Your Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 hidden md:grid grid-cols-12 text-sm font-bold text-gray-500 uppercase tracking-wider">
              <div className="col-span-6">Product</div>
              <div className="col-span-3 text-center">Quantity</div>
              <div className="col-span-3 text-right">Subtotal</div>
            </div>
            
            <div className="divide-y divide-gray-100">
              {cartItems.map(item => (
                <div key={item.id} className="p-6 flex flex-col md:grid md:grid-cols-12 items-center gap-4 md:gap-0">
                  <div className="col-span-6 flex items-center w-full">
                    <div className="w-20 h-20 bg-gray-200 rounded-xl flex-shrink-0 mr-4 overflow-hidden flex items-center justify-center">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-xs text-gray-400 font-bold">[ IMG ]</span>
                      )}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-lg text-brand-dark">{item.name}</h3>
                      <div className="text-brand-secondary font-semibold">₹{item.price}</div>
                    </div>
                  </div>
                  
                  <div className="col-span-3 flex justify-center w-full md:w-auto">
                    <div className="flex items-center bg-brand-cream rounded-xl p-1 border border-gray-200">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white hover:shadow-sm transition-all text-brand-dark"
                      >
                        {item.quantity === 1 ? <Trash2 size={16} className="text-red-500" /> : <Minus size={16} />}
                      </button>
                      <span className="w-10 text-center font-bold">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white hover:shadow-sm transition-all text-brand-dark"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="col-span-3 text-right font-bold text-lg w-full md:w-auto flex justify-between md:block">
                    <span className="md:hidden text-gray-500">Subtotal:</span>
                    ₹{item.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/3">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
            <h2 className="text-xl font-bold text-brand-dark mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-semibold text-brand-dark">₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>GST (5%)</span>
                <span className="font-semibold text-brand-dark">₹{gst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Charge</span>
                <span className="font-semibold text-brand-dark">
                  {deliveryCharge === 0 ? <span className="text-green-600">Free</span> : `₹${deliveryCharge.toFixed(2)}`}
                </span>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-brand-dark">Total</span>
                <span className="text-2xl font-bold text-brand-secondary">₹{total.toFixed(2)}</span>
              </div>
              {deliveryCharge > 0 && (
                <p className="text-xs text-gray-500 mt-2 text-right">Add ₹{(500 - subtotal).toFixed(2)} more for free delivery</p>
              )}
            </div>
            
            <Link to="/checkout" className="w-full bg-brand-primary text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center hover:bg-brand-primary-light transition-colors shadow-md">
              Proceed to Checkout <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Icon for empty cart
function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
