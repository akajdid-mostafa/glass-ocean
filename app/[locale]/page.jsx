import Hero from './components/Hero/index';
import Features from './components/Work/index';
import About from './components/About/index';
import Expert from './components/Team/index';
import CleaningServicesLayout from './components/Service/service';
import ServicesSection from './components/Service/index';
import SectionMap from './components/Section-Map/map';
import VideoPopup from './components/YouTube/index';
import Contact from './components/Contact/index';
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function Home({ params }) {
  const { locale } = params;
  const messages = await getMessages(locale);
  

  return (
    <NextIntlClientProvider messages={messages}>
      <>
      <div></div>
        <Hero locale={locale} />
        <ServicesSection locale={locale}  />
        <CleaningServicesLayout locale={locale} />
        <SectionMap locale={locale} />
        <Features  />
        <VideoPopup />
        <About  />
        <Expert  />
        <Contact  />
      </>
    </NextIntlClientProvider>
  );
}
