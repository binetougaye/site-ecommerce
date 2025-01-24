import React from "react";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import ProductCard from "./ProductCard";
import ProductText from "./ProductText";
import InputProduct from "./InputProduct";
import FeaturedProducts from "./FeaturedProducts";

export default function Products() {
    const products = [
        {
            id: 1,
            name: "Wild West Hoodie",
            lorem: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            image: "/images/model1.jpg",
            iconstar: <FaStar />,
            p_star: "5.0",
            iconheart: <FaHeart />,
            p_heart: "29",
            button_cart: "CART",
            button_view: "VIEW",
        },
        {
            id: 2,
            name: "Wild West Hoodie",
            lorem: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            image: "/images/model_2_bg.jpeg",
            iconstar: <FaStar />,
            p_star: "5.0",
            iconheart: <FaHeart />,
            p_heart: "29",
            button_cart: "CART",
            button_view: "VIEW",
        },
        {
            id: 3,
            name: "Wild West Hoodie",
            lorem: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            image: "/images/model_3_bg.jpg.webp",
            iconstar: <FaStar />,
            p_star: "5.0",
            iconheart: <FaHeart />,
            p_heart: "29",
            button_cart: "CART",
            button_view: "VIEW",
        },
        {
            id: 4,
            name: "Wild West Hoodie",
            lorem: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            image: "/images/model_4_bg.jpeg",
            iconstar: <FaStar />,
            p_star: "5.0",
            iconheart: <FaHeart />,
            p_heart: "29",
            button_cart: "CART",
            button_view: "VIEW",
        },
        {
            id: 5,
            name: "Wild West Hoodie",
            lorem: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            image: "/images/model_5_bg.jpeg",
            iconstar: <FaStar />,
            p_star: "5.0",
            iconheart: <FaHeart />,
            p_heart: "29",
            button_cart: "CART",
            button_view: "VIEW",
        },
        {
            id: 6,
            name: "Wild West Hoodie",
            lorem: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            image: "/images/product_1_bg.jpeg",
            iconstar: <FaStar />,
            p_star: "5.0",
            iconheart: <FaHeart />,
            p_heart: "29",
            button_cart: "CART",
            button_view: "VIEW",
        },
    ];
    return (
        <div>
            <div className="pt-5" id="Our_Products">
                <div className="text-center">
                    <ProductText />
                </div>
                <div>
                    <div className="flex flex-wrap justify-center gap-8 mt-8">
                        {products.slice(0, 3).map((produit) => (
                            <ProductCard key={produit.id} produit={produit} />
                        ))}
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 mt-8">
                        {products.slice(3).map((produit) => (
                            <ProductCard key={produit.id} produit={produit} />
                        ))}
                    </div>
                </div>
            </div>
            <div
                className="pt-5 mt-[100px] w-full">
                <div className=" h-[300px] bg-cover bg-center  "
                    style={{
                        backgroundImage: `url("images/hero_2.jpg")`
                    }}>
                    <div className="text-center text-white h-full flex flex-col justify-center items-center bg-black/50">
                        <InputProduct />
                        </div>
                </div>
            </div>
            <div className="bg-slate-100 h-auto min-h-screen px-4 md:px-8 lg:px-16 py-10">
    <FeaturedProducts />
</div>
     </div>
    );
}
