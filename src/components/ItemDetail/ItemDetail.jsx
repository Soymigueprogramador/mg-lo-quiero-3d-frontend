const ItemDetail = ({ img, nombre, id, precio, stock }) => {
    return (
      <div>
        <img src={img} alt={nombre} />
        <h2>Nombre: {nombre}</h2>
        <p>ID: {id}</p>
        <p>Precio: {precio}</p>
        <p>Stock: {stock}</p>
      </div>
    );
  };
  
  export default ItemDetail;