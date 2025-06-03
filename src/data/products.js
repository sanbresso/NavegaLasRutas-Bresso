const productos = [
    { id: '1', nombre: 'Remera', precio: 2000, categoria: 'ropa' },
    { id: '2', nombre: 'Zapatilla', precio: 5000, categoria: 'calzado' },
    { id: '3', nombre: 'Campera', precio: 7500, categoria: 'ropa' },
    { id: '4', nombre: 'Sandalias', precio: 3000, categoria: 'calzado' },
    { id: '5', nombre: 'Buzo', precio: 4500, categoria: 'ropa' }
];

export const getProducts = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve(productos), 500);
    });

export const getProductById = (id) =>
    new Promise((resolve) => {
        setTimeout(() => resolve(productos.find((p) => p.id === id)), 500);
    });
