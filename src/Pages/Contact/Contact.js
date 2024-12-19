import React from "react";
import Form from "../../Component/Form";

export default function Contact() {

  return (
    <div className="p-4 md:w-1/2 mx-auto font-sans mb-5">
      <p className="text-center text-gray-400  font-bold">Contact Form</p>
      <h1 className="text-3xl font-bold text-center my-4">Get In Touch</h1>
      <h4 className="text-start my-5">Contact Form</h4>
      <Form/>
    </div>
  );
}
