import React from 'react';
import { motion } from 'framer-motion';
import IconCloud from '../TechStackCloud';

export default function WebDevelopmentSection() {
  const services = [
    { name: 'Full-stack development', icon: '🔧' },
    { name: 'Progressive Web Apps', icon: '📱' },
    { name: 'E-commerce platforms', icon: '🛍️' },
    { name: 'Enterprise solutions', icon: '🏢' },
    { name: 'Microservices Architecture', icon: '🔄' },
    { name: 'Cloud-Native Applications', icon: '☁️' },
    { name: 'API Development & Integration', icon: '🔌' },
    { name: 'Performance Optimization', icon: '⚡' }
  ];

  const techStack = {
    Frontend: [
      'React',
      'Vue.js',
      'Angular',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Redux/Redux Toolkit',
      'GraphQL',
      'Webpack',
      'Vite'
    ],
    Backend: [
      'Node.js',
      'Python',
      'Ruby',
      'Go',
      'Java Spring Boot',
      'Express.js',
      'NestJS',
      'Django',
      'FastAPI'
    ],
    Databases: [
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Elasticsearch',
      'MySQL',
      'DynamoDB',
      'Cassandra'
    ],
    Cloud: [
      'AWS',
      'Azure',
      'GCP',
      'Docker',
      'Kubernetes',
      'Terraform',
      'CI/CD',
      'Jenkins'
    ],
    Testing: [
      'Jest',
      'Cypress',
      'Selenium',
      'Playwright',
      'React Testing Library'
    ],
    DevOps: [
      'GitHub Actions',
      'GitLab CI',
      'Prometheus',
      'Grafana',
      'ELK Stack'
    ]
  };


  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

  return (
    <section id="web-development" className="bg-[#121212] text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Web Development Excellence</h2>
          <p className="text-xl text-gray-300">Scalable solutions for modern businesses</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#1A1A1A] p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-8">Core Services</h3>
            <div className="grid grid-cols-2 gap-6">
              {services.map((service) => (
                <div key={service.name} className="bg-[#242424] p-6 rounded-lg">
                  <span className="text-2xl mb-4 block">{service.icon}</span>
                  <h4 className="text-[#00E6A7] font-semibold">{service.name}</h4>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          // className="bg-[#1A1A1A] p-8 rounded-lg"
          >
            {/* <h3 className="text-2xl font-bold mb-8">Technology Stack</h3>
            <div className="space-y-6">
              {Object.entries(techStack).map(([category, technologies]) => (
                <div key={category}>
                  <h4 className="text-[#00E6A7] font-semibold mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span key={tech} className="bg-[#242424] px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div> */}
            <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8 ">
              <IconCloud iconSlugs={slugs} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}