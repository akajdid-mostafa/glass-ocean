import Hero from './components/Hero/index';
import Features from './components/Work/index';
import Cook from './components/Cook/index';
import Expert from './components/Team/index';
import Gallery from './components/Gallery/index';
import Newsletter from './components/Newsletter/Newsletter';
import CleaningServicesLayout from './components/Service/service';
import SectionMap from './components/Section-Map/map';
import VideoPopup from './components/YouTube/index';

export default function Home() {
  return (
    <main>
      <Hero />
      <CleaningServicesLayout/>
      <SectionMap/>
      <Features />
      <VideoPopup/>
      <Cook />
      <Expert />
      {/* <Gallery /> */}
      <Newsletter />
    </main>
  )
}
