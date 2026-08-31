import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckCircle } from 'lucide-react';

export default function Checkout() {
  const { cartItems, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    paymentMethod: 'UPI'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format WhatsApp Message
    const orderDetails = cartItems.map(item => `${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}`).join('%0a');
    const message = `*New Order - Aarambh Pure Veg*%0a%0a*Customer Details:*%0aName: ${formData.name}%0aPhone: ${formData.phone}%0aEmail: ${formData.email}%0a%0a*Delivery Address:*%0a${formData.address}%0a%0a*Order Items:*%0a${orderDetails}%0a%0a*Payment Method:* ${formData.paymentMethod}%0a*Total Amount:* ₹${total.toFixed(2)}`;
    
    const whatsappUrl = `https://wa.me/9185100316?text=${message}`;
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(whatsappUrl, '_blank');
      clearCart();
    }, 1500);
  };

  if (cartItems.length === 0 && !isSuccess) {
    navigate('/cart');
    return null;
  }

  if (isSuccess) {
    return (
      <div className="pt-20 pb-20 max-w-2xl mx-auto px-4 text-center min-h-[70vh] flex flex-col justify-center">
        <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-brand-dark mb-4">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-2">Order #AR1024 has been confirmed.</p>
        <p className="text-gray-600 mb-8">We have sent the confirmation to your WhatsApp and Email.</p>
        <div className="flex gap-4 justify-center">
          <button 
            onClick={() => navigate('/menu')}
            className="px-8 py-3 bg-brand-primary text-white font-bold rounded-lg hover:bg-brand-primary-light transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-8 pb-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-brand-primary mb-8">Checkout</h1>
      
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-brand-dark mb-4 pb-2 border-b border-gray-100">Customer Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                <input required type="text" name="name" onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                <input required type="tel" name="phone" onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                <input type="email" name="email" onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none" />
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-brand-dark mb-4 pb-2 border-b border-gray-100">Delivery Address</h2>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Complete Address *</label>
              <textarea required name="address" rows="3" onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none"></textarea>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-brand-dark mb-4 pb-2 border-b border-gray-100">Payment Method</h2>
            <div className="flex flex-col space-y-3">
              <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input type="radio" name="paymentMethod" value="UPI" checked={formData.paymentMethod === 'UPI'} onChange={handleChange} className="w-5 h-5 text-brand-primary border-gray-300 focus:ring-brand-primary" />
                <span className="ml-3 font-semibold text-gray-700">UPI (Google Pay, PhonePe)</span>
              </label>
              <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input type="radio" name="paymentMethod" value="CARD" checked={formData.paymentMethod === 'CARD'} onChange={handleChange} className="w-5 h-5 text-brand-primary border-gray-300 focus:ring-brand-primary" />
                <span className="ml-3 font-semibold text-gray-700">Credit / Debit Card</span>
              </label>
              <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input type="radio" name="paymentMethod" value="CASH" checked={formData.paymentMethod === 'CASH'} onChange={handleChange} className="w-5 h-5 text-brand-primary border-gray-300 focus:ring-brand-primary" />
                <span className="ml-3 font-semibold text-gray-700">Cash on Delivery</span>
              </label>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-8">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg text-gray-600">Total Amount to Pay:</span>
              <span className="text-3xl font-bold text-brand-secondary">₹{total.toFixed(2)}</span>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-brand-primary text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center hover:bg-brand-primary-light transition-colors shadow-md disabled:opacity-70"
            >
              {isSubmitting ? 'Processing...' : 'Place Order Now'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
