"use client";

import Image from "next/image";
import Link from "next/link";
import { MdMarkEmailRead, MdPhoneInTalk, MdLocationOn } from "react-icons/md";
import { Fade } from "react-awesome-reveal"; // Import the Fade component

const socialLinks = [
    { imgSrc: '/images/Footer/facebook.svg', link: 'https://facebook.com', width: 20 },
    { imgSrc: '/images/Footer/insta.svg', link: 'https://instagram.com', width: 28 },
    { imgSrc: '/images/Footer/twitter.svg', link: 'https://twitter.com', width: 28 },
    { imgSrc: '/images/Footer/youtube.svg', link: 'https://youtube.com', width: 28 },
];

const Contact = () => {
    return (
        <div id="Contact" className=" flex  flex-col justify-center overflow-hidden mb-10 py-6 sm:py-12">
            <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce={true}>
                <div className="bg-white max-w-7xl mx-auto w-full rounded-xl p-4">
                    {/* Contact Information Section */}
                    <div className="container flex flex-col mx-auto bg-white">
                        <div className="w-full">
                            <div className="container flex flex-col items-center gap-16 mx-auto">
                                <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                                    <ContactCard
                                        icon={<MdMarkEmailRead className="h-6 w-6 mr-2 text-blue600" />}
                                        title="Email"
                                        description="Contactez-nous à l'adresse suivante"
                                        link="mailto:oceanconnecting.ma@gmail.com"
                                        linkText="oceanconnecting.ma@gmail.com"
                                    />
                                    <ContactCard
                                        icon={<MdPhoneInTalk className="h-6 w-6 mr-2 text-blue600" />}
                                        title="Phone"
                                        description="Nous contacter par téléphone"
                                        link="tel:+212704-309787"
                                        linkText="+212 704-309787"
                                    />
                                    <ContactCard
                                        icon={<MdLocationOn className="h-6 w-6 mr-2 text-blue600" />}
                                        title="Location"
                                        description="Nous trouver dans nos centre"
                                        link="https://goo.gl/maps/QcWzYETAh4FS3KTD7"
                                        linkText="Immeubles Coralia, 2ème étage, ISLAN, Hay Mohammadi, AGADIR"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map and Social Links Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-4">
                        <Fade direction="up" delay={800} cascade damping={0.1} triggerOnce={true}>
                            <div className="col-span-1 px-6">
                                <iframe
                                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Ocean%20Connecting%20sarl)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                    width="100%"
                                    height="400px"
                                    className="rounded-lg shadow-md sm:h-200px"
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                                {/* Social Links Section */}
                                <div className="flex flex-col md:flex-row gap-4 mt-10 items-center">
                                    <div className="font-bold text-xl mb-4 md:mb-0">Follow on social media</div>
                                    <div className="flex flex-wrap gap-4">
                                        {socialLinks.map(({ link, imgSrc, width }, i) => (
                                            <Link href={link} key={i}>
                                                <div className="bg-white h-14 w-14 shadow-xl rounded-full flex items-center justify-center footer-icons hover:bg-gradient-to-r from-blue600 to-red600 transition-all">
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
                        {/* Contact Form Section */}
                        <ContactForm />
                    </div>
                </div>
            </Fade>
        </div>
    );
};

// Reusable Contact Card Component
const ContactCard = ({ icon, title, description, link, linkText }) => (
    <div className="flex flex-col items-center gap-3 px-6 py-8 bg-white rounded-3xl shadow-main">
        <span className="flex items-center">
            {icon}
            <p className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent ml-2">
                {title}
            </p>
        </span>
        <p className="text-base leading-7 text-gray700 text-center">{description}</p>
        <a href={link} className="text-lg font-bold text-blue600">
            {linkText}
        </a>
    </div>
);

// Contact Form Component
const ContactForm = () => (
    <Fade direction="up" delay={1200} cascade damping={0.1} triggerOnce={true}>
        <div className="bg-gradient-to-b from-blue200 via-Purple200 to-white p-10 rounded-xl">
            <h2 className="mb-10 font-bold text-2xl md:text-4xl relative before:block before:absolute before:bg-sky300 before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
                Nous contacter rapidement
            </h2>
            <div className="grid gap-4 mb-6 md:grid-cols-2">
                <InputField className="placeholder:text-md md:placeholder:text-lg" placeholder="Votre nom" />
                <InputField className="placeholder:text-md md:placeholder:text-lg" placeholder="Votre prénom" />
            </div>
            <div className="grid gap-4 mb-6 md:grid-cols-2">
                <InputField className="placeholder:text-md md:placeholder:text-lg" placeholder="Email Adresse" />
                <InputField className="placeholder:text-md md:placeholder:text-lg" placeholder="Number phone" />
            </div>
            <textarea
                className="w-full rounded-2xl placeholder:text-md md:placeholder:text-lg px-6 py-4 mb-6"
                placeholder="Votre message ici"
                rows="4"
            ></textarea>
            <div className="flex justify-center">
                <button className="rounded-full bg-gradient-to-r from-blue600 to-red600 text-white font-bold py-4 px-6 min-w-40 hover:bg-blue-800 transition-all">
                    Envoyez votre message
                </button>
            </div>
        </div>
    </Fade>
);

// Reusable Input Field Component
const InputField = ({ placeholder }) => (
    <input
        className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
        placeholder={placeholder}
    />
);

export default Contact;
