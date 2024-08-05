import Image from 'react-bootstrap/Image';
import styles from './Image.module.scss';

function FluidExample() {
  const images = [
    'https://tp3d.com.ar/1692-large_default/impresora-creality-ender-3-v2-neo-dytkit-fdm.jpg',
    'https://tiendaexo.com/media/catalog/product/1/2/1200x900_ml_baja_exo_3d_printerfab10-01.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=500&width=700&canvas=700:500',
    'https://static.wixstatic.com/media/d8609d_b7f6a74236e84763b1902d82f4fee0b5~mv2.jpg/v1/crop/x_305,y_33,w_989,h_748/fill/w_594,h_462,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Anycubic%20Kobra%20Go%20-%20Digitalz%203D%20-%2002%20-%20copia.jpg'
  ];
  
  return (
    <div className={styles.image_container}>
      {images.map((image, index) => (
        <Image className={styles.image} key={image} src={image} alt={`Impresora ${index + 1}`} fluid />
      ))}
    </div>
  );
}

export default FluidExample;
