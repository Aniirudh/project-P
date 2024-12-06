import React from 'react';
import { motion } from 'framer-motion';

export default function IdeationSection() {
  return (
    <section id="ideation" className="bg-[#121212] text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">From idea to impact</h2>
          <p className="text-xl text-gray-300">Transform your vision into a market-ready digital product</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#1A1A1A] p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Start with strategy</h3>
            <p className="text-gray-300 mb-8">
              Our discovery workshops help define your product vision, target audience, and technical requirements
            </p>
            <ul className="space-y-4">
              {['Market analysis', 'User research', 'Technical feasibility', 'MVP definition'].map((item) => (
                <li key={item} className="flex items-center text-gray-300">
                  <span className="text-[#00E6A7] mr-3">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1A1A1A] p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Innovation at speed</h3>
            <p className="text-gray-300 mb-8">
              Rapid ideation and validation processes to test your concepts
            </p>
            <ul className="space-y-4">
              {[
                'Design thinking workshops',
                'Prototype development',
                'User testing',
                'Market validation'
              ].map((item) => (
                <li key={item} className="flex items-center text-gray-300">
                  <span className="text-[#00E6A7] mr-3">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}