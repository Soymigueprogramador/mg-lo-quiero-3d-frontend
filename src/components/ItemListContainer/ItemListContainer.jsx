import styles from './ItemListContainer.module.scss';
import ItemList from '../ItemList/ItemList.jsx'
import { useState, useEffect } from "react";
import { getProductos, getProductoPorCategoria } from '../../asyncMock.js';
import { useParams } from 'react-router-dom';


const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams(); 

  useEffect(() => {
    const funcion = idCategoria ? getProductoPorCategoria : getProductos;
    funcion( idCategoria )

  }, [ idCategoria ]); 
  
  return (
    <div className={styles.itemListContainer}>
      <h1 className={styles.greeting}>
        {props.greeting}
        <ItemList productos={productos} />
      </h1>
    </div>
  );
};

export default ItemListContainer;