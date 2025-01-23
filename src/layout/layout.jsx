import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Component/Footer";

const MainLayout = ({ children }) => (
    <div>
        <NavBar />
        <div className="px-16">{children}</div>
        <Footer />
    </div>
);
export default MainLayout;
