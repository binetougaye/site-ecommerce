import React from "react";
import hero from "../assets/images/hero_2.jpeg";

export default function Header() {
    return (
        <div className="relative">
            {/* Image de fond */}
            <img
                className="h-[85vh] w-full object-cover"
                src={hero}
                alt="Hero"
            />

            {/* Texte superposé */}
            <div className="absolute inset-0 flex flex-col justify-center items-start text-white bg-black/50 pl-12">
                <h1 className="text-[80px] font-bold mb-4">Shop With Us</h1>
                <p className="text-[20px] mb-6 max-w-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam assumenda ea quo cupiditate facere deleniti fuga
                    officia.
                </p>
                <button className="px-12 py-3 bg-transparent border border-white text-white  shadow-lg hover:bg-white hover:text-black transition">
                    Shop Now
                </button>
            </div>
        </div>
    );
}
