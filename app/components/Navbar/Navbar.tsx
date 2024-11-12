import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Image from "next/image";
import { MdNavigateNext } from "react-icons/md";

interface NavigationItem {
  name: string;
  href: string;
  submenu?: NavigationItem[];
}

const navigation: NavigationItem[] = [
  { name: "Accueil", href: "/#home-section" },
  { name: "Demande de Devis", href: "/Devis" },
  {
    name: "Services",
    href: "/#service",
    submenu: [
      { name: "Nettoyage des interfaces", href: "/service1" },
      { name: "Nettoyage des panneaux solaires", href: "/service2" },
      { name: "Nettoyage des maisons terminées", href: "/service3" },
      { name: "Nettoyage des panneaux d'affichage", href: "/service4" },
    ],
  },
  { name: "Galerie", href: "/gallery" },
  { name: "A propos", href: "/#about-section" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateActiveSection = () => {
      const hash = window.location.hash.replace("#", "");
      setActiveSection(hash || null);
    };

    updateActiveSection();
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

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
                  const isActive =
                    pathname === item.href.split("#")[0] &&
                    (item.href.includes("#")
                      ? activeSection === item.href.split("#")[1]
                      : pathname === item.href);

                  return item.submenu ? (
                    <div
                      key={item.name}
                      className="relative group flex items-center"
                    >
                      <Link
                        href={item.href}
                        className=" px-3 py-2 text-lg flex items-center opacity-50 hover:text-blue600 hover:opacity-100 space-links"
                      >
                        {item.name}
                        <MdNavigateNext className="ml-1" />
                      </Link>
                      {/* Dropdown menu with scale effect on hover */}
                      <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-lg p-2 space-y-2 z-50 transform transition-transform duration-200 scale-95 group-hover:scale-100 min-w-max">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block w-full px-4 py-2 hover:bg-gray300 rounded-lg text-black text-left"
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
                        item.name === "Demande de Devis"
                          ? "bg-gradient-to-r from-blue600 to-red600 text-white px-3 py-2 rounded-xl font-bold space-links"
                          : isActive
                          ? "font-bold bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent space-links"
                          : "opacity-50 hover:text-blue600 hover:opacity-100 bg-opacity-20 font-bold space-links"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="gap-6 hidden lg:flex">
              <Link href="/contact">
                <button className="flex justify-center text-base w-full font-bold rounded-xl bg-gradient-to-r from-blue600 to-red600 text-white py-3 px-4 lg:px-10 navbutton space-links">
                  Contactez-nous
                </button>
              </Link>
            </div>
          </div>
          <div className="block lg:hidden">
            <Bars3Icon
              className="block h-6 w-6"
              aria-hidden="true"
              onClick={() => setIsOpen(true)}
            />
          </div>
          <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
            <Drawerdata />
          </Drawer>
        </div>
      </div>
    </Disclosure>
  );
};

export default Navbar;
