import { galleryPhotos } from '../data/galleryData';

export default function Gallery() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-blue-900 mb-4">Our Work</h1>
        <p className="text-xl text-center text-gray-700 mb-12">
          Check out some of our completed projects and products
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryPhotos.map((photo) => (
            <div key={photo.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="aspect-square bg-gray-200 flex items-center justify-center p-2">
                {/* Render the local image */}
                <img
                  src={photo.url}
                  alt={photo.title || `Gallery Image ${photo.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Optional: add title or other info below the image */}
              {photo.title && (
                <div className="p-2 text-center text-gray-800">{photo.title}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
