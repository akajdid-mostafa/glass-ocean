"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { useTranslations } from "next-intl";

const ServicesSection = ({ locale }) => {
  const t = useTranslations("service2");

  const services = [
    {
      link: `/${locale}/nettoyage-des-interfaces`,
      title: t("service1.title"),
      description: t("service1.description"),
      image: "/images/service/facade.jpg?height=80&width=80",
    },
    {
      link: `/${locale}/nettoyage-des-panneaux-solaires`,
      title: t("service2.title"),
      description: t("service2.description"),
      image: "/images/service/service.jpg?height=80&width=80",
    },
    {
      link: `/${locale}/nettoyages-des-fauteuils-et-matelas`,
      title: t("service3.title"),
      description: t("service3.description"),
      image: "/images/service/matela.jpeg?height=80&width=80",
    },
    {
      link: `/${locale}/reparations-electriques-a-domicile`,
      title: t("service4.title"),
      description: t("service4.description"),
      image: "/images/service/check.png?height=80&width=80",
    },
    {
      link: `/${locale}/reparations-de-l-eau-a-domicile`,
      title: t("service5.title"),
      description: t("service5.description"),
      image: "/images/service/plombin.png?height=80&width=80",
    },
    {
      link: `/${locale}/destruction-des-insectes-nuisibles`,
      title: t("service6.title"),
      description: t("service6.description"),
      image:
        "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2FWhatsApp%20Image%202024-11-19%20at%2011.19.07.jpeg?alt=media&token=283c0429-fc21-4ead-b20c-bfbc39b5bbc7?height=80&width=80",
    },
    {
      link: `/${locale}/nettoyage-des-bateaux-et-yachts`,
      title: t("service7.title"),
      description: t("service7.description"),
      image: "/images/boatcleaning/boatclean1.jpg",
    },
    {
      link: `/${locale}/underwater-hull-cleaning`,
      title: t("service8.title"),
      description: t("service8.description"),
      image: "/images/underwaterhull/underwaterhull1.jpg",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50" id="service">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce>
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-2">
              {t("firsttitle")}
            </h3>
            <h2 className="text-5xl bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent font-bold mb-4">
              {t("title")}
            </h2>
            <p className="text-gray700 max-w-2xl mx-auto">{t("description")}</p>
          </Fade>
        </div>
        <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden relative h-full flex flex-col"
                style={{ minHeight: "380px" }} // Adjust as needed for your design
              >
                <Link href={service.link} className="flex flex-col flex-grow">
                  <div className="p-6 flex flex-col flex-grow">
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
                    <div className="flex items-center justify-center mt-auto">
                      <p className="bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent text-center text-lg font-bold hover-underline">
                        {t("action")}
                        <ChevronRightIcon
                          className="text-red600 font-bold"
                          width={20}
                          height={20}
                        />
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-r from-blue600 to-red600 rounded-bl-full opacity-50" />
                </Link>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
};
export default ServicesSection;
