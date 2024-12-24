import React from "react";

export default function InputProduct() {
    return (
        <div className="px-4 sm:px-8 lg:px-16 py-8">
            <h2 className="text-2xl sm:text-3xl text-center font-semibold">
                Get notified on each update.
            </h2>
            <div className="flex flex-wrap mt-5 justify-center ">
                <input
                    name=""
                    type="email"
                    placeholder="Enter your email address"
                    className="p-2 bg-transparent w-full sm:w-11/12 lg:w-[530px] italic border-2 border-gray-300 "
                />
                <button className="border-2 border-white p-3 w-full sm:w-auto lg:w-[130px] font-bold text-sm text-center text-white bg-transparent hover:bg-white hover:text-black">
                    SUBSCRIBE
                </button>
            </div>
            <p className="mt-5 text-center text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi veniam <br className="hidden sm:block" />
                doloremque ducimus tempora.
            </p>
        </div>
    );
}
