export default function Offers() {
  return (
    <div className="pt-8 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-brand-primary mb-8 text-center">Current Offers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-brand-secondary border-dashed text-center">
          <h2 className="text-2xl font-bold text-brand-primary mb-2">10% OFF</h2>
          <p className="text-gray-600 mb-4">On orders above ₹500</p>
          <div className="bg-brand-cream-dark px-4 py-2 font-mono font-bold inline-block mb-4">WELCOME10</div>
          <br />
          <button className="px-6 py-2 bg-brand-primary text-white font-bold rounded-lg hover:bg-brand-primary-light">Order Now</button>
        </div>
      </div>
    </div>
  );
}
