// Array con los productos.
export const productos = [
    { id: 1, nombre: 'Platos', precio: 10, stock: 10, image: '' },
    { id: 2, nombre: 'Basos', precio: 20, stock: 10, image: '' },
    { id: 3, nombre: 'Llaveros', precio: 30, stock: 10, image: '' },
    { id: 4, nombre: 'Juguetes', precio: 40, stock: 10, image: '' },
    { id: 5, nombre: 'muñecos', precio: 50, stock: 10, image: '' },
    { id: 6, nombre: 'Tazas', precio: 50, stock: 10, image: '' },
];

// Funcion que retorna una promesa.
export const getProductos = () => {
    return new Promise(( resolve ) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
};
// Funcion para que me devuelva solo un productos segun su ID
export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find( productos => productos.id === id );
            resolve(producto)
        })
    })
};

// Funcion para que re devuelva los productos segun su nombre
export const getProductoPorNombre = (nombre) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosNombre = productos.filter(producto => producto.nombre === nombre);
            resolve(productosNombre);
        }, 100);
    });
};

