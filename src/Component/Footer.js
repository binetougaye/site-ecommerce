import react from "react";
import imgBlog2 from "../assetes/imgBlog2.webp"
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter,FaInstagram , FaLinkedinIn} from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";

export default function Footer(){
    return <div className="p-20">
        <div className="md:grid md:grid-cols-4 gap-4 ">
        <div className="mt-10 md:mt-0">
            <p className="font-bold text-xl mb-2 md:mb-5">About AS</p>
            <p className="text-gray-500 font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere 
                laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis 
                aliquam.
            </p>
        </div>
        <div className="mt-10 md:mt-0">
            <p className="font-bold text-xl mb-2 md:mb-5">Quick Links</p>
            <p className="text-gray-500 font-bold">About Us</p>
            <p className="text-gray-500 font-bold">Services</p>
            <p className="text-gray-500 font-bold">Testimonials</p>
            <p className="text-gray-500 font-bold">Contact Us</p>
        </div>
        <div className="mt-6 md:mt-0">
            <p className="font-bold text-xl mb-2 md:mb-5">Follow Us</p>
            <div className="flex gap-5">
                <TiSocialFacebook className="text-2xl text-gray-500 cursor-pointer"/>
                <FaTwitter  className=" text-xl text-gray-500 cursor-pointer"/>
                <FaInstagram  className="text-xl text-gray-500 cursor-pointer"/>
                <FaLinkedinIn  className="text-xl text-gray-500 cursor-pointer"/>
            </div>
        </div>
        <div className="mt-10 md:mt-0">
            <p className="font-bold text-xl mb-2 md:mb-5">Featured Product</p>
            <img src={imgBlog2} alt="image" className="my-4"/>
            <p className="text-xl ">Leather Brown Shoe</p>
            <p className="font-bold my-3">$60.00</p>
            <button className="px-5 py-2 bg-black text-white font-bold">Add To Card</button>

        </div>
        </div>
        <p className="text-gray-500 text-center text-xl my-20 ">Copyright ©2024 All rights reserved | This template is made with <IoMdHeart className="inline-block"/> by Colorlib</p>
    </div>
}