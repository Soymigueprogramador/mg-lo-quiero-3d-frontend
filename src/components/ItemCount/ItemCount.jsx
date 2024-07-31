import { useState } from "react";

const ItemCount = () => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < 10) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <>
      <button onClick={sumar}> + </button>
      <strong> {contador} </strong>
      <button onClick={restar}> - </button>
    </>
  );
};

export default ItemCount;