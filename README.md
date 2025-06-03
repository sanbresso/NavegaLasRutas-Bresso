# 🛒 NavegaLasRutas-Bresso

**Entrega 2 del curso de React JS** — Proyecto e-commerce con navegación mediante React Router.

Este proyecto es una continuación directa de la primera entrega [`CreaTuLanding-Bresso`](https://github.com/sanbresso/CreaTuLanding-Bresso), integrando navegación entre rutas, filtros dinámicos y vistas en detalle para cada producto.

---

## 🚀 Funcionalidades implementadas

- 🧭 Navegación con React Router DOM
- 🗂️ Filtrado de productos por categoría mediante parámetros dinámicos (`/categoria/:categoryId`)
- 🔍 Vista en detalle de productos (`/item/:itemId`)
- 🧮 Componente contador para agregar unidades (`ItemCount`)
- 🔁 Simulación de Promises para obtener datos
- ⚠️ Página de error 404 para rutas inexistentes

---

## 📁 Estructura del proyecto

- `components/`: NavBar, CartWidget, Item, ItemList, ItemDetail, ItemCount
- `containers/`: ItemListContainer y ItemDetailContainer (manejan estado y efectos)
- `data/`: Productos simulados (`products.js`)
- `pages/`: Página NotFound
- `styles`: CSS modularizados por componente
- `index.html`: favicon personalizado con ícono de carrito 🛒

---

## 🛠️ Tecnologías utilizadas

- React JS
- React Router DOM
- Vite
- HTML + CSS