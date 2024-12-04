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


export default function Matelas({ locale }) {
  const t = useTranslations("matelas");

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
      imageSrc: "/images/matelas/canape.svg",
      imageAlt: t("cardData.title1"),
      title: t("cardData.title1"),
      description:t("cardData.description1"),
    },
    {
      imageSrc: "/images/matelas/matelas.svg",
      imageAlt: t("cardData.title2"),
      title: t("cardData.title2"),
      description:t("cardData.description2"),
    },
    {
      imageSrc: "/images/matelas/chese.svg",
      imageAlt: t("cardData.title3"),
      title: t("cardData.title3"),
      description:t("cardData.description3"),
    },
    {
      imageSrc: "/images/matelas/moquete.svg",
      imageAlt: t("cardData.title4"),
      title: t("cardData.title4"),
      description:t("cardData.description4"),
    },
];
  

  return (
    <main>
      <Start
        backgroundImage="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fstart.jpg?alt=media&token=e7c24c86-40fe-4b7e-92f9-91accbd0d6fa"
        mainHeading={t("mainHeading")}
        dividerColor="#ffffff"
      />

      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fman-doing-professional-home-cleaning-service_23-2150358997.avif?alt=media&token=cbec6a50-0e64-42e7-8fe8-2c1fc1350807"
        subHeading={t("Startpage1.subHeading")}
        title= {t("Startpage1.title")}
        description= {t("Startpage1.description")}
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
      <Features locale={locale}/>
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fwoman-cleaning-couch-with-vacuum-cleaner-home-cleaning-service-concept_130111-3543.avif?alt=media&token=cde70d66-196c-4812-9ed3-15ac76f5e94a"
        //subHeading="Nettoyage de façade"
        title={t("Startpage3.title")}
        description={t("Startpage3.description")}
        description1={t("Startpage3.description1")}
        listItems={[
          t("Startpage3.listItems.tist1"),
          t("Startpage3.listItems.tist2"),
          t("Startpage3.listItems.tist3"),
          t("Startpage3.listItems.tist4"),
        ]}
        description3={t("Startpage3.description3")}
        firstbutton={t("Startpage1.firstbutton")}
        firstbuttonLink={`/${locale}/Devis`}
        secondbuttonLink="#Contact"
        secondbutton={t("Startpage1.secondbutton")}
      />
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fprocess-dry-cleaning-removing-stains-dirt-from-couch-home-professional-cleaning-service-spraying-detergent-couch-dry-cleaning-using-extractor-machine_255847-11665.avif?alt=media&token=6f25f65b-bffc-4d19-ad69-990082a59be5"
        title={t("Startpage2.title")}
        description={t("Startpage2.description")}
        description1={t("Startpage2.description1")}
        listItems={[
          t("Startpage2.listItems.tist1"),
          t("Startpage2.listItems.tist2"),
          t("Startpage2.listItems.tist3"),
          t("Startpage2.listItems.tist4"),
          t("Startpage2.listItems.tist5"),
          t("Startpage2.listItems.tist6"),
        ]}
        imageFirst={false}
        firstbutton={t("Startpage1.firstbutton")}
        firstbuttonLink={`/${locale}/Devis`}
        secondbuttonLink="#Contact"
        secondbutton={t("Startpage1.secondbutton")}
      />
      
      {/* <Startpage
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
      />*/}
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
