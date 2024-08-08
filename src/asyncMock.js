// Array con los productos.
export const productos = [
    { id: 1, nombre: 'plato', precio: 10, stock: 10, idCategoria: '2', image: 'https://m.media-amazon.com/images/I/7167oDsZBsL.jpg' },
    { id: 2, nombre: 'baso', precio: 20, stock: 10, idCategoria: '2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzE3usXGF67qO_Wd0ogFcgyihQjkrY30yKjQ&s' },
    { id: 3, nombre: 'llavero', precio: 30, stock: 10, idCategoria: '1', image: 'https://dcdn.mitiendanube.com/stores/003/174/033/products/tiburones-articulados-9cm-fusion3d-211-80329fe9091ea2217216840956614259-1024-1024.jpg' },
    { id: 4, nombre: 'juguete', precio: 40, stock: 10, idCategoria: '3', image: 'https://www.3dnatives.com/es/wp-content/uploads/sites/4/Buggy.jpg' },
    { id: 5, nombre: 'muñeco', precio: 50, stock: 10, idCategoria: '3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQntevi_yPFLGH0yxBtYlpDTebNd7IHFlmTfw&s' },
    { id: 6, nombre: 'taza', precio: 50, stock: 10, idCategoria: '1', image: 'https://http2.mlstatic.com/D_Q_NP_972810-MLA46931453489_072021-O.webp' },
];

// Funcion que retorna una promesa.
export const getProductos = () => {
    return new Promise(( resolve ) => {
        setTimeout(() => {
            resolve(productos)
        }, 1000)
    })
};
// Funcion para que me devuelva solo un productos segun su ID
export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find( productos => productos.id === id );
            resolve(producto)
        })
    }, 1000)
};

// Funcion para buscar por categoria.
export const getProductoPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout(() => {
            const productoCategoria = productos.filter( producto => producto.idCategoria === idCategoria )
            resolve(productoCategoria)
        }, 1000)
    })
};

// Funcion para que re devuelva los productos segun su nombre
export const getProductoPorNombre = (nombre) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosNombre = productos.filter(producto => producto.nombre === nombre);
            resolve(productosNombre);
        }, 1000);
    });
};

// Funcion para buscar producto por mayor precio.
export const getProductoProMyorPrecio = (mayorPrecio) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productoPorMyorPrecio = productos.filter( producto => producto.mayorPrecio === mayorPrecio )
            resolve(productoPorMyorPrecio)
        }, 1000)
    })
};

// Funcion para buscar un producto por menor precio.
export const getProductoPorMenorPrecio = (menorPrecio) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosFiltrados = productos.filter(producto => producto.precio <= menorPrecio);
            resolve(productosFiltrados);
        }, 1000);
    });
};