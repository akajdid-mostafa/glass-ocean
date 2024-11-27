"use client";

import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { useTranslations } from "next-intl";

const Cook = () => {
  const t = useTranslations("About");

  return (
    <div className="relative" id="about-section">
      <div className="mx-auto max-w-7xl lg:pt-20 sm:pb-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5">
          <div className="col-span-6 flex rounded-lg justify-start">
            <Image
              src="/images/About/about2.jpg"
              alt="nothing"
              width={600}
              height={100}
              className="rounded-2xl"
            />
          </div>
          <div className="col-span-6 flex flex-col justify-center">
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={0.1}
              triggerOnce={true}
            >
              <h2 className="text-lg font-normal mb-3 ls-51 uppercase text-start">
              {t("title1")}
              </h2>
            </Fade>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={0.1}
              triggerOnce={true}
            >
              <h3 className="bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent text-3xl lg:text-5xl font-semibold text-black text-start">
              {t("title2")}
              </h3>
            </Fade>
            <Fade
              direction={"up"}
              delay={1000}
              cascade
              damping={0.1}
              triggerOnce={true}
            >
              <p className="text-grey md:text-lg font-normal mb-10 text-start mt-2">
              {t("Description")}
              </p>
              <p className="text-grey md:text-lg font-normal mb-10 text-start mt-1">
              {t("Description2")}
              </p>
              <div className="flex align-middle justify-center md:justify-start">
                <Link
                  href="#Contact"
                  className="text-xl font-bold rounded-full text-white py-5 px-6 bg-gradient-to-r from-blue600 to-red600 lg:px-10 mr-6"
                >
                  {t("Demande")}
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cook;
