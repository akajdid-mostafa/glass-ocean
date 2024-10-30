"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Fade } from "react-awesome-reveal";

const Cook = () => {
    return (
        <div className='relative' id="about-section">
            <div className="mx-auto max-w-7xl lg:pt-20 sm:pb-24 px-6">
                <div className='grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5'>
                    <div className='col-span-6 flex rounded-lg justify-start'>
                        <Image src="/images/About/about2.jpg" alt="nothing" width={600} height={100} className="rounded-2xl" />
                    </div>
                    <div className='col-span-6 flex flex-col justify-center'>
                        <Fade direction={'up'} delay={400} cascade damping={0.1} triggerOnce={true}>
                            <h2 className='text-lg font-normal mb-3 ls-51 uppercase text-start'>à propos de nous</h2>
                        </Fade>
                        <Fade direction={'up'} delay={800} cascade damping={0.1} triggerOnce={true}>
                            <h3 className="bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent text-3xl lg:text-5xl font-semibold text-black text-start">
                                Nettoyez votre façade
                            </h3>
                        </Fade>
                        <Fade direction={'up'} delay={1000} cascade damping={0.1} triggerOnce={true}>
                            <p className='text-grey md:text-lg font-normal mb-10 text-start mt-2'>
                                Chez Ocean Connecting, nous sommes spécialisés dans le nettoyage de façades. Nous utilisons des techniques avancées et des produits respectueux de l&apos;environnement pour garantir une propreté éclatante et durable. Notre équipe d&apos;experts est formée pour traiter toutes les surfaces, qu&apos;il s&apos;agisse de bâtiments commerciaux ou résidentiels.
                            </p>
                            <p className='text-grey md:text-lg font-normal mb-10 text-start mt-1'>
                                Faites confiance à Ocean Connecting pour redonner à votre façade tout son éclat....
                            </p>
                            <div className='flex align-middle justify-center md:justify-start'>
                                <Link href="#Contact" className='text-xl font-bold rounded-full text-white py-5 px-6 bg-gradient-to-r from-blue600 to-red600 lg:px-10 mr-6'>
                                    Contact Us
                                </Link>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cook;
