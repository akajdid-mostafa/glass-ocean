"use client"; // Add this at the top of your file

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Banner = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            const playPromise = videoRef.current?.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                    })
                    .catch((error) => {
                        console.error("Autoplay prevented:", error);
                    });
            }
        }
    }, []);

    return (
        <div id="home-section" className='relative'>
            {/* Background Video */}
            <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="https://www.deca-proprete.fr/wp-content/uploads/video-deca-proprete.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay content */}
            <div className="relative z-10 bg-opacity-70" style={{ background: 'rgba(0, 0, 0, 0.4)' }}>
                <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
                    <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
                        <div className='col-span-6 flex flex-col justify-center'>
                            <h1 className="text-4xl lg:text-7xl font-semibold mb-5 text-white md:4px lg:text-start text-center">
                                Cook anything <br /> with the experts
                            </h1>
                            <p className='text-white lg:text-lg font-normal mb-10 lg:text-start text-center'>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br /> accusantium doloremque laudantium, totam
                            </p>
                            <div className='md:flex align-middle justify-center lg:justify-start'>
                                <button className='text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6'>
                                    <Link href='#cook-section'>Lets cook</Link>
                                </button>
                                <button className='flex border w-full md:w-auto mt-5 md:mt-0 border-pink justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-pink hover:text-white hover:bg-pink'>
                                    <Link href='#about-section'>Explore now</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* SVG Wave */}
            <div className="deca-custom-shape-divider" style={{ transform: 'rotate(180deg)', bottom: '-2px' }}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: 'calc(150% + 1.3px)', height: '120px' }}>
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" style={{ fill: '#ffffff' }}></path>
                </svg>
            </div>
            </div>
        </div>
    );
}

export default Banner;
