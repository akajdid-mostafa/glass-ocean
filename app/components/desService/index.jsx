"use client";

import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const StartPage = ({
  image,
  description1,
  description2,
  description3,
  subHeading,
  description,
  title,
  imageFirst = true,
  listItems = [],
  firstbutton,
  firstbuttonLink,
  secondbutton,
  secondbuttonLink,
}) => {
  return (
    <div>
      <div className="px-7 lg:px-10 max-w-7xl mx-auto flex flex-col gap-y-10 lg:flex-row items-center gap-x-10 justify-center py-10 lg:py-14 dark:bg-gray-800">
        {imageFirst ? (
          <>
            <Fade direction="up" delay={400} triggerOnce={true}>
              <div className="lg:w-[650px] lg:px-5 flex flex-col gap-y-5">
                <div className="text-sm font-bold tracking-wider text-lightgrey uppercase">
                  {subHeading}
                </div>
                <h1 className="text-2xl md:text-4xl  md:max-w-xl md:mx-auto md:text-center bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent lg:text-left lg:mx-0 lg:max-w-full font-semibold dark:text-white">
                  {title}
                </h1>
                {description && (
                  <p className="text-sm md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left dark:text-gray-300">
                    {description}
                  </p>
                )}
                {description1 && (
                  <p className="text-sm md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left dark:text-gray-300">
                    {description1}
                  </p>
                )}
                {description2 && (
                  <p className="text-sm md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left dark:text-gray-300">
                    {description2}
                  </p>
                )}
                {listItems && (
                  <ul className="space-y-2">
                    {listItems.map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Image
                          src={"/Icon/svgrepo.svg"}
                          alt="phone-image"
                          width={20}
                          height={20}
                        />
                        <span className="text-gray700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {description3 && (
                  <p className="text-sm md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left dark:text-gray-300">
                    {description3}
                  </p>
                )}
                <div className="flex gap-x-5 flex-col gap-y-2.5 lg:flex-row">
                  {firstbutton && firstbuttonLink ? (
                    <a
                      href={firstbuttonLink || "#"}
                      className="flex w-full lg:w-fit items-center text-white justify-center rounded-lg bg-gradient-to-r from-blue600 to-red600 px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
                    >
                      <span>{firstbutton || "Default First Button"}</span>
                    </a>
                  ) : (
                    firstbutton && (
                      <a
                        href="#"
                        className="flex w-full lg:w-fit items-center text-white justify-center rounded-lg bg-gradient-to-r from-blue600 to-red600 px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
                      >
                        <span>{firstbutton}</span>
                      </a>
                    )
                  )}

                  {secondbutton && secondbuttonLink ? (
                    <a
                      href={secondbuttonLink || "#"}
                      className="flex w-full lg:w-fit items-center text-[#1053F3] justify-center rounded-lg border border-[#6A65FF] px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200 bg-[#5138EE]/10 dark:text-white dark:bg-transparent dark:border-gray-500/50"
                    >
                      <span>{secondbutton || "Default Second Button"}</span>
                    </a>
                  ) : (
                    secondbutton && (
                      <a
                        href="#"
                        className="flex w-full lg:w-fit items-center text-[#1053F3] justify-center rounded-lg border border-[#6A65FF] px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200 bg-[#5138EE]/10 dark:text-white dark:bg-transparent dark:border-gray-500/50"
                      >
                        <span>{secondbutton}</span>
                      </a>
                    )
                  )}
                </div>
              </div>
            </Fade>
              <div className="hero-image md:px-5 lg:px-0 w-full lg:w-1/2 rounded-3xl md:pt-2 lg:pt-0 relative isolate">
              <Fade direction="up" delay={600} triggerOnce={true}>
                <Image
                  className="rounded-3xl"
                  src={image}
                  alt="Streamlined Services"
                  width={1080}
                  height={720}
                  layout="responsive"
                />
                </Fade>
              </div>
          </>
        ) : (
          <>
              <div className="hero-image md:px-5 lg:px-0 w-full lg:w-1/2 rounded-3xl md:pt-2 lg:pt-0 relative isolate">
              <Fade direction="up" delay={600} triggerOnce={true}>
                <Image
                  className="rounded-3xl"
                  src={image}
                  alt="Streamlined Services"
                  width={1080}
                  height={720}
                  layout="responsive"
                />
                </Fade>
              </div>
            
            <Fade direction="up" delay={400} triggerOnce={true}>
              <div className="lg:w-[650px] lg:px-5 flex flex-col gap-y-5">
                <div className="text-sm font-bold tracking-wider text-lightgrey uppercase">
                  {subHeading}
                </div>
                <h1 className="text-2xl md:text-4xl  md:max-w-xl md:mx-auto md:text-center bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent lg:text-left lg:mx-0 lg:max-w-full font-semibold dark:text-white">
                  {title}
                </h1>
                {description && (
                  <p className="text-sm md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left dark:text-gray-300">
                    {description}
                  </p>
                )}
                {description1 && (
                  <p className="text-sm md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left dark:text-gray-300">
                    {description1}
                  </p>
                )}
                {description2 && (
                  <p className="text-sm md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left dark:text-gray-300">
                    {description2}
                  </p>
                )}
                {listItems && (
                  <ul className="space-y-2">
                    {listItems.map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Image
                          src={"/Icon/svgrepo.svg"}
                          alt="phone-image"
                          width={20}
                          height={20}
                        />
                        <span className="text-gray700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {description3 && (
                  <p className="text-sm md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left dark:text-gray-300">
                    {description3}
                  </p>
                )}
                <div className="flex gap-x-5 flex-col gap-y-2.5 lg:flex-row">
                  {firstbutton && firstbuttonLink ? (
                    <a
                      href={firstbuttonLink || "#"}
                      className="flex w-full lg:w-fit items-center text-white justify-center rounded-lg bg-gradient-to-r from-blue600 to-red600 px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
                    >
                      <span>{firstbutton || "Default First Button"}</span>
                    </a>
                  ) : (
                    firstbutton && (
                      <a
                        href="#"
                        className="flex w-full lg:w-fit items-center text-white justify-center rounded-lg bg-gradient-to-r from-blue600 to-red600 px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
                      >
                        <span>{firstbutton}</span>
                      </a>
                    )
                  )}

                  {secondbutton && secondbuttonLink ? (
                    <a
                      href={secondbuttonLink || "#"}
                      className="flex w-full lg:w-fit items-center text-[#1053F3] justify-center rounded-lg border border-[#6A65FF] px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200 bg-[#5138EE]/10 dark:text-white dark:bg-transparent dark:border-gray-500/50"
                    >
                      <span>{secondbutton || "Default Second Button"}</span>
                    </a>
                  ) : (
                    secondbutton && (
                      <a
                        href="#"
                        className="flex w-full lg:w-fit items-center text-[#1053F3] justify-center rounded-lg border border-[#6A65FF] px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200 bg-[#5138EE]/10 dark:text-white dark:bg-transparent dark:border-gray-500/50"
                      >
                        <span>{secondbutton}</span>
                      </a>
                    )
                  )}
                </div>
              </div>
            </Fade>
          </>
        )}
      </div>
    </div>
  );
};

export default StartPage;
