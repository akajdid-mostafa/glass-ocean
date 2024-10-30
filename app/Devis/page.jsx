'use client';

import Simulation from '../components/Simulation/index';
import TwoStageForm from '../components/Simulation/Form';
import CleaningServicesLayout from '../components/Service/service';



export default function Simulat() {
    return (
      <main>
        <Simulation/>
        <TwoStageForm />
        <CleaningServicesLayout />
      </main>
    )
  }
