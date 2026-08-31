import { useState } from 'react';
import { Search, Eye } from 'lucide-react';

export default function AdminOrders() {
  const [filter, setFilter] = useState('ALL');
  
  const orders = [
    { id: '#AR1024', time: '10 mins ago', customer: 'Rahul Sharma', phone: '9876543210', type: 'DELIVERY', items: 'Paneer Dhamaka x2, Bamboo Biryani x1', total: '1008', status: 'PLACED' },
    { id: '#AR1023', time: '25 mins ago', customer: 'Priya Patel', phone: '9876543211', type: 'TAKEAWAY', items: 'Masala Dosa x1, Cold Coffee x2', total: '420', status: 'PREPARING' },
    { id: '#AR1022', time: '1 hr ago', customer: 'Amit Singh', phone: '9876543212', type: 'DELIVERY', items: 'Aarambh Special Thali x4', total: '1297', status: 'OUT_FOR_DELIVERY' },
    { id: '#AR1021', time: '2 hrs ago', customer: 'Sneha', phone: '9876543213', type: 'DINE_IN', items: 'Veg Crispy x1, Hakka Noodles x1', total: '460', status: 'COMPLETED' },
  ];

  const filteredOrders = filter === 'ALL' ? orders : orders.filter(o => {
    if (filter === 'ACTIVE') return !['COMPLETED', 'CANCELLED'].includes(o.status);
    return o.status === filter;
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-2">
          {['ALL', 'ACTIVE', 'PLACED', 'PREPARING', 'COMPLETED'].map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${filter === f ? 'bg-brand-primary text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="relative w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <Search size={18} />
          </div>
          <input 
            type="text"
            placeholder="Search order ID or phone..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-brand-primary outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredOrders.map(order => (
          <div key={order.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col lg:flex-row lg:items-center justify-between">
            <div className="flex-1 mb-4 lg:mb-0">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-xl font-bold text-brand-primary">{order.id}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  order.type === 'DELIVERY' ? 'bg-purple-100 text-purple-700' :
                  order.type === 'TAKEAWAY' ? 'bg-blue-100 text-blue-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {order.type}
                </span>
                <span className="text-sm text-gray-500">{order.time}</span>
              </div>
              <div className="text-gray-800 font-semibold mb-1">{order.customer} <span className="text-gray-500 font-normal">({order.phone})</span></div>
              <div className="text-sm text-gray-500 truncate max-w-lg">{order.items}</div>
            </div>
            
            <div className="flex items-center lg:justify-end space-x-6">
              <div className="text-right">
                <div className="text-sm text-gray-500">Total</div>
                <div className="text-xl font-bold text-brand-dark">₹{order.total}</div>
              </div>
              
              <div className="flex flex-col space-y-2 w-48">
                <select 
                  className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-brand-primary focus:border-brand-primary block w-full p-2.5 outline-none font-bold"
                  defaultValue={order.status}
                >
                  <option value="PLACED">Placed</option>
                  <option value="CONFIRMED">Confirmed</option>
                  <option value="PREPARING">Preparing</option>
                  <option value="READY">Ready</option>
                  <option value="OUT_FOR_DELIVERY">Out for Delivery</option>
                  <option value="COMPLETED">Completed</option>
                  <option value="CANCELLED">Cancelled</option>
                </select>
              </div>
              
              <button className="p-3 bg-brand-cream text-brand-primary rounded-xl hover:bg-brand-primary hover:text-white transition-colors">
                <Eye size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
