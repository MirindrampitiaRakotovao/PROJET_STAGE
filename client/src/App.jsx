import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import  Index from './pages/index';
import Inscription from './pages/Signup/inscription';
import Accueil from './pages/Accueil/Accueil';
import Publier from './pages/Publier/Publier';
import MesIdees from './pages/Mes idees/Idees';
import Affichage from './pages/Affichage/affichage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <ToastContainer position="top-center"></ToastContainer>
      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<Inscription />} />
          <Route path="/dashboard" element={<Accueil />} />
          <Route path="/publier" element={<Publier />} />
          <Route path="/idees" element={<MesIdees/>} />
          <Route path="/afficher" element={<Affichage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

