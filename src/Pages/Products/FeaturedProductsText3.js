import React from "react";

export default function FeaturedProductsText3() {
    return (
        <div>
            <div className="flex justify-center mt-8">
                <div className="bg-white  w-[95%]  md:w-[95%] lg:w-[95%]  p-4 md:p-[50px]">
                    <div className="flex">
                    <div className="  flex flex-col md:flex-row justify-center md:justify-start gap-3">
                       
                        <div className="w-full md:w-1/2 px-4 md:ml-[40px]">
                            <div className="flex flex-col justify-center items-start text-left">
                                <h2 className="text-xl md:text-2xl font-bold tracking-wide">About This Product</h2>
                                <p className="text-sm md:text-base text-gray-400 mt-4 md:mt-[20px] leading-relaxed">
                                    Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate asperiores quasi accusantium voluptatum dolorem quae sapiente voluptatem ratione odio iure blanditiis earum fuga molestiae alias dicta perferendis inventore!
                                    <br/>
                                    <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus soluta assumenda sed optio, error at?
                                </p>
                                <h2 className="text-xl md:text-2xl font-bold mt-3">Price:</h2>
                                <div className="flex gap-3 mt-3">
                                    <p className="text-gray-400 line-through">$269.00</p>
                                    <p className="text-black font-bold">$69.00</p>
                                </div>
                                <div className="flex flex-col">
    <div className="mt-5 flex flex-col md:flex-row justify-center md:justify-start gap-3">
        <button className="border-2 border-black p-2 w-[125px] h-[38px] font-bold text-sm text-center text-black bg-white hover:bg-black hover:text-white">
            VIEW DETAILS
        </button>
        <button className="p-2 border-2 w-[125px] h-[38px] font-bold text-sm text-center text-white bg-black hover:bg-white hover:border-black hover:text-black border-transparent">
            ADD TO CART
        </button>
    </div>
</div>

                            </div>
                        </div>
                        <div className="w-full md:w-1/2 ">
                        <img src="/images/product_1_bg.jpeg" alt=" florales" className=" w-full md:w-[460px] object-cover" />

                        </div>

                    </div>
                </div>
            </div>
            </div>

        </div>
    );
}
