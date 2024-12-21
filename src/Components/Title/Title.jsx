import React from "react";

export default function Title({ text, title }) {
    return (
        <div className="text-center">
            <h5 className="text-[#adb5bd] uppercase text-[13px]">{text}</h5>
            <h1 className="text-[40px] font-bold">{title}</h1>
        </div>
    );
}
