import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount.jsx';
import styles from './ItemDetail.module.scss'

const ItemDetail = ({ image, nombre, id, precio, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const manejarCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log('Producto agregado con éxito: ' + cantidad);
  };
  
  return (
    <div className={styles.card_body}>
      <img src={image} alt={nombre} />
      <h2 className={styles.text_body}>Nombre: {nombre}</h2>
      <p className={styles.text_body}>ID: {id}</p>
      <p className={styles.text_body}>Precio: {precio}</p>
      <p className={styles.text_body}>Stock: {stock}</p>
      {
        agregarCantidad > 0 ? 
        ( <Link as={Link} to={`/Cart`} className={styles.btn_card}> Terminar compra </Link> ) : 
        (<ItemCount inicial={1} stock={stock} funcionAgregar={manejarCantidad} />)
      }
    </div>
  );
};

export default ItemDetail;