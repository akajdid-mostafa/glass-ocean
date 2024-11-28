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




// const cardData = [
//   {
//     imageSrc: "/images/solair/so2.svg",
//     imageAlt: "Durabilité",
//     title: "Durabilité",
//     description: "Prolongez la durée de vie de votre système d'énergie solaire",
//   },
//   {
//     imageSrc: "/images/solair/so3.svg",
//     imageAlt: "Optimisation",
//     title: "Optimisation",
//     description: "Augmentation de 10% de votre production d’électricité ",
//   },
//   {
//     imageSrc: "/images/solair/so1.svg",
//     imageAlt: "Fiabilité",
//     title: "Fiabilité",
//     description:
//       "L'assurance d'un rendement des panneaux solaires à 100% garantie",
//   },
// ];


export default function Plomberie({ locale })  {
  const t = useTranslations("Plumbing");

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

  return (
    <>
      <Start
        backgroundImage="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fplomberi.jpg?alt=media&token=463751fa-7b30-4c5c-9bbf-473c5eb77e11"
        mainHeading={t("mainHeading")}
        dividerColor="#ffffff"
      />
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fplombi.jpg?alt=media&token=b41912ad-6d2f-466f-8bc9-26df74085958"
        subHeading={t("Startpage1.subHeading")}
        title={t("Startpage1.title")}
        description={t("Startpage1.description")}
        description1={t("Startpage1.description1")}
        listItems={[
          t("Startpage1.listItems.tist1"),
          t("Startpage1.listItems.tist2"),
          t("Startpage1.listItems.tist3"),
          t("Startpage1.listItems.tist4"),
        ]}
        description3={t("Startpage1.description3")}
        firstbutton={t("Startpage1.firstbutton")}
        firstbuttonLink={`/${locale}/Devis`}
        secondbuttonLink="#Contact"
        secondbutton={t("Startpage1.secondbutton")}
      />
      <Features />
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fplombi4.jpg?alt=media&token=5c57f08e-0136-4e69-810a-ed909b24840c"
        title={t("Startpage2.title")}
        description={t("Startpage2.description")}
        description1={t("Startpage2.description1")}
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
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fplombi2.jpg?alt=media&token=bb1eb09d-e52b-4b1a-b499-f3b8f1878b1b"
        subHeading={t("Startpage3.subHeading")}
        title={t("Startpage3.title")}
        description={t("Startpage3.description")}
        description1={t("Startpage3.description1")}
        description2={t("Startpage3.description2")}
        listItems={[
          t("Startpage3.listItems.tist1"),
          t("Startpage3.listItems.tist2"),
          t("Startpage3.listItems.tist3"),
          t("Startpage3.listItems.tist4"),
          t("Startpage3.listItems.tist5"),
          t("Startpage3.listItems.tist6"),
        ]}
        firstbutton={t("Startpage1.firstbutton")}
        firstbuttonLink={`/${locale}/Devis`}
        secondbuttonLink="#Contact"
        secondbutton={t("Startpage1.secondbutton")}
      />
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fplombi3.jpg?alt=media&token=6472207f-97fa-4b13-a709-de25ce332481"
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
    </>
  );
}
