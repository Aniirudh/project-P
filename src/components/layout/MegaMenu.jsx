import React from 'react';
import { Link } from 'react-router-dom';

export function MegaMenu({ sections, onMouseLeave }) {
  return (
    <div
      className="bg-black shadow-lg py-10 px-6 border-t-[0.15px] border-[#c1c7d0] flex flex-row "
      onMouseLeave={onMouseLeave}
    >
      <div className="mx-auto grid grid-cols-3 gap-16 border-r border-[#c1c7d0] pr-10 py-5">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm font-bold text-[#c1c7d0] uppercase tracking-wide mb-4 font-dmsans">
              {section.title}
            </h3>
            <ul className="space-y-4">
              {section.items.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-white hover:text-[#c1c7d0] transition-colors  font-dmsans"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Link to='/services' className='cursor-pointer relative -left-[300px] text-white hover:text-[#c1c7d0] transition-colors flex flex-row justify-start items-center font-dmsans'>
        All services {">>"}
      </Link>
    </div>
  );
}