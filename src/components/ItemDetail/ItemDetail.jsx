import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount.jsx';

const ItemDetail = ({ imgge, nombre, id, precio, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const manejarCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log('Producto agregado con éxito: ' + cantidad);
  };
  
  return (
    <div>
      <img src={Image} alt={nombre} />
      <h2>Nombre: {nombre}</h2>
      <p>ID: {id}</p>
      <p>Precio: {precio}</p>
      <p>Stock: {stock}</p>
      {
        agregarCantidad > 0 ? 
        (<Link to='/cart'>Terminar compra</Link>) : 
        (<ItemCount inicial={1} stock={stock} funcionAgregar={manejarCantidad} />)
      }
    </div>
  );
};

export default ItemDetail;