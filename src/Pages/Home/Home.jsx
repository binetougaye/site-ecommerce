import React from "react";
import Products from "../Products/Products";
import { About, Team } from "../../Components";
import Testimonials from "../Testimonials/Testimonials";

export default function Home() {
    return (
        <>
            <Products />
            <About />
            <Team />
            <Testimonials />
        </>
    );
}
