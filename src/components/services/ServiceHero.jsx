import React from 'react';
import { motion } from 'framer-motion';
import { RetroGrid } from '../RetroGrid';
import { useNavigate } from 'react-router-dom';

export default function ServiceHero() {
  const navigate = useNavigate()
  return (
    <div className="relative flex h-[800px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl text-center text-white">
      {/* <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-8">
              Digital Innovation That Drives Growth
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              End-to-end software development and consulting for forward-thinking companies
            </p>
            <p className="text-lg text-gray-400 mb-12">
              We transform businesses through cutting-edge technology solutions, delivered by teams of experienced developers, designers, and strategists.
            </p>
            <button className="bg-[#00E6A7] text-black px-8 py-4 rounded-md font-semibold hover:bg-[#00c288] transition-colors">
              Estimate project
            </button>
            <RetroGrid />
          </motion.div>

        </div>

      </div> */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-6xl font-sans relative z-20 font-bold tracking-tight pb-8">
          Digital Innovation That Drives Growth
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          End-to-end software development and consulting for forward-thinking companies
        </p>
        {/* <p className="text-lg text-gray-400 mb-12">
          We transform businesses through cutting-edge technology solutions, delivered by teams of experienced developers, designers, and strategists.
        </p> */}
        <button onClick={() => navigate('/contact')} className="bg-[#00E6A7] text-black px-8 py-4 rounded-md font-semibold hover:bg-[#00c288] transition-colors">
          Estimate project
        </button>
        <RetroGrid />
      </motion.div>

      <RetroGrid />
    </div>
  );
}