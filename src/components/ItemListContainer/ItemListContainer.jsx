import styles from './ItemListContainer.module.scss';
import { useState, useEffect } from "react";
import { getUnProducto } from '../../asyncMock.js';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);
  const { idItem } = useParams();

  useEffect(() => {
    {/* 
    const fetchProductos = async () => {
      try {
        const res = await getProductos();
        setProductos(res);
      } catch (error) {
        console.log(error);
      } 
    }; 
    */}
    getUnProducto(idItem)
      .then(res => setProductos([res]))  
      .catch(error => console.log(error));
  }, [idItem]);
  
  return (
    <div>
      <h1 className={styles.greeting}>
        {props.greeting}
      </h1>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            {producto.nombre} - ${producto.precio} - Stock: {producto.stock}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
