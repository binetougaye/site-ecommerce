import './App.css';
import Footer from './Component/Footer';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Testimonials from './Pages/Testimonials/Testimonials';
import Products from './Pages/Products/Products';
import About from './Components/About_Us/About.jsx';
import Team from './Components/Team/Team.jsx';
import NavBar from './NavBar/NavBar.jsx';

function App() {
  return (
    <div>
      <NavBar />
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
  );
}

export default App;

