'use client';
import { useState } from 'react';
import { Play } from 'lucide-react';

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
            <div className="mx-auto max-w-7xl min-h-screen text-center flex items-center justify-center p-4 relative bg-gradient-to-b from-blue200 via-Purple200 to-white">
                {/* Scattered circles */}
                <div className="absolute w-16 h-16 bg-gradient-to-r from-blue600 to-red600 rounded-full bottom-20 right-20 opacity-75 animate-bounce"></div>
                <div className="absolute w-32 h-32 bg-gradient-to-r from-blue600 to-red600 rounded-full top-40 right-60 opacity-40 animate-ping"></div>

                <div className="max-w-3xl w-full space-y-8 relative">
                    <div className="text-center space-y-2">
                        <p className="text-md font-bold">Short Intro Video</p>
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent">
                            Built Exclusively For You
                        </h1>
                        <p className="text-lg text-gray-700 max-w-xl mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="relative group">
                        {!isVideoVisible ? (
                            <>
                                <img
                                    src="images/YouTube/youtube.jpg?height=400&width=800px"
                                    alt="Dog looking out of a car window"
                                    className="w-full h-auto rounded-xl shadow-lg"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button
                                        onClick={() => setIsVideoVisible(true)}
                                        className="rounded-full w-16 h-16 bg-gradient-to-r from-blue600 to-red600 bg-opacity-75 hover:bg-opacity-100 transition-all duration-300 group-hover:scale-110 flex items-center justify-center animate-pulse"
                                        aria-label="Play video"
                                    >
                                        <Play className="w-8 h-8 text-white" />
                                    </button>
                                </div>
                            </>
                        ) : (
                            <iframe
                                width="100%"
                                height="480"
                                src="https://www.youtube.com/embed/njx-CtWPX3E" // Correct embed URL
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
