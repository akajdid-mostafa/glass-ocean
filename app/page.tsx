import Hero from './components/Hero/index';
import Features from './components/Work/index';
import Cook from './components/Cook/index';
import Expert from './components/Team/index';
import Gallery from './components/Gallery/index';
import Newsletter from './components/Newsletter/Newsletter';
import CleaningServicesLayout from './components/Service/service';
import SectionMap from './components/Section-Map/map';


export default function Home() {
  return (
    <main>
      <Hero />
      <CleaningServicesLayout/>
      <Features />
      <SectionMap/>
      {/* <Cook /> */}
      <Expert />
      {/* <Gallery /> */}
      <Newsletter />
    </main>
  )
}
