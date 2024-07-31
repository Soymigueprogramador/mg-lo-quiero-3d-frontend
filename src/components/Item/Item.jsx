import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { productos } from "../../asyncMock.js";
import { Link } from 'react-router-dom';
import styles from './Item.module.scss';

function BasicExample({ image, nombre, id, precio, stock}) {
  return (
    <>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <div className={styles.card_container}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={producto.image}
                  alt={producto.nombre}
                />
                <Card.Body>
                  <h2 className={styles.text_card}>Nombre: {producto.nombre}</h2>
                  <p className={styles.text_card}>ID: {producto.id}</p>
                  <p className={styles.text_card}>Precio: {producto.precio}</p>
                  <p className={styles.text_card}>Stock: {producto.stock}</p>
                  <Button as={Link} to={`/item/${producto.id}`} className={styles.btn_card}>Ver detalles</Button> 
                  <Button className={styles.btn_card}>Comprar ahora</Button>
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