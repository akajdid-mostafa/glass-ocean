'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Camera, Image as ImageIcon } from "lucide-react"

type Album = {
  id: string
  title: string
  coverImage: string
  photoCount: number
}

const albums: Album[] = [
  { id: "1", title: "Summer Escapades", coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80", photoCount: 42 },
  { id: "2", title: "Family Reunion", coverImage: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80", photoCount: 56 },
  { id: "3", title: "Urban Exploration", coverImage: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80", photoCount: 28 },
  { id: "4", title: "Rustic Wedding", coverImage: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80", photoCount: 164 },
  { id: "5", title: "Graduation Day", coverImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80", photoCount: 35 },
  { id: "6", title: "Road Trip Adventures", coverImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80", photoCount: 89 },
  { id: "7", title: "Culinary Journey", coverImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", photoCount: 52 },
  { id: "8", title: "Winter Wonderland", coverImage: "https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=800&q=80", photoCount: 73 },
]

export default function Gallery() {
  const [columns, setColumns] = useState(4)

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) setColumns(1)
      else if (window.innerWidth < 768) setColumns(2)
      else if (window.innerWidth < 1024) setColumns(3)
      else setColumns(4)
    }

    updateColumns()
    window.addEventListener('resize', updateColumns)
    return () => window.removeEventListener('resize', updateColumns)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">Photo Albums</h1>
          <p className="text-xl text-gray-300">Capture, collect, and cherish your memories</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {albums.map((album, index) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link href={`/album/${album.id}`} className="block group">
                <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
                  <Image
                    src={album.coverImage}
                    alt={`Cover for ${album.title}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/70 to-pink-500/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h2 className="text-2xl font-bold mb-2 drop-shadow-md">{album.title}</h2>
                    <p className="text-sm flex items-center drop-shadow-md">
                      <ImageIcon className="w-4 h-4 mr-2" />
                      {album.photoCount} photos
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}