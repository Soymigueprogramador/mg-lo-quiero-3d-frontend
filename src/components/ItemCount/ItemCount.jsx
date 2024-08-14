import { useState } from 'react';
import styles from './ItemCount.module.scss';

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
  const [contador, setContador] = useState(inicial);

  const sumar = () => {
    if (contador < stock) {
      setContador(prevContador => prevContador + 1);
      console.log(`Contador después de sumar: ${contador + 1}`);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(prevContador => prevContador - 1);
      console.log(`Contador después de restar: ${contador - 1}`);
    }
  };

  return (
    <>
      <div className={styles.contador}>
        <button className={styles.btn_contador} onClick={restar}> - </button>
        <strong className={styles.contador_numero}> {contador} </strong>
        <button className={styles.btn_contador} onClick={sumar}> + </button>
      </div>
      <button onClick={() => funcionAgregar && funcionAgregar(contador)}> Agregar al carrito </button>
    </>
  );
};

export default ItemCount;