import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import CaseStudies from '../components/home/CaseStudies';
import Testimonials from '../components/home/Testimonials';
import TrustedBy from '../components/home/TrustedBy';
import { HeroParallax } from '../components/home/HeroParallax';
import { products } from '../components/home/Products';
import GetInTouch from '../components/home/GetInTouch';

export default function Home() {
  return (
    <div className='bg-black'>
      <HeroParallax products={products} />
      {/* <TrustedBy /> */}
      <Services />
      <GetInTouch />
      {/* <CaseStudies />
      <Testimonials /> */}
    </div>
  );
}