"use client";

import Startpage from "./index";
import Start from "./start";
import Features from "../Work/index";
import Contact from "../Contact/index";
import { Fade } from "react-awesome-reveal";
import FAQSection from "./faq-section";
import { useTranslations } from "next-intl";



export default function Electrique({ locale })  {
  const t = useTranslations("Electricity");
  
  const faqItems = [
    {
      question: t("faqItems.question1"),
      answer:t("faqItems.answer1"),
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
      imageSrc: "/images/solair/so2.svg",
      imageAlt: "Durabilité",
      title: "Durabilité",
      description: "Prolongez la durée de vie de votre système d'énergie solaire",
    },
    {
      imageSrc: "/images/solair/so3.svg",
      imageAlt: "Optimisation",
      title: "Optimisation",
      description: "Augmentation de 10% de votre production d’électricité ",
    },
    {
      imageSrc: "/images/solair/so1.svg",
      imageAlt: "Fiabilité",
      title: "Fiabilité",
      description:
        "L'assurance d'un rendement des panneaux solaires à 100% garantie",
    },
  ];

  return (
    <>
      <Start
        backgroundImage="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fmain-ingenieur-tenant-voltmetre-ca-verifiant-tension-du-courant-electrique-borne-du-disjoncteur_101448-4078.jpg?alt=media&token=721def2c-9232-4fd6-bba0-7dd48aa8a862"
        mainHeading={t("mainHeading")}
        dividerColor="#ffffff"
      />
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2FDSC_9964.avif?alt=media&token=da366e12-5438-4084-b959-1bfc43ff5ecd"
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
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2FIMG_3301.avif?alt=media&token=0110c78a-8472-44d5-8cf3-a35840b5635d"
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
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fouvrier-industriel_8595-2180.jpg?alt=media&token=6be4ddf2-7da4-45ea-98e8-50ac223ee7db"
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
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fcodifyformatter.jpg?alt=media&token=419b51b3-cd81-42f3-ae4a-40c594d9017a"
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
