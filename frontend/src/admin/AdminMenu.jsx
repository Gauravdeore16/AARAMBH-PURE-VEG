import { useState, useEffect } from 'react';
import { Search, Plus, Edit2, Trash2 } from 'lucide-react';
import { menuItems as initialData } from '../data/menuData';

export default function AdminMenu() {
  const [items, setItems] = useState(initialData);

  const toggleAvailability = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, isAvailable: !item.isAvailable } : item
    ));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-72">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <Search size={18} />
          </div>
          <input 
            type="text"
            placeholder="Search menu items..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-brand-primary outline-none"
          />
        </div>
        <button className="bg-brand-primary text-white px-4 py-2 rounded-lg font-bold flex items-center hover:bg-brand-primary-light">
          <Plus size={18} className="mr-2" /> Add Item
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-sm border-b border-gray-100">
              <th className="p-4 font-semibold">Item</th>
              <th className="p-4 font-semibold">Category</th>
              <th className="p-4 font-semibold">Price</th>
              <th className="p-4 font-semibold text-center">Available</th>
              <th className="p-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {items.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg mr-4 flex-shrink-0 flex items-center justify-center">
                    <span className="text-[10px] text-gray-400 font-bold">IMG</span>
                  </div>
                  <div>
                    <div className="font-bold text-brand-dark">{item.name}</div>
                    {item.isChefSpecial && <div className="text-xs text-brand-secondary font-semibold">Chef's Special</div>}
                  </div>
                </td>
                <td className="p-4 font-medium text-gray-600">{item.category}</td>
                <td className="p-4 font-bold text-brand-dark">₹{item.price}</td>
                <td className="p-4 text-center">
                  <button 
                    onClick={() => toggleAvailability(item.id)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${item.isAvailable ? 'bg-green-500' : 'bg-gray-300'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${item.isAvailable ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </td>
                <td className="p-4 text-right">
                  <div className="flex justify-end space-x-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Edit2 size={18} />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
