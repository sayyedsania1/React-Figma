
import React from 'react';

const Navbar = () => {
  const navLinks = [
    "Home",
    "Studio",
    "Services",
    "Contact",
    "FAQ's",
  ];

  return (
    <header className="w-full bg-[#f5f5f5] px-5 sm:px-8 md:px-10 lg:px-16 py-6 md:py-8 select-none">
      
      <div className="max-w-[1618px] mx-auto flex items-center justify-between">

        {/* Left - LOGO */}
        <h1
          className="text-[22px] sm:text-[24px] md:text-[26px] font-normal tracking-tight text-black"
          style={{ fontFamily: "Gerbil" }}
        >
          Elementum
        </h1>

        {/* Center - NAV */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 lg:gap-12 text-[15px] font-normal">
            {navLinks.map((link) => (
              <li
                key={link}
                className="cursor-pointer text-[#5f5f5f] hover:text-black transition duration-200"
                style={{ fontFamily: "Satoshi" }}
              >
                {link}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right - MENU BUTTON */}
        <button
          aria-label="menu"
          className="group flex flex-col items-end gap-[5px] cursor-pointer"
        >
          <span className="block w-7 sm:w-8 h-[1.5px] bg-black transition-all duration-300"></span>

          <span className="block w-4 sm:w-5 h-[1.5px] bg-black transition-all duration-300 group-hover:w-7 sm:group-hover:w-8"></span>
        </button>

      </div>
    </header>
  );
};

export default Navbar;