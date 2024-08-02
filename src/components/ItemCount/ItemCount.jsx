import { useState } from "react";
import styles from './ItemCount.module.scss'

const ItemCount = () => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < 10) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div className={styles.contador}>
      <button className={styles.btn_contador} onClick={sumar}> + </button>
      <strong className={styles.contador_numero}> {contador} </strong>
      <button className={styles.btn_contador} onClick={restar}> - </button>
    </div>
  );
};

export default ItemCount;