"use client";
import Slider from "react-slick";
import React, { useRef } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { useTranslations } from "next-intl";

interface DataType {
  name: string;
  imgSrc: string;
}

const postData: DataType[] = [
  {
    name: "Ayoub Id Bounid",
    imgSrc: "/images/Expert/ayoub.png",
  },
  {
    name: "Ayoub Salim",
    imgSrc: "/images/Expert/hwara.png",
  },
  {
    name: "Omar Taghratine",
    imgSrc: "/images/Expert/omar.png",
  },
  {
    name: "Mohamed Touhmou",
    imgSrc: "/images/Expert/simo.png",
  },
  {
    name: "Ismail Azouka",
    imgSrc: "/images/Expert/team1.png",
  },
  {
    name: "Mohamed Adrdour",
    imgSrc: "/images/Expert/team2.png",
  },
  {
    name: "Abdellah Duchbok",
    imgSrc: "/images/Expert/team3.png",
  },
];

const MultipleItems: React.FC = () => {
  const t = useTranslations("Team");
  const sliderRef = useRef<Slider>(null);

  const handleSlideClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.slickPlay();
        }
      }, 2000);
    }
  };

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
              {t("title1")}
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
              {t("title2")}
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
                  {t("Description")}
                </p>
              </Fade>
            </div>
          </Fade>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {postData.map((post, i) => (
            <div key={i} onClick={handleSlideClick}>
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
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MultipleItems;
