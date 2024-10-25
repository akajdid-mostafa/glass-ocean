"use client"; // Add this directive at the top of the file

import React from 'react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

export default function MoroccoMap() {
  return (
    <div className="w-full bg-gradient-to-b from-blue200 via-Purple200 to-white">
      <div style={{ top: '-10px' }}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '40px' }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between p-8">
        {/* Left Section (Image and Other Content) */}
        <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0 relative">
        <Fade direction={'up'} delay={800} triggerOnce={true}>
            <h1 className="text-3xl font-bold text-black mb-4">
              TROUVER LA DIRECTION RÉGIONALE LA PLUS PROCHE DE VOUS
            </h1>
            <h2 className="text-lg font-semibold text-blue600 mb-4">
              Société de nettoyage dans votre région
            </h2>
            <p className="text-gray700 mb-8">
              Pour répondre à vos besoins de propreté avec une approche sur mesure, nous mettons un point d&apos;honneur à rester à vos côtés où que vous soyez au Maroc. Avec notre réseau d&apos;entreprises de nettoyage, nous couvrons l&apos;ensemble du territoire, de Tanger à Laâyoune, en passant par Casablanca, Rabat et Marrakech.
            </p>
            <button className="w-full lg:w-auto hover:bg-gray700 bg-gradient-to-r from-blue600 to-red600 text-white px-6 py-4 rounded-lg font-bold text-md">
              Discover the cities we are available in
            </button>
          </Fade>
        </div>

        {/* Right Section (Text) */}
        <div className="w-full lg:w-1/2 pl-0 lg:pl-8 mb-8 lg:mb-0">
        <Fade direction={'up'} delay={400} triggerOnce={true}>
            <Image
              src="/images/Secction-Map/maroc.png"
              alt="Carte du Maroc avec les principales villes"
              width={500}
              height={500}
              className="w-full h-auto"
            />
            {/* <div
              className="absolute"
              style={{
                top: '25%',
                left: '65%',
                transform: 'translate(-50%, -50%)',
                background: 'linear-gradient(to right, #2563eb, #f43f5e)',
                color: 'white',
                padding: '4px 10px',
                borderRadius: '5px',
              }}
            >
              Casablanca
            </div> */}
          </Fade>
        </div>
      </div>
    </div>
  );
}
