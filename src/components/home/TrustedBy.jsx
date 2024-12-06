import React from 'react';
import { motion } from 'framer-motion';

const companies = [
  { name: 'Company 1', logo: '🏢' },
  { name: 'Company 2', logo: '🏛️' },
  { name: 'Company 3', logo: '🏪' },
  { name: 'Company 4', logo: '🏭' },
  { name: 'Company 5', logo: '🏗️' },
];

export default function TrustedBy() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl lg:max-w-none"
        >
          <p className="text-center text-lg font-semibold text-gray-600">
            Trusted by leading companies worldwide
          </p>
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-5">
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex justify-center items-center"
              >
                <span className="text-4xl">{company.logo}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}