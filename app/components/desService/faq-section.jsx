import React, { useState } from "react";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray300 py-4">
      <button
        className="flex justify-between bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent items-center w-full text-left text-lg font-semibold"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        {question}
        <svg
          className={`w-6 h-6 text-black transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className="mt-2 text-gray700"
          role="region"
          aria-label={`Answer to: ${question}`}
        >
          {answer}
        </div>
      )}
    </div>
  );
};

export default function Component() {
  const faqItems = [
    {
        question: "Comment nettoyer une façade de maison très sale ?",
        answer: "Il est recommandé d’utiliser un nettoyeur à haute pression pour un lavage plus efficace. Le savon doux : pour les façades en bois, frottez avec une brosse un mélange de savon doux ou savon noir mélangé avec de l’eau chaude pour enlever la saleté et les taches."
      },
      {
        question: "Comment enlever la moisissure sur des murs extérieurs ?",
        answer: "Pulvérisez directement du vinaigre blanc non dilué sur la zone moisie et laissez agir pendant au moins une heure. Ensuite, frottez la surface avec une brosse pour éliminer toute trace de moisissure, puis essuyez avec un chiffon humide"
      },
      {
        question: "Comment enlever les taches noires sur un mur ?",
        answer: "Certains traitements naturels peuvent être utilisés pour éliminer les taches noires sur les façades. Le vinaigre blanc, le bicarbonate de soude, le sel ou les cristaux de soude en font partie. Ces produits peuvent être appliqués avec une éponge ou une brosse, puis rincés à l’eau claire."
      },
      {
        question: "Quelles autres solutions existe-t-il pour nettoyer sa façade ? ",
        answer: "Pour un nettoyage plus poussé de sa façade, il existe d’autres méthodes encore plus efficaces. Eu égard des produits utilisés, et des techniques plus complexes, il est conseillé de faire appel à un façadier professionnel."
      },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="container  mx-auto max-w-6xl px-4 py-12">
      <div className="lg:flex lg:gap-8">
        {/* Left Section */}
        <div className="lg:w-[40%] mb-8 lg:mb-0 flex flex-col justify-center">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-wide text-blue500">
              QUESTIONS ET RÉPONSES
            </p>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent tracking-tight">
              Vous avez une idée ? Trouvez-la ici.
            </h1>
            <div className="space-y-2">
              <h2 className="text-lg font-medium text-blue500">Confusion?</h2>
              <p className="text-gray700 pb-4">
                Vous ne trouvez pas votre réponse ici ? Envoyez-nous un message
                pour obtenir de l&apos;aide.
              </p>
              <button className="mt-4 px-4 py-3 bg-gradient-to-r from-blue600 to-red600 font-bold text-white rounded-md transition-colors">
                Contactez-nous
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="lg:w-[60%]">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={index === openIndex}
                onClick={() => setOpenIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
