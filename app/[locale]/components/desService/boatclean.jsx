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
      imageSrc: "/images/boatcleaning/durabilite.jpg",
      imageAlt: "Durabilité",
      title: t("cardData.title1"),
      description: t("cardData.description1"),
    },
    {
      imageSrc: "/images/boatcleaning/fuel.jpg",
      imageAlt: "Optimisation",
      title: t("cardData.title2"),
      description: t("cardData.description2"),
    },
    {
      imageSrc: "/images/boatcleaning/yacht.jpg",
      imageAlt: "Fiabilité",
      title: t("cardData.title3"),
      description: t("cardData.description3"),
    },
  ];

  return (
    <main>
      <Start
        backgroundImage="/images/boatcleaning/boatclean1.jpg"
        mainHeading={t("mainHeading")}
        dividerColor="#ffffff"
      />

      <Startpage
        image="/images/boatcleaning/boatclean2.jpg"
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
        image="/images/boatcleaning/boatclean4.jpg"
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
        image="/images/boatcleaning/boatclean3.jpg"
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
        image="/images/boatcleaning/boatclean5.jpg"
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
