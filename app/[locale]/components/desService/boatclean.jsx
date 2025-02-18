"use client";

import Startpage from "./index";
import Place from "./place";
import Start from "./start";
import Features from "../Work/index";
import Contact from "../Contact/index";
import { Fade } from "react-awesome-reveal";
import FAQSection from "./faq-section";
import { useTranslations } from "next-intl";

export default function boatclean({ locale }) {
  const t = useTranslations("boatCleaning");

  const faqItems = [
    {
      question: t("faqItems.question1"),
      answer: t("faqItems.answer1"),
    },
    {
      question: t("faqItems.question2"),
      answer: t("faqItems.answer2"),
    },
    {
      question: t("faqItems.question3"),
      answer: t("faqItems.answer3"),
    },
    {
      question: t("faqItems.question4"),
      answer: t("faqItems.answer4"),
    },
    {
      question: t("faqItems.question5"),
      answer: t("faqItems.answer5"),
    },
  ];

  const cardData = [
    {
      imageSrc: "/images/solair/so2.svg",
      imageAlt: "Durabilité",
      title: t("cardData.title1"),
      description: t("cardData.description1"),
    },
    {
      imageSrc: "/images/solair/so3.svg",
      imageAlt: "Optimisation",
      title: t("cardData.title2"),
      description: t("cardData.description2"),
    },
    {
      imageSrc: "/images/solair/so1.svg",
      imageAlt: "Fiabilité",
      title: t("cardData.title3"),
      description: t("cardData.description3"),
    },
  ];

  return (
    <main>
      <Start
        backgroundImage="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2FWhatsApp%20Image%202024-11-18%20at%2011.46.04.jpeg?alt=media&token=9737830c-4b5c-4e81-a094-931e188779bf"
        mainHeading={t("mainHeading")}
        dividerColor="#ffffff"
      />

      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Ftravail-nettoyage-panneaux-solaires-dans-centrale-solaire-nettoyage-professionnel-panneau-solaires_1429-19921.jpg?alt=media&token=c924f0be-ffd2-44e6-939d-f27b37c3b559"
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
      <Features locale={locale} />
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fservice%2F6.jpeg?alt=media&token=fcb1cb5f-1c68-474a-bb39-3cc24c32b546"
        title={t("Startpage2.title")}
        description={t("Startpage2.description")}
        description1={t("Startpage2.description1")}
        imageFirst={false}
        firstbutton={t("Startpage1.firstbutton")}
        firstbuttonLink={`/${locale}/Devis`}
        secondbuttonLink="#Contact"
        secondbutton={t("Startpage1.secondbutton")}
      />
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fservice%2F5.jpeg?alt=media&token=5db074fd-2d14-40bf-98df-722408cffeeb"
        //subHeading="Nettoyage de façade"
        title={t("Startpage3.title")}
        description={t("Startpage3.description")}
        description1={t("Startpage3.description1")}
        listItems={[
          t("Startpage3.listItems.tist1"),
          t("Startpage3.listItems.tist2"),
          t("Startpage3.listItems.tist3"),
        ]}
        firstbutton={t("Startpage1.firstbutton")}
        firstbuttonLink={`/${locale}/Devis`}
        secondbuttonLink="#Contact"
        secondbutton={t("Startpage1.secondbutton")}
      />
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fservice%2F2.jpeg?alt=media&token=4b22c275-ba17-4c63-9ebb-7b343916d8d5"
        subHeading={t("Startpage4.subHeading")}
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
