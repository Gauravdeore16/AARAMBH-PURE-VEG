import { Link, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, UtensilsCrossed, ClipboardList, LogOut, Tags, Image as ImageIcon, Star, Settings } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function AdminLayout() {
  const { logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { path: '/admin', name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { path: '/admin/orders', name: 'Orders', icon: <ClipboardList size={20} /> },
    { path: '/admin/menu', name: 'Menu', icon: <UtensilsCrossed size={20} /> },
    { path: '/admin/offers', name: 'Offers', icon: <Tags size={20} /> },
    { path: '/admin/reviews', name: 'Reviews', icon: <Star size={20} /> },
    { path: '/admin/gallery', name: 'Gallery', icon: <ImageIcon size={20} /> },
    { path: '/admin/settings', name: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-primary text-white flex flex-col hidden md:flex h-full">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-brand-gold font-heading">Aarambh Admin</h2>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
                  isActive ? 'bg-brand-primary-light text-white' : 'text-gray-300 hover:bg-brand-primary-light hover:text-white'
                }`}
              >
                {item.icon}
                <span className="font-semibold">{item.name}</span>
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-brand-primary-light">
          <button 
            onClick={logout}
            className="flex items-center space-x-3 px-4 py-3 rounded-xl w-full text-gray-300 hover:bg-red-500 hover:text-white transition-colors"
          >
            <LogOut size={20} />
            <span className="font-semibold">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="bg-white h-16 border-b border-gray-200 flex items-center justify-between px-8 shadow-sm">
          <h2 className="text-xl font-bold text-brand-dark">
            {navItems.find(i => i.path === location.pathname)?.name || 'Dashboard'}
          </h2>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-brand-secondary text-sm font-bold hover:underline">View Website</Link>
            <div className="h-8 w-8 bg-brand-cream rounded-full flex items-center justify-center text-brand-primary font-bold">
              A
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-8 bg-gray-50 z-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
