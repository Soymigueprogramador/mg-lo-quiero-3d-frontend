import { useState } from 'react';
import { getProductoPorNombre } from '../../asyncMock'; 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import styles from '../Item/Item.module.scss'; 
import style from './Search.module.scss'; 

const Buscador = () => {
    const [nombre, setNombre] = useState('');
    const [resultados, setResultados] = useState([]);
    const [busquedaRealizada, setBusquedaRealizada] = useState(false);

    const buscarPorNombre = async () => {
        const productos = await getProductoPorNombre(nombre);
        setResultados(productos);
        setBusquedaRealizada(true);
    };

    return (
        <div className={style.search}>
            <div>
                <input
                    type="text"
                    placeholder="Buscar productos"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <button onClick={buscarPorNombre}>Buscar</button>
            </div>
            
            <div>
                {busquedaRealizada && (
                    resultados.length > 0 ? (
                        <div>
                            {resultados.map((producto) => (
                                <Card key={producto.id} style={{ width: "18rem" }}>
                                    <Card.Img
                                        variant="top"
                                        src={producto.image} 
                                        alt={producto.nombre}
                                    />
                                    <Card.Body>
                                        <h2 className={styles.text_card}>Nombre: {producto.nombre}</h2>
                                        <p className={styles.text_card}>ID: {producto.id}</p>
                                        <p className={styles.text_card}>Precio: ${producto.precio}</p>
                                        <p className={styles.text_card}>Stock: {producto.stock}</p>
                                        <Button as={Link} to={`/item/${producto.id}`} className={styles.btn_card}>
                                            Ver detalles
                                        </Button>
                                        <Button className={styles.btn_card}>Comprar ahora</Button>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <p className={style.alert}>Producto no encontrado</p>
                    )
                )}
            </div>
        </div>
    );
};

export default Buscador;