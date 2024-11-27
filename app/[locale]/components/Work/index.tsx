"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Fade } from "react-awesome-reveal";
import { useTranslations } from "next-intl";



const Work = () => {
  const t = useTranslations("Features");


  interface cardDataType {
    imgSrc: string;
    heading: string;
    subheading: string;
  }
  
  const cardData: cardDataType[] = [
    {
      imgSrc: "/images/Features/301.png",
      heading: t("cardData1.title"),
      subheading: t("cardData1.description"),
    },
    {
      imgSrc: "/images/Features/302.png",
      heading: t("cardData2.title"),
      subheading:t("cardData2.description"),
    },
    {
      imgSrc: "/images/Features/303.png",
      heading: t("cardData3.title"),
      subheading: t("cardData3.description"),
    },
    {
      imgSrc: "/images/Features/304.png",
      heading: t("cardData4.title"),
      subheading:t("cardData4.description"),
    },
  ];

  return (
    <div>
      <div className="mx-auto max-w-7xl  px-6">
        <div className="text-center mb-14">
          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h3 className="text-lg font-normal mb-3 ls-51 uppercase">
            {t("title1")}
            </h3>
          </Fade>
          <Fade
            direction={"up"}
            delay={800}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <p className="text-3xl lg:text-5xl font-semibold bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent">
            {t("title2")}
            </p>
          </Fade>
          <div className="text-center mt-4 flex justify-center">
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="max-w-5xl text-lg font-semibold">
              {t("description")}
              </p>
            </Fade>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5 mt-32 mb-20">
          <Fade
            direction={"up"}
            delay={1000}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            {cardData.map((items, i) => (
              <div className="card-b p-8 relative rounded-3xl" key={i}>
                <div className="work-img-bg h-32 w-32 rounded-full flex justify-center items-center absolute top-[-50px] left-[50%] transform -translate-x-1/2">
                  <Image
                    src={items.imgSrc}
                    alt={items.imgSrc}
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent font-semibold text-center mt-16">
                  {items.heading}
                </h3>
                <p className="text-lg font-normal text-black text-center text-opacity-50 mt-2">
                  {items.subheading}
                </p>
                <div className="flex items-center justify-center">
                  <Link href="/">
                    <p className=" bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent text-center text-lg font-bold  mt-2 hover-underline">
                    {t("action")}
                      <ChevronRightIcon
                        className="text-red600 font-bold"
                        width={20}
                        height={20}
                      />
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};
export default Work;
