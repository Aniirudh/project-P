import React from 'react';
import { motion } from 'framer-motion';

export default function ProductDesignSection() {
  const services = ['UX Research', 'UI Design', 'Design Systems', 'Prototyping'];
  const processSteps = ['User research', 'Wireframing', 'Visual design', 'Usability testing'];

  return (
    <section id="product-design" className="bg-[#1A1A1A] text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">User-centered product design</h2>
          <p className="text-xl text-gray-300">Creating intuitive digital experiences that users love</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#242424] p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-8">Design Services</h3>
            <div className="grid grid-cols-2 gap-6">
              {services.map((service) => (
                <div key={service} className="bg-[#1A1A1A] p-6 rounded-lg">
                  <h4 className="text-[#00E6A7] font-semibold mb-2">{service}</h4>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#242424] p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-8">Process Highlights</h3>
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={step} className="flex items-center">
                  <span className="text-[#00E6A7] text-2xl font-bold mr-4">{index + 1}</span>
                  <div>
                    <h4 className="font-semibold">{step}</h4>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}