export default function Gallery() {
  const images = [
    '/images/exterior.jpg',
    '/images/interior_1.jpg',
    '/images/interior_2.jpg',
    '/images/interior_3.jpg',
    '/images/paneer_real.jpg',
    '/images/thali.jpg',
    '/images/biryani.jpg',
    '/images/dosa.jpg'
  ];

  return (
    <div className="pt-8 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-brand-primary mb-8 text-center font-heading">Our Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <div key={i} className="aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img src={src} alt={`Gallery image ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
