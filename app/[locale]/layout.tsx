import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/index';

export const metadata = {
  title: 'Ocean connecting Nettoyage',
  description: "Nous sommes spécialisés dans le nettoyage et l'entretien",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  const validLocales = ["en", "fr","ar"];
  if (!validLocales.includes(locale)) {
    // Handle invalid locale (e.g., 404 or default fallback)
    throw new Error("Invalid locale");
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="mb-20">
          <Navbar  locale={locale} />
          </div>
            {children}
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}






// import './globals.css';
// import Navbar from './components/Navbar/index';
// import Footer from './components/Footer/index';
// import { NextIntlClientProvider } from "next-intl";
// import { getMessages } from "next-intl/server";



// export const metadata = {
//   title: 'Ocean connecting Nettoyage',
//   description: "Nous sommes spécialisés dans le nettoyage et l'entretien",
// };

// export default function RootLayout({
//   children,
//   params: { locale },
// }: Readonly<{
//   children: React.ReactNode;
//   params: { locale: string };
// }>) {
//   const messages = await getMessages();
//   return (
//     <html lang="en">
//       <head>
//         <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
//         <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
//         <link rel="shortcut icon" href="/favicon.ico" />
//         <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
//         <meta name="apple-mobile-web-app-title" content="MyWebSite" />
//         <link rel="manifest" href="/site.webmanifest" />
//       </head>
//       <body>
//         <Navbar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }