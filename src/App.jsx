import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
//import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
//import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import Inicio from './page/Inicio/Inicio.jsx';
import Productos from './page/Productos/Productos.jsx';
import Contacto from './page/Contacto/Contacto.jsx';
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  const nameEcommerce = "MG lo quiero 3D";

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<h1>El sitio {nameEcommerce} está en proceso de producción</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;