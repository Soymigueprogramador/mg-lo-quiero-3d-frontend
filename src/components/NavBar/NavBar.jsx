import styles from './NavBar.module.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from '../CardWidget/CardWidget'

function BasicExample() {
  return (
    <Navbar expand="lg" className={styles.custom_navbar}>
      <Container>
        <Navbar.Brand className={styles.name_ecommerce}>MG lo quiero 3D</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={styles.links} href="../../page/Inicio/Inicio.jsx">Inicio</Nav.Link>
            <Nav.Link className={styles.links} href="../../page/Productos/Productos.jsx">Productos</Nav.Link>
            <Nav.Link className={styles.links} href="../../page/Contacto/Contacto.jsx">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CardWidget/>
    </Navbar>
  );
}

export default BasicExample;