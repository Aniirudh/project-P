import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with cutting-edge technologies to drive your business forward.',
    icon: '🌐',
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
    icon: '📱',
  },
  {
    title: 'Web Branding',
    description: 'Strategic branding solutions that help you stand out in the digital landscape.',
    icon: '🎨',
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to boost your online presence and drive growth.',
    icon: '📈',
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-black text-white py-20 px-6 md:px-12">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-6xl font-sans py-2 md:pt-10 md:pb-6 relative z-20 font-bold tracking-tight">Leverage our full digital product expertise</h2>
      <p className="text-lg mb-12 text-center text-gray font-dmsans">Whether you want to consult an idea, add missing capabilities, quickly expand your team, or hand over a project – we've got you covered.</p>

      <div className="flex flex-row gap-8">
        <div className="col-span-1 h-[500px] md:col-span-1 rounded-xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
          <div className="relative p-6 h-full flex flex-col bg-gradient-to-b from-transparent to-black/80">
            <h3 className="text-lg font-bold text-[#00E5A0] mb-2">01</h3>
            <h4 className="text-xl font-bold mb-2 font-dmsans">Ideate</h4>
            <p className='font-dmsans font-semibold'>Identify, shape and validate your product idea</p>
          </div>
        </div>

        <div className="col-span-1 h-[500px] md:col-span-1 rounded-xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
          <div className="relative p-6 h-full flex flex-col bg-gradient-to-b from-transparent to-black/80">
            <h3 className="text-lg font-bold text-[#00E5A0] mb-2">02</h3>
            <h4 className="text-xl font-bold mb-2 font-dmsans">Design</h4>
            <p className='font-dmsans font-semibold'>Create stunning user experiences</p>
          </div>
        </div>

        <div className="col-span-1 h-[500px] md:col-span-1 rounded-xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
          <div className="relative p-6 h-full flex flex-col bg-gradient-to-b from-transparent to-black/80">
            <h3 className="text-lg font-bold text-[#00E5A0] mb-2">03</h3>
            <h4 className="text-xl font-bold mb-2 font-dmsans">Develop</h4>
            <p className='font-dmsans font-semibold'>Build, test and deploy your digital product</p>
          </div>
        </div>

        <div className="col-span-1 h-[500px] md:col-span-1 rounded-xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
          <div className="relative p-6 h-full flex flex-col bg-gradient-to-b from-transparent to-black/80">
            <h3 className="text-lg font-bold text-[#00E5A0] mb-2">04</h3>
            <h4 className="text-xl font-bold mb-2 font-dmsans">Maintain</h4>
            <p className='font-dmsans font-semibold'>Ensure your product keeps running smoothly</p>
          </div>
        </div>

        <div className="col-span-1 h-[500px] md:col-span-1 rounded-xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
          <div className="relative p-6 h-full flex flex-col bg-gradient-to-b from-transparent to-black/80">
            <h3 className="text-lg font-bold text-[#00E5A0] mb-2">05</h3>
            <h4 className="text-xl font-bold mb-2 font-dmsans">Scale</h4>
            <p className='font-dmsans font-semibold'>Grow your product and user base</p>
          </div>
        </div>
      </div>
    </div>
  );
}