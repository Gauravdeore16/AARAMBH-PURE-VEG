export default function FoodCard({ item, onClick }) {
  return (
    <div 
      className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col cursor-pointer ${!item.isAvailable ? 'opacity-60' : ''}`}
      onClick={() => onClick(item)}
    >
      <div className="h-48 bg-gray-200 relative flex items-center justify-center">
        {item.image ? (
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-400 font-bold">[ Image ]</span>
        )}
        {!item.isAvailable && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">Currently Unavailable</span>
          </div>
        )}
        {item.isChefSpecial && item.isAvailable && (
          <div className="absolute top-2 left-2 bg-brand-secondary text-white px-2 py-1 rounded text-xs font-bold shadow-sm">
            Chef's Special
          </div>
        )}
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold text-lg text-brand-dark leading-tight">{item.name}</h3>
          </div>
          <p className="text-xs text-gray-500 line-clamp-2 mb-3">{item.description}</p>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-brand-secondary font-bold text-lg">₹{item.price}</span>
          <button 
            className="w-8 h-8 rounded-full bg-brand-cream-dark flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
            disabled={!item.isAvailable}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
