import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const caseStudies = [
  {
    title: 'E-commerce Platform Transformation',
    client: 'RetailTech Inc.',
    description: 'Revolutionized online shopping experience with a modern e-commerce platform',
    metrics: '150% increase in conversion rate',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=215&q=80',
  },
  {
    title: 'Mobile Banking App',
    client: 'FinanceFlow Bank',
    description: 'Developed a secure and user-friendly mobile banking application',
    metrics: '2M+ active users',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
];

export default function CaseStudies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See how we've helped businesses achieve their digital transformation goals
          </p>
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          {caseStudies.map((study) => (
            <article key={study.title} className="flex flex-col items-start">
              <div className="relative w-full">
                <img
                  src={study.image}
                  alt={study.title}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime="2023" className="text-gray-500">
                    {study.client}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {study.title}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">
                    {study.description}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-blue-600">
                    {study.metrics}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}