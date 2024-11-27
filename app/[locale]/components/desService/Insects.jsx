"use client";

import Startpage from "./index";
import Place from "./place";
import Start from "./start";
import Features from "../Work/index";
import Contact from "../Contact/index";
import SectionMap from "../Section-Map/map";
import { Fade } from "react-awesome-reveal";
import FAQSection from "./faq-section";

const faqItems = [
  {
    question: "Puis-je rester dans ma maison pendant le traitement?",
    answer:
      "Oui, vous pouvez rester chez vous pendant le traitement. Nous utilisons des produits inoffensifs et inodores dans nos services de dératisation et de désinsectisation à Agadir.",
  },
  {
    question:
      "Est-ce que vos traitements sont sécuritaires pour les enfants et les animaux domestiques ?",
    answer:
      "Oui, nous utilisons des produits approuvés et prenons des précautions strictes pour assurer la sécurité de votre famille et de vos animaux de compagnie avec notre service de contrôle des nuisibles à Agadir.",
  },
  {
    question:
      "Vos traitements sont-ils sans danger pour les enfants et les animaux domestiques?",
    answer:
      "Oui, nos traitements sont conçus pour être sûrs et respectueux de l'environnement. Nous prenons des précautions supplémentaires pour protéger les enfants et les animaux domestiques tout en assurant un contrôle efficace des nuisibles à Agadir.",
  },
  {
    question: "Offrez-vous des services de prévention?",
    answer:
      "Oui, nous offrons des services préventifs à Agadir pour éviter de futures infestations de nuisibles. Nous pouvons également vous conseiller sur les mesures préventives adaptées à votre situation, que ce soit pour la lutte contre les nuisibles à Agadir.",
  },
  {
    question: "Quelle est la durée typique d'un traitement?",
    answer:
      "Oui, nos traitements sont conçus pour être sûrs et respectueux de l’environnement. Nous prenons des précautions supplémentaires pour protéger les enfants et les animaux domestiques, tout en garantissant une dératisation Marrakech et une désinsectisation à Agadirefficaces.",
  },
];

const cardData = [
  {
    imageSrc: "/images/far/place1.svg",
    imageAlt: "désinsectisation",
    title: "désinsectisation",
    description:
      "Éliminez efficacement les insectes nuisibles de votre espace de vie à ِAgadir.",
  },
  {
    imageSrc: "/images/far/place2.svg",
    imageAlt: "dératisation",
    title: "dératisation",
    description:
      "Protégez votre maison contre les rongeurs avec nos solutions expertes. ",
  },
  {
    imageSrc: "/images/far/place3.svg",
    imageAlt: "désinfection",
    title: "désinfection",
    description:
      "Garantissez une hygiène irréprochable avec notre service de désinfection.",
  },

];

export default function Simulat({ locale })  {
  return (
    <main>
      <Start
        backgroundImage="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2FWhatsApp%20Image%202024-11-19%20at%2011.47.08.jpeg?alt=media&token=92d30498-9a32-4037-a768-944aa532cd4a"
        mainHeading="destruction des insectes nuisibles"
        dividerColor="#ffffff"
      />

      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2FWhatsApp%20Image%202024-11-19%20at%2011.52.58.jpeg?alt=media&token=a6a47538-d372-4a96-93b7-89112ffe59b6"
        subHeading="Expertise - Approche - Surveillance"
        title="La différence LES DÉRATISEURS"
        description="Les succès de contrôle d'une lutte anti nuisibles requièrent science et expérience, tous deux quantifiables et appréciables à long terme. C'est la raison pour laquelle vous avez besoin d'un expert reconnu dans ce domaine."
        listItems={[
          "Experts certifiés et formés",
          "Méthodes d'application éprouvés",
          "Surveillance et vigilance proactive",
        ]}
        description3="A l'issue de chaque intervention, nous vous fournissons des recommandations et des conseils et une documentation disponible à tout moment."
        firstbutton="Demande de Devis"
        firstbuttonLink="/Devis"
        secondbuttonLink="#Contact"
        secondbutton="Contacter-nous"
      />
      <Place
        title="Vous Protéger Contre Les Nuisibles"
        description="Protéger votre domicile contre les nuisibles préserve votre santé, évite les dégâts et garantit un environnement sain."
        cards={cardData}
        partibutton="Obtenez dès maintenant un devis gratuit et personnalisé pour la protection contre les nuisibles de votre domicile."
        buttonText="Demande de devis rapide et gratuit"
        buttonLink="/Devis"
      />
      <Features />
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fservice%2F20-24.jpeg?alt=media&token=ee3e7b0e-b26c-41c6-ba1f-ce579afdfd96"
        //subHeading="Nettoyage de façade"
        title="Qu'est ce que la Dératisation ?"
        description="La dératisation est un processus professionnel visant à éliminer les populations de rats et de souris dans un environnement donné."
        description1="Les rongeurs, en plus d'être des nuisibles, peuvent causer des dommages matériels et présenter des risques pour la santé humaine. La dératisation comprend une évaluation initiale pour identifier les zones infestées, suivie d'une mise en place de mesures adaptées pour éradiquer les rongeurs."
        description2="Une fois les rongeurs éliminés, des mesures préventives peuvent être mises en place pour éviter toute réinfestation future. Faites confiance à notre expertise en dératisation pour garantir un environnement sûr, sain et exempt de nuisibles."
        listItems={[
          "Pour une intervention de dératisation en urgence, découvrez nos solutions rapides.",
        ]}
        imageFirst={false}
        firstbutton="Demande de Devis"
        firstbuttonLink="/Devis"
        secondbuttonLink="#Contact"
        secondbutton="Contacter-nous"
      />
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fservice%2F4.jpeg?alt=media&token=6cba8af8-d646-446e-bd88-aa432c4e3580"
        //subHeading="Nettoyage de façade"
        title="Qu'est ce que la Désinsectisation ?"
        description="La désinsectisation est un processus essentiel pour éliminer et contrôler les insectes nuisibles tels que les cafards, les fourmis, les punaises de lit ou les puces."
        description1="Cette méthode consiste à utiliser des traitements ciblés pour éradiquer les infestations existantes et prévenir toute récidive. La désinsectisation est réalisée par des professionnels formés qui identifient les espèces d'insectes, évaluent l'étendue de l'infestation et appliquent des produits appropriés pour cibler les zones à risque. Elle contribue à protéger votre environnement des dommages structurels, des maladies transmises par les insectes et des désagréments quotidiens."
        description2="Faites confiance à une société de désinsectisation et à son expertise pour un environnement sain et sans insectes indésirables."
        firstbutton="Demande de Devis"
        firstbuttonLink="/Devis"
        secondbuttonLink="#Contact"
        secondbutton="Contacter-nous"
      />
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fservice%2F3.jpeg?alt=media&token=7b527d97-0688-4c0a-aceb-1da0db9e9fb7"
        //subHeading="Une pré-visite essentielle de votre centrale solaire"
        title="Qu'est ce que la désinfection  ?"
        description="La désinfection est une étape essentielle pour maintenir un environnement propre, sûr et sain. Notre entreprise de désinfection professionnelle est conçue pour éliminer les germes, les bactéries et les virus, offrant une protection maximale contre les maladies et les infections."
        description1="En faisant appel à nos services de désinfection, vous bénéficiez d'une approche personnalisée en fonction de vos besoins spécifiques. Notre équipe certifiée et expérimentée assure une une désinfection des cafards, des puces, des punaises de lit et de tout autre nuisibles, en se conformant aux normes de sécurité et aux réglementations en vigueur. Faites confiance à notre expertise pour créer un environnement propre et sain."
        imageFirst={false}
        firstbutton="Demande de Devis"
        firstbuttonLink="/Devis"
        secondbuttonLink="#Contact"
        secondbutton="Contacter-nous"
      />
      <FAQSection faqItems={faqItems} />
      <Fade direction="up" delay={600} triggerOnce={true}>
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight text-center bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent">
          Contactez-nous
        </h1>
      </Fade>
      <Contact />
    </main>
  );
}
