import styles from './Image.module.scss'

const Image = () => {
    const images = [
      'https://tp3d.com.ar/1692-large_default/impresora-creality-ender-3-v2-neo-dytkit-fdm.jpg',
      'https://tiendaexo.com/media/catalog/product/1/2/1200x900_ml_baja_exo_3d_printerfab10-01.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=500&width=700&canvas=700:500',
      'https://www.tridilab.com.mx/cdn/shop/products/prusa-i3-mk3-tridicity-2_1024x1024@2x.jpg?v=1587507789'
    ];
    
    return (
      <div className={styles.image_container}>
        {images.map((src, index) => (
          <img className={styles.image} key={index} src={src} alt={`Impresora ${index + 1}`} />
        ))}
      </div>
    );
  }
  
export default Image;