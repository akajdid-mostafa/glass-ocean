"use client";

import Image from "next/image";

const StartPage = ({
  backgroundImage,
  mainHeading,
  subHeading,
  description,
  title,
  dividerColor,
}) => {
  return (
    <div>
      {/* Header Section */}
      <div
        className="relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="relative bg-opacity-70"
          style={{ background: "rgba(0, 0, 0, 0.4)" }}
        >
          <div className="mx-auto max-w-7xl pt-10 sm:pt-20 sm:pb-24 px-6 h-[100px] flex justify-center items-center">
            <div className="col-span-6 flex flex-col justify-center">
              <h1 className="text-2xl lg:text-5xl font-semibold text-white text-center">
                {mainHeading}
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
                fill={dividerColor}
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      {/* <div className="container flex flex-col items-center justify-center w-full p-6 mx-auto text-center xl:px-0">
        <div className="text-sm font-bold tracking-wider text-lightgrey uppercase">
          {subHeading}
        </div>
        <h2 className="max-w-6xl mt-3 text-3xl font-bold leading-snug tracking-tight bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent lg:leading-tight lg:text-4xl dark:text-white">
          {title}
        </h2>
        <p className="max-w-6xl py-2 text-md leading-normal text-lightgrey lg:text-md xl:text-md dark:text-gray-300">
          {description}
        </p>
      </div> */}

      {/* Call to Action Section */}
      <div className="px-7 lg:px-10 max-w-7xl mx-auto flex flex-col gap-y-10 lg:flex-row items-center gap-x-10 justify-center py-10 lg:py-14 dark:bg-gray-800">
        <div className="lg:w-[650px] lg:px-5 flex flex-col gap-y-5">
        <div className="text-sm font-bold tracking-wider text-lightgrey uppercase">
          {subHeading}
        </div>
          <h1 className="text-2xl md:text-4xl  md:max-w-xl md:mx-auto md:text-center bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent lg:text-left lg:mx-0 lg:max-w-full font-semibold dark:text-white">
          {title}
          </h1>
          <p className="text-sm md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left dark:text-gray-300">
          {description}
          </p>
          <div className="flex gap-x-5 flex-col gap-y-2.5 lg:flex-row">
            <a
              href="#"
              className="flex w-full lg:w-fit items-center text-white justify-center rounded-lg bg-gradient-to-r from-blue600 to-red600 px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
            >
              <span>Demande de Devis</span>
            </a>
            <a
              href="#"
              className="flex w-full lg:w-fit items-center text-[#1053F3] justify-center rounded-lg border border-[#6A65FF] px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200 bg-[#5138EE]/10 dark:text-white dark:bg-transparent dark:border-gray-500/50"
            >
              <span>Contactez-nous</span>
            </a>
          </div>
        </div>
        <div className="hero-image md:px-5 lg:px-0 w-full lg:w-1/2 rounded-3xl md:pt-2 lg:pt-0 relative isolate ">
          <Image
            className="rounded-3xl"
            src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fyoutube.jpg?alt=media&token=07ff124c-36ac-40dc-89a4-db18aee3250e"
            alt="Streamlined Services"
            width={1080}
            height={720}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default StartPage;
