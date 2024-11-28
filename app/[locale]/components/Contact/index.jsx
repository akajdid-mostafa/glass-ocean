"use client";

import Image from "next/image";
import Link from "next/link";
import { MdMarkEmailRead, MdPhoneInTalk, MdLocationOn } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
import Contactus from "./ContactForm";
import { useTranslations } from "next-intl";

const socialLinks = [
  {
    imgSrc: "/images/Footer/facebook.svg",
    link: "https://www.facebook.com/profile.php?id=61567020357925&mibextid=ZbWKwL",
    width: 20,
  },
  {
    imgSrc: "/images/Footer/insta.svg",
    link: "https://www.instagram.com/ocean.connecting",
    width: 28,
  },
  { imgSrc: "/images/Footer/twitter.svg", link: "#", width: 28 },
  {
    imgSrc: "/images/Footer/youtube.svg",
    link: "https://www.youtube.com/results?search_query=ocean+connecting",
    width: 28,
  },
];

const Contact = () => {
  const t = useTranslations("Contact");
  return (
    <div
      id="Contact"
      className=" flex  flex-col justify-center overflow-hidden mb-10 py-6 sm:py-12"
    >
      <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce={true}>
        <div className="bg-white max-w-7xl mx-auto w-full rounded-xl p-4">
          <div className="container flex flex-col mx-auto bg-white">
            <div className="w-full">
              <div className="container flex flex-col items-center gap-16 mx-auto">
                <div className="grid w-full text-center grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                  <ContactCard
                    icon={
                      <MdMarkEmailRead className="h-6 w-6  text-blue600" />
                    }
                    title={t("email.title")}
                    description={t("email.description")}
                    link="mailto:oceanconnecting.ma@gmail.com"
                    linkText={t("email.Text")}
                  />
                  <ContactCard
                    icon={
                      <MdPhoneInTalk className="h-6 w-6 mr-2 text-blue600" />
                    }
                    title={t("phone.title")}
                    description={t("phone.description")}
                    link="tel:+212704-309787"
                    linkText={t("phone.Text")}
                  />
                  <ContactCard
                    icon={
                      <MdLocationOn className="h-6 w-6 mr-2  text-blue600" />
                    }
                    title={t("localisation.title")}
                    description={t("localisation.description")}
                    link="https://goo.gl/maps/QcWzYETAh4FS3KTD7"
                    linkText={t("localisation.Text")}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-4">
            <Fade
              direction="up"
              delay={800}
              cascade
              damping={0.1}
              triggerOnce={true}
            >
              <div className="col-span-1 px-6">
                <iframe
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Ocean%20Connecting%20sarl)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  width="100%"
                  height="400px"
                  className="rounded-lg shadow-md sm:h-200px"
                  allowFullScreen=""
                  loading="lazy"
                  title="Ocean Connecting Map"
                ></iframe>
                <div className="flex flex-col md:flex-row gap-4 mt-10 items-center justify-center">
                  <div className="font-bold text-xl mb-4 md:mb-0">
                  {t("Suivez-nous")}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map(({ link, imgSrc, width }, i) => (
                      <Link href={link} key={i}>
                        <div className="bg-white h-12 w-12 shadow-xl rounded-full flex items-center justify-center footer-icons hover:bg-gradient-to-r from-blue600 to-red600 transition-all">
                          <Image
                            src={imgSrc}
                            alt={`${imgSrc} icon`}
                            width={width}
                            height={width}
                            className="sepiaa hover-invert"
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Fade>
            {/* <ContactForm /> */}
            <Contactus />
          </div>
        </div>
      </Fade>
    </div>
  );
};

const ContactCard = ({ icon, title, description, link, linkText }) => (
  <div className="flex flex-col items-center gap-3 px-6 py-8 bg-white rounded-3xl shadow-main">
    <span className="flex items-center gap-3">
      {icon}
      <p className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent ">
        {title}
      </p>
    </span>
    <p className="text-base leading-7 text-gray700 text-center">
      {description}
    </p>
    <a href={link} className="text-lg font-bold text-blue600">
      {linkText}
    </a>
  </div>
);

const InputField = ({ placeholder }) => (
  <input
    className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
    placeholder={placeholder}
  />
);

export default Contact;
