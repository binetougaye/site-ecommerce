import { useState } from "react";
import { ElementForms } from "./ElementForms";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";


export default function Form(){
      const [formData , setFormData] = useState({})  

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log("les donnes du formulaire sont : " , formData);
      } 

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData , [name]: value});
      };

    return <form onSubmit={handleSubmit}>
        {ElementForms.map((elementForm, index) => {
            const isHalfWidth = elementForm.width === "50%";
          return (
            <div
              key={index}
              style={{
                display: isHalfWidth ? "inline-block" : "block",
                width: isHalfWidth ? "48%" : "100%", 
                padding: "5px",
                marginBottom: "20px",
              }}
            >
              <Label elementForm={elementForm}/>
              <Input 
                elementForm={elementForm} 
                handleChange={handleChange} 
                value={formData[elementForm.name] || ""}
                // width={}
              />
            </div>
          );
        })}
        <Button/>
      </form>
}