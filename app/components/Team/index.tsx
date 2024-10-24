"use client";
import Slider from "react-slick";
import React, { Component, createRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

interface DataType {
    name: string;
    imgSrc: string;
    socialLinks: {
        linkedin?: string;
        facebook?: string;
        twitter?: string;
        // Add more social platforms as needed
    };
}

// interface imagesvg {
//     linkedin: string;
//     facebook: string;
//     twitter: string;
// }

// const imagesvg: imagesvg [] = [
//     {
//         facebook: '/images/Footer/facebook.svg',
//         twitter: '/images/Footer/insta.svg',
//         linkedin: '/images/Footer/twitter.svg',
//     }


// ]

const postData: DataType[] = [
    {
        name: 'Ayoub Id Bounid',
        imgSrc: '/images/Expert/ayoub.png',
        socialLinks: {
            linkedin: 'https://www.linkedin.com/in/ayoub-id-bounid',
            facebook: 'https://www.linkedin.com/in/ayoub-id-bounid',
            twitter: 'https://www.linkedin.com/in/ayoub-id-bounid',
        },
    },
    {
        name: 'Ayoub Salim',
        imgSrc: '/images/Expert/hwara.png',
        socialLinks: {
            linkedin: 'https://www.linkedin.com/in/ayoub-id-bounid',
            facebook: 'https://www.linkedin.com/in/ayoub-id-bounid',
            twitter: 'https://www.linkedin.com/in/ayoub-id-bounid',
        },
    },
    {
        name: 'Omar Taghratine',
        imgSrc: '/images/Expert/omar.png',
        socialLinks: {
            linkedin: 'https://www.linkedin.com/in/ayoub-id-bounid',
            facebook: 'https://www.linkedin.com/in/ayoub-id-bounid',
            twitter: 'https://www.linkedin.com/in/ayoub-id-bounid',
        },
    },
    {
        name: 'Mohamed Touhmou',
        imgSrc: '/images/Expert/simo.png',
        socialLinks: {
            linkedin: 'https://www.linkedin.com/in/ayoub-id-bounid',
            facebook: 'https://www.linkedin.com/in/ayoub-id-bounid',
            twitter: 'https://www.linkedin.com/in/ayoub-id-bounid',
        },
    },
    {
        name: 'Ismail Azouka',
        imgSrc: '/images/Expert/team1.png',
        socialLinks: {
            linkedin: 'https://www.linkedin.com/in/ayoub-id-bounid',
            facebook: 'https://www.linkedin.com/in/ayoub-id-bounid',
            twitter: 'https://www.linkedin.com/in/ayoub-id-bounid',
        },
    },
    {
        name: 'Mohamed Adrdour',
        imgSrc: '/images/Expert/team2.png',
        socialLinks: {
            linkedin: 'https://www.linkedin.com/in/ayoub-id-bounid',
            facebook: 'https://www.linkedin.com/in/ayoub-id-bounid',
            twitter: 'https://www.linkedin.com/in/ayoub-id-bounid',
        },
    },
    {
        name: 'Abdellah Duchbok',
        imgSrc: '/images/Expert/team3.png',
        socialLinks: {
            linkedin: 'https://www.linkedin.com/in/ayoub-id-bounid',
            facebook: 'https://www.linkedin.com/in/ayoub-id-bounid',
            twitter: 'https://www.linkedin.com/in/ayoub-id-bounid',
        },
    },
];

export default class MultipleItems extends Component {
    sliderRef = createRef<Slider>();

    handleSlideClick = () => {
        if (this.sliderRef.current) {
            if (this.sliderRef.current) {
                this.sliderRef.current.slickPause();
                setTimeout(() => {
                    if (this.sliderRef.current) {
                        this.sliderRef.current.slickPlay();
                    }
                }, 2000);
            }
        }
    };

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 1000,
            cssEase: "linear",
            pauseOnHover: true, // Change to true to pause on hover
            draggable: true, // Allow dragging to scroll
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <div className="py-10 bg-white">
                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>
                    <div className="text-center">
                        <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <h2 className='text-gray700 text-lg font-normal mb-3 tracking-widest uppercase ls-51'>Meet The Team</h2>
                        </Fade>
                        <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                            <h3 className="text-3xl lg:text-5xl font-semibold bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent">
                                Notre équipe dévouée
                            </h3>
                        </Fade>
                    </div>
                    <Slider ref={this.sliderRef} {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} onClick={this.handleSlideClick}>
                                <div className='m-3 py-14 my-10 text-center'>
                                    <div className="relative">
                                        <Image src={items.imgSrc} alt={items.name} width={362} height={262} className="inline-block m-auto" />
                                        <Link href="/Devis">
                                            <div className="absolute top-[50%] right-[2%]">
                                                <Image src={'/images/Expert/Linkedin.svg'} alt="linkedin" width={20} height={20} />
                                            </div>
                                        </Link>
                                    </div>
                                    <h3 className='text-2xl font-semibold text-lightblack'>{items.name}</h3>
                                    <div className='flex gap-4'>
                                        <div className="flex items-center justify-center space-x-2">
                                            <Link href='#'>
                                                <Image src="/images/Footer/facebook.svg" alt="Facebook" width={14} height={14} className="sepiaa" />
                                            </Link>
                                            <Link href='#'>
                                                <Image src="/images/Footer/insta.svg" alt="Instagram" width={14} height={14} className="sepiaa" />
                                            </Link>
                                            <Link href='#'>
                                                <Image src="/images/Footer/twitter.svg" alt="Twitter" width={14} height={14} className="sepiaa" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}
