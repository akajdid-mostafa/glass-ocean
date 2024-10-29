// Add this at the top
"use client";

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HiLocationMarker } from "react-icons/hi";
import { PiPhoneCallFill, PiInstagramLogoFill } from "react-icons/pi";
import { MdMarkEmailRead } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import Link from "next/link";
import { footerDataEn } from '../locales/en/translation';
import { footerDataFr } from '../locales/fr/translation';
import { footerDataAr } from '../locales/ar/translation';
import Image from 'next/image'; // Add this import


const loadClientData = (lang) => {
  switch (lang) {
    case 'fr':
      return footerDataFr;
    case 'ar':
      return footerDataAr;
    case 'en':
    default:
      return footerDataEn; 
  }
};

const Footer = () => {
  const [footerData, setFooterData] = useState({});
  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchData = () => {
      const data = loadClientData(i18n.language);
      setFooterData(data);
    };
    fetchData();
  }, [i18n.language]);

  const {
    socialLinks = [],
    contactInfo = [],
    pageElements = [],
    pagelangague = [],
    ourFormation = [],
    ourServices = [],
    footerText = { logoAlt: "", mainDescription: "", detailedDescription: "", ourServicesTitle: "", ourPageTitle: "", ourlangagueTitle: "", ourFormationTitle: "" },
    footerCopyright = { text: "", company: "", allRightsReserved: "", message: "" }
  } = footerData;
  const { ourServicesTitle, ourPageTitle, ourFormationTitle, ourlangagueTitle } = footerText;
  return (
    <footer className="bg-gradient-to-br from-blue200 via-Purple200 to-blue300  text-black  ">
        <div style={{  top: '-10px' }}>
        <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        style={{ width: '100%', height: '50px' }}
                    >
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="shape-fill"
                            fill="#ffffff"
                        ></path>
                    </svg>
        </div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8" style={{ backgroundImage: 'url("https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map(({ id, Icon, title, content }) => (
            <div key={id} className="flex items-center space-x-3">
              <div className="bg-[#3a86ff] p-2 rounded-md mx-1">
                {Icon === "HiLocationMarker" && <HiLocationMarker className="h-6 w-6 text-white" />}
                {Icon === "PiPhoneCallFill" && <PiPhoneCallFill className="h-6 w-6 text-white" />}
                {Icon === "MdMarkEmailRead" && <MdMarkEmailRead className="h-6 w-6 text-white" />}
              </div>
              <div>
                <p className="text-sm font-bold">{title}</p>
                <p className="text-sm font-semibold " style={{ direction: 'ltr', unicodeBidi: 'plaintext' }}>{content}</p>
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
                  {label === "Facebook" && <FaFacebookF className="h-6 w-6 text-white" />}
                  {label === "Instagram" && <PiInstagramLogoFill className="h-6 w-6 text-white" />}
                  {label === "YouTube" && <IoLogoYoutube className="h-6 w-6 text-white" />}
                  {label === "LinkedIn" && <ImLinkedin2 className="h-6 w-6 text-white" />}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <div className="space-y-2 lg:col-span-1">
            <div className="flex items-center mb-4 space-x-2">
              <Image src="/images/Logo/ocean2.svg" alt={footerText.logoAlt} width={240} height={50} />
            </div>
            <p className="text-sm">{footerText.mainDescription}</p>
            <p className="text-sm">{footerText.detailedDescription}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:col-span-3">
            <FooterLinkSection title={ourServicesTitle} links={ourServices} />
            <FooterLinkSection title={ourPageTitle} links={pageElements} />
            <FooterLinkSection title={ourlangagueTitle} links={pagelangague} />
            <FooterLinkSection title={ourFormationTitle} links={ourFormation} />
          </div>
        </div>
        <div className="mt-2">
          <hr className="content-center my-4 border-t-2 border-gray-300" />
          <div>
            <div className="flex justify-between pb-4">
              <p className="font-semibold text-md">
                {footerCopyright.text} {new Date().getFullYear()}{" "}
                <Link href="/#" className="text-blue600 hover:text-white">
                  {footerCopyright.company}
                </Link>. {footerCopyright.allRightsReserved}
              </p>
              <p className="font-semibold text-md">
                {footerCopyright.message}
                <Link href="/#" className="text-blue600 hover:text-white">
                  Ocean Connecting
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
