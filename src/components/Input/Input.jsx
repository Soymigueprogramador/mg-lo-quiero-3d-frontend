import styles from "./Input.module.scss";
import { useState } from "react";

const Input = () => {
  const [nombre, setNombre] = useState("");

  return (
    <input
      type="text"
      placeholder="Buscar productos"
      value={nombre}
      onChange={(e) => setNombre(e.target.value)}
      className={styles.input}
    />
  );
};

export default Input;
