import styles from './CardWidget.module.scss';

const CardWidget = () => {
  //const carritoCompras = 'https://cdn-icons-png.flaticon.com/512/3144/3144456.png';
  const carritoCompras = '../../../public/image/CardWidget/CardWidget2-removebg-preview.png';
  
  return (
    <div className={styles.card_widget_contarner}>
        <img src={carritoCompras} alt="Este es un carrito de compras" className={styles.carritoCompras} />
        <strong> 3 </strong>
    </div>
  );
}

export default CardWidget;
