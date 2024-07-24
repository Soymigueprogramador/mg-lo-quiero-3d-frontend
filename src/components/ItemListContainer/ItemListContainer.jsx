import styles from './ItemListContainer.module.scss';
import { useState, useEffect } from "react";
import { getProductos } from '../../asyncMock.js';

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos()
      .then((res) => {
        // Usar un Map para eliminar duplicados basados en el ID del producto
        const productosMap = new Map();
        res.forEach(producto => {
          if (!productosMap.has(producto.id)) {
            productosMap.set(producto.id, producto);
          }
        });
        setProductos(Array.from(productosMap.values()));
      })
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <h1 className={styles.greeting}>
      {props.greeting}
    </h1>
  );
};

export default ItemListContainer;