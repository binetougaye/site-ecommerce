import './App.css';
import Footer from './Component/Footer';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Testimonials from './Pages/Testimonials/Testimonials';
import Products from './Pages/Products/Products';


import './App.css';
import About from './Components/About_Us/About.jsx';
import Team from './Components/Team/Team.jsx';
// import Testimonials from './Components/Testimonials/Testimonials.jsx';
import NavBar from './NavBar/NavBar.jsx';

function App() {
  return (
    <div>

      <NavBar />

      <div className='px-16'>
        <Products />
        <About />
        <Team />
        <Testimonials />
        <Blog />
        <Contact />
        <Footer />
      </div>

    </div>
  );
}

export default App;
