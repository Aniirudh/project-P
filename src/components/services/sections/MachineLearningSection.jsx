import React from 'react';
import { motion } from 'framer-motion';

export default function MachineLearningSection() {
  const services = [
    {
      name: 'Predictive Analytics',
      features: [
        'Turn historical data into future insights',
        'Custom ML models for your business needs',
        'Real-time prediction capabilities'
      ]
    },
    {
      name: 'Computer Vision',
      features: [
        'Image and video analysis',
        'Object detection and recognition',
        'Visual quality control'
      ]
    },
    {
      name: 'Natural Language Processing',
      features: [
        'Text analysis and generation',
        'Chatbot development',
        'Sentiment analysis'
      ]
    },
    {
      name: 'MLOps',
      features: [
        'Model deployment',
        'Performance monitoring',
        'Continuous improvement'
      ]
    }
  ];

  return (
    <section id="machine-learning" className="bg-[#1A1A1A] text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">AI, ML, and data science</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI-powered solutions might soon upend entire industries. For now, we are testing how far 
            this digital acceleration leads and turning data science into art. Make data your competitive advantage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#242424] p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-[#00E6A7]">{service.name}</h3>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className="text-[#00E6A7] mr-3">→</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}