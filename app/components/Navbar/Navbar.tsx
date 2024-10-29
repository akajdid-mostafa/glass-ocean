import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Image from 'next/image';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/#home-section', current: false },
    { name: 'Get Devis', href: '/Devis', current: false },
    { name: 'Service', href: '/#service', current: false },
    { name: 'Gallery', href: '/gallery', current: false },
    { name: 'About us', href: '/#about-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl p-3 md:p-6 lg:px-8">
                    <div className="relative flex h-16 sm:h-12 items-center">
                        <div className="flex flex-1 items-center sm:justify-between">
                            <div className="flex sm:hidden flex-shrink-0 items-center border-right">
                                <Link href="/" className='text-2xl font-semibold text-black ml-4'>
                                    <Image src="/images/Logo/ocean3.png" alt="logo" width={150} height={46} />
                                </Link>
                            </div>
                            <div className="hidden sm:flex flex-shrink-0 items-center border-right">
                                <Link href="/" className='text-2xl font-semibold text-black ml-4'>
                                    <Image src="/images/Logo/ocean3.png" alt="logo" width={140} height={36} />
                                </Link>
                            </div>
                            <div className="hidden lg:flex items-center border-right ">
                                <div className="flex justify-end  space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.name === 'Get Devis'
                                                    ? 'bg-gradient-to-r from-blue600 to-red600 text-white px-3 py-2  rounded-xl font-bold  space-links'
                                                    : 'navlinks hover:opacity-100 px-3 py-2 rounded-md text-lg font-normal opacity-50 hover:text-black space-links'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className='gap-6 hidden lg:flex'>
                                <div className='flex items-center gap-2'>
                                    <Image src={'/images/Navbar/phone.svg'} alt="phone-image" width={19} height={19} />
                                    <span className='text-lg font-medium'>+212 704-309787</span>
                                </div>
                                <Link href="/contact">
                                <div>
                                <button className='flex justify-center text-base w-full font-bold rounded-xl bg-gradient-to-r from-blue600 to-red600 text-white  py-3 px-4 lg:px-10 navbutton space-links '>Contact us</button>
                                </div>
                                </Link>
                                

                            </div>
                        </div>
                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>
                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>
                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
