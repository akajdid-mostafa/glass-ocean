import React, { useState } from "react";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
  submenu?: { name: string; href: string }[];
}

const navigation: NavigationItem[] = [
  { name: "Accueil", href: "/#home-section", current: false },
  {
    name: "Service",
    href: "",
    current: false,
    submenu: [
      { name: "Nettoyage des façades", href: "/nettoyage-des-interfaces" },
      { name: "Nettoyage des panneaux solaires", href: "/nettoyage-des-panneaux-solaires" },
      { name: "Maintenance électrique à domicile", href: "/reparations-electriques-a-domicile" },
      { name: "Plomberie et canalisation a domicile", href: "/reparations-de-l-eau-a-domicile" },
      { name: "Destruction des insectes nuisibles", href: "/destruction-des-insectes-nuisibles" },
    ],
  },
  { name: "Galerie", href: "/gallery", current: false },
  { name: "A propos de nous", href: "/#about-section", current: false },
  { name: "Demande Devis", href: "/Devis", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Data = () => {
  const [isServiceOpen, setIsServiceOpen] = useState(false);

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
                {item.name === "Service" ? (
                  // Service item with submenu toggle
                  <a
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
                  </a>
                ) : (
                  // Regular navigation link
                  <Link
                    href={item.href}
                    className={classNames(
                      item.name === "Demande Devis"
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
                {item.name === "Service" && isServiceOpen && item.submenu && (
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
            <Link href="/contact">
              <button className="flex justify-center text-base w-full font-bold rounded-full bg-gradient-to-r from-blue600 to-red600 text-white py-3 px-4 lg:px-10 mt-4 navbutton space-links">
                Contactez-nous
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
