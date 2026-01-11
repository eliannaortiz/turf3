import { useState } from 'react';
import { X } from 'lucide-react';
import { galleryImages } from '../data/siteData';
import PageHero from '../components/ui/PageHero';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'cricket', label: 'Cricket' },
    { id: 'football', label: 'Football' },
    { id: 'pickleball', label: 'Pickleball' },
    { id: 'snooker', label: 'Snooker' },
    { id: 'events', label: 'Events' },
  ];

  const filteredImages =
    activeFilter === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Explore moments captured at Turf 360. See the action, the fun, and the community."
        backgroundImage="https://images.pexels.com/photos/3621185/pexels-photo-3621185.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section-padding bg-dark-950">
        <div className="container-custom mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-turf-500 text-white'
                    : 'bg-dark-800 text-dark-400 hover:bg-dark-700 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image.src)}
                className={`cursor-pointer overflow-hidden rounded-xl group ${
                  index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className={`relative ${index % 5 === 0 ? 'aspect-square' : 'aspect-[4/3]'}`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                      View
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-dark-500 text-lg">No images found for this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-dark-900">
        <div className="container-custom mx-auto text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
            Share Your Moments
          </h2>
          <p className="text-dark-400 mb-6 max-w-xl mx-auto">
            Tag us on Instagram @turf_360 and your photos might be featured in our gallery!
          </p>
          <a
            href="https://instagram.com/turf_360"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Follow Us on Instagram
          </a>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-dark-950/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-turf-400 transition-colors"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
