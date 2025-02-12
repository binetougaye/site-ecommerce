import './App.css';
import { Routes , Route } from 'react-router-dom';
import Accueil from './Pages/Accueil.js';
import Dashbord from './Admin/Dashbord.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Accueil/>}></Route>
        <Route path='/dashbord' element={<Dashbord/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;

