import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog } from '@headlessui/react';
import { MegaMenu } from './MegaMenu';
import logo from '../../../public/logoWhite.png'

const navigation = [
  {
    name: 'Services',
    href: '/services',
    hasDropdown: true,
    dropdownSections: [
      {
        title: "IDEATION",
        items: [
          { name: "Rapid Prototyping", href: "/services/rapid-prototyping" },
          { name: "Research & Development", href: "/services/research-development" },
          { name: "User Research & Testing", href: "/services/user-research" },
          { name: "Product Strategy", href: "/services/product-strategy" },
        ]
      },
      {
        title: "SOFTWARE DEVELOPMENT",
        items: [
          { name: "Web Development", href: "/services/web-development" },
          { name: "Mobile Development", href: "/services/mobile-development" },
          { name: "MVPs", href: "/services/mvp" },
          { name: "Cloud Strategy", href: "/services/cloud-strategy" },
        ]
      },
      {
        title: "DESIGN",
        items: [
          { name: "Product Design", href: "/services/product-design" },
          { name: "UX Design", href: "/services/ux-design" },
          { name: "UI Design", href: "/services/ui-design" },
          { name: "Design Systems", href: "/services/design-systems" },
        ]
      },
      {
        title: "GENERATIVE AI AND DATA",
        items: [
          { name: "AI Development", href: "/services/ai-development" },
          { name: "Generative AI Development", href: "/services/generative-ai" },
          { name: "Data Engineering", href: "/services/data-engineering" },
        ]
      },
      {
        title: "MAINTENANCE",
        items: [
          { name: "Quality Assurance" },
          { name: "Product Management" },
          { name: "Software Maintenance Services" },
        ]
      }
    ]
  },
  // { name: 'Industries', href: '/industries', hasDropdown: true },
  { name: 'Clients', href: '/clients' },
  { name: 'About us', href: '/about' },
  { name: 'Insights', href: '/insights' },
];

// Custom hook for scroll behavior
const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      // Only trigger when scrolling more than 5px to prevent tiny movements
      if (Math.abs(currentScroll - prevScroll) < 5) return;

      const direction = currentScroll > prevScroll ? 'down' : 'up';
      if (direction !== scrollDirection) {
        setScrollDirection(direction);
      }

      setPrevScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollDirection, prevScroll]);

  return scrollDirection;
};


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const handleMouseLeave = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.relatedTarget)
      ) {
        setActiveDropdown(null);
      }
    };

    const currentDropdownRef = dropdownRef.current;
    if (currentDropdownRef) {
      currentDropdownRef.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        currentDropdownRef.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [activeDropdown]);

  const handleMouseEnter = (itemName) => {
    if (window.innerWidth >= 1024) {
      setActiveDropdown(itemName);
    }
  };

  return (
    <header id="primaryHeader" className={`fixed w-full bg-black z-50 text-white transition-transform duration-300 ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
      }`}>
      <nav
        className="relative mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 text-white"
        aria-label="Global"
      >
        <div className="flex flex-row lg:flex-1 items-center gap-4">
          <img src={logo} className="w-7 h-7" />
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold font-dmsans">Preeminence</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.name)}
            >
              <Link
                to={item.href}
                className={`text-sm font-dmsans font-semibold leading-6 text-white hover:text-[#c1c7d0] transition-colors ${activeDropdown === item.name ? 'text-[#c1c7d0]' : ''
                  }`}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/contact"
            className="text-sm font-semibold leading-6 px-4 py-2 bg-[#00E5A0] text-black rounded-md hover:bg-[#00c288] transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </nav>

      {/* Mega Menu */}
      {activeDropdown === 'Services' && (
        <div
          ref={dropdownRef}
          className="absolute w-full left-0 top-[85px]"
        >
          <MegaMenu sections={navigation[0].dropdownSections} />
        </div>
      )}


      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} onClose={setMobileMenuOpen}
      >
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold">YourCompany</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  to="/contact"
                  className="block text-sm font-semibold leading-6 px-4 py-2 bg-[#00E5A0] text-black rounded-md hover:bg-[#00c288] text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog>
    </header>
  );
}