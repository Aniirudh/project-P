import React from 'react';
import ServiceHero from '../components/services/ServiceHero';
import SecondaryNav from '../components/services/SecondaryNav';
import IdeationSection from '../components/services/sections/IdeationSection';
import ProductDesignSection from '../components/services/sections/ProductDesignSection';
import WebDevelopmentSection from '../components/services/sections/WebDevelopmentSection';
import MobileDevelopmentSection from '../components/services/sections/MobileDevelopmentSection';
import LowCodeSection from '../components/services/sections/LowcodeSection';
import MachineLearningSection from '../components/services/sections/MachineLearningSection';
import SupportSection from '../components/services/sections/SupportSection';

export default function Services() {
  return (
    <div className="min-h-screen bg-[#121212]">
      <ServiceHero />
      <SecondaryNav />
      <IdeationSection />
      <ProductDesignSection />
      <WebDevelopmentSection />
      <MobileDevelopmentSection />
      <LowCodeSection />
      <MachineLearningSection />
      <SupportSection />
    </div>
  );
}