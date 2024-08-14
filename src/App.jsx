import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import Cart from './components/Cart/Cart.jsx';
import Inicio from './page/Inicio/Inicio.jsx';
import Productos from './page/Productos/Productos.jsx';
import Contacto from './page/Contacto/Contacto.jsx';
import Footer from "./components/Footer/Footer.jsx";
//import ItemCount from "./components/ItemCount/ItemCount.jsx"; 

const App = () => {
  const nameEcommerce = "MG lo quiero 3D";

  const handleAgregar = (cantidad) => {
    console.log(`Se agregaron ${cantidad} productos al carrito.`);
  };

  return (
    <Router>
      <CarritoProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contacto" element={<Contacto />} />

          <Route 
            path="*" 
            element={<h1>El sitio {nameEcommerce} está en proceso de producción</h1>} 
          />
        </Routes>
      </CarritoProvider>

      {/* <ItemCount inicial={1} stock={10} funcionAgregar={handleAgregar} /> */}
      
      <Footer />
    </Router>
  );
};

export default App;