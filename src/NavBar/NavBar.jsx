import React, { useState } from "react";
import "../App.css";
import Header from "../Header/Header";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
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
                    className="md:hidden absolute right-5 top-5 cursor-pointer"
                    onClick={toggleMenu}
                >
                    <div className="w-6 h-0.5 bg-black mb-1"></div>
                    <div className="w-6 h-0.5 bg-black mb-1"></div>
                    <div className="w-6 h-0.5 bg-black mb-1"></div>
                </div>

                {/* Menu */}
                <ul
                    className={`md:flex md:items-center md:static gap-4 absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 top-[-400] transition-all duration-500 ${
                        isOpen ? "top-0 opacity-100" : ""
                    }`}
                >
                    <li>
                        <a
                            href="#"
                            className="text-[16px] hover:text-red-500 duration-500"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-[16px] hover:text-red-500 duration-500"
                        >
                            Products
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-[16px] hover:text-red-500 duration-500"
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-[16px] hover:text-red-500 duration-500"
                        >
                            Special
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-[16px] hover:text-red-500 duration-500"
                        >
                            Testimonials
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-[16px] hover:text-red-500 duration-500"
                        >
                            Blog
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-[16px] hover:text-red-500 duration-500"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <Header />
            <section className="gros-image pt-5"></section>
        </div>
    );
}

export default NavBar;
