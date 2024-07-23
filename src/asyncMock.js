// Array con los productos.
export const productos = [
    { id: 1, nombre: '', precio: 10, stock: 10, image: '' },
    { id: 2, nombre: '', precio: 20, stock: 10, image: '' },
    { id: 3, nombre: '', precio: 30, stock: 10, image: '' },
    { id: 4, nombre: '', precio: 40, stock: 10, image: '' },
    { id: 5, nombre: '', precio: 50, stock: 10, image: '' },
];

// Funcion que retorna una promesa.
export const getProductos = () => {
    return new Promise(( resolve ) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
};