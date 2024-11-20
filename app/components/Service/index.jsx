"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const services = [
  {
    link: "/nettoyage-des-interfaces",
    title: "Nettoyage des Interfaces",
    description:
      "Nous réalisons un nettoyage soigné des interfaces pour assurer une clarté parfaite et un fonctionnement optimal.",
    image: "/images/service/facade.jpg?height=80&width=80",
    action: "En savoir plus",
  },
  {
    link: "/nettoyage-des-panneaux-solaires",
    title: "Nettoyage des Panneaux Solaires",
    description:
      "Nous nettoyons vos panneaux solaires pour maximiser leur efficacité en éliminant poussière et impuretés.",
    image: "/images/service/service.jpg?height=80&width=80",
    action: "En savoir plus",
  },
  {
    link: "/reparations-electriques-a-domicile",
    title: "reparations electriques a domicile",
    description:
      "Nous intervenons rapidement pour réparer vos installations électriques à domicile, garantissant sécurité et conformité.",
    image: "/images/service/check.png?height=80&width=80",
    action: "En savoir plus",
  },
  {
    link: "/reparations-de-l-eau-a-domicile",
    title: "reparations de l'eau a domicile",
    description:
      "Nous intervenons rapidement pour réparer vos installations de plomberie à domicile, assurant un service fiable et durable.",
    image: "/images/service/plombin.png?height=80&width=80",
    action: "En savoir plus",
  },
  {
    link: "/destruction-des-insectes-nuisibles",
    title: "destruction des insectes nuisibles",
    description:
      "Nous éliminons efficacement les insectes nuisibles de votre domicile, garantissant un environnement sain et sécurisé.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2FWhatsApp%20Image%202024-11-19%20at%2011.19.07.jpeg?alt=media&token=283c0429-fc21-4ead-b20c-bfbc39b5bbc7?height=80&width=80",
    action: "En savoir plus",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 bg-gray-50" id="service">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce>
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-2">
              Nos Services
            </h3>
            <h2 className="text-5xl bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent font-bold mb-4">
              Services les plus populaires
            </h2>
            <p className="text-gray700 max-w-2xl mx-auto">
              Nous proposons une large gamme de services de nettoyage pour que
              votre espace reste impeccable et confortable. Choisissez parmi nos
              options les plus populaires ci-dessous.
            </p>
          </Fade>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Fade direction="up" delay={1000} cascade damping={0.1} triggerOnce>
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden relative"
              >
                <Link href={service.link}>
                  <div className="p-6">
                    <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue600 to-red600 flex items-center justify-center overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={144}
                        height={144}
                        className="rounded-full object-cover w-36 h-36"
                      />
                    </div>
                    <h4 className="text-xl font-semibold mb-2 text-center">
                      {service.title}
                    </h4>
                    <p className="text-gray700 text-center mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-center">
                      {/* <Link href={service.link}> */}
                        <p className=" bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent text-center text-lg font-bold  mt-2 hover-underline">
                          {service.action}
                          <ChevronRightIcon
                            className="text-red600 font-bold"
                            width={20}
                            height={20}
                          />
                        </p>
                      {/* </Link> */}
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-r from-blue600 to-red600 rounded-bl-full opacity-50" />
                </Link>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
}
