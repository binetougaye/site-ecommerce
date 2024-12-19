import React from "react";

export default function Label({elementForm}){
    return <div>
        <label
            htmlFor={elementForm.label.replace(/\s+/g, "-").toLowerCase()}
            className="mb-2 block"
        >
            {elementForm.label}
        </label>
    </div>
}