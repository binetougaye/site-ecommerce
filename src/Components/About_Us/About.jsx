import React from "react";
import about from "../../assets/images/about_1.jpeg";
export default function About() {
    return (
        <div className="flex md:flex-row flex-col-reverse gap-14 md:items-start items-center justify-center mt-40">
            <div>
                <img className="md:max-w-lg w-full" src={about} alt="" />
            </div>
            <div className="md:text-start text-center">
                <h5 className="text-[#adb5bd] text-[13px]">Merchant Company</h5>
                <h1 className="text-[40px] font-medium ">About Us</h1>
                <p className="text-[#808080] text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Qui fuga ipsa, repellat blanditiis nihil, consectetur.
                    Consequuntur eum inventore, rem maxime, nisi excepturi ipsam
                    libero ratione adipisci alias eius vero vel!
                </p>
            </div>
        </div>
    );
}
