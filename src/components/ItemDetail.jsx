import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {
  return (
    <div className="card">
      <h2>{producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
      <ItemCount />
    </div>
  );
};

export default ItemDetail;
