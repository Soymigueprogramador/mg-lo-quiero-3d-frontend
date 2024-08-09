import { useState } from "react";
import styles from './ItemCount.module.scss'

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  return (
    <>
      <div className={styles.contador}>
        <button className={styles.btn_contador} onClick={sumar}> + </button>
        <strong className={styles.contador_numero}> {contador} </strong>
        <button className={styles.btn_contador} onClick={restar}> - </button>
      </div>
      <button onClick={() => funcionAgregar(contador)} > Agregar al carrito </button>
    </>
  );
};

export default ItemCount;