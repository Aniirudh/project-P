import React from 'react';
import { motion } from 'framer-motion';

const technologies = {
  Frontend: [
    { name: 'React.js', description: 'Dynamic user interfaces' },
    { name: 'Vue.js', description: 'Progressive frameworks' },
    { name: 'Angular', description: 'Enterprise solutions' }
  ],
  Backend: [
    { name: 'Node.js', description: 'Scalable architecture' },
    { name: 'Python', description: 'ML capabilities' },
    { name: 'Java', description: 'Enterprise grade' }
  ],
  Mobile: [
    { name: 'Swift', description: 'Native iOS' },
    { name: 'Kotlin', description: 'Native Android' },
    { name: 'React Native', description: 'Cross-platform' }
  ],
  'Cloud & DevOps': [
    { name: 'AWS', description: 'Scalable infrastructure' },
    { name: 'Azure', description: 'Enterprise integration' },
    { name: 'GCP', description: 'ML capabilities' }
  ]
};

export default function TechStack() {
  return (
    <div className="bg-[#1A1A1A] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Our Technology Ecosystem</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Best-in-class tools and frameworks for optimal results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(technologies).map(([category, techs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#242424] p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-white mb-6">{category}</h3>
              <div className="space-y-4">
                {techs.map((tech, index) => (
                  <div key={tech.name} className="text-gray-300">
                    <h4 className="font-semibold text-[#00E6A7] mb-1">{tech.name}</h4>
                    <p className="text-sm">{tech.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}