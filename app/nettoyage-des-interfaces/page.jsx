"use client";

import Startpage from "../components/desService/index";
import Start from "../components/desService/start";
import Place from "../components/desService/place";
import Features from "../components/Work/index";
import Contact from "../components/Contact/index";
import SectionMap from "../components/Section-Map/map";
import Startcontact from "../components/Contact/Start";
import { Fade } from "react-awesome-reveal";
import FAQSection from "../components/desService/faq-section";

const faqItems = [
  {
    question: "1. Quelles sont vos services exactement ?",
    answer:
      "Nettoyage de façades, vitres, et surfaces environnantes.",
  },
  {
    question: "2. Comment puis-je obtenir un devis ?",
    answer:
      "Remplissez notre formulaire ou appelez-nous.",
  },
  {
    question: "3. Dans quelles zones travaillez-vous ?",
    answer:
      "Nous sommes disponibles partout au Maroc.",
  },
  {
    question: "4. Combien de temps faut-il pour nettoyer une façade ?",
    answer:
      "Cela dépend de la surface et de la hauteur.",
  },
  {
    question: "5. Proposez-vous des services réguliers ?",
    answer:
      "Oui, services mensuels, trimestriels, et annuels.",
  },
  {
    question: "6. Comment puis-je prendre rendez-vous ?",
    answer:
      "Par téléphone ou via notre site.",
  },
  
];


const cardData = [
  {
    imageSrc: "/images/typefacade/type2.svg",
    imageAlt: "Façade",
    title: "Façade",
    description:
      "Nettoyage impeccable des façades pour tous les types de bâtiments.",
  },
  {
    imageSrc: "/images/typefacade/type3.svg",
    imageAlt: "Bardage",
    title: "Bardage",
    description:
      "Nettoyage impeccable des bardages pour tous les types de bâtiments.",
  },
  {
    imageSrc: "/images/typefacade/type1.svg",
    imageAlt: "Panneaux d'affichage",
    title: "Panneaux d'affichage",
    description:
      "Nettoyage impeccable des panneaux d'affichage pour tous les types.",
  },
];

export default function Simulat() {
  return (
    <main>
      <Start
        backgroundImage="/images/simulation/facadee.jpg"
        mainHeading="Nettoyage de Façades pour Professionnels"
        dividerColor="#ffffff"
      />
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2FWhatsApp%20Image%202024-11-18%20at%2011.33.52.jpeg?alt=media&token=7944e22f-623c-436e-8c3d-147bcb5b434f"
        mainHeading="Nettoyage de Façades pour Professionnels"
        subHeading="Nettoyage de façade"
        title="Votre bâtiment professionnel a besoin d'un nettoyage de façade ?"
        description="Les façades extérieures sont exposées à la saleté due aux intempéries et à la pollution. Lorsqu'on se rend dans un lieu pour le travail ou un rendez-vous, c'est l'une des premières choses que l'on remarque. Le nettoyage de vos façades est essentiel pour les embellir et réduire les risques de dégradation. Chez OceanConnecting, nos experts s'adaptent à vos besoins pour vous offrir des prestations fiables et de qualité."
        dividerColor="#ffffff"
        firstbutton="Demande de Devis"
        firstbuttonLink="/Devis"
        secondbuttonLink="#Contact"
        secondbutton="Contacter-nous"
      />

      <Place
        title="Nettoyage de Façades Adapté à Votre Secteur"
        description="Bureaux, grandes surfaces, bâtiments administratifs, copropriétés, usines... Nos agents polyvalents s'adaptent à toutes vos surfaces et mettent leur savoir-faire à votre service. Nous vous proposons une offre 100% sur mesure pour la propreté extérieure de vos locaux."
        cards={cardData}
        partibutton="Obtenez immédiatement et gratuitement votre devis personnalisé pour le nettoyage de vos façades."
        buttonText="Demande de devis rapide et gratuit"
        buttonLink="/Devis"
      />
      {/* <Place/> */}
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2FWhatsApp%20Image%202024-11-18%20at%2011.20.26.jpeg?alt=media&token=6741559d-e36f-41a2-b3b1-92ce2eca9027"
        subHeading="Nettoyage des façades en verre"
        title="Nettoyage des Façades en Verre : Esthétique et Durabilité"
        description="Le nettoyage des façades en verre est essentiel pour maintenir l'apparence et la durabilité des bâtiments modernes. En utilisant des techniques spécialisées et des produits adaptés, il est possible d'éliminer efficacement la saleté, les taches et les résidus sans endommager les surfaces délicates. Un entretien régulier garantit non seulement une esthétique impeccable, mais aussi une meilleure longévité des matériaux."
        dividerColor="#ffffff"
        imageFirst={false}
        firstbutton="Demande de Devis"
        firstbuttonLink="/Devis"
        secondbuttonLink="#Contact"
        secondbutton="Contacter-nous"
      />
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2FWhatsApp%20Image%202024-11-18%20at%2011.20.27.jpeg?alt=media&token=0c354043-f08e-4334-9344-82439d7daf2d"
        subHeading="Nettoyer les interfaces de bardage"
        title="Nettoyer les Interfaces de Bardage : Préservation et Performance"
        description="Le nettoyage des interfaces de bardage est essentiel pour maintenir l'intégrité et l'apparence des façades extérieures. Un entretien régulier permet d'éliminer la saleté, les mousses et autres débris qui peuvent détériorer les matériaux. Utiliser des méthodes appropriées préserve la durabilité du bardage tout en améliorant l'efficacité thermique et l'esthétique de l'ensemble du bâtiment."
        dividerColor="#ffffff"
        imageFirst={true}
        firstbutton="Demande de Devis"
        firstbuttonLink="/Devis"
        secondbuttonLink="#Contact"
        secondbutton="Contacter-nous"
      />
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2FWhatsApp%20Image%202024-11-21%20at%2018.08.50.jpeg?alt=media&token=5ff2c52f-8c25-45c4-95d8-0b2c26bf2f9a"
        subHeading="Nettoyage des panneaux d'affichage"
        title="Nettoyage des Panneaux d'Affichage : Clarté et Visibilité"
        description="Le nettoyage des panneaux d'affichage est crucial pour garantir une visibilité optimale et une présentation soignée. En éliminant les poussières, taches et autres salissures, un entretien régulier permet de maintenir la lisibilité des informations affichées. Cela prolonge également la durée de vie des panneaux, tout en assurant une communication claire et professionnelle."
        dividerColor="#ffffff"
        imageFirst={false}
        firstbutton="Demande de Devis"
        firstbuttonLink="/Devis"
        secondbuttonLink="#Contact"
        secondbutton="Contacter-nous"
      />
      <Features />
      <SectionMap />
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
