import styles from './Item.module.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react";
import { getProductos } from '../../asyncMock.js';

function BasicExample({ image, nombre, id, precio, stock }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos()
      .then((res) => setProductos(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Card className={styles.card} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} alt={nombre} />
      <Card.Body>
        <h2 className={styles.text_card}>Nombre: {nombre}</h2>
        <p className={styles.text_card}>ID: {id}</p>
        <p className={styles.text_card}>Precio: {precio}</p>
        <p className={styles.text_card}>Stock: {stock}</p>
        <Button className={styles.btn_card}>Ver detalles</Button>
        <Button className={styles.btn_card}>Comprar ahora</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;