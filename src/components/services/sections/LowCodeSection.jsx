import React from 'react';
import { motion } from 'framer-motion';

export default function LowCodeSection() {
  const platforms = [
    { name: 'OutSystems', description: 'Enterprise-grade low-code platform' },
    { name: 'Mendix', description: 'Rapid application development' },
    { name: 'Microsoft Power Platform', description: 'Business process automation' },
    { name: 'Custom integrations', description: 'Seamless system connectivity' }
  ];

  const benefits = [
    { name: 'Faster time-to-market', description: 'Launch products up to 10x faster' },
    { name: 'Lower development costs', description: 'Reduce development expenses by 70%' },
    { name: 'Easy maintenance', description: 'Simplified updates and modifications' },
    { name: 'Enterprise-grade security', description: 'Built-in security features' }
  ];

  return (
    <section id="low-code-development" className="bg-[#121212] text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Accelerate with Low-Code</h2>
          <p className="text-xl text-gray-300">Rapid development without compromising quality</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#1A1A1A] p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-8">Platforms & Tools</h3>
            <div className="grid grid-cols-1 gap-6">
              {platforms.map((platform) => (
                <div key={platform.name} className="bg-[#242424] p-6 rounded-lg">
                  <h4 className="text-[#00E6A7] font-semibold mb-2">{platform.name}</h4>
                  <p className="text-gray-300 text-sm">{platform.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1A1A1A] p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-8">Benefits</h3>
            <div className="grid grid-cols-1 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.name} className="bg-[#242424] p-6 rounded-lg">
                  <h4 className="text-[#00E6A7] font-semibold mb-2">{benefit.name}</h4>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}