import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from './Drawer';
import Drawerdata from './Drawerdata';
import Image from 'next/image';

interface NavigationItem {
    name: string;
    href: string;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/#home-section' },
    { name: 'Get Devis', href: '/Devis' },
    { name: 'Service', href: '/#service' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About us', href: '/#about-section' },
];

const Navbar = () => {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const updateActiveSection = () => {
            const hash = window.location.hash.replace('#', '');
            setActiveSection(hash || null);
        };

        // Update on load and on hash change
        updateActiveSection();
        window.addEventListener('hashchange', updateActiveSection);

        return () => {
            window.removeEventListener('hashchange', updateActiveSection);
        };
    }, []);

    return (
        <Disclosure as="nav" className="navbar">
            <div className="mx-auto max-w-7xl p-3 md:p-6 lg:px-8">
                <div className="relative flex h-16 sm:h-12 items-center">
                    <div className="flex flex-1 items-center sm:justify-between">
                        <Link href="/" className="text-2xl font-semibold text-black ml-4">
                            <Image src="/images/Logo/ocean1.svg" alt="logo" width={150} height={36} />
                        </Link>
                        <div className="hidden lg:flex items-center border-right">
                            <div className="flex justify-end space-x-4">
                                {navigation.map((item) => {
                                    const isActive =
                                        pathname === item.href.split('#')[0] &&
                                        (item.href.includes('#')
                                            ? activeSection === item.href.split('#')[1]
                                            : pathname === item.href);
                                    return (
                                        <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`
                                            ${item.name === 'Get Devis' 
                                                ? 'bg-gradient-to-r from-blue600 to-red600 text-white px-3 py-2 rounded-xl font-bold space-links' 
                                                : (isActive 
                                                    ? 'font-bold bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent' 
                                                    : 'opacity-50 hover:text-black bg-opacity-20 font-bold bg-white')
                                                } 
                                            px-3 py-2 rounded-md text-lg font-normal
                                        `}
                                        aria-current={isActive ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Link>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="gap-6 hidden lg:flex">
                            <div className="flex items-center gap-2">
                                <Image src={'/images/Navbar/phone.svg'} alt="phone-image" width={19} height={19} />
                                <span className="text-lg font-medium">+212 704-309787</span>
                            </div>
                            <Link href="/contact">
                                <button className="flex justify-center text-base w-full font-bold rounded-xl bg-gradient-to-r from-blue600 to-red600 text-white py-3 px-4 lg:px-10 navbutton space-links">
                                    Contact us
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="block lg:hidden">
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
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
