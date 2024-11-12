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
  };
}
interface socialLinksType {
  platform: string;
  imgSrc: string;
  width: number;
}

const socialLinks: socialLinksType[] = [
  {
    platform: "facebook",
    imgSrc: "/images/Footer/facebook.svg",
    width: 15,
  },
  {
    platform: "insta",
    imgSrc: "/images/Footer/insta.svg",
    width: 21,
  },
  {
    platform: "twitter",
    imgSrc: "/images/Footer/twitter.svg",
    width: 21,
  },
];
const postData: DataType[] = [
  {
    name: "Ayoub Id Bounid",
    imgSrc: "/images/Expert/ayoub.png",
    socialLinks: {
      facebook: "#",
      insta: "#",
      twitter: "#",
    },
  },
  {
    name: "Ayoub Salim",
    imgSrc: "/images/Expert/hwara.png",
    socialLinks: {
      facebook: "#",
      insta: "#",
      twitter: "#",
    },
  },
  {
    name: "Omar Taghratine",
    imgSrc: "/images/Expert/omar.png",
    socialLinks: {
      facebook: "#",
      insta: "#",
      twitter: "#",
    },
  },
  {
    name: "Mohamed Touhmou",
    imgSrc: "/images/Expert/simo.png",
    socialLinks: {
      facebook: "#",
      insta: "#",
      twitter: "#",
    },
  },
  {
    name: "Ismail Azouka",
    imgSrc: "/images/Expert/team1.png",
    socialLinks: {
      facebook: "#",
      insta: "#",
      twitter: "#",
    },
  },
  {
    name: "Mohamed Adrdour",
    imgSrc: "/images/Expert/team2.png",
    socialLinks: {
      facebook: "#",
      insta: "#",
      twitter: "#",
    },
  },
  {
    name: "Abdellah Duchbok",
    imgSrc: "/images/Expert/team3.png",
    socialLinks: {
      facebook: "#",
      insta: "#",
      twitter: "#",
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
      pauseOnHover: true,
      draggable: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div className="py-10 bg-white">
        <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8">
          <div className="text-center">
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h2 className="text-gray700 text-lg font-normal mb-3 tracking-widest uppercase ls-51">
                Présentation de l&apos;Équipe
              </h2>
            </Fade>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h3 className="text-3xl lg:text-5xl font-semibold bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent">
                Une Équipe Dévouée
              </h3>
              <div className="text-center mt-4 flex justify-center">
                <Fade
                  direction={"up"}
                  delay={800}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <p className="max-w-4xl text-lg font-semibold">
                    Notre équipe est composée de professionnels qualifiés et
                    passionnés, prêts à vous offrir des services de nettoyage de
                    la plus haute qualité. Chaque membre est formé pour répondre
                    à vos besoins spécifiques avec rigueur et professionnalisme.
                  </p>
                </Fade>
              </div>
            </Fade>
          </div>
          <Slider ref={this.sliderRef} {...settings}>
            {postData.map((post, i) => (
              <div key={i} onClick={this.handleSlideClick}>
                <div className="m-3 py-14 my-10 text-center">
                  <div className="relative">
                    <Image
                      src={post.imgSrc}
                      alt={post.name}
                      width={362}
                      height={262}
                      className="inline-block m-auto"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mt-2 text-lightblack">
                    {post.name}
                  </h3>
                  {/* <div className="flex gap-4 mt-4 items-center justify-center">
                                        {socialLinks.map((item, i) => {
                                            const socialUrl = post.socialLinks[item.platform as keyof typeof post.socialLinks];
                                            return (
                                                socialUrl && (
                                                    <Link href={socialUrl} key={i}>
                                                        <div className="bg-white h-10 w-10 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-gradient-to-r from-blue600 to-red600">
                                                            <Image
                                                                src={item.imgSrc}
                                                                alt={item.platform}
                                                                width={item.width}
                                                                height={2}
                                                                className="sepiaa hover-invert"
                                                            />
                                                        </div>
                                                    </Link>
                                                )
                                            );
                                        })}
                                    </div> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
