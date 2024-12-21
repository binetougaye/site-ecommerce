import React from "react";
import about from "../../assets/images/about_1.jpeg";
export default function About() {
    return (
        <div className="flex gap-14 justify-center mt-40">
            <div>
                <img className="max-w-lg" src={about} alt="" />
            </div>
            <div>
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
