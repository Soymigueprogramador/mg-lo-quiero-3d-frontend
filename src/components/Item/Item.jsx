import styles from "./Item.module.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { productos } from "../../asyncMock.js";

function BasicExample() {
  return (
    <>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <Card
              key={producto.id}
              className={styles.card}
              style={{ width: "18rem" }}
            >
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
                <Button className={styles.btn_card}>Ver detalles</Button>
                <Button className={styles.btn_card}>Comprar ahora</Button>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
}

export default BasicExample;