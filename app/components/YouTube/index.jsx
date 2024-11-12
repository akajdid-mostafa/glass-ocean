'use client';
import { useState } from 'react';
import { Play } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';

export default function VideoPopup() {
    const [isVideoVisible, setIsVideoVisible] = useState(false);

    return (
        <div className="w-full bg-gradient-to-b from-blue200 via-Purple200 to-white">
            <div style={{ top: '-10px' }}>
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    style={{ width: '100%', height: '40px' }}
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="shape-fill"
                        fill="#ffffff"
                    ></path>
                </svg>
            </div>
            <div className="mx-auto max-w-7xl  text-center flex items-center justify-center p-4 relative bg-gradient-to-b from-blue200 via-Purple200 to-white">
                <div className="absolute w-16 h-16 bg-gradient-to-r from-blue600 to-red600 rounded-full bottom-20 right-20 opacity-75 animate-bounce"></div>
                <div className="absolute w-32 h-32 bg-gradient-to-r from-blue600 to-red600 rounded-full top-40 right-60 opacity-40 animate-ping"></div>

                <div className="max-w-3xl w-full space-y-8 relative">
                    <Fade direction="up" delay={400} triggerOnce>
                        <div className="text-center space-y-2">
                            <p className="text-md font-bold">Vidéo d&apos;Introduction</p>
                            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent">
                            Nos Experts en Action
                            </h1>
                            <p className="text-lg text-gray-700 max-w-xl mx-auto">
                            Découvrez nos services professionnels de nettoyage de vitres et de façades dans la vidéo ci-dessous. Visionnez la vidéo !
                            </p>
                        </div>
                    </Fade>
                    <div className="relative group">
                        {!isVideoVisible ? (
                            <>
                                <Fade direction={'up'} delay={400} triggerOnce={true}>
                                    <Image
                                        src="/images/YouTube/youtube.jpg"
                                        alt="Dog looking out of a car window"
                                        width={800}
                                        height={400}
                                        className="w-full h-auto rounded-xl shadow-lg"
                                    />
                                </Fade>

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Fade direction={'up'} delay={400} triggerOnce={true}>
                                        <button
                                            onClick={() => setIsVideoVisible(true)}
                                            className="rounded-full w-16 h-16 bg-gradient-to-r from-blue600 to-red600 bg-opacity-75 hover:bg-opacity-100 transition-all duration-300 group-hover:scale-110 flex items-center justify-center animate-pulse"
                                            aria-label="Play video"
                                        >
                                            <Play className="w-8 h-8 text-white" />
                                        </button>
                                    </Fade>
                                </div>
                            </>
                        ) : (
                            <iframe
                                width="100%"
                                height="480"
                                src="https://www.youtube.com/embed/9nR772f0qyQ" // Correct embed URL
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded-lg shadow-lg"
                            ></iframe>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
