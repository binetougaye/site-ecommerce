import React, { useState } from "react";
import "../App.css";
import Header from "../Header/Header";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FaRegUser } from "react-icons/fa";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false); 
    };

    return (
        <div>
            <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-around relative">
                <div>
                    <span className="text-4xl font-poppins cursor-pointer font-black">
                        Selling
                    </span>
                </div>

                {/* Icône Hamburger */}
                <div
                    className="md:hidden absolute right-5 top-10 cursor-pointer"
                    onClick={toggleMenu}
                >
                    <div className="w-6 h-0.5 bg-black mb-1"></div>
                    <div className="w-6 h-0.5 bg-black mb-1"></div>
                    <div className="w-6 h-0.5 bg-black"></div>
                </div>

                {/* Menu */}
                <ul
                    className={`md:flex md:items-center md:static gap-4 absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 top-16 transition-all duration-500 ${
                        isOpen ? "opacity-100 z-50" : ""
                    }`}
                >
                    <li>
                        <button
                            onClick={() => handleScroll("products")}
                            className="text-[16px] hover:text-red-500 duration-500"
                        >
                            Products
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleScroll("about")}
                            className="text-[16px] hover:text-red-500 duration-500"
                        >
                            About Us
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleScroll("testimonial")}
                            className="text-[16px] hover:text-red-500 duration-500"
                        >
                            Testimonials
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleScroll("blog")}
                            className="text-[16px] hover:text-red-500 duration-500"
                        >
                            Blog
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleScroll("contact")}
                            className="text-[16px] hover:text-red-500 duration-500"
                        >
                            Contact
                        </button>
                    </li>
                    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5  bg-white px-3 py-2 text-sm font-semibold text-black ring-1 shadow-xs ring-black ring-inset hover:bg-gray-50">
        <FaRegUser />
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute  left-0 z-10 mt-2 w-32 origin-top-right  bg-white  shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="">
            <MenuItem>
              <button
                type="submit"
                className="block w-full bg-gray-100 px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
               Inscription
              </button>
            </MenuItem>
            <MenuItem>
              <button
                type="submit"
                className=" mt-1 block w-full bg-gray-100 px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
               Connexion
              </button>
            </MenuItem>
        </div>
      </MenuItems>
    </Menu>

                </ul>
           
            </nav>
            <Header />
            <section className="gros-image pt-5"></section>
        </div>
    );
}

export default NavBar;
