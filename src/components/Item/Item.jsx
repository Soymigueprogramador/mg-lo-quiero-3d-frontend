import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { productos } from "../../asyncMock.js";
import { Link } from 'react-router-dom';
import styles from './Item.module.scss';
import ItemCount from '../ItemCount/ItemCount.jsx'

function BasicExample({ image, nombre, id, precio, stock}) {
  return (
    <>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <div className={styles.card_container}>
              <Card className={styles.card_body}>
                <Card.Img
                  src={producto.image}
                  alt={producto.nombre}
                />
                <Card.Body className={styles.card_body}>
                  <h2 className={styles.text_body}>Nombre: {producto.nombre}</h2>
                  <p className={styles.text_body}>ID: {producto.id}</p>
                  <p className={styles.text_body}>Precio: {producto.precio}</p>
                  <p className={styles.text_body}>Stock: {producto.stock}</p>
                  <ItemCount />
                  <Button as={Link} to={`/item/${producto.id}`} className={styles.btn_card}>Ver detalles</Button> 
                  <Button className={styles.btn_card}> Aregar al carrito </Button>
                </Card.Body>
              </Card>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default BasicExample;