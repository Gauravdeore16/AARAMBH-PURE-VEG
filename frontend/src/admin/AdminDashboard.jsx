export default function AdminDashboard() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { title: "Today's Orders", value: '32', color: 'text-blue-600', bg: 'bg-blue-50' },
          { title: "Pending Orders", value: '6', color: 'text-orange-600', bg: 'bg-orange-50' },
          { title: "Completed Orders", value: '26', color: 'text-green-600', bg: 'bg-green-50' },
          { title: "Today's Revenue", value: '₹14,250', color: 'text-brand-primary', bg: 'bg-brand-cream' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
            <span className="text-gray-500 text-sm font-semibold mb-2">{stat.title}</span>
            <span className={`text-3xl font-bold ${stat.color}`}>{stat.value}</span>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-lg font-bold text-brand-dark">Recent Orders</h3>
          <button className="text-sm font-semibold text-brand-primary hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm border-b border-gray-100">
                <th className="p-4 font-semibold">Order ID</th>
                <th className="p-4 font-semibold">Customer</th>
                <th className="p-4 font-semibold">Items</th>
                <th className="p-4 font-semibold">Total</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {[
                { id: '#AR1024', customer: 'Rahul Sharma', items: 'Paneer Dhamaka x2, Bamboo Bir...', total: '₹1008', status: 'PREPARING' },
                { id: '#AR1023', customer: 'Priya Patel', items: 'Masala Dosa x1, Cold Coffee x2', total: '₹420', status: 'READY' },
                { id: '#AR1022', customer: 'Amit Singh', items: 'Aarambh Special Thali x4', total: '₹1297', status: 'COMPLETED' },
              ].map((order, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="p-4 font-bold text-brand-primary">{order.id}</td>
                  <td className="p-4 font-medium">{order.customer}</td>
                  <td className="p-4 text-gray-500">{order.items}</td>
                  <td className="p-4 font-semibold">₹{order.total}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      order.status === 'PREPARING' ? 'bg-orange-100 text-orange-700' :
                      order.status === 'READY' ? 'bg-blue-100 text-blue-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="text-brand-secondary font-semibold hover:underline">Manage</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
