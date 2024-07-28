// Array con los productos.
export const productos = [
    { id: 1, nombre: 'Producto 1', precio: 10, stock: 10, image: '' },
    { id: 2, nombre: 'Producto 2', precio: 20, stock: 10, image: '' },
    { id: 3, nombre: 'Producto 3', precio: 30, stock: 10, image: '' },
    { id: 4, nombre: 'Producto 4', precio: 40, stock: 10, image: '' },
    { id: 5, nombre: 'Producto 5', precio: 50, stock: 10, image: '' },
];

// Funcion que retorna una promesa.
export const getProductos = () => {
    return new Promise(( resolve ) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
};
// Funcion para que me devuelva soo un productos segun su ID
export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find( productos => productos.id === id );
            resolve(producto)
        })
    })
};

// Funcion para que re devuelva los productos segun su categoria
export const getProductosPorCategorias = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout(() => {
            const productosCategorias = productos.find(productos => productos.idCategoria === idCategoria);
            resolve(productosCategorias)
        }, 100)
    })
};