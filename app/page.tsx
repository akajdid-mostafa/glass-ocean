import Hero from './components/Hero/index';
import Features from './components/Work/index';
import Cook from './components/About/index';
import Expert from './components/Team/index';
import Newsletter from './components/Newsletter/Newsletter';
import CleaningServicesLayout from './components/Service/service';
import ServicesSection from './components/Service/index';
import SectionMap from './components/Section-Map/map';
import VideoPopup from './components/YouTube/index';
import Contact from './components/Contact/index';




export default function Home() {
  
  return (
    <>
      <Hero />
      <ServicesSection/>
      <CleaningServicesLayout/>
      <SectionMap/>
      <Features />
      <VideoPopup/>
      <Cook />
      <Expert />
      <Contact/>
      {/* <Newsletter /> */}
      </>
  )
}
