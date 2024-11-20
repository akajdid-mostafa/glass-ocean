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
    <>
      <Start
        backgroundImage="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fmain-ingenieur-tenant-voltmetre-ca-verifiant-tension-du-courant-electrique-borne-du-disjoncteur_101448-4078.jpg?alt=media&token=721def2c-9232-4fd6-bba0-7dd48aa8a862"
        mainHeading="destruction des insectes nuisibles"
        dividerColor="#ffffff"
      />
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2FDSC_9964.avif?alt=media&token=da366e12-5438-4084-b959-1bfc43ff5ecd"
        subHeading="Les activités de notre entreprise"
        title="Travaux d’Électricité à Agadir Bâtiment et Industrielle"
        description="Spécialisés dans le domaine de l’électricité à AGADIR depuis plus de 10 ans, . Forts de notre collaboration de longue date avec des marques prestigieuses d’équipements électriques telles que Legrand, Schneider, Hager, INGELEC, nous offrons à nos clients des tarifs très avantageux pour leurs travaux de rénovation, leurs dépannages, et plus encore. Tous nos équipements électriques bénéficient des garanties constructeurs.:"
        listItems={[
          "Installation et réparation de prises électriques",
          "Réparation et dépannage électrique",
          "Mise aux normes électriques",
          "Intervention en moins de 30 minutes",
        ]}
        //description3="A l'issue de chaque intervention, nous vous fournissons des recommandations et des conseils et une documentation disponible à tout moment."
        firstbutton="Demande de Devis"
        firstbuttonLink="/Devis"
        secondbuttonLink="#Contact"
        secondbutton="Contacter-nous"
      />
      {/* <Place
        title="Les avantages du nettoyage de panneaux solaires"
        description="Le nettoyage des panneaux solaires améliore leur efficacité, prolonge leur durée de vie et réduit les coûts de maintenance, assurant ainsi un meilleur rendement énergétique."
        cards={cardData}
        partibutton="Obtenez dès maintenant un devis gratuit et personnalisé pour le nettoyage de vos panneaux solaires."
        buttonText="Demande de devis rapide et gratuit"
        buttonLink="/Devis"
      /> */}
      <Features />
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2FIMG_3301.avif?alt=media&token=0110c78a-8472-44d5-8cf3-a35840b5635d"
        subHeading="POURQUOI CHOISIR LA SOCIÉTÉ OCEAN SERVICE   ?"
        title="VOTRE SOCIÉTÉ D’ÉLECTRICITÉ À AGADIR ET AUX ENVIRONS"
        description="Choisir OCEAN CONNECTING, c'est bénéficier d'une expertise reconnue dans le domaine avec des installations conformes et sécurisées. Nous proposons une gamme complète de services, de l’installation à la maintenance, en utilisant des matériaux de qualité et des technologies innovantes. Notre équipe offre un service personnalisé, des tarifs transparents et des devis clairs. Nous garantissons la qualité de nos prestations avec une couverture sur tous nos produits et respect des délais, généralement en 3 à 5 jours. Optez pour OCEAN CONNECTING SERVICES pour un service fiable, rapide et de qualité."
        //description1="Les rongeurs, en plus d'être des nuisibles, peuvent causer des dommages matériels et présenter des risques pour la santé humaine. La dératisation comprend une évaluation initiale pour identifier les zones infestées, suivie d'une mise en place de mesures adaptées pour éradiquer les rongeurs."
        //description2="Une fois les rongeurs éliminés, des mesures préventives peuvent être mises en place pour éviter toute réinfestation future. Faites confiance à notre expertise en dératisation pour garantir un environnement sûr, sain et exempt de nuisibles."
        listItems={[
          "Expertise et Expérience",
          "Services Complètes",
          "Qualité et Sécurité",
        ]}
        imageFirst={false}
        firstbutton="Demande de Devis"
        firstbuttonLink="/Devis"
        secondbuttonLink="#Contact"
        secondbutton="Contacter-nous"
      />
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fouvrier-industriel_8595-2180.jpg?alt=media&token=6be4ddf2-7da4-45ea-98e8-50ac223ee7db"
        subHeading="Bon à savoir"
        title="Quand faire appel à un électricien ?"
        description="Coupure de courant, court-circuit, réparation d'une panne de moteur de volet ou résolution d'un souci d'éclairage ... Les raisons de solliciter un dépannage électrique sont nombreuses."
        description1="C'est pourquoi, Ocean Connecting vous propose un service rapide, avec des électriciens en mesure d'intervenir en urgence, ou sur rendez-vous. Triés sur le volet, ces professionnels qualifiés sont capables de répondre à diverses problématiques, de la plus simple, au chantier le plus complexe. Soucieux du travail bien fait, nos artisans savent exercer dans le strict respect des normes et des protocoles en vigueur, afin de conduire leurs travaux dans de bonnes conditions."
        description2="Vous pouvez donc contacter nos artisans dans les cas suivants :"
        firstbutton="Demande de Devis"
        listItems={[
          "Recherche de panne électrique.",
          "Rénovation complète de l’installation électrique d’un domicile.",
          "Pose ou réparation d’un point luminaire.",
          "Réparation d’une panne de tableau électrique.",
          "Fourniture et pose d’un tableau électrique.",
          "Fourniture et pose d'un radiateur électrique.",
          "Création ou réparation de prise électrique.",
          "Mise au norme d'un équipement électrique.",
        ]}
        firstbuttonLink="/Devis"
        secondbuttonLink="#Contact"
        secondbutton="Contacter-nous"
      />
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fcodifyformatter.jpg?alt=media&token=419b51b3-cd81-42f3-ae4a-40c594d9017a"
        //subHeading="Une pré-visite essentielle de votre centrale solaire"
        title="Quelques précisions sur les interventions en électricité."
        description="Il est important de souligner que certains types de travaux nécessitent uniquement l’intervention d’un expert d’EDF ou de votre fournisseur d'électricité, plus particulièrement pour les interventions touchant le compteur électrique. C'est ce dernier qui assure l'interface entre votre logement et votre fournisseur d'énergie, lui permettant d'établir une facturation précise de votre consommation d'énergie.Bonne pratique : Les artisans MesDépanneurs.fr se déplacent pour établir un devis gratuitement. Quant aux tarifs des différentes prestations de nos experts, ils sont spécifiés sous forme de fourchettes indicatives, sur notre site web. Vous évitez ainsi les surprises et les prises de court !"
        //description1="En faisant appel à nos services de désinfection, vous bénéficiez d'une approche personnalisée en fonction de vos besoins spécifiques. Notre équipe certifiée et expérimentée assure une une désinfection des cafards, des puces, des punaises de lit et de tout autre nuisibles, en se conformant aux normes de sécurité et aux réglementations en vigueur. Faites confiance à notre expertise pour créer un environnement propre et sain."
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
    </>
  );
}
