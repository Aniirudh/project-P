import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import hero from '../../../public/hero1.png';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      <div className="flex min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-1/2 flex items-center px-6 lg:px-8"
        >
          <div className="max-w-2xl">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform Your Business with Digital Innovation
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We help companies build exceptional digital products, deliver seamless experiences,
              and drive growth through innovative technology solutions.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Start Your Project
              </Link>
              <Link to="/work" className="text-sm font-semibold leading-6 text-gray-900">
                View Our Work <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-1/2 relative"
        >
          <img
            src={hero}
            alt="Digital Innovation"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}

