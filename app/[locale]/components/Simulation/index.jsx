"use client";

import { useTranslations } from "next-intl";


const Simulation = () => {
  const t = useTranslations("simulation");
  return (
    <div>
      <div
        className="relative"
        style={{
          backgroundImage: "url('/images/simulation/facadee.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="relative bg-opacity-70"
          style={{ background: "rgba(0, 0, 0, 0.4)" }}
        >
          <div className="mx-auto max-w-7xl pt-10 sm:pt-20 sm:pb-24 px-6 h-[150px] flex justify-center items-center">
            <div className="col-span-6 flex flex-col justify-center">
              <h1 className="text-2xl lg:text-5xl font-semibold text-white text-center">
                {t("title1")}
              </h1>
            </div>
          </div>
          <div
            className="deca-custom-shape-divider"
            style={{ transform: "rotate(180deg)", bottom: "-1px" }}
          >
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              style={{ width: "100%", height: "40px" }}
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
                fill="#ffffff"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center w-full p-6 mx-auto text-center xl:px-0">
        <div className="text-sm font-bold tracking-wider text-lightgrey uppercase">
        {t("title2")}
        </div>
        <h2 className="max-w-6xl mt-3 text-3xl font-bold leading-snug tracking-tight bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent lg:leading-tight lg:text-4xl dark:text-white">
        {t("title3")}
        </h2>
        <p className="max-w-6xl py-2 text-lg leading-normal text-lightgrey lg:text-xl xl:text-xl dark:text-gray-300">
        {t("title4")}
        </p>
        <p className="max-w-6xl py-2 text-md leading-normal text-lightgrey lg:text-md xl:text-md dark:text-gray-300">
        {t("description1")}
          </p>
          <p className="max-w-6xl py-2 text-md leading-normal text-lightgrey lg:text-md xl:text-md dark:text-gray-300">
          {t("description2")}
        </p>
      </div>
    </div>
  );
};

export default Simulation;
