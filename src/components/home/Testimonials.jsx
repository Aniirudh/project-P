import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    quote: "Working with this team has transformed our business. Their expertise in digital solutions is unmatched.",
    author: "Sarah Johnson",
    position: "CEO",
    company: "TechCorp Industries",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "The level of professionalism and technical expertise exceeded our expectations.",
    author: "Michael Chen",
    position: "CTO",
    company: "InnovateTech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  }
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl lg:max-w-none"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-16">
            Trusted by Industry Leaders
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="flex flex-col justify-between bg-gray-50 p-8 rounded-2xl">
                <blockquote className="text-xl font-semibold leading-8 text-gray-900 mb-8">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-gray-600">
                      {testimonial.position} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}