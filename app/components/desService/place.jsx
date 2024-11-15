import { Building2, Store, WallpaperIcon, SignpostBig } from 'lucide-react';
import Image from 'next/image'; // Import Image from next/image

export default function Place() {
  return (
    <div className="w-full px-4 py-12">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent">
          Nettoyage de Façades Adapté à Votre Secteur
        </h1>
        <p className="text-lg max-w-4xl mx-auto">
          Bureaux, grandes surfaces, bâtiments administratifs, copropriétés, usines... Nos agents polyvalents
          s&apos;adaptent à toutes vos surfaces et mettent leur savoir-faire à votre service. Nous vous proposons une
          offre 100% sur mesure pour la propreté extérieure de vos locaux.
        </p>
        <div className="mx-auto max-w-7xl text-center p-6 dark:bg-gray900">
          <div className="gr mx-auto max-w-4xl items-stretch space-y-4 text-left sm:flex sm:space-y-0 sm:space-x-8 sm:text-center">
            <a
              className="flex w-full items-center rounded-xl border border-black border-opacity-10 px-4 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl"
              href="#"
              target="_blank"
            >
              <Image
                className="mr-4 w-12 sm:mr-0 sm:h-32 sm:w-32"
                src="/images/place/1.svg"
                alt="Framework7"
                width={48}
                height={48}
              />
              <div>
                <div className="font-bold bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent text-black dark:text-white sm:mt-4 sm:mb-2">Façade</div>
                <div className="text-sm opacity-75">
                  Full featured framework for building iOS, Android &amp; desktop apps
                </div>
              </div>
            </a>
            <a
              className="flex w-full items-center rounded-xl border border-black border-opacity-10 px-4 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl"
              href="#"
              target="_blank"
            >
              <Image
                className="mr-4 w-12 sm:mr-0 sm:h-32 sm:w-32"
                src="/images/place/2.svg"
                alt="Atropos"
                width={48}
                height={48}
              />
              <div>
                <div className="bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent font-bold text-black dark:text-white sm:mt-4 sm:mb-2">Bardage</div>
                <div className="text-sm opacity-75">Stunning touch-friendly 3D parallax hover effects</div>
              </div>
            </a>
            <a
              className="flex w-full items-center rounded-xl border border-black border-opacity-10 px-4 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl"
              href="#"
              target="_blank"
            >
              <Image
                className="mr-4 w-12 sm:mr-0 sm:h-32 sm:w-32"
                src="/images/place/3.svg"
                alt="Konsta UI"
                width={48}
                height={48}
              />
              <div>
                <div className="bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent font-bold text-black dark:text-white sm:mt-4 sm:mb-2">Panneaux d&apos;affichage</div>
                <div className="text-sm opacity-75">Pixel perfect mobile UI components built with Tailwind CSS</div>
              </div>
            </a>
          </div>
        </div>
        <p className="text-lg mt-12">
          Obtenez immédiatement et gratuitement votre devis personnalisé pour le nettoyage de vos façades.
        </p>

        <Button>Demande de devis rapide et gratuit</Button>
      </div>
    </div>
  );
}

// Button Component
function Button({ className, children, ...props }) {
  return (
    <button
      className={`bg-gradient-to-r from-blue600 to-red600 text-white font-bold px-8 py-4 text-lg rounded-xl ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// Card Component
function Card({ className, children }) {
  return (
    <div className={`backdrop-blur-sm shadow-lg rounded-lg ${className}`}>
      {children}
    </div>
  );
}

// CardContent Component
function CardContent({ className, children }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
