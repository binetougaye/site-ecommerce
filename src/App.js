
import './App.css';
import About from './Components/About_Us/About.jsx';
import Team from './Components/Team/Team.jsx';
import Testimonials from './Components/Testimonials/Testimonials.jsx';
import NavBar from './NavBar/NavBar.jsx';

function App() {
  return (
    <div>
      <NavBar />
      <div className='px-16'>
        <About />
        <Team />
        <Testimonials />
      </div>

    </div>
  );
}

export default App;
