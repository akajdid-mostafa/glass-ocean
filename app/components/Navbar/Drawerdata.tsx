import React from "react";
import Link from "next/link";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Accueil', href: '/#home-section', current: false },
    { name: 'Service', href: '/#service', current: false },
    { name: 'Galerie', href: '/gallery', current: false },
    { name: 'A propos de nous', href: '/#about-section', current: false },
    { name: 'Obtenir Devis', href: '/Devis', current: false },

]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Data = () => {
    return (
        <div className="rounded-md max-w-sm w-full mx-auto">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    
                                    item.name === 'Get Devis'
                                    ? 'bg-gradient-to-r from-blue600 to-red600  font-bold rounded-full py-3 px-4 text-white text-center space-links' 
                                    : 'text-black hover:bg-gray-700 text-center hover:text-purple space-links',
                                    'block  py-2  text-base font-bold'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link href="/contact">
                        <div className="mt-4"></div>
                        <button className='flex justify-center text-base w-full font-bold rounded-full bg-gradient-to-r from-blue600 to-red600 text-white  py-3 px-4 lg:px-10 navbutton space-links '>Contactez-nous</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Data;
