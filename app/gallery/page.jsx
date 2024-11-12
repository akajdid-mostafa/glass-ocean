'use client'

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";

const fetchAPIData = async () => {
  const response = await fetch('https://hono-on-vercel123-54cp.vercel.app/api/galleries');
  const data = await response.json();
  return data;
};

export default function Gallery() {
  const [albums, setAlbums] = useState([]);
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAPIData();
        const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setAlbums(sortedData);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) setColumns(1);
      else if (window.innerWidth < 768) setColumns(2);
      else if (window.innerWidth < 1024) setColumns(3);
      else setColumns(4);
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent  tracking-tight mb-4">Bienvenue dans notre Galerie !</h1>
          <p className="text-xl text-gray700">Explorez la créativité et l&apos;engagement qui animent notre travail à travers ces images. Profitez de la visite !</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  text-white">
          {albums.length === 0 ? (
            <p></p> 
          ) : (
            albums.map((album, index) => (
              <motion.div
                key={album.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link href={`/album/${album.id}`} className="block group">
                  <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
                    <Image
                      src={album.img[0]} 
                      alt={`Cover for ${album.title}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue600 to-red600 opacity-50 sm:opacity-0 sm:group-hover:opacity-60 transition-opacity duration-300" />
                    <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                      <h2 className="text-2xl font-bold mb-2 drop-shadow-md">{album.title}</h2>
                      <p className="text-sm flex items-center drop-shadow-md">
                        <ImageIcon className="w-4 h-4 mr-2" />
                        {album.numberimage}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
