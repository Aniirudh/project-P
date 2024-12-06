import React, { useState, useEffect } from 'react';

const navItems = [
  { name: 'Ideation', description: 'Transform ideas into viable products' },
  { name: 'Product design', description: 'User-centric design that delivers results' },
  { name: 'Web development', description: 'Scalable solutions for modern businesses' },
  { name: 'Mobile development', description: 'Native and cross-platform excellence' },
  { name: 'Low-code development', description: 'Rapid deployment with enterprise quality' },
  { name: 'Machine learning', description: 'AI-powered business transformation' },
  { name: 'Support', description: 'Continuous maintenance and optimization' },
];

export default function SecondaryNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [activeItem, setActiveItem] = useState(null);
  const [navbarTranslated, setNavbarTranslated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);

      // Check which section is currently in view
      const sections = navItems.map(item =>
        document.getElementById(item.name.toLowerCase().replace(' ', '-'))
      );

      const header = document.getElementById('primaryHeader');
      setNavbarTranslated(header?.classList.contains('-translate-y-full'));

      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId, event) => {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = navbarTranslated ? 0 : 80;
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };
  console.log("navbarTranslated", navbarTranslated)
  return (
    <nav
      className={`sticky z-40 bg-black transition-all duration-300 ${isVisible ? navbarTranslated ? 'top-0' : 'top-20 opacity-100 translate-y-0' : 'top-20 opacity-0 -translate-y-full hidden'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto">
          <div className="flex justify-center space-x-10">
            {navItems.map((item) => {
              const sectionId = item.name.toLowerCase().replace(' ', '-');
              const isActive = activeSection === sectionId;

              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveItem(item.name)}
                  onMouseLeave={() => setActiveItem(null)}
                >
                  <div
                    className={`absolute inset-0 w-full h-full transition-colors duration-200 ${(isActive || activeItem === item.name) ? 'border-b-2 border-[#00E6A7]' : ''
                      }`}
                  />
                  <a
                    href={`#${sectionId}`}
                    onClick={(e) => scrollToSection(sectionId, e)}
                    className={`relative block px-4 py-6 text-sm font-medium transition-colors duration-200 ${isActive || activeItem === item.name
                        ? 'text-[#00E6A7]'
                        : 'text-white hover:text-[#00E6A7]'
                      }`}
                  >
                    {item.name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}