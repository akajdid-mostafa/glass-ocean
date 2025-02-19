"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React, { useEffect, useState, ChangeEvent, useRef } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Image from "next/image";
import { MdNavigateNext } from "react-icons/md";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { getMessages } from "next-intl/server";

interface NavbarProps {
  locale: string;
}

const Navbar: React.FC<NavbarProps> = ({ locale }) => {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Navbar");
  const [activeHash, setActiveHash] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track whether the dropdown is open
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Ref for the dropdown menu

  // Handle language change
  const handleLanguageChange = (newLocale: string) => {
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || null);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

  const navigation = [
    { name: t("home"), href: `/${locale}/#home-section` },
    {
      name: t("services"),
      href: `/${locale}/#service`,
      submenu: [
        {
          name: t("facade_cleaning"),
          href: `/${locale}/nettoyage-des-interfaces`,
        },
        {
          name: t("solar_panel_cleaning"),
          href: `/${locale}/nettoyage-des-panneaux-solaires`,
        },
        {
          name: t("fauteuils-et-matelas"),
          href: `/${locale}/nettoyages-des-fauteuils-et-matelas`,
        },
        {
          name: t("home_electrical"),
          href: `/${locale}/reparations-electriques-a-domicile`,
        },
        {
          name: t("plumbing"),
          href: `/${locale}/reparations-de-l-eau-a-domicile`,
        },
        {
          name: t("pest_control"),
          href: `/${locale}/destruction-des-insectes-nuisibles`,
        },
        {
          name: t("boat_cleaning"),
          href: `/${locale}/destruction-des-insectes-nuisibles`,
        },
        {
          name: t("hull_underwater"),
          href: `/${locale}/destruction-des-insectes-nuisibles`,
        },
      ],
    },
    { name: t("gallery"), href: `/${locale}/gallery` },
    { name: t("contact"), href: `/${locale}/contact` },
    { name: t("about"), href: `/${locale}/#about-section` },
  ];

  return (
    <Disclosure as="nav" className="navbar relative z-20">
      <div className="mx-auto max-w-7xl p-3 md:p-6 lg:px-8">
        <div className="relative flex h-16 sm:h-12 items-center">
          <div className="flex flex-1 items-center sm:justify-between">
            <Link href="/" className="text-2xl font-semibold text-black ml-4">
              <Image
                src="/images/Logo/ocean1.svg"
                alt="logo"
                width={150}
                height={36}
              />
            </Link>
            <div className="hidden lg:flex items-center border-right">
              <div className="flex justify-end space-x-4">
                {navigation.map((item) => {
                  const [baseHref, hash] = item.href.split("#");
                  const isActive =
                    pathname === baseHref &&
                    (!hash || `#${hash}` === activeHash);

                  return item.submenu ? (
                    <div
                      key={item.name}
                      className="relative group flex items-center"
                    >
                      <Link
                        href={item.href}
                        className={`px-3 py-2 text-lg flex items-center ${
                          isActive ? "text-blue500" : "opacity-50"
                        } hover:text-blue600 hover:opacity-100 space-links`}
                      >
                        {item.name}
                        <MdNavigateNext className="ml-1" />
                      </Link>
                      <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-lg p-2 space-y-2 z-50 transform transition-transform duration-200 scale-95 group-hover:scale-100 min-w-max">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block w-full px-4 py-2 hover:bg-gray300 rounded-lg text-black text-left"
                            dir="rtl"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-3 py-2 rounded-md text-lg font-normal ${
                        isActive
                          ? "font-bold text-blue500"
                          : "opacity-50 hover:text-blue600 font-bold hover:opacity-100"
                      } space-links`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="gap-6 hidden lg:flex">
              <Link href={`/${locale}/Devis`}>
                <button className="flex justify-center text-base w-full font-bold rounded-xl bg-gradient-to-r from-blue600 to-red600 text-white py-2 px-4 lg:px-4 navbutton space-links">
                  {t("Demande_de_Devis")}
                </button>
              </Link>
            </div>

            {/* Custom Dropdown for Language Switcher */}
          </div>
          <div className="relative mx-4" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="rounded-xl px-2 gap-2 py-2 bg-gray200 hover:outline-none focus:outline-none flex items-center"
            >
              <Image
                src={`/images/flag/${locale}.png`}
                alt={locale}
                width={24}
                height={24}
              />

              {locale === "en"
                ? "English"
                : locale === "fr"
                ? "Français"
                : locale === "ar"
                ? "العربية"
                : locale.toUpperCase()}
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2  bg-white shadow-lg rounded-lg w-40 z-50">
                <button
                  onClick={() => handleLanguageChange("fr")}
                  className="w-full flex items-center px-4 py-2 hover:bg-gray300"
                >
                  <Image
                    src="/images/flag/fr.png"
                    alt="Français"
                    width={16}
                    height={16}
                    className="mr-2 ml-2"
                  />
                  Français
                </button>
                <button
                  onClick={() => handleLanguageChange("ar")}
                  className="w-full flex items-center px-4 py-2 hover:bg-gray300"
                >
                  <Image
                    src="/images/flag/ar.png"
                    alt="العربية"
                    width={16}
                    height={16}
                    className="mr-2 ml-2"
                  />
                  العربية
                </button>
                <button
                  onClick={() => handleLanguageChange("en")}
                  className="w-full flex items-center px-4 py-2 hover:bg-gray300"
                >
                  <Image
                    src="/images/flag/en.png"
                    alt="English"
                    width={16}
                    height={16}
                    className="mr-2 ml-2"
                  />
                  English
                </button>
              </div>
            )}
          </div>
          <div className="block lg:hidden">
            <Bars3Icon
              className="block h-6 w-6"
              aria-hidden="true"
              onClick={() => setIsOpen(true)}
            />
          </div>
          <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
            <Drawerdata locale={locale} />
          </Drawer>
        </div>
      </div>
    </Disclosure>
  );
};

export default Navbar;
