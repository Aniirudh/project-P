import React from 'react';
import { motion } from 'framer-motion';

export default function SupportSection() {
  const supportServices = [
    { name: '24/7 monitoring', description: 'Round-the-clock system monitoring and alerts' },
    { name: 'Performance optimization', description: 'Continuous performance improvements and optimization' },
    { name: 'Security updates', description: 'Regular security patches and updates' },
    { name: 'Technical support', description: 'Expert technical assistance when you need it' }
  ];

  const maintenancePlans = [
    { name: 'Regular updates', description: 'Keep your systems up-to-date' },
    { name: 'Bug fixes', description: 'Quick resolution of issues' },
    { name: 'Feature enhancements', description: 'Continuous improvement of functionality' },
    { name: 'Scaling support', description: 'Help with growing your application' }
  ];

  return (
    <section id="support" className="bg-[#121212] text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Continuous Support & Maintenance</h2>
          <p className="text-xl text-gray-300">Ensuring your digital products perform at their best</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#1A1A1A] p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-8">Support Services</h3>
            <div className="space-y-6">
              {supportServices.map((service) => (
                <div key={service.name} className="bg-[#242424] p-6 rounded-lg">
                  <h4 className="text-[#00E6A7] font-semibold mb-2">{service.name}</h4>
                  <p className="text-gray-300 text-sm">{service.description}</p>
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
            <h3 className="text-2xl font-bold mb-8">Maintenance Plans</h3>
            <div className="space-y-6">
              {maintenancePlans.map((plan) => (
                <div key={plan.name} className="bg-[#242424] p-6 rounded-lg">
                  <h4 className="text-[#00E6A7] font-semibold mb-2">{plan.name}</h4>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}