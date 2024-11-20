"use client";

import Startpage from "../components/desService/index";
import Place from "../components/desService/place";
import Start from "../components/desService/start";
import Features from "../components/Work/index";
import Contact from "../components/Contact/index";
import SectionMap from "../components/Section-Map/map";
import { Fade } from "react-awesome-reveal";
import FAQSection from "../components/desService/faq-section";

const faqItems = [
  {
    question: "Comment nettoyer une façade de maison très sale ?",
    answer:
      "Il est recommandé d’utiliser un nettoyeur à haute pression pour un lavage plus efficace. Le savon doux : pour les façades en bois, frottez avec une brosse un mélange de savon doux ou savon noir mélangé avec de l’eau chaude pour enlever la saleté et les taches.",
  },
  {
    question: "Comment enlever la moisissure sur des murs extérieurs ?",
    answer:
      "Pulvérisez directement du vinaigre blanc non dilué sur la zone moisie et laissez agir pendant au moins une heure. Ensuite, frottez la surface avec une brosse pour éliminer toute trace de moisissure, puis essuyez avec un chiffon humide",
  },
  {
    question: "Comment enlever les taches noires sur un mur ?",
    answer:
      "Certains traitements naturels peuvent être utilisés pour éliminer les taches noires sur les façades. Le vinaigre blanc, le bicarbonate de soude, le sel ou les cristaux de soude en font partie. Ces produits peuvent être appliqués avec une éponge ou une brosse, puis rincés à l’eau claire.",
  },
  {
    question: "Quelles autres solutions existe-t-il pour nettoyer sa façade ?",
    answer:
      "Pour un nettoyage plus poussé de sa façade, il existe d’autres méthodes encore plus efficaces. Eu égard des produits utilisés, et des techniques plus complexes, il est conseillé de faire appel à un façadier professionnel.",
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

export default function Simulat() {
  return (
    <main>
      <Start
        backgroundImage="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2FWhatsApp%20Image%202024-11-18%20at%2011.46.04.jpeg?alt=media&token=9737830c-4b5c-4e81-a094-931e188779bf"
        mainHeading="Nettoyage des Panneaux Solaires"
        dividerColor="#ffffff"
      />

      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Ftravail-nettoyage-panneaux-solaires-dans-centrale-solaire-nettoyage-professionnel-panneau-solaires_1429-19921.jpg?alt=media&token=c924f0be-ffd2-44e6-939d-f27b37c3b559"
        subHeading="Nettoyage de panneaux solaires"
        title="Nettoyez vos panneaux solaires pour une performance optimale !"
        description="Les panneaux solaires sont soumis à diverses conditions extérieures, notamment la poussière, les débris et les intempéries, qui peuvent réduire leur efficacité au fil du temps. Un nettoyage régulier est essentiel pour maintenir leur rendement optimal et maximiser votre production d'énergie. Chez OceanConnecting, nos experts utilisent des techniques et des produits adaptés pour nettoyer vos panneaux solaires en toute sécurité, sans risque d'endommagement, afin d'assurer leur longévité et leur efficacité."
        dividerColor="#ffffff"
        firstbutton="Demande de Devis"
        firstbuttonLink="/Devis"
        secondbuttonLink="#Contact"
        secondbutton="Contacter-nous"
      />
      <Place
        title="Les avantages du nettoyage de panneaux solaires"
        description="Le nettoyage des panneaux solaires améliore leur efficacité, prolonge leur durée de vie et réduit les coûts de maintenance, assurant ainsi un meilleur rendement énergétique."
        cards={cardData}
        partibutton="Obtenez dès maintenant un devis gratuit et personnalisé pour le nettoyage de vos panneaux solaires."
        buttonText="Demande de devis rapide et gratuit"
        buttonLink="/Devis"
      />
      <Features />
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fservice%2F6.jpeg?alt=media&token=fcb1cb5f-1c68-474a-bb39-3cc24c32b546"
        //subHeading="Nettoyage de façade"
        title="Comment réaliser le nettoyage de ses panneaux solaires ?"
        description="Notre équipe 100 % intégrée respecte les règles de sécurité et garantit la protection mécanique de votre installation avec du matériel dédié. Nous utilisons des robots de nettoyage et des brosses spécifiques munis de poils adaptés aux panneaux photovoltaïques permettant d’enlever les salissures sans aucune rayure, et de l’eau pure pour vous assurer un résultat efficace et optimal."
        description1="Une intervention de nettoyage de vos panneaux photovoltaïques peut être l’occasion d’effectuer une vérification de votre installation pour détecter d’éventuelles anomalies qui peuvent survenir sur votre installation : fixation qui se desserre, panneau fissuré, cellule brûlée…"
        dividerColor="#ffffff"
        imageFirst={false}
        firstbutton="Demande de Devis"
        firstbuttonLink="/Devis"
        secondbuttonLink="#Contact"
        secondbutton="Contacter-nous"
      />
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fservice%2F5.jpeg?alt=media&token=5db074fd-2d14-40bf-98df-722408cffeeb"
        //subHeading="Nettoyage de façade"
        title="L’eau pure : une technique de nettoyage respectueuse de l’environnement"
        description="Le nettoyage des panneaux solaires à l'eau pure se distingue des techniques classiques appliquées par son aspect écologique. En effet, grâce à un système de filtration efficace, elle nous permet de vous débarrasser des divers dépôts de saletés présents sur vos installations photovoltaïques tout en limitant l’impact sur l’environnement."
        description1="Respectant l’environnement, l'eau pure est un nettoyage optimal pour le panneau solaire photovoltaïque car :"
        listItems={[
          "Il entraîne une moindre adhésion de nouvelles salissures",
          "Il permet un rendu final sans aucune trace ni résidus",
          "Il laisse vos panneaux propres plus longtemps",
        ]}
        dividerColor="#ffffff"
        firstbutton="Demande de Devis"
        firstbuttonLink="/Devis"
        secondbuttonLink="#Contact"
        secondbutton="Contacter-nous"
      />
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fservice%2F2.jpeg?alt=media&token=4b22c275-ba17-4c63-9ebb-7b343916d8d5"
        subHeading="Une pré-visite essentielle de votre centrale solaire"
        title="Une pré-visite technique indispensable pour un nettoyage de panneaux solaires en toute sécurité"
        description="Préalablement au nettoyage de vos panneaux solaires, Net’Toi procède à une pré-visite indispensable de votre installation photovoltaïque. Cette visite technique est essentielle, car elle permet à Net'Toi d'identifier les travaux à effectuer et ainsi d'adapter l'entretien de votre installation de manière optimale."
        description1="Pour l'entreprise Net'Toi, cette visite est l'assurance de pouvoir réaliser la prestation dans les meilleures conditions et de manière sécurisée."
        dividerColor="#ffffff"
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
