'use client';


import Startpage from "../components/desService/index";
import Place from "../components/desService/place";
import Start from "../components/desService/start";
import Features from "../components/Work/index";
import Contact from "../components/Contact/index";
import SectionMap from "../components/Section-Map/map";

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
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fplombi.jpg?alt=media&token=b41912ad-6d2f-466f-8bc9-26df74085958"
        subHeading="Les activités de notre entreprise"
        title="Plomberie à Agadir – Dépannage et Installation"
        description="Spécialisés en plomberie à Agadir depuis 10 ans, nous offrons des services de rénovation, dépannage et installation, avec des équipements de qualité à des prix compétitifs, garantis et conformes aux normes."
        description1="Nos services incluent : "
        listItems={[
          "Installation et réparation de sanitaires",
          "Dépannage de fuites et canalisations",
          "Rénovation de systèmes de plomberie",
          "Intervention rapide, généralement en moins de 30 minutes",
        ]}
        description3="Faites confiance à notre équipe de professionnels pour tous vos besoins en plomberie à Agadir."
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
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fplombi4.jpg?alt=media&token=5c57f08e-0136-4e69-810a-ed909b24840c"
        //subHeading="POURQUOI CHOISIR LA SOCIÉTÉ OCEAN SERVICE   ?"
        title="Quelques précisions sur les travaux de plomberie."
        description="Grâce à MesDépanneurs.fr vous trouvez un plombier rapide et efficace pour une prestation au meilleur prix. Un système des fourchettes tarifaires vous permet de prendre connaissance des tarifs avant de cliquer sur “commander”. Vous évitez ainsi les mauvaises surprises ! Le devis vous est proposé avant toute intervention, et vous ne réglerez qu'après l'avoir signé."
        description1="Bonne pratique : Chez MesDépanneurs.fr, l’artisan ou l'installateur sanitaire se déplace pour établir un devis gratuitement."
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
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fplombi2.jpg?alt=media&token=bb1eb09d-e52b-4b1a-b499-f3b8f1878b1b"
        subHeading="Bon à savoir"
        title="Quand faire appel à un plombier ?"
        description="Vous pouvez solliciter l'aide d'un artisan dans les cas suivants :"
        //description1="C'est pourquoi, Ocean Connecting vous propose un service rapide, avec des électriciens en mesure d'intervenir en urgence, ou sur rendez-vous. Triés sur le volet, ces professionnels qualifiés sont capables de répondre à diverses problématiques, de la plus simple, au chantier le plus complexe. Soucieux du travail bien fait, nos artisans savent exercer dans le strict respect des normes et des protocoles en vigueur, afin de conduire leurs travaux dans de bonnes conditions."
        //description2="Vous pouvez donc contacter nos artisans dans les cas suivants :"
        firstbutton="Demande de Devis"
        listItems={[
          "Réparation d’une fuite d’eau.",
          "Débouchage de WC ou canalisation.",
          "Problème de vos appareils sanitaires.",
          "Remplacement de pièces : système de chauffage, chasse d’eau, joints d'étanchéité...",
          "Pour l'installation d'un équipement dans la salle de bain ou la cuisine, du type : évier, lavabo, douche, baignoire, WC...",
          "En cas d'urgences (dégât des eaux, gros engorgement...).",
        ]}
        firstbuttonLink="/Devis"
        secondbuttonLink="#Contact"
        secondbutton="Contacter-nous"
      />
      <Startpage
        image="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fglass%20team%2Fplombi3.jpg?alt=media&token=6472207f-97fa-4b13-a709-de25ce332481"
        //subHeading="Une pré-visite essentielle de votre centrale solaire"
        title="Quel est le déroulement et la durée de l’intervention d’un professionnel ?"
        description="Une fois votre commande effectuée, un artisan plombier professionnel vous contacte immédiatement, afin de confirmer l’heure de son passage. Votre plateforme de confiance MesDépanneurs.fr est spécialisée dans le dépannage d’urgence, cependant pour les prestations en plomberie, vous avez la possibilité de fixer un rendez-vous en fonction de vos besoins et disponibilités, et surtout en fonction de la situation. Soyez sans crainte, nos pombiers chauffagistes sont à votre disposition 7j/7 toute l’année et sans aucune majoration !"
        description1="Le temps des interventions est différent pour chaque cas, qu’il s’agisse d’une intervention urgente, d'une recherche de fuite, d’un débouchage de WC ou de la réparation d’un joint, par exemple. Sachez que la durée des interventions est communiquée avant la prise de commande, vous pourrez également la consulter à la fin du questionnaire de diagnostic de votre problème, afin de vous organiser en conséquence."
        imageFirst={false}
        firstbutton="Demande de Devis"
        firstbuttonLink="/Devis"
        secondbuttonLink="#Contact"
        secondbutton="Contacter-nous"
      />
      <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight text-center bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent">
        Contactez-nous
      </h1>
      <Contact />
    </>
    )
  }
