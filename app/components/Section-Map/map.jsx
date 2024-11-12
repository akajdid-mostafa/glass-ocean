"use client"; // Add this directive at the top of the file

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export default function MoroccoMap() {
  return (
    <div className="w-full bg-gradient-to-b from-blue200 via-Purple200 to-white">
      <div style={{ top: "-10px" }}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "40px" }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between p-8">
        <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0 relative">
          <Fade direction={"up"} delay={800} triggerOnce={true}>
            <h1 className="text-3xl font-bold text-black mb-4">
              Trouver la Direction Régionale la Plus Proche
            </h1>
            <h2 className="text-lg font-semibold text-blue600 mb-4">
              Votre Société de Nettoyage Partout au Maroc
            </h2>
            <p className="text-gray700 mb-8">
              Pour répondre à vos besoins de propreté sur mesure, nous vous
              accompagnons où que vous soyez au Maroc. Grâce à notre réseau,
              nous couvrons tout le pays, de Tanger à Dakhla, en passant par
              Agadir, Marrakech, Casablanca, et Rabat.
            </p>
            <Link href="/Devis">
              <button className="w-full lg:w-auto hover:bg-gray700 bg-gradient-to-r from-blue600 to-red600 text-white px-6 py-4 rounded-lg font-bold text-md">
              Découvrez les villes où nous intervenons
              </button>
            </Link>
          </Fade>
        </div>
        <div className="w-full lg:w-1/2 pl-0 lg:pl-8 mb-8 lg:mb-0">
          <Fade direction={"up"} delay={400} triggerOnce={true}>
            <Image
              src="/images/Secction-Map/maroc.svg"
              alt="Carte du Maroc avec les principales villes"
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
}
