import React from "react";
import { services } from "../../utils/data";
import Title from "../Title/Title";
export default function Service() {
    return (
        <div className="mt-28">
            <Title title="We offer services" text="our services" />
            <div className="grid md:grid-cols-3 grid-cols-1 md:place-content-start place-content-center md:place-items-start place-items-center gap-12 mt-16">
                {services?.map((item, index) => (
                    <div
                        className="flex w-[350px] items-start space-x-4"
                        key={index}
                    >
                        <p className="text-[#f16821] text-4xl">{item.icon}</p>
                        <div>
                            <p className="text-[#808080] text-[20px] font-semibold">
                                {item.title}
                            </p>
                            <p className="text-[20px] text-[#606060]">
                                {item.description}
                            </p>
                            <p className="text-[#f16821] mt-5 font-medium cursor-pointer">
                                Learn more
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
