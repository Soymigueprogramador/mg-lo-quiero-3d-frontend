import styles from './NavBar.module.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from '../CardWidget/CardWidget'
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar expand="lg" className={styles.custom_navbar}>
      <Container>
        <Navbar.Brand className={styles.name_ecommerce}>MG lo quiero 3D</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className={styles.links} to="/">Inicio</Link>
            <Link className={styles.links} to="/Productos">Productos</Link>
            <Link className={styles.links} to="/Contacto">Contacto</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CardWidget/>
    </Navbar>
  );
}

export default BasicExample;