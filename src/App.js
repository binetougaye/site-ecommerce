import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Inscription, Connexion } from "./Components/Authentification/index.js"
import Provider from './context/Provider.js';
import MainLayout from './layout/layout.jsx';
import Home from './Pages/Home/Home.jsx';

function App() {
  return (
    <>
      <Provider>
        <Routes>
          <Route path='/' element={<MainLayout>
            <Home />
          </MainLayout>} />
          <Route path='/register' element={<Inscription />} />
          <Route path='/auth' element={<Connexion />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
