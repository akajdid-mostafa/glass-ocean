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
        facebook?: string;
        insta?: string;
        twitter?: string;
        // Add more social platforms as needed
    };
}
interface socialLinksType {
    platform: string;
    imgSrc: string;
    width: number;
}

const socialLinks: socialLinksType[] = [
    {
        platform: 'facebook',
        imgSrc: '/images/Footer/facebook.svg',
        width: 10
    },
    {
        platform: 'insta',
        imgSrc: '/images/Footer/insta.svg',
        width: 14
    },
    {
        platform: 'twitter',
        imgSrc: '/images/Footer/twitter.svg',
        width: 14
    }
];
const postData: DataType[] = [
    {
        name: 'Ayoub Id Bounid',
        imgSrc: '/images/Expert/ayoub.png',
        socialLinks: {
            facebook: 'https://www.facebook.com/in/ayoub-id-bounid',
            insta: 'https://www.instagram.com/in/ayoub-id-bounid',
            twitter: 'https://www.linkedin.com/in/ayoub-id-bounid',
        },
    },
    {
        name: 'Ayoub Salim',
        imgSrc: '/images/Expert/hwara.png',
        socialLinks: {
            facebook: 'https://www.facebook.com/in/ayoub-salim',
            insta: 'https://www.instagram.com/in/ayoub-salim',
            twitter: 'https://www.linkedin.com/in/ayoub-salim',
        },
    },
    {
        name: 'Omar Taghratine',
        imgSrc: '/images/Expert/omar.png',
        socialLinks: {
            facebook: 'https://www.facebook.com/in/omar-taghratine',
            insta: 'https://www.instagram.com/in/omar-taghratine',
            twitter: 'https://www.linkedin.com/in/omar-taghratine',
        },
    },
    {
        name: 'Mohamed Touhmou',
        imgSrc: '/images/Expert/simo.png',
        socialLinks: {
            facebook: 'https://www.facebook.com/in/mohamed-touhmou',
            insta: 'https://www.instagram.com/in/mohamed-touhmou',
            twitter: 'https://www.linkedin.com/in/mohamed-touhmou',
        },
    },
    {
        name: 'Ismail Azouka',
        imgSrc: '/images/Expert/team1.png',
        socialLinks: {
            facebook: 'https://www.facebook.com/in/ismail-azouka',
            insta: 'https://www.instagram.com/in/ismail-azouka',
            twitter: 'https://www.linkedin.com/in/ismail-azouka',
        },
    },
    {
        name: 'Mohamed Adrdour',
        imgSrc: '/images/Expert/team2.png',
        socialLinks: {
            facebook: 'https://www.facebook.com/in/mohamed-adrdour',
            insta: 'https://www.instagram.com/in/mohamed-adrdour',
            twitter: 'https://www.linkedin.com/in/mohamed-adrdour',
        },
    },
    {
        name: 'Abdellah Duchbok',
        imgSrc: '/images/Expert/team3.png',
        socialLinks: {
            facebook: 'https://www.facebook.com/in/abdellah-duchok',
            insta: 'https://www.instagram.com/in/abdellah-duchok',
            twitter: 'https://www.linkedin.com/in/abdellah-duchok',
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
                <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8">
                    <div className="text-center">
                        <Fade direction={"up"} delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <h2 className="text-gray700 text-lg font-normal mb-3 tracking-widest uppercase ls-51">
                                Meet The Team
                            </h2>
                        </Fade>
                        <Fade direction={"up"} delay={800} cascade damping={1e-1} triggerOnce={true}>
                            <h3 className="text-3xl lg:text-5xl font-semibold bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent">
                                Notre équipe dévouée
                            </h3>
                        </Fade>
                    </div>
                    <Slider ref={this.sliderRef} {...settings}>
                        {postData.map((post, i) => (
                            <div key={i} onClick={this.handleSlideClick}>
                                <div className="m-3 py-14 my-10 text-center">
                                    <div className="relative">
                                        <Image src={post.imgSrc} alt={post.name} width={362} height={262} className="inline-block m-auto" />
                                    </div>
                                    <h3 className="text-2xl font-semibold mt-2 text-lightblack">{post.name}</h3>
                                    <div className="flex gap-4 mt-4 items-center justify-center">
                                        {socialLinks.map((item, i) => {
                                            const socialUrl = post.socialLinks[item.platform as keyof typeof post.socialLinks];
                                            return (
                                                socialUrl && (
                                                    <Link href={socialUrl} key={i}>
                                                        <div className="bg-white h-10 w-10 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-pink">
                                                            <Image
                                                                src={item.imgSrc}
                                                                alt={item.platform}
                                                                width={item.width}
                                                                height={2}
                                                                className="sepiaa"
                                                            />
                                                        </div>
                                                    </Link>
                                                )
                                            );
                                        })}
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
