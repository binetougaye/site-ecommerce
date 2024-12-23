import './App.css';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Testimonials from './Pages/Testimonials/Testimonials';
import About from './Components/About_Us/About.jsx';
import Team from './Components/Team/Team.jsx';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar/NavBar.jsx';
import Service from './Components/Services/Service.jsx';
import Inscription from './Components/Authentification/Inscription.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<div>
        <NavBar />
        <div className='px-16'>
          <About />
          <Team />
          <Service />
          <Testimonials />
          <Blog />
          <Contact />
        </div>

      </div>} />
      <Route path='/register' element={<Inscription />} />

    </Routes>

  );
}

export default App;
