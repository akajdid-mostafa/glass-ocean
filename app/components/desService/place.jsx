import { Building2, Store, WallpaperIcon, SignpostBig } from "lucide-react";
import Image from "next/image"; // Import Image from next/image
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export default function Place({
  title,
  description,
  cards,
  buttonText,
  buttonLink,
  partibutton,
}) {
  return (
    <div className="w-full px-4  py-12">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce>
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-lg max-w-4xl mx-auto">{description}</p>
        </Fade>
        <div className="mx-auto max-w-7xl text-center p-6 ">
          <div className="gr mx-auto max-w-4xl items-stretch space-y-4 text-left sm:flex sm:space-y-0 sm:space-x-8 sm:text-center">
            <Fade direction="up" delay={1000} cascade damping={0.1} triggerOnce>
              {cards &&
                cards.map((card, index) => (
                  <Card
                    key={index}
                    className="flex w-full items-center rounded-xl border border-black border-opacity-10 px-4 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg   sm:flex-col sm:hover:shadow-2xl"
                  >
                    <Image
                      className="mr-4 w-12 sm:mr-0 sm:h-32 sm:w-32"
                      src={card.imageSrc}
                      alt={card.imageAlt}
                      width={48}
                      height={48}
                    />
                    <div>
                      <div className="font-bold bg-gradient-to-r from-blue600 to-red600 bg-clip-text text-transparent text-black dark:text-white sm:mt-4 sm:mb-2">
                        {card.title}
                      </div>
                      <div className="text-sm opacity-75">
                        {card.description}
                      </div>
                    </div>
                  </Card>
                ))}
            </Fade>
          </div>
        </div>
        <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce>
          <p className="text-lg mt-12">{partibutton}</p>
          <div>
            <Button href={buttonLink}>{buttonText}</Button>
          </div>
        </Fade>
      </div>
    </div>
  );
}
function Card({ className, children }) {
  return (
    <div className={` shadow-lg rounded-lg ${className}`}>
      {children}
    </div>
  );
}

function CardContent({ className, children }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

function Button({ className, children, href, ...props }) {
  return (
    <Link href={href}>
      <button
        className={`bg-gradient-to-r from-blue600 to-red600 text-white font-bold px-8 py-4 text-lg rounded-xl ${className}`}
        {...props}
      >
        {children}
      </button>
    </Link>
  );
}
