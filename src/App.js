import './App.css';
import Footer from './Component/Footer';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Testimonials from './Pages/Testimonials/Testimonials';

function App() {
  return (
    <div>
      <Footer/>
      <Testimonials/>
      <Contact/>
      <Blog/>
    </div>
  );
}

export default App;
