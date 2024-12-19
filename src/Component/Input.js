import React from "react";

export default function Input({elementForm , handleChange}){
    return <div>
        <input
            name={elementForm.label.replace(/\s+/g, "-").toLowerCase()}
            type={elementForm.type}
            placeholder={elementForm.placeholder}
            onChange={handleChange}
            className="w-full border-2 border-gray rounded py-1"
            style={{paddingBottom: elementForm.paddingBottom || "auto"}}
        />
    </div>
}