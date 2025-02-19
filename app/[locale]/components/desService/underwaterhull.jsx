"use client";

import Startpage from "./index";
import Start from "./start";
import Features from "../Work/index";
import Contact from "../Contact/index";
import { Fade } from "react-awesome-reveal";
import FAQSection from "./faq-section";
import { useTranslations } from "next-intl";

export default function UnderWaterHull({ locale }) {
  const t = useTranslations("UnderWaterHull");

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
      imageSrc: "/images/underwaterhull/underwaterhull1.jpg",
      imageAlt: "Durabilité",
      title: "Durabilité",
      description:
        "Prolongez la durée de vie de votre système d'énergie solaire",
    },
    {
      imageSrc: "/images/underwaterhull/underwaterhull2.jpg",
      imageAlt: "Optimisation",
      title: "Optimisation",
      description: "Augmentation de 10% de votre production d’électricité ",
    },
    {
      imageSrc: "/images/underwaterhull/underwaterhull3.jpg",
      imageAlt: "Fiabilité",
      title: "Fiabilité",
      description:
        "L'assurance d'un rendement des panneaux solaires à 100% garantie",
    },
  ];

  return (
    <>
      <Start
        backgroundImage="/images/underwaterhull/underwaterhull1.jpg"
        mainHeading={t("mainHeading")}
        dividerColor="#ffffff"
      />
      <Startpage
        image="/images/underwaterhull/underwaterhull2.jpg"
        subHeading={t("Startpage1.subHeading")}
        title={t("Startpage1.title")}
        description={t("Startpage1.description")}
        listItems={[
          t("Startpage1.listItems.tist1"),
          t("Startpage1.listItems.tist2"),
          t("Startpage1.listItems.tist3"),
          t("Startpage1.listItems.tist4"),
        ]}
        firstbutton={t("Startpage1.firstbutton")}
        firstbuttonLink={`/${locale}/Devis`}
        secondbuttonLink="#Contact"
        secondbutton={t("Startpage1.secondbutton")}
      />
      <Features />
      <Startpage
        image="/images/underwaterhull/underwaterhull3.jpg"
        subHeading={t("Startpage2.subHeading")}
        title={t("Startpage2.title")}
        description={t("Startpage2.description")}
        listItems={[
          t("Startpage2.listItems.tist1"),
          t("Startpage2.listItems.tist2"),
          t("Startpage2.listItems.tist3"),
        ]}
        imageFirst={false}
        firstbutton={t("Startpage1.firstbutton")}
        firstbuttonLink={`/${locale}/Devis`}
        secondbuttonLink="#Contact"
        secondbutton={t("Startpage1.secondbutton")}
      />
      <Startpage
        image="/images/underwaterhull/underwaterhull4.jpg"
        subHeading={t("Startpage3.subHeading")}
        title={t("Startpage3.title")}
        description={t("Startpage3.description")}
        description1={t("Startpage3.description1")}
        description2={t("Startpage3.description2")}
        firstbutton={t("Startpage1.firstbutton")}
        listItems={[
          t("Startpage3.listItems.tist1"),
          t("Startpage3.listItems.tist2"),
          t("Startpage3.listItems.tist3"),
          t("Startpage3.listItems.tist4"),
          t("Startpage3.listItems.tist5"),
          t("Startpage3.listItems.tist6"),
          t("Startpage3.listItems.tist7"),
          t("Startpage3.listItems.tist8"),
        ]}
        firstbuttonLink={`/${locale}/Devis`}
        secondbuttonLink="#Contact"
        secondbutton={t("Startpage1.secondbutton")}
      />
      <Startpage
        image="/images/underwaterhull/underwaterhull5.jpg"
        title={t("Startpage4.title")}
        description={t("Startpage3.description")}
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
    </>
  );
}
