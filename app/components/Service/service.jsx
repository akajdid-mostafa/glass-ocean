"use client"; // Add this line at the very top

import { FaCheese } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export default function CleaningServicesLayout() {
  return (
    <div className=" mx-auto max-w-7xl px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/2 space-y-8">
          <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce>
            <div>
              <h3 className="text-green700 text-sm font-semibold mb-2">
                Nos services de propreté modulables
              </h3>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent">
                UNE OFFRE SUR-MESURE POUR VOUS
              </h2>
            </div>
            <p className="text-gray700">
              <span className="font-semibold">
                Bénéficiez d&apos;un service de qualité
              </span>{" "}
              adapté à vos besoins et à votre budget. Nos prestations de
              nettoyage sont entièrement personnalisables pour répondre au mieux
              à vos attentes.
            </p>
            <ul className="space-y-2">
              {[
                "Techniques de nettoyage de vos locaux.",
                "Durée de votre contrat.",
                "Fréquence de passage de nos agents de propreté.",
                "Périodicité des contrôles qualité.",
                "Espace Client pour le suivi de vos prestations.",
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <Image
                    src={"/Icon/svgrepo.svg"}
                    alt="phone-image"
                    width={20}
                    height={20}
                  />
                  <span className="text-gray700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href='/Devis' className="bg-gradient-to-r from-blue600 to-red600 text-white px-6 py-4 rounded-lg font-bold text-md">
                OBTENIR LE DEVIS DE NETTOYAGE
              </Link>
              <Link href='#Contact' className="bg-gradient-to-r from-blue600 to-red600 text-white px-6 py-3 rounded-lg font-bold text-md">
              CONTACTEZ-NOUS
              </Link>
            </div>
          </Fade>
        </div>
        <Fade direction="up" delay={1000} cascade damping={0.1} triggerOnce>
          <div className="lg:w-2/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                image: "/Icon/101.svg",
                title: "SERVICES DE NETTOYAGE REGULIERS",
                description:
                  "Nettoyage réguliers, approvisionnement en produits hygiène, gestion de vos déchets,...",
              },
              {
                image: "/Icon/102.svg",
                title: "DESINFECTION DE VOS LOCAUX",
                description:
                  "Désinfection des points de contact, désinfection par nébulisation,...",
              },
              {
                image: "/Icon/103.svg",
                title: "SERVICES DE NETTOYAGE COMPLEMENTAIRES",
                description:
                  "Vitrerie, entretien et rénovation des sols, nettoyage des façades et autres services,...",
              },
              {
                image: "/Icon/104.svg",
                title: "REMISES EN ETAT",
                description: "Après travaux, après sinistre, ponctuelle.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={60}
                  height={60}
                />
                <h3 className="mt-4 mb-2 font-bold bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="text-gray700 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
}
