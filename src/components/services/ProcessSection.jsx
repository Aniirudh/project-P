import React from 'react';
import { motion } from 'framer-motion';

const processes = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We analyze your needs, market, and competition to create a solid foundation for your project.'
  },
  {
    number: '02',
    title: 'Design & Prototyping',
    description: 'Our team creates intuitive designs and interactive prototypes to visualize your product.'
  },
  {
    number: '03',
    title: 'Development',
    description: 'We build your product using cutting-edge technologies and best development practices.'
  },
  {
    number: '04',
    title: 'Testing & Launch',
    description: 'Rigorous testing ensures your product is ready for a successful market launch.'
  }
];

export default function ProcessSection() {
  return (
    <div className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Our Process</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={process.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-[#00E5A0] text-4xl font-bold mb-4">{process.number}</div>
              <h3 className="text-xl font-bold mb-4">{process.title}</h3>
              <p className="text-gray-400">{process.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}