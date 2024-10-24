"use client";
import Slider from "react-slick";
import React, { Component, createRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        profession: 'Senior Chef',
        name: 'Ayoub Id Bounid',
        imgSrc: '/images/Expert/ayoub.png',
    },
    {
        profession: 'Junior Chef',
        name: 'Ayoub Salim',
        imgSrc: '/images/Expert/hwara.png',
    },
    {
        profession: 'Junior Chef',
        name: 'Omar Taghratine',
        imgSrc: '/images/Expert/omar.png',
    },
    {
        profession: 'Junior Chef',
        name: 'Mohamed Touhmou',
        imgSrc: '/images/Expert/simo.png',
    },
    {
        profession: 'Junior Chef',
        name: 'Ismail Azouka',
        imgSrc: '/images/Expert/team1.png',
    },
    {
        profession: 'Junior Chef',
        name: 'Mohamed Adrdour',
        imgSrc: '/images/Expert/team2.png',
    },
    {
        profession: 'Junior Chef',
        name: 'Abdellah Duchbok',
        imgSrc: '/images/Expert/team3.png',
    },
];

export default class MultipleItems extends Component {
    sliderRef = createRef<Slider>();

    handleSlideClick = () => {
        if (this.sliderRef.current) {
            this.sliderRef.current?.slickPause();
            setTimeout(() => {
                this.sliderRef.current?.slickPlay(); 
            }, 2000);
        }
    };

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: true,
            autoplay: true,  
            speed: 6000,   
            autoplaySpeed: 2000, 
            cssEase: "linear",
            pauseOnHover: false, 
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
                                    <h4 className='text-lg font-normal text-lightblack pt-4 pb-2 opacity-50'>{items.profession}</h4>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}
