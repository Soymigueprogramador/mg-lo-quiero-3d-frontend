import styles from './CardWidget.module.scss';

const CardWidget = () => {
  //const carritoCompras = 'https://cdn-icons-png.flaticon.com/512/3144/3144456.png';
  const carritoCompras = '/public/image/CardWidget/carritoCompra.png';
  
  return (
    <div className={styles.card_widget_contarner}>
        <img src={carritoCompras} alt="Carrito de Compra" />

        <strong className={styles.contador}> 3 </strong>
    </div>
  );
}

export default CardWidget;
