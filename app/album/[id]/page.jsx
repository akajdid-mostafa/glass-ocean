'use client'; // Enable client-side rendering

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Ensure this import is from 'next/navigation'
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

const fetchAllGalleries = async () => {
  const response = await fetch('https://hono-on-vercel123-54cp.vercel.app/api/galleries');
  const data = await response.json();
  return data;
};

const GalleryDetail = ({ params }) => {
  const { id } = React.use(params); // Unwrap params with React.use
  const [galleryAlbum, setGalleryAlbum] = useState(null);
  const { t } = useTranslation(); // Use translation hook

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const galleries = await fetchAllGalleries();
        const album = galleries.find((album) => album.id === parseInt(id));
        setGalleryAlbum(album);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    if (galleryAlbum) {
      Fancybox.bind('[data-fancybox="gallery"]'); // Initialize Fancybox
    }
  }, [galleryAlbum]);

  if (!galleryAlbum) {
    return <div className="text-center py-4">Loading...</div>; // Loading state
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <section className="flex-grow mb-20">
        <div className="mt-20 container mx-auto px-4 lg:px-8 max-w-7xl">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t(galleryAlbum.title)} {/* Display album title */}
          </h1>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryAlbum.img.map((url, index) => (
              <div
                className="rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                key={index}
                role="button"
                aria-label={`Gallery image ${index + 1}`}
              >
                <a data-fancybox="gallery" href={url} data-caption={`Image ${index + 1}`}>
                  <img
                    src={url}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryDetail;