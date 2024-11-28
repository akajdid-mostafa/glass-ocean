"use client";

import Startpage from "./index";
import Place from "./place";
import Start from "./start";
import Features from "../Work/index";
import Contact from "../Contact/index";
import SectionMap from "../Section-Map/map";
import { Fade } from "react-awesome-reveal";
import FAQSection from "./faq-section";
import { useTranslations } from "next-intl";



export default function Simulat({ locale })  {
  const t = useTranslations("Insects");

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
  ];
  
  const cardData = [
    {
      imageSrc: "/images/far/place1.svg",
      imageAlt: "désinsectisation",
      title: t("cardData.title1"),
      description:t("cardData.description1"),
    },
    {
      imageSrc: "/images/far/place2.svg",
      imageAlt: "dératisation",
      title: t("cardData.title2"),
      description:t("cardData.description2"),
    },
    {
      imageSrc: "/images/far/place3.svg",
      imageAlt: "désinfection",
      title: t("cardData.title3"),
      description:t("cardData.description3"),
    },
  ];

  return (
    <main>
      <Start
        backgroundImage="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2FWhatsApp%20Image%202024-11-19%20at%2011.47.08.jpeg?alt=media&token=92d30498-9a32-4037-a768-944aa532cd4a"
        mainHeading={t("mainHeading")}
        dividerColor="#ffffff"
      />

      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2FWhatsApp%20Image%202024-11-19%20at%2011.52.58.jpeg?alt=media&token=a6a47538-d372-4a96-93b7-89112ffe59b6"
        subHeading={t("Startpage1.subHeading")}
        title={t("Startpage1.title")}
        description={t("Startpage1.description")}
        listItems={[
          t("Startpage1.listItems.tist1"),
          t("Startpage1.listItems.tist2"),
          t("Startpage1.listItems.tist3"),
        ]}
        description3={t("Startpage1.description3")}
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
      <Features />
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fservice%2F20-24.jpeg?alt=media&token=ee3e7b0e-b26c-41c6-ba1f-ce579afdfd96"
        title={t("Startpage2.title")}
        description={t("Startpage2.description")}
        description1={t("Startpage2.description1")}
        description2={t("Startpage2.description2")}
        listItems={[
          t("Startpage2.listItems.tist1"),
        ]}
        imageFirst={false}
        firstbutton={t("Startpage1.firstbutton")}
        firstbuttonLink={`/${locale}/Devis`}
        secondbuttonLink="#Contact"
        secondbutton={t("Startpage1.secondbutton")}
      />
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fservice%2F4.jpeg?alt=media&token=6cba8af8-d646-446e-bd88-aa432c4e3580"
        title={t("Startpage3.title")}
        description={t("Startpage3.description")}
        description1={t("Startpage3.description1")}
        description2={t("Startpage3.description2")}
        firstbutton={t("Startpage1.firstbutton")}
        firstbuttonLink={`/${locale}/Devis`}
        secondbuttonLink="#Contact"
        secondbutton={t("Startpage1.secondbutton")}
      />
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fservice%2F3.jpeg?alt=media&token=7b527d97-0688-4c0a-aceb-1da0db9e9fb7"
        title={t("Startpage4.title")}
        description={t("Startpage4.description")}
        description1={t("Startpage4.description1")}
        imageFirst={false}
        firstbutton={t("Startpage1.firstbutton")}
        firstbuttonLink={`/${locale}/Devis`}
        secondbuttonLink="#Contact"
        secondbutton={t("Startpage1.secondbutton")}
      />
      <FAQSection faqItems={faqItems} />
      <Fade direction="up" delay={600} triggerOnce={true}>
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight text-center bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent">
        {t("contact")}
        </h1>
      </Fade>
      <Contact />
    </main>
  );
}
