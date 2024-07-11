import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Inicio from './page/Inicio/Inicio.jsx';
import Productos from './page/Productos/Productos.jsx';
import Contacto from './page/Contacto/Contacto.jsx';
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
