"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { HiLocationMarker } from "react-icons/hi";
import { PiPhoneCallFill, PiInstagramLogoFill } from "react-icons/pi";
import { MdMarkEmailRead } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";



const Footer = ({locale} ) =>  {
  const t = useTranslations("contactInfo");

const socialLinks = [
    { "id": 1, "label": "Facebook", "to": "https://www.facebook.com/the.ocean.connecting/" },
    { "id": 2, "label": "Instagram", "to": "https://www.instagram.com/oceanconnecting.ma/" },
    { "id": 3, "label": "YouTube", "to": "https://www.youtube.com/@OceanConnecting" },
    { "id": 4, "label": "LinkedIn", "to": "https://www.linkedin.com/company/ocean-connecting/?originalSubdomain=ma" }
];
const contactInfo = [
    {
      "id": 1,
      "Icon": "HiLocationMarker",
      "title": t("title1"),
      "content": t("content"),
  },
  {
      "id": 2,
      "Icon": "PiPhoneCallFill",
      "title": t("title2"),
      "content": "+212 704-309787"
  },
  {
      "id": 3,
      "Icon": "MdMarkEmailRead",
      "title": t("title3"),
      "content": "oceanconnecting.ma@gmail.com"
  }
];
const pageElements = [
    { "id": 1, "label": t("Home"), "link": `/${locale}/contact`},
    { "id": 2, "label": t("Devis"), "link": `/${locale}/Devis`},
    { "id": 3, "label": t("service"), "link": "/#service" },
    { "id": 4, "label": t("gallery"), "link": `/${locale}/gallery` },
    { "id": 5, "label": t("about"), "link": "/#about-section" },
    { "id": 6, "label": t("contact"), "link": `/${locale}/contact`}
    
      
];
const ourFormation = [
    { "id": 1, "label": t("facade"), "link": `/${locale}/nettoyage-des-interfaces` },
      { "id": 2, "label": t("solaire"), "link": `/${locale}/nettoyage-des-panneaux-solaires` },
      { "id": 3, "label": t("matelas"), "link": `/${locale}/nettoyages-des-fauteuils-et-matelas` },
      { "id": 4, "label": t("electrical"), "link": `/${locale}/reparations-electriques-a-domicile` },
      { "id": 5, "label": t("plomberie"), "link": `/${locale}/reparations-de-l-eau-a-domicile` },
      { "id": 6, "label": t("insectes"), "link": `/${locale}/destruction-des-insectes-nuisibles` }
      
];
const ourServices = [
  { "id": 1, "label": t("dev"), "link": "https://www.oceanconnecting.dev/" },
  { "id": 2, "label": t("langague"), "link": "https://oceanconnecting.info/" },
  { "id": 3, "label": t("formation"), "link": "https://www.oceanconnecting.net/" },
  { "id": 4, "label": t("nettoyage"), "link": "https://www.oceanconnecting.org/" },
  { "id": 5, "label": t("contract"), "link": "https://www.oceanconnecting.org/" } 
];




  return (
    <footer className="bg-gradient-to-br from-blue200 via-Purple200 to-blue300  text-black  ">
      <div style={{ top: "-10px" }}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "50px" }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
      <div
        className="container mx-auto px-4 md:px-6 lg:px-8"
        style={{
          backgroundImage:
            'url("https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map(({ id, Icon, title, content }) => (
            <div key={id} className="flex items-center space-x-3">
              <div className="bg-[#3a86ff] p-2 rounded-md mx-1">
                {Icon === "HiLocationMarker" && (
                  <HiLocationMarker className="h-6 w-6 text-white" />
                )}
                {Icon === "PiPhoneCallFill" && (
                  <PiPhoneCallFill className="h-6 w-6 text-white" />
                )}
                {Icon === "MdMarkEmailRead" && (
                  <MdMarkEmailRead className="h-6 w-6 text-white" />
                )}
              </div>
              <div>
                <p className="text-sm font-bold">{title}</p>
                <p
                  className="text-sm font-semibold "
                  style={{ direction: "ltr", unicodeBidi: "plaintext" }}
                >
                  {content}
                </p>
              </div>
            </div>
          ))}
          <div className="flex items-center space-x-3">
            {socialLinks.map(({ id, label, to }) => (
              <div key={id} className="bg-[#3a86ff] p-2 rounded-md mx-1">
                <Link
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300 ease-in-out hover:text-blue-500"
                  aria-label={label}
                >
                  {label === "Facebook" && (
                    <FaFacebookF className="h-6 w-6 text-white" />
                  )}
                  {label === "Instagram" && (
                    <PiInstagramLogoFill className="h-6 w-6 text-white" />
                  )}
                  {label === "YouTube" && (
                    <IoLogoYoutube className="h-6 w-6 text-white" />
                  )}
                  {label === "LinkedIn" && (
                    <ImLinkedin2 className="h-6 w-6 text-white" />
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1n  gap-6 lg:grid-cols-5">
          <div className="space-y-2 lg:col-span-2 mr-6 ">
            <div className="flex items-center mb-4 space-x-2">
              <Image
                src="/images/Logo/ocean2.svg"
                alt="Ocean Logo"
                width={240}
                height={50}
              />
            </div>
            <p className="text-sm">{t("titleabout")} </p>
            <p className="text-sm">{t("Text")} </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:col-span-3  ">
            <FooterLinkSection
              title={t("part1")} 
              links={pageElements}
              className="items-center"
            />
            <FooterLinkSection
              title={t("part2")} 
              links={ourFormation}
              className="items-center"
            />
            
          </div>
        </div>
        <div className="mt-2">
          <hr className="content-center my-4 border-t-2 border-gray700" />
          <div>
            <div className="flex flex-col items-center space-y-2 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4 pb-4">
              <p className="font-semibold text-md">
              {t("droit1")}   {new Date().getFullYear()}{" "}
                <Link href="/#" className="text-blue600 hover:text-white">
                {t("ocean")} 
                </Link>
                {t("droit")} 
              </p>
              <p className="font-semibold text-md ">
              {t("thanks")} 
                <Link href="/#" className="text-blue600 ml-2 hover:text-white">
                {t("ocean")} 
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

function FooterLinkSection({ title, links }) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-bold">{title}</h3>
      <ul className="space-y-1">
        {links.map(({ id, label, link }) => (
          <li key={id}>
            <Link href={link} className="text-sm hover:text-[#3a86ff]">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Footer;
