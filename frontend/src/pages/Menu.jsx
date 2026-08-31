import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import FoodCard from '../components/FoodCard';
import FoodDetailsModal from '../components/FoodDetailsModal';
import { menuItems, menuCategories } from '../data/menuData';

export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sync state if URL changes
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && cat !== activeCategory) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
    setSearchQuery('');
  };

  const filteredMenu = useMemo(() => {
    let filtered = menuItems;

    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(lowerQuery) || 
        item.description.toLowerCase().includes(lowerQuery)
      );
    } else if (activeCategory !== 'All') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  const openFoodDetails = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-8 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-brand-primary mb-4">Our Menu</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Discover the finest pure vegetarian dishes prepared with love and authentic spices.</p>
      </div>
      
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8 relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
          <Search size={20} />
        </div>
        <input 
          type="text"
          placeholder="Search food (e.g. paneer, dosa, soup)..."
          className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none shadow-sm transition-all"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Category Filter */}
      {!searchQuery && (
        <div className="flex overflow-x-auto pb-4 mb-8 gap-3 no-scrollbar snap-x scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full font-semibold transition-colors snap-start flex-shrink-0 ${
                activeCategory === category 
                  ? 'bg-brand-primary text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-brand-cream border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Menu Grid */}
      {filteredMenu.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMenu.map(item => (
            <FoodCard key={item.id} item={item} onClick={openFoodDetails} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
          <p className="text-xl text-gray-500 font-semibold mb-2">No items found</p>
          <p className="text-gray-400">Try adjusting your search or category filter.</p>
          <button 
            onClick={() => { setSearchQuery(''); handleCategoryClick('All'); }}
            className="mt-6 text-brand-primary font-bold hover:underline"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Food Details Modal */}
      <FoodDetailsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        item={selectedItem} 
      />
    </div>
  );
}
