import React, { useState } from "react";
import "../App.css";
import Header from "../Header/Header";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
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
                        <Link
                            to="#"
                            className="text-[16px] hover:text-red-500 duration-500"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            className="text-[16px] hover:text-red-500 duration-500"
                        >
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            className="text-[16px] hover:text-red-500 duration-500"
                        >
                            About Us
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="#"
                            className="text-[16px] hover:text-red-500 duration-500"
                        >
                            Testimonials
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            className="text-[16px] hover:text-red-500 duration-500"
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/register"
                            className="text-[24px] hover:text-red-500 duration-500"
                        >
                            <FaRegUser />
                        </Link>
                    </li>
                    <li className="relative">
                        <Link
                            to=""
                            className="text-[24px] relative hover:text-red-500 duration-500"
                        >
                            <MdOutlineShoppingCart />
                        </Link>
                        <div>
                            <span className="bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full absolute -top-2 -right-2">
                                0
                            </span>
                        </div>
                    </li>
                </ul>
            </nav>
            <Header />
            <section className="gros-image pt-5"></section>
        </div>
    );
}

export default NavBar;
