import Card from 'react-bootstrap/Card';
import styles from './Presentation.module.scss'

function TextExample() {
  return (
    <Card className={styles.card_text_container}>
      <Card.Body className={styles.card_body}>
        <Card.Title className={styles.card_text}>MG lo quiero 3D</Card.Title>
        <Card.Subtitle className={styles.card_text}>¿Quiénes somos?</Card.Subtitle>
        <Card.Text className={styles.card_text}>
          Somos un emprendimiento dedicado a la impresión en 3D. <br />
          Actualmente, contamos con 3 máquinas para que puedas imprimir lo que desees. <br />
          Te invitamos a conocer todos nuestros productos disponibles en la sección de Productos. <br />
          Si tienes algún diseño listo para imprimir o necesitas algo que no esté en nuestro catálogo, no dudes en consultarnos mediante el formulario en la sección de Contacto. <br />
          ¡Gracias por visitar nuestra tienda online, esperamos poder ayudarte!
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TextExample;