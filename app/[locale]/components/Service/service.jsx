"use client";

import React from "react";
import { FaCheese } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Fade } from "react-awesome-reveal";

const CleaningServicesLayout = ({locale} ) => {
  const t = useTranslations("service");
  
  const services = [
    {
      image: "/Icon/101.svg",
      title: t("service1.title"),
      description: t("service1.description"),
    },
    {
      image: "/Icon/102.svg",
      title: t("service2.title"),
      description: t("service2.description"),
    },
    {
      image: "/Icon/103.svg",
      title: t("service3.title"),
      description: t("service3.description"),
    },
    {
      image: "/Icon/104.svg",
      title: t("service4.title"),
      description: t("service4.description"),
    },
  ];

  return (
    <div className=" mx-auto max-w-7xl px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/2 space-y-8">
          <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce>
            <div>
              <h3 className="text-green700 text-sm font-semibold mb-2">
                {t("title")}
              </h3>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent">
                {t("h2")}
              </h2>
            </div>
            <p className="text-gray700">
              <span className="font-semibold">{t("span")}</span>{" "}
              {t("paragraph")}
            </p>
            <ul className="space-y-2">
              {[1, 2, 3, 4, 5].map((index) => (
                <li key={index} className="flex items-center gap-4">
                  <Image
                    src={"/Icon/svgrepo.svg"}
                    alt="phone-image"
                    width={20}
                    height={20}
                  />
                  <span className="text-gray700">{t(`listItem${index}`)}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/Devis`}
                className="bg-gradient-to-r from-blue600 to-red600 text-white px-6 py-4 rounded-lg font-bold text-md"
              >
                {t("butttonDemande")}
              </Link>
              <Link
                href="#Contact"
                className="bg-gradient-to-r from-blue600 to-red600 text-white px-6 py-4 rounded-lg font-bold text-md"
              >
                {t("butttonContact")}
              </Link>
            </div>
          </Fade>
        </div>
        <Fade direction="up" delay={1000} cascade damping={0.1} triggerOnce>
          <div className="lg:w-2/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
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
export default CleaningServicesLayout ;