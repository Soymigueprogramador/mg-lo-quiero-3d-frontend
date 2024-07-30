import styles from './ItemListContainer.module.scss';
import { useState, useEffect } from "react";
import { getProductos } from '../../asyncMock.js'; // Asegúrate de tener esta función en tu archivo

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const res = await getProductos();
        setProductos(res);
      } catch (error) {
        console.log(error);
      } 
    };
    fetchProductos();
  }, []);
  
  return (
    <div className={styles.itemListContainer}>
      <h1 className={styles.greeting}>
        {props.greeting}
      </h1>
    </div>
  );
};

export default ItemListContainer;
