import React,{useState} from 'react';
import { motion } from 'framer-motion';

export default function MobileDevelopmentSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const featuresPerPage = 3;
  const developmentOptions = [
    { name: 'Native iOS (Swift/SwiftUI)', icon: '🍎', tech: ['Swift', 'SwiftUI', 'Xcode', 'CocoaPods'] },
    { name: 'Native Android (Kotlin)', icon: '🤖', tech: ['Kotlin', 'Jetpack Compose', 'Android Studio', 'Gradle'] },
    { name: 'React Native', icon: '⚛️', tech: ['React Native', 'Expo', 'React Navigation', 'Redux'] },
    { name: 'Flutter', icon: '💙', tech: ['Dart', 'Flutter SDK', 'BLoC', 'GetX'] },
    { name: 'Progressive Web Apps', icon: '🌐', tech: ['Service Workers', 'Web Push', 'Workbox', 'IndexedDB'] },
    { name: 'Cross-Platform Tools', icon: '🔄', tech: ['Firebase', 'AppCenter', 'Fastlane', 'Capacitor'] }
  ];

  const features = [
    {
      name: 'Performance Optimization',
      description: 'Blazing fast apps that users love',
      subFeatures: ['Memory optimization', 'Battery efficiency', 'Fast startup time', 'Smooth animations']
    },
    {
      name: 'Offline Functionality',
      description: 'Work seamlessly without internet',
      subFeatures: ['Local data storage', 'Background sync', 'Conflict resolution', 'Offline-first architecture']
    },
    {
      name: 'Advanced Features',
      description: 'Modern mobile capabilities',
      subFeatures: ['Biometric authentication', 'AR/VR integration', 'Machine learning', 'IoT device connectivity']
    },
    {
      name: 'User Engagement',
      description: 'Keep users coming back',
      subFeatures: ['Push notifications', 'Deep linking', 'In-app messaging', 'Social sharing']
    },
    {
      name: 'Security & Privacy',
      description: 'Enterprise-grade protection',
      subFeatures: ['End-to-end encryption', 'Secure storage', 'Certificate pinning', 'App hardening']
    },
    {
      name: 'Analytics & Monitoring',
      description: 'Data-driven decision making',
      subFeatures: ['Crash reporting', 'User analytics', 'Performance monitoring', 'A/B testing']
    }
  ];

  const pageCount = Math.ceil(features.length / featuresPerPage);
  const displayedFeatures = features.slice(
    currentPage * featuresPerPage,
    (currentPage + 1) * featuresPerPage
  );

  return (
    <section id="mobile-development" className="bg-[#1A1A1A] text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Native & Cross-platform Mobile Solutions</h2>
          <p className="text-xl text-gray-300">Engaging mobile experiences for iOS and Android</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#242424] p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-8">Development Options</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {developmentOptions.map((option) => (
                <div key={option.name} className="bg-[#1A1A1A] p-6 rounded-lg">
                  <span className="text-2xl mb-4 block">{option.icon}</span>
                  <h4 className="text-[#00E6A7] font-semibold">{option.name}</h4>
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
            <h3 className="text-2xl font-bold mb-8">Features Focus</h3>
            <div className="space-y-6">
              {displayedFeatures.map((feature) => (
                <div key={feature.name} className="bg-[#1A1A1A] p-6 rounded-lg">
                  <h4 className="text-[#00E6A7] font-semibold mb-2">{feature.name}</h4>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center space-x-2 mt-8">
              {[...Array(pageCount)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentPage === index ? 'bg-[#00E6A7] w-4' : 'bg-gray-500'
                  }`}
                  aria-label={`Page ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}