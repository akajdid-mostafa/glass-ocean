import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

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

export default function FAQSection({ faqItems }) {
  // Set the initial state to 0 (first question open by default)
  const [openIndex, setOpenIndex] = useState(0); // Default first item open

  const handleClick = (index) => {
    // Toggle open/close
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <div className="lg:flex lg:gap-8">
        {/* Left Section */}
        
          <div className="lg:w-[40%] mb-8 lg:mb-0 flex flex-col justify-center">
            <div className="space-y-4">
            <Fade direction="up" delay={400} triggerOnce={true}>
              <p className="text-sm font-medium uppercase tracking-wide text-blue500">
              Laissez-nous vous aiderؤ
              </p>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent tracking-tight">
              questions fréquemment posées
              </h1>
              <div className="space-y-2">
                <h2 className="text-lg font-medium text-blue500">Confusion?</h2>
                <p className="text-gray700 pb-4">
                  Vous ne trouvez pas votre réponse ici ? Envoyez-nous un
                  message pour obtenir de l&apos;aide.
                </p>
                <button className="mt-4 px-4 py-3 bg-gradient-to-r from-blue600 to-red600 font-bold text-white rounded-md transition-colors">
                  Contactez-nous
                </button>
              </div>
              </Fade>
            </div>
          </div>
        

        {/* FAQ Section */}
        <div className="lg:w-[60%]">
          <div className="space-y-4">
          <Fade direction="up" delay={400} triggerOnce={true}>
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={index === openIndex} // Determine if the item is open
                onClick={() => handleClick(index)} // Toggle open state
              />
            ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
