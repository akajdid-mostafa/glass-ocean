"use client";

import { ArrowRight } from "lucide-react";
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";

// This would typically come from a database or API
const services = [
    {
        title: "Nettoyage des interfaces",
        description: "Nous assurons un nettoyage méticuleux des interfaces pour garantir une clarté optimale et un fonctionnement sans faille.",
        image: "/images/service/service.jpg?height=80&width=80"
    },
    {
        title: "Nettoyage des panneaux solaires",
        description: "Nos services de nettoyage des panneaux solaires optimisent leur rendement en éliminant toute poussière et saleté.",
        image: "/images/service/service.jpg?height=80&width=80"
    },
    {
        title: "Nettoyage des maisons terminées",
        description: "Nous offrons un nettoyage des maisons récemment terminées, laissant les espaces impeccables et prêts à occuper.",
        image: "/images/service/service.jpg?height=80&width=80"
    },
    {
        title: "Nettoyage des panneaux d'affichage",
        description: "Nous maintenons vos panneaux d'affichage en parfait état, assurant une visibilité maximale et une présentation soignée.",
        image: "/images/service/service.jpg?height=80&width=80"
    }
]

export default function ServicesSection() {
    return (
        <section className="py-16 px-4 bg-gray-50" id="service">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-12">
                    <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce>
                        <h3 className="text-sm font-semibold uppercase tracking-wide mb-2">Our Services</h3>
                        <h2 className="text-5xl bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent font-bold mb-4">
                            Most Popular Services
                        </h2>
                        <p className="text-gray700 max-w-2xl mx-auto">
                            We offer a wide range of cleaning services to keep your space spotless and comfortable.
                            Choose from our most popular options below.
                        </p>
                    </Fade>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <Fade direction="up" delay={1000} cascade damping={0.1} triggerOnce>
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden relative">
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
                                    <h4 className="text-xl font-semibold mb-2 text-center">{service.title}</h4>
                                    <p className="text-gray700 text-center mb-4">{service.description}</p>
                                    <button className="w-12 h-12 font-bold rounded-full bg-gradient-to-r from-blue600 to-red600 flex items-center justify-center mx-auto">
                                        <ArrowRight className="w-6 h-6 text-white" />
                                    </button>
                                </div>
                                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-r from-blue600 to-red600 rounded-bl-full opacity-50" />
                            </div>
                        ))}
                    </Fade>
                </div>
                <div className="text-center">
                    <Fade direction="up" delay={1200} triggerOnce>
                        <button className="bg-gradient-to-r from-blue600 to-red600 text-white px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-yellow-500 transition-colors">
                            More Services
                        </button>
                    </Fade>
                </div>
            </div>
        </section>
    )
}
