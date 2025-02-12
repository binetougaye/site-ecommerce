import React from "react";
import Footer from '../Component/Footer.js';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Testimonials from './Testimonials/Testimonials';
import Products from './Products/Products';
import About from '../Components/About_Us/About.jsx';
import NavBar from '../../src/NavBar/NavBar.jsx';
export default function Accueil(){
    return<div>
        <NavBar/>
      <div className="px-16">
        <section id="products">
          <Products />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="testimonial">
          <Testimonials />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </div>
}