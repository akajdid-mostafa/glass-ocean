// Simulat.jsx (Client-side component)
"use client";

import Startpage from "./index";
import Start from "./start";
import Place from "./place";
import Features from "../Work/index";
import Contact from "../Contact/index";
import SectionMap from "../Section-Map/map";
import { Fade } from "react-awesome-reveal";
import FAQSection from "./faq-section";
import { useTranslations } from "next-intl";


export default function Facade({ locale }) {
  const t = useTranslations("facade");

const faqItems = [
    {
      question: t("faqItems.question1"),
      answer: t("faqItems.answer1"),
    },
    {
      question: t("faqItems.question2"),
      answer:t("faqItems.answer2"),
    },
    {
      question: t("faqItems.question3"),
      answer:t("faqItems.answer3"),
    },
    {
      question: t("faqItems.question4"),
      answer:t("faqItems.answer4"),
    },
    {
      question: t("faqItems.question5"),
      answer:t("faqItems.answer5"),
    },
    {
      question: t("faqItems.question6"),
      answer:t("faqItems.answer6"),
    },
    
];

const cardData = [
    {
      imageSrc: "/images/typefacade/type2.svg",
      imageAlt: "Façade",
      title: t("cardData.title1"),
      description:t("cardData.description1"),
    },
    {
      imageSrc: "/images/typefacade/type3.svg",
      imageAlt: "Bardage",
      title: t("cardData.title2"),
      description:t("cardData.description2"),
    },
    {
      imageSrc: "/images/typefacade/type1.svg",
      imageAlt: "Panneaux d'affichage",
      title: t("cardData.title3"),
      description:t("cardData.description3"),
    },
];

  return (
    <>
      <Start
        backgroundImage="/images/simulation/facadee.jpg"
        mainHeading={t("mainHeading")}
        dividerColor="#ffffff"
      />
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2FWhatsApp%20Image%202024-11-18%20at%2011.33.52.jpeg?alt=media&token=7944e22f-623c-436e-8c3d-147bcb5b434f"
        mainHeading={t("Startpage1.mainHeading")}
        subHeading={t("Startpage1.subHeading")}
        title={t("Startpage1.title")}
        description={t("Startpage1.description")}
        firstbutton={t("Startpage1.firstbutton")}
        firstbuttonLink={`/${locale}/Devis`}
        secondbuttonLink="#Contact"
        secondbutton={t("Startpage1.secondbutton")}
      />
      <Place
        title={t("Place.title")}
        description={t("Place.description")}
        cards={cardData}
        partibutton={t("Place.partibutton")}
        buttonText={t("Place.buttonText")}
        buttonLink={`/${locale}/Devis`}
      />
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2FWhatsApp%20Image%202024-11-18%20at%2011.20.26.jpeg?alt=media&token=6741559d-e36f-41a2-b3b1-92ce2eca9027"
        subHeading={t("Startpage2.subHeading")}
        title={t("Startpage2.title")}
        description={t("Startpage2.description")}
        imageFirst={false}
        firstbutton={t("Startpage1.firstbutton")}
        firstbuttonLink={`/${locale}/Devis`}
        secondbuttonLink="#Contact"
        secondbutton={t("Startpage1.secondbutton")}
      />
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2FWhatsApp%20Image%202024-11-18%20at%2011.20.27.jpeg?alt=media&token=0c354043-f08e-4334-9344-82439d7daf2d"
        subHeading={t("Startpage3.subHeading")}
        title={t("Startpage3.title")}
        description={t("Startpage3.description")}
        imageFirst={true}
        firstbutton={t("Startpage1.firstbutton")}
        firstbuttonLink={`/${locale}/Devis`}
        secondbuttonLink="#Contact"
        secondbutton={t("Startpage1.secondbutton")}
      />
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2FWhatsApp%20Image%202024-11-21%20at%2018.08.50.jpeg?alt=media&token=5ff2c52f-8c25-45c4-95d8-0b2c26bf2f9a"
        subHeading={t("Startpage4.subHeading")}
        title={t("Startpage4.title")}
        description={t("Startpage4.description")}
        imageFirst={false}
        firstbutton={t("Startpage1.firstbutton")}
        firstbuttonLink={`/${locale}/Devis`}
        secondbuttonLink="#Contact"
        secondbutton={t("Startpage1.secondbutton")}
      />
      <Features locale={locale}/>
      <SectionMap locale={locale}/>
      <FAQSection faqItems={faqItems} />
      <Fade direction="up" delay={600} triggerOnce={true}>
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight text-center bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent">
        {t("contact")}
        </h1>
      </Fade>
      <Contact />
    </>
  );
}
