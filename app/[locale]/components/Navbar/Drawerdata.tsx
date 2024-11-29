import React, { useState } from "react";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";
import { useTranslations } from "next-intl";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
  submenu?: { name: string; href: string }[];
}

interface NavbarProps {
  locale: string;
}


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Data: React.FC<NavbarProps> = ({locale} ) => {
  const t = useTranslations("Navbar");
  const [isServiceOpen, setIsServiceOpen] = useState(false);


  const navigation: NavigationItem[] = [
    { name: t("home"), href: `/${locale}/#home-section`, current: false },
    {
      name: t("services"),
      href: "",
      current: false,
      submenu: [
        { name: t("facade_cleaning"), href: `/${locale}/nettoyage-des-interfaces` },
        { name: t("solar_panel_cleaning"), href: `/${locale}/nettoyage-des-panneaux-solaires` },
        { name: t("home_electrical"), href: `/${locale}/reparations-electriques-a-domicile` },
        { name: t("plumbing"), href: `/${locale}/reparations-de-l-eau-a-domicile` },
        { name: t("pest_control"), href: `/${locale}/destruction-des-insectes-nuisibles` },
      ],
    },
    { name: t("gallery"), href: `/${locale}/gallery`, current: false },
    { name: t("about"), href: `/${locale}/#about-section` , current: false },
    { name: t("Demande_de_Devis"), href: `/${locale}/Devis`, current: false },
  ];

  const handleServiceClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevents navigation
    setIsServiceOpen((prev) => !prev); // Toggles the submenu visibility
  };

  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.name === t("services") ? (
                  // Service item with submenu toggle
                  <Link
                    href={item.href}
                    onClick={handleServiceClick}
                    className={classNames(
                      "text-black flex items-center hover:bg-gray-700 text-start hover:text-purple space-links",
                      "block py-2 text-base font-bold"
                    )}
                  >
                    <span className="flex items-center">
                      {item.name}
                      <FaCaretDown className="ml-1" />
                    </span>
                  </Link>
                ) : (
                  // Regular navigation link
                  <Link
                    href={item.href}
                    className={classNames(
                      item.name === t("Demande_de_Devis")
                        ? "mt-6 bg-gradient-to-r from-blue600 to-red600 font-bold rounded-full py-3 px-4 text-white text-center space-links"
                        : "text-black hover:bg-gray-700 text-start hover:text-purple space-links",
                      "block py-2 text-base font-bold"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Conditionally render submenu for "Service" */}
                {item.name === t("services")  && isServiceOpen && item.submenu && (
                  <div className=" flex flex-col  bg-white rounded-lg p-2 z-50 min-w-max">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm font-normal hover:bg-gray-200 rounded-md text-start text-black"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Contact button */}
            <Link href= {`/${locale}/contact`}>
              <button className="flex justify-center text-base w-full font-bold rounded-full bg-gradient-to-r from-blue600 to-red600 text-white py-3 px-4 lg:px-10 mt-4 navbutton space-links">
              {t("contact")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
